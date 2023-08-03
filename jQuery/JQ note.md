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

### 版本区别

 - 1.X
     - 解决了ie旧版本的兼容性问题
     - 1.9.1：兼容IE6/7/8
     - 1.11.3：兼容IE6/7/8
     - 1.12.4：兼容IE6/7/8
     - 1.4.4：兼容IE6/7/8/9/10/11
     - 1.5.2：兼容IE6/7/8/9/10/11
     - 1.6.4：兼容IE6/7/8/9/10/11

 - 2.X
     - 不再兼容IE6/7/8
     - 相对于1.X，体积更小，性能更好，扩充了一些新的方法
     - 2.2.4：兼容IE9/10/11
     - 2.1.4：兼容IE9/10/11
     - 2.0.3：兼容IE9/10/11

 - 3.X
     - 不再兼容IE6/7/8/9/10/11
     - 相对于2.X，增加了移动端的支持

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

## jQuery选择器的语法：$(selector)

 - $：jQuery的标识符
 - ()：调用jQuery的方法
 - selector：选择器，用于获取页面中的元素

### $的含义

 - 当script标签引入jQuery.js文件时，会将 `$` 对象添加到 `window` 对象下
 - 这样就可以在任何位置使用 `$` 符号（添加到window对象下的变量是一个全局变量）
 - $：jQuery的标识符，用于获取页面中的元素，然后通过jQuery对象来操作元素
 - `$`是一个函数，`$()`是一个方法，`$()`的参数是选择器，`$()`的返回值是jQuery对象


## jQuery选择器

### jQuery选择器的介绍

 - jQuery选择器：通过jQuery选择器可以获取到页面中的元素，然后通过jQuery对象来操作元素

 - jQuery选择器的分类
     - `基本`选择器：通过id、class、标签名、属性、过滤器等选择器来获取元素
     - `层次`选择器：通过元素之间的层次关系来获取元素
     - `过滤`选择器：通过元素的特征来获取元素
     - `表单`选择器：通过表单元素的特征来获取元素
  
### jQuery选择器的使用

 - 基本选择器
     - 通过id选择器来获取元素：`$("#id")`
     - 通过class选择器来获取元素：`$(".class")`
     - 通过标签名选择器来获取元素：`$("标签名")`

 - 层次选择器
     - 后代选择器：`$("父元素 子元素")`
     - 子代选择器：`$("父元素>子元素")`
     - 兄弟选择器：`$("元素1+元素2")`, 相邻的下一个
     - 兄弟选择器：`$("元素1~元素2")`, 之后的所有

 - 过滤选择器
     - `$("元素1:first")`，第一个
     - `$("元素1:first-child")`，第一个子元素是元素1的元素
     - `$("元素1:last")`，最后一个
     - `$("元素1:last-child")`，最后一个子元素是元素1的元素
     - `$("元素1:only-child")`，唯一的子元素是元素1的元素
     - 
     - `$("元素1:even")`，索引值偶数
     - `$("元素1:odd")`，索引值奇数
     - `$("元素1:eq(下标)")`，等于下标，用来获取指定下标的元素，下标从0开始
     - `$("元素1:gt(下标)")`，大于下标，不包含下标
     - `$("元素1:lt(下标)")`，小于下标，不包含下标
     - `$("元素1:contains(文本内容)")`，包含文本内容
     - `$("元素1:has(元素2)")`，包含元素2
     - `$("元素1:not(元素2)")`，不等于元素2
     - `$("元素1:parent")`，有子元素
     - `$("元素1:empty")`，没有子元素
     - `$("元素1:animated")`，正在执行动画的元素
     - `$("元素1:focus")`，获取焦点的元素

 - 通过属性选择器来获取元素
     - `$("[属性名]")`
     - `$("[属性名=属性值]")`，等于
     - `$("[属性名!=属性值]")` ，不等于
     - `$("[属性名^=属性值]")` ，以属性值开头
     - `$("[属性名$=属性值]")` ，以属性值结尾

 - 表单选择器
     - `$(":input")`，获取所有的表单元素
     - `$(":text")`，获取所有的文本框
     - `$(":password")`，获取所有的密码框
     - `$(":radio")`，获取所有的单选框
     - `$(":checkbox")`，获取所有的复选框
     - `$(":submit")`，获取所有的提交按钮
     - `$(":reset")`，获取所有的重置按钮
     - `$(":button")`，获取所有的按钮
     - 等等~~~
     - `$(":enabled")`，获取所有的可用的表单元素
     - `$(":disabled")`，获取所有的不可用的表单元素
     - `$(":checked")`，获取所有的选中的表单元素
     - `$(":selected")`，获取所有的选中的下拉框元素


