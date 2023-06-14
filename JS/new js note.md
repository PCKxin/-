## W3C HTML DOM标准

 - 整个文档是一个文档节点
 - 每个HTML元素是一个元素节点
 - HTML元素内文本是文本节点
 - HTML属性是属性节点

### DOM树能干什么

 - 1.JavaScript 能够改变页面中的所有HTML元素
 - 2.JavaScript 能够改变页面中的所有HTML属性
 - 3.JavaScript 能够改变页面中的所有CSS样式
 - 4.JavaScript 能对页面中所有事件作出反应

## 简介&特点&作用

```markdown
### 简介
`JavaScript`是由美国网景通信公司开发的一种跨平台网页，面向对象`object-oriented`网页脚本语言

`JavaScript`代码可以直接嵌入HTML文件中，随着网页一起传送到客户端浏览器，然后通过浏览器来解释执行

JS是前端开发的的核心语言，基于事件和驱动的解释性，松散型语言

JS的解释性，松散型理解？

    1. 解释性：边执行边解释，在浏览器环境下运行
    2. 松散型：定义变量的时候，不需要强类型，直接弱类型，定义的变量不需要声明类型

---------------------------------------------------------

### 特点

    1. 脚本编写语言
    2. 基于对象
        可以被看作是一种面向对象的语言，这意味着JavaScript能运用其已经创建的对象。因此，许多功能可以来自于脚本环境中对象的方法与脚本的相互作用
    3. 跨平台性
    4. 事件驱动
    5. 简单弱类型
        JavaScript是一种基于Java基本语句和控制流之上的简单而紧凑的设计
        变量类型是采用弱类型，并未使用严格的数据类型
    6. 解释性执行
        不像这些语言需要先编译，而是在程序运行过程中被逐行地解释

---------------------------------------------------------

### 作用

    1. 实现动态页面(将动态内容添加到页面中)
    2. 数据验证
    3. 响应事件
    4. 可以检测浏览器

---------------------------------------------------------
```

## JS组成

ECMAScript - 描述了该语言的语法和核心

BOM - 浏览器对象模型

DOM - 文档对象模型, 描述与浏览器进行交互的方法和接口

----

## 引入方式

 - 内部: `<script> </script>`
 - 行内: `<div onclick="alert('')"></div>`
 - 外部: `<script type="text/javascript" src="path">`

----

## 关键字

`关键字`: 已经具有一定功能的词语

`保留字`: JS保留的，可能会在将来使用成关键字的词语

var 变量名 = "属性值";

### 关键字
 - break //中断,跳出循环
 - case //条件,分支
 - catch //捕获,异常处理
 - continue //继续,跳出循环
 - debugger //调试,调试器
 - default //默认,分支
 - delete //删除,删除属性
 - do //循环,循环体
 - else //条件,分支
 - finally //最终,异常处理
 - for //循环,循环体
 - function //函数,函数体
 - if //条件,分支
 - in //在...中,遍历
 - instanceof //实例,判断
 - new //新建,创建对象
 - return //返回 ,返回值
 - switch //条件,分支
 - this //当前对象 ,当前对象
 - throw //抛出 ,抛出异常
 - try //尝试 ,异常处理
 - typeof //类型  ,判断类型
 - var //变量 ,声明变量
 - void //空 ,空操作
 - while //循环 ,循环体
 - with //使用 ,使用对象

----

## 语句

### 输出语句

 - 页面输出语句:
```js
document.write();   // 直接写在页面上
document.writeln(); // 写完屁股带个空格
document.write("可以写标签")
```
 - 控制台输出:
```js
console.log();
```

---

## 变量

 - 存储作用

四种:
 - 声明变量的同时直接赋值
 - 先声明，后赋值
 - 只声明，不赋值
 - 不声明，直接赋值(尽量PASS)

示例:
```js
var 变量名;

var 变量名 = "赋值";

var [变量名1, 变量名2] = [赋值1, 赋值2];

var 变量名 = prompt("提示词");

//不声明直接赋值
变量名 = 赋值;  //相当于window.变量名 = 赋值; //全局变量
```

### 局部变量

 - 函数内声明的变量
 - 只能用于此函数内部
 - 具有局部作用域


### 全局变量

 - 在函数外创建的变量
 - 脚本内可调用
 - 具有全局作用域

### 变量的生命周期

 - 局部变量：当前函数结束，变量被释放
 - 全局变量：关闭当前脚本，变量被释放

### 作用域链

 - 从当前函数中查找变量，如果没有向上一层作用域中查找，直到找到全局变量
 - 这个查找过程称为作用域链

### 变量声明提前

 - js默认将变量声明提前
 - 如果先执行输出语句，在输出语句后在声明变量
     - 执行过程为：先声明变量，再执行输出语句，再给变量赋值
     - 因此，第一个输出语句不报错，输出值为undefined

 - 例：
```js
console.log(a); //输出：undefined

var a = 10;
console.log(a); //输出：10

/*

js内部执行

var a;
console.log(a);  // undefined
a = 10;
console.log(a);  // 10

*/
```

----

## 特殊类型 NaN, Infinity
 - NaN(not a number)
     - NaN(not a number) 非数字的数值类型

 - Infinity
     - Infinity  无穷大(正无穷)
     - -Infinity 无穷小(负无穷)

示例：

```js
console.log(0 / 0);  //NaN
console.log(4 / 0);  //infinity
console.log(-4 / 0); //-infinity
```

----

## 数据类型

 - number 数值类型

     - 包括整数和浮点数

 - string  字符串类型

     - 用单引号或双引号括起来的零个或多个单一的字符所组成

 - boollean 布尔类型

     - 取值为true （1） 和 false （0）

 - undefined  未定义值
  
 - null 空类型

     - null取值只有null

 - object 对象
     - 引用型

### 数据类型 检测&验证&转换
 - typeof //检测类型
     - 用法：console.log(typeof 验证对象);

 - isNaN()  //验证是否为 非数字(其他类型)
     - 用法：console.log( isNaN(验证对象) ); 

======

 - .toString()  //转换字符串
     - 用法：转换对象.toString();
     - 不能转换null和undefined

 - String() //转换字符串
     - 用法：String(转换对象);
     - 啥类型都转

 - 内容与空字符串拼接，可对其他所有类型进行转换字符串
     - 用法：转换对象 + ""

======

 - Boolean() //强转布尔类型
     - 用法：Boolean(转换对象);

======

 - Number() //转数值，任何类型都可
     - 用法：Number(转换对象)
 - parseInt() //转整数, 只对字符串起作用 
     - 用法：parseInt(转换对象)
     - 不能转布尔类型和null
 - parseFloat() //转浮点数, 只对字符串起作用
     - 用法：parseFloat(转换对象)
     - 不能转布尔类型和null
 - .toFixed()  //保留小数点位数
     - 用法：处理对象.toFixed(位数)

 - 转换数值类型, 奇妙方法
     - 转换对象 * 1
         - 例子：console.log(typeof ( 转换对象 * 1 ));
     - +转换对象
         - 例子：console.log(typeof ( +str2 ));

----

## 运算符

### 算数运算符

 - `+` 加
     - 数值计算，字符串拼接

 - `-` 减
     - 数值计算，字符串是纯数字做计算，是字符输出NaN

 - `*` 乘
     - 小数与小数相乘时，需要分别扩大倍数，结果缩小总倍数
     - 小数例：console.log((0.2 * 100) * (0.2 * 100) / 10000); 输出：0.04
     - 交互时用这种很不错 (a * 100) * (b * 100) / 10000

 - `/` 除
     - 第二个数字不能为0
     - 正数除0情况：console.log输出 Infinity 正无穷
     - 负数除0情况：console.log输出 Infinity 负无穷

 - `%` 取模取余
     - 取余的第二个数字也不能为0
     - 是的情况，console.log输出 NaN

 - `++` 自增

 - `--` 自减


#### 自增 & 自减

##### ++在后

 - i先将自身的值赋值给变量a , 然后再自增1 

```js
变量设为i

var i = 1;
var a = i++;  

console.log(a); //输出1
console.log(i); //输出2
                // ++在后，先计算表达式，再给i自加1
```

##### ++在前

 - ++在前，先给自身加1，再计算表达式

```js
变量设为i

var i = 1;
var a = ++i; // i先将自身的值加1，再将自增后的值赋值给变量a

console.log(a); //输出2
console.log(i); //输出2

```

##### --在后

 - --在后，先计算表达式，再给i自身减1

```js
变量设为i

var i = 4;
var a = i--;  // i先将自身的值赋值给变量a，然后再自减1

console.log(a); // 输出4
console.log(i); // 输出3

```


##### --在前

 - --在前，先给自身减1，再计算表达式

```js
变量设为i

var i = 4;
var a = --i;  // i现将自身的值自减1，再将自减后的值赋值给变量a

console.log(a);  //输出3
console.log(i);  //输出3

```


### 关系运算符

 - `>` 大于

 - `<` 小于

 - `>=` 大于等于

 - `<=` 小于等于

 - `=` 赋值

 - `==` 等于

 - `!=` 不等于

 - `===` 全等 比较值和类型是否都相等

 - `!==` 不全等 同上

### 逻辑运算符

 - `&&` 逻辑与 运算 也叫 短路与 运算
     - 多条件都满足 输出

 - `||` 逻辑或 运算 也叫 短路或 运算
     - 满足所有条件之一 输出

 - `!` 逻辑非运算

### 位运算符

 - `&` 按位与 运算
     - 数值二进制化运算(对应位都为1 输出1 否则为0)
     - 例：3 & 5 = 1
     - 二进制化：0011 & 0101 = 0001

 - `|` 按位或 运算
     - 数值二进制化运算(对应位其一为1 输出1 否则为0)
     - 例：3 & 5 = 7
     - 二进制化：0011 & 0101 = 0111

 - `^` 按位异或 运算
     - 数值二进制化运算(对应位相同为0 输出0 否则为1)
     - 例：3 ^ 5 = 6
     - 二进制化：0011 & 0101 = 0110

 - `~` 按位非 运算
     - 数值二进制化运算(对应位 0变1 1变0)
     - 就是数字加一并取反
     - 例：~3 = -4
     - 二进制化：32位补全，反过来，在反过去

 - `<<` 左移
     - 数值二进制化运算 二进制值右边填0数量为被操作数
     - 就是操作数乘上2的指数（值为被操作数）
     - 例：3 << 2 = 3 * (2 * 2) = 12
     - 二进制：0011 填0后 = 001100
     - 例：5 << 7 = 5 * (2 * 2 * 2 * 2 * 2 * 2 * 2) = 256

 - `>>` 右移
     - 数值二进制化运算 二进制值左边移动数量为被操作数
     - 就是操作数除(取模)2的指数（值为被操作数）保持正负号
     - 小数变0, 负小数进一取整如 -0.12 = -1 ，-1.22 = -2
     - 例：-12 >> 2 = -3
     - 例：3 >> 2 = 0
     - 例：-3 >> 2 = -1

 - `>>>` 无符号右移
     - 数值二进制化运算 无符右移动 忽略正负号
     - 就是操作数左边补0 忽略正负号
     - 例：-12 >>> 2 = 1073741820
     - 二进制：-12 = 1111111111111111111111111111111110001100
     - 额现阶段不太理解，后续更改吧


### 三元运算符(三目运算符)

跟if else效果差不多

 - 语法：
     - 判断条件 ? 执行语句1 : 执行语句2
     - 结果为真执行? 后语句1
     - 结果为假执行: 后语句2
     - 多条件可以换行写，但是行尾不要加分号

 - 案例：

```js
    /* 
        如果是绿灯，执行过马路；
        如果是红灯，执行等信号等；
        如果是黄灯，执行提高警惕；
        
    */

    var light == parmpt("啥灯");
    light == "绿灯" ? console.log("过马路") 
    : light == "红灯"? console.log("等信号灯") //冒号链接符放前面看着舒服点，咋放都行
    : light == "黄灯" ? console.log("提高警惕") 
    : console.log("信号灯有误");

```
 - 案例2：

```js
    /* 
        使用三元运算符判断
        手动输入成绩
        考试成绩大于60，显示及格
        否则显示继续努力
    */

    var score = prompt("your score") * 1; //隐式数值转换
    score > 60 ? console.log("Clear") : console.log("NO");

```

---

