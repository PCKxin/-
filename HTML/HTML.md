# 初始标签及其含义
## < !DOCTYPE html>
```html
<!DOTYPE html>
是html5标准网页声明， 全称为Document Type HyperText Mark-up Language

意思为html5标准的主流浏览器都认识这个声明。表明网页采用html5

声明位于文档中最前面的位置，处于标签之前

此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范

```
```
防止中文页面乱码：
    <meta charset="utf-8">
语法：
    
    <标签符>内容</标签符>
    标签成对出现，一个开始一个结束
前段开发：

    三剑客：CSS HTML JavaScript

    HTML是网页的结构，CSS是网页的外观，JavaScript是网页的行为

什么是HTML：

    HTML全称是"Hyper Text Markup Language"(超文本标签语言)

    它是网页的标准语言。HTML并不是编程语言而是一门描述性标记语言

    学习HTML就是学习各种标签，学习网页的“骨架”

    我们也把“标签”说成“元素”
```

## HTML
```html
<html lang="en">
包含整个HTML文件的所有内容，向搜索引擎表示该页面是html语言

同时表示语言为英文网站，其"lang"的意思就是“language”，语言的意思

而“en”即表示english。
```
## meta标签
```html
<meta name="参数" content="具体参数值">

meta 标签可以设置页面中的一些元信息

name="Author"(作者)      说明: 标注网页的作者或制作组
    "copyright"(版权)    说明: 标注版权
    "Generator"(编辑器)  说明: 编辑器说明
    "revisit"(重访)      说明: 通知搜索引擎多少天访问一次

<meta charset="UTF-8">
定义当前页面的编码格式，告诉浏览器以什么编码格式解析当前页面，
这里表示改页面用UTF-8编码格式解析
<meta http-equiv="X-UA-Compatible" content="IE=edge">
用于告知浏览器以何种版本来渲染页面（一般都设置为最新模式），
这里的含义是指定IE浏览器使用最新的IE版本渲染当前页面
<meta name="viewport" content="width=device-width, initial-scale=1.0">
这里一个针对移动网页优化的标签，width用于设置viewport的宽度，
这里的device-width表示视区宽度就是设备的屏幕宽度，
而initial-scale则控制初始缩放比例，这里的1.0则表示显示的是未经缩放的web页面
```

# 网页结构

```html
<html>      ---包含整个HTML文件的所有内容，声明该页面是html语言
    <head>   ---头部标签
        <title></title>  ---标题标签
        <style></style>  ---CSS样式统一声明标签
    </head>
    <div>   ---块级标签
        <body>  ---内容主体标签
            <p></p>  ---段落
            <h1></h1>  ---标题标签
            <u></u>   ---下划线
            <i></i>   ---斜体
            <b></b>   ---加粗
            <span></span>   ---区域样式标签
            <hr> ---分割线
            <br> ---换行
            <ol>  ---有序列表
                <li></li>   ---列表项
            </ol>
            <ul>   ---无序列表
                <li></li>  ---列表项
            </ul>
            <dl>   ---定义列表
                <dt></dt>   ---列表项
                <dd></dd>   ---列表项定义
            </dl>
            <a href="链接"></a>   ---超链接标签
            <img src="链接" alt="为找到描述">   ---图片标签

            <table>   ---表格
                <caption></caption>   ---表头
                <tr>  ---行
                    <td></td>   ---列/内容
                </tr>
            </table>

            <form>   ---表单类型
                <input type="类型">
            </form>

            <textarea></textarea>   ---多行文本框，文本域
            <select> ---下拉选项列表
                <option></option>  ---选项内容
            </select>
        </body>
    </div>
</html>

<!--注释-->

```


# 标签(元素)

## 块级标签

```html
<div>
<p>
<h1>~<h6>
<ul><li>
<ol><li>
<tr><td>td属于行内块类型
<form>表单
```

## 行内块标签

```html
<img src="" alt="" />
<input type="text" />
<td>
```

## 行内标签

```html
<a href="">
<span>更改固定区域文本样式
<i>斜体
<b>加粗
<em>强调倾斜
<del>删除线
<u>下划线
<strong>强调加粗
```
## 标签属性

