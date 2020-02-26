<template>
  <view class="level-page">
    <scroll-view scroll-y="true" style="height: 100%;">
      <uni-swipe-action v-for="item in levelList" :key="item.id">
        <uni-swipe-action-item
          :options="options"
          :autoClose="false"
          @click="onClick"
          @change="change"
        >
            <view class="item-level">
              <view class="item-left">{{item.level}}</view>
              <view class="item-right">
                <view class="range"><text>评分区间：</text>{{item.range}}</view>
                <view class="rate">
                  <view class="xindai"><text>信贷收费率：</text>{{item.xinRate}}</view>
                  <view class="diya"><text>抵押收费率：</text>{{item.diRate}}</view>
                </view>
              </view>
            </view>

        </uni-swipe-action-item>
      </uni-swipe-action>
    </scroll-view>
  </view>
</template>

<script>
import uniSwipeAction from "@/components/uni-swipe-action/uni-swipe-action.vue";
import uniSwipeActionItem from "@/components/uni-swipe-action-item/uni-swipe-action-item.vue";
export default {
  components: {
    uniSwipeAction,
    uniSwipeActionItem
  },
  data() {
    return {
      levelList: [
        {
          id: 123,
          level: 'A1',
          range: '90 ~ 100',
          xinRate: '3.39 ( 2.89 + 0.5 )',
          diRate: '3.89 ( 2.89 + 1 )'
        },
        {
          id: 124,
          level: 'A1',
          range: '90 ~ 100',
          xinRate: '3.39 ( 2.89 + 0.5 )',
          diRate: '3.89 ( 2.89 + 1 )'
        },
        {
          id: 125,
          level: 'A1',
          range: '90 ~ 100',
          xinRate: '3.39 ( 2.89 + 0.5 )',
          diRate: '3.89 ( 2.89 + 1 )'
        },
        {
          id: 126,
          level: 'A1',
          range: '90 ~ 100',
          xinRate: '3.39 ( 2.89 + 0.5 )',
          diRate: '3.89 ( 2.89 + 1 )'
        },
        {
          id: 127,
          level: 'A1',
          range: '90 ~ 100',
          xinRate: '3.39 ( 2.89 + 0.5 )',
          diRate: '3.89 ( 2.89 + 1 )'
        },
        {
          id: 128,
          level: 'A1',
          range: '90 ~ 100',
          xinRate: '3.39 ( 2.89 + 0.5 )',
          diRate: '3.89 ( 2.89 + 1 )'
        },
      ],
      options: [
        {
          text: "编辑",
          style: {
            backgroundColor: "#007aff"
          }
        },
        {
          text: "删除",
          style: {
            backgroundColor: "#dd524d"
          }
        }
      ]
    };
  },
  methods: {
    onClick(e) {
      console.log(
        "当前点击的是第" + e.index + "个按钮，点击内容是" + e.content.text
      );
      if (e.index === 0) {
        uni.navigateTo({
          url: ''
        })
      } else {
        uni.showModal({
          title: '提示',
          content: '确定删除该评级配置吗',
          success: res => {
            if (res.confirm) {

            }
          }
        })
      }
    },
    change(open) {
      console.log("当前开启状态：" + open);
    }
  }
};
</script>

<style>
.level-page {
  height: 100%;
}

.item-level {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 10upx 30upx;
  position: relative;
}
.item-level::after {
  position: absolute;
    z-index: 3;
    right: 0;
    bottom: 0;
    left: 15px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
.item-left {
  width: 100upx;
  height: 100upx;
  line-height: 100upx;
  background-color: #3c763d;
  color: #ffffff;
  font-size: 32upx;
  border-radius: 50%;
  text-align: center;
  margin-right: 20upx;
}
.item-right {
  flex: 1;
}
</style>
