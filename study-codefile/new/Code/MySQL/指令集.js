// 增
// insert into

// 删
// delete

// 改/更新
// update

// 查
// select

// 四种常用语法

// where 条件
// and 和 or 运算符
// order by 运算符
// count(*) 函数
// limit 分页

// 组合用法 例子
// select * from 表名 where 条件 order by 字段名 limit 0,10 用来分页
// 0,10 表示从第0条开始，取10条数据


// 五种常用函数

// count() 统计
// max() 最大值
// min() 最小值
// sum() 求和
// avg() 平均值


// 数据类型
// int 整数
// varchar 字符串 
// date 日期
// text 文本
// blob 二进制
// enum 枚举
// set 集合

// 创建表
// create table 数据库名.表名(字段名 数据类型,字段名 数据类型,字段名 数据类型)
// 例
/*
CREATE TABLE Client2024 (
		id INT AUTO_INCREMENT PRIMARY KEY,
		campus VARCHAR(255),
		degree VARCHAR(255),
		major VARCHAR(255),
		username VARCHAR(255),
		account VARCHAR(255),
		password VARCHAR(255),
		tasklist TEXT,
		remark TEXT
)

id INT AUTO_INCREMENT PRIMARY KEY 自增主键
id 名称
INT 整数
AUTO_INCREMENT 自增
PRIMARY KEY 主键

campus VARCHAR(255) 字符串 255长度 最高255个字符


*/

// 逻辑与
// AND

// 逻辑或
// OR

// 逻辑非
// NOT

// 模糊查询
// LIKE '%关键字%'
// 百分号%表示任意字符

// 排序
// ORDER BY 字段名 ASC|DESC
// ASC 升序
// DESC 降序
/*
查询所有数据所有字段 按照指定条件降序(单条件)降序
SELECT * FROM 表名 ORDER BY 字段名 DESC

查询所有数据所有字段 按照指定条件升序(单条件)升序
SELECT * FROM 表名 ORDER BY 字段名 ASC




*/

// 分组
// GROUP BY 字段名



