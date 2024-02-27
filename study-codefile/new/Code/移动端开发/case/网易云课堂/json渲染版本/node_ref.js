const fs = require('fs'); // 用于读写文件的标准库
const axios = require('axios'); // 用于发送HTTP请求的第三方库

async function web_data_crowbar(url, referer, postData) {
    try {
        // 设置referer
        const headers = { Referer: referer };

        // 发送POST请求获取JSON内容
        const response = await axios.post(url, postData, { headers });
        const data = response.data;

        // 这里直接保存JSON数据到data文件夹下
        const filename = 'data/content.json';
        fs.writeFileSync(filename, JSON.stringify(data, null, 2));
        console.log(`Referer UnLock Save at ${filename}`);
    } catch (error) {
        console.error('发生错误：', error.message);
    }
}

// 示例
const targetUrl = 'https://m.study.163.com/j/operation/homepage.json'; // 需要爬取的网址
const refererUrl = 'https://m.study.163.com/'; // referer验证的地址

// POST请求的数据
const postData = {
    // 比如token之类的
};

web_data_crowbar(targetUrl, refererUrl, postData);


