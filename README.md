# GC Global Consultores — Landing Page

Este repositorio contiene el código fuente de la landing page de **GC Global Consultores**, una firma legal de consultoría diseñada para ofrecer un alto rendimiento, accesibilidad y una experiencia visual de primer nivel.

El proyecto está construido sobre **Astro 4.x** (SSG puro) y optimizado para una carga ultrarrápida.

---

## 🛠️ Tecnologías Utilizadas (Stack)

*   **Framework:** Astro 4.x (Static Site Generation - SSG puro).
*   **Estilos:** CSS nativo + variables personalizadas (Tailwind CSS como utilidad de soporte).
*   **JavaScript & Animaciones:** GSAP + ScrollTrigger para animaciones y transiciones complejas, minimizando el JS nativo adicional.
*   **Iconos:** Phosphor Icons.
*   **Seguridad:** Headers HTTP seguros, honeypot anti-spam, sanitización de inputs en cliente.

---

## 🚀 Cómo Correr el Proyecto

El gestor de paquetes de este proyecto es obligatoriamente **pnpm**.

### Requisitos Previos

*   **Node.js** (versión recomendada `>= 22.12.0`)
*   **pnpm** (instalado globalmente)

### 1. Clonar e Instalar Dependencias

Navega a la carpeta del frontend e instala las dependencias:

```bash
cd frontend
pnpm install
```

### 2. Modo de Desarrollo

Para iniciar el servidor local con recarga en vivo (hot-reload):

```bash
pnpm dev
```

El proyecto estará disponible por defecto en [http://localhost:4321/](http://localhost:4321/).

### 3. Construir para Producción

Genera el sitio estático optimizado en la carpeta `dist`:

```bash
pnpm build
```

### 4. Vista Previa de la Compilación

Para previsualizar la compilación de producción localmente:

```bash
pnpm preview
```

---

## 📐 Estándares de Rendimiento y Diseño

*   **PageSpeed Score:** Objetivo ≥ 85 en Desktop y ≥ 70 en Mobile.
*   **Diseño Responsivo:** Soporte desde 320px hasta pantallas ultra-wide (1920px+). En mobile se deshabilitan las animaciones pesadas y se reemplaza el video del Hero por una imagen WebP optimizada.
*   **Accesibilidad (WCAG 2.1 AA):** Lighthouse Accessibility ≥ 90. Soporte completo para navegación por teclado y respeto por la preferencia de reducción de movimiento (`prefers-reduced-motion`).
