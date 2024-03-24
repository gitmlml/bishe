<template>
<a-layout-header>
<!-- <img id="logo1" src="../assets/图片1.png"> -->
NEWnews
</a-layout-header>
 <a-layout>
    <a-menu v-model:selectedKeys="current" mode="horizontal">
    <!-- <a-menu-item key="mail">
      <a href="http://localhost:8080/">首页</a>
    </a-menu-item> -->
    <a-menu-item key="app">
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
     <a-menu-item key="app2">
      <template #icon>
        <user-outlined />
      </template>
     <a href="http://localhost:8080/PersonalCenter">个人中心</a>
    </a-menu-item>
  </a-menu>

    <a-layout-content>
    <a-row>
    <a-col :xs="2" ></a-col>
    <a-col :xs="20" >
     <a-carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
  <br>
      <a-divider orientation="left">发现推荐</a-divider>
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
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box"><a-image
    :width="200"
    src="https://img.poptnc.com/wp-content/uploads/2020/09/1599411448-718555d0b69d05b.png"
  /></div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box"><a-image
    :width="200"
    src="https://img.poptnc.com/wp-content/uploads/2020/09/1599927773-5dd6d4862206370.png"
  /></div>
      </a-col>
    </a-row>
  </div>
    </a-col>
    <a-col :xs="2" ></a-col>
  </a-row>
  <br>

    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<script>
import { UserOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    UserOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
    // MenuUnfoldOutlined,
    // MenuFoldOutlined,
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
</style>
