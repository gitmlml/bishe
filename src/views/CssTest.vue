<template>
 <!-- 活动列表 -->
 <div class="content1" style="margin-top:20px" id="components-grid-demo-flex-align">
    <a-row justify="space-between" align="top" class="shulunbo">
    <!-- 第一列 -->
      <a-col :span="6" style="padding:0px 5px">
        <div style="width:100%">
            <a-card hoverable style="width: 100%;margin-bottom:30px;height:450px">
                <template #cover>
                    <img alt="example" style="height:350px" src="https://img-sz.topys.cn/2023-10-20/1697787374424.jpg?x-oss-process=image/resize,w_554/format,webp" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
            <a-card hoverable style="width: 100%;margin-bottom:30px;height:450px">
                <template #cover>
                    <img alt="example" style="height:350px" src="https://img-sz.topys.cn/2023-10-20/1697787374424.jpg?x-oss-process=image/resize,w_554/format,webp" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
            <a-card hoverable style="width: 100%;margin-bottom:30px;height:450px">
                <template #cover>
                    <img alt="example" style="height:350px" src="https://img-sz.topys.cn/2023-10-20/1697787374424.jpg?x-oss-process=image/resize,w_554/format,webp" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
        </div>
      </a-col>
    <!--   <a-col :span="6" style="padding:0px 5px">
            <div>
            <a-card hoverable style="width: 100%;margin-bottom:30px">
                <template #cover>
                    <img alt="example" src="https://img-sz.topys.cn/2023-09-05/1693897244315.jpg?x-oss-process=image/resize,w_554/format,webp" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
            <a-card hoverable style="width: 100%;margin-bottom:30px">
                <template #cover>
                    <img alt="example" src="https://img-sz.topys.cn/2023-09-05/1693897244315.jpg?x-oss-process=image/resize,w_554/format,webp" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
            <a-card hoverable style="width: 100%;margin-bottom:30px">
                <template #cover>
                    <img alt="example" src="https://img-sz.topys.cn/2023-09-05/1693897244315.jpg?x-oss-process=image/resize,w_554/format,webp" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
        </div>
    </a-col>
    <a-col :span="6" style="padding:0px 5px">
        <div style="width:100%">
            <a-card hoverable style="width: 100%;margin-bottom:30px">
                <template #cover>
                    <img alt="example" src="https://img-sz.topys.cn/2023-10-20/1697787374424.jpg?x-oss-process=image/resize,w_554/format,webp" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
            <a-card hoverable style="width: 100%;margin-bottom:30px">
                <template #cover>
                    <img alt="example" src="https://img-sz.topys.cn/2023-10-20/1697787374424.jpg?x-oss-process=image/resize,w_554/format,webp" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
            <a-card hoverable style="width: 100%;margin-bottom:30px">
                <template #cover>
                    <img alt="example" src="https://img-sz.topys.cn/2023-10-20/1697787374424.jpg?x-oss-process=image/resize,w_554/format,webp" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
        </div>
      </a-col>
      <a-col :span="6" style="padding:0px 5px">
            <div>
            <a-card hoverable style="width: 100%;margin-bottom:30px">
                <template #cover>
                    <img alt="example" src="https://img-sz.topys.cn/2023-09-05/1693897244315.jpg?x-oss-process=image/resize,w_554/format,webp" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
            <a-card hoverable style="width: 100%;margin-bottom:30px">
                <template #cover>
                    <img alt="example" src="https://img-sz.topys.cn/2023-09-05/1693897244315.jpg?x-oss-process=image/resize,w_554/format,webp" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
            <a-card hoverable style="width: 100%;margin-bottom:30px">
                <template #cover>
                    <img alt="example" src="https://img-sz.topys.cn/2023-09-05/1693897244315.jpg?x-oss-process=image/resize,w_554/format,webp" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
        </div>
    </a-col> -->

    </a-row>
 </div>
</template>

<script>
// import { UserOutlined, AppstoreOutlined, SettingOutlined, ApartmentOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    // UserOutlined,
    // AppstoreOutlined,
    // SettingOutlined,
    // ApartmentOutlined
    // // UserOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
    // MenuUnfoldOutlined,
    // MenuFoldOutlined,
    // MailOutlined,
    // AppstoreOutlined,
    // SettingOutlined
    // AppstoreOutlined,
    // SettingOutlined,
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

<style>
.shulunbo{
    height:500px;
    overflow: hidden;
}
:deep(.ant-card-body){
    padding-left: 24px;
    padding-bottom: 0px;
    padding-top: 24px;
}
</style>
