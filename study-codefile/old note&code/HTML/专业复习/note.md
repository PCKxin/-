## 位移：

```css

transform:translate(x位移 y位移) 

```

## 缩放：

```css

transform:scale(随便多少数值);等比例放大缩小
transform:scaleX(1.2); 沿着X轴缩放1.2倍
transform:scale(x,y);x轴与y轴缩放比例可以不一致

```

## 背景图缩放居中


```css
background-size: 缩放比;

background-position-x: x轴定位  居中写center;
 
background-position-y: y轴定位  居中写center;
```




## 旋转：

```css

transform:rotate(180deg); 沿着Z轴(电脑屏幕)旋转 
transform:rotateX(90deg); 沿着X轴旋转
transform:rotateY(90deg); 沿着Y轴旋转

```
## 生成随机四位字符串

```js

Math.random().toString(36).slice(-8)
    // Math.random()  生成随机数字
    // .toString(36)  转化成36进制
    // .slice(-4) 取最后四位

```
## input属性
```css

outline: none;/*点击去掉边框*/

```




## CSS动画

```css

@keyframes 关键帧动画

用法：

    animation: 自定义名称 时间 infinite;

    /**infinite 重复动画，可选元素**/

```

## 盒子阴影

```css

box-shadow: x偏移 y偏移 模糊半径 颜色；

```

## 文字阴影

```css

text-shadow: x偏移 y偏移 模糊半径 颜色；

```

## a标签变块级元素

    a标签 限定宽度和高度，让超出部分自动隐藏了
    在a的属性里面添加  display:block; 就可以了

