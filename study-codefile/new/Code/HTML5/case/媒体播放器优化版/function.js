( // 闭包
    function(a,b){ // a:window b:document
        // 1.获取元素
        // 媒体
        var m = document.getElementById("mid");
        // 总盒子
        var box = document.getElementById("box");
        // 图片容器
        var img_box = document.getElementById("img-box");
        // 图片
        var bg_img = document.getElementById("bg-img");
        // 音乐列表容器
        var list_box = document.getElementById("list-box");
        // 音乐列表
        var music_list = document.getElementById("music-list");
        // 音乐链接
        var list_link = document.getElementsByClassName("style-list-link");
        // 播放控件容器
        var interface_box = document.getElementById("interface-box");
        // 进度条盒子
        var progress_box = document.getElementById("progress");
        //带颜色的进度条
        var play_bar = document.getElementById("play-bar");
        var play_bar_icon = document.getElementById("play-bar-icon");
        /* 添加时间 */
        var add_time = document.getElementById("current-time");
        /* 总时间 */
        var dur_time = document.getElementById("duration-time");
        
        // 播放列表
        var menu_btn = document.getElementById("menu");

        // 上一首
        var prev_btn = document.getElementById("prev");
        // 下一首
        var next_btn = document.getElementById("next");
        // 链接切换
        var m_link = document.getElementById("m-link");

        // 名字
        var v_name = document.getElementById("v-name");    
        // 作者
        var v_author = document.getElementById("v-author");

        /* 开始播放按钮 */
        var play_btn = document.getElementById("play");
        /* 暂停按钮 */
        var pause_btn = document.getElementById("pause");

        /* 开启静音 */
        var mute_btn = document.getElementById("mute");
        /* 解除静音 */
        var unmute_btn = document.getElementById("unmute");
        /* 声音大小 */
        var volume_bar = document.getElementById("volume-box");
        var volume_value = document.getElementById("volume-value");
        var volume_value_icon = document.getElementById("volume-value-icon");
        // 初始化方法
        var Player = {
            // 初始化数据
            init: function(){
                var that = this;
                // 移除原生控件  
                m.removeAttribute("controls");
                m_link.src = list_link[0].getAttribute("data-url");
                v_name.innerHTML = list_link[0].innerHTML;
                v_author.innerHTML = list_link[0].getAttribute("data-author");
                img_box.style.backgroundImage = "url(" + list_link[0].getAttribute("data-img") + ")";
                // 初始音量
                m.volume = 0.3;
                // 初始音量条进度
                volume_value.style.width = (m.volume * volume_bar.offsetWidth) + "px";
                volume_value_icon.style.left = (m.volume * volume_bar.offsetWidth - 20) + "px";

                // 执行播放暂停按钮
                // 监听播放暂停
                this.switchPlay();
                // 监听计算进度条进度
                m.addEventListener("timeupdate", this.progress_update, false);
                // 监听进度条事件(拖拽，点击)
                this.progress_event();
                // 添加时间
                m.addEventListener("timeupdate", this.setTime, false);
                // 切换静音
                this.switchMute();
                // 监听音量条事件
                this.volume_event();
                // // 切换上一首
                this.switchPrev();
                // // 切换下一首
                this.switchNext();
                // // 监听播放结束
                // this.playEnd();
                // 监听菜单键
                this.menuBtn();
                // 监听鼠标浮动
                this.mouseOver();
                // 监听菜单事件
                this.menu_click();
            },
            // 播放暂停
            switchPlay: function(){
                play_btn.addEventListener("click",this.playPause,false);
                pause_btn.addEventListener("click",this.playPause,false);
                m.addEventListener("click",this.playPause,false);
                // 视频结束 时间归零 播放按钮显示
                m.addEventListener(
                    "ended",
                    function(){
                        m.currentTime = 0;
                        play_btn.style.display = "block";
                        pause_btn.style.display = "none";
                    },false
                );
            },
            playPause: function(){
                // 判断暂停与结束
                if(m.paused || m.ended){ // 如果暂停或者结束
                    // 播放
                    m.play();
                    // 播放按钮隐藏
                    play_btn.style.display = "none";
                    // 暂停按钮显示
                    pause_btn.style.display = "block";
                } else {
                    // 暂停
                    m.pause();
                    // 播放按钮显示
                    play_btn.style.display = "block";
                    // 暂停按钮隐藏
                    pause_btn.style.display = "none";
                }
            },
            // 点播放按钮播放时进度条跟着增涨
            progress_update: function(){
                var pos = m.currentTime / m.duration; // 当前时间 / 总时间
                // 带颜色的进度条的宽度 = pos * 进度条盒子的宽度, offsetWidth = 元素的宽度 + padding + border
                play_bar.style.width = pos * progress_box.offsetWidth + "px"; 
                play_bar_icon.style.left = pos * progress_box.offsetWidth - 15 + "px";
            },
            // 拖拽进度条: 按下，移动，松开
            progress_event: function(){
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
                /*
                newpage解释
                min里面的公式
                获取鼠标的X轴位置 - 进度条盒子的左边距 / 进度条盒子的宽度 得到的是一个0-1的小数
                用min来限制这个小数的范围，最小值是0，最大值是1
                通用公式
                Math.max(0,Math.min(1,val)); 值在0-1之间 二者结合即可实现左右边界判断 
                Math.min()方法经常用于裁剪一个值
                */ 
                play_bar.style.width = (newpage * progress_box.offsetWidth) + "px"; // 带颜色的进度条的宽度 = newpage * 进度条盒子的宽度
                play_bar_icon.style.left = (newpage * progress_box.offsetWidth - 15)  + "px";
                console.log(play_bar_icon.style.left)
                if(newpage == 0 || newpage == 1){
                    document.onmousemove = null;
                }
                m.currentTime = newpage * m.duration; // 当前时间 = newpage * 总时间
            },
            pageOffset: function(progress_box){
                var cur = progress_box.offsetLeft; // cur = 进度条盒子的位置  ,offsetLeft = 元素的左边距(相对于父元素) + padding + border)
                /* 找父元素有相对或绝对定位的，找最近父元素的 */
                while(progress_box = progress_box.offsetParent){ // 如果进度条盒子有父元素
                    cur += progress_box.offsetLeft; // cur = cur + 进度条盒子的父元素的位置
                }
                return cur;
            },

            // 添加时间
            setTime: function(){
                var curTime = m.currentTime; // 当前时间
                // 获取当前时间的分钟数
                var curMine = Math.floor(curTime / 60); // Math.floor() 向下取整
                // 获取当前时间的秒数
                var curSec = Math.floor(curTime - (curMine * 60)); // 当前时间 - 当前时间的分钟数 * 60
                // 获取总时间
                var durMine = m.duration;
                // 获取总时间的分钟数
                var durMine = Math.floor(durMine / 60);
                // 获取总时间的秒数
                var durSec = Math.floor(m.duration - (durMine * 60));
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
                if(m.muted){
                    m.muted = false;
                    mute_btn.style.display = "none";
                    unmute_btn.style.display = "block";
                }else{
                    m.muted = true;
                    mute_btn.style.display = "block";
                    unmute_btn.style.display = "none";
                }
            },
            // 声音大小
            volume_event: function(){
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
                volume_value.style.width = ((newpage * volume_bar.offsetWidth)) + "px";
                if(newpage == 0 || newpage == 1){
                    document.onmousemove = null;
                }
                m.volume = newpage;
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
            // 切换静音
            switchMute: function () {
                mute_btn.addEventListener("click", this.muteFn, false);
                unmute_btn.addEventListener("click", this.muteFn, false);
            },
            muteFn: function () {
                if (m.muted) { // 如果静音
                    // 解除静音
                    m.muted = false;
                    // 静音按钮隐藏
                    mute_btn.style.display = "block";
                    // 解除静音按钮显示
                    unmute_btn.style.display = "none";
                } else { // 如果未静音
                    // 静音
                    m.muted = true;
                    // 静音按钮显示
                    mute_btn.style.display = "none";
                    // 解除静音按钮隐藏
                    unmute_btn.style.display = "block";
                }
            },
            // 音量条事件
            volume_event: function () {
                volume_bar.addEventListener(
                    "mousedown",
                    function () {
                        document.onmousemove = function (e) {
                            Player.volumeSetPageX(e.pageX);
                        }
                        document.onmouseup = function (e) {
                            document.onmousemove = null;
                            document.onmouseup = null;
                            Player.volumeSetPageX(e.pageX);
                        }
                    },
                    false
                )
            },
            // 设置音量条进度
            volumeSetPageX: function (clickX) {
                var newsite = Math.max(
                    0,
                    Math.min(
                        1,
                        (clickX - this.volumePageOffset(volume_bar)) / volume_bar.offsetWidth
                    )
                )
                volume_value.style.width = (newsite * volume_bar.offsetWidth) + "px";
                volume_value_icon.style.left = (newsite * volume_bar.offsetWidth - 20) + "px";


                if (newsite == 0 || newsite == 1) {
                    document.onmousemove = null;
                }
                m.volume = newsite;
            },
            // 获取元素在页面中的位置
            volumePageOffset: function (volume_bar) {
                var cur = volume_bar.offsetLeft;
                while (volume_bar = volume_bar.offsetParent) {
                    cur += volume_bar.offsetLeft;
                }
                return cur;
            },
            // 监听菜单键
            menuBtn: function(){
                menu_btn.addEventListener("click",this.switchMenu,false)
            },
            // 切换菜单
            switchMenu: function(){
                // if(list_box.style.display = list_box.style.display == "none"){
                //     list_box.style.display == "block";

                // }
                list_box.style.display = list_box.style.display == "none" ? "block" : "none"; // 如果列表隐藏，则列表显示，否则列表隐藏
                // 就三目运算符能用，原因是因为三目运算符是一个表达式，而if是一个语句

                // console.log(list_box.style.display = list_box.style.display)
            },
            mouseOver: function(){
                box.addEventListener("mouseover",this.mouseOverFn,false);
                box.addEventListener("mouseout",this.mouseOutFn,false);
            },
            mouseOverFn: function(){
                interface_box.style.bottom = "0";
                img_box.style.backgroundSize = "145%";
                img_box.style.transition = "all 0.5s ease-in-out";
                interface_box.style.transition = "all 0.5s ease-in-out";
                list_box.style.height = "240px";
                list_box.style.transition = "all 0.5s ease-in-out";
                music_list.style.height = "220px";
                list_box.style.transition = "all 0.5s ease-in-out";
            },
            mouseOutFn: function(){
                interface_box.style.bottom = "-80px";
                img_box.style.backgroundSize = "125%";
                img_box.style.transition = "all 0.5s ease-in-out";
                interface_box.style.transition = "all 0.5s ease-in-out";
                list_box.style.height = "280px";
                list_box.style.transition = "all 0.5s ease-in-out";
                music_list.style.height = "260px";
                list_box.style.transition = "all 0.5s ease-in-out";
            },
            // 切换上一首
            switchPrev: function(){
                prev_btn.addEventListener("click",this.prevFn,false);
            },
            prevFn: function(){
                var prev = m_link.src;
                for(var i = 0; i < list_link.length; i++){
                    if(list_link[i].getAttribute("data-url") == prev){
                        var j = i - 1;
                        if(j < 0){
                            j = list_link.length - 1;
                        }
                        m_link.src = list_link[j].getAttribute("data-url");
                        m.load()
                        m.autoplay = true;
                        play_btn.style.display = "none";
                        pause_btn.style.display = "block";
                        v_name.innerHTML = list_link[j].innerHTML;
                        v_author.innerHTML = list_link[j].getAttribute("data-author");
                        img_box.style.backgroundImage = "url(" + list_link[j].getAttribute("data-img") + ")";
                        break;
                    }
                }
            },
            // 切换下一首
            switchNext: function(){
                next_btn.addEventListener("click",this.nextFn,false);
            },
            nextFn: function(){
                var next = m_link.src;
                console.log(next)
                for(var i = 0; i < list_link.length; i++){
                    // console.log(list_link[i].getAttribute("data-url"))
                    if(list_link[i].getAttribute("data-url") == next){
                        var j = i + 1;
                        if(j >= list_link.length){
                            j = 0;
                        }
                        m_link.src = list_link[j].getAttribute("data-url");
                        m.load()
                        m.autoplay = true;
                        play_btn.style.display = "none";
                        pause_btn.style.display = "block";
                        console.log(m_link.src)
                        v_name.innerHTML = list_link[j].innerHTML;
                        v_author.innerHTML = list_link[j].getAttribute("data-author");
                        img_box.style.backgroundImage = "url(" + list_link[j].getAttribute("data-img") + ")";
                        break;
                    }
                }
            },
            // 菜单选择切换
            menu_click: function(){
                for(var i = 0; i < list_link.length; i++){
                    list_link[i].addEventListener("click",this.link_switch,false);
                }
            },
            link_switch: function(){
                m_link.src = this.getAttribute("data-url");
                m.load()
                m.autoplay = true;
                play_btn.style.display = "none";
                pause_btn.style.display = "block";
                v_name.innerHTML = this.innerHTML;
                v_author.innerHTML = this.getAttribute("data-author");
                img_box.style.backgroundImage = "url(" + this.getAttribute("data-img") + ")"; 
                // a 标签阻止不了默认事件，所以要用return false
                return false;
            },
        }
        // 执行初始化
        Player.init();
    }


    (window, document)
)