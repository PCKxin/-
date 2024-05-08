/**
 * (
 *     function(doc, win){ }
 * )(doucment, window);
 * 这是一个立即执行函数表达式，也叫匿名函数
 * 作用：防止变量污染，封装代码
 * 仅接受document(文档对象)和window(窗口对象)两个参数
 * 
 * **/ 

// 当前计算rem
// 屏幕宽度大于等于750px时，1rem = 100px
// 屏幕宽度小于750px时，1rem = 100 * (当前屏幕宽度 / 750) px
// 中型设备宽375px，1rem = 50px


(
    function(doc, win){
        // 这个逗号相当于一个var, 同时声明了三个变量 
        var docEl = doc.documentElement, // 获取文档根元素html标签
            resize_event = 'orientationchange' in window ? 'orientationchange' : 'resize',  // 判断window对象是否具有 屏幕旋转事件(orientationchange) 属性，如果支持则为orientationchange，否则为resize(屏幕大小改变事件)
            re_rem = function(){  // 重新计算rem的值
                var clientWidth = docEl.clientWidth; 
                if(!clientWidth) return; 
                if(clientWidth >= 750){ 
                    docEl.style.fontSize = '100px'; 
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'; 
                }
            };
        if(!doc.addEventListener) return; // 如果文档对象没有添加事件监听的方法，则直接返回
        win.addEventListener(resize_event, re_rem, false); // 添加事件监听，当屏幕旋转或屏幕大小改变时，重新计算rem的值
        doc.addEventListener('DOMContentLoaded', re_rem, false); // 添加事件监听，当文档加载完成时，重新计算rem的值
    }
)(document, window);