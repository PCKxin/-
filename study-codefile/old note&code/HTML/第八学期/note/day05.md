## 获取变量值

```js

变量名.value

b.onclick = function(){
    p.innerHTML = a.value;
}
```

## 检测类型

```js
typef 变量名

方便用法：alert(typef 变量名)
```


### 元素属性和属性值在JS获取中运用（动态获取元素属性值）

```js

.setProperty(属性,属性值) 

```


## 全局变量

    声明在函数之外的变量


## 局部变量

    声明在函数体内的变量
    只能在当前函数体内访问

## 注：

    声明变量时没有var关键字时就默认为全局变量


## JS基本数据类型

1. number 数值类型

    包括整数和浮点数

2. string  字符串类型

    用单引号或双引号括起来的零个或多个单一的字符所组成

3. boollean 布尔类型

    取值为true 和 false

4. underfined  未定义值


5. null 空类型

    null取值只有null

## 字符串转换数字

字符串汉字开头和字母开头不能转

```js
parseInt()仅能返回整数
直接截取整数部分
```

```js
parseFloat() 字符串转浮点型
只取到第一个小数点
```
```js
Number() 转换数值包括整数和浮点数
```