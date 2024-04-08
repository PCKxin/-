// 引入 fs 模块
const fs = require('fs');

// { log } 是解构赋值，相当于 const log = console.log;
const { log } = require( 'console'); // 引入 console 模块
log('hello world'); // 打印 hello world

// 调用方法读取文件
// fs.readFile('./data/user.txt', 'utf-8', (err, data) => {
//     // throw 作用是抛出错误，程序终止
//     if (err) throw err; // 如果出现错误，抛出错误,程序终止
//     console.log(data);
// });

// Promise读取文件内容并输出,随后自动清理的例子
const fsp = require('fs').promises;
// .promises 用于封装 fs 模块的异步方法，返回 Promise 对象

function readFileAndCleanup(path) {
    let fileHandle = null;
    return fsp.open(path, 'r')
        .then(handle => {
            fileHandle = handle;
            return handle.readFile({ encoding: 'utf-8' });
        })
        .then(content => {
            console.log(content);
        })
        .catch(error => {
            console.error('出错了：' + error);
        })
        .finally(() => {
            if (fileHandle) {
                console.log('清理操作');
                return fileHandle.close();
            }
        });
}

readFileAndCleanup('./data/user.txt');