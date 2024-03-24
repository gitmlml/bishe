<!-- <template>
  <div>
    <a-button type="primary" @click="visible = true">New Collection</a-button>
    <a-modal
      v-model:visible="visible"
      title="Create a new collection"
      ok-text="添加"
      cancel-text="取消"
      @ok="onOk"
    >
      <a-form ref="formRef" :model="formState" layout="vertical" name="form_in_modal">
        <a-form-item
          name="adminname"
          label="管理员账号"
          :rules="[{ required: true, message: '请输入账号！' }]"
        >
          <a-input v-model:value="formState.adminname" />
        </a-form-item>
        <a-form-item name="name" label="管理员姓名">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item name="adminpassword" label="密码">
          <a-input v-model:value="formState.adminpassword" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import { defineComponent, reactive, ref, toRaw } from 'vue'
export default defineComponent({
  setup () {
    const formRef = ref()
    const visible = ref(false)
    const formState = reactive({
      adminname: '',
      name: '',
      adminpassword: ''
    })
    const onOk = () => {
      formRef.value.validateFields().then(values => {
        console.log('Received values of form: ', values)
        console.log('formState: ', toRaw(formState))
        visible.value = false
        formRef.value.resetFields()
        console.log('reset formState: ', toRaw(formState))
      }).catch(info => {
        console.log('Validate Failed:', info)
      })
    }
    return {
      formState,
      formRef,
      visible,
      onOk
    }
  }
})
</script>
<style>
.collection-create-form_last-form-item {
  margin-bottom: 0;
}
</style> -->

<template>
  <context-holder />
  <a-button type="primary" @click="info">Display normal message</a-button>
</template>
<script setup>
import { message } from 'ant-design-vue'
const [messageApi, contextHolder] = message.useMessage()
const info = () => {
  messageApi.info('Hello, Ant Design Vue!')
}
</script>
