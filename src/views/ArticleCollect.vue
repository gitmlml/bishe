<template>
<div class="article">
    <a-row style="padding-left:5px">
        <a-col :span="8">
            <a-card hoverable style="width: 370px" id="demo1">
            <template #cover>
                <img
                alt="example"
                src="../assets/img/home/card1.webp"
                />
            </template>
            <a-card-meta title="2024全球艺文活动，看这一篇就够了" description="请别再说“下次一定”">
            </a-card-meta>
            </a-card>
            <a-tooltip  placement="right" >
                <template #title>取消收藏</template>
                <DeleteOutlined class="delete" />
            </a-tooltip>
        </a-col>
        <a-col :span="8">
            <a-card hoverable style="width: 370px">
            <template #cover>
                <img
                alt="example"
                src="../assets/img/home/card2.webp"
                />
            </template>
            <a-card-meta title="还没收心上班的我都在偷偷刷这些网站｜清单" description="好玩、八卦、治愈……总有一款能打发时间。">
            </a-card-meta>
            </a-card>
            <a-tooltip  placement="right" >
                <template #title>取消收藏</template>
                <DeleteOutlined class="delete" />
            </a-tooltip>
        </a-col>
        <a-col :span="8">
            <a-card hoverable style="width: 370px">
            <template #cover>
                <img
                alt="example"
                src="../assets/img/home/card3.webp"
                />
            </template>
            <a-card-meta title="这次回家，我见了一些老朋友｜旧物回访" description="叙叙旧，再重新发出">
            </a-card-meta>
            </a-card>
            <a-tooltip  placement="right" >
                <template #title>取消收藏</template>
                <DeleteOutlined class="delete" />
            </a-tooltip>
        </a-col>
        <a-col :span="8">
            <a-card hoverable style="width: 370px">
            <template #cover>
                <img
                alt="example"
                src="../assets/img/home/card3.webp"
                />
            </template>
            <a-card-meta title="这次回家，我见了一些老朋友｜旧物回访" description="叙叙旧，再重新发出">
            </a-card-meta>
            </a-card>
            <a-tooltip  placement="right" >
                <template #title>取消收藏</template>
                <DeleteOutlined class="delete" />
            </a-tooltip>
        </a-col>
    </a-row>
</div>
  </template>

<script>
import { defineComponent, ref } from 'vue'
import { DeleteOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    DeleteOutlined
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
:deep(.ant-col-8){
    margin-bottom: 50px;
}

.delete{
    font-size: 30px;
    margin-top: 20px;
    padding-left: 45%;
}
</style>
