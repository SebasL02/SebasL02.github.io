# 📊 Configuración: Guardar cotizaciones en Google Sheets → Excel
## Green Gold Enterprises FZCo

---

## ¿Cómo funciona?

Cada vez que alguien llena el formulario de cotización ocurren **3 cosas en paralelo**:

1. ✅ Los datos se guardan en **Google Sheets** (tu Excel en la nube)
2. 📱 Se abre **WhatsApp** con el mensaje preformateado
3. 💾 Se guarda una copia de seguridad en el **localStorage** del navegador

---

## PASO 1 — Crear la hoja de Google Sheets

1. Ve a [https://sheets.google.com](https://sheets.google.com)
2. Crea una hoja nueva → ponle el nombre que quieras
3. La primera vez que llegue un formulario, **los encabezados se crean solos** con formato dorado/verde

---

## PASO 2 — Instalar el Apps Script

1. En la hoja de Google Sheets, ve a **Extensiones → Apps Script**
2. Se abre el editor de código
3. **Borra todo** el código que aparece por defecto
4. Abre el archivo `APPS_SCRIPT.gs` (incluido en la carpeta) y **copia todo el contenido**
5. Pégalo en el editor de Apps Script
6. Presiona **Ctrl+S** para guardar

---

## PASO 3 — Publicar como Web App

1. Clic en el botón **"Implementar"** (arriba a la derecha)
2. Selecciona **"Nueva implementación"**
3. Configura así:
   - **Tipo:** Aplicación web
   - **Ejecutar como:** Yo (tu cuenta de Google)
   - **Acceso:** Cualquier usuario (incluso anónimos)
4. Clic en **"Implementar"**
5. Google te pedirá autorizar permisos → acepta todo
6. **Copia la URL** que aparece. Tiene este formato:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

---

## PASO 4 — Conectar con el formulario

1. Abre el archivo `cotizacion.js`
2. Busca esta línea al principio:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'TU_URL_AQUI';
   ```
3. Reemplaza `'TU_URL_AQUI'` por la URL que copiaste:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. Guarda el archivo

---

## PASO 5 — Verificar que funciona

1. Abre tu página de cotización en el navegador
2. Llena el formulario con datos de prueba
3. Abre tu Google Sheet → deberías ver la fila con los datos

Para confirmar que el script está activo, también puedes abrir la URL del Web App directamente en el navegador — te responderá con `{"status":"activo", ...}`.

---

## Exportar a Excel (.xlsx)

**Opción A — Desde Google Sheets:**
- Archivo → Descargar → Microsoft Excel (.xlsx)

**Opción B — Desde el navegador (backup local):**
- Abre la consola del navegador (F12)
- Escribe: `exportCotizaciones()`
- Se descarga automáticamente un archivo `.xls` con todos los registros guardados localmente

---

## Columnas del Excel

| Columna | Descripción |
|---|---|
| Fecha | Fecha y hora del envío (hora Lima/Dubai) |
| Nombre | Nombre completo del contacto |
| Empresa | Empresa u organización |
| País | País de origen del cliente |
| Email | Correo electrónico |
| Teléfono | Teléfono o WhatsApp |
| Producto | Producto de interés |
| Cantidad | Cantidad estimada |
| Incoterm | Término de entrega preferido |
| Notas | Observaciones adicionales |
| Origen | Dominio del sitio web (trazabilidad) |

---

## Notificaciones por email (opcional)

En el archivo `APPS_SCRIPT.gs` hay una función comentada `notificarPorEmail()`.
Si quieres recibir un email cada vez que llegue una cotización, descomenta esa sección y edita el email de destino.

---

## Soporte

Si el script no funciona, verifica:
- ✅ El acceso está configurado como "Cualquier usuario"
- ✅ La URL copiada es exactamente la del paso de implementación
- ✅ Autorizaste todos los permisos de Google

Para actualizar el script después de cambios: **Implementar → Administrar implementaciones → Editar → Nueva versión → Implementar**
