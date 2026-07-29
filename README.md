# EcoCycle

Landing page responsive para una iniciativa digital que promueve el reciclaje mediante un sistema de ecopuntos, recompensas y beneficios para los usuarios.

El proyecto integra diseño frontend, interacción con JavaScript, captura de registros mediante HubSpot Forms y medición de eventos mediante Google Tag Manager.
[![Ver proyecto](https://img.shields.io/badge/Ver%20proyecto-EcoCycle-2ea44f?style=for-the-badge&logo=github)](https://megasara-25.github.io/Landig-Ecocycle/)

## Descripción

EcoCycle busca incentivar prácticas sostenibles permitiendo que los usuarios registren materiales reciclables, acumulen ecopuntos y accedan a diferentes recompensas.

La landing page presenta el funcionamiento de la iniciativa, sus beneficios, testimonios, preguntas frecuentes y un formulario de registro.

El objetivo principal del proyecto es ofrecer una experiencia clara, atractiva y orientada a la conversión de visitantes en usuarios registrados.

## Funcionalidades

* Diseño responsive.
* Menú de navegación para dispositivos móviles.
* Navegación mediante enlaces internos.
* Desplazamiento suave entre secciones.
* Sección principal con llamados a la acción.
* Explicación del funcionamiento de EcoCycle.
* Presentación de beneficios.
* Sección de testimonios.
* Preguntas frecuentes mediante acordeón.
* Formulario de registro integrado con HubSpot.
* Validación administrada mediante HubSpot Forms.
* Integración de iconos mediante Lucide Icons.
* Registro de interacciones mediante `dataLayer`.
* Medición de apertura de preguntas frecuentes.
* Identificación de botones principales para analítica.
* Diseño visual orientado a sostenibilidad.

## Tecnologías y herramientas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![HubSpot](https://img.shields.io/badge/HubSpot-FF7A59?style=for-the-badge\&logo=hubspot\&logoColor=white)
![Google Tag Manager](https://img.shields.io/badge/Google%20Tag%20Manager-246FDB?style=for-the-badge\&logo=googletagmanager\&logoColor=white)

## Conceptos aplicados

* Diseño responsive.
* Maquetación semántica con HTML5.
* Estilos con CSS3.
* Manipulación del DOM.
* Manejo de eventos.
* Menú móvil.
* Scroll suave.
* Componentes desplegables.
* Integración de formularios externos.
* Personalización visual de formularios.
* Seguimiento de eventos frontend.
* Uso de `window.dataLayer`.
* Optimización de llamados a la acción.

## Estructura del proyecto

```text
Landig-Ecocycle/
├── index.html
├── style.css
├── script.js
├── recursos/
└── README.md
```

La estructura puede variar según las imágenes y recursos almacenados en el repositorio.

## Instalación y ejecución

### Clonar el repositorio

```bash
git clone https://github.com/Megasara-25/Landig-Ecocycle.git
cd Landig-Ecocycle
```

Después, abre el archivo `index.html` en un navegador.

Para una mejor experiencia de desarrollo, puedes utilizar la extensión Live Server de Visual Studio Code.

## Integración con HubSpot

El formulario de registro utiliza HubSpot Forms mediante un script externo.

```html
<script src="https://js.hsforms.net/forms/embed/PORTAL_ID.js" defer></script>
```

La integración permite:

* Capturar información de usuarios.
* Gestionar validaciones.
* Centralizar registros.
* Conectar la landing page con herramientas de marketing y CRM.

Para reutilizar el proyecto en otra cuenta de HubSpot, es necesario reemplazar:

* `data-form-id`
* `data-portal-id`
* La región configurada en `data-region`

## Medición de eventos

El proyecto utiliza `window.dataLayer` para registrar interacciones relevantes.

Ejemplo:

```javascript
window.dataLayer = window.dataLayer || [];

window.dataLayer.push({
    event: "faq_open",
    faq_name: "materiales"
});
```

Este evento permite medir cuándo un usuario abre una pregunta frecuente.

También se asignaron identificadores a diferentes llamados a la acción para facilitar su seguimiento mediante Google Tag Manager.

## Uso

1. El usuario ingresa a la landing page.
2. Consulta la propuesta de EcoCycle.
3. Revisa el funcionamiento y los beneficios.
4. Interactúa con las preguntas frecuentes.
5. Accede al formulario de registro.
6. Envía su información mediante HubSpot.
7. Las principales interacciones pueden ser registradas mediante Google Tag Manager.

## Estado del proyecto

Proyecto frontend funcional en etapa académica.

La landing page incluye integración con servicios externos. Su funcionamiento completo depende de la disponibilidad y configuración del formulario de HubSpot.

## Mejoras futuras

* Publicar el proyecto mediante GitHub Pages.
* Agregar una política de privacidad funcional.
* Mejorar la accesibilidad del formulario.
* Incorporar atributos ARIA.
* Optimizar imágenes.
* Aplicar carga diferida a recursos visuales.
* Agregar eventos adicionales de conversión.
* Implementar medición con Google Analytics 4.
* Mejorar la estructura SEO.
* Incorporar pruebas de rendimiento.
* Crear una versión con React.
* Integrar una API para consultar ecopuntos.

## Aprendizajes obtenidos

Con este proyecto fortalecí mis conocimientos en construcción de landing pages, diseño responsive, manipulación del DOM e integración de herramientas externas.

También aprendí a conectar formularios de HubSpot y a preparar eventos de interacción para su medición mediante Google Tag Manager.

## Autora

**Sara Valeria Patarroyo Alba**

Estudiante de Tecnología en Desarrollo de Software y desarrolladora frontend en formación.

* GitHub: [Megasara-25](https://github.com/Megasara-25)
* LinkedIn: [Sara Valeria Patarroyo Alba](https://www.linkedin.com/in/sara-valeria-891625186/)
* Correo: [spatarroyoalba@gmail.com](mailto:spatarroyoalba@gmail.com)

## Licencia

Este proyecto fue desarrollado con fines educativos y académicos.
