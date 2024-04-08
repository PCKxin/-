<template>
  <div class="home">
    <!-- 头部搜索 -->
    <header>
      <div class="banxin">
        <h1>TodoList</h1>
        <input type="text" placeholder="添加Todo" v-model.trim="userVal" @keyup.enter="userEnterFn" />
      </div>
    </header>
    <!-- list 内容区 -->
    <section class="banxin">
      <!-- 正在进行 -->
      <div class="title">
        <h3>正在进行</h3>
        <span>{{ goingArr.length }}</span>
      </div>
      <!--子组件 正在进行 -->
      <ul-comp :arr="goingArr" @delgoingitem="delGoingItem" @changegoing="changeGoing" @goingdivtoipt="goingDivToipt"
        @goingipttodiv="goingiptTodiv" @setdata="setToLocalStorage"></ul-comp>

      <!-- 已完成  -->
      <div class="title">
        <h3>已经完成</h3>
        <span>{{ doneArr.length }}</span>
      </div>

      <!--子组件 已完的 -->
      <ul-comp :arr="doneArr" @deldoneitem="delDoneItem" @changedone="changeDone" @donedivtoipt="doneDivToipt"
        @doneipttodiv="doneiptTodiv" @setdata="setToLocalStorage"></ul-comp>
    </section>

    <ul-comp></ul-comp>
  </div>
</template>

<script>
// @ is an alias to /src
import UlComp from "@/components/UIComp";

export default {
  name: "HomeView",
  components: {
    UlComp,
  },
  data() {
    return {
      userVal: "",
      num: 0,
      //正在进行
      goingArr: [
        // {id:"001",ifCheck:false,ifShowIpt:false,content:"1111"},
      ],
      //已完成
      doneArr: [
        // {id:"002",ifCheck:true,ifShowIpt:false,content:"222"},
      ],
    };
  },
  methods: {
    //删除doneArr中的项
    delDoneItem(index) {
      this.doneArr.splice(index, 1);
    },

    //删除goingArr中的项
    delGoingItem(index) {
      this.goingArr.splice(index, 1);
    },

    //doneArr中的项修改
    changeDone(obj) {
      // console.log(obj)
      this.doneArr[obj.index].ifCheck = false;
      this.goingArr.push(obj.item);
      this.doneArr.splice(obj.index, 1);
    },
    //goingArr中的项修改了
    changeGoing(obj) {
      this.goingArr[obj.index].ifCheck = true;
      this.doneArr.push(obj.item);
      this.goingArr.splice(obj.index, 1);
    },
    //将doneArr中的div切换成input
    doneDivToipt(index) {
      this.doneArr[index].ifShowIpt = true;
    },
    //将doneArr中的input切换成div
    doneiptTodiv(index) {
      this.doneArr[index].ifShowIpt = false;
    },
    //将doneArr中的div切换成input
    goingDivToipt(index) {
      this.goingArr[index].ifShowIpt = true;
    },
    //将goingArr中的input切换成div
    goingiptTodiv(index) {
      this.goingArr[index].ifShowIpt = false;
    },

    //按回车键发送
    userEnterFn() {
      //不能发送空内容
      if (this.userVal == "") {
        alert("内容不能为空");
        return;
      }
      this.num++;
      let id = "";
      if (this.num < 10) {
        id = "00" + this.num;
      } else if (this.num >= 10) {
        id = "0" + this.num;
      } else {
        id = "" + this.num;
      }

      let obj = {
        id: id,
        ifCheck: false,
        ifShowIpt: false,
        content: this.userVal,
      };

      this.goingArr.unshift(obj);
      //发送完成 清空输入框内容
      this.userVal = "";
      this.setToLocalStorage();
    },
    //专门用来保存数组和num到localStoragK中
    setToLocalStorage() {
      //num
      localStorage.setItem("num", this.num);
      //goingArr
      localStorage.setItem("goingArr", JSON.stringify(this.goingArr));
      //doneArr
      localStorage.setItem("doneArr", JSON.stringify(this.doneArr));
    },
  },
  created() {
    //取num
    this.num = localStorage.getItem("num") ? localStorage.getItem("num") : 0;
    //取goingArr
    this.goingArr = localStorage.getItem("goingArr")
      ? JSON.parse(localStorage.getItem("goingArr"))
      : [];
    //取doneArr
    this.doneArr = localStorage.getItem("doneArr")
      ? JSON.parse(localStorage.getItem("doneArr"))
      : [];
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  font-style: normal;
}

body {
  background: #cdcdcd;
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
  text-align: left;
  /* 行首空格 */
  text-indent: 1em;
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
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 50%;
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
</style>
