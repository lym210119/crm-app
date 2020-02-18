<template>
	<movable-area class="uni-fab-box">
<!-- 		<view class="uni-padding-wrap">
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn(0)"><text class="word-btn-white">切换菜单({{ directionStr }}显示)</text></view>
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn('left', 'bottom')"><text class="word-btn-white">左下角显示</text></view>
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn('right', 'bottom')"><text class="word-btn-white">右下角显示</text></view>
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn('left', 'top')"><text class="word-btn-white">左上角显示</text></view>
			<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="switchBtn('right', 'top')"><text class="word-btn-white">右上角显示</text></view>
		</view> -->

			<movable-view :x="x" :y="y" direction="vertical" @change="onChange">
					<view class="fab-bar">
						<view class="fab-item" style="background-color: #1ab394;">
							<text class="iconfont icon-hebingxingzhuang" v-show="isCloseBtn" @tap="handleClose"></text>
							<text class="iconfont icon-bohao" v-show="!isCloseBtn" @tap="handleOpen"></text>
						</view>
						<view class="fab-item" @tap="hideAfterBtn()" v-show="isShowShiXianOrCalling" :style="'background-color:' + activeStatusBgColor">
							<text class="fab-item-text">{{activeStatusText}}</text>
							<text class="fab-item-text">00:00:00</text>
						</view>
						<view class="fab-item fab-item-btn" @tap="handleCallStatus(item)" :style="'background-color:' + item.bgColor" v-for="(item, i) in fabItem" :key="i" v-show="isShowOtherBtn">
							<text class="icon iconfont" :class="item.icon"></text>
							<text class="fab-item-text">{{item.title}}</text>
						</view>
					</view>

				<!-- <uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction" @trigger="trigger" /> -->
			</movable-view>

	</movable-area>
</template>

<script>
	// import uniFab from '@/components/uni-fab/uni-fab.vue'
	export default {
		components: {
			// uniFab
		},
		data() {
			return {
				isCloseBtn: false,
				isShowShiXianOrCalling: false,
				isShowOtherBtn: false,
				activeStatusText: '示闲中',
				activeStatusBgColor: '#1ab394',
				fabItem: [
					{
						id: 1,
						icon: 'icon-shimang',
						title: '示忙',
						bgColor: '#f8ac59'
					},
					{
						id: 2,
						icon: 'icon-bohao',
						title: '拨号',
						bgColor: '#23c6c8'
					},
					{
						id: 3,
						icon: 'icon-guaji',
						title: '挂机',
						bgColor: '#666666'
					}
				],
				x: -450,
				y: 80,
				old: {
					x: -450,
					y: 80
				}
			}
		},
		// onLoad() {
		// 	this.x = uni.upx2px(-80) - uni.upx2px(-50)
		// 	console.log(this.x)
		// },
		onBackPress() {
			if (this.$refs.fab.isShow) {
				this.$refs.fab.close()
				return true
			}
			return false
		},
		methods: {
			handleCallStatus(item) {
				switch (item.id) {
					case 1:
						uni.showToast({
							title: '你点击了' + item.title,
							icon: 'none'
						})
							item.title = item.title === '示忙' ? '示闲' : '示忙'
							item.bgColor = item.bgColor === '#f8ac59' ? '#1ab394' : '#f8ac59'
							item.icon = item.icon === 'icon-shimang' ? 'icon-shixian' : 'icon-shimang'
							this.activeStatusText = this.activeStatusText === '示闲中' ? '示忙中' : '示闲中'
							this.activeStatusBgColor = this.activeStatusBgColor === '#1ab394' ? '#f8ac59' : '#1ab394'

						break;
					case 2:
						uni.showToast({
							title: '你点击了' + item.title,
							icon: 'none'
						})
						break;
					case 3:
						uni.showToast({
							title: '你点击了' + item.title,
							icon: 'none'
						})
						break;				
					default:
						break;
				}
			},
			hideAfterBtn() {
				this.isShowOtherBtn = !this.isShowOtherBtn
				// this.x = this.old.x
				this.y = this.old.y
				this.$nextTick(function() {
						// this.x = -300
						this.y = this.old.y
				})
			},
			handleOpen() {
				this.isCloseBtn = true
				this.isShowShiXianOrCalling = true
				this.isShowOtherBtn = true
				// this.x = this.old.x
				this.y = this.old.y
				this.$nextTick(function() {
						// this.x = -400
						this.y = this.old.y
				})
			},
			handleClose() {
				this.isCloseBtn = false
				this.isShowShiXianOrCalling = false
				this.isShowOtherBtn = false
				// this.x = this.old.x
				this.y = this.old.y
				// console.log(-100)
				this.$nextTick(function() {
						// this.x = -100
						this.y = this.old.y
				})
			},
			// tap: function(e) {
			//     this.x = this.old.x
			//     this.y = this.old.y
			//     this.$nextTick(function() {
			//         this.x = 30
			//         this.y = 30
			//     })
			// },
			onChange: function(e) {
			    this.old.x = e.detail.x
			    this.old.y = e.detail.y
			},
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
		height: 100upx;
		width: auto;

		color: #fff;
		z-index: 100;
	}

	.fab-bar {
		display: flex;
		flex-direction: row;
		/* width: 500upx; */
		height: 100%;

	}
	.fab-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100upx;
		background-color: #333333;
		border-right: 1upx solid #FFFFFF;
	}
	.fab-item:nth-of-type(2) {
		width: 150upx;
	}
	.fab-item:first-child {
				border-radius: 50% 0 0 50%;
	}
	.fab-item>text {
		font-size: 24upx;
	
	}
	.fab-item-btn>text {
		margin-top: -30upx;
	}
	.fab-item>text.iconfont {
		font-size: 50upx;
		color: #FFFFFF;
	}
	.fab-item>text.iconfont.icon {
		font-size: 60upx;
	}

	movable-area {
		/* position: relative; */

		/* height: 500upx; */

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
		position: absolute;
		top: 0;
		bottom: 0;
		/* left: 0; */
		right: 0;
		z-index: 2;
		background-color: transparent;
		width: 0;
		height: 100%;
		/* overflow: hidden; */
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