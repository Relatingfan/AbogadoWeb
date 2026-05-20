GC Global Consultores — Product Requirements Document  |  v1.0  |  2026

**GC GLOBAL CONSULTORES**

Sitio Web — Landing Page para Asesoramiento Jurídico

**PRODUCT REQUIREMENTS DOCUMENT (PRD)**

Versión 1.0  |  Mayo 2026

*Confidencial — Uso Interno*

# **1. Contexto del Proyecto**

## **1.1 Resumen Ejecutivo**

GC Global Consultores es un despacho de asesoramiento jurídico integral con presencia en México. El objetivo de este PRD es definir con precisión todos los requisitos funcionales, no funcionales, de contenido y de negocio necesarios para construir una landing page de conversión que reemplace o complemente la presencia digital actual del despacho.

Este documento es la fuente de verdad para el equipo de desarrollo, diseño y cliente. Cualquier cambio de alcance debe reflejarse aquí con versionado.

## **1.2 Stakeholders**

| **Cliente / Sponsor** | GC Global Consultores (representante legal del despacho) |
| --- | --- |
| **Product Owner** | Por definir — responsable de aprobar entregas |
| **Diseño UI/UX** | Equipo de diseño asignado — sigue las guías del PDD |
| **Desarrollo Frontend** | Equipo de ingeniería — implementa los requisitos de este PRD |
| **SEO / Marketing** | Responsable de estructura de contenido y métricas |
| **Usuarios Finales** | Prospectos con necesidades legales en México |

## **1.3 Alcance del Proyecto**

**DENTRO del alcance:**

- Landing page de una sola página (single-page) con secciones bien definidas.

- Formulario de contacto funcional con notificación por email.

- Animaciones de scroll (scroll-driven video + parallax + reveal animations).

- Diseño responsive para mobile, tablet y desktop.

- Integración básica de Google Analytics 4.

- Optimización SEO básica (meta tags, schema markup, sitemap).

**FUERA del alcance (v1.0):**

- Blog, portal de clientes, o área de login.

- Chat en vivo o chatbot.

- Sistema de gestión de casos o CRM.

- Traducciones a otros idiomas.

# **2. Usuarios y Casos de Uso**

## **2.1 Perfiles de Usuario (Personas)**

| **Persona A — El Empresario** | Hombre/Mujer 35–55 años. Dueño de PYME o empresa mediana en México. Busca asesoría corporativa, fiscal o laboral. Visita el sitio desde desktop en horario de oficina. Necesita transmisión de confianza y profesionalismo inmediatos. |
| --- | --- |
| **Persona B — El Particular** | Adulto 25–45 años. Situación personal o familiar que requiere apoyo legal (divorcio, herencia, conflicto laboral). Busca desde mobile, puede ser referido. Necesita sentir que el despacho es humano y accesible. |
| **Persona C — El Corporativo Internacional** | Ejecutivo o empresa extranjera que requiere asesoría legal en México. Valora la presencia profesional y credenciales. Buscará en inglés posiblemente. Decisión de alto valor económico. |

## **2.2 Casos de Uso Primarios**

| **CU-01** | El usuario llega al sitio, lee el hero, hace clic en 'Solicitar Consulta' y llena el formulario. |
| --- | --- |
| **CU-02** | El usuario navega a la sección de servicios, identifica su necesidad legal y hace clic en el CTA de esa sección. |
| **CU-03** | El usuario baja hasta el footer y llama directamente al número de teléfono. |
| **CU-04** | El usuario llega desde redes sociales (Instagram/LinkedIn) y explora el sitio antes de decidir contactar. |
| **CU-05** | El usuario escanea el sitio en mobile en menos de 60 segundos y guarda el número de WhatsApp. |

# **3. Requisitos Funcionales**

## **3.1 Navegación**

