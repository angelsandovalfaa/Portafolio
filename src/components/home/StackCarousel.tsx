import { motion, useReducedMotion } from 'framer-motion'

type StackIcon = {
  label: string
  src: string
}

const COL_ONE: StackIcon[] = [
  { label: 'Slack', src: '/assets/icons/slack.svg' },
  { label: 'Jenkins', src: '/assets/icons/jenkins.svg' },
  { label: 'GitHub', src: '/assets/icons/github-white.svg' },
  { label: 'Docker', src: '/assets/icons/docker.svg' },
]

const COL_TWO: StackIcon[] = [
  { label: 'Prometheus', src: '/assets/icons/prometheus.svg' },
  { label: 'AWS', src: '/assets/icons/aws.svg' },
  { label: 'Terraform', src: '/assets/icons/terraform.svg' },
  { label: 'Kubernetes', src: '/assets/icons/kubernetes.svg' },
]

const COL_THREE: StackIcon[] = [
  { label: 'Azure', src: '/assets/icons/azure.svg' },
  { label: 'GitLab', src: '/assets/icons/gitlab.svg' },
  { label: 'Grafana', src: '/assets/icons/grafana.svg' },
  { label: 'Google Cloud', src: '/assets/icons/googlecloud.svg' },
]

function OrbItem({ item, index }: { item: StackIcon; index: number }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      key={`${item.label}-${index}`}
      tabIndex={0}
      role="img"
      aria-label={`Tecnología ${item.label}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      className="group relative flex h-[7.05rem] w-[7.05rem] items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,.12),rgba(15,23,42,.72)_72%)] shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_10px_30px_rgba(2,6,23,.55)] outline-none"
    >
      <img
        src={item.src}
        alt={item.label}
        className="h-12 w-12 object-contain opacity-95 transition duration-500 group-hover:scale-110"
      />

      <motion.span
        variants={
          prefersReducedMotion
            ? { rest: { opacity: 1 }, hover: { opacity: 1 } }
            : {
                rest: { opacity: 0, y: 8, scale: 0.96 },
                hover: { opacity: 1, y: 0, scale: 1 },
              }
        }
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border border-violet-200/25 bg-[#0b1222]/95 px-2 py-1 text-[10px] font-semibold tracking-[0.08em] text-violet-100 shadow-[0_8px_25px_rgba(10,12,24,0.55)]"
      >
        {item.label}
      </motion.span>
    </motion.div>
  )
}

function OrbColumn({
  icons,
  reverse,
  duration,
}: {
  icons: StackIcon[]
  reverse?: boolean
  duration: number
}) {
  const prefersReducedMotion = useReducedMotion()
  const stack = [...icons, ...icons]

  return (
    <div className="relative h-[30rem] w-[7.5rem] overflow-hidden rounded-[999px]">
      <motion.div
        className="flex flex-col gap-4"
        animate={
          prefersReducedMotion
            ? undefined
            : reverse
              ? { y: ['calc(-50% - 0.5rem)', '0%'] }
              : { y: ['0%', 'calc(-50% - 0.5rem)'] }
        }
        transition={
          prefersReducedMotion ? undefined : { duration, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }
        }
      >
        {stack.map((item, index) => (
          <OrbItem key={`${item.label}-${index}`} item={item} index={index} />
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#040915] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#040915] to-transparent" />
    </div>
  )
}

export function StackCarousel() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, x: 20, scale: 0.98 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 1, x: 0, scale: 1, y: [0, -6, 0] }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }
          : {
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
              y: { duration: 5.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' },
            }
      }
      className="relative mx-auto w-fit"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(79,70,229,.28)_0%,rgba(12,18,36,0)_72%)] blur-2xl" />
      <div className="flex items-center gap-4 p-1">
        <OrbColumn icons={COL_ONE} duration={16} />
        <OrbColumn icons={COL_TWO} duration={19} reverse />
        <OrbColumn icons={COL_THREE} duration={17} />
      </div>
    </motion.div>
  )
}
