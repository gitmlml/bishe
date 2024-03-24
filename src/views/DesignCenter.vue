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
     <a-menu-item key="mail">
      <template #icon>
        <setting-outlined />
      </template>
      <a href="http://localhost:8080/DesignCenter">定制中心</a>
          </a-menu-item>
     <a-menu-item key="app4">
      <template #icon>
        <user-outlined />
      </template>
     <a href="http://localhost:8080/PersonalCenter">个人中心</a>
    </a-menu-item>
  </a-menu>

    <a-layout-content>
 <a-tabs v-model:activeKey="activeKey" centered>
    <a-tab-pane key="1" tab="选择文字素材">
<a-row justify="space-around">
      <a-col :span="4"><a-image
    :width="150"
    src="https://img.poptnc.com/wp-content/uploads/2020/09/1599411448-718555d0b69d05b.png"
  /></a-col>
      <a-col :span="4"><a-image
    :width="150"
    src="https://img.poptnc.com/wp-content/uploads/2020/09/1599411448-718555d0b69d05b.png"
  /></a-col>
      <a-col :span="4"><a-image
    :width="150"
    src="https://img.poptnc.com/wp-content/uploads/2020/01/1580225701-bfd3a07c6e5acee.jpg"
  /></a-col>
      <a-col :span="4"><a-image
    :width="150"
    src="https://img.poptnc.com/wp-content/uploads/2020/01/1580225701-bfd3a07c6e5acee.jpg"
  /></a-col>
    </a-row>
    <br>
    <a-row justify="space-around">
      <a-col :span="4"><a-image
    :width="150"
    src="https://img.poptnc.com/wp-content/uploads/2020/01/1580225701-bfd3a07c6e5acee.jpg"
  /></a-col>
      <a-col :span="4"><a-image
    :width="150"
    src="https://img.poptnc.com/wp-content/uploads/2020/09/1599411448-718555d0b69d05b.png"
  /></a-col>
      <a-col :span="4"><a-image
    :width="150"
    src="https://img.poptnc.com/wp-content/uploads/2020/01/1580225701-bfd3a07c6e5acee.jpg"
  /></a-col>
      <a-col :span="4"><a-image
    :width="150"
    src="https://img.poptnc.com/wp-content/uploads/2020/01/1580225701-bfd3a07c6e5acee.jpg"
  /></a-col>
    </a-row>
    </a-tab-pane>
    <a-tab-pane key="2" tab="选择图片素材" force-render>
    <a-row justify="space-around">
      <a-col :span="4"><a-image
    :width="150"
    src="https://img.poptnc.com/wp-content/uploads/2020/09/1599927773-5dd6d4862206370.png"
  /></a-col>
      <a-col :span="4"><a-image
    :width="150"
    src="https://img.poptnc.com/wp-content/uploads/2020/09/1599927773-5dd6d4862206370.png"
  /></a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
    <br>
    <a-row justify="space-around">
      <a-col :span="4"></a-col>
      <a-col :span="4"><a-image
    :width="150"
    src="https://img.poptnc.com/wp-content/uploads/2020/09/1599927773-5dd6d4862206370.png"
  /></a-col>
      <a-col :span="4">col-4</a-col>
      <a-col :span="4">col-4</a-col>
    </a-row>
    </a-tab-pane>
    <!-- <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane> -->
  </a-tabs>
  <div class="bu">
  <a-button type="primary"><a href=http://127.0.0.1:5501/public/index1.html> 生成作品</a></a-button>
    </div>
    </a-layout-content>
     <a-layout-footer class="footer">
     <div>
<ul>
<h3>我是客户</h3>
<li>平台服务协议</li>
<li>会员权限</li>
<li>常见问题</li>
<li>VIP开通</li></ul>
<ul>
<h3>我是设计师</h3>
<li>成为设计师</li>
<li>开通工作室</li>
<li>花型设计规范</li>
</ul>
<ul>
<h3>知识产权</h3>
<li>免责声明</li>
<li>著作权保护</li>
<li>隐私保护</li>
</ul>
<ul>
<h3>内容发布</h3>
<li>规则修改</li>
<li>免责声明</li>
</ul>
<ul>
<h3>联系我们</h3>
<li>在线客服</li>
<li>联系我们</li>
</ul>
</div></a-layout-footer>
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
      current,
      activeKey: ref('1')
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
#components-grid-demo-flex :deep(.ant-row) {
  background: rgba(128, 128, 128, 0.08);
}
.bu{
    margin-left: 47%;
    margin-top: 5%;
}

.footer {
  width: 100%;
  height: auto;
  overflow: hidden;
  background: #364d79;
      padding: 24px 0px;
  text-align: center;
}
.footer div{
  width: 60%;
  display: flex;
  margin: 0 300px;
}

.footer ul {
  width: 100%;
  height: auto;
  overflow: hidden;
  justify-content: space-around;
  text-align: left;
}
.footer ul h3{
  color: #1890ff;
  margin-bottom: 15px;
}
.footer ul li {
  margin-top:8px;
  font-size: 12px;
  color:rgb(112, 106, 106);
  list-style:none;
}

.footer ul li a:hover {
  color: #ff6537;
}

.footer p {
  width: 100%;
  margin-top: 25px;
}
</style>
