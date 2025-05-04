import { createRouter, createWebHistory } from 'vue-router'

import Inicio from './views/Inicio.vue'
import Detalhes from './views/Detalhes.vue'

const routes = [
  { path: '/', component: Inicio },
  { path: '/detalhes/:id', component: Detalhes },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 }
  },
})

export default router
