# EcoCycle - Landing modernizada

Esta entrega actualiza el repositorio HTML/CSS/JS existente; no reemplaza la aplicación móvil React/Supabase.

## Ejecución

Abra `index.html` con un servidor estático (por ejemplo, `python -m http.server 8000`) o publique el contenido de esta carpeta en GitHub Pages. No requiere npm.

## Cambios

- Portada con ilustración de los seis guardianes de `assets/personajes/`.
- Selector dinámico, accesible y responsive de seis guardianes en `personajes.js`.
- Iconos oficiales de `assets/Iconos_EcoCycle/`, asociados por nombre real.
- Se mantienen las secciones existentes de beneficios, cómo funciona, preguntas frecuentes y el formulario incrustado de HubSpot.
- Se mantienen los fragmentos de GA4, GTM, Contentsquare y evento FAQ original.
- No se agregan retos ni autenticación ficticia.

## Optimización responsive e interacción

- El menú móvil funciona como panel desplegable, se cierra con Escape, al pulsar un enlace o al cambiar a escritorio, y mantiene `aria-expanded` sincronizado.
- El selector de guardianes conserva las seis tarjetas; en anchos reducidos permite desplazamiento táctil con ajuste de tarjeta, flechas y puntos de navegación. La selección actualiza la ilustración, el material, el icono oficial y el contenido educativo.
- Las secciones con `.fade-in` aparecen mediante `IntersectionObserver`, con aparición escalonada de tarjetas y alternativa visible cuando el API no está disponible.
- Los botones y tarjetas tienen microinteracciones discretas; el perfil y las pestañas educativas cambian con transiciones breves, y el FAQ conserva su expansión animada.
- Se adaptaron portada, perfil, pestañas, secciones, formulario y pie de página para pantallas pequeñas; se mantienen los anchos de contenido dentro del viewport.
- Las pestañas educativas y el FAQ exponen estados ARIA; los enlaces y el carrusel respetan `prefers-reduced-motion`.
- No se modificaron catálogos educativos ni imágenes; se conservaron las etiquetas, IDs de medición y scripts de GA4, GTM, Contentsquare y HubSpot. Los IDs de navegación y FAQ se añadieron para accesibilidad.

## Verificación local

- Se revisó la página en navegador a 320, 360, 375, 390, 414, 430, 768, 1024, 1366, 1440 y 1920 px; no se detectó desbordamiento horizontal. Se inspeccionaron visualmente capturas de móvil (320 px), tableta (768 px) y escritorio (1440 px).
- Se comprobó abrir/cerrar el menú, cierre con Escape, navegación al siguiente guardián, unicidad de IDs FAQ, estados accesibles del acordeón, evento `faq_open`, los seis guardianes y los seis iconos de materiales.
- Se emuló `prefers-reduced-motion` y se confirmó el desplazamiento sin animación.
- Estas comprobaciones no envían el formulario ni verifican eventos en GA4/GTM/Contentsquare; las integraciones requieren pruebas en el sitio publicado y sus herramientas de proveedor.

## Integraciones que requieren validación en el sitio publicado

- HubSpot portal `51220906`, formulario `b1123906-57da-47a0-b343-14e0c8cef845`: comprobar carga y envío con consentimiento y datos de prueba.
- GA4 `G-Q0MK3Q2HMB` y GTM `GTM-P527D79D`: revisar con Tag Assistant que no se duplique `page_view` (depende de la configuración externa de GTM).
- Contentsquare: validar con las herramientas de red y panel del proveedor.
- Encuesta: no se identificó URL ni implementación en el ZIP original del landing. Pendiente recibir su enlace o código antes de poder integrarla.
- El alojamiento y la política CSP pueden condicionar recursos de terceros.

## Archivos nuevos

- `personajes.js`: catálogo y selector dinámico.
- `assets/personajes/`: ilustraciones originales proporcionadas.
- `assets/Iconos_EcoCycle/`: seis iconos proporcionados.
- `assets/ecocycle-logo.png` y `assets/ecocycle-symbol.png`: imágenes corporativas proporcionadas.

## Publicar en GitHub

Copie el contenido completo sobre el repositorio (mantenga las rutas), revise el diff en una rama, pruebe el sitio y abra un pull request. No incluya archivos privados ni credenciales.

## Limitaciones

No se ejecutaron pruebas end-to-end contra servicios externos ni se modificó el repositorio remoto. La imagen de portada usa la ilustración grupal suministrada, no la imagen de referencia generada. Los textos educativos son orientativos: consulte la aceptación específica en cada punto de recolección.
