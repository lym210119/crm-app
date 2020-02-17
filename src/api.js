import MinRequest from './MinRequest'

const minRequest = new MinRequest()

// 请求拦截器
minRequest.interceptors.request((request) => {
  uni.showLoading({
    title: "正在加载数据..."
  })
  return request
})

// 响应拦截器
minRequest.interceptors.response((response) => {
  uni.hideLoading()
  return response.data
})

// 设置默认配置
minRequest.setConfig((config) => {
  if (process.env.NODE_ENV === 'development') {
    config.baseURL = 'http://192.168.1.10:8080/crm-app/'
  } else {
    config.baseURL = 'https://65style.github.io/crm-app/'
  }
  return config
})


export default {
  apis: {
    // 首页 uchart 
    getUChartsData () {
      return minRequest.get('/static/mock/ucharts-data.json')
    },
    // 工作台菜单
    getWorkMenu() {
      return minRequest.get('/static/mock/work-list.json')
    }
  }
}