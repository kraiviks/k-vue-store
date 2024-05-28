import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import FavoritiesPage from './pages/FavoritiesPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/favorities', component: FavoritiesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
