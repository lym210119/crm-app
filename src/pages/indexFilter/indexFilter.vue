<template>
	<view class="indexFilter">
		<view class="time-select">
			<view class="time-select-label">
				时间
			</view>
			<view class="time-select-list">
				<view class="time-select-item" :class="{'selected' : selectedId===item.id}" v-for="(item, i) in dateRangeList" :key="item.id" @tap="selectedId = item.id">{{item.label}}</view>
			</view>
		</view>
		<view class="time-custom">
			<view class="time-custom-label">
				自定义
			</view>
			<view class="picker-data-container">
				<picker mode="date" :value="startDateVal" :start="startDate" :end="endDate" @change="bindStartDateChange">
					<view class="uni-input">{{startDateVal ? startDateVal : '开始时间'}}</view>
				</picker>
				<view class="">
					--
				</view>
				<picker mode="date" :value="endDateVal" :start="startDate" :end="endDate" @change="bindEndDateChange">
					<view class="uni-input">{{endDateVal ? endDateVal : '结束时间'}}</view>
				</picker>			
			</view>

		</view>
	</view>
</template>

<script>
	// import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				dateRangeList: [{
					id: 1,
					label: '今天',
				}, {
					id: 2,
					label: '昨天',
				}, {
					id: 3,
					label: '本周',
				}, {
					id: 4,
					label: '上周',
				},  {
					id: 5,
					label: '本月',
				}, {
					id: 6,
					label: '上月',
				}, {
					id: 7,
					label: '本季度',
				}, {
					id: 8,
					label: '上季度',
				}, {
					id: 9,
					label: '本年',
				}, {
					id: 10,
					label: '去年',
				}],
				selectedId: 5,
				startDateVal: '',
				endDateVal: ''
			}
		},
		onNavigationBarButtonTap(e) {
			uni.switchTab({
				url: '/pages/index/index'
			})
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			// ...mapMutations(['setIndexDateRange']),
			bindStartDateChange: function(e) {
				if (this.timeStr(e.target.value) > this.timeStr(this.endDateVal)) {
					uni.showToast({
						title: '开始时间不能大于结束时间',
						icon: 'none'
					})
					return 
				}
				this.startDateVal = e.target.value
				if (this.startDateVal && this.endDateVal) {
					this.selectedId = ''
				}
			},
			bindEndDateChange: function(e) {
				if (this.timeStr(e.target.value) < this.timeStr(this.startDateVal)) {
					uni.showToast({
						title: '开始时间不能大于结束时间',
						icon: 'none'
					})
					return 
				}
				this.endDateVal = e.target.value
				if (this.startDateVal && this.endDateVal) {
					this.selectedId = ''
				}
			},
			timeStr(data) {
				return new Date(data.split('-').join('/')).getTime();
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 10; // 时间范围限制
				} else if (type === 'end') {
					year = year;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style>
	.time-select,
	.time-custom {
		display: flex;
		flex-direction: row;
		padding: 20upx 30upx;
		background-color: #FFFFFF;
		border-bottom: 1upx solid #F1F1F1;
	}

	.time-select-label,
	.time-custom-label {
		width: 120upx;
		line-height: 80upx;
		flex-shrink: 0;
		font-size: 32upx;
		color: #999999;
	}

	.time-select-list {
		flex: 1;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.time-select-item {
		width: 150upx;
		height: 64upx;
		line-height: 64upx;
		margin: 15upx 20upx;
		background-color: #f4f4f4;
		border-radius: 10upx;
		color: #666666;
		text-align: center;
	}

	.time-select-item.selected {
		background-color: #007AFF;
		color: #FFFFFF;
	}
	.picker-data-container {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	
</style>
