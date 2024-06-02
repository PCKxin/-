// 包是基于NodeJS的内置模块封装出来的, 通过包可以实现模块化开发, 使得代码更加清晰, 便于维护

// npm 是NodeJS的包管理工具, 通过npm可以下载别人封装好的包, 也可以把自己封装好的包上传到npm上
// 网站 https://www.npmjs.com/ 是npm的官方网站
// npm install 包名 
// npm install 包名 -g 全局安装
// npm install 包名 -d 安装到devDependencies中，也就是保存到开发版本的依赖中
// npm install 包名 --save 安装并保存到package.json文件中
// npm install 包名 --save-dev 安装并保存到package.json文件中的devDependencies中
// npm install 包名 --save-prod 安装并保存到package.json文件中的dependencies（生产环境依赖）中
// npm install 包名@版本号 安装指定版本的包
// npm install 包名@latest 安装最新版本的包
// npm install 安装当前目录下的package.json文件中的所有包
// npm install --production 只安装dependencies中的包
// npm install --development 只安装devDependencies中的包
// npm install --global 只安装全局包
// npm install --save-exact 安装时保存精确版本号
// npm install --no-save 安装时不保存到package.json文件中
// npm uninstall 包名 卸载包
// npm uninstall 包名 -g 卸载全局包
// npm init 初始化一个package.json文件
// npm init -y 初始化一个package.json文件 -y和不加-y的区别是-y会跳过所有的问题，直接生成一个默认的package.json文件
// npm list 查看当前目录下安装的包
// npm list -g 查看全局安装的包
// npm root 查看当前目录下的node_modules路径
// npm root -g 查看全局的node_modules路径

// 包在下载过程中不自动创建package.json文件, 需要手动创建


// 在服务运行中, 每次修改服务器代码都需要重启服务器, 这样会导致服务停止, 无法实现热更新
// 使用第三方模块 nodemon 可以实现热更新，每次修改代码后会自动重启服务器


// package.json 文件

// scripts 字段
// 可以自定义命令, 例如: "start": "node app.js" 意思是运行npm start命令时, 会执行node app.js
// 使用 npm run 命令执行自定义命令, 例如: npm run start