| **ID** | **Descripción del Requisito** | **Prioridad** | **Criterio de Aceptación** |
| --- | --- | --- | --- |
| **RF-01** | El navbar debe contener logo, links de ancla y botón CTA visible en todo momento. | **CRÍTICO** | *El botón CTA es clickeable en todas las resoluciones desde 320px.* |
| **RF-02** | Al hacer scroll > 80px, el navbar debe cambiar a fondo semitransparente con blur. | **ALTO** | *El fondo aparece en ≤ 100ms después del threshold de scroll.* |
| **RF-03** | En mobile (< 768px), el navbar debe colapsar en menú hamburger. | **CRÍTICO** | *El menú abre/cierra con animación en ≤ 300ms. Todos los links son accesibles.* |
| **RF-04** | Al hacer clic en un link de navegación, la página hace smooth scroll a la sección. | **ALTO** | *La sección destino llega al viewport con easing suave. No hay parpadeo.* |

## **3.2 Hero y Video de Scroll**

| **ID** | **Descripción del Requisito** | **Prioridad** | **Criterio de Aceptación** |
| --- | --- | --- | --- |
| **RF-05** | El hero ocupa el 100% del viewport (100vh) con video de fondo. | **CRÍTICO** | *El video cubre completamente el área sin barras negras en 16:9 y móvil.* |
| **RF-06** | El video avanza proporcionalmente al scroll del usuario (scroll-driven). | **ALTO** | *El video avanza frame a frame sin saltos en Chrome/Firefox/Safari desktop.* |
| **RF-07** | En mobile, el video es reemplazado por imagen estática de alta resolución. | **CRÍTICO** | *La imagen carga en ≤ 2s en conexión 4G.* |
| **RF-08** | El hero debe contener: headline, subheadline y mínimo 1 botón CTA. | **CRÍTICO** | *Los 3 elementos son legibles (contraste ≥ 4.5:1) sobre el video.* |
| **RF-09** | El headline debe animarse al cargar (clip-path reveal o similar). | **MEDIO** | *La animación completa en ≤ 1.2s. No bloquea la interacción del usuario.* |

## **3.3 Sección de Servicios**

| **ID** | **Descripción del Requisito** | **Prioridad** | **Criterio de Aceptación** |
| --- | --- | --- | --- |
| **RF-10** | Mostrar mínimo 6 áreas de práctica en formato de grid. | **CRÍTICO** | *Las 6 tarjetas son visibles sin scroll horizontal.* |
| **RF-11** | Cada tarjeta debe tener: ícono, título y descripción. | **CRÍTICO** | *La descripción puede estar oculta por defecto y revelarse al hover/tap.* |
| **RF-12** | Cada tarjeta debe tener un enlace o CTA hacia el formulario. | **ALTO** | *El CTA de tarjeta ancla al formulario con smooth scroll.* |

## **3.4 Formulario de Contacto**

| **ID** | **Descripción del Requisito** | **Prioridad** | **Criterio de Aceptación** |
| --- | --- | --- | --- |
| **RF-13** | El formulario debe tener: Nombre, Teléfono, Email, Área de consulta (select), Mensaje. | **CRÍTICO** | *Todos los campos son visibles y usables en mobile.* |
| **RF-14** | Validación frontend en tiempo real: email válido, campos requeridos. | **CRÍTICO** | *Los errores se muestran inline bajo el campo sin recargar la página.* |
| **RF-15** | Al enviar exitosamente, mostrar mensaje de confirmación sin recargar. | **CRÍTICO** | *El mensaje de confirmación es visible en ≤ 500ms post-envío.* |
| **RF-16** | El formulario debe enviar los datos a un email del despacho. | **CRÍTICO** | *El email llega en ≤ 2 minutos con todos los campos del formulario.* |
| **RF-17** | Incluir botón/link de WhatsApp como alternativa de contacto. | **ALTO** | *El link abre WhatsApp Web o app con número pre-configurado.* |
| **RF-18** | El formulario debe tener protección anti-spam (honeypot o reCAPTCHA). | **MEDIO** | *El spam bot no puede enviar el formulario.* |

