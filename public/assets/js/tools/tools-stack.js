(function () {
  var tools = [
    { title: "Linux Server", icon: "/assets/icons/linux.svg", href: "https://www.linux.org/", tags: ["Infraestructura", "Servidores", "Operación"], desc: "Base operativa de mis entornos productivos para administración, hardening y continuidad de servicios." },
    { title: "Proxmox VE", icon: "/assets/icons/proxmox.svg", href: "https://www.proxmox.com/", tags: ["Virtualización", "VMs", "On-Premise"], desc: "Gestión de infraestructura virtualizada y recursos críticos sobre servidores físicos." },
    { title: "Networking", icon: "/assets/icons/networking.svg", href: "https://es.wikipedia.org/wiki/Red_de_computadoras", tags: ["LAN/WAN", "DNS", "VLAN"], desc: "Administración de redes, diagnóstico de fallas y operación remota de infraestructura distribuida." },
    { title: "Docker", icon: "/assets/icons/docker.svg", href: "https://www.docker.com/", tags: ["Contenedores", "Compose", "Deploy"], desc: "Empaquetado y despliegue de aplicaciones containerizadas para ambientes consistentes." },
    { title: "Kubernetes", icon: "/assets/icons/kubernetes.svg", href: "https://kubernetes.io/", tags: ["Orquestación", "Escalado", "HA"], desc: "Orquestación de servicios con enfoque en disponibilidad, estabilidad y operación continua." },
    { title: "Nginx", icon: "/assets/icons/nginx.svg", href: "https://nginx.org/", tags: ["Web Server", "Reverse Proxy", "Performance"], desc: "Publicación de servicios y balanceo/proxy para aplicaciones internas y externas." },
    { title: "Let's Encrypt", icon: "/assets/icons/letsencrypt.svg", href: "https://letsencrypt.org/", tags: ["HTTPS", "TLS", "Seguridad"], desc: "Gestión de certificados SSL/TLS para exposición segura de plataformas web." },
    { title: "Nginx Proxy Manager", icon: "/assets/icons/nginx-proxy-manager.svg", href: "https://nginxproxymanager.com/", tags: ["Proxy", "SSL", "Gestión"], desc: "Administración simplificada de reverse proxy y certificados para entornos VPS." },
    { title: "Samba", icon: "/assets/icons/samba.svg", href: "https://www.samba.org/", tags: ["Archivos", "Permisos", "Servidor"], desc: "Servidor centralizado de archivos con control de acceso y operación documental." },
    { title: "Git", icon: "/assets/icons/git.svg", href: "https://git-scm.com/", tags: ["Versionado", "Workflow", "Colaboración"], desc: "Control de versiones para trazabilidad de cambios y trabajo coordinado remoto." },
    { title: "GitHub Actions", icon: "/assets/icons/github-white.svg", href: "https://github.com/features/actions", tags: ["CI/CD", "Automatización", "Pipelines"], desc: "Automatización de build y despliegues para reducir tiempos y errores manuales." },
    { title: "Jenkins", icon: "/assets/icons/jenkins.svg", href: "https://www.jenkins.io/", tags: ["CI/CD", "Pipelines", "Build"], desc: "Orquestación de pipelines para integración y entrega continua en distintos entornos." },
    { title: "Terraform", icon: "/assets/icons/terraform.svg", href: "https://www.terraform.io/", tags: ["IaC", "Provisioning", "Cloud"], desc: "Infraestructura como código para provisión reproducible, auditable y escalable." },
    { title: "OpenTofu", icon: "/assets/icons/opentofu.svg", href: "https://opentofu.org/", tags: ["IaC", "Provisioning", "Cloud"], desc: "Alternativa open source para infraestructura como código, compatible con flujos Terraform." },
    { title: "AWS", icon: "/assets/icons/aws.svg", href: "https://aws.amazon.com/", tags: ["Cloud", "Compute", "Networking"], desc: "Plataforma cloud para arquitectura escalable, segura y altamente disponible." },
    { title: "Azure", icon: "/assets/icons/azure.svg", href: "https://azure.microsoft.com/", tags: ["Cloud", "Identity", "Ops"], desc: "Servicios cloud para operación híbrida, identidad y despliegues empresariales." },
    { title: "Google Cloud", icon: "/assets/icons/googlecloud.svg", href: "https://cloud.google.com/", tags: ["Cloud", "K8s", "Servicios"], desc: "Servicios administrados para workloads modernos y operación confiable en la nube." },
    { title: "Prometheus", icon: "/assets/icons/prometheus.svg", href: "https://prometheus.io/", tags: ["Métricas", "Alertas", "Monitoreo"], desc: "Recolección de métricas y alertado para prevenir incidentes operativos." },
    { title: "Grafana", icon: "/assets/icons/grafana.svg", href: "https://grafana.com/", tags: ["Dashboards", "Observabilidad", "SRE"], desc: "Visualización operativa en tiempo real para mejorar disponibilidad y rendimiento." },
    { title: "Notion", icon: "/assets/icons/notion.webp", href: "https://www.notion.so/", tags: ["No Code", "Colaboración", "Feedback"], desc: "Workspace unificado para documentación técnica, procesos y coordinación de equipo remoto." },
    { title: "Loom", icon: "/assets/icons/loom.webp", href: "https://www.loom.com/", tags: ["Video", "Colaboración", "Feedback"], desc: "Grabación asíncrona para documentación visual, handoffs y soporte remoto." },
    { title: "Slack", icon: "/assets/icons/slack.svg", href: "https://slack.com/", tags: ["Colaboración", "Incidentes", "Comunicación"], desc: "Canal principal para coordinación operativa, alertas y comunicación en tiempo real." },
    { title: "Screenpresso", icon: "/assets/icons/screenpresso.svg", href: "https://www.screenpresso.com/", tags: ["Video", "Colaboración", "Feedback"], desc: "Captura y documentación de incidencias con evidencia visual para soporte técnico remoto." },
    { title: "WhatsApp", icon: "/assets/icons/whatsapp.svg", href: "https://www.whatsapp.com/", tags: ["Colaboración", "Soporte", "Respuesta"], desc: "Canal de contacto rápido para coordinación y resolución ágil de requerimientos." }
  ];

  var subtitle = document.querySelector(".content-title.is-text");
  if (subtitle) {
    subtitle.textContent = "Stack remoto DevOps ordenado por operación real (según mi CV)";
  }

  var sectionH2 = document.querySelector(".section-block h2.content-title");
  if (sectionH2) {
    sectionH2.textContent = "DevOps.";
  }

  document.querySelectorAll(".section-block").forEach(function (el, i) {
    if (i > 0) {
      el.remove();
    }
  });

  document.querySelectorAll(".main .container > .block-divider").forEach(function (el, i) {
    if (i > 1) {
      el.remove();
    }
  });

  var grid = document.querySelector(".section-block .w-layout-grid._2x-column");
  if (!grid) {
    return;
  }

  function card(t) {
    return '\n    <a style="background-color:rgb(28,28,28)" href="' + t.href + '" target="_blank" class="card w-inline-block">\n      <div class="shine-wrap"><div class="shine"></div></div>\n      <div class="card-content-vertical">\n        <div class="tools">\n          <div class="tools-head">\n            <div class="tools-icon">\n              <img src="' + t.icon + '" loading="lazy" alt="' + t.title + '" class="image-background"/>\n              <div class="app-outline"></div>\n            </div>\n            <div><h2 class="card-heading">' + t.title + '</h2></div>\n          </div>\n          <div class="card-text-2-lines">' + t.desc + '</div>\n        </div>\n        <div class="card-meta">\n          <div class="card-info">\n            <div class="card-tag">' + t.tags[0] + '</div>\n            <div class="card-tag">' + t.tags[1] + '</div>\n            <div class="card-tag">' + t.tags[2] + '</div>\n          </div>\n          <div class="card-cta">\n            <div class="icon-svg w-embed">\n              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">\n                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0V15.75"/>\n              </svg>\n            </div>\n          </div>\n        </div>\n      </div>\n    </a>\n  ';
  }

  grid.innerHTML = tools.map(card).join("");
})();
