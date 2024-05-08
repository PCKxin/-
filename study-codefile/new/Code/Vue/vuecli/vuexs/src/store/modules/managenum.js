export default{
    namespaced: true, // 命名空间, 使得模块内部的 action 和 mutation 不再是全局的，而是局部的。
    state: {
        num: 1,
        title: 'Hello Vuex'
    },
    getters: {
        getNum(state) {
            return state.num*2
        },
        getTitle(state) {
            return state.title = 'Hello Vuex'
        }
    },
    mutations: {
        toadd(state) {
            state.num++
        },
        tocut(state, n) { 
            state.num -= n
        },
        tochangeTitle(state, title) {
            state.title = title.name
        }
    },
    actions: {
        asynctoadd(context) {
            setTimeout(() => {
                context.commit('toadd')
            }, 1000)
        },
        asynctocut({commit,rootState}, n) {
            setTimeout(() => {
                console.log(rootState)
                commit('tocut', n)
            }, 1000)
        },
    }
}