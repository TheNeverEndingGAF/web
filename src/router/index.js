import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Arma from '@/pages/Arma'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/arma',
      name: 'arma',
      component: Arma
    }
  ]
})
