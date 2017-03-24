<template>
  <div>
    <img :src="company.logo" alt="" class="logo">
    <h2><b>Quality WEB</b>
      <small>Inicia Sesión</small>
    </h2>
    <form>
      <div class="container">
        <div class="form-group">
          <label for="userName">Nombre de Usuario</label>
          <input type="text"
                 id="userName"
                 v-model:value="axios_config.headers.user_name"
                 @input="setUserName($event)"
                 style="text-transform: uppercase"
                 placeholder="Nombre de Usuario"
                 class="form-control"
                 :disabled="formSubmited"
                 v-focus>
        </div>
        <div class="form-group">
          <label for="pwd">Contraseña</label>
          <input type="password"
                 id="pwd"
                 v-model:value="axios_config.headers.user_pwd"
                 @input="setUserPwd($event)"
                 placeholder="Contraseña"
                 class="form-control pwd"
                 :disabled="formSubmited">
        </div>
        <div class="form-group" v-show="showCompany">
          <label for="dbases">Empresa</label>
          <select v-model="axios_config.headers.database" class="form-control" id="dbases">
            <option v-for="db in databases" v-bind:value="db.value">
                {{ db.text }}
            </option>
          </select>
        </div>
        <div class="isa_warning" style="border-radius:.5em;box-shadow:1px 1px 3px #888;" v-show="hasLogginErrors">
          <i class="fa fa-warning"></i>
          usuario o contraseña incorrecto
        </div>
        <div class="flex-container">
          <button name="btnComprobar"
            class="btn btn-primary flex-item"
            :disabled="!shouldEnableComprobar"
            @click="logginCheck($event)">
            <span :class="{ 'glyphicon': isSubmited && !isSent, 'glyphicon-refresh': isSubmited && !isSent, spinning: isSubmited && !isSent }"></span>
            {{ buttonStatusMsg }}
          </button>
        </div>
      </div>
    </form>
    <!-- <pre>{{ $data }}</pre>
    <pre>{{ axios_config }}</pre>
    <pre>{{ showCompany }}</pre> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import appConfig from '../../app.config'
export default {
  data () {
    return {
      databases: [],
      isSubmited: false,
      isSent: false,
      loggin_error: false
    }
  },
  computed: {
    ...mapGetters([
      'company',
      'axios_config',
      'axios_instance'
    ]),
    showSpinner () {
      return this.isSubmited && !this.isSent
    },
    formSubmited () {
      return this.isSubmited
    },
    shouldEnableComprobar () {
      let vm = this
      // console.log(vm.axios_config.headers.server.user)
      // console.log(vm.axios_config.headers)
      if (this.isSubmited && !this.isSent) { // Si han dado clieck en comprobar pero aun no ha respondido el servidor
        return false
      } else if (this.loggin_error) { // Si se está mostrando el mensaje de usuario o contraseña incorrecta
        return false
      } else if (vm.axios_config.headers.user_name.trim() && vm.axios_config.headers.user_pwd.trim()) { // Si hay contenido en usuario & contraseña
        return true
      } else {
        return false
      }
    },
    showCompany () {
      if (this.databases.length) {
        return true
      } else {
        return false
      }
    },
    buttonStatusMsg () {
      if (this.isSubmited && !this.isSent && !this.loggin_error) {
        return 'Comprobando'
      } else if (this.isSent && !this.loggin_error) {
        return 'Iniciar Sesión'
      } else {
        return 'Comprobar'
      }
    },
    hasLogginErrors () {
      return this.loggin_error
    }
  },
  methods: {
    setUserName (evt) {
      this.$store.commit('SET_USER_NAME', evt.target.value.toUpperCase())
    },
    setUserPwd (evt) {
      this.$store.commit('SET_USER_PWD', evt.target.value)
    },
    logginCheck (evt) {
      // Como el lamado viene de un button, tuve que hacer esto para evitar el redireccionamiento, casi quedo calvo
      evt.preventDefault()

      if (this.isSent) { // Iniciar Sessión
        return alert('Aqui va el dash board !')
      }

      let vm = this // Guardamos la instancia antes de que se pierda
      vm.isSubmited = true // Ha Sido presionado el botón de comprobar, Inicia la espera de respuesta
      vm.axios_instance.get(`${appConfig.baseUrlWebApi}/login-check`, {timeout: 30000}) // timeout de 30 Segundos, haber si da resultado
      .then(function (response) {
        console.log(response)
        if (response.data.logged) {
          vm.isSent = true // El Servidor ha respondido, termina la espera (Spinner)
          response.data.user_profile.databases.forEach(function (db) {
            vm.databases.push({ text: db.DataBaseAlias, value: db.DataBaseName }) // Colocamos todas las bases de datos de este usuario en el array
          })
          // Si hay bases de datos configuradas para este usuario
          if (response.data.user_profile.databases.length > 0) {
            vm.$store.commit('SET_HOST_DATABASE', response.data.user_profile.databases[0].DataBaseName) // Seleccionamos la primera base de datos de la lista para que se muestre en el desplegable
          }
        } else {
          vm.loggin_error = true // Controla si las credenciales no fueron exitosas (Activa mensaje de contraseña o usuario errado)
          vm.isSent = true // Reseteamos variable para controlar nuevo intento
          setTimeout(() => {
            vm.isSubmited = false // Vuelve a habilitar los controles para usuario y contraseña
            vm.isSent = false // El Servidor ha respondido, termina la espera (Spinner)
            vm.loggin_error = false
          }, 4000)
        }
      }, function (error) {
        console.log(error)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css" scoped>
img {
  display: block;
  margin: auto;
  max-width: 300px;
  max-height: 300px;
  margin-top: 60px;
}
h2 {
  margin-top: 40px;
  text-align: center;
}
.container {
  margin-top: 40px;
  max-width: 400px;
}
.flex-container{
  display: flex;
}
.flex-item {
  flex-grow: 1;
}
.glyphicon.spinning {
    animation: spin 1s infinite linear;
    -webkit-animation: spin2 1s infinite linear;
}
@keyframes spin {
    from { transform: scale(1) rotate(0deg); }
    to { transform: scale(1) rotate(360deg); }
}
@-webkit-keyframes spin2 {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
  }
</style>
