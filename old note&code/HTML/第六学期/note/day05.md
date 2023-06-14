## 有序列表：
```html
一列项目，用数字标记：

<ol type="1" start="2"> <!--type是数字类型 start是起始数字-->
<ol type="A"> <!--用字母排-->
<ol type="a"> <!--用小写字母排-->
<ol type="I"> <!--用罗马数字排-->
<ol type="i"> <!--用小写罗马数字排-->
<ol>  <!--有序列表开始标签-->
    <li>列表项</li>
</ol>
倒序:reversed="reversed"
```

## 无序列表：
```html
项目，用粗体圆点表示：

<ul type="disc"> <!--disc实心黑点--> <!--默认项-->
<ul type="square"> <!--square实心方块-->
<ul type="circle"> <!--circle空心圆环-->
<ul>  <!--无序列表开始标签-->
    <li>列表项</li>
</ul>
```

## 定义列表：
```html
项目和注释组合

<dl>  <!--定义列表开始标签-->
    <dt>列表项</dt>
    <dd>列表项定义</dd>
</dl>