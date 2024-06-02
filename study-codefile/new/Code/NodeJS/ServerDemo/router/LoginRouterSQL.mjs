import express from 'express';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import mysql from 'mysql';


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

// 创建连接池对象
const pool = mysql.createPool({
    connectionLimit: 10, // 连接池中可以存放的最大连接数量
    host: '192.168.213.128',
    user: 'root',
    password: '123456',
    database: 'chopenedu'
});

// 注册函数封装
function userin(username, tel, pwd, callback) {
    console.log(username, tel, pwd);
    // 从连接池中获取一个连接
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            if (callback) {
                callback(false); // 失败时调用回调函数，并传递 false
            }
        } else {
            // 查询用户表中是否存在相同用户名或手机号
            connection.query('SELECT * FROM studytest WHERE Uname = ? OR Utel = ?', [username, tel], (err, result) => {
                if (err) {
                    console.log(err);
                    if (callback) {
                        callback(false); // 失败时调用回调函数，并传递 false
                    }
                } else {
                    if (result.length > 0) {
                        console.log('用户名或手机号已存在');
                        var msg = "用户名或手机号已存在";
                        if (callback) {
                            callback(false, msg); // 失败时调用回调函数，并传递 false
                        }
                    } else {
                        // 插入用户数据
                        connection.query('INSERT INTO studytest (Uname, Utel, Upwd) VALUES (?, ?, ?)', [username, tel, pwd], (err, result) => {
                            if (err) {
                                console.log(err);
                                if (callback) {
                                    callback(false); // 失败时调用回调函数，并传递 false
                                }
                            } else {
                                console.log('注册成功');
                                console.log("Welcome <" + decodeURIComponent(chalk.magenta.bold(username)) + ">" + "\n" + "Your ID is <" + chalk.red.bold(result.insertId) + ">");
                                if (callback) {
                                    callback(true, result.insertId); // 成功时调用回调函数，并传递 true 和用户ID
                                }
                            }
                        });
                    }
                }
            });
            // 释放连接
            connection.release();
        }
    });
}



// 登录函数封装sql
function userlogin(username, pwd, callback) {
    console.log(username, pwd);
    // 从连接池中获取一个连接
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            if (callback) {
                callback(false, null); // 失败时调用回调函数，并传递错误和空值
            }
        } else {
            // 查询用户表中是否存在相同用户名和密码
            connection.query('SELECT * FROM studytest WHERE Uname = ? OR Utel = ? AND Upwd = ?', [username, username , pwd], (err, result) => {
                if (err) {
                    console.log(err);
                    if (callback) {
                        callback(false, null); // 失败时调用回调函数，并传递错误和空值
                    }
                } else {
                    if (result.length > 0) {
                        console.log('登录成功');
                        console.log("Welcome <" + decodeURIComponent(chalk.magenta.bold(username)) + ">" + "\n" + "Your ID is <" + chalk.red.bold(result[0].id) + ">");
                        if (callback) {
                            callback(true, result[0].id); // 成功时调用回调函数，并传递 true 和用户ID
                        }
                    } else {
                        console.log('用户名或密码错误');
                        var faq = "用户名或密码错误";
                        if (callback) {
                            callback(false, faq); // 失败时调用回调函数，并传递错误和空值
                        }
                    }
                }
            });
            // 释放连接
            connection.release();
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