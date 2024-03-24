<template>
  <div>
    <div style="margin-bottom:10px">
      <a-input-search
      v-model:value="value"
      style="margin-bottom:10px"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
    <a-button type="primary">+增加</a-button>
    </div>
    <!-- table -->
    <div>
      <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'Username'">
            <span>
              <smile-outlined />
              用户账号
            </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'Username'">
            <a>
              {{ record.Username }}
            </a>
          </template>

          <template v-else-if="column.key === 'action'">
            <span>
              <a-button type="primary">编辑</a-button>
              <a-divider type="vertical" />
              <a-button type="primary" danger>删除</a-button>
            </span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
const columns = [
  {
    name: 'UserName',
    dataIndex: 'Username',
    key: 'Username'
  },
  {
    title: '密码',
    dataIndex: 'password',
    key: 'password'
  },
  {
    title: '操作',
    key: 'action'
  }
]
const data = [
  {
    key: '1',
    Username: 121212,
    password: 123456
  },
  {
    key: '2',
    Username: 121212,
    password: 123456
  },
  {
    key: '3',
    Username: 121212,
    password: 123456
  }
]

export default defineComponent({
  components: {

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
      columns,
      data

    }
  },

  data () {
    return {
      value: '  '
    }
  }

})

</script>

<style scoped>
:deep(.ant-input-group){
  width:300px;
}
</style>
