## 介绍

 - CSS3是CSS技术的升级版本，它包含了CSS2.1中的所有内容，也增加了很多新的特性。
 - CSS3的新特性主要包括以下几个方面：
     - 新的选择器
     - 圆角
     - 阴影
     - 渐变
     - 过渡
     - 动画
     - 2D/3D转换
     - 媒体查询
     - 伸缩盒布局
     - 多列布局
     - 用户界面

## 兼容性写法

 - 低版本浏览器不支持CSS3的新特性，所以在使用CSS3的新特性时，需要兼容性写法

 - 兼容性写法的原则：
     - 标准写法，兼容性写法都写
     - 严格模式下：必须都写，兼容性写法在前，标准写法在后

### webkit内核

 - webkit内核的浏览器：Chrome、Safari

 - 兼容性写法：
     - `-webkit-`属性名：属性值

### moz内核

 - moz内核的浏览器：Firefox

 - 兼容性写法：
     - `-moz-`属性名：属性值

### trident内核

 - trident内核的浏览器：IE

 - 兼容性写法：
     - `-ms-`属性名：属性值

### blink内核

 - blink内核的浏览器：Opera

 - 兼容性写法：
     - `-o-`属性名：属性值

## 选择器类型

### 常用选择器

#### 元素(标签)选择器

 - 选择页面中指定标签的元素

 - 语法：`标签名`{}
 - 例子：
     - ```css
         div{
              color: red;
         }
        ```
     - ```html
        <div>我是div</div>
        ```

#### 类选择器

 - 选择页面中指定类名的元素

 - 语法：`.类名`{}
 - 例子：
     - ```css
         .box{
              color: red;
         }
        ```
     - ```html
        <div class="box">我是div</div>
        ```

#### id选择器

 - 选择页面中指定id名的元素

 - 顺序：id选择器的优先级最高

 - 语法：`#id名`{}
 - 例子：
     - ```css
         #box{
              color: red;
         }
        ```
     - ```html
        <div id="box">我是div</div>
        ```


#### 通配符选择器

 - 选择页面中所有的元素

 - 语法：`*`{}
 - 例子：
     - ```css
         *{
              color: red;
         }
        ```

### 群组选择器

 - 选择页面中指定的多个元素

 - 语法：`选择器1,选择器2,选择器3,...`{}
 - 例子：
     - ```css
         div,p,span{
              color: red;
         }
        ```
     - ```html
        <div>我是div</div>
        <p>我是p</p>
        <span>我是span</span>
        ```

### 层级（关系）选择器

#### 后代选择器

 - 选择页面中指定元素的后代元素
 - 没有指定
 - 语法：`选择器1` ` ` `选择器2`{}
 - 例子：
     - ```css
            .progeny_demo p{
                width: 100px;
                height: 100px;
                background-color: red;
            }
            .progeny_demo .progeny_two_demo p{
                width: 100px;
                height: 100px;
                background-color: pink;
            }
        ```
     - ```html
            <div class="progeny_demo">
                <p>所有后代p</p>
                <div>
                    <p>没有指定css的二级后代p，走后代特性</p>
                </div>
                <div class="progeny_two_demo">
                    <p>二级下所有后代p</p>
                </div>
            </div>  
        ```

#### 子代选择器

 - 选择页面中指定元素的子元素
 - 语法：`选择器1` `>` `选择器2`{}
 - 例子：
     - ```css
        .son_demo > p{
            width: 100px;
            height: 100px;
            background-color: red;
        }
        .son_demo > div > p{
            width: 100px;
            height: 100px;
            background-color: pink;
        }
        ```
     - ```html
        <div class="son_demo">
            <p>所有一级子代p</p>
            <div>
                <p>所有二级子代p</p>
            </div>
        </div> 
        ```

#### 相邻兄弟选择器

 - 选择页面中指定元素的相邻兄弟元素
 - 语法：`选择器1` `+` `选择器2`{}
 - 例子：
     - ```css
        .adjacent_sibling_demo{
            width: 100px;
            height: 100px;
            background-color: red;
        }
        .adjacent_sibling_demo + .adj_demo{
            width: 100px;
            height: 100px;
            background-color: pink;
        }
        ```
     - ```html
        <div class="adjacent_sibling_demo">相邻兄弟选择器</div>
        <p class="adj_demo">会选择紧挨着的第一个</p>  
        ```

#### 通用兄弟选择器

 - 选择页面中指定元素的所有兄弟元素
 - 语法：`选择器1` `~` `选择器2`{}
 - 例子：
     - ```css
            .universal_sibling_demo{
                width: 100px;
                height: 100px;
                background-color: red;
            }
            .universal_sibling_demo ~ .uni_demo{
                width: 100px;
                height: 100px;
                background-color: pink;
            }
        ```
     - ```html
        <div class="universal_sibling_demo">通用兄弟选择器</div>
        <p class="uni_demo">选择所有同级</p>
        <p class="uni_demo">选择所有同级</p>
        <p class="uni_demo">选择所有同级</p>
        ```

### 属性选择器

### 伪类选择器
#### 结构伪类
#### 否定伪类
#### 元素伪类

### 伪元素选择器