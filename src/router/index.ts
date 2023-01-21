import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainView from '../views/MainView.vue'
import GymEditView from '../views/GymEditView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/gym',
    name: 'new-gym',
    component: GymEditView
  },
  {
    path: '/gym/:id',
    name: 'edit-gym',
    component: GymEditView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
