import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './assets/scoring.css'

import ImageView from './components/ImageView.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('ImageView', ImageView)
  }
} satisfies Theme
