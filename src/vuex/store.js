// import Vue from 'vue'

import Vue from 'vue'
import Vuex from 'vuex'
import appConfig from '../../app.config'
import axios from 'axios'

Vue.use(Vuex)

// the root, initial state object
const state = {
  profile_options: [],
  company: {
    logo: ''
  },
  axios_config: {
    baseUrl: appConfig.baseUrlGoApi,
    headers: {
      host_user: '', // Usuario para conectar con la Base de Datos
      host_pwd: '', // Contraseña para conectar con la base de datos
      host_ip: '', // Dirección IP del servidor
      host_port: 1433, // Puerto
      host_id: 0, // id del host
      host_domain: '',
      user_name: '', // Usuario de inicio sesión en Quality
      user_pwd: '', // Password de Inicio sessión del usuario
      models: 'config', // Directorio que se va a cargar
      host_database: '' // Base de datos a la que se va a conectar
    }
  }
}

const mutations = {
  SET_PROFILE_OPTIONS (state, options) {
    state.profile_options = options
  },
  SET_HOST_ID (state, id) {
    state.axios_config.headers.host_id = id
  },
  SET_HOST_DOMAIN (state, hostDomain) {
    state.axios_config.headers.host_domain = hostDomain
  },
  SET_HOST_IP (state, ip) {
    state.axios_config.headers.host_ip = ip
  },
  SET_HOST_USER (state, user) {
    state.axios_config.headers.host_user = user
  },
  SET_HOST_PWD (state, pwd) {
    state.axios_config.headers.host_pwd = pwd
  },
  SET_HOST_DATABASE (state, database) {
    state.axios_config.headers.host_database = database
  },
  SET_USER_NAME (state, userName) {
    state.axios_config.headers.user_name = userName
  },
  SET_USER_PWD (state, pwd) {
    state.axios_config.headers.user_pwd = pwd
  },
  SET_COMPANY_LOGO (state, location) {
    state.company.logo = location
  }
}

const getters = {
  company (state) {
    return state.company
  },
  axios_instance (state) {
    return axios.create(state.axios_config)
  },
  axios_config (state) {
    return state.axios_config
  },
  profile_options (state) {
    return state.profile_options
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
