<template>
  <div class="first">
    <div class="container" :class="{'right-panel-active' : isActive}">
      <!-- Sign Up -->
      <div class="container__form container--signup">
        <form action="#" class="form" id="form1">
          <h2 class="form__title">注册</h2>
          <input type="text" placeholder="User" class="input" v-model="registerUsername"/>
          <input placeholder="Name" class="input" v-model="name"/>
          <input type="password" placeholder="Password" class="input" v-model="registerPassword"/>
          <button class="btn" type="submit" id="register_submit" @click="submitButton">注册</button>
        </form>
      </div>

      <!-- Sign In -->
      <div class="container__form container--signin">
        <form action="#" class="form" id="form2">
          <h2 class="form__title">登录</h2>
          <input type="username" placeholder="Username" class="input" v-model="username"/>
          <input type="password" placeholder="Password" class="input" v-model="password"/>
          <a href="#" class="link">忘记密码？</a>
          <button class="btn" type="submit" id="login_submit" @click="loginButton">登录</button>
        </form>
      </div>

      <!-- Overlay -->
      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <button class="btn" id="signIn"  @click="signInBtn">登录</button>
          </div>
          <div class="overlay__panel overlay--right">
            <button class="btn" id="signUp" @click="signUpBtn">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import {} from '../api/request'
import { loginTosystem } from '../api/get'
import { registerAccount } from '../api/post'

// fistForm.addEventListener('submit', (e) => e.preventDefault())
// secondForm.addEventListener('submit', (e) => e.preventDefault())

export default defineComponent({
  name: 'LoginRegister',
  data () {
    return { // 初始值
      isActive: false, // class是否生效
      username: '', // 登录用户名
      password: '', // 登录密码
      name: '', // 注册姓名
      registerUsername: '', // 注册账号
      registerPassword: '' // 注册密码
      // dengluform: {}
    }
  },
  components: {

  },

  // 页面加载的时候做一些事情在created中
  created () {

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
  },

  // 定义页面上的控件发出时间的调用方法
  methods: {
    // 切换注册界面
    signInBtn () {
      this.isActive = false
    },
    // 切换至登录界面
    signUpBtn () {
      this.isActive = true
    },
    // 登录
    loginButton () {
      if (this.username.trim() === '') {
        alert('请输入用户名')
        return
      }
      if (this.password.trim() === '') {
        alert('请输入密码')
        return
      }
      loginTosystem(this.username, this.password).then(res => {
        if (res.data.data == null) {
          alert('账号或密码错误！')
        } else {
          alert('登录成功')
          this.$router.push({
            path: '/maintry',
            // 将username传到maintry组件，用于获取登陆人员的姓名
            query: { username: this.username }
          })
        }
      })
    },
    // 注册
    submitButton (e) {
      if (this.name === '') {
        alert('请输入姓名')
        e.preventDefault()
        return
      }
      if (this.registerUsername === '') {
        alert('请输入用户名')
        e.preventDefault()
        return
      }
      if (this.registerPassword === '') {
        alert('请输入密码')
        e.preventDefault()
        return
      }
      const obj = {
        username: this.registerUsername,
        password: this.registerPassword,
        name: this.name
      }
      console.log(obj)
      this.registerAccount(obj)
      this.name = ''
      this.registerUsername = ''
      this.registerPassword = ''
    },
    // 注册信息 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成
    async registerAccount (obj) {
      await registerAccount(obj).then(res => {
        alert(res.data.data)
      })
    },
    watch: {
      // 监听登录和注册地方只能使用数字和英文
      username (newValue, oldValue) {
        this.username = newValue.replace(/[^A-Za-z0-9]/g, '')
      },
      password (newValue, oldValue) {
        this.password = newValue.replace(/[^A-Za-z0-9]/g, '')
      },
      registerUsername (newValue, oldValue) {
        this.registerUsername = newValue.replace(/[^A-Za-z0-9]/g, '')
      },
      registerPassword (newValue, oldValue) {
        this.registerPassword = newValue.replace(/[^A-Za-z0-9]/g, '')
      },
      // 只能输入汉字
      name (newValue, oldValue) {
        this.name = newValue.replace(/[^\4E00-\u9FA5]/g, '')
      }
    }
  }

})

</script>

<style scoped>
.first{
  align-items: center;
  background-color: var(--white);
  background: url("../assets/img/signup/bg2.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;
}
.form__title {
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.25rem;
}

.link {
  color: #333;
  font-size: 0.9rem;
  margin: 1.5rem 0;
  text-decoration: none;
}

.container {
  background-color: #e9e9e9;
  border-radius:  0.7rem;
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
  height: 420px;
  max-width: 758px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.container__form {
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
}

.container--signin {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .container--signin {
  transform: translateX(100%);
}

.container--signup {
  left: 0;
  opacity: 0;
  width: 50%;
  z-index: 1;
}

.container.right-panel-active .container--signup {
  animation: show 0.6s;
  opacity: 1;
  transform: translateX(100%);
  z-index: 5;
}

.container__overlay {
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;
}

.container.right-panel-active .container__overlay {
  transform: translateX(-100%);
}

.overlay {
  background-color: #5e5e5f;
  background: url("../assets/img/signup/bg2.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: -100%;
  position: relative;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 200%;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay__panel {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;
}

.overlay--left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay--left {
  transform: translateX(0);
}

.overlay--right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay--right {
  transform: translateX(20%);
}

.btn {
  background-color: #5e5e5f;
  background-image: linear-gradient(90deg, #5e5e5f, #272625 74%);
  border-radius: 20px;
  border: 1px solid #5e5e5f;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.form>.btn {
  margin-top: 1.5rem;
}

.btn:active {
  transform: scale(0.95);
}

.btn:focus {
  outline: none;
}

.form {
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
}

.input {
  background-color: #fff;
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
}

@keyframes show {

  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

</style>
