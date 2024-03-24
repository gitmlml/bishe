<template>
  <!-- 导航栏 -->
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
            <a href="http://localhost:8080/PersonalCenter">登录/注册</a>
            </a-menu-item>
          </a-menu>
    </div>
  </div>

  <!-- 内容 -->
  <div class="content">
    <div class="title" style="text-align:center ">
      <a-typography-title :level="3" style="line-height:60px">灵感手抄本</a-typography-title>
    </div>
    <div class="type" style="height:30px;text-align:center ">
      <a-typography-paragraph style="line-height:30px">
        <a href="">热门</a>
        <a href="">推荐</a>
        <a href="">影视</a>
        <a href="">情感</a>
        <a href="">年轻人</a>
      </a-typography-paragraph>
    </div>
    <div class="text" style="margin-top:20px">
      <p>童年时期对过年的记忆，或是铺满地面的红色鞭炮纸，或是屋内的春晚和屋外的烟花上演此起彼伏的音量大战……无论忆及哪个场景，第一感受总是“热闹”。做饭、吃饭、放炮仗，不论做什么都是一群人一起。在这闹哄哄、乱糟糟的年味中，只有一份记忆稍显安静，就是拍全家福的时候。翻看旧照，即便有些照片没那么清晰，依然让人会心一笑。被姥姥抱着的小孙女撅着嘴巴，大概还在怨念大人不让自己吃糖。一旁大一点的孙子更是面若冰霜：既然都是小学生，姥姥怎么抱妹妹却不抱他呢？……相片里不是所有人都笑着，有人懵懂，有人局促，却都十分鲜活。</p>
      <p>而如今提及全家福，第一印象便是照相馆千篇一律的模板和精修。修图软件在抚平面容的同时，也消除了每个人独特的状态和表情。精修的图片虽然工整美丽，却也少了几分生活的烟火气。全家福还有别的可能性吗？</p>
      <p>今天，我们想去影视剧里寻找答案。在下面这份片单中，我们便以八张全家福做引子，讲述那些千姿百态的照片背后，关于爱与离别的故事 。</p>
      <span class="smallTiele">*1</span>
      <br>
      <img src="../assets/img/textPic/jiandie.webp" alt="" >
      <p>《间谍过家家》是日本漫画家远藤达哉在《少年Jump+》上连载的漫画作品，已经成功动画化并且上线了两季。</p>
      <p>故事围绕着一个前所未有的“家庭”展开：杀手妈妈，间谍爸爸，会读心术的女儿，有预知能力的大型犬。出于“我们就是幸福快乐的一家”（划掉）想要完成各自NPC任务的理念，他们想方设法隐瞒自己的能力、乔装成由平平无奇普通市民组成的和谐家庭，并由此展开了一系列有惊无险的喜剧。</p>
      <p>和你想象的剧情发展一样，连同主人公一起成长的，还有他们对彼此产生的、具体而珍贵的情谊。而这些“原本不该有”的情感，让这个100%配件组装的伪装家庭时而有些拧巴。这种“想靠近又不敢靠近”的纠结，和正常家庭里因为距离或小口角而走神的关系产生了微妙的对照。即便是血浓于水的关系，谁又敢说没藏着几个不想言说的秘密呢？同样的，“全家福”也并不是一张照片而已。面对镜头的故作亲密，以及经由摄影师调试后的“非安全距离”，即便对于如假包换的家人来说也是同样的世纪难题，那就笑吧——像《间谍过家家》一样，说不定最后结果是好的呢？对了，如果你有宠物家人，那么这会是一个很好的构图参考。</p>
      <span class="smallTiele">*2</span>
      <img src="../assets/img/textPic/xiaotoujiazu.webp" alt="">
      <p>说到全家福，《小偷家族》并不是那种会被第一刻想起的影片吧。那张经典的，一家人在海边雀跃的背影，记录下的，是这个家庭难得与寻常人一样的快乐时刻，它看上去越是明亮灿烂，就越显出那些穷困、卑微、艰辛的沉重。</p>
      <p>所以，你很难说这是一张全家“福”。</p>
      <p>可，它又那么让人不忍舍弃。</p>
      <p>因为，你总是还会想到这些生活在社会边缘的人，他们纵然过得窘迫潦倒、纵然各有各的不幸，却最终幸运地遇到了彼此，以自身微弱的光，互相取暖，重新定义了什么是“家”。这也许不是普世意义下，人们会向往的生活状态，但片中角色之间流淌的温情和爱，相信是每个人都期待拥有的。</p>
    </div>
  </div>

  <!-- 评论区 -->
  <div class="comment" style="height:500px">
    <a-divider />
    <!-- 用户头像 -->
    <div class="editPic" style="width:10%;float:left">
      <a-avatar :size="64">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </div>
    <!-- 输入框 -->
    <div class="editText" style="width:90%;float:left;margin-bottom:20px">
      <a-textarea v-model:value="value" placeholder="Basic usage" :rows="4" />
      <a-button type="primary" style="margin-top:8px">发布</a-button>
    </div>
    <a-divider  />
    <!--  已有评论 -->
    <div class="section" style="width:100%">
      <!-- 评论1 -->
      <a-comment>
          <template #actions>
            <span key="comment-basic-like">
              <a-tooltip title="Like">
                <template v-if="action === 'liked'">
                  <LikeFilled @click="like" />
                </template>
                <template v-else>
                  <LikeOutlined @click="like" />
                </template>
              </a-tooltip>
              <span style="padding-left: 8px; cursor: auto">
                {{ likes }}
              </span>
            </span>
          </template>
          <template #author><a>爱吃西瓜o</a></template>
          <template #avatar>
            <!-- <a-avatar src="../assets/img/resort/1710295783607.webp" alt="H" /> -->
            <a-avatar style="background-color: #87d068"></a-avatar>
          </template>
          <template #content>
            <p>
              说到影视剧的全家福，最先蹦出来的有两个，一个是【阳光普照】，还有一个是【请回答1988】。
            </p>
          </template>
      </a-comment>
      <a-divider  />
      <!-- 评论2 -->
       <a-comment style="margin-top:20px">
        <template #actions>
          <span key="comment-basic-like">
            <a-tooltip title="Like">
              <template v-if="action === 'liked'">
                <LikeFilled @click="like" />
              </template>
              <template v-else>
                <LikeOutlined @click="like" />
              </template>
            </a-tooltip>
            <span style="padding-left: 8px; cursor: auto">
              {{ likes }}
            </span>
          </span>
        </template>
        <template #author><a>爱吃西瓜o</a></template>
        <template #avatar>
          <!-- <a-avatar src="../assets/img/resort/1710295783607.webp" alt="H" /> -->
          <a-avatar style="background-color: pink"></a-avatar>
        </template>
        <template #content>
          <p>
            就知道会有小偷家族（叼玫瑰）
          </p>
        </template>
      </a-comment>
      <a-divider  />
    </div>
  </div>

  <!-- 推荐
  <div style="background-color: #87d068;height:500px;margin-top:200px" >

  </div> -->

  <!-- 侧边栏 -->
  <div class="slider">
    <!-- 点赞 -->
    <a-tooltip placement="right">
      <template #title >
        <span>点赞</span>
      </template>
      <!-- icon -->
      <div @click="changeLikeColor">
        <div class="icon" id="like" :style="{fontSize: '30px', color: likeColor }">
          <HeartOutlined v-if="likeColor == 'grey'"/>
          <HeartFilled v-else/>
        </div>
      </div>
    </a-tooltip>
      <!-- 收藏 -->
    <a-tooltip placement="right">
      <template #title >
        <span>收藏</span>
      </template>
      <!-- icon -->
      <a-space class="icon" @click="changeServeColor">
        <a-icon id="like"  :style="{fontSize: '30px', color: serveColor }">
          <StarOutlined v-if="serveColor == 'grey'"/>
          <StarFilled v-else/>
        </a-icon>
      </a-space>
    </a-tooltip>
  </div>
