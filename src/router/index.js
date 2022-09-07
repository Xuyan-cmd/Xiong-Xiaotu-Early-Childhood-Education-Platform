import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/zoo',
    name: 'Zoo',
    component: () => import('../views/Zoo')
  },
  {
    path: '/zooInfo',
    name: 'ZooInfo',
    component: () => import('../views/ZooInfo')
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../views/Community')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  { path: '*', redirect: '/' }

]

const router = new VueRouter({
  routes
})

export default router
