## 显示隐藏

### 不占空间隐藏

```css
display: none;
```

### 显示 / 将元素显示为块级元素

```css
display:block
```

### 占空间隐藏

```css
visibility: hidden;
```
### 显示 / 元素可见

```css
visibility: visible;
```

## 定位

### 固定定位

位置相对浏览器固定，窗口滚动，它也不动

```css
position: fixed; 
left:XXpx;  /*在固定下面写方位名称和像素值*/
```

### 绝对定位

相对于最近已经定位的父级元素，如果父级没有已经定位的元素，相对于 html

absolute 定位使元素的位置与文档流无关，因此不占据空间。

```css
position: absolute;  
left:XXpx;  /*在固定下面写方位名称和像素值*/
```

### 相对定位

相对于自身定位，就是把自己定在这里

不脱离文档流

```css
position:relative;
```

### 定位层级

```css
z-index:层数，几层;
```

```css

```