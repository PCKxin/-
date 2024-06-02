//  router.js
// 下载了新的第三方模块 mysql
// 需要在路由模块中 链接mysql数据库。访问指定的数据库，取出我需要的数据

const express = require("express")
const router = express.Router()
const mysql = require("mysql")
// 转换时间戳
const moment = require("moment")

// 连接指定的mysql数据库  保存给db
const db = mysql.createPool({
    host:"192.168.213.128",// 主机
    port:"3306", // 端口
    user:"root", // 用户名
    password:"123456", // 密码
    database:"chopenedu" // 链接名称
})

// 定义 获取商品类型的接口
router.get("/getProductType" , (req,res,next)=>{
    var sql = ` SELECT * FROM shopdemo_product_type `
    db.query(sql,(err,data)=>{
        if(err) return next(err)
        res._ok("请求成功" ,data)
    })
})


// 定义 添加产品的接口
router.post("/updateProduct",(req,res,next)=>{
    var obj = req.body
    if(!obj.num) return res._fail("请传递修改商品的数量",[])
    if(!obj.id) return res._fail("请传递修改商品的id",[])
    var sql = ` UPDATE shopdemo_product SET num=${obj.num} WHERE id=${obj.id} `
    db.query(sql,(err,data)=>{
        if(err) return next(err)
        res._ok("修改商品成功",data)
    })

})

router.post("/addProduct" , (req,res,next)=>{
    var obj = req.body
    // 最好做数据验证
    if(Object.keys(obj).length == 0)return; // 最差劲的判断



    var sql = ` INSERT INTO shopdemo_product VALUES (null ,"${obj.name}","${obj.pPrice}","${obj.pNum}","${obj.type}","${obj.cTime}") `

    db.query(sql , (err,data)=>{
        if(err) return next(err)
        if(data.affectedRows > 0){
            res._ok("添加数据成功",data.insertId)
        }else{
            res._fail("添加商品失败" , [])
        }
    })

})


// 定义 查询产品接口
router.get("/selProduct",(req,res,next)=>{
    var sql = ` SELECT * FROM shopdemo_product `
    db.query(sql , (err,data)=>{
        if(err) return next(err)

        // 时间戳转换时间
        data.forEach(item=>{
            item.createTime = moment(item.createTime*1).format("YYYY-MM-DD HH:mm:ss")
        })

        res._ok("数据读取成功",data)


        // res._ok("数据读取成功",ReData)
    })
})

// 定义删除产品接口
router.get("/delProduct",(req,res,next)=>{
    var obj = req.query
    if(!obj.id) return res._fail("请传递删除商品的id",[])
    var sql = ` DELETE FROM shopdemo_product WHERE id=${obj.id} `
    db.query(sql,(err,data)=>{
        if(err) return next(err)
        res._ok("删除商品成功",data)
    })
})

// 定义更新产品数量

router.post("/updateProduct",(req,res,next)=>{
    var obj = req.body
    if(!obj.num) return res._fail("请传递修改商品的数量",[])
    if(!obj.id) return res._fail("请传递修改商品的id",[])
    var sql = ` UPDATE shopdemo_product SET num=${obj.num} WHERE id=${obj.id} `
    db.query(sql,(err,data)=>{
        if(err) return next(err)
        res._ok("修改商品成功",data)
    })
})




router.get("/user" , (req,res,next)=>{
    
    var obj = req.query;
    // 不让用户写空格和不写
    if(!obj.username || !obj.username.trim()){
        res.send({
            code:500,
            msg:"请输入用户名",
            data:[]
        })
    }
    if(!obj.pwd || !obj.pwd.trim()){
        res.send({
            code:500,
            msg:"请输入用户密码",
            data:[]
        })
    }



    var sql = ` SELECT * FROM user WHERE username="${obj.username}" `
    db.query(sql , (err,data,next)=>{
        if(err) return next(err)
        
        // 有没有出错
        if(data.length > 0){
            console.log(data);
            console.log(data[0].pwd);
            console.log(obj.pwd);
            // 判断密码
            if(data[0].pwd == obj.pwd){
                res.send({
                    code:200,
                    msg:"用户登录成功",
                    data:[]
                })
            }else{
                res.send({
                    code:500,
                    msg:"密码错误登录失败",
                    data:[]
                })
            }
        }else{
            res.send({
                code:500,
                msg:"用户名为注册没找到",
                data:[]
            })
        }
    })
    
})


// 注册接口
router.get("/register",(req,res,next)=>{
    var obj = req.query;
    // 如果obj.username 没有值，则报错
    // 或者如果 obj.username 去掉空格后。有没有值，则报错
    if(!obj.username || !obj.username.trim()){
        res.send({
            code:500,
            msg:"请输入用户名",
            data:[]
        })
    }
    if(!obj.pwd || !obj.pwd.trim()){
        res.send({
            code:500,
            msg:"请输入用户密码",
            data:[]
        })
    }

    var sql = ` SELECT * FROM user WHERE username="${obj.username}" `
    db.query(sql , (err,data,next)=>{
        if(err) return next(err)

        // 如果没有出错，则data 会获取到数据
        if(data.length > 0){
            // 查到数据了
            res.send({
                code:500,
                msg:"该用户名已被注册",
                data:[]
            })
        }else{
            // 没查到数据
            sql = ` INSERT INTO user VALUES (null , "${obj.username}","${obj.pwd}") `
            db.query(sql,(err,data,next)=>{
                if(err) return next(err)
                
                if(data.affectesRows > 0){
                    res.send({
                        code:200,
                        msg:"注册成功",
                        data:[]
                    })
                }else{
                    res.send({
                        code:500,
                        msg:"注册失败",
                        data:[]
                    })
                }
            })
        }
    })
})

module.exports = router