<template>
  <view class="add-roles-page">
    <scroll-view scroll-y="true" style="height: 100%">
      <view class="list-item">
        <view class="item-label">角色名称</view>
        <view class="item-value">
          <input type="text" name="name" placeholder="请输入角色名称" />
        </view>
      </view>

      <uni-section title="角色权限" type="line"></uni-section>

      <view class="uni-list">
        <checkbox-group @change="checkboxChange">
          <view class="one-level" v-for="item in authList" :key="item.id">
            <label class="uni-list-cell uni-list-cell-pd">
              <view>
                <checkbox :value="item.id" :checked="item.checked" />
              </view>
              <view>{{ item.title }}</view>
            </label>
            <view
              class="two-level"
              v-for="item2 in item.submenu"
              :key="item2.id"
            >
              <label class="uni-list-cell uni-list-cell-pd">
                <view>
                  <checkbox :value="item2.id" :checked="item2.checked" />
                </view>
                <view>{{ item2.text }}</view>
              </label>
            </view>
          </view>
        </checkbox-group>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import uniSection from "@/components/uni-section/uni-section.vue";
export default {
  components: {
    uniSection
  },
  data() {
    return {
      authList: [],
      selectedArr: []
    };
  },
  onLoad() {
    this.getAuthList();
  },
  methods: {
    checkboxChange: function(e) {
      console.log(e.detail.value);
      var items = this.authList,
        values = e.detail.value;

      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        const item = items[i];
        console.log(item);
        if (values.includes(item.id)) {
          this.$set(item, "checked", true);
          item.submenu.forEach(item2 => {
            this.$set(item2, "checked", true);
          });
        } else {

          this.$set(item, "checked", false);
          if (item.checked) {
            item.submenu.forEach(item2 => {
              if (values.includes(item2.id)) {
                this.$set(item2, 'checked', true)
              } else {
                this.$set(item2, "checked", false);
              }
            });
          } else {
            item.submenu.forEach(item2 => {
              this.$set(item2, "checked", false);
            })
          }

        }
        // if(values.includes(item.id)){
        //   console.log(1111)
        //   item.submenu.forEach(item2 => {
        //     this.$set(item, "checked", true)
        //     this.$set(item2,'checked',true)
        //   })
        //   console.log(this.authList)
        // }else{
        //   item.submenu.forEach(item2 => {
        //     this.$set(item, "checked", false)
        //     this.$set(item2,'checked',false)
        //   })
        // }
      }
    },
    getAuthList() {
      this.$minApi
        .getWorkMenu()
        .then(res => {
          console.log(res);
          res.data.forEach(item => {
            this.$set(item, "checked", false);
            item.submenu.forEach(item2 => {
              this.$set(item2, "checked", false);
            });
          });
          this.authList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.add-roles-page {
  height: 100%;
  background-color: #ffffff;
}
.one-level > .uni-list-cell {
  background: #ececef;
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
.item-value {
  flex: 1;
  text-align: right;
  font-size: 32upx;
}
.item-value input {
  padding-right: 20upx;
  text-align: right;
}
</style>
