import chalk from 'chalk'; // 引入chalk模块, 用于在控制台中输出带颜色的文字
import fs from 'fs';
import path from 'path';
import express from 'express';
import cors from 'cors'; // 引入cors模块, 用于解决跨域问题
import bodyParser from 'body-parser'; // 引入body-parser模块, 用于解析post请求的参数
import mysql from 'mysql'; // 引入mysql模块, 用于连接mysql数据库
import router from './router/index.js'; // 引入router模块, 用于路由处理

var ex_app = express();
// 设置请求头，解决跨域问题
ex_app.use(cors());
// 使用body-parser模块
ex_app.use(bodyParser.json()); // 解析json格式的参数
// 如何引用body-parser模块: 用req.body 例如 req.body.username
ex_app.use(bodyParser.urlencoded({extended:false}))
const viewPath = path.resolve('view'); // view路径
const htmlPath = path.resolve('view', 'html'); // html路径
const cssPath = path.resolve('view', 'css'); // css路径
const jsPath = path.resolve('view', 'js'); // js路径
const imgPath = path.resolve('view', 'images'); // 图片路径 resolve()方法用于将路径或路径片段的序列解析为绝对路径


// 静态资源托管
ex_app.use(
    express.static( imgPath ),
    express.static( htmlPath ),
    express.static( jsPath ),
    express.static( cssPath ),
    express.static( viewPath )
); // static()方法用于设置静态资源托管, view是静态资源目录


ex_app.use((req,res,next)=>{
    // 错误中间件函数
    res._fail = (meg,data,code=500)=>{
        res.send({
            code,
            msg,
            data
        })
    }

    // 正确中间件函数
    res._ok = (msg,data,code=200)=>{
        res.send({
            code,
            msg,
            data
        })
    }
    next()
})

ex_app.use(router) // 当在路由中执行next的时候，程序会执行错误中间件
ex_app.use((err,req,res,text)=>{
    if(err){
        res.send({
            code:500,
            msg:err instanceof Object ? err.message : err,
            data:[]
        })
    }
})


ex_app.listen(
    2209, 
    () => {
        // 文字逐个输出，像打字效果一样
        const vertxt = '>> Server 潘佳宝考试(Ver:0.1.2) \n';
        const s_msg = '>> system online ';
        // const s_port = 'port:3901 \n';
        const s_port = 'http://127.0.0.1:2209/ \n';
        // 封装成函数
        function OBOprintRed(txt, time) {
            for (let i = 0; i < txt.length; i++) {
                setTimeout(() => {
                    process.stdout.write(chalk.red.bold(txt[i]));
                }, i * time); // i * time 表示每个字符输出的间隔时间
            }
        }
        // 增加静默时间，前一个函数执行完后再执行下一个函数
        function OBOprintGreen(txt, time) {
            setTimeout(() => {
                for (let i = 0; i < txt.length; i++) {
                    setTimeout(() => {
                        process.stdout.write(chalk.green.bold(txt[i]));
                    }, i * time); // i * time 表示每个字符输出的间隔时间
                }
            }, vertxt.length * time);
        }
        function OBOprintYellow(txt, time) {
            setTimeout(() => {
                for (let i = 0; i < txt.length; i++) {
                    setTimeout(() => {
                        process.stdout.write(chalk.yellow.bold(txt[i]));
                    }, i * time); // i * time 表示每个字符输出的间隔时间
                }
            }, (vertxt.length + s_msg.length + s_port.length) * time);
        }
        console.log(chalk.red.bold(
            '                  __    _                                         \n' +
            '   __  __ __  __ / /__ (_)  _____ ___   _____ _   __ ___   _____  \n' +
            '  / / / // / / // //_// /  / ___// _ \\ / ___/| | / // _ \\ / ___/\n' +
            ' / /_/ // /_/ // ,<  / /  (__  )/  __// /    | |/ //  __// /      \n' +
            ' \\__, / \\__,_//_/|_|/_/  /____/ \\___//_/     |___/ \\___//_/   \n' +
            '/____/                                                                          \n' 
            // 想实现\效果，就要用双\\ , 因为\是转义字符
        ));
        // console.log(chalk.green.bold('system online'), chalk.yellow.bold('port:3901'))
        // 方法同步调用
        OBOprintRed(vertxt, 10);
        OBOprintGreen(s_msg, 10);
        OBOprintYellow(s_port, 10);
    }
)