## 条件语句

### if...else if...else

```js
//单分支结构语句
if(判断条件){

}

-----
//双分支结构语句
if(判断条件){

} else{

}

-----
//多分支结构语句
if(){

}else if(){

} else{
    
}


```

### switch语句

 - case 常量 : //表示不同情况

 - 表达式的结果等于哪个case的常量，则执行其后的语句，执行完break就跳出switch结构，都不满足则执行default的语句。
 - switch 用的是全等比较

 - 语法：
```js
    switch(表达式){
        case 常量1 :
            语句;
            break;
        case 常量2 :
            语句;
            break;
        ···
        case 常量n :
            语句;
            break;
        default:
            语句;
            break;
    }

//也可以--
    switch(){
        case 常量1:
        case 常量2:
        case 常量3:
            语句;
            break;
        case 常量4:
            语句;
            break;
    }

```

---

## 循环 

### while语句

 - 循环结果为true，就继续，直到false
 - 人话：满足条件就停止
 - 持久循环使用这个
 - 下面迭代条件语法位置顺序要写对，🐎蛋写错了会把内存撑爆

 - 语法：
```js
while(循环条件){
    //循环体
    //统计次数, 从零开始（可有可无）
    //迭代条件 ++ --
}

-------------
//例：
//打印10次OK 循环从0开始
var i = 0
while(i < 10){
    console.log("OK");
    count++ ; //统计次数，从零开始（可有可无）
    i++ ;     //迭代条件
}

```

 - 死循环写法:
 - 没差啥条件为true而已
```js
/*案例：
    银行存款有5万元
    利息是0.73%
    几年后能到11万
*/

var money = 5000;
var year = 0;

while(true){
    money = money + money * 0.0073 ;
    year++ ; //循环一次 年份加一
    if(money >= 110000){
        break; //true 终止操作-
    }
}
console.log(year + "年可达11万元")

```

### do-while 语句

 - 与while循环区别，这个是先循环后判断 ，至少会跑一次
     - 也就是说不满足跑一次

 - 语法:

```js
do {
    //循环体
    //迭代条件 ++ --
}while(循环条件)

```

### for循环

 - 语法: 

```js 
//执行顺序 1(初始变量) 2(循环条件) 3(循环体) 4(迭代条件)
for (初始变量; 循环条件; 迭代条件){  
    //循环体
}

```

### for in 循环

 - 一般用在列表
 - 语法：

```js

//一般用在列表

var list = [1,2,3,4];

for (var a in list){
    //循环体
}

```

### 区别

#### while 和 do-while 区别

 - while 先判断，后执行
 - do-while 先执行，后判断

 - while循环和 do while循环当while后面的表达式的第一次的值为“真”时
     - 两种循环得到的结果相同；否则不相同。

#### for 和 while 区别

 - while是多用于不知道循环次数的时候使用
 - for是多用于已知循环次数的时候使用

#### for 和 for in 区别

 - 用for 循环遍历数组，会保留空的位置，空位置值为undefined
 - for in 遍历数组，空的位置会去掉

---

## break和continue的区别

 - break  结束整个循环 执行循环后的语句

 - continue  结束本次循环 继续下一次循环


----

## 函数

 - 定义：可重复调用的代码块


 - 普通函数：
     - 没用特殊要求时，可以用普通参数
 - 带参函数：
     - 具体值不定时，使用带参函数
         - 形参: 函数体内的参数，如果实参传入少于形参，多出来的形参值为undefined
             - 例: 
                ```js
                function name(形参1, 形参2, 形参3){
                    console.log(形参1 +","+ 形参2 +","+ 形参3);
                }
                name(实参1, 实参2)

                //输出
                实参1,实参2,undefined
                ```

         - 实参: 调用时传入的参数, 当实参多于形参，多的部分会自动去掉，跟没识别差不多
         - 传参: 将实参对位传递给形参的过程
  
 - 语法:
```js

function name(参数){
    函数体;
}

 - 参数也可以是  其他类型  只要有值

//expmale：

function name(a,b){
    函数体
}

//use

name( 1 + 1, prompt("???"))
//传入时注意参数类型是否满足函数体执行

```

### return语句

 - 作用：返回函数值,并停止当前函数执行
 - 注：
     - 任何函数都有自己的返回结果，没有return的函数，返回值为undefined
     - 一个函数内，不能同时执行多个return，在条件语句中可以

例：
```js

//定义一个函数，循环判断是否为闰年，循环范围为传参输入

var s = prompt("请输入从哪年开始统计") * 1;
var e = prompt("请输入到哪年结束") * 1;
var count = 0;
function fn(a , b) {
    for(var i = a; i <= b; i++) {
        if (i % 400 == 0 || (i % 4 ==0 && i % 100 !=0)) {
            count++;
        }
    }
    return count; //返回闰年年号
}
var res = fn( s , e ) ;
console.log(res);


```

----

## 数组

 - 定义：值的有序集合，每个值都叫一个元素，位置由索引表示
 - 数组是继承对象的类型
 - 数组长度是动态的（可以修改）
 - 当数组长度比实际元素多，多出来的值为undefined
 - 当数组长度比实际元素少，多出来的元素被截掉

### 字面量创建（直接写）

 - 其实就是直接写列表

 - 例：
```js
var arr = [1,2,3]
```

### 构造法创建（类似创建函数）

 - 类似创建函数
 - new Array();
     - 如果括号里面只有一个数字，那么那个数字表示为数组长度


 - 语法&例：
```js
//1.空数组
var arr1 = new Array();
console.log(arr1); //输出：[]

//2.带有元素的数组
var arr2 = new Array("啦啦","哈哈",1,2,3);
console.log(arr2); //输出：['啦啦', '哈哈', 1, 2, 3]

//3.如果只写一个数字，表示长度为几的空数组
var arr3 = new Array(5);
console.log();  //输出：[ null x 5 ]

```

### 两种方法的区别

 - 没有特殊要求用字面量法就可以
 - 如果有要求，就用构造函数方法创建（创建长度为几的空数组）




### 数组的方法

 - 对象属性调用方法：
     - 对象名.属性名
     - 对象名["属性名"]

#### length方法
 - 作用：获取数组长度
 - 返回值：数组长度
 - 参数：无
 - 语法：
```js
var arr = [1,2,3,4,5];
console.log(arr.length); //输出5

//当数组长度比实际元素多，多出来的值为undefined
//当数组长度比实际元素少，多出来的元素被截掉

arr.length = 3;
console.log(arr); //输出：[1,2,3]
```

 - for循环遍历数组：
```js
var arr = ['a','b','c','d','e','f','g'];

for(var i = 0; i < arr.length; i++){
    console.log(arr[i]) // 挨个输出了一遍
}
```

#### push方法
 - 作用：在数组末尾添加元素,一个或多个
 - 返回值：添加后的数组长度
 - 参数：要添加的元素
 - 注意：原数组改变
 - 语法：
```js
//添加一个
var arr = [1,2,3,4,5];
var res = arr.push(6) //输出：[1, 2, 3, 4, 5, 6]
console.log(res) //返回值：6
console.log(arr)

//添加多个
var arr2 = [1,2,3,4,5];
arr2.push("haha",1,2,"小雪")
console.log(arr2) // 输出：[1, 2, 3, 4, 5, "haha", 1, 2, "小雪"]
```

#### pop方法
 - 作用：删除数组最后一个元素
 - 返回值：删除的元素
 - 参数：无
 - 注意：原数组改变，数组为空时返回undefined
 - 语法：
```js
var arr = [1,2,3,4,5];
var res = arr.pop();
console.log(res); //输出：5
console.log(arr); //输出：[1, 2, 3, 4]
```

#### unshift方法
 - 作用：在数组开头添加元素，一个或多个
 - 返回值：添加后的数组长度
 - 参数：添加的元素
 - 注意：原数组改变
 - 语法：
```js
var arr = [1,2,3,4,5];
arr.unshift(0); 
arr.unshift("小雪"); 
console.log(arr); //输出：["小雪", 0, 1, 2, 3, 4, 5]
```

#### shift方法
 - 作用：删除数组第一个元素
 - 返回值：删除的元素
 - 参数：无
 - 注意：原数组改变
 - 语法：
```js
var arr = [1,2,3,4,5];
arr.shift();
console.log(arr); //输出；[2, 3, 4, 5]
```

#### join方法
 - 作用：将数组转换成字符串
 - 参数：
     - 第一个参数：指定符号，用来拼接数组元素，默认为逗号
     - 第二个参数：开始拼接的索引位置
     - 第三个参数：结束拼接的位置
 - 返回值：拼接后的字符串
 - 注意：原数组不变
 - 语法：
```js
var arr = [1,2,3,4,5];
var res = arr.join("");  //无符号拼接
console.log(res); //输出：12345
console.log(arr); //输出：[1, 2, 3, 4, 5]
```

#### reverse 方法
 - 作用：将数组反转
 - 返回值：反转后的数组
 - 参数：无
 - 注意：原数组改变
 - 语法：
```js
var arr = [1,2,3,4,5];
arr.reverse();
console.log(arr); //输出：[5, 4, 3, 2, 1]
```

#### concat方法
 - 作用：将多个数组合并成一个数组
 - 参数：要合并的数组
 - 返回值：合并后的数组
 - 注意：原数组不变
 - 语法：
```js
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];
var res = arr1.concat(arr2,arr3);
console.log(res); //输出：[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### toString方法
 - 作用：将数组转换成字符串
 - 参数：无
 - 返回值：转换后的字符串
 - 注意：原数组不变
 - 语法：
```js
var arr = [1,2,3,4,5];
var res = arr.toString();
console.log(res); //输出：1,2,3,4,5
```

#### indexOf方法
 - 作用：查找指定元素在数组中的索引位置
 - 参数：
     - 第一个参数：要查找的元素
     - 第二个参数：开始查找的位置
 - 返回值：查找到的元素的索引位置，如果没有找到，返回-1
 - 注意：原数组不变
 - 语法：
```js
var arr = [1,2,3,4,5,6,7,8,9,10];

var res = arr.indexOf(5);
console.log(res); //输出：4

var res2 = arr.indexOf(11); 
console.log(res2); //输出：-1
```

#### sort方法
 - 作用：对数组进行排序
 - 参数：无,默认按照ASCII码进行排序,对数值排序要传入一个匿名比较函数
 - 返回值：排序后的数组
 - 注意：原数组改变
 - 语法：
```js
var arr = [1,2,3,4,5,6,7,8,9,10];
//从小到大排序
arr.sort(  
    function(a,b){
        return a-b;
    }
);
console.log(arr); //输出：[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var arr2 = [1,2,3,4,5,6,7,8,9,10];
//从大到小排序
arr2.sort(  
    function(a,b){
        return b-a;
    }
);
console.log(arr2); //输出：[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

#### slice方法
 - 作用：截取数组中的元素
 - 参数：
     - 第一个参数：开始截取的位置索引值
     - 第二个参数：结束截取的位置索引值
 - 返回值：截取后的数组
 - 注意：原数组不变
 - 语法：
```js
var arr = [1,2,3,4,5,6,7,8,9,10];
var res = arr.slice(2,6);
console.log(res); //输出：[3, 4, 5, 6]
```

#### splice方法
 - 作用：删除数组中的元素
 - 参数：
     - 第一个参数：开始删除的索引位置
     - 第二个参数：删除的个数
         - 如果为0，表示不删除，只添加
         - 如果为负数，表示从后往前数
     - 第三个及往后的参数：删除的位置开始添加的元素
 - 返回值：删除的元素
 - 注意：原数组改变
 - 语法：
```js
//删除
var arr = [1,2,3,4,5,6,7,8,9,10];
var res = arr.splice(2,4);
console.log(res); //输出：[3, 4, 5, 6]
console.log(arr); //输出：[1, 2, 7, 8, 9, 10]

//添加
var arr1 = [1,2,3,4,5,6,7,8,9,10];
var res1 = arr1.splice(2,0,55,66,77,88);
console.log(res1); //输出：[]
console.log(arr1); //输出：[1, 2, 55, 66, 77, 88, 3, 4, 5, 6, 7, 8, 9, 10]

//删除后添加
var arr2 = [1,2,3,4,5,6,7,8,9,10];
var res2 = arr2.splice(2,4,55,66,77,88);
console.log(res2); //输出：[3, 4, 5, 6]
console.log(arr2); //输出：[1, 2, 55, 66, 77, 88, 7, 8, 9, 10]
```

