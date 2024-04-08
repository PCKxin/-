const axios = require('axios'); // 引入 axios 模块
const { log } = require('console'); // 引入 console 模块
const fs = require('fs'); // 引入 fs 模块
const fsp = require('fs').promises; // 引入 fs 模块的 promises 对象

// async和await是ES7的新特性，用于简化Promise的使用

// async用于声明一个函数是异步的，返回值是被包装成自动解析的Promise对象

// await用于等待一个Promise对象的解析结果，可以暂停async函数的执行，等待Promise的解析结果，然后再恢复async函数的执行，并返回解析值

// 获取图片的base64编码
async function getImageBase64(url) {
    // 等待axios.get方法返回的Promise解析，也就是等待HTTP请求完成。当请求完成后，await表达式的值就是这个Promise解析的值
    // responseType: 'arraybuffer' 表示返回的数据是二进制数据
    const response = await axios.get(url, { responseType: 'arraybuffer' }); 
    // Buffer 是 Node.js 提供的类，用于处理二进制数据
    // Buffer.from() 方法用于将二进制数据转换为 Buffer 对象
    // binary 表示二进制数据
    const buffer = Buffer.from(response.data, 'binary');
    // buffer.toString() 方法用于将 Buffer 对象转换为字符串
    // base64 表示使用 base64 编码
    return buffer.toString('base64');
}

// 保存成图片
async function saveImageFromBase64(base64, path) {
    // Buffer.from() 方法用于将字符串转换为 Buffer 对象
    const buffer = Buffer.from(base64, 'base64');
    // 使用 fs.promises.writeFile 方法将 Buffer 对象写入文件
    await fsp.writeFile(path, buffer);
    log('图片保存成功');
}


getImageBase64('https://img-blog.csdnimg.cn/9d05018e889d4ee787a6a435a827a78b.png')
    // .then 方法用于处理Promise对象的解析值
    .then(data => saveImageFromBase64(data, './data/demo.png')) 
    // .catch 方法用于处理Promise对象的拒绝值
    .catch(error => console.error(error));



log('开始执行异步操作')
