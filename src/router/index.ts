// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: "home",
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/mon-coach',
    name: "coach",
    component: () => import('@/pages/MyCoach.vue'),
  },
  {
    path: '/tarif',
    name: "tarif",
    component: () => import('@/pages/Tarifs.vue'),
  },
  {
    path: '/me-contacter',
    name: "contacter",
    component: () => import('@/pages/Contact.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
