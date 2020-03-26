<template>
  <view class="center-list-page">
    <scroll-view scroll-y="true" style="height: 100%">
      <uni-list>
        <uni-list-item
          thumb="/static/file.png"
          :show-arrow="true"
          v-for="item in centerList"
          :key="item.id"
          :title="item.title"
          @click="handleClick"
        />
      </uni-list>
    </scroll-view>
  </view>
</template>

<script>
import uniList from "@/components/uni-list/uni-list.vue";
import uniListItem from "@/components/uni-list-item/uni-list-item.vue";
export default {
  components: {
    uniList,
    uniListItem
  },
  data() {
    return {
      centerList: [
        {
          id: 1,
          title: "总经办"
        },
        {
          id: 2,
          title: "热线中心"
        },
        {
          id: 3,
          title: "营销中心"
        },
        {
          id: 4,
          title: "做单中心"
        },
        {
          id: 5,
          title: "财务中心"
        }
      ]
    };
  },
  onNavigationBarButtonTap(e) {
    console.log(e);
    uni.navigateTo({
      url: '/pages/workBench/system/dep/add/add'
    });
  },
  methods: {
    handleClick() {
      uni.navigateTo({
        url: "/pages/workBench/system/dep/depList/depList"
      });
    }
  }
};
</script>

<style></style>
