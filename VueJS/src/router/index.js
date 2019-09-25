import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import FreeUser from '../pages/FreeUser'
import AccessDenied from '../pages/AccessDenied'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAuth: true,
        role: ['Administrador']
      }
    },
    {
      path: '/freeuser',
      name: 'FreeUser',
      component: FreeUser,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/accessdenied',
      name: 'AccessDenied',
      component: AccessDenied,
      meta: {
        requiresAuth: false
      }
    }
  ]
})
