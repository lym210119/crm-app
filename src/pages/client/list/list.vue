<template>
  <view class="client-page">
    <uni-nav-bar
      statusBar="true"
      backgroundColor="#19aa8d"
      @clickLeft="handleSearchClick"
    >
      <!-- 左边 -->
      <block slot="left" v-if="!isShowSearch">
        <view class="nav-left">
          <view class="iconfont icon--search1"></view>
        </view>
      </block>
      <block slot="left" v-else>
        <view class="nav-left">
          <view class="close-search" style="font-size: 30upx;">取消</view>
        </view>
      </block>
      <!-- 中间 -->
      <view class="input-view" v-show="isShowSearch">
        <input
          confirm-type="search"
          focus
          class="nav-bar-input"
          type="text"
          placeholder="输入搜索关键词"
          @confirm="confirm"
        />
      </view>
      <view class="tab-content" v-show="!isShowSearch">
        <view
          class="tab-item"
          :class="{ active: tabIndex === i }"
          v-for="(item, i) in tabList"
          :key="item.id"
          @tap="changeTab(i)"
          >{{ item.title }}</view
        >
      </view>
      <!-- 右边 -->
      <block slot="right">
        <view class="nav-right">
          <view class="iconfont icon-add"></view>
        </view>
      </block>
    </uni-nav-bar>

    <view class="header-group-btn" v-show="isOpenOperationBtn">
      <button size="mini" @tap="allSelected">{{isSelect ? '取消' : '全选'}}</button>
      <button size="mini" @tap="handleSelected('throw')">扔公海</button>
      <button size="mini" @tap="handleSelected('allot')">重分配</button>
      <button size="mini">轮呼</button>
    </view>
    <view class="header">
      <view
        class="openSelected"
        @tap="
          isOpenOperationBtn = !isOpenOperationBtn;
          mask = 0;
        "
      >
        展开
        <text class="iconfont icon-arrow-right"></text>
      </view>
      <view class="type" :class="{ 'active': mask === 1 }" @tap="mask = 1;isOpenOperationBtn= false;">
        类型
        <text class="iconfont icon-arrow-right"></text>
      </view>
      <view class="sort" :class="{ 'active': mask === 2 }" @tap="mask = 2;isOpenOperationBtn= false;">
        排序
        <text class="iconfont icon-arrow-right"></text>
      </view>
      <view class="filter" :class="{ 'active': mask === 3 }" @tap="mask = 3;isOpenOperationBtn= false;">
        <text class="iconfont icon-filter"></text>
        筛选
      </view>
    </view>
    <view class="mask-wrap" v-show="mask" @tap="mask = false">
      <view class="type-container" v-show="mask === 1">
        <view>潜在</view>
        <view>意向</view>
        <view>需求</view>
        <view>签单</view>
        <view>放款</view>
      </view>
      <view class="sort-container" v-show="mask === 2">
        <view @tap.stop="selectSort('客户名称正序')">客户名称正序</view>
        <view @tap.stop="selectSort('客户名称倒序')">客户名称倒序</view>
        <view @tap.stop="selectSort('创建时间正序')">创建时间正序</view>
        <view @tap.stop="selectSort('创建时间倒序')">创建时间倒序</view>
        <view @tap.stop="selectSort('最后跟进时间正序')">最后跟进时间正序</view>
        <view @tap.stop="selectSort('最后跟进时间倒序')">最后跟进时间倒序</view>
      </view>
      <view class="filter-container" v-show="mask === 3">
        <view class="filter-list">
          <view class="filter-list-left">
            <view class="current">
              筛选场景
            </view>
          </view>
          <view class="filter-list-right">
            <view>全部客户</view>
            <view>我负责的客户</view>
            <view>下属负责的客户</view>
            <view>我参与的客户</view>
            <view>我关注的客户</view>
            <view>重点客户</view>
            <view>次重点客户</view>
          </view>
        </view>
        <view class="filter-bottom">
          <view style="color: #007AFF;">自定义筛选</view>
          <view class="filter-btn-group">
            <button type="primary" size="mini" plain="true">重置</button>
            <button type="primary" size="mini">完成</button>
          </view>
        </view>
      </view>
    </view>
    <view class="client-list">


      <!-- #ifndef APP-NVUE -->
      <scroll-view
        class="scroll-v list"
        enableBackToTop="true"
        scroll-y
        @scrolltolower="loadMore()"
        style="flex: 1"
      >
			<checkbox-group @change="changeCheckbox">
        <view v-for="(item, i) in listData" :key="i" @tap="toDetail(item)">
          <view class="client-item" :class="{'show-select': isSelect}">
						
							<label class="client-item-radio" v-show="isSelect" @tap.stop=""><checkbox :value="item.id" :checked="item.checked"/></label>
						
            <view class="title">
              <view class="username">客户名称 （9527）</view>
              <view class="tag">到店</view>
            </view>
            <view class="info">
              <view class="info-left">
                <view class=""> 电话： <text>13888889999</text> </view>
                <view class="">
                  来源：<text>B 申贷网 （2020-02-17）</text>
                </view>
                <view class=""> 情况： <text>客户备注客户备注</text> </view>
              </view>
              <view class="info-right">
                <!-- <view class="sms">
                  <text
                    class="iconfont icon-xinxiduanxinxiaoxitixingyoujiansixinyouxiang"
                  ></text>
                </view> -->
                <view class="phone">
                  <text class="iconfont icon-dianhua"></text>
                </view>
              </view>
            </view>
            <scroll-view class="tag-container" scroll-x="true">
              <view class="tag-item">标签</view>
              <view class="tag-item">标签</view>
              <view class="tag-item">标签</view>
              <view class="tag-item">标签</view>
              <view class="tag-item">标签</view>
              <view class="tag-item">标签</view>
              <view class="tag-item">标签</view>
              <view class="tag-item">标签</view>
              <view class="tag-item">标签</view>
              <view class="tag-item">标签</view>
            </scroll-view>
            <view class="item-bottom">
              <view class="follow-time">
                1月14日 14:22 /
                <text class="call-status"
                  >最新的 跟进记录的前部分，字不多就显示全</text
                >
              </view>
              <view class="icon-group">
                <text class="iconfont icon-xiegenjin-"></text>
                <text
                  class="iconfont icon-gengduo"
                  @tap.stop="actionSheetTap(item.id)"
                ></text>
              </view>
            </view>
          </view>
        </view>
				</checkbox-group>
        <view class="loading-more" v-if="isLoading || listData.length > 7">
          <text class="loading-more-text">{{ loadingText }}</text>
        </view>
      </scroll-view>
      <!-- #endif -->
    </view>
  </view>
