import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth.js'
import school from '@/store/modules/school.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  modules: {
    auth,
    school
  }
})
