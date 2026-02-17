import { createRouter, createWebHistory } from 'vue-router'
import mainComp from '@/pages/maincomp.vue'
import skillComp from '@/pages/skills/skillcomp.vue'
import projectComp from '@/pages/projects/projectcomp.vue'
import contactComp from '@/pages/contact/contactcomp.vue'


const routes = [
  {
    path: '/',
    component: mainComp
  },
  {
    path: '/skills',
    component: skillComp
  },
  {
    path: '/projects',
    component: projectComp
  },
  {
    path: '/contact',
    component: contactComp
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
