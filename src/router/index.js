import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LogoDownload from '@/components/LogoDownload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },
    {
      path: '/home/:lng/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/logo/:lng/',
      name: "LogoDownload",
      component: LogoDownload,
    }
  ]
})