---

## 对象object

 - 引用数据类型(复杂数据类型)
 - 用于存储各种键值集合和更复杂的实体
 - JS对象有属性和方法，属性是存储在对象中的名称: 值对，方法是存储在属性中的函数，用于执行某些动作
 - 分为 内置对象 / 原生对象 和 自定义对象
     - 内置对象/原生对象是JS语言本身预定义的对象，如String、Number、Boolean、Array、Date、Math等
     - 自定义对象由用户创建，也可以说是封装好的功能，可以用Object()函数创建

---


## 对象

 - 对象是一种复合数据类型，由多个数据组成的集合
 - 键值对的集合
 - 属性名：字符串类型，用来表示对象中的属性
 - 值：任意类型，用来表示属性的值

 - 调用方法：
     - 对象名.属性名
     - 对象名['属性名']
     - 对象名.方法名( )
     - 对象名['方法名'] ( )


### 对象（创建）

#### 字面量创建对象
 - 养成加双引号的习惯
 - 语法：
```js
var object_1 = {
    "key_1": "value_1";
    "key_2": "value_2";
    "key_3": function(){
        //方法体
    };
    "key_xx": value_xx;
};
```

#### 构造函数创建对象
 - 语法：
```js
var object_2 = new Object();
    object_2.key_1 = value_1;
    object_2.key_2 = value_2;
    object_2.key_3 = function(){
        //方法体
    };
    object_2.key_xx = value_xx;

```

#### 工厂方法创建对象
 - 语法：
```js
function test(value_1, value_2, value_3){
    var object_3 = new Object();
    //添加属性
    object_3.key_1 = value_1;
    object_3.key_2 = value_2;
    object_3.key_3 = value_3;
    //添加方法
    object_3.key_4 = function(){
        console.log("key_4");
    }
    //返回对象
    return object_3;
}
```


#### 自定义构造函数创建对象
 - 语法：
```js
function Person(name,age){
    this.name = name;
    this.age = age;
}

var person_1 = new Person("XX",18);
var person_2 = new Person("YY",19);


```

### this关键字
 - 作用：指向当前对象
     - 普通函数：指向window对象
     - 方法：指向object对象
     - 构造函数：指向object对象
 - 语法：
```js
//1.普通函数
console.log(this); //输出：window对象

//2.对象方法中的this
var obj = {
    "XX" : "12334"
    "YY" : function(){
        console.log(this); //输出：obj对象
    }
}

//3.构造函数中的this
function Person(name,age){
    this.name = name;
    this.age = age;
    this.say = function(){
        console.log(this); //输出：Person对象
    }
}

```
### new关键字
 - 作用：创建对象
 - 执行过程：
     - 创建一个空对象
     - 将空对象的原型指向构造函数的原型
     - 将构造函数的this指向空对象
     - 执行构造函数
     - 返回空对象
 - 语法：
```js
var obj = new Object();

var obj = new Object(value_1, value_2, value_3, value_xx);
```

### delete关键字
 - 作用：删除对象的属性
 - 语法：
```js
var test = {
    "user" : "admin",
    "pass" : "123456",
}

delete test.user;
console.log(test["name"]); //undefined

```

### 遍历对象
 - for in 
 - 语法：
```js
var test = {
    "name" : "admin",
    "model" : "v1.0",
    "color" : "pink",
    "say" : function(){
        console.log("hello world");
    }
}

for(var key in test){
    console.log(key); //输出：name model color say 也就是对象的属性名
    console.log(test[key]); //输出：admin v1.0 pink function(){console.log("hello world");} 也就是对象的属性值
}

```


### 内置对象（原生对象）

#### String对象
 - **作用**：字符串对象
 - **创建**：
     - 字面量创建
         - ```js
            //用法
            var str = "hello world";
            ```
     - 构造函数创建
         - ```js
            //用法
            var str = new String("hello world");
            ```
     - 工厂方法创建
         - ```js
            //用法
            var str = String("hello world");
            ```
 - **属性和方法的区别**：
     - 属性：不需要加括号，直接调用
     - 方法：需要加括号，调用
 - **属性**：
     - String.length：字符串长度
 - **方法**：
     - String.charAt(index); //返回指定位置的字符
         - ```js
            //用法
            var str = "hello world";
            console.log(str.charAt(0)); //输出：h
            ```
     - String.charCodeAt(index); //返回指定位置的字符的Unicode(ASCII)编码
         - ```js
            //用法
            var str = "hello world";
            console.log(str.charCodeAt(0)); //输出：104
            ```
     - String.concat(str1,str2,...); //连接字符串
         - ```js
            //用法
            var str = "hello";
            console.log(str.concat(" ", "world")); //输出：hello world
            ```
     - String.indexOf(str); //返回指定字符串在字符串中的位置
         - ```js
            //用法
            var str = "hello world";
            console.log(str.indexOf("o")); //输出：4
            ```
     - String.lastIndexOf(str); //返回指定字符串在字符串中最后一次出现的位置
         - ```js
            //用法
            var str = "hello world";
            console.log(str.lastIndexOf("o")); //输出：7
            ```
     - String.slice(start,end); //提取字符串的一部分
         - ```js
            //用法
            var str = "hello world";
            console.log(str.slice(0,5)); //输出：hello
            ```
     - String.substring(start,end); //提取字符串的一部分
         - ```js
            //用法
            var str = "hello world";
            console.log(str.substring(0,5)); //输出：hello
            ```
     - String.substr(start,length); //提取字符串的一部分
         - 注意：如果只有一个开始位置，没有截取几个的参数，表示从开始位置截取到字符串末尾
         - ```js
            //用法
            var str = "hello world";
            console.log(str.substr(0,5)); //输出：hello
            ```
     - String.split(str); //把字符串用符号分割为数组, 如果不传参数，则把字符串转换为数组
     - 注意：尽量用空格吧，有什么特殊需要用join()方法
         - ```js
            //用法
            var str = "hello world";
            console.log(str.split(" ")); //输出：["hello", "world"]
            ```
     - String.join(str); //把数组用符号连接为字符串
         - ```js
            //用法
            var arr = ["hello", "world"];
            console.log(arr.join(" ")); //输出：hello world
            ```
     - String.replace(str1,str2); //替换字符串
         - 注意：只替换第一个匹配的字符串，如果需要全局替换，需要用到正则表达式
         - ```js
            //用法
            var str = "hello world";
            console.log(str.replace("world", "everyone")); //输出：hello everyone
            ```
     - String.toLowerCase(); //转换为小写
         - ```js
            //用法
            var str = "HELLO WORLD";
            console.log(str.toLowerCase()); //输出：hello world
            ```
     - String.toUpperCase(); //转换为大写
         - ```js
            //用法
            var str = "hello world";
            console.log(str.toUpperCase()); //输出：HELLO WORLD
            ```
     - String.trim(); //去除字符串两端的空格
         - ```js
            //用法
            var str = " hello world ";
            console.log(str.trim()); //输出：hello world
            ```
     - String.valueOf(); //返回字符串对象的原始值
         - ```js
            //用法
            var str = "hello world";
            console.log(str.toUpperCase()); //输出：HELLO WORLD
            //无视改变，返回原始值
            console.log(str.valueOf()); //输出：hello world
            ```
     - String.toString(); //返回字符串对象的原始值
         - ```js
            //用法
            var str = "hello world";
            console.log(str.toUpperCase()); //输出：HELLO WORLD
            //无视改变，返回原始值
            console.log(str.toString()); //输出：hello world
            ```
     - String.fromCharCode(num1,num2,...); //根据Unicode编码返回字符串
         - ```js
            //用法
            console.log(String.fromCharCode(104,101,108,108,111)); //输出：hello
            ```
     - String.localeCompare(str); //比较两个字符串
         - 原理：如果str在字符串之前，返回-1，如果str在字符串之后，返回1，如果str与字符串相等，返回0
         - ```js
            //用法
            var str1 = "hello";
            var str2 = "world";
            console.log(str1.localeCompare(str2)); //输出：-1
            ```
     - String.search(str); //检索字符串中指定的子字符串，返回子字符串的位置
         - 注意：indexOf()和laseIndexOf()查询的是一个字符,search()查询的是一个字符串
         - ```js
            //用法
            var str = "hello world";
            console.log(str.search("o")); //输出：4, 返回第一个o的位置
            console.log(str.search("or")); //输出：7, 返回第一个or的位置,计算时从第一个o开始计算
            ```



#### Math对象
 - **作用**：数学对象
 - **属性**：
     - Math.PI：圆周率
     - Math.E：自然对数的底数
 - **方法**：
     - Math.abs(x); //绝对值
     - Math.ceil(x); //向上取整
     - Math.floor(x); //向下取整
     - Math.round(x); //四舍五入
     - Math.max(x,y,z,...); //求最大值
     - Math.min(x,y,z,...); //求最小值
     - Math.pow(x,y);  //求x的y次方
     - Math.sqrt(x);  //求x的平方根
     - Math.random(); //求0-1之间的随机数
     - Math.sin(x); //求x的正弦值
     - Math.cos(x); //求x的余弦值
     - Math.tan(x); //求x的正切值
     - Math.atan(x); //求x的反正切值
     - Math.asin(x); //求x的反正弦值
     - Math.acos(x); //求x的反余弦值
     - Math.log(x); //求x的自然对数
     - Math.exp(x); //求e的x次方


#### Date对象
 - **UTC时间**：**世界协调时间**
     - 世界协调时间（UTC）：1970年1月1日0时0分0秒
     - 本地时间：北京时间
 - **时间换算**：
     - `1`秒 = `1000`毫秒
     - `1`分钟 = `60`秒  = `60` * `1000`毫秒
     - `1`小时 = `60`分钟 = `60` * `60`秒 = `60` * `60` * `1000`毫秒
     - `1`天 = `24`小时 = `24` * `60`分钟 = `24` * `60` * `60`秒 = `24` * `60` * `60` * `1000`毫秒(`86400000`毫秒)
 - **自定义日期和时间**：
     - 年份/月份/日期 进行传参，修改的是年月日，默认时分秒为0
     - `/`连接符可以兼容低版本ie
       - 年/月/日 / 时:分:秒
           - xxxx/xx/xx xx:xx:xx
       - 年/月/日
           - xxxx/xx/xx
     - `-`连接符不兼容低于ie8版本的ie
       - 年-月-日 - 时:分:秒
           - xxxx-xx-xx xx:xx:xx
       - 年-月-日
           - xxxx-xx-xx
 - **作用**：日期对象
 - 用法：
