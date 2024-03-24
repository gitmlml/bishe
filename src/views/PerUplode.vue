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
        <a-menu-item key="3">
          <user-outlined />
                    <a href="http://localhost:8080/PersonalCenter">&nbsp;&nbsp;&nbsp;个人信息</a>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <a href="http://localhost:8080/mywork">&nbsp;&nbsp;&nbsp;我的作品</a>
        </a-menu-item>
        <a-menu-item key="1">
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
      <!-- 上传素材： -->
       <div class="clearfix">
    <a-upload
      v-model:file-list="fileList"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      @preview="handlePreview"
    >
      <div v-if="fileList.length < 8">
        <plus-outlined />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
      </a-layout-content>
    </a-layout>
  </a-layout></a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<script>
import { PlusOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => resolve(reader.result)

    reader.onerror = error => reject(error)
  })
}
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    // MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    PlusOutlined
  },

  setup () {
    const size = ref('default')

    const onChange = e => {
      console.log('size checked', e.target.value)
      size.value = e.target.value
    }
    const current = ref(['mail'])
    const previewVisible = ref(false)
    const previewImage = ref('')
    const previewTitle = ref('')
    const fileList = ref([{
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://img.poptnc.com/wp-content/uploads/2020/01/1580225701-bfd3a07c6e5acee.jpg'
    }, {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://img.poptnc.com/wp-content/uploads/2020/01/1580225701-bfd3a07c6e5acee.jpg'
    }, {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://img.poptnc.com/wp-content/uploads/2020/01/1580225701-bfd3a07c6e5acee.jpg'
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error'
    }])

    const handleCancel = () => {
      previewVisible.value = false
      previewTitle.value = ''
    }

    const handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }

      previewImage.value = file.url || file.preview
      previewVisible.value = true
      previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    }

    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      size,
      onChange,
      current,
      previewVisible,
      previewImage,
      fileList,
      handleCancel,
      handlePreview,
      previewTitle
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
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

.a-layout-header{
color: #fff;
}
</style>
