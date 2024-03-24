<template>
<a-layout-header>
<!-- <img id="logo1" src="../assets/图片1.png"> -->
NEWnews-注册中心&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://localhost:8080/">返回首页</a>

<!-- <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal> -->
</a-layout-header>
 <a-layout>
    <a-layout-content>
    <div class="p">
 <form
    :model="formState"
    v-bind="layout"
    name="nest-messages"
    :validate-messages="validateMessages"
    @finish="onFinish" action="http://127.0.0.1/register" method="post"
  >
    <a-form-item :name="['user', 'name']" label="用户名">
      <a-input v-model:value="formState.user.name" name="username" />
    </a-form-item>
    <a-form-item :name="['user', 'email']" label="邮箱" :rules="[{ type: 'email' }]">
      <a-input v-model:value="formState.user.email" name="mail" />
    </a-form-item>
    <a-form-item :name="['user', 'password']" label="用户密码" >
      <a-input v-model:value="formState.user.password" name="userpassword"/>
    </a-form-item>
        <a-form-item :name="['user', 'phone']" label="联系方式" >
      <a-input v-model:value="formState.user.phone" name="userphone"/>
    </a-form-item>
    <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
      <a-button type="primary" html-type="submit" @click="register()">注册</a-button>
    </a-form-item>
  </form>
  </div>
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<script>
import {} from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import axios from 'axios'
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
    const layout = {
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 16
      }
    }
    const validateMessages = {
      // eslint-disable-next-line no-template-curly-in-string
      required: '请输入 ${label}',
      types: {
        // eslint-disable-next-line no-template-curly-in-string
        email: '请输入正确的${label}格式',
        // eslint-disable-next-line no-template-curly-in-string
        number: '${label} is not a valid number!'
      },
      number: {
        // eslint-disable-next-line no-template-curly-in-string
        range: '${label} must be between ${min} and ${max}'
      }
    }
    const formState = ref({
      user: {
        name: '',
        email: '',
        password: '',
        phone: ''
      }
    })

    const onFinish = values => {
      console.log('Success:', values)
    }
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      size,
      onChange,
      current,
      formState,
      onFinish,
      layout,
      validateMessages

    }
  },
  methods: {
    register () {
      const formData = new FormData()
      for (const key in this.formState.user) {
        formData.append(key, this.formState.user[key])
      }
      axios.post('http://127.0.0.1/register', formData).then((res) => {
        console.log(res)
      })
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

.p{
   padding-top: 5%;
    width: 60%;
    margin-left: 20%;
}
</style>
