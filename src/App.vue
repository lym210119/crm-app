<script>
	import { mapMutations } from 'vuex'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getStorage({
				key: 'userInfo',
				success: res=> {
					console.log(res)
					var expires = res.expires // 上一次的登录时间
					var now = new Date().getTime()
					this.login(res.data)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
			// 设置 tabbar badge 
			uni.setTabBarBadge({
				index: 3,
				text: '1'
			})
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
   		 ...mapMutations(["login", "logout"])
  	}
	}
</script>

<style>
	/*每个页面公共css */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';
	@import './common/common.css';
	/* 引入 iconfont 8*/
	@import 'https://at.alicdn.com/t/font_1631979_arylgv8ws1.css';
	/* 引入动画库 */
	@import './common/animate.css';

	page {
		overflow: hidden;
		background-color: #F3F5F9;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
</style>
