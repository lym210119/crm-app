import Vue from 'vue'
import App from './App'

import MinRequest from './MinRequest'
import minRequest from './api'

import globalFab from './components/global-fab.vue'
Vue.config.productionTip = false

App.mpType = 'app'

// 注册请求
Vue.use(MinRequest)

Vue.component('globalFab', globalFab)

const app = new Vue({
  ...App,
  minRequest
})
app.$mount()
