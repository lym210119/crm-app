<template>
  <!-- 任务分配添加 -->
  <view class="add-staff-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <form @submit="submit">
        <view class="list-item">
          <view class="item-label required">任务名称</view>
          <view class="item-value">
            <input type="text" name="taskname" placeholder="请输入任务名称" />
          </view>
        </view>

        <view class="list-item">
          <view class="item-label required">日期范围</view>
          <view class="item-value">
            <view class="item-value picker-data-container">
              <input
                v-show="false"
                type="text"
                name="dateRange"
                :value="startDateVal + '~' + endDateVal"
              />
              <picker
                mode="date"
                :value="startDateVal"
                :start="startDate"
                :end="endDate"
                @change="bindStartDateChange"
              >
                <view class="uni-input">{{
                  startDateVal ? startDateVal : "开始时间"
                }}</view>
              </picker>
              <view class="">
                --
              </view>
              <picker
                mode="date"
                :value="endDateVal"
                :start="startDate"
                :end="endDate"
                @change="bindEndDateChange"
              >
                <view class="uni-input">{{
                  endDateVal ? endDateVal : "结束时间"
                }}</view>
              </picker>
            </view>
          </view>
        </view>

        <view class="list-item">
          <view class="item-label required">上午时段</view>
          <view class="item-value">
            <view class="item-value picker-data-container">
              <input
                v-show="false"
                type="text"
                name="timeAM"
                :value="startTimeAM + '~' + endTimeAM"
              />
              <picker
                mode="time"
                :value="startTimeAM"
                @change="changeStartTimeAM"
              >
                <view class="uni-input">{{ startTimeAM }}</view>
              </picker>
              <view>--</view>
              <picker mode="time" :value="endTimeAM" @change="changeEndTimeAM">
                <view class="uni-input">{{ endTimeAM }}</view>
              </picker>
            </view>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">下午时段</view>
          <view class="item-value">
            <view class="item-value picker-data-container">
              <input
                v-show="false"
                type="text"
                name="timePM"
                :value="startTimePM + '~' + endTimePM"
              />
              <picker
                mode="time"
                :value="startTimePM"
                @change="changeStartTimePM"
              >
                <view class="uni-input">{{ startTimePM }}</view>
              </picker>
              <view>--</view>
              <picker mode="time" :value="endTimePM" @change="changeEndTimePM">
                <view class="uni-input">{{ endTimePM }}</view>
              </picker>
            </view>
          </view>
        </view>

        <template v-if="!isEdit">
          <view class="list-item">
            <view class="item-label required">添加方式</view>
            <view class="item-value">
              <view class="item-value">
                <radio-group name="addType" @change="changeAddType">
                  <label
                    class=""
                    v-for="(item, index) in addType"
                    :key="item.value"
                  >
                    <radio
                      :value="item.value"
                      :checked="item.value === '1'"
                      style="transform:scale(0.7)"
                    />
                    {{ item.name }}
                  </label>
                </radio-group>
              </view>
            </view>
          </view>
          <view class="list-item" v-if="!isEdit && addTypeIndex === '1'">
            <view class="item-label required">添加条数</view>
            <view class="item-value">
              <view class="item-value">
                <input
                  v-show="false"
                  type="text"
                  name="addNum"
                  :value="addNum[addNumIndex]"
                />
                <picker
                  :range="addNum"
                  :value="addNumIndex"
                  @change="changeAddNum"
                >
                  <text :class="{ 'text-gray': addNumIndex === null }">{{
                    addNumIndex === null
                      ? "请选择添加条数"
                      : addNum[addNumIndex]
                  }}</text>
                </picker>
              </view>
            </view>
          </view>
          <view class="list-item" v-if="!isEdit && addTypeIndex === '2'">
            <view class="item-label">上传文件</view>
            <view class="uplaod">
              <button class="btn-success" size="mini">下载模版</button>
              <button class="btn-primary" size="mini">上传文件</button>
            </view>
          </view>
        </template>

        <view class="list-item">
          <view class="item-label required">呼叫比率</view>
          <view class="item-value">
            <view class="item-value">
              <radio-group name="callRate">
                <label>
                  <radio value="1" checked style="transform:scale(0.7)" />
                  1
                </label>
                <label>
                  <radio value="2" style="transform:scale(0.7)" />
                  2
                </label>
                <label>
                  <radio value="3" style="transform:scale(0.7)" />
                  3
                </label>
              </radio-group>
            </view>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">是否智能调节比率</view>
          <view class="item-value">
            <view class="item-value">
              <checkbox-group name="isOpenCallRate">
                <label>
                  <checkbox value="1" style="transform:scale(0.7)" />
                </label>
              </checkbox-group>
            </view>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">呼叫频次</view>
          <view class="item-value">
            <view class="item-value">
              <input
                v-show="false"
                type="text"
                name="callNum"
                :value="callNum[callNumIndex]"
              />
              <picker
                :range="callNum"
                :value="callNumIndex"
                @change="changeCallNum"
              >
                <text :class="{ 'text-gray': callNumIndex === null }">{{
                  callNumIndex === null
                    ? "请选择呼叫频次"
                    : callNum[callNumIndex]
                }}</text>
              </picker>
            </view>
          </view>
        </view>

        <button ref="submitBtn" form-type="submit"></button>
      </form>
    </scroll-view>
  </view>
