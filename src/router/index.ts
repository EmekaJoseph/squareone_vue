import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },

    {
      path: '/start_company',
      name: 'Start',
      component: () => import('../views/StartCompany/StartCompany_index.vue')
    }
  ]
})

export default router
