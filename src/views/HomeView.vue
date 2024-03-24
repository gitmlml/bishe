<template>
  <div id="top">
    <div id="menu1">
          <a-menu v-model:selectedKeys="current" mode="horizontal">
            <a-menu-item key="app">
              <template #icon>
                <appstore-outlined />
              </template>
              <a href="http://localhost:8080/Wordlibrary">发现</a>
            </a-menu-item>
            <a-menu-item key="app4">
              <template #icon>
                <setting-outlined />
              </template>
              <a href="http://localhost:8080/DesignCenter">定制</a>
            </a-menu-item>
            <a-menu-item key="app2">
              <template #icon>
                <ApartmentOutlined />
              </template>
            <a href="http://localhost:8080/PersonalCenter">分类</a>
            </a-menu-item>
          </a-menu>
          <div id="title">
            NEWnews
          </div>
          <a-menu v-model:selectedKeys="current" mode="horizontal" >
            <a-menu-item key="app2" id="denglu">
              <template #icon>
                <user-outlined />
              </template>
            <a href="http://localhost:8080/LoginRegister">登录/注册</a>
            </a-menu-item>
          </a-menu>
    </div>
  </div>

  <!-- content -->
  <!-- part1 -->
  <div  class="content1">
    <a-row>
      <!-- 图片 -->
      <a-col :span="6" :push="18">
        <div class="img1">

        </div>
        <div class="img2">

        </div>
      </a-col>
      <!-- 走马灯 -->
      <a-col :span="18" :pull="6">
          <a-carousel arrows autoplay>
          <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
              <left-circle-outlined />
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-slick-arrow" style="right: 10px">
              <right-circle-outlined />
            </div>
          </template>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </a-carousel>
      </a-col>
    </a-row>
  </div>

<!-- part2 -->
  <div class="content2" onclick="window.location.href='http://localhost:8080/Wordlibrary'" >
    <a>更多功能正式上线！等你来点播</a>
  </div>
