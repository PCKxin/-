# 2.完成以下题目

## 第1题

1、创建数据库day02_test01db

```sql
create database day02_test01db;
```

2、创建表格pet

```sql
use day02_test01db;
create table pet (
    name varchar(20),
    owner varchar(20),
    species varchar(20),
    sex char(1),
    birth year,
    death year
);
```

| 字段名  | 字段说明 | 数据类型    |
| ------- | -------- | ----------- |
| name    | 宠物名称 | varchar(20) |
| owner   | 宠物主人 | varchar(20) |
| species | 种类     | varchar(20) |
| sex     | 性别     | char(1)     |
| birth   | 出生日期 | year        |
| death   | 死亡日期 | year        |

3、添加记录
```sql
insert into pet (name, owner, species, sex, birth, death) values
('Fluffy', 'harold', 'Cat', 'f', 2003, 2010),
('Claws', 'gwen', 'Cat', 'm', 2004, NULL),
('Buffy', NULL, 'Dog', 'f', 2009, NULL),
('Fang', 'benny', 'Dog', 'm', 2000, NULL),
('bowser', 'diane', 'Dog', 'm', 2003, 2009),
('Chirpy', NULL, 'Bird', 'f', 2008, NULL);
```


| name   | owner  | species | sex  | birth | death |
| ------ | ------ | ------- | ---- | ----- | ----- |
| Fluffy | harold | Cat     | f    | 2003  | 2010  |
| Claws  | gwen   | Cat     | m    | 2004  |       |
| Buffy  |        | Dog     | f    | 2009  |       |
| Fang   | benny  | Dog     | m    | 2000  |       |
| bowser | diane  | Dog     | m    | 2003  | 2009  |
| Chirpy |        | Bird    | f    | 2008  |       |

4、 添加字段主人的生日owner_birth。

```sql
alter table pet add owner_birth year;
```

5、 将名称为Claws的猫的主人改为kevin

```sql
update pet set owner = 'kevin' where name = 'Claws';
```

6、 将没有死的狗的主人改为duck

```sql
update pet set owner = 'duck' where species = 'Dog' and death is null;
```

7、 查询没有主人的宠物的名字；

```sql
select name from pet where owner is null;
```

8、 查询已经死了的cat的姓名，主人，以及去世时间；

```sql
select name, owner, death from pet where species = 'Cat' and death is not null;
```

9、 删除已经死亡的狗

```sql
delete from pet where species = 'Dog' and death is not null;
```

10、查询所有宠物信息

```sql
select * from pet;
```


## 第2题

案例：

1、创建数据库day02_test02_library

```sql
create database day01_test02_library;
```

2、创建表格books

```sql
use day02_test02_library;
create table books(
    b_id int primary key auto_increment,
    b_name varchar(50) not null,
    authors varchar(100) not null,
    price float not null,
    pubdate year not null,
    note varchar(100),
    num int not null
);
```

| 字段名  | 字段说明 | 数据类型      |
| ------- | -------- | ------------- |
| b_id    | 书编号   | int           |
| b_name  | 书名     | varchar（50） |
| authors | 作者     | varchar(100)  |
| price   | 价格     | float         |
| pubdate | 出版日期 | year          |
| note    | 说明     | varchar(100)  |
| num     | 库存     | int           |

3、使用alter语句给books按如下要求增加相应的约束

```sql
alter table books
    add constraint b_name_unique unique (b_name),
    add constraint authors_not_null check (authors is not null),
    add constraint price_positive check (price > 0),
    add constraint pubdate_check check (pubdate > 1900),
    add constraint num_positive check (num >= 0);
```

| 字段名  | 字段说明 | 数据类型      | 主键 | 外键 | 非空 | 唯一 | 自增 |
| ------- | -------- | ------------- | ---- | ---- | ---- | ---- | ---- |
| b_id    | 书编号   | int           | 是   | 否   | 是   | 是   | 是   |
| b_name  | 书名     | varchar（50） | 否   | 否   | 是   | 否   | 否   |
| authors | 作者     | varchar(100)  | 否   | 否   | 是   | 否   | 否   |
| price   | 价格     | float         | 否   | 否   | 是   | 否   | 否   |
| pubdate | 出版日期 | year          | 否   | 否   | 是   | 否   | 否   |
| note    | 说明     | varchar(100)  | 否   | 否   | 否   | 否   | 否   |
| num     | 库存     | int           | 否   | 否   | 是   | 否   | 否   |

4、向books表中插入记录

