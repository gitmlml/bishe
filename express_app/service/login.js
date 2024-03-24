/* eslint-disable */
const express = require('express');//引入express模块
const router = express.Router();
const pool =require('../dao/connect')

router.post('/',(req,res,next)=>{
    pool.getConnection((err,conn)=>{//从连接池中拿一个连接
        const sqlStr='select * from user where phone=? and userpassword=?'
            conn.query(sqlStr,[req.body.userphone,req.body.userpassword],(err,results)=>{           
                //执行SQL失败了
                if(err)return console.log(err.message)
                else if(results==[]){
                    // res.json({code: 1, message: 'fail'})
                }
                //成功了
                //如果执行的是insert into插入语句，则results是一个对象
                //可以通过affectedRows属性来判断是否插入成功
                else{
                    console.log(results)
                    res.redirect("http://localhost:8080/HomeVieww")
                }
            })
            conn.release();
    })
})



module.exports=router;