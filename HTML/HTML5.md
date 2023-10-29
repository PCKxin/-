## 介绍&&废除标签&&重新定义标签

### 介绍

 - html5是发展到现在第5个版本, 5是版本号
 - 增强了可读性, 语义化更强
 - 广义的html5包括: html, css, js, svg, canvas, webgl, webstorage, websocket, webworker, audio, video, geolocation, drag&drop, webapp, ...
 - 目的减少插件, 使网页更丰富, 使网页应用更强大, 使开发更简单

#### 新特性

 - 新的语义化标签
 - 表单增强, 新的表单控件
 - 新的API, 用于离线和本地存储, 以及更好的文件访问和用户交互
 - 2D/3D图形&特效, 用于更加丰富的视觉和用户体验
 - 多媒体标签, 用于音频和视频的播放
 - 性能和集成, 通过XHR2, web worker, web socket, server-sent events, CORS, 使得web应用更加高效和实用
 - 设备访问, 用于各种输入输出设备的访问, 如摄像头, 麦克风, 位置等
 - CSS3, 用于更加丰富的样式和特效

### 废除标签

 - basefont 设置默认字体 用css代替
 - big 设置大号字体 用css代替
 - center 居中显示 用css代替
 - font 设置字体 用css代替
 - s 删除线 用css代替
 - strike 删除线 用css代替
 - tt 等宽字体 用css代替
 - u 下划线 用css代替
 - frame 框架 用iframe代替
 - frameset 框架集 用iframe代替
 - noframes 不支持框架时的内容 用iframe代替
 - acronym 首字母缩写 用abbr代替
 - applet java小程序 用object代替
 - isindex 输入域 用form代替
 - dir 目录列表 用ul代替
 - menu 菜单列表 用ul代替
 - 等等，很多, 一般在vscode中会显示红色

### 重新定义标签

 - b 粗体
 - i 斜体
 - u 下划线
 - s 删除线
 - dd 定义列表中定义的项目
 - dl 定义列表
 - dt 定义列表中的项目
 - small 小号字体 例如打印注释或者法律声明
 - strong 粗体 设置强调文本

## 布局案例

### 传统布局

 - 传统布局: 传统布局是指在html4中使用的布局方式, 一般使用table标签来实现布局
 - 传统布局的缺点: 代码冗余, 不利于seo, 不利于维护, 不利于扩展, 不利于移动端

### 新布局

 - 语义化标签布局
 - 案例:
     - ```html
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                *{
                    margin: 0;
                    padding: 0;
                }
                .main{
                    width: 80%;
                    height: 710px;
                    border-radius: 10px;
                    margin: 0 auto;
                    background: rgba(156, 156, 156, 0.318);
                    color: white;
                }
                header{
                    width: 100%;
                    height: 100px;
                    border-radius: 10px;
                    background: pink;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                .title{
                    width: 30%;
                    height: 100px;
                    text-align: center;
                    line-height: 100px;
                    font-size: 30px;
                }
                nav{
                    font-size: 20px;
                }
                article{
                    width: 100%;
                    height: 500px;
                    display: flex;
                    margin-top: 5px;
                }
                .left{
                    flex: 2;
                    height: 100%;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .left section{
                    height: 120px;
                    text-align: center;
                    line-height: 120px;
                    border-radius: 10px;
                    background: skyblue;
                }
                aside{
                    flex: 1;
                    height: 100%;
                    background: deeppink;
                    border-radius: 10px;
                    margin-left: 5px;
                    text-align: center;
                    line-height: 500px;
                }
                footer{
                    background: rgba(164, 164, 164, 0.612);
                    width: 100%;
                    height: 100px;
                    margin-top: 5px;
                    border-radius: 10px;
                    text-align: center;
                    line-height: 100px;
                }
            </style>
        </head>
        <body>
            <section class="main">
                <header>
                    <p class="title">标题/logo</p>
                    <nav>导航1</nav>
                    <nav>导航2</nav>
                    <nav>导航3</nav>
                    <nav>导航4</nav>
                </header>
                <article>
                    <section class="left">
                        <section>section1</section>
                        <section>section2</section>
                        <section>section3</section>
                        <section>section4</section>
                    </section>
                    <aside>aside侧边框/栏</aside>
                </article>
                <footer>footer</footer>
            </section>
        </body>
     ```

## 新标签

 - 低版本ie识新标签方法
     - 引入html5shiv.js
     - js代码: document.createElement("标签名") 并在css中变为块级元素

