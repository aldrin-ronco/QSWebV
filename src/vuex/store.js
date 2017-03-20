// import Vue from 'vue'

import Vue from 'vue'
import Vuex from 'vuex'
import appConfig from '../../app.config'
import axios from 'axios'

Vue.use(Vuex)

// the root, initial state object
const state = {
  company: {
    logo: ''
  },
  axios_config: {
    baseUrl: appConfig.baseUrlWebApi,
    headers: {
      server: {
        'user': '', // Usuario para conectar con la Base de Datos
        'pwd': '', // Contraseña para conectar con la base de datos
        'ip': '', // Dirección IP del servidor
        'database': '', // Base de datos a la que se va a conectar
        'port': 1433, // Puerto
        'models': 'config', // Directorio que se va a cargar
        'id': 0 // id del host
      },
      user: {
        name: '', // Usuario de inicio sesión en Quality
        pwd: '' // Password de Inicio sessión del usuario
      }
    }
  }
}

const mutations = {
  SET_SERVER_ID (state, id) {
    state.axios_config.headers.server.id = id
  },
  SET_SERVER_IP (state, ip) {
    state.axios_config.headers.server.ip = ip
  },
  SET_SERVER_USER (state, user) {
    state.axios_config.headers.server.user = user
  },
  SET_SERVER_PWD (state, pwd) {
    state.axios_config.headers.server.pwd = pwd
  },
  SET_SERVER_DATABASE (state, database) {
    state.axios_config.headers.server.database = database
  },
  SET_USER_NAME (state, userName) {
    state.axios_config.headers.user.name = userName
  },
  SET_USER_PWD (state, pwd) {
    state.axios_config.headers.user.pwd = pwd
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
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