```html
超链接标签
<a href="地址" target="_blank" title="鼠标划过文本" style="">显示文本</a>
target="_blank"新标签页打开
        "_self" 当前窗口打开，默认值
        "_top" 当前窗口打开
        "_parent" 父窗口，当前窗口？与self等效
        
a标签邮件超链接
<a href="mailto:xxx@yyy">


图片标签
<img src="图片地址" alt="未找到图片提示文本" title="图片描述，鼠标滑过显示">
../XX/XX    引入本地图

<!--src和href区别-->

src 将文件载入页面
href 是让文件与文件建立联系

```


# 列表

## 有序列表

```html
一列项目，用数字标记

<ol type="1" start="2"> <!--type是数字类型 start是起始数字-->
<ol type="A"> <!--用字母排-->
<ol type="a"> <!--用小写字母排-->
<ol type="I"> <!--用罗马数字排-->
<ol type="i"> <!--用小写罗马数字排-->
<ol>
    <li>列表项</li>
</ol>
```

## 无序列表

```html
默认粗体圆点表示

<ul type="disc"><!--disc实心黑点--> <!--默认项-->
<ul type="square"><!--square实心方块-->
<ul type="circle"><!--circle空心圆环-->
<ul>
    <li>列表项</li>
</ul>
```
## 定义列表

```html
项目和注释组合

<dl>  <!--定义列表开始标签-->
    <dt>列表项</dt>
    <dd>列表项定义</dd>
</dl>
```
# 表格
```html

表格合并多少多的就删多少

<caption>表头</caption>
cellspacing=""    //边框间距 
cellpadding=""    //框内内边距

三个表格结构
<thead>头部
<tbody>主体
<tfoot>底部

<table border="1" width="200px" height="200px" border-collapse="collapse">
            <tr>
                <td colspan="2">1 2</td>
                <td rowspan="2">3 <br> 6</td>
            </tr>
</table>

<table border="5px" width="200px" height="200" style="border:10px solid red">
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
</table>
```


# 表单

用table包表单，对其更方便

作用：
收集信息，提交给后台
常见标签:`form`,`input`,`textarea`,`select`,`option`

两个必设属性：
action表单提交的地址，属性值是一个网址(地址)
method表单提交的方式，两种一种get一种post

name属性是提交到后台的标识，用来交互
value是值（输入的，原带的）

## label元素
标签作用是将文字与表单控件绑定(联动)，当点击文字，就可以选中表单控件
使用方法两种:
```html
第一种: 用<label>标签包文字和控件
第二种: 在表单控件中设置id属性值，用label标签包文字比如控件拓展1↓ 设置好for属性

<label>
    文本框:<input type="text">
</label>


```




## `form`标签
将所有表单标签放在里面
```html
<form>
    姓名:<input type="text" placeholder="name" size="20" maxlength="5" value=""><input type="submit" value="提交"><br>
    密码:<input type="password" placeholder="password" size="40" maxlength="20"><input type="submit" value="提交"><br>
    性别:<input type="radio" value="boy" name="sex" cheaked="cheaked">男孩
    <input type="radio" value="girl" name="sex" cheaked="cheaked">女孩<br>

    爱好:<input type="checkbox" name="hobbies" value="singing">唱歌
        <input type="checkbox" name="hobbies" value="dance">跳舞
        <input type="checkbox" name="hobbies" value="tour">旅行
</form>

<!--autocomplete属性-->
用于控制浏览器自动填充项增加或关闭
可设置表单或者input元素
属性值：on 开启记录 off关闭记录
例：<form autocomplete="on">

<!--novalidate属性-->
input输入类型，当提交表单时，会对这些输入内容进行验证。
而novalidate属性则用于在提交表单时不对form或input进行验证
例：<form novalidate>

```
## `value`属性

    对于 "button"、"reset"、"submit" 类型 - 定义按钮上的文本

    对于 "text"、"password"、"hidden" 类型 - 定义输入字段的初始（默认）值
    
    对于 "checkbox"、"radio"、"image" 类型 - 定义与input元素相关的值

## `input`标签

```html

单行文本框
语法: <input type="text">
属性：
value: 设定输入字段的初始值
size: 设定文本框的长度
maxlength: 设置文本框最多可输入的字符串
placeholder: 提示文本

密码文本框
语法：<input type="password">

单选框：
语法: <input type="radio" name="组名" value="取值" cheaked="选项">
name: 表示单选框所在的组名/后台标识名
value: 定义与元素相关的值
checked: 表示选中的某一选项
placeholder: 提示文本

复选框:
语法: <input type="checkbox" name="组名" value="取值">

按钮
普通按钮:<input type="button" value="组名（按钮的字）">
提交按钮:<input type="submit" value="组名">
重置按钮:<input type="reset" value="组名">

文件上传<input type="file">
```

