// import Vue from 'vue'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// import appConfig from '../../app.config'

// the root, initial state object
const state = {
  host: {
    ip: '', // IP Adress mostly
    user: '',
    pwd: ''
  }
}

const mutations = {
  SET_HOST_IP (state, ip) {
    state.host.ip = ip
  },
  SET_HOST_USER (state, user) {
    state.host.user = user
  },
  SET_HOST_PWD (state, pwd) {
    state.host.pwd = pwd
  }
}

const getters = {
  host (state) {
    return state.host
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
