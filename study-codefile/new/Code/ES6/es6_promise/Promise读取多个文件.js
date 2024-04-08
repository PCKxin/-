const fs = require('fs');
const path = require('path'); // 引入path模块, 用于处理文件路径
// 使用path.join(__dirname, '文件名')来获取文件的绝对路径
// 因为系统不同, 文件路径的分隔符也不同, 以防出现报错 , 所以使用path.join()来处理文件路径
// const Promise = require('bluebird'); // 引入bluebird库, 用于Promise化fs模块


//ERR_REQUIRE_ESM 错误通常表示你正在尝试使用require()来导入一个ES模块，但这是不允许的。在Node.js中，ES模块必须使用import语句来导入。

// SyntaxError: Cannot use import statement outside a module错误
// 是因为你正在尝试在一个非模块上下文中使用 import 语句。在 Node.js 中，你只能在 ES 模块中使用 import 语句。
// import chalk from 'chalk'; // 引入chalk模块, 用于在控制台中输出带颜色的文字
// chalk的2.4.0版本开始，chalk已经是一个ES模块，所以你需要使用import语句来导入chalk，而不是require()


// 读取文件的函数
function readFile(filename) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                filename, // 传入文件路径
                'utf8', 
                (err, data) => {
                    if (err) reject(err); // 如果出错, 则将Promise的状态置为rejected
                    resolve(data); // 否则将Promise的状态置为resolved
                }
            );
        }
    );
}

// 读取图片文件转为base64编码
function readImage(filename) {
    return new Promise(
        (resolve, reject) =>
            fs.readFile(
                filename,
                (err, data) => {
                    if (err) reject(err);
                    resolve(data.toString('base64'));
                }
            )
    );
}

// 将base64编码写入文本文件
function writeFile(filename, data) {
    return new Promise(
        (resolve, reject) =>
            fs.writeFile(
                filename,
                data,
                'utf8',
                (err) => {
                    if (err) reject(err);
                    resolve('写入成功');
                }
            )
    );
}

// 读取文件大小
// 读取文件的大小, 通过fs.stat()方法获取文件的状态, 然后通过stats.size获取文件的大小
// fs.stat()方法的回调函数中的stats参数是一个对象, 包含了文件的状态信息, 如文件大小, 创建时间, 修改时间等
// 获取大小返回的是字节数
const fileSize = (filepath) => {
    return new Promise( // 返回一个Promise对象, 用于异步操作
        (resolve, reject) => {
            fs.stat(
                filepath,
                (err, stats) => {
                    filename = path.basename(filepath)
                    console.log('正在读取<'+filename+'>文件大小');
                    if (err) reject(err);
                    resolve(filename+" SIZE: "+ stats.size + ' bytes');
                }
            );
        }
    );
};

// 读取多个文件
// 但只要有一个文件读取失败, 则整个Promise.all()的状态就会变为rejected
Promise.all([
    readFile(path.join(__dirname, './data/user.txt')), // __dirname表示当前文件所在的目录
    readImage(path.join(__dirname, './data/demo.png'))
]).then(
    (results) => {
        // console.log(results);
        console.log(chalk.green('user.txt:'), results[0]);
        // console.log('demo.png:', results[1]);
        console.log(
            writeFile(path.join(__dirname, './data/demo.txt'), results[1])
                .then(res => chalk.blue(res))
            );
        // 文件大小
        console.log(
            fileSize(path.join(__dirname, './data/user.txt'))
                .then(res => console.log(chalk.red(res)))
            );
        console.log(
            fileSize(path.join(__dirname, './data/demo.png'))
                .then(res => console.log(chalk.red(res)))
            );
        console.log('读取成功');

    }
).catch(
    (err) => {
        console.error(err);
    }
);

