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

#### 存在选择器

 - 选择页面中指定元素，拥有指定属性的元素
 - 语法：`选择器[属性名]`{}
 - 例子：
     - ```css
        /* 选择带有attribute_1属性的元素 */
        [attribute_1]{
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(255, 0, 0, 0.466);
        }
        ```
     - ```html
        <div attribute_1="">带有attribute_1属性的元素</div>
        ```

#### 等值选择器

 - 选择页面中指定元素，拥有指定属性和指定属性值的元素
 - 语法：`选择器[属性名 = 属性值]`{}
 - 例子：
     - ```css
        /* 选择div元素有title属性且值为"value" */
        div[title="value"]{
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: pink;
        }
        ```
     - ```html
        <div title="value">属性选择器</div>
        ```

#### 属性值匹配`-`连接选择器

 - 选择页面中拥有 指定属性 和以 指定属性值 开头 并用`-`连接的元素
 - 语法：`选择器[属性名 |= 属性值]`{}
 - 例子：
     - ```css
        /* 选择attribute_2属性值以 "value" 开头的所有元素 */
        [attribute_2 |= value]{
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(0, 255, 0, 0.466);
        }
        ```
     - ```html
        <div attribute_2="value-123">
            属性值开头为"value"用`-`连接的元素<br>
            value123x<br>
            value-123✔
        </div>
        ```

#### 开头匹配选择器

 - 选择页面中指定元素，拥有指定属性和指定属性值`开头`的元素
 - 语法：`选择器[属性名 ^= 属性值]`{}
 - 例子：
     - ```css
        /* 选择attribute_3属性值以 "value" 开头的所有元素 */
        [attribute_3 ^= value]{
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(0, 0, 255, 0.466);
        }
        ```
     - ```html
        <div attribute_3="value123">属性值以 "value" 开头的所有元素</div>
        <div attribute_3="value456">不用 - 也没事 <br> 但必须是开头</div>
        ```

#### 包含匹配选择器

 - 选择页面中指定元素，拥有指定属性和指定属性值`包含`的元素
 - 语法：`选择器[属性名 *= 属性值]`{}
 - 例子：
     - ```css
        /* 选择attribute_4属性值包含 "value" 的所有元素 */
        [attribute_4 *= value]{
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(255, 0, 255, 0.466);
        }
        ```
     - ```html
        <div attribute_4="123value789">属性值包含 "value" 的所有元素</div>
        <div attribute_4="123789456value">只要有就行</div>
        ```

#### 结尾匹配选择器

 - 选择页面中指定元素，拥有指定属性和指定属性值`结尾`的元素
 - 语法：`选择器[属性名 $= 属性值]`{}
 - 例子：
     - ```css
        /* 选择attribute_5属性值以 "value" 结尾的所有元素 */
        [attribute_5 $= value]{
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(255, 255, 0, 0.466);
        }
        ```
     - ```html
        <div attribute_5="456value">属性值以 "value" 结尾的所有元素</div>
        <div attribute_5="value456value">在屁股就行</div>
        ```

#### 多属性值选择器

 - 选择页面中指定元素，拥有指定属性和指定属性值的元素
 - 语法：`选择器[属性名 ~= 属性值]`{}
 - 例子：
     - ```css
        /* 选择attribute_6属性值为一个词列表，并且以空格隔开
        其中词列表中包含了一个value1 */
        [attribute_6 ~= value1]{
            width: 200px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(17, 255, 0, 0.466);
        }
        ```
     - ```html
        <div attribute_6="value1 value2">
            属性值为一个词列表，并且以空格隔开<br>
            其中词列表中包含了一个寻找项即可
        </div>
        <div attribute_6="value1 value3">里面包含寻找项即可</div>
        ```

#### 多属性选择器

 - 选择页面中指定元素，拥有指定属性和指定属性值的元素
 - 语法：`选择器[属性名1 = 属性值1][属性名2 = 属性值2]`{}
 - 例子：
     - ```css
        /* 选择attribute_6属性值为 "value" 且 attribute_7属性值为 "value" 的所有元素 */
        [attribute_7 = value][attribute_8 = value]{
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(0, 0, 0, 0.466);
        }
        ```
     - ```html
        <div attribute_7="value" attribute_8="value">多属性选择器</div>
        ```

