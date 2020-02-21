<template>
  <view class="call-recored-page">
    <my-audio class="my-audio" :src="src" :duration="21" :control="false"></my-audio>
  </view>
</template>

<script>
import myAudio from '@/components/imt-audio/imt-audio.vue'
export default {
  components: {
    myAudio
  },
  data() {
    return {
      src: ''
    }
  },
  onLoad(opts) {
    this.src = opts.src
  }
}
</script>

<style>
.call-recored-page {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.my-audio {
  flex: 1;
}
</style>