// http 是由NodeJS官方提供的 用来创建web服务器的模块
// 通过http.createServer()方法可以创建一个web服务器

var http = require('http');

var server = http.createServer();


// on 方法用来为服务添加监听事件
server.on('request', function (req, res) {
    // req 请求对象, 获取前台发送的数据
    // res 响应对象, 后台给前台返回数据
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');// 设置响应头
    // console.log(req.url) // 通过req.url可以获取到前台访问的路径

    // 当前台页面访问 http://127.0.0.1:777/a的时候
    if (req.url == "/a") {
        res.end("访问了 /a 路径");
    }
    if (req.url == "/b") {
        res.end("/b 路径");
    }
    if (req.url == "/c") {
        var obj = {
            username: "张三",
            age: 18,
            sex: "男",
        };

        res.end(JSON.stringify(obj));

    }


    // 后台想要把数据返回给前台页面，在http模块中，使用 res.end() 方法
    if (req.url == "/") {
        res.end('server online');
    }
    res.end('server online');
});

// listen() 方法用来监听端口号
server.listen(
    3901,
    function () {
        console.log(
            '                  __    _                                           ___   ____  \n' +
            '   __  __ __  __ / /__ (_)  _____ ___   _____ _   __ ___   _____   <  /  / __ \\ \n' +
            '  / / / // / / // //_// /  / ___// _ \\ / ___/| | / // _ \\ / ___/   / /  / / / / \n' +
            ' / /_/ // /_/ // ,<  / /  (__  )/  __// /    | |/ //  __// /      / /_ / /_/ /  \n' +
            ' \\__, / \\__,_//_/|_|/_/  /____/ \\___//_/     |___/ \\___//_/      /_/(_)\\____/   \n' +
            '/____/                                                                          \n'
            // 想实现\效果，就要用双\\ , 因为\是转义字符
        );
        console.log('system online', 'port:3901')
    }
)