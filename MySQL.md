## 指令集

### 运算符

- `=`: 等于
- `<>`: 不等于
- `!=`: 不等于
- `>`: 大于
- `<`: 小于
- `>=`: 大于等于
- `<=`: 小于等于
- `AND`: 与
- `OR`: 或
- `NOT`: 非
- `BETWEEN`: 在...之间
- `LIKE`: 包含 模糊查询 需要搭配`%`使用 
- `IN`: 包含 查询包含指定值的数据 
- `LIMIT`: 限制数量 

### 数据库操作

#### 1. 创建数据库
```sql
CREATE DATABASE 数据库名;
```

#### 2. 删除数据库
```sql
DROP DATABASE 数据库名;
```

#### 3. 选择数据库
```sql
USE 数据库名;
```

#### 4. 查看所有数据库
```sql
SHOW DATABASES;
```

#### 5. 查看数据库表
```sql
SHOW TABLES;
```

### 表操作

#### 数据类型

- `INT`: 整数类型
- `VARCHAR`: 可变长度字符串
- `TEXT`: 文本类型
- `DATE`: 日期类型
- `DATETIME`: 日期时间类型
- `TIMESTAMP`: 时间戳类型
- `FLOAT`: 浮点类型
- `DOUBLE`: 双精度浮点类型
- `DECIMAL`: 定点数类型
- `CHAR`: 定长字符串
- `BLOB`: 二进制类型
- `ENUM`: 枚举类型
- `SET`: 集合类型
- `JSON`: JSON类型
- `GEOMETRY`: 几何类型
- `POINT`: 点类型
- `LINESTRING`: 线类型
- `POLYGON`: 面类型
- `MULTIPOINT`: 多点类型
- `MULTILINESTRING`: 多线类型
- `MULTIPOLYGON`: 多面类型

#### 约束, 意思是对字段的限制, 用于保证数据的完整性和一致性

- `PRIMARY KEY`: 主键 一个表只能有一个主键 用于唯一标识一条记录, 不会重复, 不可以有NULL
- `UNIQUE`: 唯一 一个表可以有多个唯一字段 用于保证数据的唯一性 不会重复, 可以有多个NULL
- `NOT NULL`: 非空 不能为空
- `DEFAULT`: 默认值
- `AUTO_INCREMENT`: 自增长, 用于主键
- `FOREIGN KEY`: 外键, 用于关联两个表
- `CHECK`: 检查 用于检查数据的合法性
- `INDEX`: 索引
- `FULLTEXT`: 全文索引
- `SPATIAL`: 空间索引
- `CONSTRAINT`: 约束

##### 约束例

```sql
CREATE TABLE 表名(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT DEFAULT
);
```

##### 外键例

```sql
CREATE TABLE 表名(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT DEFAULT,
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES department(id)
);
```

##### 多个外键例

```sql
CREATE TABLE 表名(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT DEFAULT,
    department_id INT,
    job_id INT,
    FOREIGN KEY(department_id) REFERENCES department(id),
    FOREIGN KEY(job_id) REFERENCES job(id)
);
```
##### 对已有表增加约束例

```sql
ALTER TABLE 表名 ADD CONSTRAINT 约束名 约束类型(字段名);
```



#### id字段

##### 1. 自增长id
```sql
CREATE TABLE 表名(
    id INT PRIMARY KEY AUTO_INCREMENT,
    ...
);
```
##### 2. UUID
```sql
CREATE TABLE 表名(
    id CHAR(36) PRIMARY KEY,
    ...
);
```

##### 3. GUID
```sql
CREATE TABLE 表名(
    id CHAR(36) PRIMARY KEY,
    ...
);
```

##### 4. 自定义id
```sql
CREATE TABLE 表名(
    id INT PRIMARY KEY,
    ...
);
```
- 例如从10000开始自增长
```sql
CREATE TABLE 表名(
    id INT PRIMARY KEY AUTO_INCREMENT,
    ...
) AUTO_INCREMENT=10000;
```


#### 1. 创建表
```sql
CREATE TABLE 表名(
    字段名1 数据类型1,
    字段名2 数据类型2,
    ...
);
```

#### 2. 删除表
```sql
DROP TABLE 表名;
```

#### 3. 查看表结构

##### 在当前数据库中
```sql
DESC 表名;
```
##### 不在
```sql
DESC 数据库.表名;
```

#### 4. 添加字段
```sql
ALTER TABLE 表名 ADD 字段名 数据类型;
```

#### 5. 删除字段
```sql
ALTER TABLE 表名 DROP 字段名;
```

#### 6. 修改字段
```sql
ALTER TABLE 表名 MODIFY 字段名 新数据类型;
```

#### 7. 修改字段名
```sql
ALTER TABLE 表名 CHANGE 旧字段名 新字段名 数据类型;
```