## jQuery入口函数

### jQuery入口函数的介绍

 - jQuery入口函数：`$(document).ready(function(){})` 或者 `$(function(){})`
     - document：文档对象
 - window.onload和ready的区别
     - window.onload：等待页面中所有的资源加载完毕后，再执行函数中的代码
     - ready：等待DOM结构加载完毕后，再执行函数中的代码
     - 可以定义多个window.onload方法但是只会执行最后一个, jq中ready方法可以定义多个, 按顺序都执行

### jQuery入口函数：$(function(){})

 - jQuery入口函数的作用：等待DOM结构加载完毕后，再执行函数中的代码
 - jQuery入口函数的简写：`$(function(){})`，等价于`$(document).ready(function(){})`
 - jQuery入口函数的简写：`$(function(){})`，等价于`$().ready(function(){})`

### jQuery方法

 - 大多数方法，里面带参数的，相当于设置值，不带参数的，相当于获取值

 - $(selector).html()：获取或者设置元素的内容
     - 注意：覆盖原来的内容
     - 可以传入带标签的内容结构
     - 例子：
         - ```js
            // 设置内容
            $("div").html("<span>hello world</span>");

            // 获取内容
            $("div").html();
            ```

 - $(selector).text()：获取或者设置元素的文本内容
     - 注意：覆盖原来的内容
     - 只能传入纯文本内容，不能解析带标签的内容结构
     - 例子：
         - ```js
            // 设置文本内容
            $("div").text("hello world");
            $("div").text("<span>hello world</span>");

            // 获取文本内容
            $("div").text();
            ```

 - $(selector).css()：获取或者设置元素的样式
     - 注意：覆盖原来的样式
     - 可以传入多个样式，多个样式之间用逗号隔开
     - 可以传入对象，对象中是多个样式
     - 例子：
         - ```js
            // 设置样式
            $("div").css("color", "red");
            $("div").css("color", "red").css("font-size", "20px");
            $("div").css({
                "color": "red",
                "font-size": "20px"
            });

            // 获取样式
            $("div").css("color");
            ```

 - $(selector).val()：获取或者设置表单元素的值
     - 例子：
         - ```js
            // 设置值
            $("input").val("hello world");

            // 获取值
            $("input").val();
            ```

 - $(selector).change()：为表单元素绑定change事件
     - 例子：
         - ```js
            $("input").change(
                function(){
                    console.log("change");
                }
            );
            ```

 - $(selector).addClass()：为元素添加类样式
     - 提示：可以传入多个类样式，多个类样式之间用空格隔开
     - 例子：
         - ```js
            $("div").addClass("red");
            ```

 - $(selector).removeClass()：为元素移除类样式
     - 提示：
         - 可以传入多个类样式，多个类样式之间用空格隔开
         - 如果不传入参数，会移除所有的类样式
     - 例子：
         - ```js
            $("div").removeClass("red");
            ```

 - $(selector).toggleClass()：为元素切换类样式
     - 提示：如果有参数，就添加类样式，如果没有参数，就移除类样式
     - 例子：
         - ```js
            $("div").toggleClass("red");
            ```

 - $(selector).attr()：获取或者设置元素的属性
     - 提示：
         - 本身含有的属性和自定义的属性都可以获取和设置
         - 可以传入多个属性，多个属性之间用逗号隔开
         - 可以传入对象，对象中是多个属性
         - 有参数，和参数值，就设置属性
         - 没有参数，或者参数值为null，就获取属性
     - 例子：
         - ```js
            // 设置属性
            $("img").attr("src", "images/1.jpg");

            // 获取属性
            $("img").attr("src");
            ```

 - $(selector).removeAttr()：移除元素的属性
     - 提示：
         - 可以传入多个属性，多个属性之间用逗号隔开
         - 有参数，就移除属性，没有参数，就移除所有的属性
         - 将class和对应的属性值都删除掉
     - 例子：
         - ```js
            $("img").removeAttr("src");
            ```

 - $(selector).prop()：获取或者设置元素的属性
     - 提示：
         - 只能获取和设置元素本身含有的属性，不能获取和设置自定义的属性
     - 例子：
         - ```js
            // 设置属性
            $("input").prop("checked", true);

            // 获取属性
            $("input").prop("checked");
            ```

 - $(selector).removeProp()：移除元素的属性
     - 提示：
         - 不能移除自定义的属性
         - 将属性值设置为undefined
     - 例子：
         - ```js
            $("input").removeProp("checked");
            ```

 - $(selector).width()：获取或者设置元素的宽度
     - 提示：
         - 可以传入数值，设置元素的宽度
         - 可以传入函数，函数的返回值是数值，设置元素的宽度
         - 没有参数，获取元素的宽度
     - 例子：
         - ```js
            // 设置宽度
            $("div").width(200);
            $("div").width(
                function(index, width){
                    return width + 100;
                }
            );

            // 获取宽度
            $("div").width();
            ```

 - $(selector).height()：获取或者设置元素的高度
     - 提示：
         - 可以传入数值，设置元素的高度
         - 可以传入函数，函数的返回值是数值，设置元素的高度
         - 没有参数，获取元素的高度
     - 例子：
         - ```js
            // 设置高度
            $("div").height(200);
            $("div").height(
                function(index, height){
                    return height + 100;
                }
            );

            // 获取高度
            $("div").height();
            ```

 - $(selector).innerWidth()：获取元素的内部宽度
     - 提示：
         - 包含内边距，不包含边框和外边距
         - width + 左右padding
     - 例子：
         - ```js
            $("div").innerWidth();
            ```

 - $(selector).innerHeight()：获取元素的内部高度
     - 提示：
         - 包含内边距，不包含边框和外边距
         - height + 上下padding
     - 例子：
         - ```js
            $("div").innerHeight();
            ```

 - $(selector).outerWidth()：获取元素的外部宽度
     - 提示：
         - 包含内边距和边框，不包含外边距
         - width + 左右padding + 左右border
     - 例子：
         - ```js
            $("div").outerWidth();
            ```

 - $(selector).outerHeight()：获取元素的外部高度
     - 提示：
         - 包含内边距和边框，不包含外边距
         - height + 上下padding + 上下border
     - 例子：
         - ```js
            $("div").outerHeight();
            ```

 - $(selector).offset()：获取元素的偏移量，偏移量：元素距离文档边的距离
     - 提示：
         - 返回值是一个对象，对象中有两个属性：left和top
         - left：元素距离文档的左边的距离
         - top：元素距离文档的上边的距离
         - 和relative有关系都是相对于文档的定位
     - 例子：
         - ```js
            $("div").offset();
            ```

 - $(selector).position()：获取元素的定位，定位：元素距离最近的父元素的距离
     - 提示：
         - 返回值是一个对象，对象中有两个属性：left和top
         - left：元素距离最近的父元素的左边的距离
         - top：元素距离最近的父元素的上边的距离
         - 和absolute有关系都是相对于父元素的定位
     - 例子：
         - ```js
            $("div").position();
            ```

 - $(selector).offsetParent()：获取元素的定位的父元素
     - 提示：
         - 不带参数，获取元素的定位的父元素
         - 参数是选择器，获取元素的定位的父元素中符合选择器的元素
     - 例子：
         - ```js
            // 获取元素的定位的父元素
            $("div").offsetParent();

            // 获取元素的定位的父元素中符合选择器的元素
            $("div").offsetParent("body");
            ```

 - $(selector).eq()：获取元素的指定下标的元素
     - 提示：
         - 不是选择器，是获取元素的指定下标的元素
         - 可以传入负数，负数表示从后往前数
     - 例子：
         - ```js
            $("div").eq(0);
            ```

 - $(selector).index()：获取元素的下标
     - 提示：
         - 不是选择器，是获取元素的下标
         - 可以传入选择器，获取元素在选择器中的下标
     - 例子：
         - ```js
            $("div").index();
            $("div").index("div");
            ```

 - $(selector).slice()：获取元素的指定范围的元素
     - 提示：
         - 参数作用：从哪个下标开始，到哪个下标结束
         - 无参数，获取所有的元素
     - 例子：
         - ```js
            $("div").slice(0, 2);
            ```

 - $(selector).end()：返回上一次操作之前的元素
     - 提示：
         - 一般和其他的方法连用，返回上一次操作之前的元素
     - 例子：
         - ```js
            $("div").eq(0).end();
            ```

 - $.map()：遍历数组或者对象
     - 提示：
         - 第一个参数：数组或者对象
         - 第二个参数：回调函数，回调函数的返回值是一个数组，数组中是处理之后的数据
             - 参数1：数组或者对象中的每一个元素
             - 参数2：数组或者对象中的每一个元素的下标
             - 参数名无所谓
         - 映射 不会改变原来的数组或者对象，会返回一个新的数组或者对象
     - 例子：
         - ```js
            $.map(
                [1, 2, 3],
                // value：数组中的每一个元素
                // index：数组中的每一个元素的下标
                function(value, index){
                    return value + 1;
                }
            );
            ```

 - $(selector).append()：在元素的内部的最后面追加内容
     - 提示：
         - 可以传入带标签的内容结构
         - 可以传入多个参数，多个参数之间用逗号隔开
         - 可以传入函数，函数的返回值是带标签的内容结构
         - 和原生js中的appendChild方法一样
     - 例子：
         - ```js
            // 追加内容
            $("div").append("<span>hello world</span>");
            $("div").append("<span>hello world</span>", "<span>hello world</span>");
            $("div").append(
                function(index, html){
                    return "<span>hello world</span>";
                }
            );
            ```

 - $(selector).appendTo()：将元素追加到指定元素的内部的最后面
     - 提示：
         - 可以传入带标签的内容结构
         - 可以传入多个参数，多个参数之间用逗号隔开
         - 可以传入函数，函数的返回值是带标签的内容结构
         - 区别:
             - appendTo：子元素调用的
             - append：父元素调用的
             - 方便链式编程：
                 - 如果下面逻辑要操作父元素，就用append()
                 - 如果下面逻辑要操作子元素，就用appendTo()
     - 例子：
         - ```js
            // 追加内容
            $("<span>hello world</span>").appendTo("div");
            ```

 - $(selector).prepend()：在元素的内部的最前面追加内容
     - 提示：
         - 可以传入带标签的内容结构
         - 可以传入多个参数，多个参数之间用逗号隔开
         - 可以传入函数，函数的返回值是带标签的内容结构
         - 和原生js中的insertBefore方法一样
     - 例子：
         - ```js
            // 追加内容
            $("div").prepend("<span>hello world</span>");
            ```

 - $(selector).prependTo()：将元素追加到指定元素的内部的最前面
     - 提示：
         - 可以传入带标签的内容结构
         - 可以传入多个参数，多个参数之间用逗号隔开
         - 可以传入函数，函数的返回值是带标签的内容结构
         - 区别:
             - prependTo：子元素调用的
             - prepend：父元素调用的
             - 方便链式编程：
                 - 如果下面逻辑要操作父元素，就用prepend()
                 - 如果下面逻辑要操作子元素，就用prependTo()
     - 例子：
         - ```js
            // 追加内容
            $("<span>hello world</span>").prependTo("div");
            ```

 - $(selector).before()：在元素的前面追加内容
     - 提示：
         - 和原生js中的insertBefore方法一样, 在被选元素之前插入内容
     - 例子：
         - ```js
            // 追加内容
            $("div").before("<span>hello world</span>");
            ```

 - $(selector).after()：在元素的后面追加内容
     - 提示：
         - 和原生js中的insertAfter方法一样, 在被选元素之后插入内容
         - 传入多个参数，多个参数之间用逗号隔开
     - 例子：
         - ```js
            // 追加内容
            $("div").after("<span>hello world</span>");
            ```

 - $(selector).wrap()：在元素的外面包裹一层内容
     - 提示：
         - 可以传入带标签的内容结构
         - 可以传入函数，函数的返回值是带标签的内容结构
     - 例子：
         - ```js
            // 包裹内容
            $("div").wrap("<span></span>");
            ```

 - $(selector).unwrap()：移除元素的父元素
     - 提示：
         - 移除元素的父元素
         - 不能移除body和html
     - 例子：
         - ```js
            // 移除父元素
            $("div").unwrap();
            ```

 - $(selector).each()：遍历元素
     - 提示：
         - 遍历元素
         - 参数是回调函数，回调函数的返回值是false，就结束遍历
         - 参数1：元素的下标
         - 参数2：元素
         - 参数名无所谓
     - 例子：
         - ```js
            // 遍历元素
            $("div").each(
                function(index, element){
                    console.log(index, element);
                }
            );
            ```

 - $(selector).remove()：移除元素,包括父元素
     - 提示：
         - 移除元素
         - 会移除元素的事件
         - 子元素和父元素都会被移除
     - 例子：
         - ```js
            // 移除元素
            $("div").remove();
            ```

 - $(selector).empty()：清空元素的子元素,不包括父元素
     - 提示：
         - 清空元素的内容
         - 会移除元素的事件
         - 删除的是元素的内容，不会删除元素本身，也就是删除子元素，不会删除父元素
     - 例子：
         - ```js
            // 清空元素的内容
            $("div").empty();
            ```

 - $(selector).clone()：克隆元素
     - 提示：
         - 克隆元素
         - 参数是布尔值
             - true：克隆元素的事件
             - false：不克隆元素的事件
     - 例子：
         - ```js
            // 克隆元素
            $("div").clone();
            ```

 - $(selector).show()：显示元素
     - 提示：
         - 显示元素
         - 显示元素的时候，会将元素的display属性设置为默认值
     - 例子：
         - ```js
            // 显示元素
            $("div").show();
            ```

 - $(selector).parent()：获取元素的父元素
     - 提示：
         - 不带参数，获取元素的父元素
     - 例子：
         - ```js
            // 获取元素的父元素
            $("div").parent();
            ```

 - $(selector).parents()：获取元素的所有的祖先元素
     - 提示：
         - 不带参数，获取元素的所有的祖先元素
         - 参数是选择器，获取当前选择器的祖先元素
     - 例子：
         - ```js
            // 获取元素的所有的祖先元素
            $("div").parents();

            // 获取当前选择器的祖先元素
            $("div").parents("body");
            ```

 - $(selector).children()：获取元素的所有的一级子元素
     - 提示：
         - 不带参数，获取元素的所有的子元素
         - 参数是选择器，获取元素的所有的子元素中符合选择器的元素
         - 只有一级子元素，不会获取孙子元素
     - 例子：
         - ```js
            // 获取元素的所有的子元素
            $("div").children();

            // 获取元素的所有的子元素中符合选择器的元素
            $("div").children("span");
            ```

 - $(selector).find()：获取元素的所有的后代元素
     - 提示：
         - 不带参数，获取元素的所有的后代元素
         - 参数是选择器，获取当前选择器的所有后代元素
         - 获取的是当前元素的所有的后代元素，不包括当前元素和同级元素
     - 例子：
         - ```js
            // 获取元素的所有的后代元素
            $("div").find();

            // 获取当前选择器的所有后代元素
            $("div").find("span");
            ```

 - $(selector).siblings()：获取元素的所有的兄弟元素
     - 提示：
         - 获取的是当前元素的所有的兄弟元素，不包括当前元素
     - 例子：
         - ```js
            // 获取div的所有的兄弟元素
            $("div").siblings();
            ```

 - $(selector).prev()：获取元素的上一个兄弟元素，同级
     - 提示：
         - 不带参数，获取元素的上一个兄弟元素

     - 例子：
         - ```js
            // 获取元素的上一个兄弟元素
            $("div").prev();
            ```

 - $(selector).prevAll()：获取元素的前面所有的兄弟元素，同级
     - 提示：
         - 不带参数，获取元素的前面所有的兄弟元素
     - 例子：
         - ```js
            // 获取元素的前面所有的兄弟元素
            $("div").prevAll();
            ```

 - $(selector).prevUntil()：获取当前选择器和目标选择器之间的所有的兄弟元素
     - 提示：
         - 参数：选择器，获取元素的前面所有的兄弟元素中符合选择器的元素之前的所有元素
     - 例子：
         - ```js
            // 获取div和span之间的所有元素
            $("div").prevUntil("span");
            ```


 - $(selector).next()：获取元素的下一个兄弟元素，同级
     - 提示：
         - 不带参数，获取元素的下一个兄弟元素
     - 例子：
         - ```js
            // 获取元素的下一个兄弟元素
            $("div").next();
            ```

 - $(selector).nextAll()：获取元素的后面所有的兄弟元素，同级
     - 提示：
         - 不带参数，获取元素的后面所有的兄弟元素
     - 例子：
         - ```js
            // 获取元素的后面所有的兄弟元素
            $("div").nextAll();
            ```

 - $(selector).nextUntil()：获取当前选择器和目标选择器之间的所有的兄弟元素
     - 提示：
         - 参数：选择器，获取元素的后面所有的兄弟元素中符合选择器的元素之前的所有元素
     - 例子：
         - ```js
            // 获取div和span之间的所有元素
            $("div").nextUntil("span");
            ```

 - $(selector).click()：为元素绑定click事件
     - 提示：
         - 参数是回调函数，回调函数的返回值是false，就阻止默认行为
     - 例子：
         - ```js
            // 为div绑定click事件
            $("div").click(
                function(){
                    console.log("click");
                }
            );
            ```



 - $(selector).on()：为元素绑定事件
     - 提示：
         - 参数1：事件类型
         - 参数2：选择器，选择器中的元素是动态添加的，可以绑定事件
         - 参数3：回调函数
     - 例子：
         - ```js
            // 为div绑定click事件
            $("div").on(
                "click", 
                "span", 
                function(){
                    console.log("click");
                }
            );
            ```
     - 绑定多个事件
         - ```js
            // 为div绑定click事件
            $("div").on(
                {
                    "click": function(){
                        console.log("click");
                    },
                    "mouseover": function(){
                        console.log("mouseover");
                    }
                }
            );
            ```
     - 解绑事件
         - ```js
            // 解绑click事件
            $("div").off("click");
            ```

     - 动态数据
         - ```js
            var obj = {
                "name": "shiroko",
                "age": 18
            };
            $('div').on(
                'click',
                obj,
                function(event){
                    // 通过on绑定事件，可以获取到动态数据
                    // 例如上面的obj，可以通过触发事件中的回调函数的event参数获取到
                    console.log(event.data);
                }
            )
            ```
     - 事件委托：子元素触发事件，父元素执行事件
         - ```js
            $(父元素).on(
                事件名,
                子元素选择器,
                动态数据,
                事件的回调函数
            )

            /*
            这种方式去给子元素添加事件 好处：
                1. 性能提升
                    因为利用事件委托，其实绑定事件就父元素
                    通过e.target获取到触发事件的子元素
                    减少了给子元素添加事件的性能消耗
                
                2. 动态数据
                    通过事件委托，可以给子元素传递动态数据
                
                3. 动态添加的子元素也可以绑定事件
            */
            ```

 - $(selector).bind()：为元素绑定事件
     - 提示：
         - 参数1：事件类型
         - 参数2：回调函数
     - 例子：
         - ```js
            // 为div绑定click事件
            $("div").bind(
                "click", 
                function(){
                    console.log("click");
                }
            );
            ```
     - 绑定多个事件
         - ```js
            // 为div绑定click事件
            $("div").bind(
                {
                    "click": function(){
                        console.log("click");
                    },
                    "mouseover": function(){
                        console.log("mouseover");
                    }
                }
            );
            ```
     - 解绑事件
         - ```js
            // 解绑click事件
            $("div").unbind("click");
            ```

 - off和unbind的区别
     - 没有不同，可以互相解绑


