# Handoff - GC Global Consultores

Este documento resume el estado actual del proyecto de la landing page de GC Global Consultores, las últimas implementaciones realizadas y los pasos a seguir.

## Estado del Proyecto

El desarrollo se ha enfocado en la implementación del diseño frontend en Astro 4.x siguiendo estrictamente el System Prompt (`AGENTS.md`), optimizando la experiencia móvil, el rendimiento y la integración del contacto.

## Últimas Implementaciones

### 1. Funcionalidad de Contacto (WhatsApp)
- **Generación dinámica**: El formulario de contacto de `ContactSection.astro` ahora toma los datos ingresados por el usuario (Nombre, Área de interés y Mensaje/Situación) para construir un mensaje predefinido.
- **Áreas de Práctica**: Se integraron los servicios correctos al menú desplegable del formulario: Asesoría Jurídica, Juicios Penales, Juicios civiles, Juicios Laborales, Juicios Familiares, Juicios Mercantiles, Pólizas de Laborales & Pruebas psicolaborales.
- **Redirección**: Al enviar el formulario, el usuario es redirigido a la API de WhatsApp (`wa.me`) hacia el número de contacto principal (`+52 449 215 0600`).
- **Feedback UI**: Se agregó un sistema de notificaciones (toast/popup) que confirma el envío exitoso antes de abrir WhatsApp o notifica de posibles errores de validación, sin necesidad de recargar la página ni usar `alert()`.

### 2. Optimización para Dispositivos Móviles
- **Rendimiento**: Se deshabilitaron las animaciones basadas en scroll (Parallax, animaciones complejas de GSAP) exclusivamente en resoluciones móviles, garantizando una carga más rápida, menor uso de CPU y cumpliendo con las pautas de rendimiento estipuladas.
- **Navbar Responsivo**: Se ajustó el comportamiento del menú de navegación superior en móviles. Ahora cuenta con un fondo oscuro 100% opaco (`bg-bg`) desde el momento de carga, garantizando la perfecta legibilidad del logotipo y del botón de menú hamburguesa sobre cualquier contenido o hero background. Además, las clases de altura (`py-6` a `py-4`) fueron corregidas en JS para ajustarse a las necesidades responsivas.

## Aspectos Técnicos Relevantes

- **Astro & Estilos**: Todo el estilado utiliza clases de utilidad y variables CSS nativas (`--color-bg`, `--color-primary`, etc.). Las excepciones en Tailwind son estrictamente para estructura (Grid/Flexbox) y utilidades rápidas (paddings, márgenes, colores).
- **Islas de Interactividad**: Los scripts nativos del cliente para animaciones de navbar y el formulario mantienen `client:idle` o se inyectan en etiquetas `<script>` estándar de Astro sin frameworks de React/Vue, reduciendo el peso de JS al mínimo.
- **GSAP**: Las transiciones complejas en el desktop continúan operando con `gsap` y `ScrollTrigger`, las cuales degradan de forma elegante bajo reglas `@media (prefers-reduced-motion: reduce)` o breakpoints móviles.

## Siguientes Pasos (Pendientes)

De acuerdo a los criterios de `DONE` y la sección de contenido de `AGENTS.md`, quedan las siguientes tareas generales antes de la entrega final:

1. **Reemplazo de Placeholders**: Integrar los textos definitivos, números exactos (para la sección de credenciales) e imágenes en alta resolución proporcionadas por el cliente.
2. **SEO y Accesibilidad**: Verificar las etiquetas meta descriptivas en las páginas y asegurar un Score de accesibilidad ≥ 90 en Lighthouse, incluyendo compatibilidad por teclado para el nuevo componente del formulario.
3. **Auditoría de Performance**: Realizar pruebas finales en Google PageSpeed Insights ("Fast 3G") para confirmar que las métricas TBT, CLS y LCP están dentro del límite aprobado (Score ≥ 85 desktop / ≥ 70 mobile).
4. **Despliegue Final**: Asegurar un entorno HTTPS estable (Vercel o Netlify) y verificar los encabezados HTTP (Security Headers).

---
*Fin del Handoff*
