// import Vue from 'vue'

import Vue from 'vue'
import Vuex from 'vuex'
import appConfig from '../../app.config'
import axios from 'axios'

Vue.use(Vuex)

// the root, initial state object
const state = {
  host: {
    id: 0,
    ip: '', // IP Adress mostly
    user: '',
    pwd: ''
  },
  axios_instance: axios.create({
    baseUrl: appConfig.baseUrl,
    timeout: 2000,
    headers: {
      'user': '',
      'pwd': '',
      'database': '',
      'server_ip': '',
      'port': 1433,
      'models': 'config',
      'host_id': 0
    }
  })
}

const mutations = {
  SET_HOST_ID (state, id) {
    state.host.id = id
  },
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
  },
  axios_instance (state) {
    state.axios_instance.headers.user = state.host.user
    state.axios_instance.headers.pwd = state.host.pwd
    state.axios_instance.headers.server_ip = state.host.ip
    state.axios_instance.headers.database = 'BD_SEGURIDAD'
    state.axios_instance.headers.host_id = state.host.id
    return state.axios_instance
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
