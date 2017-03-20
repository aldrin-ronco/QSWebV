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
    pwd: '',
    companyLogo: ''
  },
  axios_config: {
    baseUrl: appConfig.baseUrlWebApi,
    headers: {
      host: {
        'user': '', // Usuario para conectar con la Base de Datos
        'pwd': '', // Contraseña para conectar con la base de datos
        'server_ip': '', // Dirección IP del servidor
        'database': '', // Base de datos a la que se va a conectar
        'port': 1433, // Puerto
        'models': 'config', // Directorio que se va a cargar
        'host_id': 0 // id del host
      },
      user: {
        user_name: '', // Usuario de inicio sesión en Quality
        user_pwd: '' // Password de Inicio sessión del usuario
      }
    }
  }
}

const mutations = {
  SET_HOST_ID (state, id) {
    state.host.id = id
    state.axios_config.headers.host.host_id
  },
  SET_HOST_IP (state, ip) {
    state.host.ip = ip
    state.axios_config.headers.host.server_ip = ip
  },
  SET_HOST_USER (state, user) {
    state.host.user = user
    state.axios_config.headers.host.user = user
  },
  SET_HOST_PWD (state, pwd) {
    state.host.pwd = pwd
    state.axios_config.headers.host.pwd = pwd
  },
  SET_USER_NAME (state, userName) {
    state.axios_config.headers.user.user_name = userName
  },
  SET_USER_PWD (state, pwd) {
    state.axios_config.headers.user.user_pwd = pwd
  },
  SET_COMPANY_LOGO (state, location) {
    state.host.companyLogo = location
  }
}

const getters = {
  host (state) {
    return state.host
  },
  axios_instance (state) {
    return axios.create(state.axios_config)
  },
  axios_config (state) {
    return state.axios_config
  },
  userName (state) {
    return state.axios_config.headers.user.user_name
  },
  userPwd (state) {
    return state.axios_config.headers.user.user_pwd
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