```js
var date = new Date(); //获取当前时间
date.getFullYear(); //获取年份
```
 - **属性**：
     - Date.now(); //获取当前时间戳，从1970年1月1日0时0分0秒开始计算，单位毫秒
     - Date.parse("自定义日期和时间"); //将字符串转换为时间戳
     - Date.UTC(2018,11,11,11,11,11); //将时间转换为时间戳
 - **方法**：
     - new Date(); //创建日期对象
     - Date(); //获取当前时间
         - Date(时间戳); //将时间戳转换为时间
         - Date("2018-11-11 11:11:11"); //将字符串转换为时间
     - **获取时间**:
         - `getFullyear()`; //获取年份
             - ```js
                //用法：
                var date = new Date();
                var year = date.getFullYear();
                console.log(year);
                ```
         - `getMonth()`; //获取月份
             - ```js
                //用法：
                var date = new Date();
                var month = date.getMonth() + 1; //月份从0开始，所以要加1
                if(month < 10){
                    month = "0" + month; //给个位月份补0
                }
                console.log(month);
                ```
         - `getDate()`; //获取日期
             - ```js
                //用法：
                var date = new Date();
                var date = date.getDate();
                if(date < 10){
                    date = "0" + date; //给个位日期补0
                }
                console.log(date);
                ```
         - `getDay()`; //获取星期
             - ```js
                //用法：
                var date = new Date();
                var day = date.getDay();
                var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]; //标准星期数组
                console.log(week[day]);
                ```
         - `getHours()`; //获取小时
             - ```js
                //用法：
                var date = new Date();  
                var hours = date.getHours();
                if(hours < 10){
                     hours = "0" + hours; //给个位时间补0
                }
                console.log(hours);
                ```
         - `getMinutes()`; //获取分钟
             - ```js
                //用法：
                var date = new Date();  
                var minutes = date.getMinutes();
                if(minutes < 10){
                    minutes = "0" + minutes; //给个位时间补0
                }
                console.log(minutes);
                ```
         - `getSeconds()`; //获取秒
             - ```js
                //用法：
                var date = new Date();  
                var seconds = date.getSeconds();
                if(seconds < 10){
                    seconds = "0" + seconds; //给个位时间补0
                }
                console.log(seconds);
                ```
         - `getMilliseconds()`; //获取毫秒
             - ```js
                //用法：
                var date = new Date();  
                var millisseconds = date.getMilliseconds();
                if(millisseconds < 10){
                    millisseconds = "00" + millisseconds; //给个位时间补0
                }else if(millisseconds < 100){
                    millisseconds = "0" + millisseconds; //给个位时间补0
                }
                ```
         - `getTime()`; //获取时间戳
             - ```js
                //用法：
                var date = new Date(); 
                var time = date.getTime(); //从1970年1月1日0时0分0秒开始计算，单位毫秒
                console.log(time); 
                ```
     - **获取UTC时间**:
         - `getUTCFulllyear()`; // 获取UTC年份
             - ```js
                //用法：
                var date = new Date(); 
                var year = date.getUTCFulllyear(); 
                console.log(year); //获取UTC年份
                ```
         - `getUTCMonth()`; // 获取UTC月份
             - ```js
                //用法：
                var date = new Date(); 
                var month = date.getUTCMonth() + 1; //月份从0开始，所以要加1
                if(month < 10){
                    month = "0" + month; //给个位月份补0
                }
                console.log(month); //获取UTC月份
                ```
         - `getUTCDate()`; // 获取UTC日期
             - ```js
                //用法：
                var date = new Date(); 
                var date = date.getUTCDate();
                if(date < 10){
                    date = "0" + date; //给个位日期补0
                }
                console.log(date); //获取UTC日期
                ```
         - `getUTCDay()`; // 获取UTC星期
             - ```js
                //用法：
                var date = new Date(); 
                var day = date.getUTCDay();
                var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]; //标准星期数组
                console.log(week[day]); //获取UTC星期
                ```
         - `getUTCHours()`; //获取UTC小时
             - ```js
                //用法：
                var date = new Date();
                var hours = date.getUTCHours();
                if(hours < 10){
                     hours = "0" + hours; //给个位时间补0
                }
                console.log(hours); //获取UTC小时
                ```
         - `getUTCMinutes()`; //获取UTC分钟
             - ```js
                //用法：
                var date = new Date();
                var minutes = date.getUTCMinutes();
                if(minutes < 10){
                    minutes = "0" + minutes; //给个位时间补0
                }
                console.log(minutes); //获取UTC分钟
                ```
         - `getUTCSeconds()`; //获取UTC秒
             - ```js
                //用法
                var date = new Date();
                var seconds = date.getUTCSeconds();
                if(seconds < 10){
                    seconds = "0" + seconds; //给个位时间补0
                }
                console.log(seconds); //获取UTC秒
                ```
         - `getUTCMilliseconds()`; //获取UTC毫秒
             - ```js
                //用法：
                var date = new Date();
                var millisseconds = date.getUTCMilliseconds();
                if(millisseconds < 10){
                    millisseconds = "00" + millisseconds; //给个位时间补0
                }else if(millisseconds < 100){
                    millisseconds = "0" + millisseconds; //给个位时间补0
                }
                console.log(millisseconds); //获取UTC毫秒
                ```
         - `getUTCDay()`; //获取UTC星期
             - ```js
                //用法：
                var date = new Date();
                var day = date.getUTCDay();
                var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]; //标准星期数组
                console.log(week[day]); //获取UTC星期
                ```
     - **获取时区偏移量**：
         - `getTimezoneOffset()`; // 获取时区偏移量
             - ```js
                //用法：
                var date = new Date();
                var timezoneOffset = date.getTimezoneOffset();
                    console.log(timezoneOffset); //获取时区偏移量
                ```
     - **设置时间**：
         - `setFullYear()`; // 设置年份
             - ```js
                //用法：
                var date = new Date();
                    date.setFullYear(2018); //设置年份
                var year = date.getFullYear();
                    console.log(year);
                ```
         - `setMonth()`; // 设置月份,参数：0-11
             - ```js
                //用法：
                var date = new Date();
                    date.setMonth(11); //设置月份
                var month = date.getMonth() + 1; //在获取的过程中加1显示对应的月份
                    console.log(month); 
                ```
         - `setDate()`; // 设置日期, 参数：1-31
             -  注意：
                 - 2月的时候，最多到29，如果传30，显示为1号
                 - 一个月只有30天时候，最多到30，如果传31，显示为1号
                 - 也就是说不能超过当月的最大天数
             - ```js
                //用法：
                var date = new Date();
                    date.setDate(31); //设置日期
                var day = date.getDate(); //获取日期
                    console.log(day);
                ```
         - `setHours()`; // 设置小时, 参数：0-23
             - ```js
                //用法：
                var date = new Date();
                    date.setHours(23);  //设置小时
                var hours = date.getHours();
                    console.log(hours);
                ```
         - `setMinutes()`; // 设置分钟, 参数：0-59
             - ```js
                //用法：
                var date = new Date();
                    date.setMinutes(59); //设置分钟
                var minutes = date.getMinutes(); //获取分钟
                    console.log(minutes); //输出59
                ```
         - `setSeconds()`; // 设置秒, 参数：0-59
             - ```js
                //用法：
                var date = new Date();
                    date.setSeconds(59); //设置秒
                var seconds = date.getSeconds(); //获取秒
                    console.log(seconds); //输出59
                ```
         - `setMilliseconds()`; // 设置毫秒，参数：0-999
             - ```js
                //用法：
                var date = new Date();
                    date.setMilliseconds(999); //设置毫秒
                var millisseconds = date.getMilliseconds(); //获取毫秒
                    console.log(millisseconds); //输出999
                ```
         - `setTime()`; // 设置时间戳,参数为毫秒数
             - ```js
                //用法：
                var date = new Date();
                    date.setTime(1546300800000); //设置时间戳
                var time = date.getTime(); //获取时间戳
                    console.log(time); //输出1546300800000
                ```
     - **设置UTC时间**:
         - `setUTCFullYear()`; // 设置UTC年份, 参数：四位年份
             - ```js
                //用法：
                var date = new Date();
                    date.setUTCFullYear(2018); //设置UTC年份
                var year = date.getUTCFullYear(); //获取UTC年份
                    console.log(year); //输出2018
                ```
         - `setUTCMonth()`; // 设置UTC月份, 参数：0-11
             - ```js
                //用法：
                var date = new Date();
                    date.setUTCMonth(11); //设置UTC月份
                var month = date.getUTCMonth() + 1; //在获取的过程中加1显示对应的UTC月份
                    console.log(month); //输出12
                ```
         - `setUTCDate()`; // 设置UTC日期, 参数：1-31
             - ```js
                //用法：
                var date = new Date();
                    date.setUTCDate(31); //设置UTC日期
                var day = date.getUTCDate(); //获取UTC日期
                    console.log(day); //
                ```
         - `setUTCHours()`; // 设置UTC小时, 参数：0-23
             - ```js
                //用法：
                var date = new Date();
                    date.setUTCHours(23); //设置UTC小时
                var hours = date.getUTCHours(); //获取UTC小时
                    console.log(hours); //输出23
                ```
         - `setUTCMinutes()`; // 设置UTC分钟, 参数：0-59
             - ```js
                //用法：
                var date = new Date();
                    date.setUTCMinutes(59); //设置UTC分钟
                var minutes = date.getUTCMinutes(); //获取UTC分钟
                    console.log(minutes); //输出59
                ```
         - `setUTCSeconds()`; // 设置UTC秒, 参数：0-59
             - ```js
                //用法：
                var date = new Date();
                    date.setUTCSeconds(59); //设置UTC秒
                var seconds = date.getUTCSeconds(); //获取UTC秒 
                    console.log(seconds); //输出59
                ```
         - `setUTCMilliseconds()`; // 设置UTC毫秒，参数：0-999
             - ```js
                //用法：
                var date = new Date();
                    date.setUTCMilliseconds(999); //设置UTC毫秒
                var millisseconds = date.getUTCMilliseconds(); //获取UTC毫秒
                    console.log(millisseconds); //输出999
                ```

     - **定时器:**
         - 区别：
             - `setTimeout()`：只执行一次
             - `setInterval()`：循环执行
         - `setIntervel()` 
             - 语法：setInterval(function, time)
             - 写法：
                 - ```js
                    //用法：
                    var timer = setInterval(
                        function(){
                            console.log('hello world')
                        }, 1000 //每隔1秒执行一次
                    )
                    ```
         - `setTimeout()` 
             - 语法：setTimeout(function, time)
             - 写法：
                 - ```js
                    //用法：
                    var timer = setTimeout(
                        function(){
                            console.log('hello world')
                        }, 1000 //延迟1秒执行
                    )
                    ```
         - `clearInterval()` //清除定时器
             - 语法：clearInterval(timer)
             - 写法：
                 - ```js
                    //用法：
                    var timer = setInterval(
                        function(){
                            console.log('hello world')
                        }, 1000 //每隔1秒执行一次
                    )
                    clearInterval(timer); //清除定时器
                    ```
---

## 算法&写法

### 冒泡排序
 - 作用：对数组进行排序
 - 原理：比较相邻的两个元素，如果第一个比第二个大，就交换他们两个
 - 语法：
```js
var arr = [1,2,3,4,5,6,7,8,9,10];
for(var i = 0; i < arr.length - 1; i++){ //定义第一次循环，两个元素比较，循环次数为数组长度-1（也就是循环次数少一次）
    // -i理解为上一次的最大值不再比较
    // -1剩余人员两两比较，次数少一次
    for(var j = 0; j < arr.length - 1 -i; j++){ //定义后续比较的次数，每次循环次数少一次
        if(arr[j] > arr[j + 1]){  //如果当前位置元素大于下一个位置的元素，就交换位置
            var temp = arrp[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}


``` 


### 位置交换
 - 作用：数组中两个元素的位置交换
 - 原理：
     - 定义一个临时变量 temp ，用来存储前一个元素b
     - 将后一个元素 c 赋值给前一个元素b
     - 将临时变量temp 赋值给后一个元素c
 - 写法：
```js
var arr = [1,2,3,4,5,6,7,8,9,10];
var temp = arr[0];  //定义一个临时变量，用来存储前一个元素
arr[0] = arr[3]; //将后一个元素赋值给前一个元素
arr[3] = temp;      //将前一个元素赋值给后一个元素
```


### 随机数
 - 作用：生成一个指定范围内的随机数
 - 通用写法：Math.random() * (max - min) + min
 - 写法：
```js
//生成一个1-100之间的随机数
var num = Math.random() * (100 - 1) + 1;
console.log(num); //输出：1-100之间的随机数

//生成一个1-100之间的整数
var num = Math.floor(Math.random() * (100 - 1) + 1); //向下取整
var num = Math.ceil(Math.random() * (100 - 1) + 1); //向上取整
var num = parsenInt(Math.random() * (100 - 1) + 1);  //直接取整

//随机获取数组中的一个元素
var index_num = parseInt(Math.random() * arr.length);//生成0到数组长度之间的随机数
var res = arr[index_num]; //获取数组中的随即元素

//-------------------------------


//数组索引值随机数公式
Math.floor(Math.random() * arr.length);

//通用公式
Math.floor(Math.random() * (max - min) + min);


```

### 复制对象
 - 作用：复制一个对象
 - 原理：遍历对象，将对象中的属性和属性值复制到新的对象中
 - 写法：
```js
var test_1 = {
    "user" : "admin",
    "password" : "qwe123",
    "level" : 10
    "login" : function(){
        console.log("hello please login")
    }
}

var test_2 = new Object();

for(var key in test_1){
    test_2 += key + ":" + test_1[key] + ";"
}

console.log(test_2);


```

### 倒计时
 - 作用：倒计时
 - 原理：定义一个变量，用来存储倒计时的秒数，每次减一秒，当秒数为0时，倒计时结束
 - 写法:
