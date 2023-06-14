```css
    <style type="text/css">   //说明下列为css文本  //写在头部，定义整体文本
        ul{
            list-style-type: square;   //定义无序列表默认符号为方块
        }
        li{ 
            color:orange;   //定义列表为橙色
        }
        a{ 
            text-decoration:none;  //定义a标签文本装饰为无
            color:gray;  //颜色为灰色
        }
        a:hover{   //定义a标签鼠标活动效果
                text-decoration: underline;   //产生下划线
                color:orange;   //颜色变橙色
        }
        ul li::marker{
            color:red;   //改无序列表符号颜色
            font-size: XXpx  //符号大小
            content: "😍"  更改任意形状
        }
        img{
            width: 600px;  宽
            aspect-ratio: auto 600/840;
            /* height:840px */
            position:absolute;  绝对定位
            right:0;  
            top:0
        }
        p{
            background-color:yellow
        }
p.padding{
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            padding-right: 10px;
        }
    </style>
```