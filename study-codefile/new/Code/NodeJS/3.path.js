// path
// nodejs 内置的专门用来处理路径的模块

var path = require('path');

// path.join([...paths]) 用于连接路径 会自动根据系统添加相应的路径分隔符
// console.log(path.join('a', 'b', 'c')); // a\b\c

console.log(path.join('a', './user.json')); // linux&mac : a/user.json windows : a\user.json

// __dirname 当前文件所在的目录 绝对路径
console.log(__dirname);
console.log(path.join(__dirname, './data/user.json'));

// __filename 当前文件的绝对路径
console.log(__filename);

// path.resolve([...paths]) 用于将路径或路径片段的序列解析为绝对路径
// 从右到左进行处理，遇到第一个绝对路径时停止处理，之前的路径将被忽略

console.log(path.resolve('a', 'b', 'c')); // linux&mac : /Users/hoshino/Desktop/NodeJS/a/b/c windows : C:\Users\hoshino\Desktop\NodeJS\a\b\c

console.log(path.resolve('data', './user.json')); // linux&mac : /Users/hoshino/Desktop/NodeJS/a/user.json windows : C:\Users\hoshino\Desktop\NodeJS\a\user.json


// path.dirname(path) 返回路径中的目录名
console.log(path.dirname('a/b/c.txt')); // a/b

// path.basename(path, ext) 返回路径中的最后一部分
console.log(path.basename('a/b/c.txt')); // c.txt
console.log(path.basename('a/b/c.txt', '.txt')); // c