### 伪类选择器
#### 结构伪类
#### 否定伪类
#### 元素伪类

 - 写的时候顺序不要乱，按照LVHA的顺序写

##### 链接伪类

 - 作用：选择所有未被访问的链接

 - 语法：选择器`:link`{}

 - 例子：
     - ```css
        a:link{
            color: red;
        }
        ```
     - ```html
        <a href="https://www.baidu.com/">百度</a>
        ```

##### 访问伪类

 - 作用：选择所有被访问过的链接

 - 语法：选择器`:visited`{}

 - 例子：
     - ```css
        a:visited{
            color: red;
        }
        ```
     - ```html
        <a href="https://www.baidu.com/">百度</a>
        ```

##### hover伪类

 - 作用：选择鼠标指针位于其上的链接

 - 语法：选择器`:hover`{}

 - 例子：
     - ```css
        a:hover{
            color: red;
        }
        ```
     - ```html
        <a href="https://www.baidu.com/">百度</a>
        ```

##### active伪类

 - 作用：选择活动链接，鼠标按下未释放的元素

 - 语法：选择器`:active`{}

 - 例子：
     - ```css
        a:active{
            color: red;
        }
        ```
     - ```html
        <a href="https://www.baidu.com/">百度</a>
        ```




### 伪元素选择器

 - 特点：
     - 使用dom操作的方法，无法获取
     - 理论上存在，实际上没有这个节点

 - before和after必须配合content属性使用，否则不会显示，没有内容的划，可以设置为空，不能不写

#### ::before

 - 作用：在元素之前添加内容

 - 语法：选择器 `::before`{}
 - 例子：
     - ```css
        .before_demo::before{
            content: "我是before伪元素";
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(255, 0, 0, 0.466);
        }
        ```
     - ```html
        <div class="before_demo">我是before伪元素</div>
        ```

#### ::after

 - 作用：在元素之后添加内容

 - 语法：选择器 `::after`{}
 - 例子：
     - ```css
        .after_demo::after{
            content: "我是after伪元素";
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(255, 0, 0, 0.466);
        }
        ```
     - ```html
        <div class="after_demo">我是after伪元素</div>
        ```

#### ::first-letter

 - 作用：选择元素的第一个字母

 - 语法：选择器 `::first-letter`{}
 - 例子：
     - ```css
        .first_letter_demo::first-letter{
            font-size: 50px;
            color: red;
        }
        ```
     - ```html
        <div class="first_letter_demo">我是first-letter伪元素</div>
        ```

#### ::first-line

 - 作用：选择元素的第一行

 - 语法：选择器 `::first-line`{}
 - 例子：
     - ```css
        .first_line_demo::first-line{
            font-size: 50px;
            color: red;
        }
        ```
     - ```html
        <div class="first_line_demo">我是first-line伪元素</div>
        ```

#### ::selection

 - 作用：选择元素被选中的部分

 - 语法：选择器 `::selection`{}
 - 例子：
     - ```css
        .selection_demo::selection{
            background-color: red;
            color: white;
        }
        ```
     - ```html
        <div class="selection_demo">我是selection伪元素</div>
        ```

#### 一个案例

 - 列表计数

 - code：
     - ```css
        .list_demo{
            list-style: none;
        }
        .list_demo li::before{
            /* conunter意思是计数器 */
            /* list是自定义的参数 */
            content: counter(list);
        }
        .list_demo li{
            width: 100px;
            height: 20px;
            text-align: center;
            /* conunter-increment意思是计数器增加 */
            /* list是上面括号里的参数 */
            counter-increment: list;
        }
        .list_demo li::first-letter{
            color: red;
        }
        .list_demo li::first-line{
            color: blue;
        }
        ```
     - ```html
        <ul class="list_demo">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>