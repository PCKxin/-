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

 - 以child结尾是在所有子元素中选择
 - 以type结尾是在所有指定类型(type)的元素中选择
 - 以-of-type结尾是在所有指定类型(type)的元素中选择

 - child和type的区别：
     - child是在所有子元素中选择
     - type是在所有相同元素中选择

##### first-child

 - 选择 指定元素 的 父元素 的 第一个 子元素

 - 语法：选择器`:first-child`{}
 - 例子：
     - ```css
        /* 选第一个为p的元素 */
        .first_child_demo p:first-child{
            width: 100px;
            height: 100px;
            background-color: pink;
        }
        /* 选第一个子元素 */
        .first_child_demo :first-child{
            width: 100px;
            height: 100px;
            background-color: red;
        }
        ```
     - ```html
        <div class="first_child_demo">
            <div>第一个div</div>
            <p>第一个</p>
            <p>我是first-child伪类</p>
        </div>
        ```

##### last-child

 - 选择 指定元素 的 父元素 的最后一个子元素
 - 语法：选择器`:last-child`{}
 - 例子：
     - ```css
        /* 选最后一个为p的元素 */
        .last_child_demo p:last-child{
            width: 100px;
            height: 100px;
            background-color: pink;
        }
        /* 选最后一个子元素 */
        .last_child_demo :last-child{
            width: 100px;
            height: 100px;
            background-color: red;
        }
        ```
     - ```html
        <div class="last_child_demo">
            <div>第一个div</div>
            <p>第一个</p>
            <p>我是last-child伪类</p>
        </div>
        ```

##### nth-child

 - 选择 指定元素 的 父元素 的 第n个 子元素
 - 语法：
     - `:nth-child(n)`{}
     - `:nth-child(2n)`{} 选择偶数
     - `:nth-child(even)`{} 选择偶数
     - `:nth-child(2n+1)`{} 选择奇数
     - `:nth-child(odd)`{} 选择奇数

 - 例子:
     - ```css
        .nth-child :nth-child(2){
            width: 100px;
            height: 100px;
            float: left;
            background-color: rgba(0, 200, 255, 0.697);
        }
        .nth-child :nth-child(3){
            width: 100px;
            height: 100px;
            float: left;
            background-color: rgba(255, 0, 0, 0.466);
        }
        .nth-child :nth-child(4){
            width: 100px;
            height: 100px;
            float: left;
            background-color: rgba(255, 0, 255, 0.466);
        }
        .nth-child :nth-child(2n){
            margin-right: 10px;
        }
        .nth-child :nth-child(2n+1){
            margin-right: 10px;
        }
        ```
     - ```html
        <div class="nth-child_demo">
            <div>第一个子元素</div>
            <div>第n个子元素</div>
            <div>奇数位子元素</div>
            <div>偶数位子元素</div>
            <div>最后一个子元素</div>
        </div>
        ```

##### only-child

 - 选择 指定元素 的 父元素 的 唯一 子元素，也就是说，这个子元素没有兄弟元素，如果有兄弟元素，就不会被选中
 - 语法：选择器`:only-child`{}
 - 例子：
     - ```css
        .only-child_demo :only-child{
            width: 100px;
            height: 100px;
            float: left;
            background-color: rgba(0, 200, 255, 0.697);
        }
        ```
     - ```html
        <div class="only-child_demo">
            <p>only-child</p>
        </div>
        ```


##### first-of-type

 - 选择 指定元素 的 父元素 的 第一个 指定类型(type) 的子元素

 - 语法：选择器`:first-of-type`{}

 - 例子：
     - ```css
        .type_demo :first-of-type{
            width: 100px;
            height: 100px;
            float: left;
            background-color: rgba(0, 200, 255, 0.697);
        }
        ```
     - ```html
        <div class="type_demo">
            <div>第一个子元素</div>
            <div>第n个子元素</div>
            <p>p标签子元素</p>
            <div>最后一个子元素</div>
        </div>
        ```

