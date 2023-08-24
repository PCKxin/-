
const { on } = require('events'); // {}解构赋值, 引入events模块中的on方法 , 用来监听事件的
var express = require('express'); // require是nodejs中的引入模块的方法 , 引入express模块
var fs = require('fs'); // 引入fs模块 , 用来读取文件使用的
const { Script } = require('vm'); // 引入vm模块 , 用来执行js代码的
var ex_app = express(); // 创建一个express实例

// 跨域的第二种方式！ 
// CORS (Cross Origin Resource Sharing) 跨域资源共享 设置在服务端，方法为设置响应头，允许跨域访问，允许任何地址访问当前服务器地址

ex_app.get(
    '/testMsg', // 请求地址, 也就是前端发送请求的地址
    function (req, res) { // 回调函数, req指的是前端带来的参数, res指的是后台给前端的响应
        //允许任何地址访问当前服务器地址
        res.setHeader('Access-control-allow-origin', '*');
        // setHeader方法设置响应头, 第一个参数是响应头的名称, 第二个参数是响应头的值
        res.send('无糖百事可乐2L已送达...'); // send方法里的参数就是传递给前端响应的结果
    } 
)

ex_app.get(
    '/getDomList',
    function (req, res) {
        res.setHeader('Access-control-allow-origin', '*');
        var arr = ['我是第一个li', '我是第二个li', '我是第三个li', '我是第四个li'];

        //send方法 发送的数据格式 只能是基础数据类型 不能是引用数据类型
        res.send(JSON.stringify(arr));
        // JSON.stringify();是将其他数据类型转成json字符串形式
        // JSON.parse();将json字符串转成对象
    }
)

ex_app.get(
    '/JqGetAjax',
    function (req, res) {
        res.setHeader('Access-control-allow-origin', '*');
        req.id = req.query.index; // 获取前端传递过来的index, query是获取get请求的参数
        // console.log(req.id);
        fs.readFile(
            './json/JqGetAjax.json',
            'utf8',
            function(err, data){
                var arr = JSON.parse(data);
                // console.log(arr);
                for(var i = 0; i < arr.length; i++){
                    if(arr[i].id == req.id){
                        res.send(JSON.stringify(arr[i]));
                        console.log('name:   JqGetAjax.json'+'\n'+'data_id:   ' + arr[i].id);
                    }
                }
            }
        )
        console.log('----------------\\JqGetAjax success\\-----------------');
    }
)

ex_app.get(
    '/getUserInfo',
    function (req, res) {
        res.setHeader('Access-control-allow-origin', '*');
        fs.readFile( //参数1:文件路径, 参数2:编码格式, 参数3:回调函数
            './json/UserInfo.json',
            'utf8',
            function (err, data) { // 回调函数, 参数1:错误信息, 参数2:读取到的数据
                console.log(data);
                console.log(typeof data);
                res.send(data);
            }
        )
    }
)

ex_app.get(
    '/getOpt',
    function(req , res){
        res.setHeader('Access-control-allow-origin' , '*');
        console.log(req.query);
        var obj = req.query;
        // res.send('请求成功,发给前端的');
        res.send(JSON.stringify(obj));
    }
)

ex_app.get(
    '/getTelList',
    function(req,res){
        res.setHeader('Access-control-allow-origin' , '*');
        var id = req.query.id; // 获取前端传递过来的id
        fs.readFile(
            './json/TelList.json',
            'utf8',
            function(err , data){
                var arr = JSON.parse(data);
                for(var i = 0 ; i < arr.length ; i++){
                    if(arr[i].id == id){ //前端传过来的id和整个数据中的每一条id进行比较
                        res.send(JSON.stringify(arr[i])); // 如果相等, 就把这条数据返回给前端
                    }
                };
            }
        )
    }
)


ex_app.listen(
    8390,
    function (){
        console.log(
            '                  __    _    __               __                                            \n' +
            '   __  __ __  __ / /__ (_)  / /_ ___   _____ / /_   _____ ___   _____ _   __ ___   _____    \n' + 
            '  / / / // / / // //_// /  / __// _ \\ / ___// __/  / ___// _ \\ / ___/| | / // _ \\ / ___/    \n' + 
            ' / /_/ // /_/ // ,<  / /  / /_ /  __/(__  )/ /_   (__  )/  __// /    | |/ //  __// /        \n' +  
            ' \\__, / \\__,_//_/|_|/_/   \\__/ \\___//____/ \\__/  /____/ \\___//_/     |___/ \\___//_/         \n' + 
            '/____/                                                                                      \n'
            // 想实现\效果，就要用双\\ , 因为\是转义字符
        );
        console.log('system online' , 'port:8390')
    }
)







// 计算机的同源策略：协议 域名 端口号 一致的情况 可以互相访问
//                如果有一种不一样 都不允许互相访问
// 跨域的问题：jsonp 是get请求！！！跟ajax没关系
// 原理：是利用script标签中的src属性 这个属性最大的特点
// 不受同源策略的限制！




/*
* 在www目录下输入cmd打开终端
* 在终端中输入 npm init初始化
* 一直按回车
* 当前目录下会出现一个文件 package.json
* 新建一个index.js文件
* 在文件中随便打印一句话 console.log('hello')
*在终端中可以执行这个文件

* 执行语句 为 node index.js

* 终端中就会 输出 hello

* 表示 在node环境中执行index.js文件

* express框架
*作用：
*  1.快速搭建服务器
*  2.处理前端发送来得请求 服务器返回前端得数据

*安装：
*  npm install -g express -g意思是全局安装
* 全局安装express框架/插件
* 查看是否安装成功：
* 在package.json中 去找是否含有express
*
* error
* Error
* ERROR 报错
*

* 创建一个服务 并且启动
* 1.引入express
* var express = require('express')
* 2.调用express
* var app = express();
*
*
*
* 终端命令  cls  清屏意思
* ctrl + c 退出当前指令/终止当前指令
* cd 跟着路径 是打开文件路径
*
* */