#### 8. 修改字段默认值(比如默认值为NULL)
```sql
ALTER TABLE 表名 ALTER 字段名 SET DEFAULT 默认值;
```

#### 9. 修改字段位置

```sql
ALTER TABLE 表名  MODIFY  字段名 类型 first;
```

```sql
ALTER TABLE 表名  MODIFY  字段名 类型 after 某一个字段名;
```

### 数据操作

- `INSERT`: 插入数据
- `SELECT`: 查询数据
- `UPDATE`: 更新数据
- `DELETE`: 删除数据
- `TRUNCATE`: 删除表数据 不删除表结构
- `CREATE INDEX`: 创建索引
- `DROP INDEX`: 删除索引
- `SHOW INDEX`: 查看索引

- 聚合函数(也叫组合函数, 用于统计)
    - `COUNT`: 数量, 可以统计所有行或者指定字段的行数
        - `COUNT(*)`: 统计所有行
        - `COUNT(字段名)`: 统计指定字段的行数
        - `COUNT(DISTINCT 字段名)`: 统计指定字段的不重复行数
        - 例:
            - `SELECT COUNT(*) FROM 表名;` 返回表的行数
            - `SELECT COUNT(字段名) FROM 表名;` 返回指定字段的行数
    - `SUM`: 求和, 可以统计所有行或者指定字段的和
        - `SUM(字段名)`: 统计指定字段的和
        - `SUM(DISTINCT 字段名)`: 统计指定字段的不重复和
        - `SUM(*)`: 统计所有行的和
        - 例
          -  `SELECT SUM(字段名) FROM 表名;` 返回指定字段的和
          -  `SELECT SUM(*) FROM 表名;` 返回所有行的和
    - `AVG`: 平均值, 可以统计所有行或者指定字段的平均值
        - `AVG(字段名)`: 统计指定字段的平均值
        - `AVG(DISTINCT 字段名)`: 统计指定字段的不重复平均值
        - `AVG(*)`: 统计所有行的平均值
        - 例
            - `SELECT AVG(字段名) FROM 表名;` 返回指定字段的平均值
            - `SELECT AVG(*) FROM 表名;` 返回所有行的平均值
    - `MAX`: 最大值, 可以统计所有行或者指定字段的最大值
        - `MAX(字段名)`: 统计指定字段的最大值
        - `MAX(DISTINCT 字段名)`: 统计指定字段的不重复最大值
        - `MAX(*)`: 统计所有行的最大值
        - 例
            - `SELECT MAX(字段名) FROM 表名;` 返回指定字段的最大值
            - `SELECT MAX(*) FROM 表名;` 返回所有行的最大值

#### 1. 插入数据

##### 1. 插入所有字段
```sql
INSERT INTO 表名(字段1, 字段2, ...) VALUES(值1, 值2, ...);
```

##### 2. 多值插入
```sql
INSERT INTO 表名(字段1, 字段2, ...) VALUES(值1, 值2, ...), (值1, 值2, ...), ...;
```

##### 3. 按照顺序插入
```sql
-- 字段顺序必须和表结构一致
-- 单值添加
INSERT INTO 表名 VALUES(值1, 值2, ...);
```
```sql
-- 多值添加
INSERT INTO 表名 VALUES(值1, 值2, ...), (值1, 值2, ...), ...;
```

##### 4. 插入查询结果
```sql
INSERT INTO 表名(字段1, 字段2, ...) SELECT 字段1, 字段2, ... FROM 表名 WHERE 条件;
```


#### 2. 查询数据

##### 关键字
- `LIKE`: 模糊查询 查询包含指定字符的数据 需要搭配`%`使用
- `IN`: 包含 查询包含指定值的数据
- `DISTINCT`: 去重
- `WHERE`: 条件
- `ORDER BY`: 排序
- `LIMIT`: 限制数量
- `OFFSET`: 偏移量
- `GROUP BY`: 分组 配合`HAVING`使用
- `HAVING`: 分组条件
- `ASC`: 升序
- `DESC`: 降序

##### 1. 查询所有字段
```sql
SELECT * FROM 表名;
```

##### 2. 查询指定字段
```sql
SELECT 字段1, 字段2, ... FROM 表名;
```

##### 3. 查询指定字段并排序
```sql
-- 单条件
SELECT 字段1, 字段2, ... FROM 表名 ORDER BY 字段1 ASC|DESC;
```
```sql
-- 多条件
SELECT 字段1, 字段2, ... FROM 表名 ORDER BY 字段1 ASC|DESC, 字段2 ASC|DESC;
```

##### 4. 查询指定字段并限制数量
```sql
SELECT 字段1, 字段2, ... FROM 表名 LIMIT 数量;
```

