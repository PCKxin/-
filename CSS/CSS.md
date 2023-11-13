# 说明

    CSS 指的是“Cascading style sheet” 层叠样式表
    控制网页外观的语言
    HTML 是网页结构 CSS 是网页外观 JavaScript是网页的功能行为

---------------------------------------------------------

# 样式表
## 引入方式

    1. 外部样式表
    2. 内部样式表
    3. 行内样式表
## 内部样式表

    指的是把HTML代码和CSS代码放到同一个HTML文件中
    语法：
    <style type="text/css">
    </style>

## 行内样式表

    内部样式表的CSS是在"style标签"内定义的，而行内样式表的CSS是在"标签的style属性"中来定义的


## 外部样式表

    外部样式表在单独文件中定义，然后在HTML文件的<head></head>标签中使用link标签引用
    语法：
    <link rel="stylesheet" type="text/css" href="文件路径">

    href：为外部资源地址，这里是css的地址

    rel：定义当前文档与被链接文档之间的关系,这里是外部css样式表即stylesheet

    type：规定被链接文档的 MIME 类,这里是值为text/css

    这种方法会以网页文件主体加载前加载CSS文件

**然后像在内部一样,排行首直接写就行**

## @import规则

    @import url("path") 用于其他样式表导入规则

    这种方法会在整个网页加载完后再加载CSS文件

## link 和 @import 区别

    link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；而@import属于CSS范畴，只能加载CSS；
    link引用CSS时，在页面载入时同时加载；而@import需要页面网页完全载入以后加载。
    link是XHTML标签，无兼容问题；而@import是在CSS2.1提出的，低版本的浏览器不支持。
    link支持使用Javascript控制DOM去改变样式；而@import不支持。
    @import可以在CSS文件中再次引入其他样式表；而link不支持。


---------------------------------------------------------

# 选择器

## 说明&语法
### 说明
    选择器是一种选择方式，选中你想要的元素的方式，称之为“选择器”
    在CSS中，有很多可以把你想要元素选中的方式，这些不同的方式其实就是不同的选择器
    可以用某一种选择器来代替另一种选择器，方式不同，但是目的相同
    最常用选择器5种:元素选择器，id选择器，class选择器，后代选择器，群组选择器
### 语法
```css
    选择器/元素名{
        属性1 : 取值1
        ---
        属性n : 取值n
    }
```
## 元素选择器

    元素选择器，就是“选中”相同的元素，然后对相同的元素定义同一个CSS样式

## id选择器

    用 #XXX{}
    我们可以为元素设置一个id属性，针对设置了这个id的元素定义CSS样式

## class（类）选择器

    用 .XXX{}

    class选择器，也就是“类选择器”。
    我们可以对“相同的元素”或者“不同的元素”定义相同的class属性，
    然后针对有同一个class的元素进行CSS样式操作。


## id和class区别

    id属性具有唯一性，同一个页面中相同的id只能出现一次
    class属性不具有唯一性，同一个页面随便用
    id 像身份证
    class 像名字

# 盒子计算方法

    盒子自身的尺寸：宽高+内边距+边框
    盒子在页面中占位的尺寸：宽高+内边距+边框+外边距

---------------------------------------------------------

# 样式(属性)&布局样式写法&权重

## css权重
    样式优先级(权重) 权重越高，优先级越高
    元素 < class < id < !important 

    !important可以提升样式优先级，但不建议使用 
    如果!important被用于一个简写的样式属性，
    那么这条简写的样式属性所代表的子属性都会被应用上!important。 
    例如：background: blue !important;
    如果两条样式都使用!important，则权重值高的优先级更高

    同一个CSS样式你写了两次，后面的会覆盖前面的
    样式指向同一元素，权重规则生效，权重大的被应用
    样式指向同一元素，权重规则生效，权重相同时，就近原则生效，后面定义的被应用
    样式不指向同一元素时，权重规则失效，就近原则生效，离目标元素最近的样式被应用

## 样式