### 语义化标签

 - 优点: 代码更加简洁, 便于维护, 便于seo, 便于扩展, 便于移动端
 - 缺点: 兼容性不好, 需要兼容ie8及以下版本, 需要引入html5shiv.js

 - header 头部
 - nav 导航
 - section 区块
 - article 文章
 - aside 侧边栏
 - footer 底部
 - main 主要内容

### progress进度条

 - 用于表示任务的完成进度
 - 用法:
     - ```html
        <progress value="50" max="100"></progress>
        ```
 - 属性:
     - value: 当前进度值
     - max: 最大进度值

### datalist列表

 - 用于给input输入框提供一个列表
 - 用法:
     - ```html
        <input type="text" list="list">
        <datalist id="list">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </datalist>
        ```
 - 属性:
     - id: 用于关联input和datalist
 - 注意: datalist中的option标签必须有value属性, 且value属性的值和option标签中间的内容一致

### dialog对话框

 - 用于显示对话框
 - 用法:
     - ```html
        <dialog open>对话框</dialog>
        ```
 - 属性:
     - open: 打开对话框

### ruby标签

 - 用于显示注音
 - 用法:
     - ```html
        <ruby>
            漢<rt>han</rt>
            字<rt>zi</rt>
        </ruby>
        ```
 - 注意: rt标签中的内容会显示在ruby标签中的内容的下方

### mark标签

 - 用于标记文本
 - 用法:
     - ```html
        <mark>标记文本</mark>
        ```

### time标签

 - 用于显示时间
 - 用法例:
     - ```html
        <div class="demobox">
            今天是<time>2023-9-15</time>
            <p> 我在 <time datetime="2008-02-14">datatime这个日期</time> 有点事情</p>
        </div>
        ```
 - 属性:
     - datetime: 用于指定时间

### output标签

 - 用于显示计算结果
 - 用法例:
     - ```html
        <div class="demobox">
            <form oninput="x.value = parseInt(a.value) + parseInt(b.value)">
            input1(默认50): <input type="range" id="a" value="50" >
            input2: <input type="number" id="b" value="50" >
            =<output name="x" for="a b"></output>
            </form>
        </div>
        ```
 - 属性:
     - for: 规定output绑定的元素
     - form: 规定output所属的表单
     - name: 规定output的名称

### meter标签

 - 用于显示度量衡
 - 用法例:
     - ```html
        <div class="demobox">
            <meter value="2" min="0" max="10">2/10</meter>
        </div>
        ```
 - 属性:
     - value: 当前值
     - min: 最小值
     - max: 最大值
     - low: 低值
     - high: 高值
     - optimum: 最优值

### summary标签

 - 用于显示摘要
 - 用法例:
     - ```html
        <div class="demobox">
            <details>
                <summary>摘要</summary>
                <p>这是一个摘要</p>
            </details>
        </div>
        ```
 - 注意: summary标签必须放在details标签中

### figure标签

 - 用于显示独立的流内容(图像, 图表, 照片, 代码等)
 - 用法例:
     - ```html
        <div class="demobox">
            <figure>
                <img src="path" alt="">
                <figcaption>这是一个图片</figcaption>
            </figure>
        </div>
        ```
 - 属性:
     - figurecaption: 用于指定figure标签的标题
 - 注意: figure标签中的内容会独立于主要内容, 一般用于图像, 图表, 照片, 代码等

## 表单

### 新增表单属性

 - required: 判断输入长度是否大于0或输入的内容是不是null或者undefined 必填属性
 - autofocus: 自动获取焦点, 浏览器刷新页面有失效几率, 可以通过js中提供的focus()事件解决
 - autocomplete: 自动补全, 和name结合使用, input标签必需写上name名称才生效, 如果表单中需要填写比较敏感或有安全隐患的信息, 建议设置为off
 - maxlength: 最大输入长度
 - minlength: 最小输入长度
 - pattern: 正则表达式, 用于验证输入内容是否符合规则
 - placeholder > 占位符, 在输入内容之前显示的内容
 - readonly: 只读, 不能修改
 - disabled: 禁用, 不能修改, 不能提交
 - value: 默认值
 - name: 表单名称, 用于和后台交互
 - form: 用于关联表单, 相当于一个袋子收集信息, 使其在不同的表单中进行数据传输
 - action: 用于指定表单提交的地址
 - method: 用于指定表单提交的方式, 默认为get
 - target: 用于指定表单提交后的打开方式, 默认为_self
 - enctype: 用于指定表单提交的编码方式, 默认为application/x-www-form-urlencoded
 - novalidate: 用于取消表单的验证

