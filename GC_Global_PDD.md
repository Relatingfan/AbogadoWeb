GC Global Consultores — Product Design Document    v1.0 | 2026

**GC GLOBAL CONSULTORES**

Sitio Web — Landing Page para Asesoramiento Jurídico

**PRODUCT DESIGN DOCUMENT (PDD)**

Versión 1.0  |  Mayo 2026

*Confidencial — Uso Interno*

# **1. Visión del Proyecto**

## **1.1 Descripción General**

GC Global Consultores requiere una landing page de alto impacto diseñada para convertir visitantes en clientes potenciales. El sitio debe proyectar elegancia, autoridad legal y confianza institucional, diferenciándose de la competencia mediante una experiencia visual inmersiva con animaciones de scroll y efectos cinematográficos.

## **1.2 Problema que Resuelve**

- Los potenciales clientes no encuentran una presencia digital que inspire la confianza necesaria para un despacho jurídico.

- La falta de un CTA (Call-To-Action) claro genera pérdida de leads valiosos.

- La identidad visual actual no se comunica efectivamente en medios digitales.

## **1.3 Objetivos de Diseño**

- Proyectar autoridad legal e impecabilidad institucional.

- Generar conversiones mediante CTAs estratégicamente posicionados.

- Crear una experiencia de scroll cinematográfica que sorprenda y retenga al usuario.

- Reflejar la identidad verde y blanca de GC Global Consultores.

- Diferenciarse visualmente de despachos jurídicos tradicionales con un diseño de vanguardia.

## **1.4 Métricas de Éxito**

| **Tasa de conversión** | ≥ 3% de visitantes que contactan al despacho |
| --- | --- |
| **Tiempo en sitio** | ≥ 2:30 minutos promedio por sesión |
| **Bounce rate** | ≤ 45% en desktop, ≤ 55% en mobile |
| **Carga inicial** | ≤ 3 segundos (LCP) en conexión estándar |
| **Accesibilidad** | WCAG 2.1 nivel AA mínimo |

# **2. Identidad Visual y Sistema de Diseño**

## **2.1 Dirección Artística**

La dirección estética del sitio se define como: Luxury Legal Dark — un editorial sofisticado de fondo oscuro (casi negro) con acentos verdes precisos, tipografía serif para jerarquía principal y tipografía geométrica delgada para cuerpo de texto. La inspiración visual proviene de despachos internacionales de primera línea como Skadden, Clifford Chance y Cleary Gottlieb.

## **2.2 Paleta de Colores**

Los colores a continuación están prohibidos o son de uso restringido: gradientes azul-púrpura, paletas saturadas de bajo contraste.

| **Negro Profundo (Fondo)** | #0D0D0D — Fondo principal de todas las secciones hero |
| --- | --- |
| **Verde Institucional** | #2A6B2A — Color primario del logo GC, acentos y CTAs |
| **Verde Claro** | #4CAF50 — Hover states, elementos secundarios activos |
| **Blanco Hueso** | #F2EFE9 — Texto principal, headings sobre fondos oscuros |
| **Gris Platino** | #B0ADA8 — Texto de cuerpo secundario, subtítulos |
| **Verde Oscuro** | #1A3E1A — Fondos de tarjetas, separadores sutiles |
| **Dorado Tenue (acento)** | #C9A84C — Líneas decorativas de lujo, iconos selectos |

## **2.3 Tipografía**

Toda la tipografía proviene de Google Fonts para garantizar rendimiento y licenciamiento libre.

| **Display / Hero** | Cormorant Garamond — Serif clásica con cuerpo elegante. Uso: headings principales, nombre del despacho, frases de impacto. Pesos: 300, 400, 600 Italic. |
| --- | --- |
| **Títulos de Sección** | Playfair Display — Serif de alta contraste con personalidad editorial. Uso: H2 y H3 de secciones de contenido. Pesos: 400, 700. |
| **Cuerpo / UI** | DM Sans — Sans-serif geométrica moderna y legible. Uso: párrafos, labels, navegación, botones. Pesos: 300, 400, 500. |
| **Detalles / Datos** | Josefin Sans — Sans-serif art déco con carácter. Uso: estadísticas, counters, labels en mayúsculas, metadata. Solo uppercase, peso 300. |

**Escala tipográfica sugerida:**

