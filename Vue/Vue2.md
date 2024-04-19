## 简介

- Vue.js 是一套构建用户界面的渐进式框架
    - 通俗来讲就是 Vue.js 是一个用来构建 Web 界面的框架

- 开发者是尤雨溪
    - 于2014年开源

### 特点

- 渐进式框架
    - 逐步增强的框架
    - 适用于构建单页面应用
    - 也适用于构建复杂的 Web 应用

- 轻量化
    - 体积小
    - 运行速度快

## 使用方法

### CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

### npm 安装

```shell
npm install vue
```

### 直接下载

- 开发版本
    - 特点: 包含完整的警告和调试模式
  
- 生产版本
    - 特点: 删除了警告和调试模式


## 正课开始

### 1. 初识Vue

#### 创建Vue实例

- 使用`var` 和 `new` 关键字创建 `Vue 实例` 的区别
    - 使用 `var` 关键字创建的 `Vue 实例`，**可以**在控制台中访问, 也就是说var 创建的是`全局`变量
    - 使用 `new` 关键字创建的 `Vue 实例`，**无法**在控制台中访问, 也就是说new 创建的是`局部`变量

- el
    - 作用: 指定 Vue 实例要控制的区域
    - 值: CSS 选择器, 选择器一般是 id 选择器
- data
    - 作用: 用于存储数据
    - 值: 对象
- methods
    - 作用: 用于存储方法, 供页面调用
    - 值: 对象
- computed
    - 作用: 用于计算属性, 依赖其他属性值, 只有当依赖的属性值发生变化时, 才会重新计算
    - 值: 对象

```js
var vm = new Vue({
    el: '',
    data:{},
    methods:{},
    computed:{},
    
});
```

##### 关闭生产环境提示

```js
Vue.config.productionTip = false;
```

- 不起作用原因和解决方法
    - 原因
        - 最新版Chrome中, 在script中使用`settimeout`, 将在允许第一个js完成后立即回调, 也就是说`setTimeout`的时间设置为`0`时, 会立即执行
        - 但是在Vue.config.productionTip = false; 这个语句执行时, Vue实例还没有创建, 所以不会生效
    - 解决方法
        - 1.直接在源码中修改productionTip = `false`;
        - 2.把源码中判断productionTip的setTimeout时间改长

##### 案例

```html
<body>
    <div id="app">
        <h1>{{ message }}</h1>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
            }
        });
    </script>
</body>
```

### 2. 模板语法

#### 插值表达式

- 作用: 将数据渲染到页面中

- 语法: `{{}}`

- 注意: 插值表达式中只能写单个表达式, 不能写语句

```html
<div id="app">
    <h1>{{ message }}</h1>
    <h2>{{ 1 + 1 }}</h2>
    <h3>{{ isShow ? '显示' : '隐藏' }}</h3>
    <p>{{message.split('').reverse().join('')}}</p>
</div>
```

#### 其他插值指令

- `v-html`: 用于解析html标签
    - 写法例:
        - ```html
            <div v-html="htmlStr"></div>
          ```

- `v-text`: 用于解析文本内容
    - 写法例:
        - ```html
            <div v-text="message"></div>
          ```

- `v-pre`: 用于跳过这个元素和它的子元素的编译过程(不解析标签的内容)
    - 写法例:
        - ```html
            <div v-pre>{{ message }}</div>
          ```

- `v-cloak`: 用于解决插值表达式闪烁问题
    - 写法例:
        - ```html
            <div v-cloak>{{ message }}</div>
          ```
    - css解决闪烁问题
        - ```css
            [v-cloak] {
                display: none;
            }
          ```

- `v-once`: 用于只渲染一次
    - 写法例:
        - ```html
            <div v-once>{{ message }}</div>
          ```

- 上例js
    - ```js
        var vm = new Vue({
            el: '#app',
            data: {
                message: 'Shiroko online',
                htmlStr: '<h2>Shiroko online</h2>'
            }
        });
      ```

#### 案例

```html
<body>
    <div id="app">
        <h1>{{ message }}</h1>
        <h2>{{ 1 + 1 }}</h2>
        <h3>{{ isShow ? '显示' : '隐藏' }}</h3>
        <p>{{message.split('').reverse().join('')}}</p>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                message: 'Shiroko online',
                isShow: true
            }
        });
    </script>
</body>
```


### 3. 数据绑定

#### v-bind 单项数据绑定

- 解释: 数据只能从数据源流向视图, 不能从视图流向数据源
- 作用: 将数据绑定到元素的属性上

- 语法: `v-bind:属性名="数据"`
    - 简写: `:属性名="数据"`

- 案例

