// router.js

const express = require("express");
const router = express.Router();
const mysql = require("mysql");
// 转换时间戳
const moment = require("moment");

// 连接指定的mysql数据库  保存给db
const db = mysql.createPool({
    host: "192.168.213.128", // 主机
    port: "3306", // 端口
    user: "root", // 用户名
    password: "123456", // 密码
    database: "chopenedu" // 数据库名称
});

/*
数据表students，包含字段如下：
Id 编号
Username 姓名 字符串类型
Age 整数类型 可以不能为空 
Tel 数字类型 可以为空
Status 状态 默认是 0
*/ 

// 获取所有数据
router.get("/getStudent", (req, res, next) => {
    var sql = ` SELECT * FROM students `
    db.query(sql, (err, data) => {
        if (err) return next(err)
        // console.log(data)
        res._ok("请求成功", data)
    })
})

// 添加数据
router.post("/addStudent", (req, res, next) => {
    var obj = req.body
    if (!obj.username) return res._fail("请传递姓名", [])
    if (!obj.age) return res._fail("请传递年龄", [])
    var sql = ` INSERT INTO students VALUES (null,"${obj.username}","${obj.age}",null,0) `
    db.query(sql, (err, data) => {
        if (err) return next(err)
        if (data.affectedRows > 0) {
            res._ok("添加数据成功", data)
        } else {
            res._fail("添加数据失败", [])
        }
    })
})

// 删除数据
router.post("/delStudent", (req, res, next) => {
    var obj = req.body
    if (!obj.id) return res._fail("请传递id", [])
    var sql = ` DELETE FROM students WHERE id=${obj.id} `
    db.query(sql, (err, data) => {
        if (err) return next(err)
        if (data.affectedRows > 0) {
            res._ok("删除数据成功", data)
        } else {
            res._fail("删除数据失败", [])
        }
    })
})

// 查询数据
router.post("/searchStudent", (req, res, next) => {
    var obj = req.body
    if (!obj.username) return res._fail("请传递用户名", [])
    var sql = ` SELECT * FROM students WHERE username LIKE "%${obj.username}%" `
    db.query(sql, (err, data) => {
        if (err) return next(err)
        res._ok("查询数据成功", data)
    })
})

// 排序数据 年龄升序
router.get("/sortStudent", (req, res, next) => {
    var sql = ` SELECT * FROM students ORDER BY Age ASC `
    db.query(sql, (err, data) => {
        if (err) return next(err)
        res._ok("排序数据成功", data)
    })
})

// 验证码
router.get("/captcha", (req, res, next) => {
    var captcha = Math.random().toString(36).slice(-6);
    res._ok("验证码", captcha)
})
// 登录验证
router.post("/login", (req, res, next) => {
        /*
    查询user表中是否有该手机号
    如果有，则直接把验证码及获取验证码的时间戳存入到该用户上
    如果用户手机号不存在，则将该手机号,验证码,获取验证码的时间戳存入数据库user表中,创建新的用户，并将手机号,验证码,时间戳返回给前台
    

    表结构
    CREATE TABLE `user` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Tel` int DEFAULT NULL,
  `Code` varchar(255) DEFAULT NULL,
  `loginTime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    */
    
    var obj = req.body
    // console.log(obj)
    if (!obj.tel) return res._fail("请传递手机号", [])
    if (!obj.code) return res._fail("请传递验证码", [])
    // console.log(obj)
    var sql = ` SELECT * FROM user WHERE Tel=${obj.tel} `
    console.log(sql)
    db.query(sql, (err, data) => {
        if (err) return next(err)
        console.log(data)
        if (data.length > 0) {
            // 有该手机号
            // var time = moment().format("YYYY-MM-DD HH:mm:ss")
            var sql = ` UPDATE user SET Code="${obj.code}",loginTime="${obj.time}" WHERE Tel=${obj.tel} `
            db.query(sql, (err, data) => {
                if (err) return next(err)
                res._ok("登录成功", data)
            })
        } else {
            // 没有该手机号
            // var time = moment().format("YYYY-MM-DD HH:mm:ss")
            var sql = `INSERT INTO user (Tel,Code,loginTime) VALUES (${obj.tel},"${obj.code}","${obj.time}")`
            console.log(sql)
            db.query(sql, (err, data) => {
                if (err) return next(err)
                res._ok("登录成功", data)
            })
        }
    })
})


module.exports = router;
