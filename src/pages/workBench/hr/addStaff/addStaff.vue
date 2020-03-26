<template>
  <view class="add-staff-page">
    <scroll-view scroll-y="true" style="height:100%;">
      <form @submit="submit">
        <view class="list-item">
          <view class="item-label required">员工姓名</view>
          <view class="item-value">
            <input type="text" name="staffName" placeholder="请输入员工姓名" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">登录账号</view>
          <view class="item-value">
            <input type="text" name="account" placeholder="请输入登录账号" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">登录密码</view>
          <view class="item-value">
            <input type="text" name="password" placeholder="请输入登录密码" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">联系电话</view>
          <view class="item-value">
            <input type="number" name="phone" placeholder="请输入联系电话" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">入职时间</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="date"
              :value="date"
            />
            <picker
              mode="date"
              :value="date"
              :start="startDate"
              :end="endDate"
              @change="bindDateChange"
            >
              <!-- <view class="uni-input">{{ date }}</view> -->
              <text :class="{ 'text-gray': !date }">{{
                date ? date : "请选择入职时间"
              }}</text>
            </picker>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label">Y3微信号</view>
          <view class="item-value">
            <input type="text" name="wechat" placeholder="请输入Y3微信号" />
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">所属部门</view>
          <view class="item-value" @tap="getDepartment">
            <input
              v-show="false"
              type="text"
              name="department"
              :value="departmentValue"
            />
            <text :class="{ 'text-gray': !departmentLabel }">{{
              departmentLabel ? departmentLabel : "请选择所属部门"
            }}</text>
          </view>
          <!-- <text class="iconfont icon-arrow-right1"></text> -->
        </view>
        <view class="list-item">
          <view class="item-label required">角色权限</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="auth"
              :value="authList[authIndex]"
            />
            <picker
              :range="authList"
              :value="authIndex"
              @change="bindChangeAuth"
            >
              <text :class="{ 'text-gray': authIndex === null }">{{
                authIndex === null ? "请选择角色权限" : authList[authIndex]
              }}</text>
            </picker>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">权限分类</view>
          <view class="item-value">
            <input
              v-show="false"
              type="text"
              name="authType"
              :value="authTypeList[authTypeIndex]"
            />
            <picker
              :range="authTypeList"
              :value="authTypeIndex"
              @change="bindChangeAuthType"
            >
              <text :class="{ 'text-gray': authTypeIndex === null }">{{
                authTypeIndex === null
                  ? "请选择权限分类"
                  : authTypeList[authTypeIndex]
              }}</text>
            </picker>
          </view>
        </view>
        <view class="list-item">
          <view class="item-label required">客户电话是否可见</view>
          <view class="item-value">
            <view class="item-value">
              <input
                v-show="false"
                type="text"
                name="phoneVisible"
                :value="phoneVisible[phoneVisibleIndex]"
              />
              <picker
                :range="phoneVisible"
                :value="phoneVisibleIndex"
                @change="bindChangePhoneVisible"
              >
                <text :class="{ 'text-gray': phoneVisibleIndex === null }">{{
                  phoneVisibleIndex === null
                    ? "请选择客户电话是否可见"
                    : phoneVisible[phoneVisibleIndex]
                }}</text>
              </picker>
            </view>
          </view>
        </view>
        <view class="list-textarea">
          <view class="item-label">备注</view>
          <view class="item-value">
            <textarea name="remark" placeholder="请输入备注" />
          </view>
        </view>
        <button ref="submitBtn" form-type="submit"></button>
      </form>
      <w-picker
        v-if="departmentList.length != 0"
        mode="linkage"
        :level="2"
        @confirm="onDepartment"
        ref="linkage"
        :linkList="departmentList"
        themeColor="#007aff"
      ></w-picker>
    </scroll-view>
  </view>
</template>

<script>
import wPicker from "@/components/w-picker/w-picker.vue";

export default {
  components: {
    wPicker
  },
  onLoad(opts) {
    if (opts.type) {
      this.title = "编辑员工";
      } else {
      this.title = "新增员工";
    }
    uni.setNavigationBarTitle({
      title: this.title
    });
  },
  data() {
    return {
      title: '新增员工',
      date: null,
      departmentValue: "",
      departmentLabel: "",
      departmentList: [],
      authIndex: null,
      authList: [
        "管理员",
        "营销专员",
        "营销主管",
        "营销总监",
        "做单专员",
        "做单主管",
        "做单总监",
        "财务会计",
        "总机客服",
        "行政人事",
        "总经理"
      ],
      authTypeIndex: null,
      authTypeList: ["普通", "部门", "中心", "公司"],
      phoneVisibleIndex: null,
      phoneVisible: ["不可见", "仅自己可见", "全部可见"]
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
    submit(e) {
      var formdata = e.detail.value;
      console.log(formdata);
    },
    bindChangePhoneVisible(e) {
      this.phoneVisibleIndex = e.target.value;
    },
    bindChangeAuth(e) {
      this.authIndex = e.target.value;
    },
    bindChangeAuthType(e) {
      this.authTypeIndex = e.target.value;
    },
    getDepartment() {
      this.$minApi.getDepartment().then(res => {
        console.log(res);
        this.departmentList = res.data;
        setTimeout(() => {
          this.$refs.linkage.show();
        }, 50);
      });
    },
    onDepartment(e) {
      console.log(e);
      this.departmentValue = e.checkValue.join(",");
      this.departmentLabel = e.checkArr.join(" | ");
    },
    bindDateChange(e) {
      console.log(123);
      this.date = e.target.value;
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
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
</style>