```sql
insert into books (b_name, authors, price, pubdate, note, num) values
('Tal of AAA', 'Dickes', 23, 1995, 'novel', 11),
('EmmaT', 'Jane lura', 35, 1993, 'joke', 22),
('Story of Jane', 'Jane Tim', 40, 2001, 'novel', 0),
('Lovey Day', 'George Byron', 20, 2005, 'novel', 30),
('Old land', 'Honore Blade', 30, 2010, 'law', 0),
('The Battle', 'Upton Sara', 30, 1999, 'medicine', 40),
('Rose Hood', 'Richard haggard', 28, 2008, 'cartoon', 28);
```


| b_id | b_name        | authors         | price | pubdate | note     | num  |
| ---- | ------------- | --------------- | ----- | ------- | -------- | ---- |
| 1    | Tal of AAA    | Dickes          | 23    | 1995    | novel    | 11   |
| 2    | EmmaT         | Jane lura       | 35    | 1993    | joke     | 22   |
| 3    | Story of Jane | Jane Tim        | 40    | 2001    | novel    | 0    |
| 4    | Lovey Day     | George Byron    | 20    | 2005    | novel    | 30   |
| 5    | Old land      | Honore Blade    | 30    | 2010    | law      | 0    |
| 6    | The Battle    | Upton Sara      | 30    | 1999    | medicine | 40   |
| 7    | Rose Hood     | Richard haggard | 28    | 2008    | cartoon  | 28   |

5、找出“novel”类型的书，按照价格降序排列

```sql
select * from books where note = 'novel' order by price desc;
```

6、查询图书信息，按照库存量降序排列，如果库存量相同的按照note升序排列

```sql
select * from books order by num desc, note asc;
```

7、按照note分类统计书的数量

```sql
select note, count(*) from books group by note;
```

8、按照note分类统计书的库存量，显示库存量超过30本的

```sql
select note, sum(num) from books group by note having sum(num) > 30;
```

9、查询所有图书，每页显示5本，显示第二页

```sql
select * from books limit 5, 5;
```


10、按照note分类统计书的库存量，现在库存量最多的

```sql
select note, sum(num) from books group by note order by sum(num) desc limit 1;
```


11、查询书名达到10个字符的书，不包括里面的空格

```sql
select * from books where length(b_name) - length(replace(b_name, ' ', '')) = 9;
```


12、查询书名和类型，其中

​	note值为novel显示小说，law显示法律，medicine显示医药，cartoon显示卡通，joke显示笑话

```sql
select b_name, case note
    when 'novel' then '小说'
    when 'law' then '法律'
    when 'medicine' then '医药'
    when 'cartoon' then '卡通'
    when 'joke' then '笑话'
    else '其他'
end as note from books;

-- case 作用是判断note的值，然后返回对应的值
-- when 作用是判断note的值，然后返回对应的值 
---- 如果note的值不在when中，就返回else的值 如果没有else的值，就返回null
-- then 作用是返回对应的值
-- end 作用是结束case语句
-- as 作用是给返回的值起别名
-- from 作用是指定查询的表

-- 以上sql语句的意思是查询books表中的b_name和note字段, 并在终端显示时将note字段的值转换为对应的中文

-- case when then end 语句分别代表判断，返回，结束，当满足条件时返回对应的值，不满足时返回null
-- case when then else end 语句分别代表判断，返回，否则返回，结束，当满足条件时返回对应的值，不满足时返回else的值
```

13、查询书名、库存，其中

​	num值超过30本的，显示滞销，大于0并低于10的，显示畅销，为0的显示显示无货，其他的显示正常

```sql
select b_name, case
    when num > 30 then '滞销'
    when num > 0 and num < 10 then '畅销'
    when num = 0 then '无货'
    else '正常'
end as num from books;
```

14、统计库存量前三名的图书

```sql
select * from books order by num desc limit 3;
-- limit 3 代表查询结果的前三条数据
```


15、找出最早出版的一本书

```sql
select * from books order by pubdate asc limit 1;
-- limit 1 代表查询结果的第一条数据
```

16、找出novel中单价最高的一本书

```sql
select * from books where note = 'novel' order by price desc limit 1;
-- desc 代表降序排列
```

17、找出书名中字数最多的一本书，不含空格

```sql
select * from books order by length(b_name) - length(replace(b_name, ' ', '')) desc limit 1;
-- replace(参数一, 参数二, 参数三) 代表将参数一中的参数二替换为参数三
-- length(参数) 代表返回参数的长度

-- length(b_name) - length(replace(b_name, ' ', '')) 代表返回b_name中的字符数减去空格的字符数
-- order by length(b_name) - length(replace(b_name, ' ', '')) desc 代表按照字符数降序排列
```

