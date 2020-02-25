<template>
  <view class="task-page">
    <uni-nav-bar statusBar="true" backgroundColor="#19aa8d" color="#ffffff">
      <view class="tab-content">
        <view
          class="tab-item"
          :class="{ active: tabIndex === i }"
          v-for="(item, i) in tabList"
          :key="item.id"
          @tap="changeTab(i)"
          >{{ item.title }}</view
        >
      </view>
    </uni-nav-bar>
    <!-- 文字滚动 -->
    <uni-notice-bar
      style="margin-bottom: 0;"
      showIcon="true"
      scrollable="true"
      single="true"
      text="这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"
    ></uni-notice-bar>

    <swiper
      :current="tabIndex"
      @change="changeSwiper"
      :style="{ height: swiperHeight + 'px' }"
    >
      <swiper-item>
        <scroll-view scroll-y="true" style="height: 100%" class="content">
          <view class="list" v-for="(item, i) in dataList" :key="i">
            <view class="list-left">
              <text class="iconfont" :class="item.icon"></text>
            </view>
            <view class="list-right">
              <view class="title">{{ item.title }}</view>
              <view class="title-small">{{ item.desc }}</view>
            </view>
          </view>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view scroll-y="ture" style="height: 100%">
          <view class="task-container">
            
            总机任务提醒：

            1、未接来电的客户
            2、有新的未分配线索
            3、有需核实的线索
            4、新的公告未查看
            5、无效电话未审核
            6、违规信息未处理


销售任务提醒：

1、今日需联系的客户   
2、分配给我的线索
3、分配给我的客户
4、待进入公海的客户
5、未接来电的客户
6、未回复短信的客户
7、即将到期未完成的任务计划
8、已过期未到店的预约上门客户
9、即将贷款还清的客户
9   三日后到期需还款的客户
10、即将过生日的客户
11、待审核的合同
12、即将到期的员工通关未审核
13、有新的有效线索未分配
14、本月的销售任务未下达分配
15、有新的离职转移数据未分配
16、新的公告未查看
17、知识中心有新的更新
18、新员工加入未分配资源
19、有新的未分配线索（总监）
20、已退件的客户未处理




渠道做单人员提醒：

1.   今日需联系的客户
2.   分配给我的客户
3.   即将贷款到期的客户 
4.   预约进件客户（）
5.   未完结客户及两天未跟进的客户
6.   需要在线配单的客户  
7.   三日后到期需要还款客户
8.   代扣结果未查看
9.   新的公告未查看  
10. 一周未更新的产品
11. 





财务人员 任务提醒：
1.客户转账服务费或者定金的（销售点击提醒财务）
2.定金未确认的客户（提醒财务）
3.签单点位或定金金额不符（财务手动点击提醒）
4.绑定代扣的客户（需要财务代扣的点击提醒）
5.放款待结算的客户（提醒财务）
6.客户放款渠道没录放款机构的或者收费与签单点位不符合的（财务点击提醒）
7.渠道做单成本待确认的客户（提醒财务）
8.员工借支待确认的客户（提醒财务）
9。新的公告未查看   


１，定金未确认的（提醒出纳＼销售）
２，放款待结算的（提醒出纳＼销售）
３，定金退款成功的（提醒销售）
４，费用未确认分摊方式的（提醒会计）
５，结算未审核的（提醒财务经理）
６，成本费用未审核的（提醒会计）
７，渠道放款信息录入错误的（财务反馈给渠道经理）
８，代扣结果反馈给渠道经理
９，日常费用未审核的（提醒会计）
１０，工资数据未录入的（提醒人事）

新的公告未查看   

贷后管理人员 任务提醒：

1、还款前三天提醒（销售）
2、客户生日前一周提醒（贷后）
3、信贷到期前一个月提醒（销售）
4、抵押到期前2个月提醒 （销售）
5、优惠券使用每个月提醒（直至客户二次消费）（销售）
6、贷款金额20万以上客户节假日问候提醒（销售）
7、放款客户服务满意度回访提醒（贷后）
8、投诉处理进度24小时内提醒（贷后）

新的公告未查看   
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue";
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
export default {
  components: {
    uniNoticeBar,
    uniNavBar
  },
  data() {
    return {
      tabIndex: 0,
      tabList: [
        {
          id: 1,
          title: "待办"
        },
        {
          id: 2,
          title: "任务"
        }
      ],
      swiperHeight: 500,
      dataList: [
        {
          icon: "icon-jinrilianxikehu",
          title: "今日需联系客户",
          desc: "暂无今日需联系客户"
        },
        {
          icon: "icon-xiansuojilu",
          title: "分配给我的线索",
          desc: "暂无分配给我的线索"
        },
        {
          icon: "icon-wodekehu1",
          title: "分配给我的客户",
          desc: "暂无分配给我的客户"
        },
        {
          icon: "icon-gonghaikehu",
          title: "待进入公海的客户",
          desc: "暂无待进入公海的客户"
        },
        {
          icon: "icon-kefu1",
          title: "即将续贷的客户",
          desc: "暂无即将续贷的客户"
        },
        {
          icon: "icon-daishenhehetong",
          title: "待审核的合同",
          desc: "营销经理提交了新的合同，正在等待您的审批"
        },
        {
          icon: "icon-daishenhehuikuan",
          title: "待审核的回款",
          desc: "暂无待审核的回款"
        },
        {
          icon: "icon-kefu1",
          title: "即将过生日的客户",
          desc: "暂无即将过生日的客户"
        },
        {
          icon: "icon-kefu1",
          title: "即将过生日的客户",
          desc: "暂无即将过生日的客户"
        },
        {
          icon: "icon-kefu1",
          title: "即将过生日的客户",
          desc: "暂无即将过生日的客户"
        }
      ]
    };
  },
  onLoad() {
    uni.getSystemInfo({
      success: res => {
        let height = res.windowHeight - uni.upx2px(164) - res.statusBarHeight;
        this.swiperHeight = height;
      }
    });
  },
  methods: {
    changeTab(i) {
      this.tabIndex = i;
    },
    changeSwiper(e) {
      this.tabIndex = e.detail.current;
    }
  }
};
</script>

<style>
.tab-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: -20upx;
  font-size: 32upx;
  font-weight: 700;
  color: #333333;
  align-items: flex-end;
}
.tab-item.active {
  color: #ffffff;
  font-size: 32upx;
}
.task-page {
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
}
.list {
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  height: 130upx;
  background-color: #ffffff;
  padding: 0 30upx;
  border-bottom: 1px solid #f2f2f2;
}
.list-left {
  width: 80upx;
  height: 80upx;
  line-height: 80upx;
  text-align: center;
  background-color: #19aa8d;
  border-radius: 50%;
  margin-right: 20upx;
}
.list-left .iconfont {
  font-size: 50upx;
  color: #ffffff;
}
.list-right {
  flex: 1;
}
.list-right .title {
  font-weight: 700;
}
.list-right .title-small {
  color: #666666;
}
</style>
