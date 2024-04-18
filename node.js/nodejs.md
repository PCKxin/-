
## 一些名词解释

- 耦合度: 模块之间的依赖关系
- 内聚度: 模块内部的功能联系
- 依赖关系: 模块之间的引用关系

## 模块化

**模块化是指解决一个复杂问题时，将问题自顶向下逐层把问题划分成若干模块的过程，然后分别实现每个模块**

- 模块是可组合, 分解, 更换的单元

### 模块化好处

- 代码复用
- 避免命名冲突
- 提高代码可维护性
- 实现按需加载

### 模块化规范

- CommonJS (Node.js) 作用于服务器端
- AMD (RequireJS) 作用于浏览器端
- CMD (SeaJS)   作用于浏览器端
- ES6 Module (ES6)  作用于浏览器端

### 模块化规范的好处

- 代码解耦 (减少模块之间的耦合度)
- 降低维护成本
- 降低沟通成本
- 提高代码复用性

### NodeJS模块分类

- `引入方法`
    - `require('模块名')`
    - const `{方法名}` = `require('模块名')`
        - { log } 是解构赋值，相当于 const log = console.log;
    - const `log` = `require('console')` `.log`
    - import * as `consoleobj` from `console`
        - `as`意思是将console模块中的所有方法都赋值给consoleobj对象

- `内置模块`
    - 内置模块是由 Node.js 官方提供的，例如 fs(文件系统)、http(网络)、os(操作系统) 等

- `自定义模块`
    - 自定义模块是由用户自己创建的模块，每个JS文件都是一个模块

- `第三方模块`
    - 第三方模块是由第三方提供的模块，例如 express(网络框架)、mongoose(数据库) 等

## 模块暴露方法

- `module.exports` 暴露模块 (CommonJS)
    - `module.exports` = `value`
    - `module.exports` = `{key: value}`
    - `module.exports` = `function() {}`
    - `module.exports` = `class {}`


- `exports` 暴露模块 (CommonJS)
    - `exports.key = value`
    - `exports.key = function() {}`
    - `exports.key = class {}`

- `exports default` 暴露模块 (ES6)
    - `export default value`
    - `export default {key: value}`
    - `export default function() {}`
    - `export default class {}`
- 

### 用法例
    
```js
// 暴露模块
module.exports = {
    name: 'Shiroko',
    age: 18
}

module.exports = function() {
    console.log('Hello World');
}

```



