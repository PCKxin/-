// 不定义数据, 外面的文件引用模块只返回一个空对象

// 在每一个模块内 都有一个module.exports对象, 用来导出模块

console.log('module_demo1.js', module.exports);
// console.log(module);
/*
module信息解释
Module {
  id: '.', // 模块的标识符, 通常是文件的绝对路径
  path: 'D:\\Web\\WebStorm\\WebStormWorkspace\\NodeJS\\module', // 模块的绝对路径
  exports: {}, // 模块的导出对象
  parent: null, // 父模块
  filename: 'D:\\Web\\WebStorm\\WebStormWorkspace\\NodeJS\\module\\module_demo1.js', // 模块的文件名
  loaded: false, // 模块是否加载完毕
  children: [], // 子模块
  paths: [
    'D:\\Web\\WebStorm\\WebStormWorkspace\\NodeJS\\module\\node_modules',
    'D:\\Web\\WebStorm\\WebStormWorkspace\\NodeJS\\node_modules',
    'D:\\Web\\WebStorm\\WebStormWorkspace\\node_modules',
    'D:\\Web\\WebStorm\\node_modules',
    'D:\\Web\\node_modules',
    'D:\\node_modules'
  ] // 模块的搜索路径
}
*/
testFn = () => {
    console.log('testFn');
}

module.exports = {
    name: 'shiroko',
    age: 17,
    testFn
} 

// module.exports.name = 'shiroko';