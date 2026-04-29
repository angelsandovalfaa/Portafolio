document.addEventListener("DOMContentLoaded", function () {
  var profile = {
    heading: "Ángel Eduardo Sandoval",
    intro: [
      "DevOps | SysAdmin | IT | Linux | Git | AWS | Azure | GCP | Docker | Kubernetes | Terraform | OpenTofu | Jenkins | GitHub Actions | Prometheus | Grafana.",
      "",
      "Soy un profesional de IT con foco en infraestructura, sistemas y operaciones, con experiencia en la administración de entornos productivos y automatización de procesos.",
      "",
      "Me enfoco en optimizar la disponibilidad, el rendimiento y la confiabilidad de los sistemas. Trabajo en el diseño, implementación y gestión de infraestructuras modernas, combinando virtualización, contenedores y servicios cloud."
    ].join("<br/>"),
    sections: [
      {
        title: "Resumen profesional",
        body: "Implemento y gestiono automatización de despliegues, infraestructura como código y mejora continua de sistemas en producción, con foco en escalabilidad, seguridad y eficiencia operativa."
      },
      {
        title: "Especialización técnica",
        body: "Linux, Git, Docker, Kubernetes, Terraform, OpenTofu, Jenkins, GitHub Actions, Prometheus, Grafana, AWS, Azure y GCP. Experiencia en administración de infraestructura, virtualización, operaciones y prácticas DevOps."
      },
      {
        title: "Educación formal",
        body: "Técnico Superior en Telecomunicaciones - Fuerza Aérea Argentina (ene. 2012 - dic. 2013).<br/><br/>Formación cursada bajo régimen militar, con una preparación integral que combinó conocimientos técnicos con valores de disciplina, responsabilidad y compromiso profesional.<br/><br/>La carrera se desarrolló en un entorno estructurado con normas y procedimientos definidos, fortaleciendo la organización, el orden, la atención al detalle y la gestión eficiente del tiempo.<br/><br/>Durante esta etapa se potenció el trabajo en equipo, la comunicación clara, el respeto por roles y jerarquías, junto con habilidades de autocontrol, perseverancia y toma de decisiones responsables, manteniendo criterios constantes de seguridad y calidad."
      },
      {
        title: "Licencias y certificaciones",
        body: "Aprende Kubernetes (LinkedIn, mar. 2026)<br/>DevOps: Despliegue de microservicios con Docker (LinkedIn, mar. 2026)<br/>Fundamentos de DevOps: Contenedores (LinkedIn, mar. 2026)<br/>Azure DevOps esencial (LinkedIn, feb. 2026)<br/>DevOps esencial (LinkedIn, feb. 2026)<br/>Docker esencial (LinkedIn, feb. 2026)<br/>Introducción a Bases de Datos (DGCIC, abr. 2024)<br/>Descripción de la Propagación de VHF (Rohde & Schwarz, ago. 2023)<br/>Introducción al Sistema Operativo Linux (DGCIC, dic. 2022)<br/>Introducción a las Fibras Ópticas y sus Aplicaciones (DGCI, dic. 2022)<br/>Curso Operación de equipamiento de Comunicaciones V/UHF y HF (Rohde & Schwarz, mar. 2021)<br/>Administración y Mantenimiento de Centrales Telefónicas IP y Analógicas (Lefrink & Marx, oct. 2017)<br/>Operación y Mantenimiento del VCS 3020X (Rel. 7.0) (Frequentis, nov. 2016)<br/>Introducción a Redes WAN (Fuerza Aérea Argentina, abr. 2015)<br/>Curso de Redes y Comunicaciones (Fuerza Aérea Argentina, dic. 2015)"
      },
      {
        title: "Aptitudes destacadas",
        body: "Mentalidad resolutiva y enfoque en mejora de procesos.<br/>Capacidad de aprendizaje constante.<br/>Responsabilidad y compromiso con la calidad.<br/>Buen manejo del trabajo colaborativo."
      },
      {
        title: "Conocimientos y aptitudes",
        body: "Kubernetes, Docker, DevOps, Contenerización, Integración continua y entrega continua (CI/CD), GitHub, Azure DevOps, VSTS, Infraestructura, Seguridad, Gestión de configuración, Control de sistema, Arquitectura, Procesamiento de datos, Gestión operativa, Administración, Mantenimiento y reparaciones, Fibra óptica, Análisis de fallas, Resolución de problemas, Trabajo en equipo, Organización y gestión eficiente del tiempo, Adaptabilidad a entornos exigentes, Confiabilidad operativa y cumplimiento de procedimientos."
      },
      {
        title: "Ubicación y estado laboral",
        body: "Buenos Aires, Provincia de Buenos Aires, Argentina.<br/>En búsqueda de empleo en modalidad presencial, remota o híbrida."
      },
      {
        title: "Objetivo profesional",
        body: "Seguir creciendo en infraestructura, DevOps y operaciones, participando en proyectos desafiantes donde pueda aportar valor y continuar desarrollándome profesionalmente."
      }
    ]
  };

  var heroHeading = document.querySelector(".hero-heading");
  if (heroHeading) {
    heroHeading.innerHTML = profile.heading;
  }

  var heroText = document.querySelector(".content-block > div");
  if (heroText) {
    heroText.innerHTML = profile.intro;
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

  accordionList.innerHTML = profile.sections.map(function (section) {
    return item(section.title, section.body);
  }).join("");
});