### 新增表单类型

#### email 邮箱

 - 移动端键盘会自动切换为邮箱键盘出现@符号
 - 输入内容会默认验证是否有@符号
 - 用法:
     - ```html
        <input type="email">
        ```

#### url 网址

 - 输入内容会默认验证是否有http://或者https://
 - 移动端键盘会出现.com等网址后缀
 - 用法:
     - ```html
        <input type="url">
        ```

#### number 数字

 - 只能输入数字或者无限不循环的小数
 - 不加min和max属性时, 默认最小值为0, 最大值为无限大
 - 不加step属性时, 默认步长为1, 即整数
 - 用法:
     - ```html
        <input type="number" maxlength="5" min="0" max="100" value="20" step="0.1">
        <!-- 最大长度为5, 最小值为0, 最大值为100, 默认值为20, 步长为0.1 -->
        ```

#### tel 手机号码格式

 - 移动端键盘会自动切换为数字键盘
 - 用法:
     - ```html
        <input type="tel">
        ```

#### range 范围

 - 用于显示范围
 - 自由拖动
 - 用法:
     - ```html
        <input type="range" min="0" max="100" value="50" step="1">
        <!-- 最小值为0, 最大值为100, 默认值为50, 步长为1 -->
        ```

#### search 搜索框

 - 默认有一个清除按钮, 搜索框后面的一个x号 用于清除搜索框中的内容
 - 用法:
     - ```html
        <input type="search">
        ```

#### color 颜色选择器

 - 用于选择颜色, 返回的是一个十六进制的颜色值
 - 用法:
     - ```html
        <input type="color">
        ```

#### date 日期

 - 用于选择日期
 - 年月日
 - 用法:
     - ```html
        <input type="date">
        ```

#### mouth 月份

 - 用于选择月份
 - 年 月
 - 用法:
     - ```html
        <input type="mouth">
        ```

#### week 星期

 - 用于选择星期
 - 年 星期
 - 用法:
     - ```html
        <input type="week">
        ```

#### time 时间

 - 用于选择时间
 - 小时 分钟
 - 用法:
     - ```html
        <input type="time">
        ```

#### datetime-local 日期时间

 - 用于选择完整日期和时间
 - 年 月 日 - 小时 分钟
 - 用法:
     - ```html
        <input type="datetime-local">
        ```

#### multiple 多选

 - 用于多选
 - 设置当前表单允许同时多选使用 
 - 用法:
     - ```html
        <input type="file" multiple>
        ```

#### accept 文件类型

 - 用于限制文件类型
 - 用法:
     - ```html
        <input type="file" accept="image/*">
        <!-- 只能选择图片 -->
        ```

#### reset 重置

 - 用于重置表单
 - 用法:
     - ```html
        <input type="reset">
        ```
 - 注意: 重置按钮会重置表单中所有的内容, 包括表单中的默认值


### 表单验证

#### valueMissing 输入值为空时

 - 判断值是否为空
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.1表单验证-valueMissing.html)

#### typeMismatch 输入值类型不匹配

 - 判断值的类型是否匹配
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.2表单验证-typeMismatch.html)

#### patternMismatch 输入值与正则不匹配

 - 判断值是否符合正则表达式
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.3表单验证-patternMismatch.html)

#### rangeUnderflow 输入值小于最小值

 - 判断值是否小于最小值
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.4表单验证-rangeUnderflow.html)

#### stepMismatch 输入值不符合步长

 - 判断值是否符合步长
 - 判断是否符合min、max及step的规则
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.5表单验证-stepMismatch.html)

#### customError 自定义错误

 - 自定义错误
 - 判断是否符合自定义的验证规则, 如果符合返回false, 不符合返回true
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.6表单验证-customError.html)

#### preventDefault() 阻止默认事件

 - 阻止默认事件
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.7表单验证-preventDefault.html)

#### formnovalidate 取消验证

 - 取消验证
 - [案例文件](../study-codefile/new/Code/HTML5/code/6.8表单验证-formnovalidate.html)


## 媒体标签

### 引入

 - 直接引入
 - 使用source标签引入

### 标签属性解释

 - controls: 显示控制条
 - autoplay: 自动播放
 - loop: 循环播放
 - muted: 静音
 - poster: 视频封面, 预览图片, 加入autoplay属性时, 会在视频加载完成前显示
 - preload: 预加载