| **H1 Hero** | Cormorant Garamond 300 — 96–120px desktop / 48–64px mobile |
| --- | --- |
| **H2 Sección** | Playfair Display 400 — 48–64px desktop / 32px mobile |
| **H3 Subsección** | Playfair Display 700 — 28–32px |
| **Body Large** | DM Sans 300 — 18–20px, line-height 1.75 |
| **Body Regular** | DM Sans 400 — 16px, line-height 1.65 |
| **Labels / Caps** | Josefin Sans 300 uppercase — 11–13px, letter-spacing 0.2em |

## **2.4 Iconografía y Elementos Gráficos**

- Iconos de línea delgada (stroke 1px), estilo outline. Biblioteca sugerida: Phosphor Icons o Heroicons.

- Separadores: líneas horizontales de 1px en dorado tenue (#C9A84C) al 30% de opacidad.

- Elementos decorativos: caracteres griegos o símbolos de balanza integrados como watermark en baja opacidad.

- Texturas: grain overlay sutil al 3–5% de opacidad sobre fondos oscuros para evitar la sensación plana.

- Formas: rectángulos de esquinas rectas (0px border-radius) que refuerzan la formalidad. Solo los botones CTA pueden llevar bordes de 2px.

# **3. Arquitectura de Contenido y Estructura de Secciones**

## **3.1 Mapa de Secciones**

| **Sección 0** | NAVBAR — Logo, navegación anclada, botón CTA primario |
| --- | --- |
| **Sección 1** | HERO — Video de fondo + headline de impacto + CTA |
| **Sección 2** | CREDENCIALES — Números clave del despacho (años, casos, clientes) |
| **Sección 3** | ÁREAS DE PRÁCTICA — Grid de especialidades legales |
| **Sección 4** | DIFERENCIADORES — Por qué GC Global Consultores |
| **Sección 5** | EQUIPO — Presentación del abogado/socios principales |
| **Sección 6** | TESTIMANOS — Opiniones de clientes |
| **Sección 7** | MEDIO AMBIENTE — Compromiso social y sustentabilidad |
| **Sección 8** | PROCESO — Cómo funciona trabajar con el despacho |
| **Sección 9** | CTA FINAL — Formulario de contacto flotante + mapa |
| **Sección 10** | FOOTER — Datos de contacto, redes, aviso legal |

## **3.2 Descripción Detallada de Secciones**

### **HERO (Sección 1)**

Tipo: Fullscreen con video de fondo. El video muestra imágenes abstractas de una ciudad de noche, una balanza, manos firmando contratos — filmados en blanco y negro o tonos muy oscuros. Conforme el usuario hace scroll, el video avanza fotograma a fotograma (técnica scroll-driven video playback con requestAnimationFrame). El headline aparece con una animación de split-text al cargar la página. CTA principal: 'Solicitar Consulta' en verde institucional.

### **CREDENCIALES (Sección 2)**

Fila de 4 contadores animados que incrementan al entrar al viewport. Ejemplos: 'XX+ Años de Experiencia', 'XXX Casos Resueltos', 'XX Áreas de Especialización', 'XX% Tasa de Éxito'. Fondo oscuro con separadores dorados.

### **ÁREAS DE PRÁCTICA (Sección 3)**

Grid de 3×2 tarjetas. Al hover, la tarjeta se expande ligeramente y aparece un párrafo de descripción. Cada tarjeta tiene un ícono de línea delgada. Las áreas incluyen: Asesoramiento Jurídico Integral, Derecho Ambiental, Derecho Corporativo, Derecho Laboral, Litigio Civil, Consultoría Fiscal.

### **SECCIÓN DE SCROLL CINEMATOGRÁFICO**

Entre la sección 3 y 4 se implementa una secuencia de scroll-driven donde un elemento (la estatua de la Justicia, o una imagen conceptual) hace parallax o se revela en capas conforme el usuario desliza hacia abajo. Usa position: sticky con transformaciones CSS dependientes de la posición de scroll. Duración visual equivalente a 300–400px de scroll.

# **4. Sistema de Animaciones y Scroll Experience**

## **4.1 Tecnologías de Animación**

| **Scroll-driven video** | JavaScript nativo: currentTime = scrollPercent * video.duration, sincronizado con IntersectionObserver y requestAnimationFrame |
| --- | --- |
| **Parallax** | CSS scroll-driven animations (nativas) o GSAP ScrollTrigger |
| **Text reveals** | GSAP SplitText + ScrollTrigger. Alternativa: CSS animation-timeline |
| **Contadores** | Vanilla JS con easing cuadrático al entrar al viewport |
| **Hover effects** | CSS transitions 200–350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) |
| **Page transitions** | CSS View Transitions API o Barba.js para navegación sin recarga |
| **Cursor personalizado** | Canvas cursor con halo verde que sigue al mouse en desktop |