```js
var time = 10; //定义一个变量，用来存储倒计时的秒数
var timer = setInterval(
    function(){
        time--; //每次减一秒
        if(time == 0){ //当秒数为0时，倒计时结束
            clearInterval(timer); //清除定时器
        }
    }
,1000);

```

### 倒计时-Date写法
 - 作用：指定时间之前的倒计时
 - 原理：定义当前事件和指定时间的时间戳，两个时间戳相减，得到的结果是毫秒数，毫秒换算计时
 - 写法：
```js
function countDown(){
    var now_time = new Date(); //定义当前时间
    var end_time = new Date('2023/5/1 0:0:0'); //定义指定时间
    var time = end_time - now_time; //两个时间戳相减，得到相差毫秒数

    var day = parseInt(time / 86400000); //除以86400000，得到天数
    var hour = parseInt(time % 86400000 / 3600000); //取余数，再除以3600000，得到小时数
    var minute = parseInt(time % 86400000 % 3600000 / 60000); //取余数，再除以60000. 得到分钟数
    var second = parseInt(time % 86400000 % 3600000 % 60000 / 1000); //取余数，再除以1000，得到秒数

    console.log(day + "天" + hour + "小时" + minute + "分钟" + second + "秒") //输出：xx天xx小时xx分钟xx秒
}

setInterval(countDown,1000); //每隔一秒执行一次countDown函数

//也可以定义好用ruturn返回
function countDown(){
    var now_time = new Date(); //定义当前时间
    var end_time = new Date('2023/5/1 0:0:0') //定义指定时间
    var time = end_time - now_time; //两个时间戳相减，得到相差毫秒数

    var day = parseInt(time / 86400000); //除以86400000，得到天数
    var hour = parseInt(time % 86400000 / 3600000); //取余数，再除以3600000，得到小时数
    var minute = parseInt(time % 86400000 % 3600000 / 60000); //取余数，再除以60000. 得到分钟数
    var second = parseInt(time % 86400000 % 3600000 % 60000 / 1000); //取余数，再除以1000，得到秒数

    return day + "天" + hour + "小时" + minute + "分钟" + second + "秒" //输出：xx天xx小时xx分钟xx秒

}

setInterval(
    function(){
        console.log(countDown()); //每隔一秒执行一次countDown函数
    },1000
); //每隔一秒执行一次内置函数


```

### 图片计时器--js部分
 - 作用：图片计时器的运行部分
 - 原理：计时器获取图片的索引值，根据索引值获取图片的路径，将图片路径赋值给img标签的src属性
 - 写法：
```js
var img_arr = []; //定义一个数组，用来存储图片的路径
    for(var i = 0; i < 10; i++){
        img_arr.push("文件夹名字/"+ i +"图片后缀"); //适用于图片名字是数字的情况
    }

//位分离函数
function gs(units,tens){
    s = parseInt(tens / 10);
    g = parseInt(units % 10);
    return [s, g];
}


//计时器部分函数
function img_timer(){
    var date = new Date(); 
    var hour = date.getHours(); //获取当前小时数

    var hour_1 = gs(hour,hour)[0]; //获取十位数
    var hour_2 = gs(hour,hour)[1]; //获取个位数
    timeNum[0].src = img_arr[hour_1];
    timeNum[1].src = img_arr[hour_2];

    var minute = date.getMinutes(); //获取当前分钟数
    var minute_1 = gs(minute, minute)[0]; //获取十位数
    var minute_2 = gs(minute, minute)[1]; //获取个位数
    timeNum[2].src = img_arr[minute_1];
    timeNum[3].src = img_arr[minute_2];

    var second = date.getSeconds(); //获取当前秒数
    var second_1 = gs(second, second)[0]; //获取十位数
    var second_2 = gs(second, second)[1]; //获取个位数
    timeNum[4].src = img_arr[second_1];
    timeNum[5].src = img_arr[second_2];

}

setInterval(img_timer,1000)
```

### 数字时钟
 - 作用：数字时钟的运行部分
 - 原理：计时器获取时间，根据时间获取时分秒，将时分秒赋值给span标签的innerHTML属性
 - 写法：
```js
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

function num_timer(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(h < 10){
        h = "0" + h;
    }                                                                                                                                                                                                                                                                                                                                                                                                                  
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}
setInterval(num_timer,1000)

```

### 逐个输入文字
 - 作用：逐个输入文字的运行部分
 - 原理：将字符串转换成数组，然后将数组中的每个元素赋值给获取标签的innerHTML属性
 - 写法：
```js
var str = "这是一段文字"; //定义一个字符串
var str_arr = str.split(""); //将字符串转换成数组
var str_index = 0; //定义一个索引值
var str_timer = setInterval(function(){
    if(str_index < str_arr.length){
        document.getElementById("text").innerHTML += str_arr[str_index]; //将数组中的每个元素赋值给span标签的innerHTML属性
        str_index++;
    }else{
        clearInterval(str_timer); //清除计时器
    }
},1000)


//写法二，原数组不变
var str = "这是一段文字"; //定义一个字符串
var text = document.getElementById("text");
var index = 0; //定义一个索引值
function str_timer(){
    index++;
    if(index >= str.length - 1){ //如果i大于等于字符串的长度-1
        clearInterval(timer);
    }
    text.innerHTML = str[i]; //将数组中的每个元素赋值给id为text标签的innerHTML属性
}
//定义一个计时器，每隔一秒执行一次str_timer函数
var timer = setInterval(str_timer,1000);
```

### 随机验证码--fromCharCode()写法
 - 作用：随机验证码的运行部分
 - 原理：通过fromCharCode()，创建A-Z，a-z,0-9组成的字符串
 - 写法：
```js
var str = "";
var psd = "";

for(var i = 65; i <= 90; i++){ //A-Z, 65-90, 26个字母编码区域
    str += String.fromCharCode(i);  //将A-Z编码转换成字符串
}

for(var j = 97; j <= 122; j++){ //a-z, 97-122, 26个字母编码区域
    str += String.fromCharCode(j); //将a-z编码转换成字符串
}

for(var k = 48; k <= 57; k++){ //0-9, 48-57, 10个数字编码区域
    str += String.fromCharCode(k); //将0-9编码转换成字符串
}

for(var n = 0; n < 4; n++){
    var index = parseInt(Math.random() * str.length); //获取随机数
    psd += str[index]; //将随机数作为索引值，获取str中的字符
}

console.log(psd); //打印随机验证码
```

### 号码正确性验证--大陆--简单写法
 - 作用：验证号码的正确性
 - 原理
 - 写法：
```js
var mainNum_list = [133,149,153,173,177,180]; //大陆号码前三位--部分
var userNum = prompt("请输入手机号码"); //获取用户输入的号码
var userMainNum = userNum.slice(0,3) * 1; //获取用户输入的号码前三位
    if(userNum.length != 11){ //判断号码位数是否正确
        alert("号码位数不正确");
    }
    else if(mainNum_list.indexOf(userMainNum) == -1){ //判断号码前三位是否正确
        alert("号码前三位不正确");
    }
    else{
        alert("号码正确");
    }
```
### 暴力阻止浏览器默认事件以及浏览器冒泡
 - 作用：阻止浏览器默认事件以及浏览器冒泡
 - 原理：返回false
 - 写法：
```js
//例:
button.onclick = function(){
    return false;
}
```
### 事件委托
 - 作用：事件委托
 - 原理：事件委托是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件
 - 写法：
```js
//例:
var ul = document.getElementById("ul");
ul.onclick = function(e){
    var e = e || window.event; //获取事件对象
    var target = e.target || e.srcElement; //获取事件源
    if(target.nodeName.toLowerCase() == "li"){ //判断点击的是否是li标签
        console.log(target.innerHTML); //输出点击的li标签的内容
    }
}
```


----

## HTML DOM对象

### DOM 事件流
 - 事件流描述的是从页面中接收事件的顺序
 - 三个阶段
    - 事件捕获阶段
    - 处于目标阶段
    - 事件冒泡阶段

 - 应用场景:
     - 事件捕获阶段：在事件到达目标之前捕获它
     - 事件冒泡阶段：在事件冒泡到父元素之前捕获它

#### 捕获阶段
 - 事件从最不精确的对象(document对象)开始触发，然后向下传播到最精确(也可以在捕获阶段对事件对象进行操作)
 - 注意：在捕获阶段，事件对象还没有传播到目标对象，所以在捕获阶段对事件对象进行操作，不会影响到事件对象本身
 - mouseover和mouseout事件不支持事件捕获

#### 目标阶段
 - 事件到达目标对象本身时触发
 - 注意：在目标阶段，事件对象已经传播到了目标对象，所以在目标阶段对事件对象进行操作，会影响到事件对象本身
 - 双重范围：捕获阶段结束，目标阶段开始，事件对象在两个阶段都可以操作

#### 冒泡阶段
 - 事件从目标对象开始，然后向上冒泡到最不精确的对象(document对象)
 - 注意：在冒泡阶段，事件对象已经传播到了目标对象，所以在冒泡阶段对事件对象进行操作，会影响到事件对象本身

### DOM事件处理
 - 事件处理程序：指定事件发生时执行的代码
 - 事件处理程序的三种指定方式
    - HTML事件处理程序
    - DOM0级事件处理程序
    - DOM2级事件处理程序

#### HTML事件处理程序
 - 通过HTML元素的事件属性指定事件处理程序
 - 语法：
    ```js
    <input type="button" value="按钮" onclick="alert('hello world')">
    ```
 - 缺点：
    - HTML和JavaScript代码紧密耦合，不易于维护
    - HTML元素的事件属性只能指定一个事件处理程序，指定多个事件处理程序会覆盖前面的事件处理程序
 - 应用场景：
    - 用于简单的事件处理程序

#### DOM0级事件处理程序
 - 原理：将一个函数赋值给一个事件处理程序属性
 - 语法：
    ```js
    var btn = document.getElementById("btn");
    btn.onclick = function(){
        alert("hello world");
    }
    //删除事件处理程序
    btn.onclick = null;
    ```
 - 优点：
    - 简单
    - 跨浏览器兼容性好
 - 缺点：
    - 一个元素只能绑定一个事件
    - 事件绑定函数中的this指向的是window对象
    - 事件绑定函数中的事件对象是不存在的，所以无法获取事件对象
  
#### DOM2级事件处理程序
 - 原理：使用addEventListener()方法为元素添加事件处理程序
 - 语法：
    ```js
    var btn = document.getElementById("btn");
    btn.addEventListener("click",function(){
        alert("hello world");
    },false);
    //删除事件处理程序
    btn.removeEventListener("click",function(){
        alert("hello world");
    },false);
    ```
 - 优点：
     - 一个元素可以绑定多个事件
     - 事件绑定函数中的this指向的是当前元素
     - 事件绑定函数中的事件对象是存在的，所以可以获取事件对象
     - 事件处理程序的执行顺序是按照绑定顺序执行的
     - 事件处理程序可以指定事件流的阶段
     - 事件处理程序可以删除
 - 缺点：
     - 兼容性差
     - 不能为DOM0级事件处理程序添加事件处理程序
     - 不能为匿名函数添加事件处理程序
     - 不能为事件处理程序传递参数
     - 不能删除匿名函数添加的事件处理程序

#### IE事件处理
 - 注意：必须在IE上运行，IE11以上的版本不支持
 - IE事件处理程序的两种指定方式
    - attachEvent()方法
    - detachEvent()方法
 - 语法：
    ```js
    var btn = document.getElementById("btn");
    btn.attachEvent("onclick",function(){
        alert("hello world");
    });
    //删除事件处理程序
    btn.detachEvent("onclick",function(){
        alert("hello world");
    });
    ```

#### 绑定&移除事件的兼容写法

##### 绑定事件
 - 标准写法：
     - 语法：
        ```js
        var btn = document.getElementById("btn");
        btn.addEventListener("click",function(){
            alert("hello world");
        },false);
        ```
 - IE写法：
     - 语法：
        ```js
        var btn = document.getElementById("btn");
        btn.attachEvent("onclick",function(){
            alert("hello world");
        });
        ```

##### 移除事件
 - 标准写法：
     - 语法：
        ```js
        var btn = document.getElementById("btn");
        btn.removeEventListener("click",function(){
            alert("hello world");
        },false);
        ```
 - IE写法：
     - 语法：
        ```js
        var btn = document.getElementById("btn");
        btn.detachEvent("onclick",function(){
            alert("hello world");
        });
        ```