</template>

<script>
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
export default {
  components: {
    uniNavBar
  },
  data() {
    return {
			selectArr: [],
			isSelect: false, // 是否开启 选择
      isOpenOperationBtn: false, // 是否显示操作按钮
      tabIndex: 0,
      tabList: [
        {
          id: 1,
          title: "我的"
        },
        {
          id: 2,
          title: "团队"
        },
        {
          id: 3,
          title: "线索"
        },
        {
          id: 4,
          title: "来电"
        }
      ],
      isShowSearch: false,
      mask: false,
      // isSort: true,
      listData: [
        {
          id: '1',
          title: "哈哈哈哈"
        },
        {
          id: '2',
          title: "哈哈哈哈"
        },
        {
          id: '3',
          title: "哈哈哈哈"
        },
        {
          id: '4',
          title: "哈哈哈哈"
        },
        {
          id: '5',
          title: "哈哈哈哈"
        },
        {
          id: '6',
          title: "哈哈哈哈"
        },
        {
          id: '7',
          title: "哈哈哈哈"
        },
        {
          id: '8',
          title: "哈哈哈哈"
        }
      ],
      isLoading: false,
      refreshText: "",
      loadingText: "加载更多...",
      refreshing: false,
      pulling: false,
      refreshIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="
    };
  },
  onLoad() {
    // this.getList(0);
  },
  onNavigationBarButtonTap(e) {
    uni.showToast({
      title: "你点击了搜索",
      icon: "none"
    });
  },
  methods: {
		// 扔公海 或 重分配
		handleSelected(type) {
			if (!this.isSelect) {
				uni.showToast({
					icon: 'none',
					title: '请先选择客户'
				})
				return
			}
			if (type === 'throw') { // 扔公海
				uni.showModal({
					title: '提示',
					content: '确定要把这些 ' + this.selectArr.join(',') + '扔到公海吗？',
					success: res => {
						if (res) {}
					}
				})
			}
		},
		// 全选
		allSelected() {
			this.isSelect = !this.isSelect
			this.listData.forEach(item => {
				this.$set(item,'checked',this.isSelect)
			});
			this.selectArr = this.listData.map(item => item.id)
			console.log(this.selectArr)
		},
		changeCheckbox(e) {
			console.log(e)
			this.selectArr = e.detail.value
		},
    toDetail() {
      uni.navigateTo({
        url: "/pages/client/detail/detail"
      });
    },
    actionSheetTap() {
      uni.showActionSheet({
        // title:'标题',
        itemList: [
          "添加电话",
          "扔公海",
          "关注",
          "预约",
          "标签",
          "计划",
          "写跟进"
        ],
        success: e => {
          console.log(e.tapIndex);
          uni.showToast({
            title: "点击了第" + e.tapIndex + "个选项",
            icon: "none"
          });
        }
      });
    },
    changeTab(i) {
      this.tabIndex = i;
    },
    handleSearchClick() {
      console.log(123);
      this.isShowSearch = !this.isShowSearch;
    },
    selectSort(sort) {
      console.log("selectSort");
      this.mask = false;
      uni.showToast({
        title: "你选择了 " + sort,
        icon: "none"
      });
    },
    // handleSortOrFilter(flag) {
    // 	if (flag === 'sort') {
    // 		if (this.isSort && this.mask) {
    // 			this.mask = false
    // 		} else {
    // 			this.mask = true
    // 		}
    // 		this.isSort = true
    // 	} else {
    // 		if (!this.isSort && this.mask) {
    // 			this.mask = false
    // 		} else {
    // 			this.mask = true
    // 		}
    // 		this.isSort = false
    // 	}
    // },
    getList(index) {
      // let activeTab = this.newsList[index];
      // let list = [];
      // for (let i = 1; i <= 10; i++) {
      //     let item = Object.assign({}, newsData['data' + Math.floor(Math.random() * 5)]);
      //     item.id = this.newGuid();
      //     list.push(item);
      // }
      this.listData = this.listData.concat(this.listData);
    },
    loadMore(e) {
      setTimeout(() => {
        this.getList(this.tabIndex);
      }, 500);
    },
    onpullingdown(e) {
      // var tab = this.newsList[this.tabIndex];
      if (this.refreshing || this.pulling) {
        return;
      }
      if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {
        this.refreshFlag = true;
        this.refreshText = "释放立即刷新";
      } else {
        this.refreshFlag = false;
        this.refreshText = "下拉可以刷新";
      }
    },
    refreshData() {},
    onrefresh(e) {
      // var tab = this.newsList[this.tabIndex];
      if (!this.refreshFlag) {
        return;
      }
      this.refreshing = true;
      this.refreshText = "正在刷新...";

      setTimeout(() => {
        this.refreshData();
        this.pulling = true;
        this.refreshing = false;
        this.refreshFlag = false;
        this.refreshText = "已刷新";
        setTimeout(() => {
          // TODO fix ios和Android 动画时间相反问题
          this.pulling = false;
        }, 500);
      }, 2000);
    }
  }
};
</script>