### 对象属性

 - duration: 视频总时长
 - currentTime: 当前播放时间
 - paused: 是否暂停
 - ended: 是否播放结束
 - volume: 音量
 - muted: 是否静音
 - play(): 播放
 - pause(): 暂停
 - load(): 加载
 - canPlayType(): 检测浏览器是否支持某种视频格式
 - readyState: 视频当前状态
 - error: 视频错误信息
 - networkState: 网络状态
 - buffered: 已缓冲的视频时间
 - seekable: 可以跳转的视频时间
 - seeking: 是否正在跳转
 - currentSrc: 当前视频路径
 - videoWidth: 视频宽度
 - videoHeight: 视频高度
 - playbackRate: 播放速度
 - preload: 预加载
 - durationchange: 视频总时长改变时触发

 - [案例文件](../study-codefile/new/Code/HTML5/code/7.2媒体标签-video对象属性.html)

### video标签

 - 用于播放视频
 - 用法:
     - ```html
        <video src="path" controls autoplay loop muted poster="path"></video>
        ```
 - 属性:
     - src: 视频路径
     - controls: 显示控制条
     - autoplay: 自动播放
     - loop: 循环播放
     - muted: 静音
     - poster: 视频封面

### audio标签

 - 用于播放音频
 - 用法:
     - ```html
        <audio src="path" controls autoplay loop muted></audio>
        ```
 - 属性:
     - src: 音频路径
     - controls: 显示控制条
     - autoplay: 自动播放
     - loop: 循环播放
     - muted: 静音

### source标签

 - 用于引入媒体文件
 - 用法:
     - ```html
        <video controls autoplay loop muted poster="path">
            <source src="path" type="video/mp4">
            <source src="path" type="video/ogg">
            <source src="path" type="video/webm">
        </video>
        ```
 - 属性:
     - src: 媒体路径
     - type: 媒体类型


## 本地存储

 - [案例文件](../study-codefile/new/Code/HTML5/code/9.H5本地存储.html)

### localStorage

 - 本地存储
 - 关闭浏览器数据不会消失
 - 容量5M - 10M
 - 永久生效, 代码或手动清除
 - 只能存储字符串
 - 同一浏览器, 同一域名下的所有页面共享
 - 用法:
     - ```js
        localStorage.setItem("key", "value"); // key为键, value为值
        localStorage.getItem("key"); // 获取key对应的值
        localStorage.removeItem("key"); // 删除key对应的值
        localStorage.clear(); // 清空所有的值
        ```
 - 注意: localStorage存储的数据会永久保存在本地, 除非手动删除

### sessionStorage

 - 本地存储
 - 关闭浏览器数据会消失
 - 容量5M - 10M
 - 临时生效, 关闭浏览器自动清除
 - 只能存储字符串
 - 同一浏览器, 同一域名下的所有页面共享
 - 用法:
     - ```js
        sessionStorage.setItem("key", "value"); // key为键, value为值
        sessionStorage.getItem("key"); // 获取key对应的值
        sessionStorage.removeItem("key"); // 删除key对应的值
        sessionStorage.clear(); // 清空所有的值
        ```
 - 注意: sessionStorage存储的数据会在浏览器关闭时自动删除

### Cookie

 - 最大容量4KB
 - 会随着http请求发送到服务器
 - 一般用于存储用户信息和用户行为
 - 生效时间: 一般为关闭浏览器后失效, 也可以设置过期时间


 - 在浏览器中查看cookie:
     - chrome: F12 -> Application -> Storage -> Cookies
     - firefox: F12 -> Storage -> Cookies
     - ie: F12 -> Storage -> Cookies

 - 参数：
     - name: cookie名称
     - value: cookie值
     - expires: cookie过期时间
         - GMT格式: Thu, 01 Jan 1970 00:00:00 GMT
     - path: cookie路径
         - 默认为当前路径
     - domain: cookie域名
     - secure: cookie是否只能通过https协议访问
         - 默认为false
     - httpOnly: cookie是否只能通过http协议访问
         - 默认为false
     - samesite: cookie是否同源
         - 默认为false
     - max-age: cookie过期时间, 单位为秒
         - 优先级高于expires
     - SameSite: cookie是否同源
         - 默认为false

 - 用法:
     - ```js
        document.cookie = 
        "name=value; expires=过期时间; path=路径; domain=域名; secure; httpOnly; samesite; max-age=过期时间; SameSite";
        ```

 - 万能清除cookie:
     - ```js
        document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        ```


