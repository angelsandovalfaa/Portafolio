/** Contenido de `tools/index.html` (export Webflow), sin `tools-stack.js`. */

export type ToolCardData = {
  href: string
  icon: string
  iconClass?: 'white'
  title: string
  desc: string
  tags: string[]
  sizes?: string
  srcSet?: string
}

export type ToolsSectionData = {
  title: string
  subtitle: string
  cards: ToolCardData[]
}

export const TOOLS_SECTIONS: ToolsSectionData[] = [
  {
    title: 'Infraestructura y Sistemas.',
    subtitle: 'Base operativa para entornos productivos',
    cards: [
      {
        href: 'https://www.linux.org/',
        icon: '/assets/icons/terminal.svg',
        title: 'Linux Server',
        desc: 'Administracion, hardening y operacion continua de servidores para cargas productivas.',
        tags: ['Infraestructura', 'Servidores', 'Operacion'],
      },
      {
        href: 'https://www.proxmox.com/',
        icon: '/assets/icons/proxmox.svg',
        title: 'Proxmox VE',
        desc: 'Virtualizacion y gestion de VMs para consolidar servicios y optimizar recursos.',
        tags: ['Virtualizacion', 'VMs', 'On-Premise'],
      },
      {
        href: 'https://es.wikipedia.org/wiki/Red_de_computadoras',
        icon: '/assets/icons/networking.svg',
        title: 'Networking',
        desc: 'Configuracion y diagnostico de red para conectividad estable entre servicios y sitios.',
        tags: ['LAN/WAN', 'DNS', 'VLAN'],
      },
      {
        href: 'https://www.samba.org/',
        icon: '/assets/icons/samba.svg',
        title: 'Samba',
        desc: 'Servicio de archivos centralizado con control de permisos para operacion interna.',
        tags: ['Archivos', 'Permisos', 'Servidor'],
      },
    ],
  },
  {
    title: 'Contenedores y Plataforma.',
    subtitle: 'Publicacion segura y operacion de aplicaciones',
    cards: [
      {
        href: 'https://www.docker.com/',
        icon: '/assets/icons/docker.svg',
        title: 'Docker',
        desc: 'Empaquetado y despliegue de aplicaciones containerizadas con ambientes consistentes.',
        tags: ['Contenedores', 'Compose', 'Deploy'],
      },
      {
        href: 'https://kubernetes.io/',
        icon: '/assets/icons/kubernetes.svg',
        title: 'Kubernetes',
        desc: 'Orquestacion de servicios con escalado, resiliencia y alta disponibilidad.',
        tags: ['Orquestacion', 'Escalado', 'HA'],
      },
      {
        href: 'https://nginx.org/',
        icon: '/assets/icons/nginx.svg',
        title: 'Nginx',
        desc: 'Exposicion de servicios, reverse proxy y optimizacion de trafico web.',
        tags: ['Web Server', 'Reverse Proxy', 'Performance'],
      },
      {
        href: 'https://nginxproxymanager.com/',
        icon: '/assets/icons/nginx-proxy-manager.svg',
        title: 'Nginx Proxy Manager',
        desc: 'Gestion de proxy y certificados SSL/TLS en forma simple para multiples servicios.',
        tags: ['Proxy', 'SSL', 'Gestion'],
      },
      {
        href: 'https://letsencrypt.org/',
        icon: '/assets/icons/letsencrypt.svg',
        title: "Let's Encrypt",
        desc: 'Provision y renovacion de certificados HTTPS para una publicacion segura.',
        tags: ['HTTPS', 'TLS', 'Seguridad'],
      },
    ],
  },
  {
    title: 'CI/CD y Automatizacion.',
    subtitle: 'Entrega continua con trazabilidad y control',
    cards: [
      {
        href: 'https://git-scm.com/',
        icon: '/assets/icons/git.svg',
        title: 'Git',
        desc: 'Control de versiones para flujo de ramas, revisiones y despliegues con historial claro.',
        tags: ['Versionado', 'Workflow', 'Colaboracion'],
      },
      {
        href: 'https://github.com/features/actions',
        icon: '/assets/icons/github-white.svg',
        title: 'GitHub Actions',
        desc: 'Automatizacion de pipelines de build, test y deploy para reducir errores manuales.',
        tags: ['CI/CD', 'Automatizacion', 'Pipelines'],
      },
      {
        href: 'https://www.jenkins.io/',
        icon: '/assets/icons/jenkins.svg',
        title: 'Jenkins',
        desc: 'Orquestacion de integracion y entrega continua para distintos entornos y repositorios.',
        tags: ['CI/CD', 'Build', 'Pipelines'],
      },
      {
        href: 'https://about.gitlab.com/',
        icon: '/assets/icons/gitlab.svg',
        title: 'GitLab',
        desc: 'Repositorio y flujo de colaboracion DevOps con soporte para pipelines y revision.',
        tags: ['Repo', 'CI/CD', 'Colaboracion'],
      },
      {
        href: 'https://vercel.com/',
        icon: '/assets/icons/vercel.svg',
        title: 'Vercel',
        desc: 'Plataforma de despliegue para proyectos web con integracion continua y entregas rapidas.',
        tags: ['Deploy', 'CI/CD', 'Frontend'],
      },
    ],
  },
  {
    title: 'IaC y Cloud.',
    subtitle: 'Provision reproducible y operacion multi-cloud',
    cards: [
      {
        href: 'https://www.terraform.io/',
        icon: '/assets/icons/terraform.svg',
        title: 'Terraform',
        desc: 'Infraestructura como codigo para aprovisionar entornos trazables, repetibles y auditables.',
        tags: ['IaC', 'Provisioning', 'Cloud'],
      },
      {
        href: 'https://opentofu.org/',
        icon: '/assets/icons/opentofu.svg',
        title: 'OpenTofu',
        desc: 'Alternativa open source de IaC compatible con flujos Terraform para entornos reproducibles.',
        tags: ['IaC', 'Provisioning', 'Cloud'],
      },
      {
        href: 'https://aws.amazon.com/',
        icon: '/assets/icons/aws.svg',
        title: 'AWS',
        desc: 'Servicios cloud para arquitectura escalable y despliegues seguros en produccion.',
        tags: ['Cloud', 'Compute', 'Networking'],
      },
      {
        href: 'https://azure.microsoft.com/',
        icon: '/assets/icons/azure.svg',
        title: 'Azure',
        desc: 'Operacion de cargas y servicios empresariales con enfoque en identidad y gobierno.',
        tags: ['Cloud', 'Identity', 'Ops'],
      },
      {
        href: 'https://cloud.google.com/',
        icon: '/assets/icons/googlecloud.svg',
        title: 'Google Cloud',
        desc: 'Servicios administrados para workloads modernos y despliegues confiables.',
        tags: ['Cloud', 'K8s', 'Servicios'],
      },
    ],
  },
  {
    title: 'Observabilidad y Respuesta.',
    subtitle: 'Metricas, alertas y coordinacion operativa',
    cards: [
      {
        href: 'https://prometheus.io/',
        icon: '/assets/icons/prometheus.svg',
        title: 'Prometheus',
        desc: 'Recoleccion de metricas y alertado para deteccion temprana de incidentes.',
        tags: ['Metricas', 'Alertas', 'Monitoreo'],
      },
      {
        href: 'https://grafana.com/',
        icon: '/assets/icons/grafana.svg',
        title: 'Grafana',
        desc: 'Dashboards operativos para analisis de performance y disponibilidad.',
        tags: ['Dashboards', 'Observabilidad', 'SRE'],
      },
      {
        href: 'https://slack.com/',
        icon: '/assets/icons/slack.svg',
        title: 'Slack',
        desc: 'Canal de coordinacion en tiempo real para soporte, alertas y operacion diaria.',
        tags: ['Incidentes', 'Colaboracion', 'Comunicacion'],
      },
      {
        href: 'https://www.notion.so/',
        icon: '/assets/icons/notion.webp',
        title: 'Notion',
        desc: 'Documentacion tecnica, runbooks y seguimiento operativo centralizado.',
        tags: ['Documentacion', 'Runbooks', 'Procesos'],
        sizes: '(max-width: 512px) 100vw, 512px',
        srcSet: '/assets/icons/notion.webp 512w',
      },
    ],
  },
]
