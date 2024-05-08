// 数组排序模块 自制 功能相同 不能使用内置的sort方法
// 要求 和内置的sort方法功能相同 可以使用回调函数定义排序规则

function sorts(arr, callback) {
    let len = arr.length; // 获取数组长度
    for (let i = 0; i < len - 1; i++) { // 遍历数组
        for (let j = 0; j < len - i - 1; j++) { // 遍历数组
            if (callback(arr[j], arr[j + 1]) > 0) { // 如果前一个元素大于后一个元素
                let temp = arr[j]; // 交换元素
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// 替换字符串指定关键字模块 自制 功能相同 不能使用内置的replace方法

function replace(str, key, value) {
    let len = str.length; // 获取字符串长度
    let keyLen = key.length; // 获取关键字长度
    let valueLen = value.length; // 获取替换值长度
    let result = ''; // 保存结果
    for (let i = 0; i < len; i++) { // 遍历字符串
        if (str[i] === key[0]) { // 如果当前字符是关键字的第一个字符
            let flag = true; // 标记是否匹配成功
            for (let j = 0; j < keyLen; j++) { // 遍历关键字
                if (str[i + j] !== key[j]) { // 如果当前字符不等于关键字的当前字符
                    flag = false;   // 标记匹配失败
                    break;  // 跳出循环
                }
            }
            if (flag) {     // 如果匹配成功
                result += value;    // 替换为替换值
                i += keyLen - 1;   // 跳过关键字长度
            } else {
                result += str[i];  // 否则保留当前字符
            }
        } else {
            result += str[i]; // 如果不是关键字的第一个字符，保留当前字符
        }
    }
    return result;
}

exports = {
    sorts,
    replace
};