##### 5. 查询指定字段并跳过数量
```sql
SELECT 字段1, 字段2, ... FROM 表名 LIMIT 数量 OFFSET 偏移量;
```

##### 6. 查询指定字段并排序、限制数量、跳过数量
```sql
SELECT 字段1, 字段2, ... FROM 表名 ORDER BY 字段1 ASC|DESC LIMIT 数量 OFFSET 偏移量;
```

##### 7. 查询指定字段并去重
```sql
SELECT DISTINCT 字段1, 字段2, ... FROM 表名;
```

##### 8. 查询指定字段并条件查询
```sql
SELECT 字段1, 字段2, ... FROM 表名 WHERE 条件;
```

##### 9. 查询指定字段并模糊查询
```sql
SELECT 字段1, 字段2, ... FROM 表名 WHERE 字段1 LIKE '%值%';
```

##### 10. 查询指定字段并包含查询
```sql
SELECT 字段1, 字段2, ... FROM 表名 WHERE 字段1 IN (值1, 值2, ...);
```

##### 11. 查询指定字段并多条件查询
```sql
SELECT 字段1, 字段2, ... FROM 表名 WHERE 条件1 AND|OR 条件2;
```

##### 12. 查询指定字段并分组
```sql
SELECT 字段1, 字段2, ... FROM 表名 GROUP BY 字段1;
```

##### 13. 查询指定字段并分组、条件查询
```sql
SELECT 字段1, 字段2, ... FROM 表名 GROUP BY 字段1 HAVING 条件;
```

##### 14. 查询指定字段并分组、条件查询、排序
```sql
SELECT 字段1, 字段2, ... FROM 表名 GROUP BY 字段1 HAVING 条件 ORDER BY 字段1 ASC|DESC;
```

##### 15. 查询指定字段并将字段处理后临时显示在查询终端

- 例: 查询出所有人的信息外加每个人的年薪
```sql
-- salary 字段名
-- annual_salary 临时字段名
-- employee 表名
SELECT *, salary * 12 AS annual_salary FROM employee;
```

#### 3. 更新数据

- `UPDATE`: 更新数据
- `SET`: 设置字段值
- `TRUNCATE`: 删除表数据 不删除表结构

##### 1. 更新所有字段
```sql
UPDATE 表名 SET 字段1=值1, 字段2=值2, ... WHERE 条件;
```

##### 2. 更新指定字段
```sql
UPDATE 表名 SET 字段1=值1, 字段2=值2, ... WHERE 条件;
```

#### 4. 删除数据
```sql
DELETE FROM 表名 WHERE 条件;
```

#### 5. 删除所有数据
```sql
DELETE FROM 表名;
```

#### 6. 删除表数据
```sql
TRUNCATE TABLE 表名;
```

### 索引操作

#### 1. 创建索引
```sql
CREATE INDEX 索引名 ON 表名(字段1, 字段2, ...);
```

#### 2. 删除索引
```sql
DROP INDEX 索引名 ON 表名;
```

#### 3. 查看索引
```sql
SHOW INDEX FROM 表名;
```

### 权限操作

#### 1. 创建用户
```sql
CREATE USER '用户名'@'主机' IDENTIFIED BY '密码';
```

#### 2. 删除用户
```sql
DROP USER '用户名'@'主机';
```

#### 3. 修改用户密码
```sql
SET PASSWORD FOR '用户名'@'主机' = PASSWORD('新密码');
```

#### 4. 查看用户权限
```sql
SHOW GRANTS FOR '用户名'@'主机';
```

#### 5. 授权
```sql
GRANT 权限 ON 数据库.表 TO '用户名'@'主机';
```

#### 6. 撤销权限
```sql
REVOKE 权限 ON 数据库.表 FROM '用户名'@'主机';
```

#### 7. 刷新权限
```sql
FLUSH PRIVILEGES;
```

### 事务操作

#### 1. 开启事务
```sql
START TRANSACTION;
```

#### 2. 提交事务
```sql
COMMIT;
```

#### 3. 回滚事务
```sql
ROLLBACK;
```

### 视图操作

#### 1. 创建视图
```sql
CREATE VIEW 视图名 AS SELECT 字段1, 字段2, ... FROM 表名 WHERE 条件;
```

#### 2. 删除视图
```sql
DROP VIEW 视图名;
```

#### 3. 查看视图
```sql
SHOW CREATE VIEW 视图名;
```

### 存储过程操作

#### 1. 创建存储过程
```sql
CREATE PROCEDURE 存储过程名(IN 参数1 数据类型, IN 参数2 数据类型, OUT 参数3 数据类型)
BEGIN
    ...
END;
```

#### 2. 删除存储过程
```sql
DROP PROCEDURE 存储过程名;
```

#### 3. 查看存储过程
```sql
SHOW CREATE PROCEDURE 存储过程名;
```


