const express = require('express')
const router = express.Router() // 创建路由对象
const register = require('../service/Register')
const login = require('../service/login')

router.use('/register', register)
router.use('/login', login)

// 对外暴露模块
module.exports = router
