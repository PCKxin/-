// ES模块文件后缀名为.mjs
import chalk from 'chalk'; // 引入chalk模块, 用于在控制台中输出带颜色的文字
// ERR_REQUIRE_ESM 错误通常表示你正在尝试使用require()来导入一个ES模块，但这是不允许的。在Node.js中，ES模块必须使用import语句来导入。
// chalk的2.4.0版本开始，chalk已经是一个ES模块，所以你需要使用import语句来导入chalk，而不是require()

import fs from 'fs';
// 引入express模块
import express from 'express';

import bodyParser from 'body-parser'; // 引入body-parser模块, 用于解析post请求的参数

// import { msglock } from './YukiMessageLock.js';

var ex_app = express();

// 使用body-parser模块
ex_app.use(bodyParser.json()); // 解析json格式的参数
// 如何引用body-parser模块: 用req.body 例如 req.body.username


// 注册函数封装
function userin(username, tel, pwd, callback) {
    console.log(username, tel, pwd);
    fs.readFile("./data/user.json", "utf-8", (err, data) => {
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
            fs.writeFile('./data/user.json', json, 'utf-8', (err) => {
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
    fs.readFile("./data/user.json", "utf-8", (err, data) => {
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

// test
// userlogin("hoshino", "qwe123");
// console.log(loginCheck);
// console.log(userlogin("hoshino", "qwe123"));


// 设置请求头
ex_app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'text/html; charset=utf-8');// 设置响应头
    if (req.method === 'OPTIONS') { // 如果是options请求, 直接返回200
        res.sendStatus(200); // 返回200状态码
    } else {
        next();// 调用next方法, 继续执行下一个中间件
    }
})

// 验证码函数封装
function captcha() {
    var captcha = Math.random().toString(36).slice(-4);
    console.log(captcha);
    return captcha;
}

// 控制台显示图片 路径 ./data/c1.png
// 转换为base64格式
ex_app.get('/img', (req, res) => {
    fs.readFile('./data/1.jpg', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data.toString('base64'));
        }
    });
});

// 验证码路由
ex_app.get('/captcha', (req, res) => {
    res.send(captcha());
});



// 注册路由
// ex_app.post('/register', (req, res) => {
//     // 获取请求体中的数据
//     var dataArr = req.body;
//     console.log(dataArr);

//     // 调用 userin 函数进行注册，并传入回调函数
//     userin(dataArr.user, dataArr.tel, dataArr.pwd, (success, msg) => {
//         if (success) {
//             // 注册成功，向客户端返回成功消息和用户ID
//             res.send({
//                 success: true,
//                 msg: "注册成功",
//                 userId: msg
//             });
//         } else {
//             // 注册失败，向客户端返回失败消息
//             res.send({
//                 success: false,
//                 message: "注册失败, 原因: " + msg
//             });
//         }
//     });
// });


// 登录路由
// ex_app.post('/login', (req, res) => {
//     var dataArr = req.body;
//     console.log(dataArr);
//     // 调用 userlogin 函数，并传入一个回调函数
//     userlogin(dataArr.user, dataArr.pwd, (success, userId) => {
//         console.log(success); // 登录成功或失败
//         console.log(userId); // 用户ID，如果登录成功则存在
//         if (success) {
//             res.send("登录成功, 用户ID为: " + userId);
//         } else {
//             res.send("登录失败");
//         }
//     });
// });
import { msgunlock } from './YukiMessageLock.js';
import { logo } from './YukiMessageLock.js';
ex_app.post('/user', (req, res) => {
    const urlArr = req.url.split("?");
    console.log(urlArr);
    // const dataArr = req.body;
    console.log(chalk.green.bold(logo));
    const dataArr = req.body;
    // console.log(dataArr);
    // 解锁消息
    const ULuser = msgunlock(dataArr.user);
    const ULpwd = msgunlock(dataArr.pwd);
    // const ULtel = msgunlock(dataArr.tel);
    // console.log(ULuser);

    // if (urlArr[1] === 'register') {
    //     // 调用 userin 函数进行注册，并传入回调函数
    //     userin(dataArr.user, dataArr.tel, dataArr.pwd, (success, msg) => {
    //         if (success) {
    //             // 注册成功，向客户端返回成功消息和用户ID
    //             res.send({
    //                 success: true,
    //                 msg: "注册成功",
    //                 userId: msg
    //             });
    //         } else {
    //             // 注册失败，向客户端返回失败消息
    //             res.send({
    //                 success: false,
    //                 message: "注册失败, 原因: " + msg
    //             });
    //         }
    //     });
    // } else if (urlArr[1] === 'login') {
    //     console.log("你访问了登录接口");
    //     // 调用 userlogin 函数，并传入一个回调函数
    //     userlogin(dataArr.user, dataArr.pwd, (success, userId) => {
    //         console.log(success); // 登录成功或失败
    //         console.log(userId); // 用户ID，如果登录成功则存在
    //         if (success) {
    //             res.send("登录成功, 用户ID为: " + userId);
    //         } else {
    //             res.send("登录失败");
    //         }
    //     });
    // } else {
    //     res.send("无效的请求");
    // }
    switch (urlArr[1]) {
        case 'register':
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
            console.log("你访问了登录接口");
            // 调用 userlogin 函数，并传入一个回调函数
            userlogin(ULuser, ULpwd, (success, msg) => {
                console.log(success); // 登录成功或失败
                // console.log(msg); // 用户ID，如果登录成功则存在
                if (success) {
                    // res.send("登录成功, 用户ID为: " + msg + '\n' + "信息传输经过"+ '\n' + logo + '\n' + "加密");
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

// listen() 方法用来监听端口号
ex_app.listen(
    3901, 
    () => {
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