# Portafolio DevOps

Sitio estático de portafolio basado en Webflow y personalizado para perfil DevOps.

## Cómo ejecutarlo

1. Entra a la carpeta del proyecto.
2. Ejecuta `python3 -m http.server 8000`.
3. Abre `http://localhost:8000`.

## Estructura modular

### HTML

- `index.html`: portada principal (hero DevOps + integraciones animadas).
- `about/index.html`: sección Sobre mí.
- `projects/index.html`: listado de proyectos.
- `tools/index.html`: herramientas.
- `contact/index.html`: contacto.
- `project/orbiter/index.html` y `project/pygio/index.html`: detalle de proyectos.

### CSS

- `theme.css`: tema global del sitio (paleta, botones, sidebar, OpenToWork).
- `assets/css/hero-devops.css`: estilos exclusivos del hero animado de portada.
- `styles.css`: entry legacy para estilos de respaldo/experimentales.

### JavaScript

- `assets/js/common/faq-accordion.js`: lógica del acordeón FAQ.
- `assets/js/common/preloader.js`: muestra/oculta preloader por sesión.
- `assets/js/common/noise-overlay.js`: overlay de ruido opcional (desactivado por defecto).
- `assets/js/index/devops-hero-init.js`: punto de entrada para scripts específicos de portada.
- `script.js`: entry legacy para JS de respaldo/experimental.

## Notas de mantenimiento

- Los módulos comunes se cargan en todas las páginas para mantener comportamiento consistente.
- El módulo de ruido está desactivado para priorizar rendimiento y fluidez en animaciones.
- La personalización principal del hero está desacoplada en `assets/css/hero-devops.css`.
# Portafolio