### DOM文档对象
 - document.write(" ") //直接页面输出 也可以写标签\
     - 注意：如果在页面加载完毕之后再使用document.write()，会覆盖页面
     - 用法：
        ```js
        document.write("hello world"); //直接页面输出
        document.write("<h1>hello world</h1>"); //直接页面输出标签
        ```
 - document.writeln(); // 写完屁股带个空格
     - 用法：
        ```js
        document.writeln("hello world"); //直接页面输出
        document.writeln("<h1>hello world</h1>"); //直接页面输出标签
        ```
 - document.add() //给元素添加指定的样式（也叫类）
     - 注意：如果元素已经有了指定的样式，就不会重复添加
     - 用法：
        ```js
        document.add("类名"); //给元素添加指定的样式（也叫类）
        ```
 - document.remove() //删除元素指定的样式（也叫类）
     - 注意：如果元素没有指定的样式，就不会删除
     - 用法：
        ```js
        document.remove("类名"); //删除元素指定的样式（也叫类）
        ```
 - document.toggle() //切换元素指定的样式（也叫类）
     - 注意：
        如果参数1指定样式（类名）不存在
         - 参数2：
             - true：添加指定的（参数1）样式
             - false：不添加指定的（参数1）样式
        如果参数1指定样式（类名）存在
         - 参数2：
             - true：参数不变，或添加
             - false：删除指定的（参数1）样式
        当只有一个参数的时，切换class value
         - 类名存在（指定样式），删除样式，并返回false
         - 类名不存在（指定样式），添加样式，并返回true
     - 用法：
        ```js
        document.toggle("类名",true或false); //切换元素指定的样式（也叫类）
        ```
 - document.contains() //判断元素是否包含指定的样式（也叫类）
     - 参数：类名
     - 返回值：
         - true：包含
         - false：不包含
     - 用法：
        ```js
        document.contains("类名"); //判断元素是否包含指定的样式（也叫类）
        ```
 - document.length //获取元素的个数
     - 用法：
        ```js
        document.length; //获取元素的个数
        ```
 - document.style //获取元素的样式
     - 注意：只能获取行内样式
     - 用法：
        ```js
        document.style; //获取元素的样式
        ```

### DOM节点(元素)对象

 - document.getElementById("idname"); //获取id元素
     - 返回值：对象
     - 用法：
        ```js
        var id = document.getElementById("idname"); //获取id元素的值
        ```
 - document.getElementsByClassName("classname"); //获取class元素
     - 返回值：数组
     - 用法：
        ```js
        var class = document.getElementsByClassName("classname"); //获取class元素的值
        ```
 - document.getElementsByTagName("TagName"); //获取标签元素
     - 返回值：数组
     - 用法：
        ```js
        var tag = document.getElementsByTagName("TagName"); //获取标签元素的值
        ```
 - document.getElementsByName("name"); //获取name元素
     - 注意：name属性只能用在form表单中
     - 用法：
        ```js
        var name = document.getElementsByName("name")[0].value; //获取name元素的值
        ```
 - document.querySelector("css选择器"); //获取css选择器元素
     - 注意：只获取第一个元素
     - 用法：
        ```js
        var name = document.querySelector(".name").value; //获取class为name的元素的值
        ```
 - document.querySelectorAll("css选择器"); //获取css选择器元素
     - 注意：获取所有元素
     - 用法：
        ```js
        var name = document.querySelectorAll(".name")[0].value; //获取class为name的元素的值
        ```
 - document.createElement("标签名"); //创建元素
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        ```
 - document.createTextNode("文本内容"); //创建文本节点
     - 用法：
        ```js
        var text = document.createTextNode("文本内容"); //创建文本节点
        ```
 - document.createAttribute("属性名"); //创建属性节点
     - 用法：
        ```js
        var attr = document.createAttribute("属性名"); //创建属性节点
        ```
 - document.createComment("注释内容"); //创建注释节点
     - 用法：
        ```js
        var comment = document.createComment("注释内容"); //创建注释节点
        ```
 - document.createDocumentFragment(); //创建文档碎片节点
     - 用法：
        ```js
        var fragment = document.createDocumentFragment(); //创建文档碎片节点
        ```
 - document.createEvent("事件类型"); //创建事件对象
     - 用法：
        ```js
        var event = document.createEvent("事件类型"); //创建事件对象
        ```
 - document.createRange(); //创建范围对象
     - 用法：
        ```js
        var range = document.createRange(); //创建范围对象
        ```
 - document.appendChild("节点"); //添加子节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        document.body.appendChild(div); //将div元素添加到body中
        ```
 - document.insertBefore("节点","参考节点"); //在参考节点前插入节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        var p = document.createElement("p"); //创建p元素
        document.body.appendChild(div); //将div元素添加到body中
        document.body.insertBefore(p,div); //将p元素插入到div元素前面
        ```
 - document.replaceChild("节点","参考节点"); //替换参考节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        var p = document.createElement("p"); //创建p元素
        document.body.appendChild(div); //将div元素添加到body中
        document.body.replaceChild(p,div); //将p元素替换div元素
        ```
 - document.removeChild("节点"); //删除子节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        document.body.appendChild(div); //将div元素添加到body中
        document.body.removeChild(div); //删除div元素
        ```
 - document.hasChildNodes(); //判断是否有子节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        document.body.appendChild(div); //将div元素添加到body中
        console.log(document.hasChildNodes()); //判断是否有子节点
        ```
 - document.cloneNode(); //克隆节点 
     - 参数：
         - true：克隆节点及其子节点(克隆标签和文本)
         - false：只克隆节点(只克隆标签)
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
            document.body.appendChild(div); //将div元素添加到body中
        var clone_div = div.cloneNode(true); //克隆div元素
            document.body.appendChild(clone_div); //将克隆的div元素添加到body中
        ``` 
 - document.childElementCount; //获取子元素的个数
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
            document.body.appendChild(div); //将div元素添加到body中
            console.log(document.childElementCount); //获取子元素的个数
        ```
 - document.children; //获取所有子元素
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
            document.body.appendChild(div); //将div元素添加到body中
            console.log(document.children); //获取子元素
        ```
 - document.parentNode; //获取父节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        var p = document.createElement("p"); //创建p元素
            document.body.appendChild(div); //将div元素添加到body中
            document.body.appendChild(p); //将p元素添加到body中
            console.log(div.parentNode); //获取div元素的父节点
        ```
 - document.childNodes; //获取所有子节点, 返回值是一个子节点列表，其中包括空格，会以text（文本）形式显示
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        var p = document.createElement("p"); //创建p元素
            document.body.appendChild(div); //将div元素添加到body中
            document.body.appendChild(p); //将p元素添加到body中
            console.log(document.childNodes); //获取所有子节点
        ```
 - document.firstChlid; //获取第一个子节点,包含文本节点（空格换行都算）以及注释节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        var p = document.createElement("p"); //创建p元素
            document.body.appendChild(div); //将div元素添加到body中
            document.body.appendChild(p); //将p元素添加到body中
            console.log(document.firstChlid); //获取第一个子节点
        ```
 - document.firstElementChild; //获取第一个子元素,不包含文本节点（空格换行都算）以及注释节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        var p = document.createElement("p"); //创建p元素
            document.body.appendChild(div); //将div元素添加到body中
            document.body.appendChild(p); //将p元素添加到body中
            console.log(document.firstElementChild); //获取第一个子元素
        ```
 - document.lastChlid; //获取最后一个子节点,包含文本节点（空格换行都算）以及注释节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        var p = document.createElement("p"); //创建p元素
            document.body.appendChild(div); //将div元素添加到body中
            document.body.appendChild(p); //将p元素添加到body中
            console.log(document.lastChlid); //获取最后一个子节点
        ```
 - document.lastElementChild; //获取最后一个子元素,不包含文本节点（空格换行都算）以及注释节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        var p = document.createElement("p"); //创建p元素
            document.body.appendChild(div); //将div元素添加到body中
            document.body.appendChild(p); //将p元素添加到body中
            console.log(document.lastElementChild); //获取最后一个子元素
        ```
 - document.previousSibling; //获取前一个兄弟节点,包含文本节点（空格换行都算）以及注释节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        var span = document.createElement("span"); //创建span元素
        var p = document.createElement("p"); //创建p元素
            document.body.appendChild(div); //将div元素添加到body中
            document.body.appendChild(span); //将span元素添加到body中
            document.body.appendChild(p); //将p元素添加到body中
            console.log(span.previousSibling); //获取span元素的前一个兄弟节点
        ```
 - document.previousElementSibling; //获取前一个兄弟元素,不包含文本节点（空格换行都算）以及注释节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        var span = document.createElement("span"); //创建span元素
        var p = document.createElement("p"); //创建p元素
            document.body.appendChild(div); //将div元素添加到body中
            document.body.appendChild(span); //将span元素添加到body中
            document.body.appendChild(p); //将p元素添加到body中
            console.log(span.previousElementSibling); //获取span元素的前一个兄弟元素
        ```
 - document.nextSibling; //获取后一个兄弟节点,包含文本节点（空格换行都算）以及注释节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        var span = document.createElement("span"); //创建span元素
        var p = document.createElement("p"); //创建p元素
            document.body.appendChild(div); //将div元素添加到body中
            document.body.appendChild(span); //将span元素添加到body中
            document.body.appendChild(p); //将p元素添加到body中
            console.log(span.nextSibling); //获取span元素的后一个兄弟节点
        ```
 - document.nextElementSibling; //获取后一个兄弟元素,不包含文本节点（空格换行都算）以及注释节点
     - 用法：
        ```js
        var div = document.createElement("div"); //创建div元素
        var span = document.createElement("span"); //创建span元素
        var p = document.createElement("p"); //创建p元素
            document.body.appendChild(div); //将div元素添加到body中
            document.body.appendChild(span); //将span元素添加到body中
            document.body.appendChild(p); //将p元素添加到body中
            console.log(span.nextElementSibling); //获取span元素的后一个兄弟元素
        ```
 - document.cuttentStyle
     - 作用：获取元素的非行内样式（最终样式，也叫当前样式）
     - 注意：返回值是一个对象，只读不能修改，兼容低版本浏览器
     - 写法：
        ```js
        var div = document.getElementById("div");
        var style = div.currentStyle["width"]; //获取元素的非行内样式的width属性
        console.log(style); //获取元素的非行内样式
        ```

