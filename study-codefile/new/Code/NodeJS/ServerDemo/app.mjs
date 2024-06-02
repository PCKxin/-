import chalk from 'chalk'; // 引入chalk模块, 用于在控制台中输出带颜色的文字
import fs from 'fs';
import path from 'path';
// 引入express模块
import express from 'express';
import cors from 'cors'; // 引入cors模块, 用于解决跨域问题
import bodyParser from 'body-parser'; // 引入body-parser模块, 用于解析post请求的参数
import mysql from 'mysql'; // 引入mysql模块, 用于连接mysql数据库
import router from './router/router.mjs'; // 引入router模块, 用于处理路由
import loginRouter from './router/LoginRouterSQL.mjs'; // 引入loginRouter模块, 用于处理登录路由
import { msglock, msgunlock } from './YukiMessageLock.js'; // 引入YukiMessageLock模块, 用于加解密消息


var ex_app = express();
// 设置请求头，解决跨域问题
ex_app.use(cors());

// 使用body-parser模块
ex_app.use(bodyParser.json()); // 解析json格式的参数
// 如何引用body-parser模块: 用req.body 例如 req.body.username

const publicPath = path.resolve('public'); // public路径
const etcPath = path.resolve('etc'); // etc路径 etc文件夹用于存放配置文件，如json文件 etc文件夹路径一般存在于项目根目录
const htmlPath = path.resolve('public', 'html'); // html路径
const cssPath = path.resolve('public', 'css'); // css路径
const jsPath = path.resolve('public', 'js'); // js路径
const imgPath = path.resolve('public', 'images'); // 图片路径 resolve()方法用于将路径或路径片段的序列解析为绝对路径

// .resolve 和 .join 区别在于 .resolve()方法返回的是绝对路径, .join()方法返回的是相对路径

// public是静态资源目录, images是存放图片的文件夹 /public/images
// 静态资源托管
ex_app.use(
    express.static( imgPath ),
    express.static( htmlPath ),
    express.static( jsPath ),
    express.static( cssPath ),
    express.static( etcPath ),
    express.static( publicPath )
); // static()方法用于设置静态资源托管, public是静态资源目录

// 使用中间件处理post请求
// 先用body-parser解析json格式的参数，再用unlock解密消息
// unlock参数只能是body-parser解析后req.body的数据
ex_app.use((req, res, next) => {
    // if (req.method === 'POST') {
    //     // 解密消息
    //     req.body = msgunlock(req.body);
    //     console.log(chalk.green.bold('解密消息:'), req.body);
    //     return next();
    // } else {
    //     next();
    // }
    // 中间件不好用，暂时注释掉
    console.log(chalk.green.bold('请求方式:'), req.method);
    
    
    next();
});

ex_app.use((req, res, next) => {
    // 封装一个失败函数，用于后期取数据失败的时候，进行失败数据数据返回
    res._fail = (msg, code, data) => {
        res.send({
            code: code || 500,
            requestFail: 'fail',
            msg: msg,
            data: data || []
        });
    };
    // 封装一个成功函数
    res._ok = (msg, data) => {
        res.send({
            code: 200,
            requestFail: 'ok',
            msg: msg,
            data: data || []
        });
    };
    next();
});


// 使用 router 路由模块
ex_app.use( router );

// 使用 loginRouter 路由模块
ex_app.use( loginRouter ); // use()方法用于使用中间件, use()方法的第一个参数是路由路径, 第二个参数是路由模块


// listen() 方法用来监听端口号
ex_app.listen(
    3901, 
    () => {
        // 文字逐个输出，像打字效果一样
        const vertxt = '>> Server Version 0.1.2 \n';
        const s_msg = '>> system online ';
        const s_port = 'port:3901 \n';
        const s_url = 'http://127.0.0.1:3901/';
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

