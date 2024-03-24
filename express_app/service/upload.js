/* eslint-disable */
const { ESLint } = require('eslint');
const express = require('express');//引入express模块
const router = express.Router();
const multer=require('multer')



let filename;
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        //指定文件路径存储地
        cb(null,'./public');
        
    },
    filename:function(req,file,cb){
        //指定存储后的文件名(有两个问题)
        //1文件名重复覆盖  时间戳
        //2后缀名发生改变
        console.log('---',file);
        //获取后缀名
        let userid=1;
        let ext='png'
        let tepname=(userid+'-avater');
        //拼接名字
        cb(null,`${tepname}.${ext}`);
        filename=tepname+'.'+ext;
    }
});

var upload=multer({
    storage:storage
});

router.post('/',upload.single('avater'),(req,res)=>{
    let {size,mimetype,path}=req.file;
    let types=['jpeg','jpg','png','gif'];//允许上传的类型
    let tmpType=mimetype.split('/')[1];

    if(size>5000000){
        return res.send({err:-1,msg:'上传的内容不能超过5000000'})
    }
    else if(types.indexOf(tmpType)==-1){
        return res.send({err:-2,msg:'上传的类型错误'})
    }
    else{

        http = 'http://127.0.0.1/filename/'+filename;
        console.log(http);

        
    }
})

module.exports=router;