import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Profiles from '../views/Profiles.vue'
import Favorites from '../views/Favorites.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Profiles',
    component: Profiles
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profiles',
    name: 'Profiles',
    component: Profiles
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
