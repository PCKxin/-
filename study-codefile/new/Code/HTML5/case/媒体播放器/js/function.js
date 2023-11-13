( // 匿名函数
    function(a,b){ // a = window, b = document
        var v = document.getElementById("vid");
        /* 开始播放按钮 */
        var play_btn = document.getElementById("play");
        /* 暂停按钮 */
        var pause_btn = document.getElementById("pause");
        // 播放控件容器
        var interface_box = document.getElementById("interface-box");
        // 进度条盒子
        var progress_box = document.getElementById("progress");
        //带颜色的进度条
        var play_bar = document.getElementById("play-bar");
        /* 添加时间 */
        var add_time = document.getElementById("current-time");
        /* 总时间 */
        var dur_time = document.getElementById("duration");
        /* 开启静音 */
        var mute_btn = document.getElementById("mute");
        /* 解除静音 */
        var unmute_btn = document.getElementById("unmute");
        /* 声音大小 */
        var volume_bar = document.getElementById("volume-bar");
        var volume_value = document.getElementById("volume-value");
        /* 全屏 */
        var full_screen_btn = document.getElementById("full-screen");
        /* 全屏标签 */
        var isShow = false;
        var c = document.getElementById("box"); // c = 播放器盒子

        /* 创建一个对象 把播放器所有的方法和属性都放里面 */
        var Player = {
            // 初始化数据
            init: function(){
                var that = this; // that = Player
                v.removeAttribute("controls"); // 移除原生控件
                /* 执行播放暂停按钮 */
                this.switchPlay(); // 监听播放暂停
                /* 监听计算进度条的进度 */
                // this.updatapro = Player.updatapro , false = 事件冒泡
                v.addEventListener("timeupdate", this.updatapro, false);
                this.tz(); // 拖拽进度条
                /* 添加时间 */
                v.addEventListener("timeupdate", this.setTime, false);
                /* 切换静音 */
                this.switchMute();
                /* 声音大小 */
                this.sYtz();
                full_screen_btn.addEventListener(
                    "click",
                    function(){
                        isShow ? that.fullOff() : that.fullOn(); // 如果isShow为true，执行fullOff，否则执行fullOn
                        debugger
                    },
                    false
                )
                // 初始音量
                v.volume = 0.5;
                // 初始音量条进度
                volume_value.style.width = (v.volume * volume_bar.offsetWidth) + "px";
                // 初始化时间
                v.addEventListener("canplay",this.msg_init,false)
            },
            // 初始化时间
            msg_init: function(){
                Player.setTime();
            },
            // 监听播放暂停
            switchPlay: function(){
                // addEventListener 有三个参数1.事件 2.方法 3.什么时候执行
                play_btn.addEventListener("click", this.playPause, false);
                pause_btn.addEventListener("click", this.playPause, false);
                v.addEventListener("click", this.playPause, false);
                /* 当视频结束，把当前时间设为0 按钮也回到0 */
                v.addEventListener(
                    "ended", // 监听视频结束
                    function(){
                        v.currentTime = 0;
                        play_btn.style.display = "block";
                        pause_btn.style.display = "none";
                    },
                    false
                );
            },
            // 判断是播放还是暂停
            playPause: function(){
                /* 判断视频暂停和视频结束 */
                if(v.paused || v.ended){ // 如果视频暂停或者视频结束
                    v.play();
                    play_btn.style.display = "none";
                    pause_btn.style.display = "block";
                }else{ // 如果视频正在播放
                    v.pause();
                    play_btn.style.display = "block";
                    pause_btn.style.display = "none";
                }
            },
            // 点播放按钮播放时进度条跟着增涨
            updatapro: function(){
                var pos = v.currentTime / v.duration; // 当前时间 / 总时间
                play_bar.style.width = pos * progress_box.offsetWidth + "px"; // 带颜色的进度条的宽度 = pos * 进度条盒子的宽度, offsetWidth = 元素的宽度 + padding + border
            },
            // 拖拽进度条: 按下，移动，松开
            tz: function(){
                progress_box.addEventListener(
                    "mousedown", // 鼠标按下
                    function(){
                        document.onmousemove = function(e){
                            Player.setPageX(e.pageX);
                        }
                        document.onmouseup = function(e){ // 鼠标松开
                            document.onmousemove = null; // 鼠标移动事件取消
                            document.onmouseup = null; // 鼠标松开事件取消
                            Player.setPageX(e.pageX); 
                        }
                    }
                ) 
            }, 
            // 设置鼠标的位置
            setPageX: function(clickX){
                var newpage = Math.max( 
                    0,
                    Math.min(
                        1, // 1 = 100%
                        (clickX - this.pageOffset(progress_box)) / progress_box.offsetWidth // 鼠标的位置 - 进度条盒子的位置 / 进度条盒子的宽度
                    )
                )
                play_bar.style.width = (newpage * progress_box.offsetWidth) + "px"; // 带颜色的进度条的宽度 = newpage * 进度条盒子的宽度
                if(newpage == 0 || newpage == 1){
                    document.onmousemove = null;
                }
                v.currentTime = newpage * v.duration; // 当前时间 = newpage * 总时间
            },
            pageOffset: function(progress_box){
                var cur = progress_box.offsetLeft; // cur = 进度条盒子的位置
                /* 找父元素有相对或绝对定位的，找最近父元素的 */
                while(progress_box = progress_box.offsetParent){ // 如果进度条盒子有父元素
                    cur += progress_box.offsetLeft; // cur = cur + 进度条盒子的父元素的位置
                }
                return cur;
            },
            // 添加时间
            setTime: function(){
                var curTime = v.currentTime; // 当前时间
                // 获取当前时间的分钟数
                var curMine = Math.floor(curTime / 60); // Math.floor() 向下取整
                // 获取当前时间的秒数
                var curSec = Math.floor(curTime - (curMine * 60)); // 当前时间 - 当前时间的分钟数 * 60
                // 获取总时间
                var durMine = v.duration;
                // 获取总时间的分钟数
                var durMine = Math.floor(durMine / 60);
                // 获取总时间的秒数
                var durSec = Math.floor(v.duration - (durMine * 60));
                // 补0
                // 当前分钟
                curMine = curMine < 10 ? "0" + curMine : curMine; // 如果当前分钟小于10，则当前分钟 = "0" + 当前分钟，否则当前分钟 = 当前分钟
                // 当前秒钟
                curSec = curSec < 10 ? "0" + curSec : curSec; // 如果当前秒钟小于10，则当前秒钟 = "0" + 当前秒钟，否则当前秒钟 = 当前秒钟
                // 总时间分钟
                durMine = durMine < 10 ? "0" + durMine : durMine; // 如果总时间分钟小于10，则总时间分钟 = "0" + 总时间分钟，否则总时间分钟 = 总时间分钟
                // 总时间秒
                durSec = durSec < 10 ? "0" + durSec : durSec; // 如果总时间秒小于10，则总时间秒 = "0" + 总时间秒，否则总时间秒 = 总时间秒
                // 给时间标签赋值
                // 当前进度条的时间
                add_time.innerHTML = curMine + ":" + curSec; // 当前分钟 + ":" + 当前秒钟
                // 总时间
                dur_time.innerHTML = durMine + ":" + durSec; // 总时间分钟 + ":" + 总时间秒
            },
            // 切换静音
            switchMute: function(){
                mute_btn.addEventListener(
                    "click",
                    this.muteFn,
                    false
                )
                unmute_btn.addEventListener(
                    "click",
                    this.muteFn,
                    false
                )
            },
            muteFn: function(){
                if(v.muted){
                    v.muted = false;
                    mute_btn.style.display = "none";
                    unmute_btn.style.display = "block";
                }else{
                    v.muted = true;
                    mute_btn.style.display = "block";
                    unmute_btn.style.display = "none";
                }
            },
            // 声音大小
            sYtz: function(){
                volume_bar.addEventListener(
                    "mousedown",
                    function(){
                        document.onmousemove = function(e){
                            Player.sYsetPageX(e.pageX);
                        }
                        document.onmouseup = function(e){
                            document.onmousemove = null;
                            document.onmouseup = null;
                            Player.sYsetPageX(e.pageX);
                        }
                    },
                    false
                )
            },
            // 横坐标
            sYsetPageX: function(clickX){
                var newpage = Math.max(
                    0, // 最小值
                    Math.min(
                        1, // 最大值
                        (clickX - this.sYpageOffset(volume_bar)) / volume_bar.offsetWidth
                    )
                )
                volume_value.style.width = ((newpage * volume_bar.offsetWidth) - 11) + "px";
                if(newpage == 0 || newpage == 1){
                    document.onmousemove = null;
                }
                v.volume = newpage;
            },
            // 计算volume_bar.offsetLeft值
            sYpageOffset: function(volume_bar){
                var cur = volume_bar.offsetLeft;
                // 找父元素有相对或绝对定位的，找最近父元素的
                while(volume_bar = volume_bar.offsetParent){
                    cur += volume_bar.offsetLeft;
                }
                return cur;
            },
            // 全屏
            fullOn: function(){
                isShow = true;
                v.style.cssText = 
                                'position:fixed; width:' 
                                + window.innerWidth + 
                                'px; height:' 
                                + (window.innerHeight - 40) + // window.innerHeight = 浏览器窗口的高度, 40 = 播放器控件的高度
                                'px;';
                c.style.cssText = "position: fixed; bottom: 0; left: 0; right:0; top:0; z-index: 1000; margin:auto; width:100%;"
                interface_box.style.cssText = "position: fixed; bottom: 0;left: 0;right:0;"
            },
            fullOff: function(){
                isShow = false;
                v.style.cssText = "";
                c.style.cssText = "";
                interface_box.style.cssText = ""
            }
        }
        Player.init(); // 执行Player对象里面的init方法
    }
    (window, document)

)