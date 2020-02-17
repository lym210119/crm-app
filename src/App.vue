<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
	}
</script>

<style>
	/*每个页面公共css */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';
	/* 引入 iconfont 8*/
	@import 'https://at.alicdn.com/t/font_1631979_g34ama2ndbc.css';
	/* 引入动画库 */
	@import './common/animate.css';

	page {
		background-color: #F3F5F9;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
</style>
