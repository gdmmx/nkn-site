// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import LangStorage from './helpers/lang'


Vue.use(VueAxios, axios)
Vue.use(VueI18n)


const i18n = new VueI18n({
  locale: LangStorage.getLang('en'),  // 语言标识
  messages: {
    'zh': require('./common/lang/zh'),
    'en': require('./common/lang/en'),
    'jp': require('./common/lang/jp'),
    'kr': require('./common/lang/kr')
  }
})

window.$nknI18n = i18n

LangStorage.setLang('en')


Vue.config.productionTip = false

let lanHomeList = {
  'zh': {lang: 'zh'},
  'en': {lang: 'en'},
  'jp': {lang: 'jp'},
  'kr': {lang: 'kr'},
  '-' : {lang: 'en'},
}

router.beforeEach((to, from, next) => {
  if("Index" === to.name) {
    next()
    return
  }

  if(to.fullPath === from.fullPath) {
    next()
    return
  }

  let locale = to.params.lng
  window.$nknI18n.locale = locale
  LangStorage.setLang(locale)

  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: {App}
})