##### last-of-type

 - 选择 指定元素 的 父元素 的 最后一个 指定类型(type) 的子元素，会识别标签与类名一致的元素

 - 语法：选择器`:last-of-type`{}
 - 例子：
     - ```css
        .type_demo :last-of-type{
            width: 100px;
            height: 100px;
            float: left;
            background-color: rgba(0, 200, 255, 0.697);
        }
        ```
     - ```html
        <div class="type_demo">
            <div>第一个子元素</div>
            <div>第n个子元素</div>
            <p>p标签子元素</p>
            <div>最后一个子元素</div>
        </div>
        ```

##### nth-of-type

 - 选择父元素下的第n个type元素,计数从1开始

 - 语法：`:nth-of-type(n)`{}

 - 例子：
     - ```css
        .type_demo :nth-of-type(2){
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(0, 200, 255, 0.697);
        }
        ```
     - ```html
        <div class="type_demo">
            <div>第一个子元素</div>
            <div>第n个子元素</div>
            <p>p标签子元素</p>
            <div>最后一个子元素</div>
        </div>
        ```

##### nth-last-of-type

 - 选择父元素下的倒数第n个type元素

 - 语法：`:nth-last-of-type(n)`{}

 - 例子：
     - ```css
        .type_demo :nth-last-of-type(1){
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(0, 200, 255, 0.697);
        }
        ```
     - ```html
        <div class="type_demo">
            <div>第一个子元素</div>
            <div>第n个子元素</div>
            <p>p标签子元素</p>
            <div>最后一个子元素</div>
        </div>
        ```

##### root

 - 选择页面中的根元素

 - 语法：`:root`{}

 - 例子：
     - ```css
        :root{
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(0, 200, 255, 0.697);
        }
        ```
     - ```html
        <div>我是根元素</div>
        ```

##### empty

 - 选择页面中的空元素

 - 语法：`:empty`{}

 - 例子：
     - ```css
        :empty{
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: rgba(0, 200, 255, 0.697);
        }
        ```
     - ```html
        <div></div>
        ```

#### 否定伪类

 - 选择页面中指定元素，不拥有指定属性和指定属性值的元素
 - 语法：`选择器:not(选择器)`{}
 - 例子：
     - ```css
        /* 选择所有不是div的元素 */
        :not(div){
            width: 100px;
            height: 100px;
            float: left;
            margin-right: 10px;
            background-color: pink;
        }
        ```
     - ```html
        <div>我是div</div>
        <p>我是p</p>
        <span>我是span</span>
        ```

#### 元素伪类

 - 写的时候顺序不要乱，按照LVHA的顺序写

##### link

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

##### visited

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

##### hover

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