<!-- 编辑推荐 -->
  <div class="content3 text1" >
    Editor's Pick 编辑推荐
    <div id="more" class="text2"><a>查看更多——></a></div>
  </div>
  <!-- 卡片 -->
  <div class="content1" style="height:1000px background-color=grey">
    <a-row style="padding-left:5px">
      <a-col :span="8">
        <a-card hoverable style="width: 370px" id="demo1">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable style="width: 370px">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable style="width: 370px">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
  <div class="content1" style="margin-top:10px">
    <a-row style="padding-left:5px">
      <a-col :span="8">
        <a-card hoverable style="width: 370px">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable style="width: 370px">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable style="width: 370px">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>

  <!-- 查看更多 -->
  <div class="buttonbox">
    <a-space wrap>
      <a-button style="margin-top:20px align-self= center;" size="large">查看更多</a-button>
    </a-space>
  </div>

  <!-- part3 灵感视频 -->
  <div class="content4" style="padding-top:3%">
    <div class="content3 text1" >
      Featured Video 灵感视频
    </div>
    <!-- 视频列表 -->
    <div class="content1" style="margin-top:20px">
      <!-- *2 -->
      <a-row :gutter="16">
        <a-col :span="12" >
          <div style="padding: 2px 0; height:400px">
            <video src="" style=""></video>
          </div>
        </a-col>
        <a-col :span="12" style="background-color:aquamarine">
          <div style="padding: 2px 0; height:400px">
            <video src="" style=""></video>
          </div>
        </a-col>
      </a-row>
      <!-- *3 -->
      <a-row :gutter="16" style="margin-top:10px">
        <a-col :span="8" style="background-color:aquamarine">
          <div style="padding: 2px 0; height:200px">
            <video src="" style=""></video>
          </div>
        </a-col>
        <a-col :span="8">
          <div style="padding: 2px 0; height:200px">
            <video src="" style=""></video>
          </div>
        </a-col>
        <a-col :span="8" style="background-color:#364d79">
          <div style="padding: 2px 0; height:200px">
            <video src="" style=""></video>
          </div>
        </a-col>
      </a-row>
      <!-- 更多视频 -->
      <div class="buttonbox">
        <a-space wrap>
          <a-button style="margin-top:20px align-self= center;" size="large">更多视频</a-button>
        </a-space>
      </div>
    </div>
  </div>

  <!-- part 4 精选活动-->
  <div class="content4" style="padding-top:3%;background-color:white">
    <div class="content3 text1" >
      Featured Events 精选活动
    </div>
    <!-- 活动列表 -->
    <div class="content1" style="margin-top:20px" id="components-grid-demo-flex-align">
      <a-row justify="space-between" align="top">
        <a-col :span="6" style="padding:0px 5px">
          <a-card hoverable style="width: 100%">
            <template #cover>
              <img alt="example" src="https://img-sz.topys.cn/2023-10-20/1697787374424.jpg?x-oss-process=image/resize,w_554/format,webp" />
            </template>
            <a-card-meta title="Europe Street beat">
              <template #description>www.instagram.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="6" style="padding:0px 5px">
          <a-card hoverable style="width: 100%">
            <template #cover>
              <img alt="example" src="https://img-sz.topys.cn/2023-09-05/1693897244315.jpg?x-oss-process=image/resize,w_554/format,webp" />
            </template>
            <a-card-meta title="Europe Street beat">
              <template #description>www.instagram.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="6" style="padding:0px 5px">
          <a-card hoverable style="width: 100%">
            <template #cover>
              <img alt="example" src="https://img-sz.topys.cn/2023-08-24/1692866321020.jpg?x-oss-process=image/resize,w_554/format,webp" />
            </template>
            <a-card-meta title="Europe Street beat">
              <template #description>www.instagram.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="6" style="padding:0px 5px">
          <a-card hoverable style="width: 100%">
            <template #cover>
              <img alt="example" src="https://img-sz.topys.cn/2023-10-20/1697787374424.jpg?x-oss-process=image/resize,w_554/format,webp" />
            </template>
            <a-card-meta title="Europe Street beat">
              <template #description>www.instagram.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
      <!-- 第二行 -->
      <a-row justify="space-between" align="top">
        <a-col :span="6" style="padding:0px 5px">
          <a-card hoverable style="width: 100%">
            <template #cover>
              <img alt="example" src="https://img-sz.topys.cn/2023-10-20/1697787374424.jpg?x-oss-process=image/resize,w_554/format,webp" />
            </template>
            <a-card-meta title="Europe Street beat">
              <template #description>www.instagram.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="6" style="padding:0px 5px">
          <a-card hoverable style="width: 100%">
            <template #cover>
              <img alt="example" src="https://img-sz.topys.cn/2023-09-05/1693897244315.jpg?x-oss-process=image/resize,w_554/format,webp" />
            </template>
            <a-card-meta title="Europe Street beat">
              <template #description>www.instagram.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="6" style="padding:0px 5px">
          <a-card hoverable style="width: 100%">
            <template #cover>
              <img alt="example" src="https://img-sz.topys.cn/2023-08-24/1692866321020.jpg?x-oss-process=image/resize,w_554/format,webp" />
            </template>
            <a-card-meta title="Europe Street beat">
              <template #description>www.instagram.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="6" style="padding:0px 5px">
          <a-card hoverable style="width: 100%">
            <template #cover>
              <img alt="example" src="https://img-sz.topys.cn/2023-10-20/1697787374424.jpg?x-oss-process=image/resize,w_554/format,webp" />
            </template>
            <a-card-meta title="Europe Street beat">
              <template #description>www.instagram.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <!-- 更多活动 -->
    <div class="buttonbox">
      <a-space wrap>
        <a-button style="margin-top:20px align-self= center;" size="large">更多活动</a-button>
      </a-space>
    </div>
  </div>

  <!-- part 5 内容分类 -->
  <div class="content4" style="padding-top:3%;padding-bottom:10%;background-color:white">
    <div class="content1" style="margin-top:20px">
      <a-row :gutter="16">
        <a-col class="gutter-row resort-row" :span="4">
          <div class="resort-box" >
            <div class="resort-one">
            </div>
            <div class="resort-text" >
              <p>热门</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row resort-row" :span="4">
          <div class="resort-box">
            <div class="resort-one">
            </div>
            <div class="resort-text" >
              <p>热门</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row resort-row" :span="4">
          <div class="resort-box">
            <div class="resort-one">
            </div>
            <div class="resort-text" >
              <p>热门</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row resort-row" :span="4">
          <div class="resort-box">
            <div class="resort-one">
            </div>
            <div class="resort-text" >
              <p>热门</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row resort-row" :span="4">
          <div class="resort-box">
            <div class="resort-one">
            </div>
            <div class="resort-text" >
              <p>热门</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row resort-row" :span="4">
          <div class="resort-box">
            <div class="resort-one">
            </div>
            <div class="resort-text" >
              <p>热门</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row resort-row" :span="4">
          <div class="resort-box">
            <div class="resort-one">
            </div>
            <div class="resort-text" >
              <p>热门</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row resort-row" :span="4">
          <div class="resort-box">
            <div class="resort-one">
            </div>
            <div class="resort-text" >
              <p>热门</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row resort-row" :span="4">
          <div class="resort-box">
            <div class="resort-one">
            </div>
            <div class="resort-text" >
              <p>热门</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row resort-row" :span="4">
          <div class="resort-box">
            <div class="resort-one">
            </div>
            <div class="resort-text" >
              <p>热门</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row resort-row" :span="4">
          <div class="resort-box">
            <div class="resort-one">
            </div>
            <div class="resort-text" >
              <p>热门</p>
            </div>
          </div>
        </a-col>
        <a-col class="gutter-row resort-row" :span="4">
          <div class="resort-box">
            <div class="resort-one">
            </div>
            <div class="resort-text" >
              <p>热门</p>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>

  <!-- part 6 页尾 -->
  <div class="content4" style="padding-top:3%;height:350px;background-color:black">
    <div class="content3 text3" >
      Newnews.
    </div>
    <div class="content3" style="margin-top:20px;color:white">
      关于我们
    </div>
  </div>