## input知识点

```html
<!--autofocus属性-->
用于获取鼠标焦点，页面加载时input元素会自动获得光标焦点

例：<input autofocus>

<!--form属性-->
用于设置input元素属于哪个表单

例：<form id="f1">
    <input form="f1">

<!--override属性-->
可以重写表单的属性有：formaction formmethod formenctype formnovalidate formtarget
用于重写表单的 action，enctype， method， novalidate，target 属性
可以用来重写input表单提交地址

例：
<form action="a.jsp" method="get">
    <input type="submit" value="源提交">
    <input type="submit" formaction="b.jsp" value="改提交"><!--提交到b.jsp-->
</form>

<!--list属性-->
list属性用于设置输入域的datalist元素
为list属性设置datalist的id属性值
可以将datalist元素与input元素相关联
---
list属性适应于以下类型的input元素: 
text, search, url, telephone, email. date, pickers, number, range, color

例：
<input list="list_1" type="url">
<datalist id="list_1">
    <option label="" value="值">
    <option label="" value="值">
    <option label="" value="值">
</datalist>

<!--multiple属性-->
multiple属性用于设置input元素是否可以有多个值，该属性只适用于email和file类型的input元素

如果给email类型的的input元素设置multiple属性，那么在 输入框就可以输入多个email地址，多个email地址之间用逗号隔开
如果给file类型的input元素设置multiple属性，那么 在打开的选择文件对话框中就可以选择多个文件

例：
<input type="email" name="" multiple>
<input type="file" name="" multiple>


<!--pattern正则表达式-->
正则表达式由一系列字符和数字组成， 用于匹配某个句法规则。
该属性适应于text, search, url, telephone, email和password类型的input元素

<form>
    <input type="text" name="" pattern="[a-zA-Z]\w{5,15}$">
    <html>以字母开头，6-16位</html>
    <input type="submit" value="提交">
</form>

<!--placeholder默认提示信息-->
<input placeholder="巴拉巴拉">

<!--required提交为空提示-->
<input placeholder="巴拉巴拉" required>

```

## 多行文本框，文本域
```html
<textarea col="" rows=""> cols rows 设置宽高用，用css更准确
</textarea> 
```
## 下拉列表
```html
<select>
    <option value="">选项内容</option>
    <option value="">选项内容</option>
</select>

<select>属性:
multiple 设置下拉列表可选多项
size 设置下拉列表显示几个列表项
<option>属性：
selected 是否选中
value 选项值

```

## 表单有两个重要属性
	动作和方法，动作指的是数据提交的地址，方法是数据提交的方法
	提交有两种方法：get  和 post
		get提交明文数据在地址栏，传输量少
        post数据打包发送，加密，传输量大

## 控件拓展
```html

<label for="in1">XXX</label>
<input id="in1" type="text" placeholder="请输入用户名">
效果，点击XXX会激活下面的用户名输入框

------------------------------------------------

<fieldset>元素组合表单中的相关数据
<legend>元素为<fieldset>元素定义标题
就是给包一圈外框，拿这串码试一下就反应过来了
        <fieldset>
            <legend align="center">123</legend>
            <input type="text" name="wd">
            <input type="submit">
        </fieldset>

------------------------------------------------

<input type="text" readonly="readonly" value="">
readonly属性是只读，启用后该文本框不可使用，只能看

<input disabled>
disabled属性是禁用input

<input required>
input非空检测属性required

<input checked>
checked默认选中此input

```

# 杂项

```html

&lt; <!--表示 < -->
&gt; <!--表示 > -->
&nbsp;一个空格
&ensp;两个空格
&emsp;四个空格

<!--应用场景-->
2<sup>2</sup>的平方
H<sub>2</sub>O 下标

                红色       绿色       蓝色      白色      黑色
十六进制表达法 | #ff0000 | #00ff00 | #0000ff | ffffff | 000000

rgb   | rgb(255,0,0) | rgb(0,255,0) | rgb(0,0,255) | rgb(0,255,255) | rgb(0，0，0
```





## W3C HTML DOM标准

    1.整个文档是一个文档节点
    2.每个HTML元素是一个元素节点
    3.HTML元素内文本是文本节点
    4.HTML属性是属性节点
