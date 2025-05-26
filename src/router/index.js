import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Contactme from '@/views/Contactme.vue'
import Runescape from '@/views/Runescape.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/Contactme',
    name: '/Contact_Me',
    component: Contactme
  },
  {
    path:'/Runescape',
    name: 'Runescape',
    component: Runescape
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
