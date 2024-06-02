const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

// 创建连接对象
// 端口号默认是3306
// 192.168.213.128 是mysql服务器的ip地址
// root 是mysql的用户名
// 123456 是mysql的密码

// 创建一个新表 命名为 ch_openedu_user
// 表中有7个字段 id, campus, username, account, password, tasklist, remark

// id 是主键, 自增, 非空

// 测试
// 读取u.json文件并转换为可导入数据库的csv文件



// fs.readFile(path.resolve('u.json'), (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         let dataObj = JSON.parse(data.toString());
//         let csv = 'campus,username,account,password,tasklist,remark\n';
//         dataObj.data.forEach((item) => {
//             csv += `${item.campus},${item.username},${item.account},${item.password},${JSON.stringify(item.tasklist)},${item.remark}\n`;
//         });
//         fs.writeFile(path.resolve('u.csv'), csv, (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('文件写入成功');
//             }
//         });
//     }
// })

// 创建连接对象
const connection = mysql.createConnection({
    host: '192.168.213.128',
    user: 'root',
    password: '123456',
    database: 'chopenedu'
});

// 连接数据库
// connection.connect();

// // 创建表
// const createTableSql = `
//     CREATE TABLE ch_openedu_user (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         campus VARCHAR(255),
//         username VARCHAR(255),
//         account VARCHAR(255),
//         password VARCHAR(255),
//         tasklist TEXT,
//         remark TEXT
//     )
// `;


// // 执行sql语句
// connection.query(createTableSql, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

// // 断开连接
// connection.end();


// 读取csv文件并导入数据库
// 防止 Cannot enqueue Query after invoking quit 报错

// 读取csv文件
// fs.readFile(path.resolve('u.csv'), (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         let dataArr = data.toString().split('\n');
//         let sql = 'INSERT INTO ch_openedu_user (campus, username, account, password, tasklist, remark) VALUES ';
//         dataArr.forEach((item, index) => {
//             if (index > 0) {
//                 let itemArr = item.split(',');
//                 sql += `('${itemArr[0]}', '${itemArr[1]}', '${itemArr[2]}', '${itemArr[3]}', '${itemArr[4]}', '${itemArr[5]}'),`;
//             }
//         });
//         sql = sql.slice(0, sql.length - 1);
//         console.log(sql);
//         connection.query(sql, (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(result);
//             }
//         });
//     }
// });



// 断开连接
// connection.end();






