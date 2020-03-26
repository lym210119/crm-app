<template>
  <view class="roles-index-page">
    <scroll-view scroll-y="true" style="height: 100%">
      <uni-list>
        <uni-list-item
          thumb="/static/file.png"
          :show-arrow="true"
          v-for="item in rolesList"
          :key="item.id"
          :title="item.title"
          @click="handleClick"
        >
        </uni-list-item>
      </uni-list>



    </scroll-view>
  </view>
</template>

<script>
import uniList from "@/components/uni-list/uni-list.vue";
import uniListItem from "@/components/uni-list-item/uni-list-item.vue";
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'

export default {
  components: {
    uniList,
    uniListItem,
    uniSwipeAction,
    uniSwipeActionItem
  },
  data() {
    return {
      rolesList: [
        {
          id: "123",
          title: "管理员"
        },
        {
          id: "234",
          title: "营销专员"
        },
        {
          id: "345",
          title: "营销主管"
        },
        {
          id: "456",
          title: "营销总监"
        }
      ],
            options:[
        {
            text: '取消',
            style: {
                backgroundColor: '#007aff'
            }
        }, {
            text: '确认',
            style: {
                backgroundColor: '#dd524d'
            }
        }]
    };
  },  
  onNavigationBarButtonTap(e) {
    uni.navigateTo({
      url: '/pages/workBench/system/roles/add/add'
    })
  }
};
</script>

<style></style>
