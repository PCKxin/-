<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<script>

export default {
    data () {
        return {

        }
    },
    // rem适配
    // 在页面加载完成后执行
    beforeMount(){
        // 获取文档根元素html标签
        var docEl = document.documentElement;
        // 获取屏幕旋转事件
        var resize_event = 'orientationchange' in window ? 'orientationchange' : 'resize';
        // 重新计算rem的值
        var re_rem = function(){
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
            if(clientWidth >= 750){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
        // 如果文档对象没有添加事件监听的方法，则直接返回
        if(!document.addEventListener) return;
        // 添加事件监听，当屏幕旋转或屏幕大小改变时，重新计算rem的值
        window.addEventListener(resize_event, re_rem, false);
        // 添加事件监听，当文档加载完成时，重新计算rem的值
        document.addEventListener('DOMContentLoaded', re_rem, false);
    },
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
  border: 0;
  list-style: none;
}
body{
  background: #ffffff;
}
</style>