## **3.5 Animaciones y Scroll Experience**

| **ID** | **Descripción del Requisito** | **Prioridad** | **Criterio de Aceptación** |
| --- | --- | --- | --- |
| **RF-19** | Los contadores estadísticos deben animarse (0 → valor) al entrar al viewport. | **ALTO** | *La animación dura entre 1.5s y 2s con easing. Solo se ejecuta una vez.* |
| **RF-20** | Las tarjetas de servicios aparecen en cascada (stagger) al entrar al viewport. | **ALTO** | *El stagger entre tarjetas es de 80–120ms. No hay re-triggers al hacer scroll inverso.* |
| **RF-21** | Debe existir al menos una sección con efecto parallax o scroll cinematográfico. | **ALTO** | *El efecto es fluido (≥ 30fps) en hardware promedio (Laptop 2020+).* |
| **RF-22** | El cursor personalizado debe implementarse en desktop (≥ 1024px). | **BAJO** | *El cursor sigue al mouse sin lag perceptible. Se oculta en mobile/touch.* |
| **RF-23** | Todas las animaciones deben desactivarse con prefers-reduced-motion: reduce. | **CRÍTICO** | *En modo de movimiento reducido, los elementos aparecen sin transición.* |

# **4. Requisitos No Funcionales**

## **4.1 Performance**

| **ID** | **Descripción del Requisito** | **Prioridad** | **Criterio de Aceptación** |
| --- | --- | --- | --- |
| **RNF-01** | Largest Contentful Paint (LCP) ≤ 3.0 segundos en desktop. | **CRÍTICO** | *Medido con Google PageSpeed Insights en condición **'**Fast 3G**'**.* |
| **RNF-02** | LCP ≤ 4.5 segundos en mobile. | **CRÍTICO** | *Medido con PageSpeed en condición móvil simulada.* |
| **RNF-03** | Cumulative Layout Shift (CLS) < 0.1. | **ALTO** | *No hay saltos de contenido durante la carga.* |
| **RNF-04** | Total Blocking Time (TBT) < 200ms. | **ALTO** | *El hilo principal no se bloquea durante más de 200ms.* |
| **RNF-05** | El video hero tiene peso máximo de 8MB (formato WebM). | **ALTO** | *Verificado con Lighthouse. Se provee fallback MP4.* |
| **RNF-06** | Las imágenes usan formato WebP con fallback JPEG. | **MEDIO** | *Todas las imágenes del sitio usan **<**picture**>** o srcset.* |

## **4.2 Compatibilidad de Navegadores**

| **ID** | **Descripción del Requisito** | **Prioridad** | **Criterio de Aceptación** |
| --- | --- | --- | --- |
| **RNF-07** | Soporte completo en Chrome 110+, Firefox 110+, Safari 16+, Edge 110+. | **CRÍTICO** | *Las funcionalidades principales están operativas en todos los browsers listados.* |
| **RNF-08** | Degradación elegante en browsers que no soporten CSS scroll-driven. | **ALTO** | *Las animaciones de scroll se omiten sin romper el layout ni la funcionalidad.* |
| **RNF-09** | Soporte en iOS Safari 16+ y Chrome Android 110+. | **CRÍTICO** | *El sitio es usable y los CTAs son accesibles en ambas plataformas.* |

## **4.3 Accesibilidad**

| **ID** | **Descripción del Requisito** | **Prioridad** | **Criterio de Aceptación** |
| --- | --- | --- | --- |
| **RNF-10** | Conformidad WCAG 2.1 nivel AA. | **ALTO** | *Auditoría con Axe o Lighthouse Accessibility ≥ 90.* |
| **RNF-11** | Navegación completa por teclado (Tab, Enter, Esc). | **ALTO** | *Se puede acceder y enviar el formulario usando solo teclado.* |
| **RNF-12** | Atributos ARIA en elementos dinámicos (menú, modal, slider). | **ALTO** | *Screen reader (NVDA/VoiceOver) anuncia correctamente el estado de los componentes.* |
| **RNF-13** | Todos los controles interactivos tienen un área de toque ≥ 44×44px. | **CRÍTICO** | *Ningún botón ni link tiene área de toque inferior al mínimo en mobile.* |