## **4.2 Mapa de Animaciones por Sección**

| **Navbar** | Aparece con fade-in al cargar. Al scroll ≥ 80px: fondo oscuro semitransparente + backdrop-blur. |
| --- | --- |
| **Hero** | Headline entra con clip-path reveal de izquierda a derecha. Subheadline fade-in con delay 0.4s. CTA scale-in con delay 0.8s. Video de fondo avanza con scroll. |
| **Credenciales** | Cada contador empieza en 0 y sube hasta el valor final en 1.8s al entrar al viewport. Separadores dorados se dibujan de izquierda a derecha con stroke-dashoffset. |
| **Áreas de práctica** | Las 6 tarjetas aparecen en cascada (stagger 0.1s) desde abajo con opacity + translateY. |
| **Scroll cinematográfico** | Elemento central (imagen legal) hace scale de 0.7 a 1.0 + parallax vertical mientras scroll progresa. |
| **Equipo** | Foto del abogado aparece con un reveal de cortina vertical. Nombre se escribe con efecto typewriter. |
| **Testimonios** | Slider horizontal con transición de opacity. Citas en Cormorant Garamond italic 300. |
| **CTA Final** | Formulario entra desde la derecha con slide-in. Botón de envío tiene efecto ripple en verde. |

## **4.3 Consideraciones de Performance**

- Usar will-change: transform solo en elementos activamente animados, eliminarlo después.

- Comprimir video hero a WebM + MP4 fallback. Máximo 8MB para la versión comprimida.

- Lazy-load todo lo que esté below the fold usando IntersectionObserver.

- Reducir animaciones si el usuario tiene prefers-reduced-motion: reduce.

- Usar CSS contain: layout paint para secciones con animaciones complejas.

# **5. Componentes de Interfaz**

## **5.1 Navbar**

- Posición: fixed, z-index 1000.

- Inicial: fondo completamente transparente, logo blanco, links blancos.

- Al hacer scroll: fondo rgba(13,13,13,0.92) con backdrop-filter: blur(12px).

- Logo: GC Consultores a la izquierda.

- Links: Inicio · Servicios · Nosotros · Contacto (anclas).

- CTA: Botón 'Consulta Gratuita' — border 1px verde, fondo transparente → hover: fondo verde, texto blanco.

## **5.2 Botones CTA**

| **Primario** | Fondo verde #2A6B2A, texto blanco, padding 16px 40px, font DM Sans 500, letra-spacing 0.05em. Hover: fondo #1A4A1A, transform scale(1.02). |
| --- | --- |
| **Secundario** | Borde 1px #2A6B2A, fondo transparente, texto blanco. Hover: fondo rgba(42,107,42,0.15). |
| **Ghost / Link** | Sin borde, texto verde con subrayado animado (pseudoelemento ::after que se expande al hover). |

## **5.3 Formulario de Contacto**

- Campos: Nombre completo, Teléfono, Email, Área de consulta (dropdown), Mensaje.

- Estilo: inputs con fondo transparente, borde inferior 1px gris. Al focus: borde inferior verde, label sube con transición.

- Botón submit: CTA primario full-width con ícono de flecha.

- Validación en tiempo real con mensajes de error inline (sin alerts de browser).

- Integrar con servicio de email (Formspree, EmailJS, o endpoint propio).

## **5.4 Cards de Servicios**

- Fondo: #111 con borde 1px rgba(255,255,255,0.08).

- Ícono: outline verde en la parte superior.

- Título: Playfair Display 400 24px.

- Descripción: DM Sans 300 16px, oculta por defecto, visible al hover (altura animada).

- Hover: borde cambia a verde, ícono rota 5 grados, fondo oscurece.

# **6. Diseño Responsive y Accesibilidad**

## **6.1 Breakpoints**

| **Mobile S** | 320px — Layout de 1 columna, tipografía reducida, hero sin video (imagen estática) |
| --- | --- |
| **Mobile M** | 375–430px — Sin cambios mayores, ajustes de padding |
| **Tablet** | 768px — Grid de 2 columnas para servicios, navbar con hamburger |
| **Desktop S** | 1024px — Layout completo activado |
| **Desktop M** | 1280–1440px — Tamaños de fuente óptimos, espaciado generoso |
| **Desktop L** | 1920px+ — Contenido limitado a max-width: 1400px centrado |

## **6.2 Adaptaciones Mobile**

