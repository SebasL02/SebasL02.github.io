/* =============================================
   cotizacion.js — Formulario → WhatsApp + Google Sheets
   
   INSTRUCCIONES DE CONFIGURACIÓN:
   1. Ve a https://sheets.google.com → crea una hoja nueva
   2. Nómbrala "Cotizaciones Green Gold"
   3. Ve a Extensiones → Apps Script
   4. Pega el código de APPS_SCRIPT.gs (incluido abajo como comentario)
   5. Despliega como Web App → Ejecutar como: Yo → Acceso: Cualquiera
   6. Copia la URL del Web App y reemplaza GOOGLE_SCRIPT_URL abajo
   ============================================= */

/* ─────────────────────────────────────────────
   ▼ REEMPLAZA ESTA URL con la de tu Apps Script
   ───────────────────────────────────────────── */
const GOOGLE_SCRIPT_URL = 'TU_URL_AQUI';
/* ─────────────────────────────────────────────
   ▲ FIN DE CONFIGURACIÓN
   ───────────────────────────────────────────── */

const form    = document.getElementById('quoteForm');
const success = document.getElementById('formSuccess');
const btn     = document.getElementById('submitBtn');

if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();

    /* ── Validación ── */
    const required = form.querySelectorAll('[required]');
    let ok = true;
    required.forEach(f => {
      f.style.borderColor = '';
      if (!f.value.trim()) { f.style.borderColor = '#e53e3e'; ok = false; }
    });
    if (!ok) return;

    /* ── Recoger datos ── */
    const vals = {
      nombre:   document.getElementById('f-name')?.value.trim()    || '—',
      empresa:  document.getElementById('f-co')?.value.trim()      || '—',
      pais:     document.getElementById('f-country')?.value.trim() || '—',
      email:    document.getElementById('f-email')?.value.trim()   || '—',
      telefono: document.getElementById('f-phone')?.value.trim()   || '—',
      producto: document.getElementById('f-prod')?.value.trim()    || '—',
      cantidad: document.getElementById('f-qty')?.value.trim()     || '—',
      incoterm: document.getElementById('f-inco')?.value           || '—',
      notas:    document.getElementById('f-notes')?.value.trim()   || '—',
      fecha:    new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' }),
      origen:   window.location.hostname || 'greengoldenterprises.ae',
    };

    /* ── Estado del botón ── */
    const origText = btn.textContent;
    btn.textContent = '⏳ Enviando…';
    btn.disabled = true;

    /* ── 1. Guardar en Google Sheets (en paralelo) ── */
    let sheetOk = false;
    if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== 'TU_URL_AQUI') {
      try {
        const res = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Apps Script requiere no-cors
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(vals),
        });
        sheetOk = true;
      } catch (err) {
        console.warn('Google Sheets no disponible:', err);
      }
    }

    /* ── 2. Guardar localmente como backup (localStorage) ── */
    try {
      const existing = JSON.parse(localStorage.getItem('gg_cotizaciones') || '[]');
      existing.push({ ...vals, id: Date.now() });
      localStorage.setItem('gg_cotizaciones', JSON.stringify(existing));
    } catch(_) {}

    /* ── 3. Abrir WhatsApp ── */
    const msg = encodeURIComponent(
      `*🌿 Cotización — Green Gold Enterprises FZCo*\n\n` +
      `👤 *Nombre:* ${vals.nombre}\n` +
      `🏢 *Empresa:* ${vals.empresa}\n` +
      `🌍 *País:* ${vals.pais}\n` +
      `📧 *Email:* ${vals.email}\n` +
      `📱 *Teléfono:* ${vals.telefono}\n` +
      `🌿 *Producto:* ${vals.producto}\n` +
      `📦 *Cantidad:* ${vals.cantidad}\n` +
      `🚢 *Incoterm:* ${vals.incoterm}\n` +
      `📝 *Notas:* ${vals.notas}\n\n` +
      `🕐 ${vals.fecha}`
    );
    window.open(`https://wa.me/971543977454?text=${msg}`, '_blank', 'noopener,noreferrer');

    /* ── 4. Mostrar éxito ── */
    form.hidden = true;
    success.removeAttribute('hidden');

    /* Botón reset por si regresan */
    setTimeout(() => {
      btn.textContent = origText;
      btn.disabled = false;
    }, 4000);
  });
}

/* ═══════════════════════════════════════════════
   EXPORTAR REGISTROS LOCALES A EXCEL (backup)
   Llamar desde consola: exportCotizaciones()
═══════════════════════════════════════════════ */
window.exportCotizaciones = function() {
  const data = JSON.parse(localStorage.getItem('gg_cotizaciones') || '[]');
  if (!data.length) { alert('No hay cotizaciones guardadas localmente.'); return; }

  const cols = ['fecha','nombre','empresa','pais','email','telefono','producto','cantidad','incoterm','notas','origen'];
  const header = cols.join('\t');
  const rows   = data.map(r => cols.map(c => (r[c] || '').toString().replace(/\t/g,' ')).join('\t'));
  const tsv    = [header, ...rows].join('\n');

  const blob = new Blob(['\uFEFF' + tsv], { type: 'text/tab-separated-values;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `cotizaciones_greengold_${new Date().toISOString().slice(0,10)}.xls`;
  a.click();
  URL.revokeObjectURL(url);
};

/*
═══════════════════════════════════════════════════════════════
  CÓDIGO PARA GOOGLE APPS SCRIPT
  (pegar en https://script.google.com → nuevo proyecto)
═══════════════════════════════════════════════════════════════

function doPost(e) {
  try {
    const data   = JSON.parse(e.postData.contents);
    const sheet  = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Crear encabezados si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Fecha', 'Nombre', 'Empresa', 'País', 'Email',
        'Teléfono', 'Producto', 'Cantidad', 'Incoterm', 'Notas', 'Origen'
      ]);
      // Formato del encabezado
      const header = sheet.getRange(1, 1, 1, 11);
      header.setFontWeight('bold');
      header.setBackground('#0D2B1A');
      header.setFontColor('#D4A017');
    }
    
    // Agregar fila con los datos
    sheet.appendRow([
      data.fecha    || '',
      data.nombre   || '',
      data.empresa  || '',
      data.pais     || '',
      data.email    || '',
      data.telefono || '',
      data.producto || '',
      data.cantidad || '',
      data.incoterm || '',
      data.notas    || '',
      data.origen   || '',
    ]);
    
    // Autoajustar columnas
    sheet.autoResizeColumns(1, 11);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Green Gold Enterprises — Cotizaciones API activa')
    .setMimeType(ContentService.MimeType.TEXT);
}

═══════════════════════════════════════════════════════════════
*/
