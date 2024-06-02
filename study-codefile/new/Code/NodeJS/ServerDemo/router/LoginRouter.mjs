import express from 'express';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';


// 创建路由对象
const router = express.Router();


// 验证码路由
function captcha() {
    var captcha = Math.random().toString(36).slice(-4);
    console.log(captcha);
    return captcha;
}
router.get('/captcha', (req, res) => {
    res.send(captcha());
});

// 登录路由
const userJson = path.resolve('etc', 'user.json');

// 注册函数封装
function userin(username, tel, pwd, callback) {
    console.log(username, tel, pwd);
    fs.readFile(userJson, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            if (callback) {
                callback(false); // 失败时调用回调函数，并传递 false
            }
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
                    var msg = "用户名已存在";
                    if (callback) {
                        callback(false, msg); // 失败时调用回调函数，并传递 false
                    }
                    return; // 终止函数
                } else if (userData[i].Utel == userinfo.Utel) {
                    console.log('手机号已存在');
                    var msg = "手机号已存在";
                    if (callback) {
                        callback(false, msg); // 失败时调用回调函数，并传递 false
                    }
                    return; // 终止函数
                } else {
                    // 对比次数记录
                    count++;
                }
            }
            console.log("注册成功");
            console.log("对比次数==>" + count);

            userData.push(userinfo);
            let json = JSON.stringify({ data: userData });
            console.log(json);
            fs.writeFile(userJson, json, 'utf-8', (err) => {
                if (err) {
                    console.log(err);
                    if (callback) {
                        callback(false); // 失败时调用回调函数，并传递 false
                    }
                } else {
                    console.log('写入成功');
                    console.log("Welcome <" + decodeURIComponent(chalk.magenta.bold(userinfo.Uname)) + ">" + "\n" + "Your ID is <" + chalk.red.bold(userinfo.id) + ">" + "\n" + "当前用户数:" + chalk.green.bold(userData.length));
                    if (callback) {
                        callback(true, userinfo.id); // 成功时调用回调函数，并传递 true 和用户ID
                    }
                }
            })
        }
    });
}


// 登录函数封装
function userlogin(username, pwd, callback) {
    console.log(username, pwd);
    fs.readFile(userJson, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            if (callback) {
                callback(false, null); // 失败时调用回调函数，并传递错误和空值
            }
        } else {
            let userData = JSON.parse(data).data;
            const user = userData.find(item => (item.Uname === username || item.Utel === username) && item.Upwd === pwd);
            if (user) {
                console.log('登录成功');
                console.log("Welcome <" + decodeURIComponent(chalk.magenta.bold(user.Uname)) + ">" + "\n" + "Your ID is <" + chalk.red.bold(user.id) + ">");
                if (callback) {
                    callback(true, user.id); // 成功时调用回调函数，并传递 true 和用户ID
                }
            } else {
                // console.log('用户名或密码错误');
                var faq = "用户名或密码错误";
                if (callback) {
                    callback(false, faq); // 失败时调用回调函数，并传递错误和空值
                }
            }
        }
    });
}

import { msgunlock, logo } from '../YukiMessageLock.js';
router.post('/user', (req, res) => {
    const urlArr = req.url.split("?");
    console.log(urlArr);
    // const dataArr = req.body;
    console.log(chalk.green.bold(logo));
    const dataArr = req.body;
    // console.log(dataArr);
    // 解锁消息
    const ULuser = msgunlock(dataArr.user);
    const ULpwd = msgunlock(dataArr.pwd);
    switch (urlArr[1]) {
        case 'register':
            console.log(chalk.magenta('RouterAccess => ') + chalk.green('/user/register'));
            // 调用 userin 函数进行注册，并传入回调函数
            userin(ULuser, msgunlock(dataArr.tel), ULpwd, (success, msg) => {
                if (success) {
                    // 注册成功，向客户端返回成功消息和用户ID
                    res.send({
                        success: true,
                        msg: "注册成功",
                        userId: msg
                    });
                } else {
                    // 注册失败，向客户端返回失败消息
                    res.send({
                        success: false,
                        message: "注册失败, 原因: " + msg
                    });
                }
            });
            break;
        case 'login':
            // console.log("你访问了登录接口");
            console.log(chalk.magenta('RouterAccess => ') + chalk.green('/user/login'));
            // 调用 userlogin 函数，并传入一个回调函数
            userlogin(ULuser, ULpwd, (success, msg) => {
                console.log(success); // 登录成功或失败
                // console.log(msg); // 用户ID，如果登录成功则存在
                if (success) {
                    res.send("登录成功, 用户ID为: " + msg + '\n' + logo + '\n' +"当前接口信息传输已经过加密");
                } else {
                    res.send("登录失败, 原因: " + msg);
                }
            });
            break;
        default:
            res.send("无效的请求");
            break;
    }
});


// 导出路由对象
export default router;