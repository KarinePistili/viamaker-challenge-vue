import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import SuperDashboard from '@/views/SuperAdminDashboard.vue'
import SchoolDashboard from '@/views/SchoolDashboard.vue'
import ManageSchools from '@/views/ManageSchools.vue'
import SchoolClass from '@/views/SchoolClass.vue'
import store from '@/store/index'

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
    component: SuperDashboard,
    beforeEnter: (to, from, next) =>{
      if(store.state.auth.user == null){
        next('/login')
      }
      else{
        next()
      }
    }

  },
  {
    path: '/school-dashboard/:schoolid',
    name: 'SchoolDashboard',
    component: SchoolDashboard,
    beforeEnter: (to, from, next) =>{
      if(store.state.auth.user == null){
        next('/login')
      }
      else{
        next()
      }
    }
  },
  {
    path: '/super-dashboard/schools',
    name: 'ManageSchools',
    component: ManageSchools,
    beforeEnter: (to, from, next) =>{
      if(store.state.auth.user == null){
        next('/login')
      }
      else{
        next()
      }
    }
  },
  {
    path: '/school-dashboard/:schoolid/class/:classid',
    name: 'ManageClass',
    component: SchoolClass,
    beforeEnter: (to, from, next) =>{
      if(store.state.auth.user == null){
        next('/login')
      }
      else{
        next()
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
