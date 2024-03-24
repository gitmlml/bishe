const express = require('express')
const router = express.Router()
const pool = require('../dao/connect')

router.post('/', (req, res, next) => {
  pool.getConnection((_err, conn) => {
    console.log(req.body)
    const sqlStr = 'insert into user (username,mail,userpassword,phone,type) values (?,?,?,?,?)'
    conn.query(sqlStr, [req.body.username, req.body.mail, req.body.userpassword, req.body.userphone, '普通用户'], (err, results) => {
      if (err) return console.log(err.message)
      if (results.affectedRows === 1) {
        console.log('插入数据成功！')
      }
    })
    conn.release()
  })
})

module.exports = router
