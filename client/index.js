import Vue from 'vue'
import Router from 'vue-router'

import App from './app.vue'
import createRouter from './config/router'

import './assets/styles/global.styl'

Vue.use(Router)

const router = createRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
