// 导入axios配置
import service from '../api/request'

// 注册账号
export function registerAccount (obj) {
  return service.post('/register/registerAccount', JSON.stringify(obj), {
    headers: { 'Content-Type': 'application/json' }
  })
}

// 实现注册功能，用一个对象参数去接收，把它传入后端的/register/registerAccount的controller方法
