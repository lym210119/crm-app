<template>
  <view class="ggdetail-page">
    <scroll-view scroll-y="true" style="height: 100%">
      <view class="container">

      <view class="gg-header">
        <view class="gg-title"
          >公告标题公告标题公告标题公告标题公告标题公告标题</view
        >
        <view class="gg-info">
          <text>张三</text>
          <text>2020-03-05</text>
        </view>
      </view>
      <view class="gg-content">
        <rich-text :nodes="htmlNodes"></rich-text>
      </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import htmlParser from '@/common/html-parser'
export default {
  data() {
    return {
      htmlNodes: [],
      content:
        '<p>盼来盼去，春节档、情人节档的片子再也没有选择转网的。</p><p>毫无疑问，在《囧妈》登入网络平台后，一些影片便出现了非常高的“转网”呼声，但春节档（包括情人节和后续）的影片没有再登入网络，院线转网大的路只走了十天便戛然而止。</p><p>从影迷的角度来看，未能在第一时间看到这些影片肯定是非常遗憾的，特别是一些具备春节元素的影片，不在春节看味道肯定会下降，但对于大部分片方而言，进退两难、未来难料是大家最为担心的。'
    };
  },
  onLoad() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      var htmlString = this.content
        .replace(/\\/g, "")
        .replace(/<img/g, '<img style="display:none;"');
      this.htmlNodes = htmlParser(htmlString);
    }
  }
};
</script>

<style>
.ggdetail-page {
  height: 100%;
  background-color: #ffffff;
}
.container {
    padding: 30upx;

}
.gg-content {
margin-top: 20upx;
}
.gg-title {
  text-align: center;
  font-size: 32upx;
}
.gg-header .gg-info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: gray;
}
</style>
