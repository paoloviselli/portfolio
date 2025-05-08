import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Paolo Viselli',
  initials: 'PV',
  url: 'https://paoloviselli.com',
  location: 'London, UK',
  locationLink: 'https://www.google.com/maps/place/london',
  description:
    'Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.',
  summary:
    'Driven by a passion for impactful innovation, I specialize in designing and engineering products that solve real-world challenges.',
  avatarUrl: '/me.png',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'Tailwind CSS',
    'Figma',
    'Product Prototyping',
    'Product Design',
    'Product Road-mapping',
    'Market Analysis',
    'A/B Testing',
    'Agile (Scrum, Kanban)',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'viselli.paolo@outlook.com',
    tel: '+44 7549576820',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/paoloviselli',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/paolo-viselli/',
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/paoloviselli',
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: 'Send Email',
        url: 'mailto:viselli.paolo@outlook.com',
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: 'Affinity Shipping LLP',
      href: '',
      badges: [],
      location: 'London, UK',
      title: 'Product Engineer',
      logoUrl: '/affinity.png',
      start: 'Mar 2022',
      end: 'Present',
      description:
        'Leading the product design and front-end development of an AI-powered shipbroking platform used by 50+ shipbrokers. Replaced 3rd party alternatives, saving over £100k in annual subscriptions. Optimized API performance and AI workflows, doubling speed and accuracy. Defined the product roadmap, conducted market analysis, and led the website migration to React Server Components for performance and SEO.',
    },
    {
      company: 'Discovertsy',
      href: '',
      badges: [],
      location: 'London, UK',
      title: 'Co-Founder & Head of Product',
      logoUrl: '/discovertsy.png',
      start: 'Dec 2022',
      end: 'Jan 2024',
      description:
        'Co-founded and led development of a travel app for personalized city explorations. Led a cross-functional team of 3, implemented Agile, conducted user research, and secured API integrations that tripled platform capabilities.',
    },
    {
      company: 'Growy',
      href: '',
      badges: [],
      location: 'London, UK',
      title: 'Product Manager & Mobile Developer',
      logoUrl: '/growy.png',
      start: 'Apr 2022',
      end: 'Aug 2022',
      description:
        'Led a team of 3 mobile developers to deliver an MVP in 5 months, collaborating closely with the CEO. Coordinated cross-functional communication between design, development, and executive teams.',
    },
    {
      company: 'Caxton FX',
      href: '',
      badges: [],
      location: 'London, UK',
      title: 'Corporate Sales & Research Analyst Intern',
      logoUrl: '/caxton.png',
      start: 'Apr 2019',
      end: 'Dec 2019',
      description:
        'Produced data-driven market analyses and sales reports that informed strategic product decisions. Led a team of 3 interns in comprehensive market research and lead generation.',
    },
  ],
  education: [
    {
      school: 'University of Westminster | Westminster Business School',
      href: '',
      degree: 'BSc (Hons) Business Economics',
      logoUrl: '/uow.png',
      start: 'Sep 2018',
      end: 'Jul 2021',
      description: 'First Class Honours',
    },
  ],
  certifications: [
    {
      school: 'Università Bocconi',
      href: '',
      degree: 'Private Equity and Venture Capital',
      logoUrl: '',
      start: 'Nov 2024',
      end: '',
      provider: 'Coursera',
    },
  ],
  languages: ['Italian (Native)', 'English (Fluent)'],
  interests: [
    'Investing & Finance',
    'Business',
    'Product',
    'Software Development',
    'Artificial Intelligence',
  ],
  sports: ['Brazilian Jiu Jitsu', 'Tennis', 'Football', 'Swimming', 'Running'],
  projects: [
    {
      title: 'TL;DR Bookmarker',
      href: 'https://handl.work',
      dates: 'Apr 2025 - Ongoing',
      active: true,
      description:
        'A Chrome extension and mobile app that let you save articles, posts, or videos to watch later, and provide a TLDR; summary of them the next morning.',
      technologies: [
        'Next.js',
        'Node.js',
        'AI SDK',
        'Typescript',
        'PostgreSQL',
        'Drizzle ORM',
        'TailwindCSS',
        'Shadcn UI',
        'OpenRouter API',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://handl.work',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Figma',
          href: 'https://github.com/magicuidesign/magicui',
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: '',
      video: 'https://cdn.magicui.design/bento-grid.mp4',
    },
    {
      title: 'Handl Work',
      href: 'https://handl.work',
      dates: 'Jan 2025 - Apr 2025',
      active: true,
      description:
        'Designed, developed and launched a SaaS for a construction companies to hire and manage their workforce.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Drizzle ORM',
        'TailwindCSS',
        'Stripe',
        'Shadcn UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://handl.work',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Figma',
          href: 'https://github.com/magicuidesign/magicui',
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: '',
      video: 'https://cdn.magicui.design/bento-grid.mp4',
    },
    {
      title: 'Discovertsy',
      href: 'https://chatcollect.com',
      dates: 'Jan 2024 - Feb 2024',
      active: true,
      description:
        'With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.',
      technologies: [
        'Next.js',
        'Expo',
        'Typescript',
        'Firebase',
        'TailwindCSS',
        'Stripe',
      ],
      links: [
        {
          type: 'Website',
          href: 'http://discovertsy.com/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Figma',
          href: 'https://www.figma.com/design/Xg5iXi0aDRT3IoylnuAoO5/Discovertsy?node-id=1-3&t=2EylZ3AAfKTXj9DA-1',
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: '',
      video:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4',
    },
    {
      title: 'Valda',
      href: 'https://llm.report',
      dates: 'April 2024',
      active: true,
      description:
        'Designed and Developed a website for a large manufacturing company in Bulgaria.',
      technologies: [
        'Next.js',
        'Typescript',
        'Sanity CMS',
        'Chackra UI',
        'Next Intl',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://www.valdagroup.com/en',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: 'https://cdn.llm.report/openai-demo.mp4',
    },
    {
      title: 'Appeteat',
      href: 'https://automatic.chat',
      dates: 'April 2023 - March 2024',
      active: true,
      description:
        'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Shadcn UI',
        'Magic UI',
        'Stripe',
        'Cloudflare Workers',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://automatic.chat',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4',
    },
  ],
  // hackathons: [
  //   {
  //     title: 'Hack Western 5',
  //     dates: 'November 23rd - 25th, 2018',
  //     location: 'London, Ontario',
  //     description:
  //       'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
  //     links: [],
  //   },
  //   {
  //     title: 'Hack The North',
  //     dates: 'September 14th - 16th, 2018',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed a mobile application which delivers university campus wide events in real time to all students.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
  //     links: [],
  //   },
  //   {
  //     title: 'FirstNet Public Safety Hackathon',
  //     dates: 'March 23rd - 24th, 2018',
  //     location: 'San Francisco, California',
  //     description:
  //       'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
  //     icon: 'public',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
  //     links: [],
  //   },

  // ],
} as const;
