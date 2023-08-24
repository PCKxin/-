## 表单

作用：
收集信息，提交给后台
常见标签：`form`,`input`,`textarea`,`select`,`option`

`form`标签:
将所有表单标签放在里面
```html
<form>
    姓名:<input type="text" placeholder="name" size="20" maxlength="5" value="">  <input type="submit" value="提交"> <br>
    密码:<input type="password" placeholder="password" size="40" maxlength="20" > <input type="submit" value="提交"><br>

    性别:<input type="radio" value="boy" name="sex" cheaked="cheaked">男孩
        <input type="radio" value="girl" name="sex" cheaked="cheaked">女孩<br>

    爱好:<input type="checkbox" name="hobbies" value="singing">唱歌
        <input type="checkbox" name="hobbies" value="dance">跳舞
        <input type="checkbox" name="hobbies" value="tour">旅行
</form>
```
`value`属性

    对于 "button"、"reset"、"submit" 类型 - 定义按钮上的文本

    对于 "text"、"password"、"hidden" 类型 - 定义输入字段的初始（默认）值
    
    对于 "checkbox"、"radio"、"image" 类型 - 定义与 input 元素相关的值
`input`标签

单行文本框
语法：<input type="text">
属性：
value: 设定输入字段初始值
size: 设置文本框的长度
maxlength: 设置文本框最多可输入的字符串
placeholder: 提示文本

密码文本框
语法：<input type="password">

单选框:
语法： <input type="radio" name="组名" value="取值" cheaked="选项">
name: 表示单选框所在的组名
value: 定义与元素相关的值
cheaked: 表示选中的某一个选项
placeholder:提示文本

复选框：
语法：<input type="checkbox" name="组名" value="取值">

按钮
普通按钮:<input type="button" value="组名（按钮的字）">
提交按钮:<input type="submit" value="组名">
重置按钮:<input type="reset" value="组名">