## **4.4 SEO**

| **ID** | **Descripción del Requisito** | **Prioridad** | **Criterio de Aceptación** |
| --- | --- | --- | --- |
| **RNF-14** | Meta title y meta description únicos y descriptivos. | **CRÍTICO** | *El meta title tiene 50–60 caracteres; la meta description 120–160 caracteres.* |
| **RNF-15** | Schema.org markup de tipo LegalService implementado. | **ALTO** | *Google Rich Results Test valida el markup sin errores.* |
| **RNF-16** | Sitemap XML y robots.txt generados y accesibles. | **ALTO** | *Ambos archivos retornan HTTP 200. El sitemap está registrado en Search Console.* |
| **RNF-17** | Todas las imágenes tienen atributo alt descriptivo. | **ALTO** | *Auditoría Lighthouse no reporta imágenes sin alt.* |
| **RNF-18** | El sitio usa HTTPS con certificado válido. | **CRÍTICO** | *Ninguna solicitud HTTP sin SSL. HSTS habilitado.* |

## **4.5 Seguridad**

| **ID** | **Descripción del Requisito** | **Prioridad** | **Criterio de Aceptación** |
| --- | --- | --- | --- |
| **RNF-19** | Headers de seguridad HTTP configurados (CSP, X-Frame-Options, etc.). | **ALTO** | *Security Headers Score ≥ B en securityheaders.com.* |
| **RNF-20** | No se almacenan datos personales del formulario en el frontend. | **CRÍTICO** | *Los datos se envían directamente al servicio de email y no persisten en localStorage.* |
| **RNF-21** | El sitio no carga scripts de terceros sin consentimiento del usuario (GDPR básico). | **MEDIO** | *Los scripts de analytics cargan solo después de aceptar cookies si la región lo requiere.* |

# **5. Requisitos de Contenido**

## **5.1 Textos que Debe Proveer el Cliente**

El cliente (GC Global Consultores) debe proveer los siguientes contenidos antes de iniciar el desarrollo de cada sección:

| **Hero — Headline** | Frase de impacto de 4–8 palabras que defina la propuesta de valor principal. |
| --- | --- |
| **Hero — Subheadline** | 1–2 oraciones que expandan el headline (máximo 20 palabras). |
| **Credenciales** | Números exactos: años de experiencia, casos resueltos, clientes atendidos, tasa de éxito. |
| **Áreas de práctica** | Nombre y descripción (máximo 40 palabras) de cada área de práctica ofrecida. |
| **Descripción del equipo** | Foto profesional, nombre completo, cédula profesional, breve bio (máximo 60 palabras). |
| **Testimonios** | Mínimo 3 testimonios de clientes. Nombre (puede ser iniciales), texto (máximo 80 palabras). |
| **Compromiso ambiental** | Texto de 30–50 palabras sobre las acciones o valores ambientales del despacho. |
| **Datos de contacto** | Teléfono, email, WhatsApp, dirección física, horarios de atención. |
| **Aviso de privacidad** | Documento legal de política de privacidad (puede ser template adaptado). |
| **Redes sociales** | URLs exactas de LinkedIn, Instagram y cualquier otra red activa. |

## **5.2 Activos Visuales que Debe Proveer el Cliente**

- Logo en formato vectorial (SVG o AI/EPS) en versión oscura y clara.

- Video hero: 15–30 segundos, resolución mínima 1920×1080, formato MP4/MOV. Si no se cuenta con video propio, se usará material de stock legal.

- Fotografías profesionales del equipo: fondo neutro, alta resolución (mínimo 1000×1000px).

