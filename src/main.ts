import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useColorMode } from '@vueuse/core'
import App from './App.vue'
import './style.css'

// Initialize color mode
const colorMode = useColorMode({
  attribute: 'class',
  initialValue: 'light',
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/HomePage.vue')
    },
    {
      path: '/expertise',
      component: () => import('./pages/ExpertisePage.vue')
    },
    {
      path: '/about',
      component: () => import('./pages/AboutPage.vue')
    },
    {
      path: '/contact',
      component: () => import('./pages/ContactPage.vue')
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')