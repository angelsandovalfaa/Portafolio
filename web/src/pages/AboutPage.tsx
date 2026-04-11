import { useState } from 'react'
import { FaqAccordionItem } from '../components/ui/FaqAccordionItem'

const PROFILE_IDS = ['resumen', 'stack', 'educacion', 'certs', 'aptitudes', 'objetivo'] as const

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
              Soy especialista en Infraestructura y DevOps, enfocado en construir y mantener sistemas confiables, pero
              también en entender cómo mejorar los procesos detrás de cada solución.
              <br />
              <br />
              Me gusta trabajar con tecnologías como Linux, Docker, Kubernetes y plataformas cloud, combinando
              automatización y buenas prácticas para lograr entornos más estables y eficientes. A lo largo de mi
              experiencia, fui incorporando herramientas de CI/CD, monitoreo y observabilidad que me permiten tener un
              control más claro de lo que sucede en producción.
              <br />
              <br />
              Más allá de lo técnico, valoro mucho el trabajo en equipo, la comunicación y la mejora continua. Siempre
              estoy buscando aprender algo nuevo y encontrar formas más simples y efectivas de hacer las cosas.
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
            entornos productivos, automatización y mejora continua, optimizando disponibilidad, rendimiento y
            confiabilidad.
          </FaqAccordionItem>

          <FaqAccordionItem
            open={openProfile === PROFILE_IDS[1]}
            onToggle={() => toggleProfile(PROFILE_IDS[1])}
            title={<strong>Stack técnico principal</strong>}
          >
            Linux Server, Git, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Prometheus, Grafana, AWS,
            Azure, GCP, Proxmox, Nginx, networking LAN/WAN, hardening y operación de infraestructura.
          </FaqAccordionItem>

          <FaqAccordionItem
            open={openProfile === PROFILE_IDS[2]}
            onToggle={() => toggleProfile(PROFILE_IDS[2])}
            title={<strong>Educación</strong>}
          >
            Técnico Superior en Telecomunicaciones - Fuerza Aérea Argentina (2012-2013).
            <br />
            Formación en telecomunicaciones, redes, sistemas críticos, disciplina operativa y gestión en entornos de
            alta exigencia.
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
            Operación de equipamiento de Comunicaciones V/UHF y HF (Rohde &amp; Schwarz, mar. 2021)
            <br />
            Administración y Mantenimiento de Centrales Telefónicas IP y Analógicas (Lefrink &amp; Marx, oct. 2017)
            <br />
            Operación y Mantenimiento del VCS 3020X Rel. 7.0 (Frequentis, nov. 2016)
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
            Resolución de problemas, trabajo en equipo, análisis de fallas, gestión operativa, infraestructura,
            confiabilidad operativa, administración, mantenimiento y reparaciones, seguridad, gestión de configuración,
            control de sistemas, disciplina y responsabilidad profesional, organización y gestión eficiente del tiempo,
            adaptabilidad a entornos exigentes.
          </FaqAccordionItem>

          <FaqAccordionItem
            open={openProfile === PROFILE_IDS[5]}
            onToggle={() => toggleProfile(PROFILE_IDS[5])}
            title={<strong>Objetivo profesional</strong>}
          >
            Continuar creciendo en infraestructura, DevOps y operaciones, participando en proyectos desafiantes
            (presencial, remoto o híbrido) donde pueda aportar valor técnico y mejorar la confiabilidad de los
            sistemas.
          </FaqAccordionItem>
        </div>
      </div>
    </>
  )
}
