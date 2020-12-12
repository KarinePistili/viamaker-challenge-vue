import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import SuperDashboard from '@/views/SuperAdminDashboard.vue'
import SchoolDashboard from '@/views/SchoolDashboard.vue'
import ManageSchools from '@/views/ManageSchools.vue'
import SchoolClass from '@/views/SchoolClass.vue'

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
    path: '/school-dashboard/:schoolid',
    name: 'SchoolDashboard',
    component: SchoolDashboard
  },
  {
    path: '/super-dashboard/schools',
    name: 'ManageSchools',
    component: ManageSchools
  },
  {
    path: '/school-dashboard/:schoolid/class/:classid',
    name: 'ManageClass',
    component: SchoolClass
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
