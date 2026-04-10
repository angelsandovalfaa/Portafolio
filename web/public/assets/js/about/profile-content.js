document.addEventListener("DOMContentLoaded", function () {
  var heroHeading = document.querySelector(".hero-heading");
  if (heroHeading) {
    heroHeading.innerHTML = "Ángel Eduardo Sandoval";
  }

  var heroText = document.querySelector(".content-block > div");
  if (heroText) {
    heroText.innerHTML = [
      "Soy especialista en Infraestructura y DevOps, enfocado en construir y mantener sistemas confiables, pero también en entender cómo mejorar los procesos detrás de cada solución.",
      "",
      "Me gusta trabajar con tecnologías como Linux, Docker, Kubernetes y plataformas cloud, combinando automatización y buenas prácticas para lograr entornos más estables y eficientes. A lo largo de mi experiencia, fui incorporando herramientas de CI/CD, monitoreo y observabilidad que me permiten tener un control más claro de lo que sucede en producción.",
      "",
      "Más allá de lo técnico, valoro mucho el trabajo en equipo, la comunicación y la mejora continua. Siempre estoy buscando aprender algo nuevo y encontrar formas más simples y efectivas de hacer las cosas."
    ].join("<br/>");
  }

  var imageBlock = document.querySelector(".section-block .image-wrap");
  if (imageBlock && imageBlock.closest(".section-block")) {
    imageBlock.closest(".section-block").remove();
  }

  var sectionTitle = document.querySelector(".section-block .content-title");
  if (sectionTitle && sectionTitle.textContent.trim() === "FAQ") {
    sectionTitle.textContent = "Perfil y trayectoria";
  }

  var accordionList = document.querySelector("#w-node-ddd9201c-4902-fec8-05c5-e75fa2214fa3-1a4c79d7");
  if (!accordionList) {
    return;
  }

  var item = function (title, body) {
    return '\n      <div data-click="faq" class="accordion">\n        <div class="accordion-top">\n          <div class="accordion-top-wrap"><div><strong>' + title + '</strong></div></div>\n          <div class="accordion-top-icon">\n            <div class="accordion-top-icon-wrap">\n              <div class="accordion-icon-stripe-2"></div>\n              <div class="accordion-icon-stripe-1"></div>\n            </div>\n          </div>\n        </div>\n        <div class="accordion-bottom">\n          <div class="accordion-bottom-wrap"><div>' + body + '</div></div>\n        </div>\n      </div>\n    ';
  };

  accordionList.innerHTML = [
    item(
      "Resumen profesional",
      "Profesional IT con foco en infraestructura, sistemas y operaciones. Experiencia en administración de entornos productivos, automatización y mejora continua, optimizando disponibilidad, rendimiento y confiabilidad."
    ),
    item(
      "Stack técnico principal",
      "Linux Server, Git, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Prometheus, Grafana, AWS, Azure, GCP, Proxmox, Nginx, networking LAN/WAN, hardening y operación de infraestructura."
    ),
    item(
      "Educación",
      "Técnico Superior en Telecomunicaciones - Fuerza Aérea Argentina (2012-2013).<br/>Formación en telecomunicaciones, redes, sistemas críticos, disciplina operativa y gestión en entornos de alta exigencia."
    ),
    item(
      "Licencias y certificaciones",
      "Aprende Kubernetes (LinkedIn, mar. 2026)<br/>DevOps: Despliegue de microservicios con Docker (LinkedIn, mar. 2026)<br/>Fundamentos de DevOps: Contenedores (LinkedIn, mar. 2026)<br/>Azure DevOps esencial (LinkedIn, feb. 2026)<br/>DevOps esencial (LinkedIn, feb. 2026)<br/>Docker esencial (LinkedIn, feb. 2026)<br/>Introducción a Bases de Datos (DGCIC, abr. 2024)<br/>Descripción de la Propagación de VHF (Rohde & Schwarz, ago. 2023)<br/>Introducción al Sistema Operativo Linux (DGCIC, dic. 2022)<br/>Introducción a las Fibras Ópticas y sus Aplicaciones (DGCI, dic. 2022)<br/>Operación de equipamiento de Comunicaciones V/UHF y HF (Rohde & Schwarz, mar. 2021)<br/>Administración y Mantenimiento de Centrales Telefónicas IP y Analógicas (Lefrink & Marx, oct. 2017)<br/>Operación y Mantenimiento del VCS 3020X Rel. 7.0 (Frequentis, nov. 2016)<br/>Introducción a Redes WAN (Fuerza Aérea Argentina, abr. 2015)<br/>Curso de Redes y Comunicaciones (Fuerza Aérea Argentina, dic. 2015)"
    ),
    item(
      "Aptitudes destacadas",
      "Resolución de problemas, trabajo en equipo, análisis de fallas, gestión operativa, infraestructura, confiabilidad operativa, administración, mantenimiento y reparaciones, seguridad, gestión de configuración, control de sistemas, disciplina y responsabilidad profesional, organización y gestión eficiente del tiempo, adaptabilidad a entornos exigentes."
    ),
    item(
      "Objetivo profesional",
      "Continuar creciendo en infraestructura, DevOps y operaciones, participando en proyectos desafiantes (presencial, remoto o híbrido) donde pueda aportar valor técnico y mejorar la confiabilidad de los sistemas."
    )
  ].join("");
});
