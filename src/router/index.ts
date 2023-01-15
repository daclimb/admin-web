import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainView from '../views/MainView.vue'
import GymDetailView from '../views/GymDetailView.vue'
import GymEditView from '../views/GymEditView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/gym-detail',
    name: 'gym-detail',
    component: GymDetailView
  },
  {
    path: '/gym-edit',
    name: 'gym-add',
    component: GymEditView
  },
  {
    path: '/gym-edit/:id',
    name: 'gym-update',
    component: GymEditView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