</template>

<script>
import { UserOutlined, AppstoreOutlined, SettingOutlined, ApartmentOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    UserOutlined,
    AppstoreOutlined,
    SettingOutlined,
    ApartmentOutlined
    // UserOutlined,
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

window.onload = function () {
  const demo1 = document.getElementById('demo1')
  demo1.onclick = function () {
    location.href = './PicLibrary'
  }
}
</script>

<style scoped>
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

/*part2*/
.content1{
  margin-left: 10%;
  margin-right: 10%;
}
/* zoumadeng*/
:deep(.slick-slide) {
  text-align: center;
  height: 500px;
  line-height: 500px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}

:deep(.ant-carousel){
  padding-top: 30px;
  padding-right: 15px;
}

/*img1*/
.img1{
  background-color: #364d79;
  width: 100%;
  height: 45%;
  margin-top: 30px;
}
.img2{
  background-color: #364d79;
  width: 100%;
  height: 45%;
  margin-top: 23px;
}

/* part2 */
.content2{
  height: 45px;
  background-color: black;
  line-height:50px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 1%;
}
.content2 a{
  color: white;
}
.content2:hover{
  background-color: rgb(255, 255, 24);
}
.content2:hover a{
  color: black;
}

.content3{
  height: 55px;
  line-height:55px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 1%;
}
.text1{
  font-size: 20px;
  font-weight: bolder ;
}
#more{
  float: right;
}
.text2{
  font-size: 15px;
  font-weight:lighter;
  color: gray;
}
.text2 a{
  color: gray
}

.box1{
  width: 25%;
  float: left;
  background-color: red;
  padding: 2px;
}

/*按钮*/
.buttonbox{
  display: grid;
  align-items: center;
  justify-content: center;
  height: 150px;
}

/* part 3*/
.content4{
  background-color: rgb(250, 250, 250);
  width: 100%;
}
:deep(.ant-col-12){
  background-color: #364d79;
  padding:2px 5px;
}

/* part 5 */
.resort-box{
  background-color: #364d79;
  height: 170px;
  background-image: url(../assets/img/resort/1710295783607.webp);
  position: relative;
  overflow: hidden;
  text-align: center;
  color: #fff;
  line-height: 170px;
}
.resort-row{
  padding: 8px 0;
}
.resort-one{
  position: absolute;
  width:100%;height:170px;
  background-color: black;
  opacity: .7;

}
.resort-box:hover .resort-one{
  opacity: 0;
  transition: all .2s ease;
}
.resort-text{
  position:absolute;
  width:100%;
  height:170px;
  font-size: 20px;
  font-weight: bolder ;
}

/* part 6 */
.text3{
  color:white ;
  font-size: 30px ;
  font-weight: bolder ;
}
</style>
