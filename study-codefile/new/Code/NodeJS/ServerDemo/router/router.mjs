import express from 'express';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';



// 创建路由对象
const router = express.Router();

// 导入控制器模块 控制器模块用于处理路由的具体业务逻辑，如处理请求、返回响应等
// import controller from '../controller/controller.js';


// 创建路由规则
router.get('/img', (req, res) => {
    // query 是一个对象, 用来获取get请求的参数
    // msg 是一个自定义的属性, 用来存储信息
    req.query.msg = 'get图片请求已处理,发送前台';
    res.send({
        code:200,
        arr:[
            {id:1,img:'c1.png'},
        ],
        req:req.query
    })
});

var bannerJson = path.resolve('etc', 'banner.json');
router.get('/banner', (req, res) => {
    fs.readFile(bannerJson, (err, data) => {
        // console.log(data)
        if (err) {
            return res.send({
                code:500, 
                msg:err
            })
        } else {
            res.send({
                code:200,
                msg:'请求成功',
                data:JSON.parse(data.toString())
            });
            console.log(chalk.magenta('RouterAccess => ') + chalk.green('/banner'));
        }
    });
});

router.get('/html', (req, res) => {
    res.sendFile(path.resolve('public', 'html', 'homepage.html'));
    console.log(chalk.magenta('RouterAccess => ') + chalk.green('/html/homepage.html'));
});



// 导出路由对象
export default router;
