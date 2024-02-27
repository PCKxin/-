/**
 * 封装插件：函数防抖和节流
 * $.extend() 作用是为JQuery类添加新的方法，相当于扩展JQuery类
 * debounce：防抖 ==> 参数 执行函数func 执行时间wait
 * throttle：节流 ==> 参数 执行函数func 执行时间wait
 * 使用方法：$.throttle(函数，时间) $.debounce(函数，时间) 
**/

(
    function($){
        $.extend({
                // 以下是普通版本，主要注重于函数的使用
                // 优点: 性能消耗小，缺点：不利于封装
                // 防抖
                debounce: function(fn,wait){
                    var timer = null;
                    return function(){
                        clearTimeout(timer);
                        timer = setTimeout(
                            function(){
                                fn();
                            },
                            wait
                        )
                    }
                },
                // 节流
                throttle: function(fn,wait){
                    // // 开关
                    // var flag = true;
                    // return function(){
                    //     if(!flag) return; // 意思是如果flag为false，也就是上一个定时器还没执行完，那么就不执行下面的代码
                    //     flag = false;
                    //     setTimeout(
                    //         function(){
                    //             fn();
                    //             flag = true;
                    //         },
                    //         wait
                    //     );
                    // };
                    // 计时器
                    var timer = null;
                    return function(){
                        if(timer) return; 
                        timer = setTimeout(
                            function(){
                                fn();
                                timer = null;
                            },
                            wait
                        );
                    }
                }

                // // 闭包版本，主要注重于封装和内部变量的使用
                // // 闭包的作用：1.封装变量 2.延长局部变量的生命周期
                // // 闭包的缺点：1.内存泄漏 2.性能消耗
                // // 防抖
                // debounce: function(fn, wait) {
                //     var timer = null;
                
                //     // 返回一个闭包函数
                //     return function() {
                //         var context = this; // 用处是保存上下文，这里指的是调用 debounce 函数的对象
                //         var args = arguments; // 指的是传入进来的参数，是一个类数组对象
                
                //         // 如果定时器存在，清除之前的定时器
                //         if (timer) {
                //             clearTimeout(timer);
                //             timer = null;
                //         }
                
                //         // 设置一个新的定时器，在等待指定的时间 wait 后执行原始函数
                //         timer = setTimeout(function() {
                //             // 使用 apply 将保存的上下文和参数传递给原始函数
                //             fn.apply(context, args);
                //         }, wait);
                //     };
                // },
                // // 节流
                // throttle: function(fn,wait){
                //     // //开关
                //     // var flag = true;
                //     // return function(){
                //     //     var context = this;
                //     //     var args = arguments;
                //     //     if(flag){
                //     //         flag = false;
                //     //         setTimeout(function(){
                //     //             fn.apply(context,args);
                //     //             flag = true;
                //     //         },wait);
                //     //     }
                //     // }

                //     // 计时器
                //     var timer = null;
                //     return function(){
                //         var context = this;
                //         var args = arguments;
                //         if(!timer){
                //             timer = setTimeout(function(){
                //                 fn.apply(context,args);
                //                 timer = null;
                //             },wait);
                //         }
                //     }
                // }
        })
    }
)(jQuery);