##### active

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
        ```

## 盒子模型

### 介绍

 - 盒子模型是CSS中最重要的概念之一，它决定了元素在网页中的占位和布局

 - 盒子模型的组成：
     - 内容(content)
     - 内边距(padding)
     - 边框(border)
     - 外边距(margin)

### 盒子模型分类

#### 标准盒子

 - 标准盒子的宽度和高度只包含内容(content)

 - 语法：
     - IE6以上默认就是标准盒子
     - `box-sizing`: `content-box;`

 - 计算公式：
     - 盒子的宽度 = 左右内边距 + 左右边框 + 内容的宽度
     - 盒子的高度 = 上下内边距 + 上下边框 + 内容的高度

#### 怪异（也叫IE）盒子

 - 怪异盒子的宽度和高度包含了内容(content)、内边距(padding)和边框(border)

 - 语法：
     - IE6以下的浏览器：`box-sizing`: `border-box;`
     - IE6以上的浏览器：`-webkit-box-sizing`: `border-box;`

 - 除了margin，其他都包含，内空间满了实际尺寸就会变大
 - 计算公式：
     - 盒子的宽度 = 内容的宽度
     - 盒子的高度 = 内容的高度

 - 除了IE6以下的浏览器，其他浏览器都是标准盒子

### box-shadow

 - 盒子阴影

 - 参数：
     - 1和2分别是水平和垂直偏移量
     - 3 模糊半径
     - 4 阴影的尺寸
     - 5 阴影的颜色
     - 6 阴影的方向
         - inset表示内阴影
         - 默认是外阴影

 - 例子：
     - ```css
        .box_shadow_demo{
            width: 100px;
            height: 100px;
            background-color: pink;
            box-shadow: 10px 10px 10px 10px red inset;
        }
        ```
     - ```html
        <div class="box_shadow_demo"></div>
        ```

## 边框效果

### border-image

 - 边框图片

 - 参数：
     - 1 图片的路径
     - 2 图片的边框宽度
     - 3 图片的边框切割方式
         - stretch 拉伸
         - repeat 重复
         - round 平铺
     - 4 图片的边框切割方式
         - stretch 拉伸
         - repeat 重复
         - round 平铺

 - 例子：
     - ```css
        .border_image_demo{
            width: 100px;
            height: 100px;
            border: 10px solid transparent;
            border-image: url(../images/1.jpg) 10 round;
        }
        ```
     - ```html
        <div class="border_image_demo"></div>
        ```

#### border-image-slice

 - 边框图片切割值

#### border-image-repeat

 - 边框图片重复方式

 - 参数：
     - stretch 拉伸
     - repeat 重复
     - round 平铺

### border-radius

 - 边框圆角

 - 参数：
     - a 四角
     - a b 左上和右下,右上和左下
     - a b c 左上，右上和左下，右下
     - a b c d 左上，右上，右下，左下

 - 半圆高度是宽度的一半


## hsl&hsla颜色

### hsl

 - 一种颜色表示方式

 - 参数：
     - hsl(x,y,z)
     - x 色调 取值范围0-360
     - y 饱和度 取值范围0%-100%
     - z 亮度 取值范围0%-100%
     - 亮度是白色，饱和度是灰色

### hsla

 - 一种颜色表示方式

 - 参数：
     - hsla(x,y,z,a)
     - x 色调 取值范围0-360
     - y 饱和度 取值范围0%-100%
     - z 亮度 取值范围0%-100%
     - a 透明度 取值范围0%-1

## 背景效果

### 多背景图

 - 语法：
     - `background-image`: `url(../images/1.jpg)` `,` `url(../images/2.jpg);`

### background-position

 - 背景图片位置

 - 参数：
     - 1 水平方向
         - left
         - center
         - right
         - 百分比
         - 像素
     - 2 垂直方向
         - top
         - center
         - bottom
         - 百分比
         - 像素

 - 特定位置：
     - 0% 0% 左上角
     - 100% 100% 右下角
     - 50% 50% 中心点
     - top left 左上角
     - top right 右上角

 - 多点定位：
     - 用逗号隔开
     - 0% 0%, 100% 100% 左上角和右下角
     - top left, top right 左上角和右上角

### background-size

 - 背景图片尺寸

 - 参数：
     - 1 宽度
         - 百分比
         - 像素
         - auto
     - 2 高度
         - 百分比
         - 像素
         - auto
     - cover 按比例缩放，保证图片完全覆盖容器
     - contain 按比例缩放，保证图片完全显示在容器中

 - 多背景图大小
     - 用逗号隔开
     - 100px 100px, 200px 200px
     - 第一个高度100px，宽度100px，第二个高度200px，宽度200px

### background-chip

 - 背景图片裁剪

 - 参数：
     - border-box 裁剪到边框
     - padding-box 裁剪到内边距
     - content-box 裁剪到内容

### background-origin

 - 背景图片定位原点

 - 参数：
     - border-box 定位到边框
     - padding-box 定位到内边距
     - content-box 定位到内容

### background-clip

 - 背景图片裁剪

 - 参数：
     - text 裁剪到文字

 - 裁剪成文字区域：
     - 设置兼容写法
     - 属性text
     - 文字透明 color: transparent; 不能用opacity

### background-attachment

 - 背景图片固定

 - 参数：
     - fixed 固定
     - scroll 滚动

### 用例：

```css
    *{
        margin: 0;
        padding: 0;
    }
    h3{
        text-align: center;
        background: rgba(255, 192, 203, 0.822);
        color:rgb(255, 0, 0);
    }
    .box1{
        width: 600px;
        height: 400px;
        margin: 50px auto;
        background-color: rgba(255, 94, 0, 0.281);
        /* 多背景图片 使用多个url（）中间用逗号隔开 */
        background-image: url('../img/03.jpg'),url('../img/04.jpg');
        background-repeat: no-repeat;
        /* position 定位背景图片 */
        background-position: top left,right bottom;
        /* 多背景图大小，用逗号隔开 */
        background-size: 150px 100px,450px 300px;
    }
    .box2{
        width: 600px;
        height: 400px;
        margin: 50px auto;
        background-color: rgba(255, 94, 0, 0.281);
        /* 多背景图片 使用多个url（）中间用逗号隔开 */
        background-image: url('../img/01.jpg'),
        url('../img/02.jpg'),
        url('../img/03.jpg'),
        url('../img/04.jpg');
        background-repeat: no-repeat;
        /* position 定位背景图片 */
        background-position: left top,right top,right bottom,left bottom;
        background-size: 300px 200px,300px 200px,300px 200px,300px 200px;
    }
    .box3{
        width: 600px;
        height: 400px;
        margin: 50px auto;
        border: 10px dotted red;
        padding: 50px;
        background-color: rgba(255, 94, 0, 0.281);
        background-image: url('../img/01.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;   
        /* background-clip属性 作用：设置背景图片的裁剪区域 */
        /* 属性值 3个  border-box  padding-box content-box text*/
    }
    .box3:nth-child(1){
        /* 背景图片裁剪区域为边框区域 */
        background-clip: border-box;
    }
    .box3:nth-child(2){
        /* 背景图片裁剪区域为内边距区域 */
        background-clip: padding-box;
    }
    .box3:nth-child(3){
        /* 背景图片裁剪区域为内容区域 */
        background-clip: content-box;
    }
    .box3:nth-child(4){
        padding: none;
        /* 背景图片裁剪区域为文字区域 */
        -webkit-background-clip: text;
        background-clip: text;
        /* 文字颜色透明 */
        color: transparent;
        font-size: 100px;
        font-weight: bold;
        text-align: center;
        line-height: 400px;
    }
    .box4{
        width: 600px;
        height: 400px;
        margin: 50px auto;
        border: 10px dotted red;
        padding: 30px;
        background-color: rgba(255, 94, 0, 0.281);
        background-image: url('../img/03.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;   
        /* background-origin属性 作用：设置背景图片的定位区域 */
        /* 属性值 3个  border-box  padding-box content-box text*/
    }
    .box4:nth-child(1){
        /* 背景图片定位区域为边框区域 */
        background-origin: border-box;
    }
    .box4:nth-child(2){
        /* 背景图片定位区域为内边距区域 */
        background-origin: padding-box;
    }
    .box4:nth-child(3){
        /* 背景图片定位区域为内容区域 */
        background-origin: content-box;
    }
```

```html
<body>
    <h3>设置多背景图</h3>
    <div class="box1"></div>
    <div class="box2"></div>
    <h3>background-chip属性</h3>
    <div>
        <div class="box3"></div>
        <div class="box3"></div>
        <div class="box3"></div>
        <div class="box3">clip文字背景</div>            
    </div>
    <h3>background-origin属性</h3>
    <div>
        <div class="box4"></div>
        <div class="box4"></div>
        <div class="box4"></div>
    </div>
</body>
```


## 渐变效果

### 线性渐变

 - 从一个点的颜色向另一个点的颜色渐变，中间两种或多种颜色渐变

 - 默认从上到下渐变

 - 语法：
     - `background`:`linear-gradient(方向,颜色1,颜色2,颜色3...)`;

 - 添加多种颜色用逗号隔开
 - 颜色可以是rgb，rgba，hsl，hsla，十六进制，单词
 - 颜色后面的百分比表示颜色的位置，不写默认平均分配
 - `repeating-linear-gradient` 重复线性渐变

 - 参数：
     - 方向：
         - to top 从下到上
         - to bottom 从上到下
         - to left 从右到左
         - to right 从左到右
         - to top left 从右下到左上
         - to top right 从左下到右上
         - to bottom left 从右上到左下
         - to bottom right 从左上到右下
         - 45deg 从左上到右下
         - 135deg 从右上到左下
         - 225deg 从左下到右上
         - 315deg 从右下到左上
     - 颜色：
         - rgb，rgba，hsl，hsla，十六进制，单词

 - 写法例：
     - ```css
        background: linear-gradient(red, blue, pink, orangered, hsl(120, 100%, 50%));
        background: linear-gradient(deepskyblue 20%, orangered 50%);
        background: linear-gradient(to right top, deepskyblue, orangered);
        background: repeating-linear-gradient(rgba(255, 0, 123, 0.677) 0%,rgb(43, 255, 0) 30%);
     ```

### 径向渐变

 - 从一个点的颜色向四周发生过渡的渐变，默认为椭圆

 - 语法：
     - `background`:`radial-gradient(形状,颜色1,颜色2,颜色3...)`;

 - `repeating-radial-gradient` 重复径向渐变

 - 参数：
     - 形状：
         - circle 圆形
         - ellipse 椭圆形
         - 涉及到圆心位置，必须用兼容性三种写法
             - px
             - 百分比
             - 关键字
                 - center
                 - top
                 - bottom
                 - left
                 - right
                 - top left
                 - top right
                 - bottom left
                 - bottom right
         - 控制径向渐变圆的尺寸大小 写在渐变形状后面
             - closest-side 以最近边为半径
             - closest-corner 以最近边为直径
             - farthest-side 以最远边为半径
             - farthest-corner 以最远边为直径
     - 颜色：
         - rgb，rgba，hsl，hsla，十六进制，单词

 - 写法例：
     - ```css
        background: radial-gradient(rgb(0, 255, 60) 20%, rgb(255, 0, 0));
        background: radial-gradient(circle, rgb(0, 255, 34), rgb(255, 0, 72));
        background: -webkit-radial-gradient(right center, circle, rgb(255, 132, 0), rgb(0, 149, 255));
        background: -webkit-radial-gradient(50px 50px, circle farthest-corner, black, white);
        background: repeating-radial-gradient(deeppink 0%, deepskyblue 20%);
        ```

### 圆锥渐变

 - 类似线性渐变，但是渐变方向是圆锥形，像一个指针画圆

 - 语法：
     - `background`:`conic-gradient(方向,颜色1,颜色2,颜色3...)`;

 - 其他属性和其他渐变基本通用

### clip和饼图例：
```css
    .demo{
        width: 100%;
        height: 320px;
        margin: 30px auto;
    }
    .demo1{
        width: 200px;
        height: 200px;
        float: left;
        margin-top: 20px;
        margin-right: 20px;
    }
    .demo1:nth-child(2){
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        background: linear-gradient(
            /* 从左下角到右上角 */
            to right top,
            rgba(215, 204, 204, 0.3) 20%,
            rgba(180, 169, 169, 0.5) 40%,
            rgba(138, 123, 123, 0.5) 60%,
            rgba(55, 48, 48, 0.5) 80%,
            rgba(31, 22, 22, 0.8) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    .demo1:nth-child(3){
        border-radius: 50%;
        background: conic-gradient(
            pink 0%, pink 33%,
            deepskyblue 33%, deepskyblue 66%,
            orangered 66%, orangered 100%
        );
    }
```
```html
<div class="demo">
    <h3>
        练习 <br>
        clip和饼图
    </h3>
    <div class="demo1">
        clip
    </div>
    <div class="demo1"></div>
</div>
```

## flex布局

 - display:flex;
 - 弹性布局原理：
     - 在父级中设置flex，来控制一级子元素的位置和排列方式


### 父元素属性

 - 主轴：里面的子元素会按照主轴的方向排列
     - 主轴的方向：
         - 默认是水平方向
         - 行
             - `row`
             - `row-reverse`
         - 列
             - `column`
             - `column-reverse`

#### flex-direction

 - 主轴的方向

 - 语法：`flex-direction`:`row | row-reverse | column | column-reverse;`;

 - 参数：
     - row 默认值，水平向右
     - row-reverse 水平向左，从右到左
     - column 垂直向下
     - column-reverse 垂直向上，从下到上

#### flex-wrap

 - 子元素是否换行

 - 语法：`flex-wrap`:`nowrap | wrap | wrap-reverse;`;

 - 参数：
     - nowrap 默认值，不换行
     - wrap 换行
     - wrap-reverse 换行，从下到上

#### justify-content

 - 主轴上的对齐方式

 - 语法：`justify-content`:`flex-start | flex-end | center | space-between | space-around;`;

 - 参数：
     - flex-start 默认值, 左对齐, 子元素在主轴的起始位置进行排列
     - flex-end 右对齐, 子元素在主轴结束位置排列
     - center 居中对齐, 子元素在主轴中间位置排列
     - space-between 
         - 两端对齐，中间间隔相等
         - 先将第一个子元素放到主轴的flex-start位置
         - 再将最后一个子元素放到主轴的flex-end位置
         - 剩下的子元素平分剩余空间 ( 它们的左右(row) 或者 上下(column) margin是相等的)
     - space-around 
         - 两端对齐，中间间隔相等，两边间隔是中间间隔的一半
         - 就是平分剩余空间 所有子元素margin值相等

#### align-items

 - 交叉轴的对齐方式

 - 语法：`align-items`:`flex-start | flex-end | center | baseline | stretch;`;

 - 参数：
     - flex-start 默认值, 交叉轴的起始位置
     - flex-end 交叉轴的结束位置
     - center 交叉轴的中间位置
     - baseline 项目的第一行文字的基线
     - stretch 默认值，如果项目未设置高度或设为auto，将占满整个容器的高度

#### align-content

 - 多行交叉轴的对齐方式

 - 语法：`align-content`:`flex-start | flex-end | center | space-between | space-around | stretch;`;

 - 参数：
     - flex-start 交叉轴的起始位置
     - flex-end 交叉轴的结束位置
     - center 交叉轴的中间位置
     - space-between 
         - 与交叉轴两端对齐，轴线之间的间隔平均分布
         - 将第一个子元素放到交叉轴的起始位置
     - space-around 
         - 每根轴线两侧的间隔都相等
         - 就是平分剩余空间 所有子元素margin值是相等的
     - stretch 
         - 默认值，轴线占满整个交叉轴
         - 将子元素的高度拉伸到和父元素一样高

#### 区分align-content和align-items(如何让align-content生效)

 - flex-wrap: nowrap; 时，align-content: stretch; 无效果
 - flex-wrap: wrap; 时，align-content: stretch; 有效果
 - 父元素高度为固定值（不能设置height:auto）

#### 案例文件

 - [案例文件](../study-codefile/new/Code/CSS3/code/8.1.flex布局-父元素属性.html)

### 子元素属性

#### flex

 - 子元素的伸缩比例
 - 把父元素剩余空间进行平分
 - 子元素占父元素几分之几
 - 当主轴为水平方向时，width属性无效
 - 当主轴为垂直方向时，height属性无效

 - 语法：`flex`:`num`;


#### flex-grow

 - 子元素的伸缩比例
 - 会保留子元素的原始尺寸
 - 计算公式：
     - 原有尺寸+（父容器-所有子元素占有的空间）x 子元素占父元素得几分之几

 - 语法：`flex-grow`:`num`;

#### order

 - 子元素的排列顺序
 - 默认值为0
 - 值越小越靠前，支持负数

 - 语法：`order`:`num`;

#### align-self

 - 子元素的对齐方式
 - 会覆盖父元素的align-items属性

 - 语法：`align-self`:`flex-start | flex-end | center | baseline | stretch;`;

 - 参数：
     - flex-start 默认值, 交叉轴的起始位置
     - flex-end 交叉轴的结束位置
     - center 交叉轴的中间位置
     - baseline 项目的第一行文字的基线
     - stretch 默认值，如果项目未设置高度或设为auto，将占满整个容器的高度

#### 案例文件

 - [案例文件](../study-codefile/new/Code/CSS3/code/8.2.flex布局-子元素上的属性.html)

### 布局案例

 - [案例文件](../study-codefile/new/TEST/八月月考/第一题响应式.html)


## 过渡效果

### transition-property

 - 过渡属性

 - 语法：`transition-property`:`all | none | property;`;

 - 参数：
     - all 所有属性
     - none 没有属性
     - property 属性名

### transition-duration 

 - 过渡时间

 - 语法：`transition-duration`:`time;`;

 - 参数：
     - time 时间

### transition-timing-function

 - 过渡速度曲线

 - 语法：`transition-timing-function`:`linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n);`;

 - 参数：
     - linear 匀速
     - ease 慢速开始，然后变快，然后慢速结束
     - ease-in 慢速开始
     - ease-out 慢速结束
     - ease-in-out 慢速开始和结束
     - cubic-bezier(n,n,n,n) 贝塞尔曲线

### transition-delay

 - 过渡延迟

 - 语法：`transition-delay`:`time;`;

 - 参数：
     - time 时间

### transition

 - 过渡

 - 语法：`transition`:`property duration timing-function delay;`;

 - 参数：
     - property 过渡属性
     - duration 过渡时间
     - timing-function 过渡速度曲线
     - delay 过渡延迟


## 转换

### transform-origin

 - 转换原点

 - 语法：`transform-origin`:`x y z;`;

 - 参数：
     - x 水平方向
         - 百分比
         - 像素
         - 关键字
             - left
             - center
             - right
     - y 垂直方向
         - 百分比
         - 像素
         - 关键字
             - top
             - center
             - bottom
     - z 深度方向 , 3D转换才有用
         - 百分比
         - 像素
         - 关键字
             - center
             - length
             - initial
             - inherit

### transform

 - 转换

 - 语法：`transform`:`none | transform-functions;`;

 - 参数：
     - none 默认值
     - transform-functions 转换函数
         - translate(x,y) 平移
             - x 水平方向
                 - 百分比
                 - 像素
             - y 垂直方向
                 - 百分比
                 - 像素
         - translateX(x) 水平方向平移
             - x 水平方向
                 - 百分比
                 - 像素
         - translateY(y) 垂直方向平移
             - y 垂直方向
                 - 百分比
                 - 像素
         - translateZ(z) 深度方向平移
             - z 深度方向
                 - 百分比
                 - 像素
         - scale(x,y) 缩放
             - x 水平方向
                 - 百分比
                 - 像素
             - y 垂直方向
                 - 百分比
                 - 像素
         - scaleX(x) 水平方向缩放
             - x 水平方向
                 - 百分比
                 - 像素
         - scaleY(y) 垂直方向缩放
             - y 垂直方向
                 - 百分比
                 - 像素
         - scaleZ(z) 深度方向缩放
             - z 深度方向
                 - 百分比
                 - 像素
         - rotate(angle) 旋转
             - angle 角度
                 - deg
                 - rad
                 - grad
                 - turn
         - rotateX(angle) 水平方向旋转
             - angle 角度
                 - deg
                 - rad
                 - grad
                 - turn
         - rotateY(angle) 垂直方向旋转
             - angle 角度
                 - deg
                 - rad
                 - grad
                 - turn

## 动画

### animation-name

 - 动画名称

 - 语法：`animation-name`:`none | keyframes-name;`;

 - 参数：
     - none 默认值
     - keyframes-name 关键帧名称

### animation-duration

 - 动画持续时间

 - 语法：`animation-duration`:`time;`;

 - 参数：
     - time 时间

### animation-timing-function

 - 动画速度曲线

 - 语法：`animation-timing-function`:`linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n);`;

 - 参数：
     - linear 匀速
     - ease 慢速开始，然后变快，然后慢速结束
     - ease-in 慢速开始
     - ease-out 慢速结束
     - ease-in-out 慢速开始和结束
     - cubic-bezier(n,n,n,n) 贝塞尔曲线

### animation-delay

 - 动画延迟

 - 语法：`animation-delay`:`time;`;

 - 参数：
     - time 时间

### animation-iteration-count

 - 动画播放次数

 - 语法：`animation-iteration-count`:`num | infinite;`;

 - 参数：
     - num 次数
     - infinite 无限次

### animation-direction

 - 动画方向(播放顺序)

 - 语法：`animation-direction`:`normal | reverse | alternate | alternate-reverse;`;
 - 参数：
     - normal 默认值，正常播放
     - reverse 反向播放
     - alternate 从 0% ---> 100% 动画在奇数次播放时，按照正常的顺序播放，偶数次播放时，按照反向的顺序播放
     - alternate-reverse 从 100% ---> 0% 动画在奇数次播放时，按照反方向播放，偶数次播放时，按照正常的顺序播放


### animation-play-state

 - 动画播放状态

 - 语法：`animation-play-state`:`running | paused;`;

 - 参数：
     - running 默认值，播放
     - paused 暂停

### animation-fill-mode

 - 动画填充模式

 - 语法：`animation-fill-mode`:`none | forwards | backwards | both;`;

 - 参数：
     - none 默认值，不填充
     - forwards 动画结束后，保持最后一帧的状态
     - backwards 动画开始前，保持第一帧的状态
     - both 动画结束后，保持最后一帧的状态，动画开始前，保持第一帧的状态

### animation

 - 动画

 - 语法：`animation`:`name duration timing-function delay iteration-count direction fill-mode;`;

 - 参数：
     - name 动画名称
     - duration 动画持续时间
     - timing-function 动画速度曲线
     - delay 动画延迟
     - iteration-count 动画播放次数
     - direction 动画方向(播放顺序)
     - fill-mode 动画填充模式

### 动画案例

 - [案例文件](../study-codefile/new/Code/CSS3/code/12.动画案例.html)

## 3D转换

### perspective

 - 透视
 - 景深/透视：是指屏幕到眼睛（电脑模拟）的距离，模拟人类的眼睛观察
 - 属性就是眼睛到屏幕的距离
 - 一般设置在父元素上

 - 语法：`perspective`:`length;`;

 - 参数：
     - length 透视距离
         - 百分比
         - 像素

### perspective-origin

 - 透视原点


 - 语法：`perspective-origin`:`x y;`;

 - 参数：
     - x 水平方向
         - 百分比
         - 像素
         - 关键字
             - left
             - center
             - right
     - y 垂直方向
         - 百分比
         - 像素
         - 关键字
             - top
             - center
             - bottom

### transform-style

 - 转换样式

 - 语法：`transform-style`:`flat | preserve-3d;`;

 - 参数：
     - flat 默认值，子元素不保留3D效果
     - preserve-3d 子元素保留3D效果

### backface-visibility

 - 背面可见性

 - 语法：`backface-visibility`:`visible | hidden;`;

 - 参数：
     - visible 默认值，背面可见
     - hidden 背面不可见

### 3D转换案例

 - [案例文件](../study-codefile/new/Code/CSS3/code/14.3d转换案例.html)

## 媒体查询

### 媒体查询

 - 语法：`@media`:`media-type and (media-feature-rule){css-code;}`;

 - 参数：
     - media-type 媒体类型
         - all 所有设备
         - print 打印机
         - screen 屏幕
         - speech 屏幕阅读器
     - media-feature-rule 媒体特性规则
         - and 与
         - not 非
         - only 仅
         - , 或
     - css-code css代码

### 三种引入方式

 - link标签 media属性
 - style标签 @media 
 - style标签 @import url()
     - @import 要写在style标签的最上面

### 书写顺序问题

 - 一般情况下，媒体查询写在最后面
 - 如果写在前面，后面的样式会覆盖前面的样式
 - max-width 属性值从大到小去写
 - min-width 属性值从小到大去写

### 媒体特性规则

 - width 宽度
 - height 高度
 - device-width 设备宽度
 - device-height 设备高度
 - orientation 方向
     - portrait 竖屏
     - landscape 横屏
 - aspect-ratio 宽高比
 - device-aspect-ratio 设备宽高比
 - color 颜色
 - color-index 颜色索引
 - monochrome 单色
 - resolution 分辨率
 - scan 扫描方式
     - progressive 逐行扫描
     - interlace 隔行扫描
 - grid 网格
 - update-frequency 更新频率
 - overflow-block 垂直方向溢出
 - overflow-inline 水平方向溢出

### css代码例

```css
<style>
    @import url(media-demo2.css) screen and (min-width: 900px) and (max-width: 950px);
    *{
        margin: 0;
        padding: 0;
    }
    div{
        width: 300px;
        height: 300px;
        margin: 100px auto;
        text-align: center;
        line-height: 300px;
        font-size: 30px;
        color: white;
        font-weight: bold;
        transition: all 1s linear;
    }
    
    @media screen and (max-width: 900px) {
        .demo3{
            background: linear-gradient(pink 20%, skyblue 30%, deeppink 50%);
        }
    }
</style>
<body>
    <div class="demo1">由link标签引入</div>
    <div class="demo2">由@import标签引入</div>
    <div class="demo3">由@media引入</div>
</body>

```

### 媒体查询案例

 - [案例文件](../study-codefile/new/TEST/八月月考/第一题响应式.html)