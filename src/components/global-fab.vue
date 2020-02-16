<template>
	<view class="uni-fab-box">
<!-- 		<view class="uni-padding-wrap">
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn(0)"><text class="word-btn-white">切换菜单({{ directionStr }}显示)</text></view>
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn('left', 'bottom')"><text class="word-btn-white">左下角显示</text></view>
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn('right', 'bottom')"><text class="word-btn-white">右下角显示</text></view>
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn('left', 'top')"><text class="word-btn-white">左上角显示</text></view>
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn('right', 'top')"><text class="word-btn-white">右上角显示</text></view>
		</view> -->
		<!-- <movable-view :x="x" :y="y" direction="all" @change="onChange"> -->
			<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction" @trigger="trigger" />
		<!-- </movable-view> -->
	</view>
</template>

<script>
	import uniFab from '@/components/uni-fab/uni-fab.vue'
	export default {
		components: {
			uniFab
		},
		data() {
			return {
				// x: 0,
				// y: 0,
				// old: {
				// 	x: 0,
				// 	y: 0
				// },
				title: 'uni-fab',
				directionStr: '垂直',
				horizontal: 'right',
				vertical: 'top',
				direction: 'horizontal',
				pattern: {
					color: '#FFFFFF',
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					selectedColor: '#f09235',
					buttonColor: 'rgba(0, 0, 0, 0.5)'
				},
				content: [{
						iconPath: '/static/fabBar/shixian.png',
						selectedIconPath: '/static/fabBar/shixian.png',
						text: '示闲',
						active: false
					},
					{
						iconPath: '/static/fabBar/qunhu.png',
						selectedIconPath: '/static/fabBar/qunhu.png',
						text: '群呼',
						active: false
					},
					{
						iconPath: '/static/fabBar/bohao.png',
						selectedIconPath: '/static/fabBar/bohao.png',
						text: '拨号',
						active: false
					},
					{
						iconPath: '/static/fabBar/guaji.png',
						selectedIconPath: '/static/fabBar/guaji.png',
						text: '挂机',
						active: false
					}
				]
			}
		},
		onBackPress() {
			if (this.$refs.fab.isShow) {
				this.$refs.fab.close()
				return true
			}
			return false
		},
		methods: {
			// tap: function(e) {
			//     this.x = this.old.x
			//     this.y = this.old.y
			//     this.$nextTick(function() {
			//         this.x = 30
			//         this.y = 30
			//     })
			// },
			// onChange: function(e) {
			//     this.old.x = e.detail.x
			//     this.old.y = e.detail.y
			// },
			trigger(e) {
				console.log(e)
				// this.content[e.index].active = !e.item.active
				uni.showModal({
					title: '提示',
					content: `您选中了${e.item.text}`,
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定')
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			}
		}
	}
</script>

<style>
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}

	/* #endif */

	/* #ifndef APP-NVUE */
	
	movable-view {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 150upx;
		width: 150upx;
		background-color: #007AFF;
		color: #fff;
	}


	view {
		font-size: 14px;
		line-height: inherit;
	}

	.example {
		padding: 0 15px 15px;
	}

	.example-info {
		padding: 15px;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 15px;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}

	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}


	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}

	.uni-fab-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
/* 		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0; */
	}

	.uni-padding-wrap {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.word-btn {
		width: 250px;
	}
</style>