## Canvas 画布

 - [案例文件](../study-codefile/new/Code/HTML5/code/8.1初始Canvas&基本API.html)

 - 用于绘制图形
 - 逐像素进行渲染，可以用于制作动画
 - 是容器，不具备绘制功能，需要js来绘制
 - 画布默认宽高为300px * 150px

### 基本API

#### getContext()

 - 用于获取画布上下文
 - 用法:
     - ```js
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ```

#### fillRect()

 - 用于绘制填充矩形
 - 用法:
     - ```js
        ctx.fillRect(x, y, width, height);
        ```
 - 参数:
     - x: 矩形左上角的x坐标
     - y: 矩形左上角的y坐标
     - width: 矩形的宽度
     - height: 矩形的高度

#### fillStyle

 - 用于设置填充颜色
 - 用法:
     - ```js
        ctx.fillStyle = "red";
        ```

#### strokeStyle

 - 用于设置描边颜色
 - 用法:
     - ```js
        ctx.strokeStyle = "red";
        ```

#### lineWidth

 - 用于设置描边宽度
 - lineWidth和border区别:
     - border增大,向外border宽度进行增加(向一个方向) 
     - linewidth增大,是向两个方向增大,默认值为1
 - 用法:
     - ```js
        ctx.lineWidth = 10;
        ```

#### strokeRect()

 - 用于绘制描边(边框)矩形
 - 用法:
     - ```js
        ctx.strokeRect(x, y, width, height);
        ```
 - 参数:
     - x: 矩形左上角的x坐标
     - y: 矩形左上角的y坐标
     - width: 矩形的宽度
     - height: 矩形的高度

#### clearRect()

 - 用于清除指定矩形区域
 - 用法:
     - ```js
        ctx.clearRect(x, y, width, height);
        ```
 - 参数:
     - x: 矩形左上角的x坐标
     - y: 矩形左上角的y坐标
     - width: 矩形的宽度
     - height: 矩形的高度

#### moveTo()

 - 用于设置路径起点
 - 用法:
     - ```js
        ctx.moveTo(x, y);
        ```
 - 参数:
     - x: 起点x坐标
     - y: 起点y坐标


#### lineTo()

 - 用于设置路径终点 , 可以用多次
 - 用法:
     - ```js
        ctx.lineTo(x, y);
        ```
 - 参数:
     - x: 直线终点的x坐标
     - y: 直线终点的y坐标

#### closePath()

 - 用于闭合路径
 - 用法:
     - ```js
        ctx.closePath();
        ```

#### stroke()

 - 用于绘制描边(边框)
 - 用法:
     - ```js
        ctx.stroke();
        ```

#### beginPath()

 - 用于开始绘制新路径
 - 用法:
     - ```js
        ctx.beginPath();
        ```

#### fill()

 - 用于填充路径
 - 用法:
     - ```js
        ctx.fill();
        ```

#### rect()

 - 用于绘制矩形路径
 - 用法:
     - ```js
        ctx.rect(x, y, width, height);
        ```
 - 参数:
     - x: 矩形左上角的x坐标
     - y: 矩形左上角的y坐标
     - width: 矩形的宽度
     - height: 矩形的高度

#### arc()

 - 用于绘制圆弧
 - 用法:
     - ```js
        ctx.arc(x, y, r, startAngle, endAngle, anticlockwise);
        ```
 - 参数:
     - x: 圆心x坐标
     - y: 圆心y坐标
     - r: 圆半径
     - startAngle: 起始角度
     - endAngle: 结束角度
     - anticlockwise: 是否逆时针

#### arcTo()

 - 用于绘制曲线
 - 用法:
     - ```js
        ctx.arcTo(x1, y1, x2, y2, r);
        ```
 - 参数:
     - x1: 第一个切点x坐标
     - y1: 第一个切点y坐标
     - x2: 第二个切点x坐标
     - y2: 第二个切点y坐标
     - r: 圆半径

#### quadraticCurveTo()

 - 用于绘制二次贝塞尔曲线
 - 用法:
     - ```js
        ctx.quadraticCurveTo(cpx, cpy, x, y);
        ```
 - 参数:
     - cpx: 控制点x坐标
     - cpy: 控制点y坐标
     - x: 结束点x坐标
     - y: 结束点y坐标

#### bezierCurveTo()

 - 用于绘制三次贝塞尔曲线
 - 用法:
     - ```js
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        ```
 - 参数:
     - cp1x: 第一个控制点x坐标
     - cp1y: 第一个控制点y坐标
     - cp2x: 第二个控制点x坐标
     - cp2y: 第二个控制点y坐标
     - x: 结束点x坐标
     - y: 结束点y坐标


