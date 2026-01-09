import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "guide",

  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  
  title: "Příručka zapisovatele WBSC",
  description: "Vitepress site with Czech manual for WBSC scoring system",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Úvod', link: '/foreword' },
      { text: 'Obsah',
        items: [
          { text: '1 - Pozice hráčů', link: '/chapters/1-1-positions' },
          { text: '2 - Scoresheet', link: '/chapters/2-1-scoresheet' },
          { text: '3 - Základní rozehry', link: '/chapters/3-1-basic' },
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
          { 
            text: '1 - Pozice hráčů', 
            items: [
              { text: 'Pozice hráčů', link: '/chapters/1-1-positions' }
            ]
          },
          { 
            text: '2 - Scoresheet', 
            items: [
              { text: 'Scoresheet', link: '/chapters/2-1-scoresheet' },
              { text: 'Záhlaví', link: '/chapters/2-2-scoresheet-header' },
              { text: 'Pálařské pořadí', link: '/chapters/2-3-scoresheet-batters' },
              { text: 'Centrální část', link: '/chapters/2-4-scoresheet-center' },
              { text: 'Statistiky', link: '/chapters/2-5-scoresheet-stats' },
            ]
          },
          { text: '3 - Základní rozehry', 
            items: [
              { text: 'Základní rozehry', link: '/chapters/3-1-basic' },
              { text: 'Auty pálkařů před 1. metou', link: '/chapters/3-2-basic-outs' },
              { text: 'Obsazení mety pálkařem', link: '/chapters/3-3-basic-advances' },
              { text: 'Auty a postupy běžců', link: '/chapters/3-4-basic-runners' },
            ]
          },
          { text: '4 - Pokročilé situace', link: '/chapters/4-advanced' },
          { text: '5 - Střídání', link: '/chapters/5-substitution' },
          { text: '6 - Vyhodnocování', link: '/chapters/6-stats' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AloisSeckar/WBSC-Scoring-Guide' }
    ]
  }
})
