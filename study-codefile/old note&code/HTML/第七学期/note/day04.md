## 导航条和嵌套选择器


导航条：

```css
float样式

float: left;  左开始
```

`.XXX ul{}`定义的选择器里ul标签样式

例:

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

例：
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

`.XXX li:hover{}`定义选择器内li标签鼠标划过样式

例：
```css
.top1 li:hover{
    background-color: pink;
}
```
`.XXX .XXX{}`嵌套选择器

例：
```css
.top1 .li1{
    width: 112px;
}
```




