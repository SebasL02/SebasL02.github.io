/**
 * =============================================
 * APPS_SCRIPT.gs
 * Green Gold Enterprises FZCo — Cotizaciones
 * =============================================
 *
 * INSTRUCCIONES DE INSTALACIÓN:
 * ─────────────────────────────────────────────
 * 1. Ve a https://sheets.google.com
 * 2. Crea una hoja nueva → nómbrala "Cotizaciones Green Gold"
 * 3. Menú: Extensiones → Apps Script
 * 4. Borra el código de ejemplo y pega TODO este archivo
 * 5. Guarda (Ctrl+S)
 * 6. Clic en "Implementar" → "Nueva implementación"
 *    - Tipo: Aplicación web
 *    - Ejecutar como: Yo (tu cuenta Google)
 *    - Acceso: Cualquier usuario (incluso anónimos)
 * 7. Autoriza los permisos cuando te lo pida
 * 8. Copia la URL que aparece (algo como:
 *    https://script.google.com/macros/s/XXXXXXXX/exec)
 * 9. Abre cotizacion.js y reemplaza:
 *    const GOOGLE_SCRIPT_URL = 'TU_URL_AQUI';
 *    por:
 *    const GOOGLE_SCRIPT_URL = 'https://script.google.com/...';
 * ─────────────────────────────────────────────
 */

// Columnas del Excel
const COLUMNS = [
  'Fecha', 'Nombre', 'Empresa', 'País', 'Email',
  'Teléfono', 'Producto', 'Cantidad', 'Incoterm', 'Notas', 'Origen'
];

// Mapeo campo JSON → columna
const FIELD_MAP = [
  'fecha', 'nombre', 'empresa', 'pais', 'email',
  'telefono', 'producto', 'cantidad', 'incoterm', 'notas', 'origen'
];

/**
 * Recibe los datos del formulario (POST desde el sitio web)
 */
function doPost(e) {
  try {
    const data  = JSON.parse(e.postData.contents);
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    let sheet   = ss.getSheetByName('Cotizaciones');

    // Crear hoja si no existe
    if (!sheet) {
      sheet = ss.insertSheet('Cotizaciones');
    }

    // Crear encabezados si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      crearEncabezados(sheet);
    }

    // Agregar fila con los datos
    const row = FIELD_MAP.map(f => data[f] || '');
    sheet.appendRow(row);

    // Ajustar ancho de columnas (solo cada 10 entradas para no frenar)
    if (sheet.getLastRow() % 10 === 0) {
      sheet.autoResizeColumns(1, COLUMNS.length);
    }

    // Colorear filas alternas para mejor lectura
    const lastRow  = sheet.getLastRow();
    const rowRange = sheet.getRange(lastRow, 1, 1, COLUMNS.length);
    if (lastRow % 2 === 0) {
      rowRange.setBackground('#F0F8F0');
    }

    // Respuesta OK
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'ok',
        fila:   lastRow,
        nombre: data.nombre || '—'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('Error doPost: ' + err.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        status:  'error',
        mensaje: err.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * GET — verificar que el script está activo
 */
function doGet(e) {
  const ss       = SpreadsheetApp.getActiveSpreadsheet();
  const sheet    = ss.getSheetByName('Cotizaciones');
  const total    = sheet ? Math.max(0, sheet.getLastRow() - 1) : 0;

  return ContentService
    .createTextOutput(JSON.stringify({
      status:  'activo',
      empresa: 'Green Gold Enterprises FZCo',
      total:   total + ' cotizaciones registradas'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Crea la fila de encabezados con formato
 */
function crearEncabezados(sheet) {
  sheet.appendRow(COLUMNS);

  const header = sheet.getRange(1, 1, 1, COLUMNS.length);
  header.setFontWeight('bold');
  header.setBackground('#0D2B1A');   // Verde oscuro Green Gold
  header.setFontColor('#D4A017');    // Dorado Green Gold
  header.setFontSize(11);
  header.setHorizontalAlignment('center');

  // Anchos personalizados (en píxeles)
  const widths = [150, 160, 160, 100, 220, 140, 180, 120, 90, 280, 130];
  widths.forEach((w, i) => sheet.setColumnWidth(i + 1, w));

  // Fijar fila de encabezado
  sheet.setFrozenRows(1);
}

/**
 * Envía un email de notificación al responsable cada vez que llega una cotización
 * (OPCIONAL — descomenta si quieres recibir emails)
 */
/*
function notificarPorEmail(data) {
  const EMAIL_DESTINO = 'sales@greengoldenterprises.ae';

  const cuerpo = `
Nueva cotización recibida en Green Gold Enterprises FZCo

Fecha:     ${data.fecha}
Nombre:    ${data.nombre}
Empresa:   ${data.empresa}
País:      ${data.pais}
Email:     ${data.email}
Teléfono:  ${data.telefono}
Producto:  ${data.producto}
Cantidad:  ${data.cantidad}
Incoterm:  ${data.incoterm}
Notas:     ${data.notas}
Origen:    ${data.origen}
  `.trim();

  MailApp.sendEmail({
    to:      EMAIL_DESTINO,
    subject: `🌿 Nueva cotización: ${data.nombre} — ${data.producto}`,
    body:    cuerpo,
  });
}
*/
