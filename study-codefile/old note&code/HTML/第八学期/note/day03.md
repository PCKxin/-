### W3C HTML DOM标准

1. 整个文档是一个文档节点
2. 每个HTML元素是元素节点
3. HTML元素内文本是文本节点
4. HTML属性是属性节点



### 使用DOM树能干什么

1. JavaScript能够改变页面中的所有HTML元素
2. JavaScript能够改变页面中的所有HTML属性
3. JavaScript能够改变页面中的所有CSS样式
4. JavaScript能对页面中所有事件作出反应

### JS书写格式

```js
var 自定义变量名 = document.getElementById("名字")；
```

```js
var //声明

document //文档内

function 方法名(){
    自定义变量名.属性名="属性值"
}
```

```js
自定义变量名.事件名=function(){
    自定义变量名.属性名="属性值"
}
```



```js
getElementById //get 获取 Element 元素 Id 选择器
```


### 改HTML最简单的方法是使用`innerHTML`属性

标签的文字内容用innerHTML修改

document.getElementById(" ").innerHTML="内容"

输入框的值用value修改

document.getElementById.value="内容"

### 改HTML样式使用：

document.getElementByid("").style.属性="值"

