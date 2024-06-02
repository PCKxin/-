const moment = require('moment');
// express 模块
// 使用前需要安装 express 模块 npm install express -d 意思是安装到devDependencies中

// 引入express模块
const express = require('express');
// 创建express实例
const ex_app = express();

// 设置请求头
// .use 是express的一个方法, 用来设置请求头
// 和.all 区别是.all是匹配所有请求方式, .use是匹配所有请求路径
ex_app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'text/html; charset=utf-8');// 设置响应头
    if (req.method === 'OPTIONS') { // 如果是options请求, 直接返回200
        res.sendStatus(200); // 返回200状态码
    }else{
        next();// 调用next方法, 继续执行下一个中间件
    }
});

// 使用moment模块 格式化时间
// .format('YYYY-MM-DD HH:mm:ss') 是moment的一个方法, 用来格式化时间
var now = moment().format('YYYY-MM-DD HH:mm:ss');

// 创建路由

// .get 是express的一个方法, 用来处理get请求
ex_app.get('/', (req, res) => {
    res.send('get请求 根目录被访问' + "服务启动时间" + now);
});

// .post 是express的一个方法, 用来处理post请求
ex_app.post('/', (req, res) => {
    res.send('post请求 根目录被访问' + moment().format('YYYY-MM-DD HH:mm:ss'));
});

// 监听端口
ex_app.listen(3901, () => {
    console.log('server online');
    console.log(now);
    console.log("http://127.0.0.1:3901/");
});