import Vue from 'vue'
import App from './App'

import MinRequest from './MinRequest'
import minRequest from './api'

Vue.config.productionTip = false

App.mpType = 'app'

// 注册请求
Vue.use(MinRequest)
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

const app = new Vue({
  ...App,
  minRequest
})
app.$mount()
