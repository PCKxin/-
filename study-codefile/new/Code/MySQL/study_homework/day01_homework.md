# 1.将上课内容练会

# 2.完成以下题目

## 第1题

1、创建数据库day01_test01_market

```sql
create database day01_test01_market;
```

2、创建表格customers

```sql
use day01_test01_market;
create table customers(
    c_num int,
    c_name varchar(50),
    c_contact varchar(50),
    c_city varchar(50),
    c_birth date
);
```

| 字段名    | 数据类型    |
| --------- | ----------- |
| c_num     | int         |
| c_name    | varchar(50) |
| c_contact | varchar(50) |
| c_city    | varchar(50) |
| c_birth   | date        |

- 展示表结构

```sql
desc day01_test01_market.customers;
```

**要求3：**将c_contact字段移动到c_birth字段后面

```sql
alter table customers modify c_contact varchar(50) after c_birth;
```

**要求4：**将c_name字段数据类型改为 varchar(70)

```sql
alter table customers modity c_name varchar(70);
```

**要求5：**将c_contact字段改名为c_phone

```sql
alter table customers change c_contact c_phone varchar(50);
```

**要求6：**增加c_gender字段到c_name后面，数据类型为char(1)

```sql
alter table customers add c_gender char(1) after c_name;
```

**要求7：**将表名改为customers_info

```sql
alter table customers rename customers_info;
```

**要求8：**删除字段c_city

```sql
alter table customers_info drop c_city;
```

## 第2题

1、创建数据库day01_test02_company

```sql
create database day01_test02_company;
```

2、创建表格employees

```sql
use day01_test02_company;
create table employees(
    emp_num int,
    first_name varchar(50),
    last_name varchar(50),
    mobile varchar(25),
    code int,
    birth date,
    note varchar(255),
    sex varchar(5)
);
```

| 字段名    | 数据类型                 |
| ------------- | ---------------------------- |
| emp_num   | int                  |
| first_name | varchar(50)             |
| last_name | varchar(50)             |
| mobile    | varchar(25)              |
| code      | int                    |
| birth     | date                     |
| note      | varchar(255）                |
| sex       | varchar（5） |

**要求3：**将表employees的mobile字段修改到code字段后面。

```sql
alter table employees modify mobile varchar(25) after code;
```

**要求4：**将表employees的birth字段改名为birthday;

```sql
alter table employees change birth birthday date;
```

**要求5：**修改sex字段，数据类型为char(1)。

```sql
alter table employees modify sex char(1);
```

**要求6：**删除字段note；

```sql
alter table employees drop note;
```

**要求7：**增加字段名bonus，数据类型为double；

```sql
alter table employees add bonus double;
```

**要求8：**将表employees的名称修改为 employees_info

```sql
alter table employees rename employees_info;
```

## 第3题

1、创建数据库day01_test03db

```sql
create database day01_test03db;
```

2、创建表格employee(数据类型根据数据自己决定),并添加记录

```sql
create table employee(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name varchar(50),
    sex varchar(50),
    salary decimal(10,2),
    addr varchar(255)
) AUTO_INCREMENT=10000;
```
- 添加数据
```sql
INSERT INTO employee(name, sex, salary, addr) VALUES('张一一', '男', 1001.58, '广东韶关'), ('刘小红', '女', 1201.21, '广东江门'),....;
```

| **id** | **name** | **sex** | **salary** | **addr** |
| ------ | -------- | ------- | ---------- | -------- |
| 10001  | 张一一   | 男      | 1001.58    | 广东韶关 |
| 10002  | 刘小红   | 女      | 1201.21    | 广东江门 |
| 10003  | 李四     | 男      | 1004.11    | 广东佛山 |
| 10004  | 刘小强   | 男      | 1501.23    | 广东深圳 |
| 10005  | 王艳     | 女      | 1405.16    | 广东广州 |

**要求3：**查询出薪资在1200~1300之间的员工信息。

```sql
SELECT salary FROM employee WHERE salary >=1200 AND salary <=1300
```

**要求4：**查询出姓“刘”的员工的工号，姓名，家庭住址。

```sql
SELECT * FROM employee WHERE name LIKE '%刘%';
```

**要求5：**查询出所有人的信息外加每个人的年薪

```sql
SELECT *, salary * 12 AS annual_salary FROM employee;
```

**要求6：**查询出名字中带“小”的员工

```sql
SELECT * FROM employee WHERE name LIKE '%小%';
```

**要求7：**查询广东深圳并且工资大于1200的员工信息

```sql
SELECT * FROM employee WHERE addr = '广东深圳' AND salary > 1200;
```

**要求8：**查询广东深圳或者工资大于1200的员工信息

```sql
SELECT * FROM employee WHERE addr = '广东深圳' OR salary > 1200;
```