#### 2d转换

 - translate(x, y): 平移
 - rotate(angle): 旋转
 - scale(x, y): 缩放
 - transform(a, b, c, d, e, f): 变换
     - a: 水平缩放
     - b: 水平倾斜
     - c: 垂直倾斜
     - d: 垂直缩放
     - e: 水平移动
     - f: 垂直移动
 - setTransform(a, b, c, d, e, f): 重置变换
 - save(): 保存当前状态
 - restore(): 恢复之前保存的状态

 - 注意：当使用以上方法时，需要使用save()和restore()方法来保存和恢复之前的状态


#### 绘制图片

 - drawImage(img, x, y, width, height): 绘制图片
     - img: 图片对象
     - x: 图片左上角x坐标
     - y: 图片左上角y坐标
     - width: 图片宽度
     - height: 图片高度

 - 用法:
     - ```js
        var img = new Image();
        img.src = "path";
        img.onload = function(){
            ctx.drawImage(img, 0, 0, 100, 100);
        }
        ```

 - 注意：drawImage()方法中的img参数可以是图片对象，也可以是canvas对象


#### 绘制文字

 - fillText(text, x, y, maxWidth): 绘制填充文字
     - text: 文字内容
     - x: 文字左下角x坐标
     - y: 文字左下角y坐标
     - maxWidth: 最大宽度

 - strokeText(text, x, y, maxWidth): 绘制描边文字
     - text: 文字内容
     - x: 文字左下角x坐标
     - y: 文字左下角y坐标
     - maxWidth: 最大宽度

 - font: 设置字体
 - textAlign: 设置水平方向的对齐方式
 - textBaseline: 设置垂直方向的对齐方式

 - 用法:
     - ```js
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("文字", 100, 100);
        ctx.strokeText("文字", 100, 100);
        ```

 - 注意：textAlign和textBaseline属性必须在fillText()和strokeText()方法之前设置

 - measureText(text): 测量文字宽度
     - text: 文字内容

## SVG 矢量图

 - [案例文件](../study-codefile/new/Code/HTML5/code/10.svg基础.html)

 - svg是矢量图，不会失真
 - canvas是位图，会失真
 - 基于xml语法
 - 使用标签绘制

### 引入方式

 - 直接引入
     - ```html
        <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="50" fill="red"></circle>
        </svg>
        ```
 - 使用img标签引入
     - ```html
        <img src="path" alt="">
        ```
 - 使用object标签引入
     - ```html
        <object type="image/svg+xml" data="path"></object>
        ```
 - 使用iframe标签引入
     - ```html
        <iframe src="path"></iframe>
        ```

### 基本标签

### svg

 - svg标签
 - 用法:
     - ```html
        <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="50" fill="red"></circle>
        </svg>
        ```
 - 属性:
     - width: svg宽度
     - height: svg高度
     - viewBox: svg视口大小
         - x: x坐标
         - y: y坐标
         - width: 宽度
         - height: 高度

#### rect

 - 用于绘制矩形
 - 用法:
     - ```html
        <rect x="0" y="0" width="100" height="100" fill="red"></rect>
        ```
 - 属性:
     - x: 矩形左上角x坐标
     - y: 矩形左上角y坐标
     - width: 矩形宽度
     - height: 矩形高度
     - fill: 填充颜色

#### circle

 - 用于绘制圆形
 - 用法:
     - ```html
        <circle cx="100" cy="100" r="50" fill="red"></circle>
        ```
 - 属性:
     - cx: 圆心x坐标
     - cy: 圆心y坐标
     - r: 圆半径
     - fill: 填充颜色

#### ellipse

 - 用于绘制椭圆
 - 用法:
     - ```html
        <ellipse cx="100" cy="100" rx="50" ry="30" fill="red"></ellipse>
        ```
 - 属性:
     - cx: 圆心x坐标
     - cy: 圆心y坐标
     - rx: x轴半径
     - ry: y轴半径
     - fill: 填充颜色

#### line

 - 用于绘制直线
 - 用法:
     - ```html
        <line x1="0" y1="0" x2="100" y2="100" stroke="red"></line>
        ```
 - 属性:
     - x1: 起点x坐标
     - y1: 起点y坐标
     - x2: 终点x坐标
     - y2: 终点y坐标
     - stroke: 描边颜色

