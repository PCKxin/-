const path = require('path');
module.exports = {
    //入口文件
    entry: path.join(__dirname, './index.js'), // dirname代表索引到文件所在目录
    //出口文件
    output: {
        //路径
        path: path.join(__dirname, './dist'),
        //文件名称
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']	// style-loader 将css文件插入到html中 css-loader 解析css文件
            },
            {
                test: /\.less$/, // 正则表达式，匹配所有以.less结尾的文件
                use: ['style-loader', 'css-loader', 'less-loader'] // 从右到左解析
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader'] 
            },
            {
                test:/\.js/, // 正则表达式，匹配所有以.js结尾的文件
                use:['babel-loader'], // babel-loader 将es6转换为es5
                exclude:/node_modules/ // 排除node_modules文件夹
            },

        ]
    },
    mode: 'development', // 或者 'production'
}