import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import SuperDashboard from '@/views/SuperAdminDashboard.vue'
import SchoolDashboard from '@/views/SchoolDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/super-dashboard',
    name: 'SuperDashboard',
    component: SuperDashboard
  },
  {
    path: '/school-dashboard',
    name: 'SchoolDashboard',
    component: SchoolDashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
