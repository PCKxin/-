// 模块化是指解决一个复杂问题时，将问题自顶向下逐层把问题划分成若干模块的过程，然后分别实现每个模块
// 模块是可组合, 分解, 更换的单元
// 模块化的好处
// 1. 提高代码的可维护性
// 2. 提高代码的复用性
// 3. 实现按需加载
// 模块化规范 就是对模块化时所需遵守的规则
// 1. CommonJS 作用于服务器端
// 2. AMD 作用于浏览器端
// 3. CMD 作用于浏览器端
// 4. ES6 Module 作用于浏览器端
// 模块化规范的好处
// 1. 降低沟通成本
// 2. 降低维护成本
// 3. 提高复用性

// NodeJS模块的分类
// 内置模块 (内置模块是由 Node.js 官方提供的，例如 fs(文件系统)、http(网络)、os(操作系统) 等)
// 自定义模块 (自定义模块是由开发者自己编写的模块,每个.js都是一个模块)
// 第三方模块 (第三方模块是由第三方开发者编写的模块，例如 express(网络)、koa(网络) 等)



// 引入方法 多种方式

// 内置模块
// require 方法引入内置模块
const fs = require("fs");
const { log } = require("console"); // 引入 console 模块 的 log 方法
const fsp = require("fs").promises; // 引入 fs 模块 的 promises 方法
// { log } 是解构赋值，相当于 const log = console.log;
// 和const log = require("console").log; 一样 但是这种写法更简洁

// 自定义模块
// require 方法引入自定义模块
const module_demo1 = require("./module/module_demo1.js");
console.log(module_demo1); // {} 证明通过模块引入的是一个对象
console.log(module_demo1.name); // shiroko
console.log(module_demo1.age); // 17
module_demo1.testFn(); // testFn
const module_demo2 = require("./module/module_demo2.js");
// import { module_demo1 } from "./module/module_demo1.js"; // ES6 Module 引入自定义模块 意思是引入指定的模块
// import * as module_demo1 from "./module/module_demo1.js"; // ES6 Module 引入自定义模块 意思是引入所有的模块


// 模块作用域
// 和函数作用域类似,模块作用域是指模块内部的变量和方法在模块外部是不可见的
// 模块作用域好处
// 避免了全局变量的污染, 例如: 两个模块都有一个变量名为 name, 但是他们的值不一样, 如果是全局变量, 会出现冲突

