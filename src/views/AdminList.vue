<template>
  <div>
    <div style="margin-bottom:10px">
      <a-input v-model:value="params.adminname" placeholder="请输入账号" style="width:300px"/>
      <a-button type="primary" style="margin-left:10px" @click="findBySearch()">查询</a-button>
      <a-button type="primary" style="margin-left:10px" @click="reset()">重置</a-button>
      <a-button type="primary" style="margin-left:10px" @click="visible = true">+ 增加</a-button>
      <!-- 添加管理员 -->
        <a-modal
          v-model:visible="visible"
          title="添加管理员"
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
            <a-form-item name="name" label="管理员姓名"
            :rules="[{ required: true, message: '请输入姓名！' }]">
              <a-input v-model:value="formState.name" />
            </a-form-item>
            <a-form-item name="adminphone" label="联系方式"
            :rules="[{ required: true, message: '请输入联系方式！' }]">
              <a-input v-model:value="formState.adminphone" />
            </a-form-item>
          </a-form>
        </a-modal>
    </div>
    <!-- table -->
    <div>
      <a-table :columns="columns" :data-source="tableData">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'adminname'">
            <span>
              <smile-outlined />
              管理员账号
            </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'adminname'">
              {{ record.adminname }}
          </template>

          <template v-else-if="column.key === 'action'">
            <span>
              <a-button type="primary">编辑</a-button>
              <a-divider type="vertical" />
              <a-button type="primary" danger @click="showDeleteConfirm">删除</a-button>
            </span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, toRaw, createVNode } from 'vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { Modal } from 'ant-design-vue'
import request from '../api/request'

// table 列
const columns = [
  {
    name: 'AdminName',
    dataIndex: 'adminname',
    key: 'adminname'
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '联系方式',
    dataIndex: 'adminphone',
    key: 'adminphone'
  },
  {
    title: '操作',
    key: 'action'
  }
]

export default defineComponent({
  data () {
    return {
      params: {
        adminname: ''// 查询输入框中输入的账号
      },

      tableData: []
    }
  },
  components: {

  },
  // 页面在创建时需要做的事
  created () {
    this.load()
  },
  // 定义页面上控件发出的事件调用的方法
  methods: {

    // 调后台接口查询管理员信息
    load () {
      request.get('/admin').then(res => {
        // 成果返回0
        if (res.code === '0') {
          this.tableData = res.data
          console.log(this.tableData)
        // eslint-disable-next-line no-empty
        } else {

        }
      })
    },

    // 根据账号查询管理员
    findBySearch () {
      console.log('开始查询')
      console.log(this.params)
      // eslint-disable-next-line no-undef
      request.get('/admin/searchAdmin', {
        params: this.params
      }).then(res => {
        if (res.code === '0') {
          this.tableData = res.data
          console.log(this.tableData)
          // eslint-disable-next-line no-empty
        } else {

        }
      })
    },

    // 重置输入框
    reset () {
      this.params = {
        adminname: ''
      }
      this.findBySearch()
    }
  },

  setup () {
    const size = ref('default')

    const onChange = e => {
      console.log('size checked', e.target.value)
      size.value = e.target.value
    }
    const current = ref(['mail'])

    // 提交添加管理员表单
    const formRef = ref()
    const visible = ref(false)
    const formState = reactive({
      adminname: '',
      name: '',
      adminphone: ''
    })
    const onOk = () => {
      formRef.value.validateFields().then(values => {
        console.log('Received values of form: ', values)
        console.log('formState: ', toRaw(formState))
        // 添加管理员
        request.post('/admin/saveAdmin', {
          adminname: formState.adminname,
          name: formState.name,
          adminphone: formState.adminphone
        }).then(res => {
          if (res.code === '0') {
            console.log('管理员添加成功')
            // findBySearch()
          // eslint-disable-next-line no-empty
          } else {

          }
        })
        visible.value = false
        formRef.value.resetFields()
        console.log('reset formState: ', toRaw(formState))
      }).catch(info => {
        console.log('Validate Failed:', info)
      })
    }

    // 删除管理员信息
    const showDeleteConfirm = () => {
      Modal.confirm({
        title: '确定删除此管理员信息？',
        icon: createVNode(ExclamationCircleOutlined),
        content: '删除后不可取消',
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk () {
          console.log('OK')
        },
        onCancel () {
          console.log('Cancel')
        }
      })
    }

    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      size,
      onChange,
      current,
      // new
      columns,
      formState,
      formRef,
      visible,
      onOk,
      showDeleteConfirm

    }
  }

})

</script>

<style scoped>
:deep(.ant-input-group){
  width:300px;
}
</style>
