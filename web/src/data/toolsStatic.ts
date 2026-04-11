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
    title: 'Design.',
    subtitle: 'Best designer tools',
    cards: [
      {
        href: 'https://www.framer.com/',
        icon: '/assets/icons/illustrator.png',
        title: 'Adobe Illustrator',
        desc: 'Adobe Illustrator offers 2D or 3D graphics manipulation to increase efficiency in the design workflow.',
        tags: ['Design', 'No Code', 'Feedback'],
      },
      {
        href: 'https://www.readymag.com/',
        icon: '/assets/icons/spline.webp',
        title: 'Spline',
        desc: 'Create 3D objects, edit materials, add interactivity, and export. Control the outcome of your 3d design work.',
        tags: ['Design', '3D', 'No Code'],
      },
      {
        href: 'https://www.figma.com/',
        icon: '/assets/icons/figma.png',
        title: 'Figma',
        desc: 'Figma is a web-based interface design application to collaborate in managing design projects.',
        tags: ['Design', 'Prototype', 'Feedback'],
      },
      {
        href: 'https://www.frame.io/',
        icon: '/assets/icons/xd.png',
        title: 'Adobe XD',
        desc: 'Adobe XD is a powerful prototyping tool used to create and design user interfaces (UI) and user experiences (UX).',
        tags: ['Design', 'Collaboration', 'Feedback'],
        sizes: '(max-width: 512px) 100vw, 512px',
        srcSet: '/assets/icons/xd.png 512w',
      },
    ],
  },
  {
    title: 'Development.',
    subtitle: 'Seamlessly integrate my engineering workflows',
    cards: [
      {
        href: '',
        icon: '/assets/icons/webflow.png',
        title: 'Webflow',
        desc: "Webflow is a user-friendly and intuitive website builder that makes creating pages easy even for those who don't write code. Forget about developers and let your creativity flow.",
        tags: ['Design', 'No Code', 'Website Builder'],
      },
      {
        href: 'https://zapier.com/app/login',
        icon: '/assets/icons/zapier.webp',
        iconClass: 'white',
        title: 'Zapier',
        desc: 'Whether you need to automate a simple task or build an entire automated system, you can do it all on Zapier.',
        tags: ['API', 'No Code', 'Tool'],
      },
      {
        href: 'https://www.relume.io/',
        icon: '/assets/icons/relume.png',
        title: 'Relume',
        desc: 'Site Builder utilizes a built-in design system and component library of 1000+ components made for Figma & Webflow.',
        tags: ['Design', 'Prototype', 'Feedback'],
      },
      {
        href: 'https://finsweet.com/client-first',
        icon: '/assets/icons/client-first.jpg',
        title: 'Client-First ',
        desc: 'Client-First is a set of guidelines and strategies to help us build Webflow websites. Built and managed by Finsweet.',
        tags: ['No Code', 'Collaboration', 'Feedback'],
      },
    ],
  },
  {
    title: 'Collaboration.',
    subtitle: 'Keep everyone in sync',
    cards: [
      {
        href: 'https://www.notion.co/',
        icon: '/assets/icons/notion.webp',
        title: 'Notion',
        desc: "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.",
        tags: ['No Code', 'Collaboration', 'Feedback'],
        sizes: '(max-width: 512px) 100vw, 512px',
        srcSet: '/assets/icons/notion.webp 512w',
      },
      {
        href: 'https://www.loom.com/',
        icon: '/assets/icons/loom.webp',
        title: 'Loom',
        desc: 'Best free online screen recording tool with advanced video editing and video storage.',
        tags: ['Collaboration', 'Video', 'Feedback'],
        sizes: '(max-width: 512px) 100vw, 512px',
        srcSet: '/assets/icons/loom.webp 512w',
      },
      {
        href: 'https://www.slack.com/',
        icon: '/assets/icons/slack-webflow.webp',
        title: 'Slack',
        desc: "Slack is a new way to communicate with your team. It's faster, better organized, and more secure than email.",
        tags: ['Collaboration', 'Feedback'],
        sizes: '(max-width: 512px) 100vw, 512px',
        srcSet: '/assets/icons/slack-webflow.webp 512w',
      },
      {
        href: 'https://www.screenpresso.com/',
        icon: '/assets/icons/screenpresso.svg',
        title: 'Screenpresso',
        desc: 'Screenpresso is a NEW Light-weight screen grab tool with built-in image editor, user guide generator and sharing options.',
        tags: ['Video', 'Collaboration', 'Feedback'],
      },
    ],
  },
]