</template>
<script>
import { UserOutlined, AppstoreOutlined, SettingOutlined, ApartmentOutlined, HeartOutlined, StarOutlined, HeartFilled, StarFilled, LikeFilled, LikeOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default defineComponent({
  components: {
    UserOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
    // MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    ApartmentOutlined,
    HeartOutlined,
    StarOutlined,
    HeartFilled,
    StarFilled,
    LikeFilled, // pinglun
    LikeOutlined
  },

  data () {
    return {
      likeColor: 'grey', // 初始颜色
      serveColor: 'grey'
    }
  },
  methods: {
    changeLikeColor () {
      this.likeColor = this.likeColor === 'grey' ? 'pink' : 'grey'
    },
    changeServeColor () {
      this.serveColor = this.serveColor === 'grey' ? 'yellow' : 'grey'
    }
  },

  setup () {
    const size = ref('default')

    const onChange = e => {
      console.log('size checked', e.target.value)
      size.value = e.target.value
    }

    const current = ref(['mail'])

    // plq
    const likes = ref(0)
    const dislikes = ref(0)
    const action = ref()
    const like = () => {
      likes.value = 1
      dislikes.value = 0
      action.value = 'liked'
    }
    const dislike = () => {
      likes.value = 0
      dislikes.value = 1
      action.value = 'disliked'
    }

    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      size,
      onChange,
      current,
      likes, // plq
      dislikes,
      action,
      like,
      dislike,
      dayjs
    }
  }

})
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

/* 侧边栏 */
.slider{
    width: 70px;
    height: 150px;
    background-color:rgb(33, 38, 93)w;
    /* 设置绝对定位，将侧边栏固定在页面上的右边区域 */
    position: fixed;
    /* 330像素正好将侧边栏与主体区域的顶部对齐 */
    top:  180px;
    left: 14%;
}
.icon{
  width: 60px;
  height: 60px;
  display: flex;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color:grey;
  margin-bottom: 5px;
}
.icon:hover{
  color:white;
  background-color: #000;
}
.iconactived{
  font-size: 30px;
  color: pink;
}

/* 内容 */
.content{
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 1%;
  margin-bottom:130px ;
  /*background-color: bisque;*/
}
.type a{
  padding: 15px;
  color:#393939;
  text-decoration: none;
  outline: none;
}
.type a:hover{
  color: #000;
}
.text p{
  color: #000;
  letter-spacing:1px;
  line-height: 30px;
  margin-bottom: 15px;
  font-size: 18px;
  color: #6d6d6d;
  font-weight: lighter;
}
.text img{
  margin-bottom: 30px;
  width: 100%;
}
.smallTiele{
  margin-top: 40px;
  font-size: 100px;
  color: #757575;
  font-weight: bolder;
}

/* 评论区 */
.comment{
    margin-left: 20%;
    margin-right: 20%;
}
</style>
