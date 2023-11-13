<?php
//头部的声明：content-type：文档的类型为文本/网页形式
//          charset：文本编码格式为utf-8
header('content-type:text/html;charset="utf-8"');
error_reporting(0);// 关闭错误报告

$username = $_POST['username'];//用post方式获取username的值
$age = $_POST['age'];//用post方式获取age的值

echo "你的名字：{$username}，年龄：{$age}";//输出