#### g

 - 用于组合元素
 - g标签中定义的属性，会被子元素继承 ，只有公有属性才会被继承
 - 可以给g标签加一个id或class属性，然后通过css来设置样式
 - 用法:
     - ```html
        <g>
            <rect x="0" y="0" width="100" height="100" fill="red"></rect>
            <circle cx="100" cy="100" r="50" fill="red"></circle>
        </g>
        ```
 - 注意: g标签中的元素会作为一个整体进行变换

#### path

 - 用于绘制路径
 - 用法:
     - ```html
        <path d="M0 0 L100 100 L200 0 Z" fill="red"></path>
        ```
 - 属性:
     - d: 路径
         - M: 移动到
         - L: 画线到
         - Z: 闭合路径
 - 注意: path标签中的d属性值是一个字符串, 用于描述路径

#### polygon

 - 用于绘制多边形
 - 用法:
     - ```html
        <polygon points="0 0, 100 100, 200 0" fill="red"></polygon>
        ```
 - 属性:
     - points: 多边形的顶点坐标
         - x1 y1, x2 y2, x3 y3, ...

#### polyline

 - 用于绘制折线
 - 用法:
     - ```html
        <polyline points="0 0, 100 100, 200 0" fill="red"></polyline>
        ```
 - 属性:
     - points: 折线的顶点坐标
         - x1 y1, x2 y2, x3 y3, ...

#### use标签

 - 用于引用其他标签
 - 用法:
     - ```html
        <defs>
            <circle id="circle" cx="100" cy="100" r="50" fill="red"></circle>
        </defs>
        <use xlink:href="#circle"></use>
        ```
 - 属性:
     - xlink:href: 引用的元素id

#### defs标签

 - 用于定义元素
 - defs中定义的元素，只能在defs中使用，也可以通过use标签进行引用
 - 用法:
     - ```html
        <defs>
            <circle id="circle" cx="100" cy="100" r="50" fill="red"></circle>
        </defs>
        <use xlink:href="#circle"></use>
        ```
 - 注意: defs标签中定义的元素, 可以通过use标签进行引用


## 常用API

 - [案例文件](../study-codefile/new/Code/HTML5/code/11.状态&屏幕&文件&通知&地图api.html)

### 网络状态

 - navigator.onLine: 判断网络状态
     - true: 在线
     - false: 离线

 - 事件监听判断
     - online: 在线时触发
     - offline: 离线时触发

 - 注意: 
     - 事件监听必须写在window.onload事件中
     - 调试的时候 在浏览器控制台中 网络 默认节流那里选择offline或者online测试
     - 这个也就能判断一下有没有连接到电脑网卡
     - 正常判断需要用ajax做心跳检测

### 全屏和取消全屏

 - css里面先写好
     - ```css
        -浏览器兼容头-full-screen {
            width: 100%;
            height: 100%;
        }
        ```
 - js里面写
     - ```js
        // 全屏
        document.documentElement.兼容头requestFullscreen();
        // 取消全屏
        document.兼容头exitFullscreen();
        ```

### 文件

 - FileReader: 用于读取文件
 - File: 用于表示文件
 - Blob: 用于表示二进制数据
 - FileList: 用于表示文件列表

#### FileReader

 - FileReader.readAsText(file): 读取文本文件
 - FileReader.readAsDataURL(file): 读取图片文件
 - FileReader.readAsArrayBuffer(file): 读取二进制文件，返回一个ArrayBuffer对象
 - FileReader.readAsBinaryString(file): 读取二进制文件，返回一个二进制字符串
 - FileReader.onload: 读取完成时触发
 - FileReader.result: 读取的结果
 - FileReader.error: 读取错误时触发
 - FileReader.abort(): 取消读取

 - 用法例:
     - ```js
        var file = document.getElementById("file");
        file.onchange = function(){
            var files = file.files; // 获取文件列表
            var reader = new FileReader(); // 创建文件读取对象
            reader.readAsText(files[0]); // 读取文件
            reader.onload = function(){ // 读取完成时触发
                console.log(reader.result); // 输出读取的内容
            }
        }
        ```

### 通知管理

