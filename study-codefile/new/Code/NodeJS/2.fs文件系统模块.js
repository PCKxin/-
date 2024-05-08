const fs = require("fs");
const { type } = require("os");
// fs.readFile(path(路径), options(配置), callback(回调函数))
// path 必选参数 读取文件的路径
// options 可选参数 用来配置读取文件的编码格式
// callback 必选参数 读取文件完成后执行的回调函数


// fs.readFile("./data/user.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         data += "\nname: hoshino";
//         fs.writeFile('./data/user.txt', data, 'utf-8', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('写入成功');
//                 console.log(data)
//             }
//         })
//     }
// })

// 读取user.json文件

// 用户终端输入
const readline = require("readline"); // 引入readline模块 用于用户终端输入
const rl = readline.createInterface({ // 创建readline接口
    input: process.stdin, // process.stdin 为用户终端输入
    output: process.stdout // process.stdout 为用户终端输出
});

// 获取用户信息
// 递问
// rl.question("请输入用户名：", (username) => {
//     rl.question("请输入手机号：", (tel) => {
//         rl.question("请输入密码：", (pwd) => {
//             userin(username, tel, pwd);
//             rl.close();
//         })
//     })
// })

// 提问函数封装 逐个判断是否为空 为空则重新输入
function question(title, callback) {
    rl.question(title, (answer) => {
        if (answer == '') {
            console.log('输入不能为空');
            question(title, callback);
        } else {
            callback(answer);
        }
    })
}

// userin('hoshino', '12345678901', '123456');

function userin(username, tel, pwd){
    console.log(username, tel, pwd);
    fs.readFile("./data/user.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(data);
            let userData = JSON.parse(data).data;
            let userinfo = {
                id: userData.length + 1,
                Uname: username,
                Upwd: pwd,
                Utel: tel
            }
            // console.log(userData[0].username);
            // console.log(typeof userinfo.name);
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
            usermsg = userinfo;
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
                    return console.log("Welcome <" + userinfo.Uname + ">" + "\n" + "Your ID is <" + userinfo.id + ">" + "\n" + "当前用户数:" + userData.length);
                    // return id = userinfo.id;
                }
            })
        }
    });
}

question("请输入用户名：", (username) => {
    question("请输入手机号：", (tel) => {
        question("请输入密码：", (pwd) => {
            userin(username, tel, pwd);
            rl.close();
        })
    })
})

exports.userin = userin;
