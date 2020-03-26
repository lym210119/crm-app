import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		// forcedLogin: false,
		hasLogin: false,
		userInfo: {}
	},
	mutations: {
		login(state, provider) {
			console.log(provider);
			state.hasLogin = true;
            // state.userInfo.token = provider.token  
						state.userInfo.userName = provider.username
						provider.expires = new Date().getTime()
            uni.setStorage({//将用户信息保存在本地  
                key: 'userInfo',  
								data: provider 
            })  
		},
		logout(state) {
            state.hasLogin = false  
            state.uerInfo = {}  
            uni.removeStorage({  
                key: 'userInfo'  
            })  
		}
	}
})

export default store