#### Notification

 - 用于创建通知
 - Notification.permission: 用于判断浏览器是否支持通知
     - granted: 支持
     - denied: 不支持
     - default: 默认
 - Notification.requestPermission(): 用于请求通知权限
 - Notification(title, options): 用于创建通知
     - title: 通知标题
     - options: 通知选项
         - body: 通知内容
         - icon: 通知图标
         - tag: 通知标签
         - renotify: 是否覆盖之前的通知
         - silent: 是否静音
         - data: 通知数据
         - actions: 通知操作
             - action: 操作名称
             - title: 操作标题
             - icon: 操作图标
 - Notification.onclick: 通知被点击时触发
 - Notification.onshow: 通知显示时触发
 - Notification.onclose: 通知关闭时触发
 - Notification.onerror: 通知出错时触发
 - Notification.close(): 关闭通知

 - 用法例:
     - ```js
        var btn = document.getElementById("btn");
        btn.onclick = function(){
            if(Notification.permission == "granted"){ // 判断浏览器是否支持通知
                var notification = new Notification("标题", { // 创建通知
                    body: "内容",
                    icon: "path",
                    tag: "标签",
                    renotify: true,
                    silent: true,
                    data: "数据",
                    actions: [
                        {
                            action: "action",
                            title: "标题",
                            icon: "path"
                        }
                    ]
                });
                notification.onclick = function(){ // 通知被点击时触发
                    console.log("通知被点击");
                }
                notification.onshow = function(){ // 通知显示时触发
                    console.log("通知显示");
                }
                notification.onclose = function(){ // 通知关闭时触发
                    console.log("通知关闭");
                }
                notification.onerror = function(){ // 通知出错时触发
                    console.log("通知出错");
                }
                setTimeout(function(){ // 5秒后关闭通知
                    notification.close();
                }, 5000);
            }else if(Notification.permission == "default"){ // 判断浏览器是否支持通知
                Notification.requestPermission(); // 请求通知权限
            }
        }
        ```

### 窗口失焦

 - window.onblur: 窗口失焦时触发
 - window.onfocus: 窗口获焦时触发

 - 用法例:
     - ```js
        window.onblur = function(){ // 窗口失焦时触发
            console.log("窗口失焦");
        }
        window.onfocus = function(){ // 窗口获焦时触发
            console.log("窗口获焦");
        }
        ```

 - 注意: 
     - window.onblur和window.onfocus事件必须写在window.onload事件中
     - window.onblur和window.onfocus事件在浏览器最小化时不会触发

 - 事件监听:
     - visibilitychange: 页面可见性改变时触发
     - document.hidden: 判断页面是否隐藏
         - true: 隐藏
         - false: 显示
     - document.visibilityState: 页面可见性
         - visible: 显示
         - hidden: 隐藏
         - prerender: 正在渲染
         - unloaded: 未加载

### 位置

 - navigator.geolocation: 用于获取位置
 - navigator.geolocation.getCurrentPosition(success, error, options): 用于获取当前位置
     - success: 获取成功时触发
     - error: 获取失败时触发
     - options: 选项
         - enableHighAccuracy: 是否启用高精度
         - timeout: 超时时间
         - maximumAge: 缓存时间
 - navigator.geolocation.watchPosition(success, error, options): 用于监听位置变化
     - success: 获取成功时触发
     - error: 获取失败时触发
     - options: 选项
         - enableHighAccuracy: 是否启用高精度
         - timeout: 超时时间
         - maximumAge: 缓存时间
 - Position: 用于表示位置
 - Position.coords: 用于表示位置坐标
 - Position.coords.latitude: 用于表示纬度
 - Position.coords.longitude: 用于表示经度
 - Position.coords.accuracy: 用于表示精度
 - Position.coords.altitude: 用于表示海拔
 - Position.coords.altitudeAccuracy: 用于表示海拔精度
 - Position.coords.heading: 用于表示方向
 - Position.coords.speed: 用于表示速度
 - Position.timestamp: 用于表示时间戳

 - 用法例:
     - ```js
        navigator.geolocation.getCurrentPosition(function(position){ // 获取当前位置
            console.log(position.coords.latitude); // 输出纬度
            console.log(position.coords.longitude); // 输出经度
        }, function(error){ // 获取失败时触发
            console.log(error);
        }, {
            enableHighAccuracy: true, // 是否启用高精度
            timeout: 5000, // 超时时间
            maximumAge: 0 // 缓存时间
        });
        navigator.geolocation.watchPosition(function(position){ // 监听位置变化
            console.log(position.coords.latitude); // 输出纬度
            console.log(position.coords.longitude); // 输出经度
        }, function(error){ // 获取失败时触发
            console.log(error);
        }, {
            enableHighAccuracy: true, // 是否启用高精度
            timeout: 5000, // 超时时间
            maximumAge: 0 // 缓存时间
        });
        ```
 - 注意:
     - getCurrentPosition()和watchPosition()方法必须在https协议下才能使用
     - getCurrentPosition()和watchPosition()方法必须在服务器上才能使用