- El scroll-driven video se reemplaza por una imagen hero estática de alta calidad para preservar performance.

- Las animaciones complejas (cursor personalizado, parallax) se deshabilitan en mobile.

- El grid de servicios pasa de 3 columnas a 1 columna en scroll vertical.

- El navbar colapsa en un menú hamburger con animación de apertura de cortina.

## **6.3 Accesibilidad**

- Contraste mínimo 4.5:1 para texto normal, 3:1 para texto grande (WCAG AA).

- Todos los elementos interactivos navegables por teclado con :focus-visible visible.

- Atributos ARIA en formularios, modales y sliders.

- Texto alternativo en todas las imágenes y el video debe tener aria-hidden='true' con descripción textual adyacente.

- El video hero debe tener pausa automática si prefers-reduced-motion está activo.

# **7. Stack Técnico Sugerido**

## **7.1 Opción A — Sitio Estático de Alto Performance (Recomendado)**

| **Framework** | Astro 4.x — Genera HTML estático, óptimo para SEO y velocidad. Permite islas de React o Vue solo donde se necesiten. |
| --- | --- |
| **Animaciones** | GSAP (GreenSock) con ScrollTrigger plugin — La librería estándar de la industria para animaciones de scroll. |
| **Estilos** | CSS nativo con variables custom + Tailwind CSS para utilidades. No usar frameworks de componentes que impongan diseño. |
| **Video** | HTML5 <video> con preload='none' en mobile. Técnica de scroll-driven playback con JS nativo. |
| **Formulario** | Formspree o EmailJS para envío sin backend propio. |
| **Hosting** | Vercel o Netlify — CDN global, HTTPS automático, deploy desde Git. |
| **Analytics** | Google Analytics 4 + Meta Pixel (si se requiere retargeting). |

## **7.2 Opción B — Con CMS (Si hay actualización frecuente de contenido)**

| **Framework** | Next.js 14 con App Router — SSG para páginas estáticas, ISR para contenido dinámico. |
| --- | --- |
| **CMS** | Sanity.io o Contentful — Para que el equipo actualice textos y fotos sin tocar código. |
| **Animaciones** | Framer Motion + GSAP ScrollTrigger. |
| **Hosting** | Vercel — Integración nativa con Next.js. |

## **7.3 Dominio y SEO**

- Dominio sugerido: gcglobalconsultores.mx o gc-consultores.com.mx

- SSL/HTTPS obligatorio.

- Schema.org markup de tipo LegalService para SEO enriquecido.

- Meta tags Open Graph para compartir en redes sociales.

- Sitemap XML + robots.txt.

- Google Search Console vinculado desde el día 1.

# **8. Wireframe Textual — Flujo de la Página**

A continuación se describe el flujo visual de arriba hacia abajo de la landing page:

| **[ NAVBAR ]** Logo GC (izq) │ Inicio · Servicios · Nosotros · Contacto │ [Consulta Gratuita] |
| --- |

| **[ HERO — 100vh ]** VIDEO DE FONDO (avanza con scroll) Asesoría Humana y de Calidad *"**Defendemos sus derechos con experiencia y compromiso**"* **[SOLICITAR CONSULTA GRATUITA ↓]** |
| --- |

| **[ CREDENCIALES — estadísticas animadas ]** 20+ Años │ 500+ Casos │ 6 Especialidades │ 95% Satisfacción |
| --- |

| **[ ÁREAS DE PRÁCTICA ]** [Jur. Integral] [Ambiental] [Corporativo] [Laboral]       [Civil]     [Fiscal] |
| --- |

| **[ SCROLL CINEMATOGRÁFICO — elemento sticky con parallax ]** *Imagen legal (balanza/estatua) se revela mientras el usuario hace scroll* |
| --- |

| **[ EQUIPO LEGAL ]** Foto │ Nombre │ Cédula Profesional │ Especialidad │ LinkedIn |
| --- |

| **[ COMPROMISO AMBIENTAL ]** "Somos una sola tierra" │ Imagen verde │ Acciones sustentables del despacho |
| --- |

| **[ TESTIMONIOS ]** Slider horizontal — Citas de clientes en comillas tipográficas |
| --- |

| **[ CTA FINAL + FORMULARIO ]** Izquierda: Texto motivador + datos de contacto + mapa Derecha: Formulario — Nombre / Tel / Email / Área / Mensaje / [ENVIAR] |
| --- |

| **[ FOOTER ]** Logo │ Dirección │ Teléfono │ Email │ Redes │ Aviso de Privacidad │ © 2026 |
| --- |