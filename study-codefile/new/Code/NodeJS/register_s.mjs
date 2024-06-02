// http 是由NodeJS官方提供的 用来创建web服务器的模块
// 通过http.createServer()方法可以创建一个web服务器

// ES模块文件后缀名为.mjs
import chalk from 'chalk'; // 引入chalk模块, 用于在控制台中输出带颜色的文字
// ERR_REQUIRE_ESM 错误通常表示你正在尝试使用require()来导入一个ES模块，但这是不允许的。在Node.js中，ES模块必须使用import语句来导入。
// chalk的2.4.0版本开始，chalk已经是一个ES模块，所以你需要使用import语句来导入chalk，而不是require()

// const http = require('http');
// const fs = require('fs');
// const { userin } = require('./2.fs文件系统模块.js');
import http from 'http';
import fs from 'fs';
// import { userin } from './2.fs文件系统模块.js';

var server = http.createServer();


// 注册函数封装
function userin(username, tel, pwd){
    console.log(username, tel, pwd);
    fs.readFile("./data/user.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let userData = JSON.parse(data).data;
            let userinfo = {
                id: userData.length + 1,
                Uname: username,
                Upwd: pwd,
                Utel: tel
            }
            var count = 0;
            for (let i = 0; i < userData.length; i++) {
                if (userData[i].Uname == userinfo.Uname) {
                    console.log('用户名已存在');
                    return; // 终止函数
                } else if (userData[i].Utel == userinfo.Utel) {
                    console.log('手机号已存在');
                    return; // 终止函数
                } else {
                    // 对比次数记录
                    count++;
                    // userData.push(userinfo);
                }
            }
            console.log("注册成功");
            console.log("对比次数==>"+count);

            userData.push(userinfo);
            // console.log(userData);
            let json = JSON.stringify({data: userData});
            fs.writeFile('./data/user.json', json, 'utf-8', (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('写入成功');
                    // console.log(json);
                    console.log("Welcome <" + decodeURIComponent(chalk.magenta.bold(userinfo.Uname)) + ">" + "\n" + "Your ID is <" + chalk.red.bold(userinfo.id) + ">" + "\n" + "当前用户数:" +chalk.green.bold(userData.length));
                    // return id = userinfo.id;
                }
            })
        }
    });
}

// on 方法用来为服务添加监听事件
server.on('request', function (req, res) {
    // req 请求对象, 获取前台发送的数据
    // res 响应对象, 后台给前台返回数据
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');// 设置响应头

    // console.log(req.url) // 通过req.url可以获取到前台访问的路径
    var urlArr = req.url.split("?")
    console.log(urlArr);
    res.end("你访问了接口")

    if(urlArr[0] == '/register'){
        // 注册流程
        var newUser = {}
        var dataArr = urlArr[1].split("&")
        // 用来分割数据 
        // 例如：username=123&password=123 =>  ['username=123', 'password=123']
        dataArr.forEach(function (item) {
            var tempArr = item.split("=") // 等号分割 ['username', '123']
            // 解码username
            newUser[tempArr[0]] = decodeURIComponent(newUser[tempArr[0]])
            newUser[tempArr[0]] = tempArr[1] // newUser['username'] = '123'

            
        })
        console.log(newUser.user)

        userin(newUser.user,newUser.tel,newUser.pwd)

        // res.end()
    }


});  

// listen() 方法用来监听端口号
server.listen(
    3901,
    function () {
        console.log(chalk.red.bold(
            '                  __    _                                           ___   ____  \n' +
            '   __  __ __  __ / /__ (_)  _____ ___   _____ _   __ ___   _____   <  /  / __ \\ \n' +
            '  / / / // / / // //_// /  / ___// _ \\ / ___/| | / // _ \\ / ___/   / /  / / / / \n' +
            ' / /_/ // /_/ // ,<  / /  (__  )/  __// /    | |/ //  __// /      / /_ / /_/ /  \n' +
            ' \\__, / \\__,_//_/|_|/_/  /____/ \\___//_/     |___/ \\___//_/      /_/(_)\\____/   \n' +
            '/____/                                                                          \n'
            // 想实现\效果，就要用双\\ , 因为\是转义字符
        ));
        console.log(chalk.green.bold('system online'), chalk.yellow.bold('port:3901'))
    }
)