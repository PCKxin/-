// console.log(
//     `
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ver1.0/////////////////////
//     __  __     __    _   __            __  
//     \\ \\/ /_ __/ /__ (_) / /  ___  ____/ /__
//      \\  / // /  '_// / / /__/ _ \\/ __/  '_/
//      /_/\\_,_/_/\\_\\/_/ /____/\\___/\\__/_/\\_\\ 
//     `
// )

const logo =     `
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ver1.0/////////////////////
    __  __     __    _   __            __  
    \\ \\/ /_ __/ /__ (_) / /  ___  ____/ /__
     \\  / // /  '_// / / /__/ _ \\/ __/  '_/
     /_/\\_,_/_/\\_\\/_/ /____/\\___/\\__/_/\\_\\ 
    `

// 
// function msglock(msg){
//     // 第一层 将字符串转换为Unicode编码
//     let unicodeArr = [];
//     for (let i = 0; i < msg.length; i++) {
//         unicodeArr.push(msg.charCodeAt(i));
//     }
//     // console.log(unicodeArr)
//     // 第二层 将Unicode编码转换为二进制
//     let binaryArr = [];
//     for (let i = 0; i < unicodeArr.length; i++) {
//         binaryArr.push(unicodeArr[i].toString(2));
//     }
//     // return binaryArr;
//     // 第三层 二进制转base64
//     let base64Arr = [];
//     for (let i = 0; i < binaryArr.length; i++) {
//         base64Arr.push(Buffer.from(binaryArr[i]).toString('base64'));
//     }
//     return base64Arr;
// }
function msglock(msg) {
    let start = process.hrtime(); // 获取开始时间

    let unicodeArr = [];
    for (let i = 0; i < msg.length; i++) {
        unicodeArr.push(msg.charCodeAt(i));
    }

    let binaryArr = [];
    for (let i = 0; i < unicodeArr.length; i++) {
        binaryArr.push(unicodeArr[i].toString(2));
    }

    let base64Arr = [];
    for (let i = 0; i < binaryArr.length; i++) {
        base64Arr.push(Buffer.from(binaryArr[i]).toString('base64'));
    }

    let end = process.hrtime(start); // 获取结束时间
    let timeInSeconds = end[0] + end[1] / 1e9; // 计算运行时长，以秒为单位

    console.log(`msglock runtime: ${timeInSeconds.toFixed(5)} 秒`);
    // return {
    //     base64Arr: base64Arr,
    //     timeInSeconds: `msglock runtime: ${timeInSeconds.toFixed(5)} 秒`
    // };
    return base64Arr;
}

// 同步解密
function msgunlock(msg){
    // 第一层 base64转二进制
    let binaryArr = [];
    for (let i = 0; i < msg.length; i++) {
        binaryArr.push(Buffer.from(msg[i], 'base64').toString());
    }
    // 第二层 二进制转Unicode编码
    let unicodeArr = [];
    for (let i = 0; i < binaryArr.length; i++) {
        unicodeArr.push(parseInt(binaryArr[i], 2));
    }
    // 第三层 Unicode编码转字符串
    let str = '';
    for (let i = 0; i < unicodeArr.length; i++) {
        str += String.fromCharCode(unicodeArr[i]);
    }
    return str;
}

// test
// msglock("hello world");
// console.log(msglock("1、熟练掌握 JS 的 BOM 操作 \n 2、熟练掌握JS的节点获取操作3、熟练掌握JS的事件处理程序4、熟练掌握JS的事件流5、熟练掌握 JS 的函数的使用方法 6、熟练掌握 JS 里 for 循环的使用 7、熟练掌握 HTML + CSS 标签 8、熟练掌握用 HTML + CSS + JS 做网页的布局"));
// console.log(msgunlock(msglock("1、熟练掌握 JS 的 BOM 操作\n2、熟练掌握JS的节点获取操作\n3、熟练掌握JS的事件处理程序4、熟练掌握JS的事件流5、熟练掌握 JS 的函数的使用方法 6、熟练掌握 JS 里 for 循环的使用 7、熟练掌握 HTML + CSS 标签 8、熟练掌握用 HTML + CSS + JS 做网页的布局")));


// 模块导出
exports.msglock = msglock;
exports.msgunlock = msgunlock;
exports.logo = logo;