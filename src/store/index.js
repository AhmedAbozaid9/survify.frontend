import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: {
      data: { name: 'myName' },
      token: 'myToken',
    },
  },
  getters: {},
  actions: {
    increment(context) {
      context.commit('increment')
    },
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  modules: {},
})

export default store
