// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/mon-coach',
    component: () => import('@/pages/MyCoach.vue'),
  },
  {
    path: '/tarif',
    component: () => import('@/pages/Tarifs.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