<style>
.client-container {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.header-group-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10upx 30upx;
  background-color: #ffffff;
  border: 1px solid #f2f2f2;
}
.header-group-btn > button {
  color: #ffffff;
}
.header-group-btn > button:nth-of-type(1) {
  background-color: #718df6;
}
.header-group-btn > button:nth-of-type(2) {
  background-color: #f8ac59;
}
.header-group-btn > button:nth-of-type(3) {
  background-color: #e77744;
}
.header-group-btn > button:nth-of-type(4) {
  background-color: #62d199;
}
.input-view {
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  /* width: 500rpx;
 */
  flex: 1;
  background-color: #f8f8f8;
  height: 30px;
  border-radius: 15px;
  padding: 0 15px;
  flex-wrap: nowrap;
  margin: 7px 0;
  line-height: 30px;
}
.input-uni-icon {
  line-height: 30px;
}
.nav-bar-input {
  height: 30px;
  line-height: 30px;
  /* #ifdef APP-PLUS-NVUE */
  width: 370rpx;
  /* #endif */
  padding: 0 5px;
  font-size: 28rpx;
  background-color: #f8f8f8;
}
.search-container {
  width: 100%;
}
.search-container > input {
  background-color: #ffffff;
}
.nav-left {
  margin-left: 16upx;
}
.nav-right {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 16upx;
}
.nav-left > view,
.nav-right > view {
  font-size: 40upx;
  color: #ffffff;
}
.tab-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: -20upx;
  font-size: 32upx;
  font-weight: 700;
  color: #333333;
}
.tab-item.active {
	color: #ffffff;
	font-size: 32upx;
}
.client-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 32upx;
  height: 80upx;
  border-bottom: 1px solid #f1f1f1;
  background-color: #ffffff;
}
.sort.active,
.type.active,
.filter.active {
  color: #007aff;
}
.mask-wrap {
  position: absolute;
  top: calc(var(--status-bar-height) + 86px);
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.sort-container,
.filter-container,
.type-container {
  background-color: #ffffff;
}
.sort-container > view,
.type-container > view {
  line-height: 80upx;
  padding: 0 36upx;
  border-bottom: 1px solid #f2f2f2;
}
.sort-container > view:last-child,
.type-container > view:last-child {
  border: none;
}

.filter-list {
  display: flex;
  flex-direction: row;
  height: 600upx;
}
.filter-list-left {
  flex: 1;
  background-color: #f6f7f8;
}
.filter-list-left > view {
  line-height: 80upx;
  padding: 0 36upx;
}
.filter-list-left > view.current {
  color: #007aff;
  background-color: #ffffff;
}
.filter-list-right {
  flex: 2;
}
.filter-list-right > view {
  line-height: 80upx;
  margin-left: 80upx;
  border-bottom: 1px solid #f2f2f2;
}
.filter-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100upx;
  padding: 0 36upx;
  border-top: 1px solid #f2f2f2;
}
.filter-btn-group {
  display: flex;
  flex-direction: row;
}