### DOM属性对象
 - document.title //获取或设置文档标题
     - 用法：
        ```js
        document.title = "标题"; //设置文档标题
        console.log(document.title); //获取文档标题
        ```
 - document.URL //获取文档的URL
     - 用法：
        ```js
        console.log(document.URL); //获取文档的URL
        ```
 - document.domain //获取文档的域名
     - 用法：
        ```js
        console.log(document.domain); //获取文档的域名
        ```
 - document.referrer //获取文档的来源
     - 用法：
        ```js
        console.log(document.referrer); //获取文档的来源
        ```
 - document.cookie //获取或设置文档的cookie
     - 用法：
        ```js
        document.cookie = "name=admin"; //设置文档的cookie
        console.log(document.cookie); //获取文档的cookie
        ```
 - document.documentElement //获取文档的根元素
     - 用法：
        ```js
        console.log(document.documentElement); //获取文档的根元素
        ```
 - document.body //获取文档的body元素
     - 用法：
        ```js
        console.log(document.body); //获取文档的body元素
        ```
 - document.head //获取文档的head元素
     - 用法：
        ```js
        console.log(document.head); //获取文档的head元素
        ```
 - document.anchors //获取文档的所有锚点
     - 用法：
        ```js
        console.log(document.anchors); //获取文档的所有锚点
        ```
 - document.links //获取文档的所有链接
     - 用法：
        ```js
        console.log(document.links); //获取文档的所有链接
        ```
 - document.getElementById("idname").value //获取或设置id元素的值
     - 用法：
        ```js
        document.getElementById("idname").value = "admin"; //设置id元素的值
        console.log(document.getElementById("idname").value); //获取id元素的值
        ```
 - document.getElementById("idname").innerHTML //获取或设置id元素的内容
     - 用法：
        ```js
        document.getElementById("idname").innerHTML = "<p>admin</p>"; //设置id元素的内容
        console.log(document.getElementById("idname").innerHTML); //获取id元素的内容
        ```
 - document.getElementById("idname").style //获取或设置id元素的样式
     - 用法：
        ```js
        document.getElementById("idname").style.color = "red"; //设置id元素的样式
        console.log(document.getElementById("idname").style.color); //获取id元素的样式
        ```
 - document.getElementById("idname").className //获取或设置id元素的class
     - 用法：
        ```js
        document.getElementById("idname").className = "admin"; //设置id元素的class
        console.log(document.getElementById("idname").className); //获取id元素的class
        ```
 - document.getElementById("idname").id //获取或设置id元素的id
     - 用法：
        ```js
        document.getElementById("idname").id = "admin"; //设置id元素的id
        console.log(document.getElementById("idname").id); //获取id元素的id,返回值是一个类数组
        ```
 - document.getAttributes("属性名") //获取或设置元素的属性
     - 用法：
        ```js
        document.getElementById("idname").getAttributes("属性名") = "admin"; //设置元素的属性
        console.log(document.getElementById("idname").getAttributes("属性名")); //获取元素的属性,返回值是一个类数组
        ```
 - document.setAttribute("属性名","属性值") //设置元素的属性
     - 用法：
        ```js
        document.getElementById("idname").setAttribute("属性名","属性值"); //设置元素的属性
        ```
 - document.classList //获取或设置元素的class
     - 用法：
        ```js
        document.getElementById("idname").classList = "admin"; //设置元素的class
        console.log(document.getElementById("idname").classList); //获取元素的class,返回值是一个类数组
        ```
 - document.offsetWidth //获取元素的宽度，包含左右padding和左右border
     - offsetWidth = width + 左右padding + 左右border
     - 用法：
        ```js
        console.log(document.getElementById("idname").offsetWidht); //获取元素的宽度
        ```
 - document.offsetHeight //获取元素的高度，包含上下padding和上下border
     - offsetHeight = height + 上下padding + 上下border
     - 用法：
        ```js
        console.log(document.getElementById("idname").offsetHeight); //获取元素的高度
        ```
 - document.offsetLeft //获取元素的左边距，包含左边padding
     - offsetLeft = 左边padding + 左边margin
     - 注意：offsetLeft是相对于父元素的左边距，如果没有父元素，就是相对于body的左边距
     - 用法：
        ```js
        console.log(document.getElementById("idname").offsetLeft); //获取元素的左边距
        ```
 - document.offsetTop //获取元素的上边距，包含上边padding
     - offsetTop = 上边padding + 上边margin
     - 注意：offsetTop是相对于父元素的上边距，如果没有父元素，就是相对于body的上边距
     - 用法：
        ```js
        console.log(document.getElementById("idname").offsetTop); //获取元素的上边距
        ```
 - document.offsetParent //获取元素的父元素,如果没有父元素，就是body
     - 用法：
        ```js
        console.log(document.getElementById("idname").offsetParent); //获取元素的父元素
        ```
 - document.scrollHeight //获取元素实际高度，可视区域的高+隐藏区域的高
     - 用法：
        ```js
        console.log(document.getElementById("idname").scrollHeight); //获取元素实际高度
        ```
 - document.scrollWidth //获取元素实际宽度，可视区域的宽+隐藏区域的宽
     - 用法：
        ```js
        console.log(document.getElementById("idname").scrollWidth); //获取元素实际宽度
        ```
 - document.scrollTop //获取元素的滚动条的上边距
     - 用法：
        ```js
        console.log(document.getElementById("idname").scrollTop); //获取元素的滚动条的上边距
        ```
 - document.scrollLeft //获取元素的滚动条的左边距
     - 用法：
        ```js
        console.log(document.getElementById("idname").scrollLeft); //获取元素的滚动条的左边距
        ```
 - document.clientWidth //获取元素的实际宽度，包含左右padding，不包括border
     - 用法：
        ```js
        console.log(document.getElementById("idname").clientWidth); //获取元素的实际宽度
        ```
 - document.clientHeight //获取元素的实际高度，包含上下padding，不包括border
     - 用法：
        ```js
        console.log(document.getElementById("idname").clientHeight); //获取元素的实际高度
        ```
 - document.clientLeft //获取元素的左边框宽度
     - 用法：
        ```js
        console.log(document.getElementById("idname").clientLeft); //获取元素的左边框宽度
        ```
 - document.clientTop //获取元素的上边框宽度
     - 用法：
        ```js
        console.log(document.getElementById("idname").clientTop); //获取元素的上边框宽度
        ```


### DOM事件对象
```js
 - onclick      单击事件

 - ondblclick   双击事件

 - onmouseout   鼠标移出

 - onmouseover  鼠标移入

 - onscroll     鼠标移入

 - onmousewheel 鼠标轮滚动事件

 - onkeydown    键盘按下事件

 - onkeyup      键盘抬起事件

 - onkeypress   键盘按下事件

 - onfocus      元素获得焦点事件

 - onblur       元素失去焦点事件

 - onsubmit     表单提交事件

 - onreset      表单重置事件

 - onselect     文本框选中事件

 - onchange     文本框内容改变事件

 - oncontextmenu 右键事件

 - onmousemove   鼠标移动事件

 - onmousedown   鼠标按下事件

 - onmouseup     鼠标抬起（弹起/放开）事件

 - ondragstart   拖拽开始事件

 - ondrag        拖拽事件

 - ondragenter   拖拽进入事件

 - ondragleave   拖拽离开事件

 - ondragover    拖拽悬停事件

 - ondrop        拖拽放下事件

 - ondragend     拖拽结束事件

 - onresize      窗口大小改变事件

 - onerror       加载错误事件

 - onload        加载完成事件

 - onunload      窗口关闭事件

 - onhashchange  hash值改变事件

 - onpopstate    前进后退事件

 - onbeforeunload 窗口关闭之前事件

 - onmessage     消息事件

 - ononline      网络在线事件

 - onoffline     网络离线事件

 - onstorage     存储事件

 - onpageshow    页面显示事件

```
 - document.addEventListener(); //添加事件监听
     - 参数：  
         - 第一个参数：绑定的事件类型
         - 第二个参数：事件处理的函数名
         - 第三个参数：是否在捕获阶段触发事件，默认false，表示在冒泡阶段触发事件，true表示在捕获阶段触发事件
     - 用法：
        ```js
        document.addEventListener("click",function(){
            console.log("点击了");
        });
 - document.removeEventListener(); //移除事件监听
     - 参数：
         - 第一个参数：绑定的事件类型
         - 第二个参数：事件处理的函数名
         - 第三个参数：是否在捕获阶段触发事件，默认false，表示在冒泡阶段触发事件，true表示在捕获阶段触发事件
     - 用法：
        ```js
        document.removeEventListener("click",function(){
            console.log("点击了");
        });
        ```


### DOM弹窗对象

```js
 - alert("")     直接输出

 - condfirm("")  弹出确认框，有取消按钮

 - prompt("")    弹出输入框

