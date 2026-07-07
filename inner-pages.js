/* inner-pages.js — Contenido dinámico de páginas interiores */

const script  = document.currentScript;
const page    = script ? script.dataset.page : null;
if (!page) { console.warn('No data-page set'); }

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EXPORTACIÓN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function renderExportacion() {
  const el = document.getElementById('pg-exportacion');
  if (!el) return;
  el.innerHTML = `
<div class="inner-content">
 <div class="container">

  <div class="ip-section">
   <div class="exp-grid fade-in">
    <div>
     <p class="section-eyebrow">Infraestructura logística</p>
     <h2 class="section-title">Exportación Global</h2>
     <p class="body-text">Green Gold Enterprises FZCo opera una infraestructura logística de exportación construida durante más de dos décadas de operaciones internacionales. Gestionamos envíos por vía aérea y marítima hacia cualquier destino del mundo, bajo los términos EXW, FOB, CFR, CIF y DDP — para adaptarnos a la realidad logística y comercial de cada cliente.</p>
     <p class="body-text">A través de nuestra red de agentes de forwarding en múltiples países y nuestras cuentas corporativas con DHL, FedEx, USPS y Serpost, garantizamos que cada envío sea manejado con eficiencia, seguridad y total confidencialidad.</p>
     <div class="inco-row">
       <span class="inco-badge">EXW</span><span class="inco-badge">FOB</span><span class="inco-badge">CFR</span><span class="inco-badge">CIF</span><span class="inco-badge">DDP</span>
     </div>
     <div class="vol-box">
       <p class="vb-label">Sin barrera de entrada</p>
       <p class="vb-text">Desde una <strong>muestra de 50–100 gramos</strong> hasta <strong>contenedores completos</strong>. Una gran relación comercial comienza con una pequeña muestra.</p>
     </div>
    </div>
    <div>
     <div class="info-block fade-in">
       <h3 class="ib-title">🌎 Orígenes de Materia Prima</h3>
       <ul class="ib-list">
         <li>🇧🇷 Brasil</li><li>🇲🇽 México</li><li>🇵🇪 Perú</li>
         <li>🇵🇰 Pakistán</li><li>🇮🇩 Indonesia</li><li>🇮🇳 India</li>
       </ul>
     </div>
     <div class="info-block fade-in">
       <h3 class="ib-title">✈ Transportistas & Couriers</h3>
       <ul class="ib-list">
         <li>DHL Internacional</li><li>FedEx Internacional</li>
         <li>USPS (mercado USA)</li><li>Serpost (Perú)</li>
         <li>Red global de forwarding</li>
       </ul>
     </div>
     <div class="info-block fade-in">
       <h3 class="ib-title">📧 Contacto de Exportación</h3>
       <p class="ib-text"><a href="mailto:sales@greengoldenterprises.ae" style="color:var(--green);font-weight:600;">sales@greengoldenterprises.ae</a><br/>Juan Manuel Narvarte — Atención 365/24</p>
     </div>
    </div>
   </div>
  </div>

  <div class="ip-section fade-in">
   <div class="world-strip">
     <span class="ws-label">Presencia activa en más de 13 países en 4 continentes</span>
     <div class="ws-countries">
       <span>🇦🇪 UAE</span><span>🇺🇸 USA</span><span>🇵🇪 Perú</span><span>🇨🇦 Canadá</span>
       <span>🇲🇽 México</span><span>🇧🇷 Brasil</span><span>🇬🇧 UK</span><span>🇳🇱 Holanda</span>
       <span>🇨🇳 China</span><span>🇮🇳 India</span><span>🇵🇰 Pakistán</span><span>🇹🇭 Tailandia</span>
       <span>🇮🇩 Indonesia</span><span>🇫🇯 Fiji</span>
     </div>
   </div>
  </div>

 </div>
</div>`;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   INFRAESTRUCTURA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function renderInfraestructura() {
  const el = document.getElementById('pg-infraestructura');
  if (!el) return;
  el.innerHTML = `
<div class="inner-content">
 <div class="container">

  <div class="ip-section">
   <h2 class="ip-title fade-in">Sedes y Ubicaciones</h2>
   <div class="loc-grid">
    <div class="loc-card loc-card--featured fade-in">
      <div class="loc-flag">🇦🇪</div>
      <div>
        <span class="loc-label">SEDE PRINCIPAL</span>
        <p class="loc-name">Dubai, Emiratos Árabes Unidos</p>
        <span class="loc-addr">Building A1, Dubai Digital Park, Dubai Silicon Oasis, UAE</span>
        <p class="loc-desc">Nuestra sede en Dubai coordina toda la operación global desde uno de los centros empresariales más estratégicos del planeta, con ventajas tributarias y acceso directo a Asia y Europa.</p>
      </div>
    </div>
    <div class="loc-card fade-in">
      <div class="loc-flag">🇵🇪</div>
      <div>
        <span class="loc-label">PRODUCCIÓN PRINCIPAL</span>
        <p class="loc-name">Selva Amazónica, Perú</p>
        <span class="loc-addr">Carretera Federico Basadre Km 110 · San Alejandro, Pucallpa</span>
        <p class="loc-desc">322+ acres de tierra propia con cultivos orgánicos de plantas medicinales, cacao y café bajo estrictos estándares de agricultura ecológica.</p>
        <span class="loc-badge">322+ acres · 130+ ha</span>
      </div>
    </div>
    <div class="loc-card fade-in">
      <div class="loc-flag">🇵🇪</div>
      <div>
        <span class="loc-label">SIERRA ANDINA</span>
        <p class="loc-name">Andes, Perú</p>
        <span class="loc-addr">Cultivos de alta montaña</span>
        <p class="loc-desc">17+ acres dedicados al cultivo orgánico de diversas especies agrícolas, plantas medicinales y aromáticas. Sin uso de químicos sintéticos ni pesticidas.</p>
        <span class="loc-badge">17+ acres · 7+ ha</span>
      </div>
    </div>
    <div class="loc-card fade-in">
      <div class="loc-flag">🇵🇪</div>
      <div>
        <span class="loc-label">ALMACÉN & EMPAQUE</span>
        <p class="loc-name">Lima, Perú</p>
        <span class="loc-addr">~20,000 m² de almacenamiento</span>
        <p class="loc-desc">Punto de convergencia entre la producción del campo y la exportación al mundo. Empaque, etiquetado y preparación final — especialmente para mercados asiáticos.</p>
        <span class="loc-badge">4.94 acres · 20,000 m²</span>
      </div>
    </div>
    <div class="loc-card fade-in">
      <div class="loc-flag">🇺🇸</div>
      <div>
        <span class="loc-label">OFICINA COMERCIAL USA</span>
        <p class="loc-name">Palm Bay, Florida</p>
        <span class="loc-addr">Palm Bay, FL 32908-7649 · Tel: +1 305 785 1172</span>
        <p class="loc-desc">Base de operaciones para los mercados norteamericano y canadiense, con gestión de relaciones y coordinación de distribución y reexportación.</p>
      </div>
    </div>
    <div class="loc-card fade-in">
      <div class="loc-flag">🇺🇸</div>
      <div>
        <span class="loc-label">ALMACÉN & DISTRIBUCIÓN USA</span>
        <p class="loc-name">Bronson, Florida</p>
        <span class="loc-addr">Bronson, Florida 32621</span>
        <p class="loc-desc">Centro de almacenaje y distribución para los mercados norteamericano y canadiense. Disponibilidad inmediata de inventario y facilidad para reexportación.</p>
        <span class="loc-badge">20.67 acres</span>
      </div>
    </div>
   </div>
  </div>

  <div class="ip-section">
   <h2 class="ip-title fade-in">Equipos de Producción</h2>
   <div class="equip-grid">
    <div class="equip-card fade-in"><span class="eq-icon">⚙️</span><h4>Procesamiento Inicial</h4><p>Lavadoras industriales, mesas de selección y clasificación, cortadoras, picadoras y blanqueadoras.</p></div>
    <div class="equip-card fade-in"><span class="eq-icon">🌡️</span><h4>Secado</h4><p>Deshidratadoras industriales, secadores de bandejas, liofilizadores (secado por congelación) y secadores rotatorios.</p></div>
    <div class="equip-card fade-in"><span class="eq-icon">⚗️</span><h4>Extracción</h4><p>Destiladores por vapor, prensas en frío, extractores CO₂ supercrítico y sistemas con etanol y agua.</p></div>
    <div class="equip-card fade-in"><span class="eq-icon">🔄</span><h4>Concentración</h4><p>Evaporadores, atomizadores Spray Dryer, mezcladoras industriales y homogeneizadores.</p></div>
    <div class="equip-card fade-in"><span class="eq-icon">📦</span><h4>Envasado</h4><p>Envasadoras automáticas, empaquetadoras de té filtrante, embotelladores, selladoras y etiquetadoras.</p></div>
    <div class="equip-card fade-in"><span class="eq-icon">🧫</span><h4>Laboratorio Propio</h4><p>Control de calidad, prácticas universitarias y formulación farmacéutica. Las plantas son la madre de la medicina.</p></div>
   </div>
  </div>

  <div class="ip-section fade-in">
   <div class="future-box">
     <h3>🚀 Proyectos Futuros — San Alejandro, Amazonía</h3>
     <div class="future-grid">
       <div class="future-item">Planta procesadora y laboratorio agroindustrial con certificaciones HALAL, HACCP, KOSHER</div>
       <div class="future-item">Granjas piscícolas para crianza de paiche (Arapaima gigas) y otras especies acuícolas</div>
       <div class="future-item">Centro de investigación agrícola en alianza con universidades internacionales</div>
       <div class="future-item">Bungalows para turismo de naturaleza y conciencia ambiental</div>
     </div>
   </div>
  </div>

 </div>
</div>`;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CALIDAD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function renderCalidad() {
  const el = document.getElementById('pg-calidad');
  if (!el) return;
  el.innerHTML = `
<div class="inner-content">
 <div class="container">
  <div class="ip-section">
   <div class="cert-groups">
    <div class="cert-group fade-in">
      <p class="cg-title">Legales y de Origen</p>
      <div class="cert-badges">
        <span class="cert-badge cert-badge--active">✅ SERFOR</span>
        <span class="cert-badge cert-badge--active">✅ SENASA</span>
        <span class="cert-badge cert-badge--active">✅ Cert. de Origen</span>
        <span class="cert-badge cert-badge--active">✅ Cert. Libre Venta</span>
        <span class="cert-badge cert-badge--active">✅ Cert. Fitosanitario</span>
      </div>
    </div>
    <div class="cert-group fade-in">
      <p class="cg-title">Calidad e Inocuidad</p>
      <div class="cert-badges">
        <span class="cert-badge cert-badge--active">✅ BPM</span>
        <span class="cert-badge cert-badge--active">✅ HACCP</span>
        <span class="cert-badge cert-badge--active">✅ COA por lote</span>
        <span class="cert-badge cert-badge--active">✅ Cert. Microbiológico</span>
        <span class="cert-badge cert-badge--active">✅ Análisis Metales Pesados</span>
        <span class="cert-badge cert-badge--active">✅ Ficha Técnica</span>
      </div>
    </div>
    <div class="cert-group fade-in">
      <p class="cg-title">Comerciales</p>
      <div class="cert-badges">
        <span class="cert-badge cert-badge--active">✅ Fair Trade</span>
        <span class="cert-badge cert-badge--active">✅ Non-GMO</span>
        <span class="cert-badge cert-badge--active">✅ FDA Compliance</span>
      </div>
    </div>
    <div class="cert-group fade-in">
      <p class="cg-title">Documentos de Exportación</p>
      <div class="cert-badges">
        <span class="cert-badge cert-badge--active">✅ Factura Comercial</span>
        <span class="cert-badge cert-badge--active">✅ Packing List</span>
        <span class="cert-badge cert-badge--active">✅ Bill of Lading</span>
        <span class="cert-badge cert-badge--active">✅ Declaración Aduanera</span>
        <span class="cert-badge cert-badge--active">✅ Ficha Logística</span>
      </div>
    </div>
    <div class="cert-group fade-in">
      <p class="cg-title">En Proceso — Próximos objetivos</p>
      <div class="cert-badges">
        <span class="cert-badge cert-badge--pending">⏳ ISO 22000</span>
        <span class="cert-badge cert-badge--pending">⏳ Cert. Orgánica</span>
        <span class="cert-badge cert-badge--pending">⏳ HALAL</span>
        <span class="cert-badge cert-badge--pending">⏳ KOSHER</span>
        <span class="cert-badge cert-badge--pending">⏳ EFSA (Europa)</span>
      </div>
    </div>
   </div>
  </div>
  <div class="ip-section fade-in">
   <div class="fp-box">
     <p class="fp-title">Fair Play Agrícola — Nuestra Filosofía</p>
     <div class="fp-grid">
       <div class="fp-item"><span class="fp-ico">🌱</span><p>Fertilizantes orgánicos en lugar de químicos sintéticos</p></div>
       <div class="fp-item"><span class="fp-ico">💧</span><p>Uso responsable del agua en todas nuestras operaciones</p></div>
       <div class="fp-item"><span class="fp-ico">🔄</span><p>Rotación de cultivos para preservar la fertilidad del suelo</p></div>
       <div class="fp-item"><span class="fp-ico">♻️</span><p>Economía circular que elimina la quema de residuos</p></div>
     </div>
   </div>
  </div>
 </div>
</div>`;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   COTIZACIÓN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function renderCotizacion() {
  const el = document.getElementById('pg-cotizacion');
  if (!el) return;
  el.innerHTML = `
<div class="inner-content">
 <div class="container">
  <div class="ip-section">
   <div class="quote-wrap">
    <div class="quote-form-box fade-in">
      <form class="quote-form" id="quoteForm" novalidate>
        <div class="form-row">
          <div class="form-field"><label for="f-name">Nombre completo *</label><input type="text" id="f-name" placeholder="Su nombre" required /></div>
          <div class="form-field"><label for="f-co">Empresa / Organización</label><input type="text" id="f-co" placeholder="Nombre de su empresa" /></div>
        </div>
        <div class="form-row">
          <div class="form-field"><label for="f-country">País *</label><input type="text" id="f-country" placeholder="Su país" required /></div>
          <div class="form-field"><label for="f-email">Correo electrónico *</label><input type="email" id="f-email" placeholder="email@empresa.com" required /></div>
        </div>
        <div class="form-row">
          <div class="form-field"><label for="f-phone">Teléfono / WhatsApp *</label><input type="tel" id="f-phone" placeholder="+971 54 000 0000" required /></div>
          <div class="form-field"><label for="f-prod">Producto de interés *</label><input type="text" id="f-prod" placeholder="Nombre del producto" required /></div>
        </div>
        <div class="form-row">
          <div class="form-field"><label for="f-qty">Cantidad estimada</label><input type="text" id="f-qty" placeholder="ej: 50 kg, 1 tonelada, contenedor…" /></div>
          <div class="form-field"><label for="f-inco">Término de entrega preferido</label>
            <select id="f-inco"><option value="">Seleccionar…</option><option>EXW</option><option>FOB</option><option>CFR</option><option>CIF</option><option>DDP</option><option>Sin preferencia</option></select>
          </div>
        </div>
        <div class="form-field form-field--full"><label for="f-notes">Notas adicionales</label><textarea id="f-notes" rows="4" placeholder="Requerimientos especiales, certificaciones necesarias, especificaciones técnicas…"></textarea></div>
        <button type="submit" class="btn btn--gold btn--full" id="submitBtn">Enviar Solicitud de Cotización</button>
        <p class="form-note">Respuesta garantizada en menos de 24 horas por WhatsApp o email. Responsable: Juan Manuel Narvarte.</p>
      </form>
      <div class="form-success" id="formSuccess" hidden>
        <span class="fs-icon">✦</span>
        <h3>¡Solicitud enviada!</h3>
        <p>Juan Manuel Narvarte lo contactará en menos de 24 horas por WhatsApp o email.</p>
        <a href="https://wa.me/971543977454" target="_blank" rel="noopener" class="btn btn--gold">Contactar por WhatsApp ahora</a>
      </div>
    </div>
    <div class="fade-in">
      <div class="qs-card">
        <p class="qs-title">Contacto Directo</p>
        <div class="qs-item"><span class="qs-icon">💬</span><div><p class="qs-label">WhatsApp Principal</p><a href="https://wa.me/971543977454" class="qs-val" target="_blank" rel="noopener">+971 54 397 7454</a></div></div>
        <div class="qs-item"><span class="qs-icon">💬</span><div><p class="qs-label">WhatsApp Alternativo</p><a href="https://wa.me/971545947783" class="qs-val" target="_blank" rel="noopener">+971 54 594 7783</a></div></div>
        <div class="qs-item"><span class="qs-icon">📧</span><div><p class="qs-label">Email Comercial</p><a href="mailto:sales@greengoldenterprises.ae" class="qs-val">sales@greengoldenterprises.ae</a></div></div>
        <div class="qs-item"><span class="qs-icon">👤</span><div><p class="qs-label">Responsable</p><p class="qs-val">Juan Manuel Narvarte</p></div></div>
        <div class="qs-item"><span class="qs-icon">🕐</span><div><p class="qs-label">Disponibilidad</p><p class="qs-val">365 días · 24 horas · Todos los idiomas</p></div></div>
      </div>
      <a href="https://wa.me/971543977454?text=Hola%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n." target="_blank" rel="noopener" class="wa-btn">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Chatear por WhatsApp
      </a>
    </div>
   </div>
  </div>
 </div>
</div>`;

  /* Form submit */
  const form    = document.getElementById('quoteForm');
  const success = document.getElementById('formSuccess');
  const btn     = document.getElementById('submitBtn');
  if (form) form.addEventListener('submit', async e => {
    e.preventDefault();
    const req = form.querySelectorAll('[required]');
    let ok = true;
    req.forEach(f => { f.style.borderColor=''; if (!f.value.trim()) { f.style.borderColor='#e53e3e'; ok=false; } });
    if (!ok) return;
    btn.textContent = 'Enviando…'; btn.disabled = true;
    await new Promise(r => setTimeout(r,1200));
    const d = Object.fromEntries(new FormData(form));
    const msg = encodeURIComponent(`*Cotización — Green Gold Enterprises*\n\nNombre: ${d['f-name']||'—'}\nEmpresa: ${d['f-co']||'—'}\nPaís: ${d['f-country']||'—'}\nEmail: ${d['f-email']||'—'}\nTel: ${d['f-phone']||'—'}\nProducto: ${d['f-prod']||'—'}\nCantidad: ${d['f-qty']||'—'}\nIncoterm: ${d['f-inco']||'—'}\nNotas: ${d['f-notes']||'—'}`);
    window.open(`https://wa.me/971543977454?text=${msg}`,'_blank','noopener,noreferrer');
    form.hidden = true; success.removeAttribute('hidden');
  });
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CONTACTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function renderContacto() {
  const el = document.getElementById('pg-contacto');
  if (!el) return;
  el.innerHTML = `
<div class="inner-content">
 <div class="container">
  <div class="ip-section">
   <div class="contact-grid">
    <div class="contact-card contact-card--featured fade-in">
      <span class="cc-label">🇦🇪 SEDE PRINCIPAL</span>
      <p class="cc-place">Dubai, Emiratos Árabes Unidos</p>
      <p class="cc-addr">Building A1, Dubai Digital Park<br/>Dubai Silicon Oasis, Dubai, UAE</p>
      <div><a href="tel:+971543977454" class="cc-phone">+971 54 397 7454</a><a href="tel:+971545947783" class="cc-phone">+971 54 594 7783</a></div>
    </div>
    <div class="contact-card fade-in">
      <span class="cc-label">🇺🇸 OFICINA USA</span>
      <p class="cc-place">Palm Bay, Florida</p>
      <p class="cc-addr">Palm Bay, FL 32908-7649</p>
      <a href="tel:+13057851172" class="cc-phone">+1 305 785 1172</a>
    </div>
    <div class="contact-card fade-in">
      <span class="cc-label">🇺🇸 ALMACÉN USA</span>
      <p class="cc-place">Bronson, Florida</p>
      <p class="cc-addr">Bronson, Florida 32621<br/>20.67 acres de almacenamiento y distribución</p>
    </div>
    <div class="contact-card fade-in">
      <span class="cc-label">📧 EMAIL COMERCIAL</span>
      <p class="cc-place">sales@greengoldenterprises.ae</p>
      <p class="cc-addr">Respuesta garantizada en menos de 24 horas en todos los idiomas.</p>
      <a href="mailto:sales@greengoldenterprises.ae" class="btn btn--gold btn--sm" style="margin-top:12px;">Enviar Email</a>
    </div>
    <div class="contact-card fade-in">
      <span class="cc-label">💬 WHATSAPP</span>
      <p class="cc-place">Canal principal de atención</p>
      <p class="cc-addr">+971 54 397 7454<br/>+971 54 594 7783<br/>+1 305 785 1172</p>
      <a href="https://wa.me/971543977454" target="_blank" rel="noopener" class="btn btn--gold btn--sm" style="margin-top:12px;background:#25D366;">Chat WhatsApp</a>
    </div>
    <div class="contact-card fade-in">
      <span class="cc-label">🕐 DISPONIBILIDAD</span>
      <p class="cc-place">365 días · 24 horas</p>
      <p class="cc-addr">Sin importar en qué parte del mundo se encuentre, Juan Manuel Narvarte y nuestro equipo están listos para atender su requerimiento en cualquier idioma.</p>
    </div>
   </div>
  </div>
  <div class="ip-section fade-in" style="text-align:center;">
    <p style="font-family:var(--serif);font-size:22px;color:var(--green-dark);margin-bottom:8px;font-weight:700;">¿Prefiere escribirnos directamente?</p>
    <p style="color:var(--text2);margin-bottom:28px;">Cuéntenos su requerimiento y le respondemos en menos de 24 horas.</p>
    <a href="cotizacion.html" class="btn btn--gold">Ir al formulario de cotización</a>
  </div>
 </div>
</div>`;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DISPATCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const renderers = {
  exportacion:     renderExportacion,
  infraestructura: renderInfraestructura,
  calidad:         renderCalidad,
  cotizacion:      renderCotizacion,
  contacto:        renderContacto,
};

if (page && renderers[page]) {
  renderers[page]();
  /* Re-run fade observer after content injected */
  const io2 = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io2.unobserve(e.target); } }),
    { threshold: 0.07 }
  );
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 10) * 0.06}s`;
    io2.observe(el);
  });
}
