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
    console.log(location)
    config.baseURL = location.origin + '/crm-app'
  } else {
    config.baseURL = 'https://style65.gitee.io/crm-app'
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
    },
    // 资方
    getZifangList() {
      return minRequest.get('/static/mock/zifang.json')
    },
    // 做单人员
    getZuodanrenyuan() {
      return minRequest.get('/static/mock/zuodanrenyuan.json')
    }
  }
}