import { useState } from 'react'
import { FaqAccordionItem } from '../components/ui/FaqAccordionItem'

const PROFILE_IDS = ['resumen', 'especializacion', 'educacion', 'certs', 'aptitudes', 'conocimientos', 'estado', 'objetivo'] as const

export function AboutPage() {
  const [openProfile, setOpenProfile] = useState<string | null>(null)
  const toggleProfile = (id: string) => {
    setOpenProfile((cur) => (cur === id ? null : id))
  }

  return (
    <>
      <div className="container-small align-left hero">
        <div className="hero-block">
          <h1 data-animate="font-weight" className="hero-heading">
            Ángel Eduardo Sandoval
          </h1>
          <div className="content-block">
            <div className="about-intro-text">
              DevOps | SysAdmin | IT | Linux | Git | AWS | Azure | GCP | Docker | Kubernetes | Terraform | Jenkins |
              GitHub Actions | Prometheus | Grafana.
              <br />
              <br />
              Soy un profesional de IT con foco en infraestructura, sistemas y operaciones, con experiencia en la
              administración de entornos productivos y automatización de procesos.
              <br />
              <br />
              Me enfoco en optimizar la disponibilidad, el rendimiento y la confiabilidad de los sistemas. Trabajo en
              el diseño, implementación y gestión de infraestructuras modernas, combinando virtualización, contenedores
              y servicios cloud.
            </div>
          </div>
        </div>
      </div>

      <div className="block-divider section-separator"></div>

      <div className="section-block">
        <div className="content-title-wrap">
          <div className="content-title-dot"></div>
          <h2 className="content-title">Perfil y trayectoria</h2>
        </div>

        <div className="accordion-list">
          <FaqAccordionItem
            open={openProfile === PROFILE_IDS[0]}
            onToggle={() => toggleProfile(PROFILE_IDS[0])}
            title={<strong>Resumen profesional</strong>}
          >
            Profesional IT con foco en infraestructura, sistemas y operaciones. Experiencia en administración de
            entornos productivos, automatización y mejora continua.
          </FaqAccordionItem>

          <FaqAccordionItem
            open={openProfile === PROFILE_IDS[1]}
            onToggle={() => toggleProfile(PROFILE_IDS[1])}
            title={<strong>Especialización técnica</strong>}
          >
            Linux, Git, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Prometheus, Grafana, AWS, Azure y
            GCP. Experiencia en administración de infraestructura, virtualización, operaciones y prácticas DevOps.
          </FaqAccordionItem>

          <FaqAccordionItem
            open={openProfile === PROFILE_IDS[2]}
            onToggle={() => toggleProfile(PROFILE_IDS[2])}
            title={<strong>Educación formal</strong>}
          >
            Técnico Superior en Telecomunicaciones - Fuerza Aérea Argentina (ene. 2012 - dic. 2013).
            <br />
            <br />
            Formación cursada bajo régimen militar, con una preparación integral que combinó conocimientos técnicos
            con valores de disciplina, responsabilidad y compromiso profesional.
            <br />
            <br />
            La carrera se desarrolló en un entorno estructurado con normas y procedimientos definidos, fortaleciendo
            la organización, el orden, la atención al detalle y la gestión eficiente del tiempo.
            <br />
            <br />
            Durante esta etapa se potenció el trabajo en equipo, la comunicación clara, el respeto por roles y
            jerarquías, junto con habilidades de autocontrol, perseverancia y toma de decisiones responsables,
            manteniendo criterios constantes de seguridad y calidad.
          </FaqAccordionItem>

          <FaqAccordionItem
            open={openProfile === PROFILE_IDS[3]}
            onToggle={() => toggleProfile(PROFILE_IDS[3])}
            title={<strong>Licencias y certificaciones</strong>}
          >
            Aprende Kubernetes (LinkedIn, mar. 2026)
            <br />
            DevOps: Despliegue de microservicios con Docker (LinkedIn, mar. 2026)
            <br />
            Fundamentos de DevOps: Contenedores (LinkedIn, mar. 2026)
            <br />
            Azure DevOps esencial (LinkedIn, feb. 2026)
            <br />
            DevOps esencial (LinkedIn, feb. 2026)
            <br />
            Docker esencial (LinkedIn, feb. 2026)
            <br />
            Introducción a Bases de Datos (DGCIC, abr. 2024)
            <br />
            Descripción de la Propagación de VHF (Rohde &amp; Schwarz, ago. 2023)
            <br />
            Introducción al Sistema Operativo Linux (DGCIC, dic. 2022)
            <br />
            Introducción a las Fibras Ópticas y sus Aplicaciones (DGCI, dic. 2022)
            <br />
            Curso Operación de equipamiento de Comunicaciones V/UHF y HF (Rohde &amp; Schwarz, mar. 2021)
            <br />
            Administración y Mantenimiento de Centrales Telefónicas IP y Analógicas (Lefrink &amp; Marx, oct. 2017)
            <br />
            Operación y Mantenimiento del VCS 3020X (Rel. 7.0) (Frequentis, nov. 2016)
            <br />
            Introducción a Redes WAN (Fuerza Aérea Argentina, abr. 2015)
            <br />
            Curso de Redes y Comunicaciones (Fuerza Aérea Argentina, dic. 2015)
          </FaqAccordionItem>

          <FaqAccordionItem
            open={openProfile === PROFILE_IDS[4]}
            onToggle={() => toggleProfile(PROFILE_IDS[4])}
            title={<strong>Aptitudes destacadas</strong>}
          >
            Mentalidad resolutiva y enfoque en mejora de procesos.
            <br />
            Capacidad de aprendizaje constante.
            <br />
            Responsabilidad y compromiso con la calidad.
            <br />
            Buen manejo del trabajo colaborativo.
          </FaqAccordionItem>

          <FaqAccordionItem
            open={openProfile === PROFILE_IDS[5]}
            onToggle={() => toggleProfile(PROFILE_IDS[5])}
            title={<strong>Conocimientos y aptitudes</strong>}
          >
            Kubernetes, Docker, DevOps, Contenerización, Integración continua y entrega continua (CI/CD), GitHub,
            Azure DevOps, VSTS, Infraestructura, Seguridad, Gestión de configuración, Control de sistema, Arquitectura,
            Procesamiento de datos, Gestión operativa, Administración, Mantenimiento y reparaciones, Fibra óptica,
            Análisis de fallas, Resolución de problemas, Trabajo en equipo, Organización y gestión eficiente del
            tiempo, Adaptabilidad a entornos exigentes, Confiabilidad operativa y cumplimiento de procedimientos.
          </FaqAccordionItem>

          <FaqAccordionItem
            open={openProfile === PROFILE_IDS[6]}
            onToggle={() => toggleProfile(PROFILE_IDS[6])}
            title={<strong>Ubicación y estado laboral</strong>}
          >
            Buenos Aires, Provincia de Buenos Aires, Argentina.
            <br />
            En búsqueda de empleo en modalidad presencial, remota o híbrida.
          </FaqAccordionItem>

          <FaqAccordionItem
            open={openProfile === PROFILE_IDS[7]}
            onToggle={() => toggleProfile(PROFILE_IDS[7])}
            title={<strong>Objetivo profesional</strong>}
          >
            Seguir creciendo en infraestructura, DevOps y operaciones, participando en proyectos desafiantes donde
            pueda aportar valor y continuar desarrollándome profesionalmente.
          </FaqAccordionItem>
        </div>
      </div>
    </>
  )
}
