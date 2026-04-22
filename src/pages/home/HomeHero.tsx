import { useEffect } from 'react'

export function HomeHero() {
  useEffect(() => {
    if (!import.meta.env.DEV) return
    console.log('[page-debug]', Math.round(performance.now()), 'HomeHero mount')
    return () => {
      console.log('[page-debug]', Math.round(performance.now()), 'HomeHero unmount')
    }
  }, [])

  return (
    <>
      <div className="container-small align-left hero kapstan-hero-wrap">
        <div className="hero-block">
          <div className="kapstan-chip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden={true}
            >
              <path d="M10 14l-2 2a3 3 0 104 4l2-2" />
              <path d="M14 10l2-2a3 3 0 10-4-4L10 6" />
              <path d="M8 12h8" />
            </svg>
            <span>INTEGRATIONS</span>
          </div>
          <div className="text-lead">Cloud • CI/CD • IaC</div>
          <h1 data-animate="font-weight" className="hero-heading">
            DevOps
            <br />
            Engineer
          </h1>
        </div>
        <div className="kapstan-integrations" aria-hidden="true">
          <div className="kapstan-orbit">
            <div className="kapstan-col col-1">
              <div className="kapstan-track">
                <div className="kapstan-node" data-tip="Docker">
                  <img src="/assets/icons/docker.svg" alt="Docker" />
                </div>
                <div className="kapstan-node" data-tip="Slack">
                  <img src="/assets/icons/slack.svg" alt="Slack" />
                </div>
                <div className="kapstan-node" data-tip="Jenkins">
                  <img src="/assets/icons/jenkins.svg" alt="Jenkins" />
                </div>
                <div className="kapstan-node" data-tip="GitHub">
                  <img src="/assets/icons/github-white.svg" alt="GitHub" />
                </div>
              </div>
            </div>
            <div className="kapstan-col col-2">
              <div className="kapstan-track">
                <div className="kapstan-node" data-tip="AWS">
                  <img src="/assets/icons/aws.svg" alt="AWS" />
                </div>
                <div className="kapstan-node" data-tip="Terraform">
                  <img src="/assets/icons/terraform.svg" alt="Terraform" />
                </div>
                <div className="kapstan-node" data-tip="Kubernetes">
                  <img src="/assets/icons/kubernetes.svg" alt="Kubernetes" />
                </div>
                <div className="kapstan-node" data-tip="Prometheus">
                  <img src="/assets/icons/prometheus.svg" alt="Prometheus" />
                </div>
              </div>
            </div>
            <div className="kapstan-col col-3">
              <div className="kapstan-track">
                <div className="kapstan-node" data-tip="Grafana">
                  <img src="/assets/icons/grafana.svg" alt="Grafana" />
                </div>
                <div className="kapstan-node" data-tip="Google Cloud">
                  <img src="/assets/icons/googlecloud.svg" alt="Google Cloud" />
                </div>
                <div className="kapstan-node" data-tip="Azure">
                  <img src="/assets/icons/azure.svg" alt="Azure" />
                </div>
                <div className="kapstan-node" data-tip="GitLab">
                  <img src="/assets/icons/gitlab.svg" alt="GitLab" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
