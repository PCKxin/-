<?php
//头部的声明：content-type：文档的类型为文本/网页形式
//          charset：文本编码格式为utf-8
header('content-type:text/html;charset="utf-8"');
error_reporting(0);// 关闭错误报告

$user = $_GET['username'];//用get方式获取username的值
$age = $_GET['age'];//用get方式获取age的值

echo "你的名字是：{$user}，年龄为：{$age}";//输出