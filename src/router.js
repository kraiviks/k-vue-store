import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import FavoritiesPage from './pages/FavoritiesPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Vue Store'
    }
  },
  {
    path: '/favorities',
    component: FavoritiesPage,
    meta: {
      title: 'Vue Store | Favorities'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Default Title'
})

export default router
