<template>
  <div>
    <!-- <div v-if="!isFullScreen" @click="playVideo">
      <img src="../assets/img/resort/resort1.webp" alt="Video Thumbnail" />
    </div>
    <div v-if="isFullScreen" class="fullscreen-video-container">
      <iframe src="../assets/vedio/vedio1.mp4" allowfullscreen></iframe>
    </div> -->
    <img src="../assets/vedio/vedio1.png"  @click="SeeVideo"  width="200">
     <a-modal
        :width="950"
        :visible="viewVideo"
        :footer="null"
        @cancel="handleCancel"
        style="top: 40px"
        class="custom-modal-style"
     >
          <video
              :src="this.videoUrl"
               width="900"
               autoplay
               controls="controls"
               :state="viewVideo"
               ref="vueRef"
          ></video>
     </a-modal>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { } from '@ant-design/icons-vue'
export default defineComponent({
  setup () {
    const size = ref('default')

    const onChange = e => {
      console.log('size checked', e.target.value)
      size.value = e.target.value
    }
    const current = ref(['mail'])

    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      size,
      onChange,
      current

    }
  },
  data () {
    return {
      viewVideo: false,
      videoUrl: require('../assets/vedio/vedio1.mp4')
    }
  },
  methods: {
    SeeVideo () {
      this.viewVideo = true
    },
    // 取消预览
    handleCancel (e) {
      this.viewVideo = false
    }
  }
})
</script>

<style>
.fullscreen-video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 1000; /* Ensure it's above other content */
}

.fullscreen-video-container iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%; /* Adjust as needed */
  height: 80%; /* Adjust as needed */
}
.custom-modal-style .ant-modal-content {
  background-color: #000000; /* 你想要的背景颜色 */
}
</style>
