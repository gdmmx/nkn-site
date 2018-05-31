import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FAQ from '@/components/FAQ'
import Calendar from '@/components/Calendar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
