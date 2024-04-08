import $ from 'jquery'; // 引入jquery
$('li:even').css('background', 'pink') // 偶数行背景色变成粉色
$('li:odd').css('background', 'lightblue') // 奇数行背景色变成浅蓝色

import './index.css' // 引入css文件
import './index.less' // 引入less文件  // less样式会生成css文件，样式也会进入js文件
import './index.sass' // 引入sass文件  // sass样式会直接进入js文件，不开插件不会生成css文件


const fn = () => {
    console.log(123)
}
fn()