`*{}`强调整个页面的属性

```css
*{margin: 2;padding: 0;}   /*强制整个网页外边距为2内边距为零*/
```

`list-style-type`控制列表项符号
```css
list-style-type: none  去掉列表项符号
```


`background-image`背景图片

```css
background-image: url();  
```

`background-repeat`背景图片重复方式
```css
background-repeat: no-repeat;     /*不重复*/
```


`background-position` 背景图片位置    

```css
background-position: 252px center; /*水平--252px 垂直居中*/
```

`background-position`调整背景位置

```css
background-position: right bottom;  /*右下*/
```

`background-size`调整背景大小

```css
background-size: 50%;  /*调整背景为50%*/
```

`:hover` 选择器

设置鼠标浮上样式

```css
a:hover
{ 
background-color:yellow;  鼠标浮上变黄
}
```

---------------------------------------------------------

### 导航条和嵌套选择器


导航条：

```css
float样式

float: left;  左开始
```



`.XXX ul{}`定义的选择器里ul标签样式
```css
.top1 ul{
    list-style-type: none;
    width:1400px;
    height:40px;
    background: skyblue;
    border-radius: 10px;
}
```


`.XXX ul li{}`定义的选择器里ul标签下li标签样式

```css
.top1 ul li{
    width:90px;
    height:40px;
    background-color: aqua;
    float: left;
    border-radius: 10px;
    text-align:center;
    line-height:40px;
}
```

---------------------------------------------------------

`.XXX li:hover{}`定义选择器内li标签鼠标划过样式

```css
.top1 li:hover{
    background-color: pink;
}
```

---------------------------------------------------------

`.XXX .XXX{}`嵌套选择器

```css
.top1 .li1{
    width: 112px;
}
```

---------------------------------------------------------

### 群组选择器
```css
#id1, #id2, .class1, .class2, p{
    color:red;
}

匹配上上面的 id名 class名 标签名的 字体颜色变红

```
### 子代选择器
```css
div > p > i{}

div下一级p标签下一级i标签


```
### 后代选择器
```css
div p i{}

div下 所有p 所有i

```

### 相邻兄弟选择器
```css
div+p{}

div紧邻的下一个不是下一级标签

关键点1: 紧接在另一元素后
关键点2: 二者有相同父元素

```
解释网址：https://www.cnblogs.com/hanmk/p/9062084.html

例:
```html
<style>

div+p{
    background-color: aqua;
}

li+li{
    color:red;
}

</style>

<body>
    <div>
        <p>第零个段落</p>
        <div>
            <p>第一个段落</p>
        </div>
    </div>
    <p>第二个段落</p>✔
    <p>第三个段落</p>

    <ul>
        <li>1</li>
        <li>2</li>✔
        <li>3</li>✔
    </ul>

选取所有位于 <li> 标签后的第一个 <li> 元素

```
### 选择器优先级

    选中的元素越具体（选择范围越小）优先级越高

    根据太具体性原则，我们分出基本
    选择器的优先级：

    id选择器 > 类选择器 > 标签选择器 > *

### 这三个搭配可以省略超出内容

```css
    text-overflow:ellipsis; /* 超出部分显示省略号 */
    white-space: nowrap; /*规定段落中的文本不进行换行 */
    overflow: hidden; /*超出部分隐藏*/
```

`overflow:hidden`; 自动隐藏超出的文字或图片

### 浮动

让块级元素水平排列

`float:left`左浮动

`float:right`右浮动

### 显示隐藏

#### 不占空间隐藏

```css
display: none;
```

#### 显示 / 将元素显示为块级元素

```css
display:block
```

#### 占空间隐藏

```css
visibility: hidden;
```
#### 显示 / 元素可见

```css
visibility: visible;
```

### 定位

#### 固定定位

位置相对浏览器固定，窗口滚动，它也不动

```css
position: fixed; 
left:XXpx;  /*在固定下面写方位名称和像素值*/
```

#### 绝对定位

