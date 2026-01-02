import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "guide",
  
  title: "Příručka zapisovatele WBSC",
  description: "Vitepress site with Czech manual for WBSC scoring system",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Úvod', link: '/foreword' },
      { text: 'Obsah',
        items: [
          { text: '1 - Pozice hráčů', link: '/chapters/1-positions' },
          { text: '2 - Scoresheet', link: '/chapters/2-scoresheet' },
          { text: '3 - Základní rozehry', link: '/chapters/3-basic' },
          { text: '4 - Pokročilé situace', link: '/chapters/4-advanced' },
          { text: '5 - Střídání', link: '/chapters/5-substitution' },
          { text: '6 - Vyhodnocování', link: '/chapters/6-stats' }
        ]
      }
    ],

    sidebar: [
      { text: 'Úvod', link: '/foreword' },
      {
        text: 'Obsah',
        items: [
          { text: '1 - Pozice hráčů', link: '/chapters/1-positions' },
          { text: '2 - Scoresheet', link: '/chapters/2-scoresheet' },
          { text: '3 - Základní rozehry', link: '/chapters/3-basic' },
          { text: '4 - Pokročilé situace', link: '/chapters/4-advanced' },
          { text: '5 - Střídání', link: '/chapters/5-substitution' },
          { text: '6 - Vyhodnocování', link: '/chapters/6-stats' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AloisSeckar/WBSC-Scoring-Guide' }
    ]
  }
})
