// 给一个时间
// 通过引入moment.js来格式化当前时间
// 把时间格式 改为 yyyy-MM-dd HH:mm:ss

// var time = new Date();
// var moment = require('moment');
// var new_time = moment(time).format('YYYY-MM-DD HH:mm:ss');
// console.log(new_time);

// function changeTime() {
//     var time = new Date();
//     var moment = require('moment');
//     var new_time = moment(time).format('YYYY-MM-DD HH:mm:ss');
//     return new_time;
// }

// 普通方法
function changeTime(){
    var _time = new Date();

    var yyyy = _time.getFullYear();
    var MM = _time.getMonth() + 1;
    MM = MM < 10 ? '0' + MM : MM;
    var dd = _time.getDate();
    dd = dd < 10 ? '0' + dd : dd;
    var HH = _time.getHours();
    HH = HH < 10 ? '0' + HH : HH;
    var mm = _time.getMinutes();
    mm = mm < 10 ? '0' + mm : mm;
    var ss = _time.getSeconds();
    ss = ss < 10 ? '0' + ss : ss;

    return `${yyyy}-${MM}-${dd} ${HH}:${mm}:${ss}`;
}

module.exports = {
    changeTime
}

// module.exports 和 exports 的区别
    // 1. exports 简化版的 module.exports
    // 2. 如果一个模块内, 同时使用module.exports 和 exports 导出, 以module.exports为准