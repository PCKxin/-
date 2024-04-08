<template>
  <div class="about">
    <!-- 头部搜索 -->
    <header>
      <div class="banxin">
        <h1>TodoList</h1>
        <!--  
                .trim 去除前后空格
            -->
        <input type="text" placeholder="添加Todo" v-model.trim="userVal" @keyup.enter="userEnterFn">
      </div>
    </header>
    <!-- list 内容区 -->
    <section class="banxin">
      <!-- 正在进行 -->
      <div class="title">
        <h3>正在进行</h3>
        <span>{{ goingArr2.length }}</span>
      </div>
      <!--子组件 正在进行 -->
      <!--  
            : 传递数据
            :arr="goingArr2" 传递goingArr2数组
            @ 传递事件
        -->
      <ul-comp2 :arr="goingArr2" @delgoingitem="delGoingItem" @changegoing="changeGoing" @goingdivtoipt="goingDivToipt"
        @goingipttodiv="goingiptTodiv"></ul-comp2>

      <!-- 已完成  -->
      <div class="title">
        <h3>已经完成</h3>
        <span>{{ doneArr2.length }}</span>
      </div>

      <!--子组件 已完的 -->
      <ul-comp2 :arr="doneArr2" @deldoneitem="delDoneItem" @changedone="changeDone" @donedivtoipt="doneDivToipt"
        @doneipttodiv="doneiptTodiv"></ul-comp2>

    </section>

    <!-- 清空按钮 -->
    <footer>
      <div class="banxin">
        <button @click="clearAll" class="clearbtn">清空全部</button>
        <button @click="clearDone" class="clearbtn">清空已完成</button>
      </div>
    </footer>

    <ul-comp2></ul-comp2>
  </div>

</template>

<script>
import UlComp2 from "@/components/UIComp2";


export default {
  data() {
    return {
      userVal: "",
      num: 0,
      //正在进行
      goingArr2: [
        // {id:"001",ifCheck:false,ifShowIpt:false,content:"1111"},
      ],
      //已完成
      doneArr2: [
        // {id:"002",ifCheck:true,ifShowIpt:false,content:"222"},
      ],
    }
  },
  components: {
    UlComp2
  },
  methods: {
    //删除doneArr2中的项
    delDoneItem(index) {
      this.doneArr2.splice(index, 1)
    },

    //删除goingArr2中的项
    delGoingItem(index) {
      this.goingArr2.splice(index, 1)
    },

    //doneArr2中的项修改
    changeDone(obj) {
      // console.log(obj)
      this.doneArr2[obj.index].ifCheck = false;
      this.goingArr2.push(obj.item)
      this.doneArr2.splice(obj.index, 1)
    },
    //goingArr2中的项修改了
    changeGoing(obj) {
      this.goingArr2[obj.index].ifCheck = true;
      this.doneArr2.push(obj.item)
      this.goingArr2.splice(obj.index, 1)
    },
    //将doneArr2中的div切换成input
    doneDivToipt(index) {
      this.doneArr2[index].ifShowIpt = true;
    },
    //将doneArr2中的input切换成div
    doneiptTodiv(index) {
      this.doneArr2[index].ifShowIpt = false
    },
    //将doneArr2中的div切换成input
    goingDivToipt(index) {
      this.goingArr2[index].ifShowIpt = true;
    },
    //将goingArr2中的input切换成div
    goingiptTodiv(index) {
      this.goingArr2[index].ifShowIpt = false
    },

    //清空全部
    clearAll() {
      this.goingArr2 = [];
      this.doneArr2 = [];
    },
    //清空已完成
    clearDone() {
      this.doneArr2 = [];
    },


    //按回车键发送
    userEnterFn() {
      //不能发送空内容
      if (this.userVal == "") {
        alert("内容不能为空")
        return // return后面的代码不会执行
      }
      this.num++; // 作用是给id赋值
      let id = "";
      if (this.num < 10) {
        id = "00" + this.num
      } else if (this.num >= 10) {
        id = "0" + this.num
      } else {
        id = "" + this.num;
      }

      let obj = {
        id: id,
        ifCheck: false,
        ifShowIpt: false, // 控制div和input的显示
        content: this.userVal // 输入的内容
      }

      this.goingArr2.unshift(obj)
      //发送完成 清空输入框内容
      this.userVal = "";

    }
  },

  // 监听并保存数据
  watch: {
    goingArr2: {
      // 深度监听
      deep: true,
      // 当goingArr2属性变化时，执行回调函数
      handler() {
        // localStorage只能存储字符串
        // .setItem(key,value) key是键名，value是键值
        // JSON.stringify() 将对象转换为JSON字符串
        localStorage.setItem("goingArr2", JSON.stringify(this.goingArr2))
      }
    },
    doneArr2: {
      deep: true,
      handler() {
        localStorage.setItem("doneArr2", JSON.stringify(this.doneArr2))
      }
    }
  },

  //页面加载时获取数据
  created() {
    // 获取并解析本地存储中的数据
    // parse() 方法用于将一个 JSON 字符串转换为对象
    let goingArr2 = JSON.parse(localStorage.getItem("goingArr2"));
    let doneArr2 = JSON.parse(localStorage.getItem("doneArr2"));
    if (goingArr2) { // 如果goingArr2有值
      this.goingArr2 = goingArr2 // 将goingArr2的值赋给this.goingArr2
    }
    if (doneArr2) {
      this.doneArr2 = doneArr2
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  font-style: normal;
}

body {
  background: #CDCDCD;
  font-size: 16px;
  color: #000;
}

a {
  color: #000;
  text-decoration: none;
}

.banxin {
  width: 600px;
  margin: 0 auto;
}

header {
  height: 50px;
  background: #333;
}

header h1 {
  float: left;
  color: #fff;
  height: 50px;
  line-height: 50px;
}

header input {
  float: right;
  width: 300px;
  height: 40px;
  border-radius: 5px;
  text-indent: 1em;
  margin-top: 5px;
}

section .title {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
}

section .title span {
  width: 30px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  background: #555;
  border-radius: 50%;
}

.list li {
  height: 50px;
  background: #fff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.list li .chx {
  width: 20px;
  height: 20px;
  float: left;
  margin-left: 10px;
  margin-right: 10px;
  box-sizing: border-box;
}

.list li div {
  width: 400px;
  height: 30px;
  line-height: 30px;
  float: left;
}

.list li .txt {
  width: 400px;
  height: 30px;
  border: 1px solid #ccc;
  text-indent: 1em;
  border-radius: 5px;
  outline: none;
  float: left;
  box-sizing: border-box;
}

.list li label {
  float: left;
  width: 130px;
  height: 50px;
}

.list li i {
  width: 40px;
  height: 20px;
  border: 1px solid #000;
  background: #d1d1d1;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  line-height: 16px;
  margin-right: 10px;
}

footer {
  text-align: center;
  line-height: 40px;
  color: #666;
}

.clearbtn {
  width: 100px;
  height: 40px;
  background: #333;
  color: #fff;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
