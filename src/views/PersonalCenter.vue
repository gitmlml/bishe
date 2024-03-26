<template>
<!-- 导航栏 -->
<div id="top">
  <div id="menu1">
        <a-menu v-model:selectedKeys="current" mode="horizontal" style="background-color:white;color:black">
          <a-menu-item key="app">
            <template #icon>
              <appstore-outlined />
            </template>
            <a href="http://localhost:8080/" style="color:black">发现</a>
          </a-menu-item>
          <a-menu-item key="app4">
            <template #icon>
              <setting-outlined />
            </template>
            <a href="http://localhost:8080/DesignCenter" style="color:black">创作</a>
          </a-menu-item>
          <a-menu-item key="app2">
            <template #icon>
              <ApartmentOutlined />
            </template>
          <a href="http://localhost:8080/PersonalCenter" style="color:black">分类</a>
          </a-menu-item>
        </a-menu>
        <div id="title">
          NEWnews
        </div>
        <a-menu v-model:selectedKeys="current" mode="horizontal" style="background-color:white;color:black" >
          <a-menu-item key="app2" id="denglu">
            <template #icon >
              <user-outlined/>
            </template>
          <a href="http://localhost:8080/LoginRegister" style="color:black">退出登录</a>
          </a-menu-item>
        </a-menu>
  </div>
</div>

<!-- 个人信息展示栏 -->
<div class="personalmsg" >
  <!-- 用户名 -->
  <div id="yonghuming">
    <span style="margin-left:80px;margin-right:15px">yonghuming</span>
    <FormOutlined />
  </div>
  <!-- 头像 -->
  <div id="touxiang">
    <a-avatar style="background-color: white" :size="128">
      <template #icon >
        <UserOutlined />
      </template>
    </a-avatar>
  </div>
</div>

<!-- 内容栏 -->
<div class="collect">
  <a-menu v-model:selectedKeys="current" mode="horizontal" style="background-color:white">
    <a-menu-item key="mail" @click="changeMenu('ArticleCollect')">
      <template #icon>
        <FolderOpenOutlined />
      </template>
      收藏的文章
    </a-menu-item>
    <a-menu-item>
      <template #icon>
        <FolderOpenOutlined />
      </template>
      收藏的视频
    </a-menu-item>
  </a-menu>
  <!-- <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" /> -->
  <div class="content1 list" >
    <!--定义路由出口-->
    <router-view/>
  </div>
</div>

<!-- 页脚 -->
<div class="content4" style="padding-top:3%;height:250px;background-color:black">
  <div class="content3 text3" >
    Newnews.
  </div>
  <div class="content3" style="margin-top:20px;color:white">
    关于我们
  </div>
</div>

</template>

<script>
import { UserOutlined, AppstoreOutlined, SettingOutlined, ApartmentOutlined, FormOutlined, FolderOpenOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    UserOutlined,
    AppstoreOutlined,
    SettingOutlined,
    ApartmentOutlined,
    FormOutlined,
    FolderOpenOutlined
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
  },

  methods: {
    // 路由内容切换
    changeMenu (route) {
      console.log(route)
      // 获取路由对象并切换
      this.$router.push(route)
    }
  }

})
</script>

<style scoped>
/* 导航栏 */
#top{
  font-size: 30px;
  height: 80px;
  width: 100%;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  border-bottom: 0.05px solid rgb(214, 214, 214);
  position: sticky;/* 新属性sticky */
  top: 0;/* 距离页面顶部距离 */
  text-align: center;
  z-index: 1;
}
:deep(.ant-menu){
  height: 80px;
  width: 500px;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
}

#menu1{
  display: flex;
  justify-content: space-between;
}
#title{
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center;  /*水平居中*/
  float: right;
  font-weight: bolder ;
}
:deep(svg):hover{
  fill:rgb(0, 0, 0) !important;
}

:deep(.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after){
  border-bottom: rgb(255, 255, 255);
}

:deep(.ant-menu-item-active){
  color: #000000 !important;
}

/*个人信息展示栏*/
.content1{
  margin-left: 10%;
  margin-right: 10%;
}
.personalmsg{
  background-color:#ffe1e1;
  background-image: url(../assets/img/signup/bg3\(1\).png);
  height:180px;
  padding-left: 10%;
  padding-right: 10%;
}
#yonghuming{
  width: 40%;
  /*background-color: aqua;*/
  height: 180px;
  line-height: 180px;
  font-size: 25px;
  color: black;
  margin: 0;
  padding: 0;
  float: left;
}
#touxiang{
  width: 60%;
  float: left;
  line-height: 180px;
  padding-left: 42%;
}

/* 内容栏 */
.collect .ant-menu{
  justify-content:center;
  width:100%;
  margin-left:0 ;
}
:deep(.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected){
  color: #ff9d9d;
  border: #ff9d9d;
}
:deep(.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after){
  border-bottom: white;
}
.list{
  margin-bottom: 300px;
}

/* 页脚 */
.content4{
  background-color: rgb(250, 250, 250);
  width: 100%;
}
.content3{
  height: 55px;
  line-height:55px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 1%;
}
.text3{
  color:white ;
  font-size: 30px ;
  font-weight: bolder ;
}
</style>