```

## HTML BOM对象

### BOM对象简介

 - BOM(Browser Object Model)浏览器对象模型
 - 主要作用：操作浏览器窗口和浏览器的内置对象(框架)

 - 所有的全局变量都是window对象的属性，所有的全局函数都是window对象的方法
     - 变量调用：window.变量名
     - 函数调用：window.函数名()

 - 组成部分：
     - window对象 //表示浏览器窗口
         - js最顶层的对象，所有的BOM对象都是window对象的属性
     - navigator对象 //表示客户端浏览器信息
     - location对象 //表示当前端口的URL信息
     - screen对象 //表示客户端屏幕信息,屏幕分辨率,颜色等
     - history对象 //表示浏览器的历史记录

### BOM窗口对象

 - window.onload = function(){}
     - 作用：页面加载完毕后执行
     - 写法：
        ```js
        window.onload = function(){
            //页面加载完毕后执行
        }
        ```
 - window.open("url","_blank","width=500,height=500") 
     - 作用：打开新窗口
     - 参数：网址，打开方式，窗口大小
     - 打开方式：
         - _blank(新窗口打开)
         - _self(当前窗口打开)
         - _parent(父窗口打开) 
         - _top(顶级窗口打开)
     - 写法：
        ```js
        var win = window.open("http://www.baidu.com","_blank","width=500,height=500");
        win.close(); //关闭窗口
        ```
 - window.close() 
     - 作用：关闭窗口
     - 写法：
        ```js
        var win = window.open("http://www.baidu.com","_blank","width=500,height=500");
        win.close(); //关闭窗口
        ```
 - window.moveTo(x,y)
     - 作用：移动窗口位置
     - 参数：x轴, y轴, 单位px
     - 写法：
        ```js
        window.moveTo(100,100); //移动窗口位置
        ```
 - window.resizeTo(width,height)
     - 作用：改变窗口大小
     - 参数：宽，高，单位px
     - 写法：
        ```js
        window.resizeTo(500,500); //改变窗口大小
        ```
 - window.location.href
     - 作用：获取当前网址
     - 写法：
        ```js
        console.log(window.location.href); //获取当前网址
        ```
 - window.location.reload()
     - 作用：刷新当前页面
     - 写法：
        ```js
        window.location.reload(); //刷新当前页面
        ```
 - window.location.assign("url")
     - 作用：跳转到指定网址
     - 参数：网址
     - 写法：
        ```js
        window.location.assign("http://www.baidu.com"); //跳转到指定网址
        ```
 - window.location.replace("url")
     - 作用：跳转到指定网址
     - 参数：网址
     - 写法：
        ```js
        window.location.replace("http://www.baidu.com"); //跳转到指定网址
        ```
 - window.location.search
     - 作用：获取网址中的参数
     - 写法：
        ```js
        console.log(window.location.search); //获取网址中的参数
        ```
 - window.location.hash
     - 作用：获取网址中的锚点
     - 写法：
        ```js
        console.log(window.location.hash); //获取网址中的锚点
        ```
 - window.location.pathname
     - 作用：获取网址中的路径
     - 写法：
        ```js
        console.log(window.location.pathname); //获取网址中的路径
        ```
 - window.location.protocol
     - 作用：获取网址中的协议
     - 写法：
        ```js
        console.log(window.location.protocol); //获取网址中的协议
        ```
 - window.location.hostname
     - 作用：获取网址中的域名
     - 写法：
        ```js
        console.log(window.location.hostname); //获取网址中的域名
        ```
 - window.location.port
     - 作用：获取网址中的端口
     - 写法：
        ```js
        console.log(window.location.port); //获取网址中的端口
        ```
 - window.location.origin
     - 作用：获取网址中的协议+域名+端口
     - 写法：
        ```js
        console.log(window.location.origin); //获取网址中的协议+域名+端口
        ```
 - window.history.back()
     - 作用：返回上一页
     - 写法：
        ```js
        window.history.back(); //返回上一页
        ```
 - window.history.forward()
     - 作用：前进一页
     - 写法：
        ```js
        window.history.forward(); //前进一页
        ```
 - window.history.go(-1)
     - 作用：返回上一页
     - 参数：-1返回上一页，1前进一页
     - 写法：
        ```js
        window.history.go(-1); //返回上一页
        ```
 - window.screen.width
     - 作用：获取屏幕宽度
     - 写法：
        ```js
        console.log(window.screen.width); //获取屏幕宽度
        ```
 - window.screen.height
     - 作用：获取屏幕高度
     - 写法：
        ```js
        console.log(window.screen.height); //获取屏幕高度
        ```
 - window.screen.availWidth
     - 作用：获取屏幕可用宽度
     - 写法：
        ```js
        console.log(window.screen.availWidth); //获取屏幕可用宽度
        ```
 - window.screen.availHeight
     - 作用：获取屏幕可用高度
     - 写法：
        ```js
        console.log(window.screen.availHeight); //获取屏幕可用高度
        ```
 - window.screen.colorDepth
     - 作用：获取屏幕颜色位数
     - 写法：
        ```js
        console.log(window.screen.colorDepth); //获取屏幕颜色位数
        ```
 - window.screen.pixelDepth
     - 作用：获取屏幕像素位数
     - 写法：
        ```js
        console.log(window.screen.pixelDepth); //获取屏幕像素位数
        ```
 - window.screen.orientation
     - 作用：获取屏幕方向
     - 写法：
        ```js
        console.log(window.screen.orientation); //获取屏幕方向
        ```
 - window.screen.orientation.angle
     - 作用：获取屏幕方向角度
     - 写法：
        ```js
        console.log(window.screen.orientation.angle); //获取屏幕方向角度
        ```
 - window.screen.orientation.type
     - 作用：获取屏幕方向类型
     - 写法：
        ```js
        console.log(window.screen.orientation.type); //获取屏幕方向类型
        ```
 - window.screen.orientation.lock("landscape-primary")
     - 作用：锁定屏幕方向
     - 参数：方向类型
     - 写法：
        ```js
        window.screen.orientation.lock("landscape-primary"); //锁定屏幕方向
        ```
 - window.screen.orientation.unlock()
     - 作用：解锁屏幕方向
     - 写法：
        ```js
        window.screen.orientation.unlock(); //解锁屏幕方向
        ```
 - window.screen.orientation.onchange = function(){}
     - 作用：屏幕方向改变时执行
     - 写法：
        ```js
        window.screen.orientation.onchange = function(){
            //屏幕方向改变时执行
        }
        ```
 - window.screen.orientation.addEventListener("change",function(){})
     - 作用：屏幕方向改变时执行
     - 参数：事件类型，事件处理函数
         - 事件类型：change, 键盘按下时触发, 键盘抬起时触发
     - 写法：
        ```js
        window.screen.orientation.addEventListener("change",function(){
            //屏幕方向改变时执行
        })
        ```
 - window.screenX
     - 作用：获取窗口相对于屏幕的x轴位置
     - 写法：
        ```js
        console.log(window.screenX); //获取窗口相对于屏幕的x轴位置
        ```
 - window.screenY
     - 作用：获取窗口相对于屏幕的y轴位置
     - 写法：
        ```js
        console.log(window.screenY); //获取窗口相对于屏幕的y轴位置
        ```
 - window.screenLeft
     - 作用：获取窗口相对于屏幕的左边距
     - 写法：
        ```js
        console.log(window.screenLeft); //获取窗口相对于屏幕的左边距
        ```
 - window.screenTop
     - 作用：获取窗口相对于屏幕的上边距
     - 写法：
        ```js
        console.log(window.screenTop); //获取窗口相对于屏幕的上边距
        ```
 - window.outerWidth
     - 作用：获取窗口外部宽度
     - 写法：
        ```js
        console.log(window.outerWidth); //获取窗口外部宽度
        ```
 - window.outerHeight
     - 作用：获取窗口外部高度
     - 写法：
        ```js
        console.log(window.outerHeight); //获取窗口外部高度
        ```
 - window.innerWidth
     - 作用：获取窗口内部宽度
     - 写法：
        ```js
        console.log(window.innerWidth); //获取窗口内部宽度
        ```
 - window.innerHeight
     - 作用：获取窗口内部高度
     - 写法：
        ```js
        console.log(window.innerHeight); //获取窗口内部高度
        ```
 - window.getComputedStyle(arg1,null) 
     - 作用：获取元素的非行内样式（最终样式）
     - 注意：返回值是一个对象，只读不能修改，兼容高版本浏览器
     - 参数：
         - arg1：元素
         - arg2：伪元素固定null
     - 设置具体需要的属性名：
         - 尾部加上 .XX 或者 [XX]
     - 写法：
        ```js
        var div = document.getElementById("div");
        var style = window.getComputedStyle(div,null).width; //获取元素的非行内样式的width属性
        var style = window.getComputedStyle(div,null)["width"]; //获取元素的非行内样式的width属性
        console.log(style); //获取元素的非行内样式
        ```
 - window.event
     - 作用：获取事件对象
     - 写法：
        ```js
        console.log(window.event); //获取事件对象
        //兼容IE8及以下
        var e = window.event || arguments[0]; //获取事件对象,兼容IE8及以下,arguments[0]表示事件对象
        //or
        var event = window.event || e;
        ```
 - window.event.type
     - 作用：获取事件类型
     - 写法：
        ```js
        console.log(window.event.type); //获取事件类型
        ```
 - window.event.target
     - 作用：获取事件源
     - 返回：真正触发事件的元素
     - 写法：
        ```js
        console.log(window.event.target); //获取事件源
        //兼容IE8及以下
        var node = event.srcElement || event.target; //获取事件源,兼容IE8及以下
        ```
 - window.event.srcElement
     - 作用：获取事件源，兼容IE8及以下，以及火狐浏览器
     - 写法：
        ```js
        console.log(window.event.srcElement); //获取事件源
        ```
 - window.event.currentTarget
     - 作用：获取事件源
     - 返回：返回事件的监听者，不会随着事件的冒泡而改变，也就是绑定事件的元素
     - 写法：
        ```js
        console.log(window.event.currentTarget); //获取事件源
        ```
 - window.event.clientX
     - 作用：获取事件触发点(鼠标指针)距离浏览器左边的距离，不包含滚动条遮挡的位置
     - 写法：
        ```js
        console.log(window.event.clientX); //获取事件触发点距离浏览器左边的距离
        //兼容IE8及以下
        var x = event.clientX; //获取事件触发点距离浏览器左边的距离,兼容IE8及以下
        ```
 - window.event.clientY
     - 作用：获取事件触发点(鼠标指针)距离浏览器上边的距离，不包含滚动条遮挡的位置
     - 写法：
        ```js
        console.log(window.event.clientY); //获取事件触发点距离浏览器上边的距离
        //兼容IE8及以下
        var y = event.clientY; //获取事件触发点距离浏览器上边的距离,兼容IE8及以下
        ```
 - window.event.pageX
     - 作用：获取事件触发点(鼠标指针)距离页面左边的距离，包含滚动条遮挡的位置
     - 写法：
        ```js
        console.log(window.event.pageX); //获取事件触发点距离页面左边的距离
        //兼容IE8及以下
        var x = event.clientX + document.documentElement.scrollLeft || document.body.scrollLeft; //获取事件触发点距离页面左边的距离,兼容IE8及以下
        ```
 - window.event.pageY
     - 作用：获取事件触发点(鼠标指针)距离页面上边的距离，包含滚动条遮挡的位置
     - 写法：
        ```js
        console.log(window.event.pageY); //获取事件触发点距离页面上边的距离
        //兼容IE8及以下
        var y = event.clientY + document.documentElement.scrollTop || document.body.scrollTop; //获取事件触发点距离页面上边的距离,兼容IE8及以下
        ```
 - window.event.offsetX
     - 作用：获取事件触发点(鼠标指针)距离事件源左边的距离
     - 写法：
        ```js
        console.log(window.event.offsetX); //获取事件触发点距离事件源左边的距离
        ```
 - window.event.offsetY
     - 作用：获取事件触发点(鼠标指针)距离事件源上边的距离
     - 写法：
        ```js
        console.log(window.event.offsetY); //获取事件触发点距离事件源上边的距离
        ```
 - window.event.offsetLeft
     - 作用：获取事件触发点(鼠标指针)距离事件源左边的距离
     - 写法：
        ```js
        console.log(window.event.offsetLeft); //获取事件触发点距离事件源左边的距离
        ```
 - window.event.offsetTop
     - 作用：获取事件触发点(鼠标指针)距离事件源上边的距离
     - 写法：
        ```js
        console.log(window.event.offsetTop); //获取事件触发点距离事件源上边的距离
        ```
 - window.event.offsetParent
     - 作用：获取事件触发点(鼠标指针)的父元素
     - 写法：
        ```js
        console.log(window.event.offsetParent); //获取事件触发点的父元素
        ```
 - window.event.stopPropagation()
     - 作用：阻止事件冒泡
     - 写法：
        ```js
        window.event.stopPropagation(); //阻止事件冒泡
        //兼容IE8及以下
        (event.stopPropagation)||(event.cancleBubble = true); //阻止事件冒泡,兼容IE8及以下
        ```
 - window.event.preventDefault()
     - 作用：阻止事件默认行为
     - 写法：
        ```js
        window.event.preventDefault(); //阻止事件默认行为
        //兼容IE8及以下
        (event.preventDefault)||(event.returnValue = false); //阻止事件默认行为,兼容IE8及以下
        ```





### BOM客户端对象

 - navigator.userAgent
     - 作用：获取浏览器信息
     - 写法：
        ```js
        console.log(navigator.userAgent); //获取浏览器信息
        ```
 - navigator.appName
     - 作用：获取浏览器名称
     - 写法：
        ```js
        console.log(navigator.appName); //获取浏览器名称
        ```
 - navigator.appVersion
     - 作用：获取浏览器版本
     - 写法：
        ```js
        console.log(navigator.appVersion); //获取浏览器版本
        ```
 - navigator.platform
     - 作用：获取浏览器所在的操作系统, 如：Win32, Win64, MacIntel, Linux i686
     - 写法：
        ```js
        console.log(navigator.platform); //获取浏览器所在的操作系统
        ```
 - navigator.cookieEnabled
     - 作用：获取浏览器是否启用cookie
     - 写法：
        ```js
        console.log(navigator.cookieEnabled); //获取浏览器是否启用cookie
        ```
 - navigator.language
     - 作用：获取浏览器所在的语言
     - 写法：
        ```js
        console.log(navigator.language); //获取浏览器所在的语言
        ```
 - navigator.onLine
     - 作用：获取浏览器是否在线
     - 写法：
        ```js
        console.log(navigator.onLine); //获取浏览器是否在线
        ```
 - navigator.javaEnabled()
     - 作用：获取浏览器是否启用java
     - 写法：
        ```js
        console.log(navigator.javaEnabled()); //获取浏览器是否启用java
        ```
 - navigator.plugins
     - 作用：获取浏览器插件信息
     - 写法：
        ```js
        console.log(navigator.plugins); //获取浏览器插件信息
        ```
 - navigator.mimeTypes
     - 作用：获取浏览器MIME类型
     - 写法：
        ```js
        console.log(navigator.mimeTypes); //获取浏览器MIME类型
        ```
 - navigator.geolocation
     - 作用：获取浏览器地理位置
     - 写法：
        ```js
        console.log(navigator.geolocation); //获取浏览器地理位置
        ```
 - navigator.geolocation.getCurrentPosition(function(){})
     - 作用：获取浏览器地理位置
     - 参数：回调函数, 用来获取浏览器地理位置
     - 写法：
        ```js
        navigator.geolocation.getCurrentPosition(function(){
            //获取浏览器地理位置
        })
        ```
 - navigator.geolocation.clearWatch()
     - 作用：停止获取浏览器地理位置
     - 写法：
        ```js
        navigator.geolocation.clearWatch(); //停止获取浏览器地理位置
        ```

### 键盘键值，鼠标值

 - altKey //alt键
 - ctrlKey //ctrl键
 - shiftKey //shift键
 - metaKey //meta键, window键
 - keyCode //键盘按键值
     - 用法：
        ```js
        document.onkeydown = function(){
            console.log(event.keyCode); //获取键盘按键值
        }
        ```
     - a-z：65-90
     - 0-9：48-57
     - F1-F12：112-123
     - 回车：13
     - 空格：32
     - alt键：18
     - ctrl键：17
     - shift键：16
     - meta键,window键：91
     - 上下左右：37-40  
     - delete：46
     - backspace：8
     - tab：9
     - esc：27
     - home：36
     - end：35
     - pageup：33
     - pagedown：34
     - insert：45
     - numlock：144
     - pausebreak：19
     - scrolllock：145
     - printscreen：44
 - button //鼠标按键值
     - 用法：
        ```js
        document.onmousedown = function(){
            console.log(event.button); //获取鼠标按键值
        }
        ```
     - 鼠标左键：
         - ie8及以下：1
         - ie9及以上：0
     - 鼠标中键：
         - ie8及以下：4
         - ie9及以上：1
     - 鼠标右键：
         - ie8及以下：2
         - ie9及以上：2

 - wheelDelta //鼠标滚轮值
     - 用法：
        ```js
        document.onmousewheel = function(){
            console.log(event.wheelDelta); //获取鼠标滚轮值
        }
        //兼容火狐浏览器
        document.addEventListener("DOMMouseScroll",function(){ //addEventListener添加事件监听
            console.log(event.detail); //获取鼠标滚轮值
        })
        ```
        ```
     - 向上滚动：120
     - 向下滚动：-120
     - 向左滚动：-120
     - 向右滚动：120