.filter-btn-group > button {
  margin: 0 10upx;
}

.header .iconfont {
  font-size: 22upx;
  vertical-align: middle;
  margin: 0 8upx;
  color: #cccccc;
}

.client-list {
  flex: 1;
  width: 750upx;
  display: flex;
  overflow: hidden;
  /* margin-top: 20upx; */
}

.client-item {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 20upx;
	padding: 20upx;
	position: relative;
}
.client-item.show-select {
	left: 60upx;
}
.client-item-radio {
	position: absolute;
	left: -60upx;
	top: 50%;
	transform: translateY(-50%);
}
.client-item > .title,
.client-item > .info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.client-item > .info {
}
.client-item > .title > .username {
  font-size: 28upx;
  /* font-weight: 700; */
  color: #333333;
}

.client-item:nth-of-type(even) {
  background-color: #007aff;
}

.loading-more {
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

.loading-more-text {
  font-size: 28upx;
  color: #999;
}
.title > .tag {
  padding: 0 30upx;
  border-radius: 50upx;
  font-weight: 400;
  /* background-color: #e6f0fc; */
	color: #9aa6c7;
	border: 2upx solid #9aa6c7;
	font-size: 24upx;
	
}

.info-left > view {
	color: #626262;
	font-size: 24upx;
}
.info-left > view > text {
  color: #333333;
}
.info-right {
  display: flex;
  flex-direction: row;
}
.info-right .sms,
.info-right .phone {
  width: 80upx;
  height: 80upx;
  line-height: 80upx;
  border-radius: 50%;
  background-color: #718df6;
  margin: 0 10upx;
  text-align: center;
}
.info-right .iconfont {
  font-size: 40upx;
  color: #fff;
}
.follow-time {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
	color: #666666;
	font-size: 24upx;
}
.follow-time .call-status {
  color: #8c8c8c;
}
.tag-container {
  /* display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		padding-bottom: 20upx;
		border-bottom: 1px solid #F1F1F1; */
  white-space: nowrap;
  width: 100%;
}
.tag-item {
  display: inline-block;
  border-radius: 10upx;
	background-color: #f8f8f8;
	color: #959595;
  margin-right: 10upx;
  padding: 0 20upx;
  font-size: 24upx;
}
.item-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
	margin-top: 15upx;

}
.item-bottom .icon-group {
}
.item-bottom .icon-group .iconfont {
  margin-left: 30upx;
  color: #18a98c;
  font-size: 40upx;
}
</style>