- Fotografías adicionales del despacho o de contexto legal (opcional, puede usarse stock).

## **5.3 Contenido que el Equipo de Desarrollo Puede Proveer (Stock/Generado)**

- Video hero de stock (si el cliente no tiene): licencia Pexels o Pixabay, filtro de color oscuro aplicado.

- Fotografías de contexto: balanza, estatua de la justicia, manos firmando, etc. — stock libre de derechos.

- Iconos de áreas de práctica: biblioteca Phosphor Icons (MIT license).

- Placeholder de texto para áreas de práctica hasta recibir textos finales del cliente.

# **6. Plan de Trabajo y Entregables**

## **6.1 Fases del Proyecto**

| **Fase 1 — Descubrimiento** | 1 semana: Brief con el cliente, recolección de activos, aprobación de paleta y tipografía. |
| --- | --- |
| **Fase 2 — Diseño** | 1.5 semanas: Wireframes en Figma (desktop + mobile), aprobación del cliente, diseño visual completo. |
| **Fase 3 — Desarrollo** | 2 semanas: Maquetación HTML/CSS/JS o Astro, implementación de animaciones GSAP, integración de formulario. |
| **Fase 4 — QA y Revisión** | 3 días: Pruebas en todos los browsers, validación de performance, corrección de bugs. |
| **Fase 5 — Entrega** | 1 día: Deploy en Vercel/Netlify, configuración de dominio, entrega de accesos. |
| **Total estimado** | ~5.5 semanas desde el inicio hasta el lanzamiento. |

## **6.2 Criterios de Aceptación del Proyecto**

- El sitio es accesible en el dominio final con HTTPS activo.

- El formulario de contacto envía emails correctamente a la dirección del despacho.

- El sitio pasa el test de Google PageSpeed Insights con puntaje ≥ 85 en desktop y ≥ 70 en mobile.

- Las animaciones de scroll funcionan correctamente en Chrome, Firefox y Safari.

- El diseño coincide con las guías del PDD y fue aprobado por el cliente.

- No existen errores de consola JavaScript en producción.

- El markup de Schema.org pasa la validación de Google Rich Results Test.

## **6.3 Proceso de Aprobación de Cambios**

Cualquier solicitud de cambio fuera del alcance definido en la sección 1.3 de este documento debe:

- Ser documentada por escrito (email o mensaje con evidencia).

- Ser evaluada por el equipo de desarrollo en términos de tiempo y costo adicional.

- Ser aprobada por el Product Owner antes de comenzar.

- Reflejarse en una nueva versión de este PRD (v1.1, v1.2, etc.).

# **7. Riesgos e Impedimentos**

| **R-01 — Falta de activos del cliente** | El cliente no entrega el video hero o fotos a tiempo. Mitigación: usar material de stock mientras se recibe el material final. |
| --- | --- |
| **R-02 — Performance del video scroll** | El video scroll-driven puede causar jank en hardware antiguo. Mitigación: implementar fallback de imagen estática y detectar fps con requestAnimationFrame. |
| **R-03 — Compatibilidad Safari** | Las CSS scroll-driven animations tienen soporte limitado en Safari < 18. Mitigación: usar GSAP ScrollTrigger como polyfill. |
| **R-04 — Aprobaciones lentas del cliente** | Retrasos en la revisión de diseño pueden extender el timeline. Mitigación: definir máximo 2 rondas de revisión por fase con SLA de 48h para feedback. |
| **R-05 — Cambio de alcance tardío** | Solicitudes de nuevas secciones o funcionalidades en fase de desarrollo. Mitigación: este PRD como contrato de alcance. Cambios = nueva orden de trabajo. |

## **7.1 Supuestos**

- El cliente tiene o puede obtener un dominio .mx o .com para el sitio.

- El cliente proveerá todos los textos finales antes del inicio de Fase 3.

- No se requiere backend propio; el formulario usará Formspree o servicio equivalente.

- El sitio es en español únicamente para v1.0.