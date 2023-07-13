## jQuery概念

### jQuery是什么

 - jQuery是一个JavaScript库，它封装了很多常用的功能，它能够使我们更方便的操作DOM，处理事件，实现动画效果，处理AJAX等
 - jQuery是一个轻量级的JavaScript库，它的核心只有几十KB，压缩后只有几十KB，非常的小巧，非常的强大
 - 宗旨：write less, do more （写的更少，做的更多）
     - jQuery的目的是让我们更方便的操作DOM，处理事件，实现动画效果，处理AJAX等，让我们写的更少，做的更多

### jQuery的优势

 - 轻量级的JavaScript库，体积小，非常的强大
 - 跨浏览器的JavaScript库，能够兼容主流的浏览器
 - 链式编程，代码简洁，可读性强
 - 丰富的插件，能够快速的实现各种各样的功能

### jQuery的缺点

 - 不能兼容所有的浏览器，比如IE6
 - 不能实现所有的功能，比如canvas


## jQuery库

### jQuery库的介绍

 - 库的组成：jQuery.js、jQuery.min.js、jQuery.min.map
     - jQuery.js：开发版本，有注释，有格式，体积大 ，主要用于学习，测试，开发调试
     - jQuery.min.js：生产版本，没有注释，没有格式，体积小 ，主要用于生产环境，上线使用
     - jQuery.min.map：生产版本的映射文件，用于调试，方便开发人员调试

### jQuery库的下载

 - 官网：http://jquery.com/
 - 下载：http://jquery.com/download/
 - CDN：
     - https://cdnjs.com/libraries/jquery/
     - https://www.bootcdn.cn/jquery/


### jQuery库的引入

 - 本地引入
     - 本地引入：将jQuery库下载到本地，然后通过script标签引入
     - 本地引入的路径：相对路径、绝对路径
     - 例子：
         - ```html
            <script src="js/jquery-3.5.1.js"></script>
            ```
 - CDN引入
     - CDN引入：通过CDN引入，不需要下载到本地，直接通过script标签引入
     - CDN引入的路径：https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
 - 本地引入和CDN引入的区别
     - 本地引入：需要下载到本地，然后通过script标签引入，如果本地的jQuery库版本过低，需要手动更新
     - CDN引入：不需要下载到本地，直接通过script标签引入，如果CDN的jQuery库版本过低，需要手动更新
     - 本地引入和CDN引入的优先级：CDN引入的优先级高于本地引入
     - 本地引入和CDN引入的选择：如果本地的jQuery库版本过低，建议使用CDN引入，如果本地的jQuery库版本比较高，建议使用本地引入