</template>

<script>
export default {
  onLoad(opts) {
    if (opts.type) {
      this.title = "修改任务";
      this.isEdit = true;
    } else {
      this.title = "新增任务";
    }
    uni.setNavigationBarTitle({
      title: this.title
    });
    console.log(this.isEdit);
    console.log(!this.isEdit && this.addTypeIndex === "1");
    console.log(!this.isEdit && this.addTypeIndex === "2");
  },
  data() {
    return {
      title: "新增任务",
      startDateVal: null,
      endDateVal: null,
      startTimeAM: "00:00",
      endTimeAM: "00:00",
      startTimePM: "00:00",
      endTimePM: "00:00",
      addTypeIndex: "1",
      addType: [
        { value: "1", name: "公海导入" },
        { value: "2", name: "手动导入" }
      ],
      addNumIndex: null,
      addNum: ["1000", "2000", "3000", "5000", "10000", "30000", "50000"],
      callNumIndex: null,
      callNum: ["10", "20", "30", "40", "50", "60"],

      isEdit: false
    };
  },
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    }
  },
  onNavigationBarButtonTap(e) {
    this.$refs.submitBtn.$dispatch("Form", "uni-form-submit", {
      type: "submit"
    });
  },
  methods: {
    changeAddType(e) {
      this.addTypeIndex = e.target.value;
    },
    changeCallNum(e) {
      this.callNumIndex = e.target.value;
    },
    changeAddNum(e) {
      this.addNumIndex = e.target.value;
    },
    changeStartTimeAM(e) {
      this.startTimeAM = e.target.value;
    },
    changeEndTimeAM(e) {
      this.endTimeAM = e.target.value;
    },
    changeStartTimePM(e) {
      this.startTimePM = e.target.value;
    },
    changeEndTimePM(e) {
      this.endTimePM = e.target.value;
    },
    bindStartDateChange: function(e) {
      console.log(e.target.value);
      if (this.timeStr(e.target.value) > this.timeStr(this.endDateVal)) {
        uni.showToast({
          title: "开始时间不能大于结束时间",
          icon: "none"
        });
        return;
      }
      this.startDateVal = e.target.value;
    },
    bindEndDateChange: function(e) {
      console.log(e.target.value);
      if (this.timeStr(e.target.value) < this.timeStr(this.startDateVal)) {
        uni.showToast({
          title: "开始时间不能大于结束时间",
          icon: "none"
        });
        return;
      }
      this.endDateVal = e.target.value;
    },
    timeStr(data) {
      console.log(data);
      if (data) {
        return new Date(data.split("-").join("/")).getTime();
      }
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === "start") {
        year = year - 10; // 时间范围限制
      } else if (type === "end") {
        year = year + 10;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    },
    submit(e) {
      var formdata = e.detail.value;
      console.log(formdata);
    }
  }
};
</script>

<style>
.add-staff-page {
  height: 100%;
  background-color: #ffffff;
}
.list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 94upx;
  padding: 0 30upx;
  border-bottom: 1upx solid #f2f2f2;
}
.item-label.required::after {
  content: "*";
  color: red;
}
.item-value {
  flex: 1;
  text-align: right;
  font-size: 32upx;
}

.item-value input {
  /* padding-right: 20upx; */
  text-align: right;
}
.text-gray {
  color: gray;
}
.list-textarea {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 30upx;
  border-bottom: 1upx solid #f2f2f2;
}
.list-textarea .item-label {
  height: 94upx;
  line-height: 94upx;
}
.list-textarea > .item-value {
  width: 100%;
}
.list-textarea textarea {
  flex: 1;
  font-size: 32upx;
  width: 100%;
  height: 160upx;
  text-align: left;
}
.picker-data-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  /* margin-left: 150upx; */
}
.uplaod {
  display: flex;
  flex-direction: row;
  text-align: right;
}
</style>
