import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Cabin Crew Docs",
  description: "Universal Chain of Custody for Autonomous Workflows",
  lang: 'en-US',
  cleanUrls: true,
  
  // The Source of Truth
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.svg', // You'll add this later
    siteTitle: 'Cabin Crew™',
    
    nav: [
      { text: 'Protocol', link: '/guide/protocol-intro' },
      { text: 'Orchestrator', link: '/guide/orchestrator-intro' },
      { text: 'Main Site', link: 'https://cabincrew.dev' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Cabin Crew?', link: '/guide/what-is-cabin-crew' },
          { text: 'Architecture', link: '/guide/architecture' }
        ]
      },
      {
        text: 'The Protocol',
        items: [
          { text: 'Overview', link: '/guide/protocol-intro' },
          { text: 'Inputs & Outputs', link: '#' } // Placeholders
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cabincrew-dev' }
    ],

    footer: {
      message: 'Released under Apache 2.0 License.',
      copyright: 'Copyright © 2025 Cabin Crew Software Ltd.'
    },
    
    search: {
      provider: 'local'
    }
  }
})
