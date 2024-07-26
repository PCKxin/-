# 1.将上课内容练会

# 2.完成以下题目

## 第1题

案例：

1、创建数据库：day03_test01_company

```sql
create database day03_test01_company;
```

2、在此数据库下创建如下3表，数据类型，宽度，是否为空根据实际情况自己定义。

A． 部门表（department）：部门编号（depid），部门名称（depname），部门简介（depinfo）；其中部门编号为主键。

```sql
create table department(
    depid int primary key, 
    depname varchar(50),
    depinfo varchar(255)
);
``` 

B． 雇员表（emoloyee）：雇员编号（empid），姓名（name），性别（sex），职称（title），出生日期（birthday），所在部门编号（depid）；其中

* ​	雇员编号为主键；
* ​	部门编号为外键，外键约束等级为（on update cascade 和on delete set null）；
    * on update cascade：如果部门编号被修改，那么雇员表中的部门编号也会被修改；
    * on delete set null：如果部门编号被删除，那么雇员表中的部门编号会被设置为null；
* ​	性别默认为男；

```sql
create table employee(
    empid int primary key,
    name varchar(50),
    sex char(1) default '男',
    title varchar(50),
    birthday date,
    depid int,
    foreign key(depid) references department(depid) on update cascade on delete set null
    -- foreign 意思是外键，key是键，dep是department的缩写，id是编号
);
```

C． 工资表（salary）：雇员编号（empid），基本工资（basesalary），职务工资（titlesalary），扣除（deduction）。

- ​	其中雇员编号为主键。

- ​	给工资表（salary）的雇员编号（empid）增加外键约束，外键约束等级为（on update cascade 和on delete cascade）

* on update cascade：如果雇员编号被修改，那么工资表中的雇员编号也会被修改；
* on delete cascade：如果雇员编号被删除，那么工资表中的雇员编号也会被删除；


```sql
create table salary(
    empid int primary key,
    basesalary float,
    titlesalary float,
    deduction float,
    foreign key(empid) references employee(empid) on update cascade on delete cascade
);
```


3、添加数据如下：

部门表：

| 部门编号 | 部门名称 | 部门简介     |
| -------- | -------- | ------------ |
| 111      | 生产部   | Null         |
| 222      | 销售部   | Null         |
| 333      | 人事部   | 人力资源管理 |

```sql
insert into department values(111, '生产部', null),(222, '销售部', null),(333, '人事部', '人力资源管理');
```

 雇员表：

| 雇员编号 | 姓名 | 性别 | 职称       | 出生日期   | 所在部门编号 |
| -------- | ---- | ---- | ---------- | ---------- | ------------ |
| 1001     | 张三 | 男   | 高级工程师 | 1975-1-1   | 111          |
| 1002     | 李四 | 女   | 助工       | 1985-1-1   | 111          |
| 1003     | 王五 | 男   | 工程师     | 1978-11-11 | 222          |
| 1004     | 张六 | 男   | 工程师     | 1999-1-1   | 222          |

```sql
insert into employee values(1001, '张三', '男', '高级工程师', '1975-1-1', 111),
                            (1002, '李四', '女', '助工', '1985-1-1', 111),
                            (1003, '王五', '男', '工程师', '1978-11-11', 222),
                            (1004, '张六', '男', '工程师', '1999-1-1', 222);
```

 工资表：

| 雇员编号 | 基本工资 | 职务工资 | 扣除 |
| -------- | -------- | -------- | ---- |
| 1001     | 2200     | 1100     | 200  |
| 1002     | 1200     | 200      | NULL |
| 1003     | 2900     | 700      | 200  |
| 1004     | 1950     | 700      | 150  |

```sql
insert into salary values(1001, 2200, 1100, 200),
                        (1002, 1200, 200, null),
                        (1003, 2900, 700, 200),
                        (1004, 1950, 700, 150);
```



5、查询出每个雇员的雇员编号，姓名，职称，应发工资（基本工资+职务工资），实发工资（基本工资+职务工资-扣除）。

```sql
-- 多表查询
select e.empid, e.name, e.title, s.basesalary+s.titlesalary as 应发工资, s.basesalary+s.titlesalary-s.deduction as 实发工资 
from employee e, salary s 
where e.empid = s.empid;

-- e. 代表employee表，s. 代表salary表
-- where e.empid = s.empid; 代表两个表通过empid进行关联
```

6、查询销售部门的雇员姓名及其基本工资

```sql
select e.name, s.basesalary
from employee e, salary s
where e.empid = s.empid and e.depid = 222;
```

7、查询姓“张”且年龄小于40的员工的全部信息和年龄

```sql
select e.*, year(now()) - year(e.birthday) as 年龄
-- year(now()) 意思是当前年份
-- year(e.birthday) 意思是员工的出生年份
from employee e
where e.name like '张%' and year(now()) - year(e.birthday) < 40;
```

8、查询所有男员工的基本工资和职务工资

```sql
select e.name, s.basesalary, s.titlesalary
from employee e, salary s
where e.empid = s.empid and sex = '男';
```

9、查询基本工资低于2000的员工姓名和职称、所在部门名称

```sql
select e.name, e.title, d.depname
from employee e, salary s, department d
where e.empid = s.empid and e.depid = d.depid and s.basesalary < 2000;
```

10、查询员工总数

```sql
select count(*) as 员工总数
from employee;
```

11、查询部门总数

```sql
select count(*) as 部门总数
from department;
```

12、查询应发工资的平均工资和最高工资、最低工资

```sql
-- avg() 求平均值
-- max() 求最大值
-- min() 求最小值
select avg(s.basesalary+s.titlesalary) as 平均工资, max(s.basesalary+s.titlesalary) as 最高工资, min(s.basesalary+s.titlesalary) as 最低工资
from salary s;
```

13、按照部门统计应发工资的平均工资

```sql
select d.depname as 部门, avg(s.basesalary+s.titlesalary) as 平均工资
from employee e, salary s, department d
where e.empid = s.empid and e.depid = d.depid
group by d.depname;
```

## 第2题 ★

需求：模拟注册需求

- 通过Scanner输入的方式输入注册信息
- 然后通过jdbc连接数据库进行数据的添加(不考虑用户名重复问题)

步骤：

- 创建数据库atguigu
- 创建users表格(id,username,password,name)
- 编写main方法或junit方法，模拟注册业务
  - 输入注册的信息
  - 将注册的信息通过jdbc添加到数据库中





