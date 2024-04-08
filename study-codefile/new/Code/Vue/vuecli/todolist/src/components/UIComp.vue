<template>
  <ul class="list">
    <li v-for="(item, index) in arr" :key="item.id">
      <!-- 复选框 -->
      <input
        type="checkbox"
        class="chx"
        :checked="item.ifCheck"
        @change="chxChange(item, index)"
      />
      <!-- input修改框 -->
      <input
        type="text"
        class="txt"
        v-focus
        v-if="item.ifShowIpt"
        @keyup.13="keyupEvent(item, index)"
        v-model="item.content"
      />
      <!-- div跟input内容显示一致 -->
      <div v-else @click="divClick(item, index)">{{ item.content }}</div>
      <label :for="item.id"></label>
      <!-- 删除当前元素 -->
      <i @click="delItem(item, index)">-</i>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["arr"],
  methods: {
    //删除
    delItem(item, index) {
      if (item.ifCheck) {
        //已完成的状态
        this.$emit("deldoneitem", index);
      } else {
        //正在进行时
        this.$emit("delgoingitem", index);
      }
      this.$emit("setdata");
    },
    //勾选框
    chxChange(item, index) {
      if (item.ifCheck) {
        //{xxx:item,index}
        this.$emit("changedone", { item, index });
      } else {
        this.$emit("changegoing", { item, index });
      }
      this.$emit("setdata");
    },
    //div和input切换的点击事件
    divClick(item, index) {
      if (item.ifCheck) {
        this.$emit("donedivtoipt", index);
      } else {
        this.$emit("goingdivtoipt", index);
      }
    },
    //输入回车事件
    keyupEvent(item, index) {
      if (item.ifCheck) {
        this.$emit("doneipttodiv", index);
      } else {
        this.$emit("goingipttodiv", index);
      }
      this.$emit("setdata");
    },
  },
  //自定focus()
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
