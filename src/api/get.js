// 导入axios配置
import service from '../api/request'

// 登录
export function loginTosystem (username, password) {
  return service.get('/login/loginTosystem', {
    headers: { 'Content-Type': 'application/json' },
    params: {
      username: username,
      password: password
    }
  })
}

// 实现登录功能，则需要先引入刚刚的request.js文件
// 把前端输入框输入的两个参数，账号username和密码password传到后端
// 获取后端路径下的/login/loginTosystem里编写的controller方法
