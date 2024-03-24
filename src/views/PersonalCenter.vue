<template>
 <a-layout>
    <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item >
      NEWnews
    </a-menu-item>
    <a-menu-item key="app">
      <a href="http://localhost:8080/">首页</a>
    </a-menu-item>
    <a-menu-item key="app2">
      <template #icon>
        <appstore-outlined />
      </template>
      <a href="http://localhost:8080/Wordlibrary">素材库</a>
    </a-menu-item>
     <a-menu-item key="app4">
      <template #icon>
        <setting-outlined />
      </template>
      <a href="http://localhost:8080/DesignCenter">定制中心</a>
    </a-menu-item>
     <a-menu-item key="mail">
      <template #icon>
        <user-outlined />
      </template>
     <a href="http://localhost:8080/PersonalCenter">个人中心</a>
    </a-menu-item>
  </a-menu>

    <a-layout-content>
     <a-layout>
      <div class="logo" />
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <a href="http://localhost:8080/PersonalCenter">&nbsp;&nbsp;&nbsp;个人信息</a>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <a href="http://localhost:8080/mywork">&nbsp;&nbsp;&nbsp;我的作品</a>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <a href="http://localhost:8080/peruplode">&nbsp;&nbsp;&nbsp;上传素材</a>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
      <!-- 描述表格： -->
        <div>
    <a-descriptions bordered title="个人信息" :size="size">
      <template #extra>
        <a-button type="primary">Edit</a-button>
      </template>
      <a-descriptions-item label="用户名">小马</a-descriptions-item>
      <a-descriptions-item label="联系方式">18303424562</a-descriptions-item>
        <a-descriptions-item label="邮箱">yyacll578@163.com</a-descriptions-item>
      <a-descriptions-item label="邮寄信息">
        收货人姓名：小马
        <br />
        地址信息：XX省XX市XX区XX街道
        <br />
        详细地址：XX路XX小区XX栋...
        <br />
        邮政编码：000
        <br />
      </a-descriptions-item>
    </a-descriptions>
    <br />
    <br />
  </div>
      </a-layout-content>
    </a-layout>
  </a-layout></a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<script>
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    // MailOutlined,
    AppstoreOutlined,
    SettingOutlined
  },

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
  }

})
</script>
<style>
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

</style>
