const { on } = require('events')
var express = require('express')
var fs = require('fs')
const { Script } = require('vm')
var ex_app = express()


// 用户接入，名字存入数组

// 用户判断

// 用户退出，名字从数组中删除

/*
用户发送消息，消息存入log.json文件
json格式：{id:xx, msg:xx}
同时，服务器向所有其他用户发送消息

*/



// 用户接收消息，从log.json文件中读取


// 用户紧急按钮退出，判断id，并在2分钟内不允许再次进入


// 管理紧急消息，终端输入的消息，直接发送给所有用户，并断开所有用户连接

//引入终端输入模块
var readline = require('readline').createInterface({input: process.stdin, output: process.stdout}) // process是nodejs中的全局对象，stdin是输入流，stdout是输出流
readline.on(  // 监听终端输入
    'line', // 监听终端输入的内容
    function (input) { // 回调函数，input是终端输入的内容
        console.log("管理员通知：" + input)
        // 将终端输入的内容发送给所有用户
    }
)










ex_app.listen(
    8848,
    function (){
        console.log(
            '                  __    _                                           ___   ____  \n' +
            '   __  __ __  __ / /__ (_)  _____ ___   _____ _   __ ___   _____   <  /  / __ \\ \n' + 
            '  / / / // / / // //_// /  / ___// _ \\ / ___/| | / // _ \\ / ___/   / /  / / / / \n' + 
            ' / /_/ // /_/ // ,<  / /  (__  )/  __// /    | |/ //  __// /      / /_ / /_/ /  \n' +  
            ' \\__, / \\__,_//_/|_|/_/  /____/ \\___//_/     |___/ \\___//_/      /_/(_)\\____/   \n' + 
            '/____/                                                                          \n'
            // 想实现\效果，就要用双\\ , 因为\是转义字符
        );
        console.log('system online' , 'port:8848')
    }
)