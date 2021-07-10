import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        name: 'あれを買う',
        done: false
      },
      {
        id: 2,
        name: 'これを買う',
        done: true
      }
    ],
  },
})

// ストアをエクスポート
export default store
