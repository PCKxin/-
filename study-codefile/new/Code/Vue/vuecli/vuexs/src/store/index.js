import Vue from 'vue'
import Vuex from 'vuex'
import managenum from './modules/managenum'

Vue.use(Vuex)

export default new Vuex.Store({
  // state 就是 Vuex 中的数据源，我们需要保存的数据就保存在这里，可以在页面通过 this.$store.state 来获取我们定义的数据。
  state: {
    num: 1,
    title: 'Hello Vuex'
  },
  // getters 相当于computed属性，当我们需要根据 state 中的数据计算出新数据的时候，我们就可以使用 getters 方法来进行计算。
  getters: {
    getNum(state) {
      return state.num*2
    },
    getTitle(state) {
      return state.title = 'Hello Vuex'
    }
  },
  // mutations 是 Vuex 中更改 state 的唯一方法，但是不支持异步操作，如果需要异步操作，我们需要使用 actions。
  mutations: {
    toadd(state) {
      state.num++
      // setTimeout(() => {
      //   state.num++
      // }, 1000)
    },
    tocut(state, n) { // 传递参数
      // state.num--
      state.num -= n
    },
    tochangeTitle(state, title) {
      state.title = title.name
    }
  },
  // actions 和 mutations 类似，不同的是 actions 是支持异步操作的，我们可以在 actions 内部执行异步操作，然后提交 mutation 来更改 state。
  actions: {
    asynctoadd(context) {
      setTimeout(() => {
        context.commit('toadd')
      }, 1000)
    },
    // 递减
    asynctocut({commit,rootState}, n) {
      setTimeout(() => {
        console.log(rootState)
        commit('tocut', n)
      }, 1000)
    },
  },
  // modules 是用来将 store 分割成模块的，每个模块拥有自己的 state、mutation、action、getter。
  modules: {
    managenum
  }
})
