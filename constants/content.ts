export const SITE = {
  name: 'MPL Digital',
  tagline: 'Strategy meets code.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@mpldigital.co.uk',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mpldigital.co.uk',
  location: 'North Wales & North West England',
};

export const NAV = {
  links: [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: { label: 'Start a project', href: '#contact' },
};

export const HERO = {
  headline: 'Strategy meets code.',
  subheadline:
    'Web applications and digital strategy for ambitious businesses across North Wales and the North West.',
  ctas: [
    { label: 'See our services', href: '#services', variant: 'primary' as const },
    { label: 'Get in touch', href: '#contact', variant: 'ghost' as const },
  ],
};

export const SERVICES = {
  headline: 'What we do',
  items: [
    {
      id: 'web-app-development',
      title: 'Web App Development',
      description:
        'Bespoke web applications built for performance and scale. From MVPs to full-stack platforms, we engineer solutions that work hard for your business.',
      icon: 'Code2' as const,
    },
    {
      id: 'digital-strategy',
      title: 'Digital Strategy',
      description:
        'Clarity before code. We help you define the right digital approach, identify opportunities, and build a roadmap that delivers real outcomes.',
      icon: 'LineChart' as const,
    },
    {
      id: 'crm-integration',
      title: 'CRM & Systems Integration',
      description:
        'Connect your tools, automate your workflows, and give your team a single source of truth. We specialise in Zoho CRM and custom API integrations.',
      icon: 'Plug' as const,
    },
    {
      id: 'social-media-strategy',
      title: 'Social Media & Marketing Strategy',
      description:
        'Data-informed strategies across the platforms that matter. Content planning, channel strategy, and campaign execution for measurable growth.',
      icon: 'Megaphone' as const,
    },
  ],
};

export const ABOUT = {
  headline: 'Built on craft. Driven by results.',
  body: 'MPL Digital is a specialist consultancy working with growing businesses and organisations across North Wales and the North West. We combine technical depth with strategic thinking to deliver digital work that actually moves the needle.',
  trustIndicators: [
    { label: 'Based in North Wales', icon: 'MapPin' as const },
    { label: 'UK-focused', icon: 'Flag' as const },
    { label: 'End-to-end delivery', icon: 'Layers' as const },
  ],
  stats: [
    // TODO: Replace with verified stats before launch
    { value: '10+', label: 'Projects delivered' },
    { value: '5+', label: 'Years experience' },
    { value: '100%', label: 'UK-based clients' },
  ],
};

export const PROCESS = {
  headline: 'How we work',
  subheadline:
    'A clear, repeatable process that gets results — from first conversation to live product.',
  steps: [
    {
      number: '01',
      title: 'Discover',
      description:
        "We start by understanding your business, your users, and the problem you're solving. No assumptions, no templates.",
      icon: 'Search' as const,
    },
    {
      number: '02',
      title: 'Strategise',
      description:
        'We define the right approach, map the solution, and agree a roadmap before a single line of code is written.',
      icon: 'Map' as const,
    },
    {
      number: '03',
      title: 'Build',
      description:
        'We engineer, design, and ship — with regular check-ins and complete transparency throughout.',
      icon: 'Hammer' as const,
    },
    {
      number: '04',
      title: 'Grow',
      description:
        "Launch is the beginning. We support, iterate, and help you scale what's working.",
      icon: 'TrendingUp' as const,
    },
  ],
};

export const WORK = {
  headline: 'Selected work',
  subheadline:
    "Case studies coming soon. We're currently working with clients across North Wales and the North West.",
  projects: [
    {
      title: 'Client Project',
      tag: 'Web App Development',
      description:
        'A full-stack web application built to streamline operations for a growing business.',
      placeholder: true,
    },
    {
      title: 'Client Project',
      tag: 'Digital Strategy',
      description: 'A comprehensive digital strategy and roadmap for a regional organisation.',
      placeholder: true,
    },
    {
      title: 'Client Project',
      tag: 'CRM & Integration',
      description:
        'End-to-end CRM implementation and systems integration for a service-based business.',
      placeholder: true,
    },
  ],
};

export const CONTACT = {
  headline: "Let's build something.",
  subtext: "Whether you have a brief or just an idea, we'd love to hear from you.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@mpldigital.co.uk',
  formNote:
    'Your data will only be used to respond to your enquiry. See our Privacy Policy for details.',
};

export const FOOTER = {
  tagline: 'Strategy meets code.',
  links: [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  social: [
    // TODO: Add social profile URLs before launch
    { label: 'LinkedIn', href: '', icon: 'Linkedin' as const },
    { label: 'GitHub', href: '', icon: 'Github' as const },
  ],
  location: 'North Wales & North West England',
};

export const SEO = {
  title: 'MPL Digital — Strategy meets code.',
  description:
    'MPL Digital is a web app development and digital strategy consultancy based in North Wales, serving businesses across North Wales and the North West.',
  ogTitle: 'MPL Digital — Strategy meets code.',
  ogDescription:
    'Web applications and digital strategy for ambitious businesses across North Wales and the North West.',
  twitterCard: 'summary_large_image' as const,
};