```html
<div id="app">
    <img :src="imgUrl" alt="">
    <input type="text" :value="message">
    <!-- 标签数据绑定 -->
    <h2 :x="message">Shiroko online</h2>
</div>
```
```js
var vm = new Vue({
    el: '#app',
    data: {
        imgUrl: 'Path',
        message: 'Shiroko online'
    }
});
```

#### v-model 双向数据绑定

- 解释: 数据可以从数据源流向视图, 也可以从视图流向数据源
- 作用: 将数据绑定到表单元素上, 实现双向数据绑定, 视图和数据源的数据保持同步

- 语法: `v-model:属性名="数据"`
    - 适用于: input, textarea, select
    - 简写: `v-model="数据"`

- 案例

```html
<div id="app">
    <input type="text" v-model="message">
    <h1>{{ message }}</h1>
</div>
```
```js
var vm = new Vue({
    el: '#app',
    data: {
        message: 'Shiroko online'
    }
});
```

### 4. MVVM模型 

#### M 数据层

- Model 数据模型 
    - 作用: 用于存储数据

#### V 展示层

- View 视图 
    - 作用: 用于展示数据
    - 由HTML和CSS组成

#### VM 业务逻辑层

- ViewModel 视图模型 
    - 作用: 用于连接数据和视图
    - Vue.js是一个MVVM框架 通过Vue.js可以实现数据的双向绑定 也就是数据的变化会影响视图的变化 视图的变化也会影响数据的变化
    - 数据和视图之间的桥梁(数据绑定 事件监听 数据变化视图自动更新)

### 5. 事件处理

#### v-on 事件绑定

- 作用: 用于绑定事件监听
- 语法: `v-on:事件名="事件处理函数"`
    - 简写: `@事件名="事件处理函数"`
    - 事件处理函数: 一般是methods中的方法

- 事件的回调函数需要定义在methods中, 事件回调函数的this指向Vue实例
- methods中的函数, 不要用箭头函数, 因为箭头函数的this指向的是Vue实例

#### $event 传递事件对象

- `$` 用于传递参数
- 作用: 用于传递事件对象
- 语法: `@事件名="事件处理函数(参数,$event)"`

- 案例

```html
<div id="app">
    <button @click="show">显示</button>
    <button @click="hide">隐藏</button>
    <h1 v-if="isShow">Shiroko online</h1>
    <button @click="showInfo('我是被传递的参数',$event)">事件对象</button>
</div>
```
```js
var vm = new Vue({
    el: '#app',
    data: {
        isShow: true
    },
    methods: {
        show() {
            this.isShow = true;
        },
        hide() {
            this.isShow = false;
        },
        showInfo(msg, event) {
            console.log(msg); // 我是被传递的参数
            console.log(event); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
        }
        // 普通函数的this指向Vue实例
        // showInfo: (msg, event) => {}
        // 箭头函数的this指向window
    }
});
```

### 以上内容应用案例

- 使用时请注意引入Vue2.js 

#### 姓名案例(双向数据绑定 插值语法)


```html
    <body>
        <div id="_name">
            姓: <input type="text" v-model="last_name"> <br>
            名: <input type="text" v-model="first_name"> <br>
            全名: {{last_name}}_{{first_name}}
        </div>
        <script>
            Vue.config.productionTip = false
            // 创建一个vue实例
            var last_name = new Vue({
                el: '#_name',
                data: {
                    last_name: 'Sunaokami',
                    first_name: 'Shiroko'
                }
            })
        </script>
    </body>
```

#### 姓名案例(双向 插值 计算属性)

```html
    <body>
        <div id="_name">
            姓: <input type="text" v-model="last_name"> <br>
            名: <input type="text" v-model="first_name"> <br>
            <p>全名：{{fullName}}</p>
            <p>全名：{{fullName}}</p>
            <p>全名：{{fullName}}</p>
            <p>全名：{{fullName}}</p>
        </div>
        <script>
            Vue.config.productionTip = false
            // 创建一个vue实例
            var vm = new Vue({
                el: '#_name',
                data: {
                    last_name: 'Sunaokami',
                    first_name: 'Shiroko'
                },
                // 计算属性 computed 带有缓存功能
                // 定义: 要用的属性不存在, 要通过已有属性计算得到
                // 原理: 底层借助Object.defineProperty()方法, 为对象添加属性, 并为属性添加getter和setter
                        // get什么时候执行
                        // 1. 初次读取一次
                        // 2. 依赖的属性值发生变化时
                // 作用: 用于计算属性, 依赖其他属性值, 只有当依赖的属性值发生变化时, 才会重新计算
                computed: {
                    fullName: {
                        get: function() {
                            console.log('get被调用了')
                            return this.last_name + '-' + this.first_name
                        },
                        set: function(value) {
                            console.log('set被调用了', value)
                            var arr = value.split('-')
                            this.last_name = arr[0]
                            this.first_name = arr[1]
                        }
                    }
                }
            })
        </script>
    </body>
```