相对于最近已经定位的父级元素，如果父级没有已经定位的元素，相对于 html

absolute 定位使元素的位置与文档流无关，因此不占据空间。

```css
position: absolute;  
left:XXpx;  /*在固定下面写方位名称和像素值*/
```

#### 相对定位

相对于自身定位，就是把自己定在这里

不脱离文档流

```css
position:relative;
```

### 定位层级

```css
z-index:层数，几层;
```

## 位移

```css

transform:translate(x位移,y位移)

```

## 缩放

```css

transform:scale(随便多少数值); 等比例放大缩小
transform:scaleX(1.2); 沿着X轴缩放1.2倍
transform:scale(x,y);x轴与y轴缩放比例可以不一致

```

## 背景图缩放居中

```css
background-size: 缩放比;

background-position-x: x轴定位  居中写center;

background-position-y: y轴定位  居中写center;
```

## 旋转

```css

transform: rotate(180deg); 沿着Z轴(电脑屏幕)旋转
transform: rotate(90deg); 沿着X轴旋转
transform: rotate(90deg); 沿着Y轴旋转

```

## input属性
```css

outline: none;/*点击去掉边框*/

```

## 盒子阴影

```css

box-shadow: x偏移 y偏移 模糊半径 颜色;

```
## 盒模型定义

包含边框（border)、外边距(margin)、内边距(padding)、内容区(content)，这就是盒模型

## 文字阴影

```css

text-shadow: x偏移 y偏移 模糊半径 颜色;

```

## 链接的四种状态：
```css

必！！按这个顺序写，要不不出
a:link  --普通的未被访问的链接
a:visited  --链接跳转之后的状态
a:hover  --鼠标指针悬停
a:active --鼠标按下时

```


## 行内元素和块元素的转换

```css
可通过display属性来改变元素的默认显示类型

块元素 {display:inline;} 块元素将转换为行内元素

行内元素 {display:block;} 行内元素将转换为块元素

行内块元素 {display:inline-block;} 行内块元素可以在一行显示，并且保持块元素的特性(既具有宽度高度特性又具有同行显示特性)
```

# CSS动画

```css

@keyframes 关键帧动画

用法:

    animation: 自定义名称 时间 infinite;

    /**infinite 重复动画，可选元素**/
    /* ease-in-out 加速后减慢动画，可选元素 */

```





---------------------------------------------------------



# 常用样式--持续添加

```css
.div{
    width:宽;
    height:高;
    border:边框后边三个值 1粗细 2线型 3颜色;
    background:背景色;
    text-align:center 文本居中;
    font-size:字体大小;
    font-weight:字体加粗;
    font-style:字体类型;
    text-indent:文字首行缩进;
    line-height:字体行高;
    margin:外边距;
    padding:内边距;
    text-decoration: none;  取消下划线 
    list-style: none; 列表样式取消
    position: absolute;  绝对定位
    position: fixed;  固定定位
    position: relative; 相对定位
    z-index:层数;
    float: left; 左浮动
    float: right;  右浮动，倒序
    background-image:url();背景图插入
    border-radius:圆角;
    text-shadow:文字阴影;
    box-shadow:盒子阴影;
    background:rgba();调背景色透明度
    scroll-behavior:smooth; // 页面自带滑动效果
    outline:外边线(不占位的border);
}

```

## 属性

```css
font-align: justify;  文字向两侧对其，对最后一行无效
font-variant: small-caps;  将段落变为小型大写字母字体
---------
list-style-type: None; disc实心圆; circle空心圆; square小方块; 
list-style-position（项目符号定位）: inside（行内）outside（默认，行外） 
list-style-image（图片作为项目符号）: url(path);

------
background-attchment: fixed;  背景图不会滚动

-------

border-spacing（相邻单元格间距）: 10px（水平距离） 20px（垂直距离）

--------

vertical-align 表示垂直方向对齐方式

--------

overflow: scroll; 超出部分拉滚动条显示


父级标签中使用overflow：hidden；就可以解决外边距重叠

``` 