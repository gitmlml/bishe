<template>
<a-layout-header>
<!-- <img id="logo1" src="../assets/图片1.png"> -->
NEWnews-作品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://localhost:8080/">返回首页</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://localhost:8080/DesignCenter">重新选择</a>

<!-- <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal> -->

</a-layout-header>
 <a-layout>
    <a-layout-content>

    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<script>
import {} from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    // UserOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
    // MenuUnfoldOutlined,
    // MenuFoldOutlined,
    // MailOutlined,
    // AppstoreOutlined,
    // SettingOutlined
  },

  setup () {
    const size = ref('default')

    const onChange = e => {
      console.log('size checked', e.target.value)
      size.value = e.target.value
    }
    const current = ref(['mail'])
    const formState = ref({
      username: '',
      password: '',
      remember: true
    })

    const onFinish = values => {
      console.log('Success:', values)
    }

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo)
    }
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      size,
      onChange,
      current,
      formState,
      onFinish,
      onFinishFailed
    }
  }

})
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 400px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

.ant-layout-header{
  color: #fff;

}

.q{
    width: 60%;
    margin-left: 10%;
}
</style>
