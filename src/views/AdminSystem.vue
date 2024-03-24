<template>
<a-layout style="height:100vh">
    <a-layout-header class="header">
    <div class="logo" />
    <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
    >
        <a-menu-item key="1">nav 1</a-menu-item>
    </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
    <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
        <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%"
        >
            <a-sub-menu key="sub1">
            <template #title>
                <span>
                <user-outlined />
                操作人员管理
                </span>
            </template>
            <a-menu-item key="1"  @click="changeMenu('AdminList')">管理员</a-menu-item>
            <a-menu-item key="2"  @click="changeMenu('UserList')">用户</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
            <template #title>
                <span>
                <laptop-outlined />
                subnav 2
                </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
            <template #title>
                <span>
                <notification-outlined />
                subnav 3
                </span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
        </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
            <!--定义路由出口-->
            <router-view/>
        </a-layout-content>
    </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
    Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
</a-layout>
</template>
<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined
  },
  setup () {
    return {
      selectedKeys1: ref(['2']),
      selectedKeys2: ref(['1']),
      openKeys: ref(['sub1'])
    }
  },
  data () {
    return { // 初始值

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
#components-layout-demo-top-side .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top-side .logo {
    float: right;
    margin: 16px 0 16px 24px;
}
.site-layout-background {
    background: #fff;
}
:deep(.ant-menu-item-active){
    background-color:#001529 ;
}
:deep(.ant-layout.ant-layout-has-sider){
    height: 90%;
}
</style>
