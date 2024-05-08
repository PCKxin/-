<!-- <template>
    <div class="">
        <h2 class="title">商品列表</h2>
        <div class="box">
            <ul class="listL">
                <li>为你推荐</li>
                <li>水果区</li>
                <li>蔬菜区</li>
                <li>家禽区</li>
            </ul>

            <div class="ListR">
                <div class="LRcon">
                    <img src="../assets/images/pingguo.png" alt="" class="itemImg">
                    <p class="itemTitle">语农 散装土鸡蛋 360枚 40斤</p>
                    <li class="itemTime">提货时间:08月13日</li>
                    <p class="itemInfo">
                        <span class="itemPrice">￥ 28.8</span>
                        <span class="itemCount">已售2700件</span>
                        <span class="itemShop">加入购物车</span>
                    </p>
                </div>
            </div>


        </div>
    </div>
</template> -->
<template>
    <div>
        <h2 class="title">商品列表</h2>
        <div class="box">
            <ul class="listL">
                <li v-for="(area, index) in InfoList" :key="index" class="LLItem">{{ area.title }}</li>
            </ul>

            <div class="ListR">
                <div v-for="(area, index) in InfoList" :key="index">
                    <div v-for="(item, i) in area.content" :key="i" class="LRcon">
                        <img :src="require(`../assets/images/${item.img}`)" alt="" class="itemImg">
                        <p class="itemTitle">{{ item.name }}</p>
                        <p class="itemTime">提货时间: {{ item.time }}</p>
                        <p class="itemInfo">
                            <span class="itemPrice">￥ {{ item.price }}</span>
                            <span class="itemCount">已售{{ item.count }}件</span>
                            <span class="itemShop">加入购物车</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            InfoList: [], // 商品列表
        }
    },
    // Promise获取文件内容
    created() {
        fetch('../list.json')
            .then(res => res.json())
            .then(res => {
                this.InfoList = res;
                // console.log(this.InfoList);
                // 区id
                console.log(this.InfoList[0].id);
                // 区名
                console.log(this.InfoList[0].title);
                // 商品内容
                console.log(this.InfoList[0].content);
                // 商品内容-名字
                console.log(this.InfoList[0].content[0].name);
                // 商品内容-图片
                console.log(this.InfoList[0].content[0].img);
                // 商品内容-时间
                console.log(this.InfoList[0].content[0].time);
                // 商品内容-价格
                console.log(this.InfoList[0].content[0].price);
                // 商品内容-销量
                console.log(this.InfoList[0].content[0].count);
            })
    },
}
</script>




<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.title {
    width: 100%;
    height: 20px;
    text-align: center;
    font-size: 15px;
}

.box {
    width: 100%;
    height: 100%;
    display: flex;
}

.listL {
    background: #fff;
    flex: 2; // 意思是占比2
    height: 100%;
}

.LLItem{
    width: 100%;
    height: 50px;
    font-size: 12px;
    text-align: center;
    align-content: center; // 垂直居中
}

.ListR {
    flex: 8; // 意思是占比8
}

.LRcon {
    width: 280px;
    height: 190px;
    border-radius: 10px;
    margin: 0 auto;
    // 四周阴影 凸显立体感
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.258);
}

.itemInfo {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.itemImg {
    width: 100%;
    height: 100px;
    border-radius: 10px;
}

.itemTitle {
    width: 100%;
    height: 20px;
    font-size: 0.3rem;
    margin-bottom: 5px;
}


.itemTime {
    width: 100%;
    height: 20px;
    display: flex;
    font-size: 12px;
}

.itemPrice {
    font-size: 12px;
    color: red;
}

.itemCount {
    font-size: 12px;
}

.itemShop {
    width: 80px;
    height: 100%;
    // 字体两边留白
    padding: 0 8px;
    font-size: 0.25rem;
    border-radius: 10px;
    background: red;
    // margin-left: 30px;
    color: #fff;
}
</style>