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
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="2">
          <user-outlined />
                    <a href="http://localhost:8080/PersonalCenter">&nbsp;&nbsp;&nbsp;个人信息</a>
        </a-menu-item>
        <a-menu-item key="1">
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
      <!-- 作品列表： -->
      <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box"><a-image
    :width="200"
    src="https://img.poptnc.com/wp-content/uploads/2020/01/1580225701-bfd3a07c6e5acee.jpg"
  /></div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box"><a-image
    :width="200"
    src="https://tse1-mm.cn.bing.net/th/id/R-C.71fb1229a4c27dbf72f7353e567bb8e3?rik=9nKyCvLhHgg3Qg&riu=http%3a%2f%2fpic5.huitu.com%2fres%2f20121212%2f126070_20121212120056693200_1.jpg&ehk=7JRW2bGZTjTp%2fA%2bQbl%2fCBlV%2bSWy%2bR6swFXqVbyGw%2bz0%3d&risl=&pid=ImgRaw&r=0"
  /></div>
      </a-col>
    </a-row>
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
