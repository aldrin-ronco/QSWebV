<template>
  <div>
    <img :src="host.companyLogo" alt="" class="logo">
    <h2><b>Quality WEB</b>
      <small>Inicia Sesión</small>
    </h2>
    <form>
      <div class="container">
        <div class="form-group">
          <label for="userName">Nombre de Usuario</label>
          <input type="text"
                 id="userName"
                 v-model:value="axios_config.headers.user.user_name"
                 @input="setUserName($event)"
                 style="text-transform: uppercase"
                 placeholder="Nombre de Usuario"
                 class="form-control"
                 v-focus>
        </div>
        <div class="form-group">
          <label for="pwd">Contraseña</label>
          <input type="password"
                 id="pwd"
                 v-model:value="axios_config.headers.user.user_pwd"
                 @input="setUserPwd($event)"
                 placeholder="Contraseña"
                 class="form-control pwd">
        </div>
        <div class="form-group" v-show="showCompany">
          <label for="dbases">Empresa</label>
          <select v-model="selected" class="form-control" id="dbases">
            <option v-for="db in databases" v-bind:value="db.value">
                {{ db.text }}
            </option>
          </select>
        </div>
        <button name="btnComprobar"
                class="btn btn-primary"
                :disabled="!shouldEnableComprobar"
                @click="logginCheck($event)">
                <span :class="{ 'glyphicon': isSubmited && !isSent, 'glyphicon-refresh': isSubmited && !isSent, spinning: isSubmited && !isSent }"></span>
                {{ buttonStatusMsg }}
        </button>
      </div>
    </form>
    <pre>{{ $data }}</pre>
    <pre>{{ axios_config }}</pre>
    <pre>{{ showCompany }}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import appConfig from '../../app.config'
export default {
  data () {
    return {
      selected: '',
      databases: [],
      isSubmited: false,
      isSent: false
    }
  },
  computed: {
    ...mapGetters([
      'host',
      'axios_config',
      'axios_instance'
    ]),
    shouldEnableComprobar () {
      let vm = this
      if (this.isSubmited && !this.isSent) { // Si han dado clieck en comprobar pero aun no ha respondido el servidor
        return false
      } else if (vm.axios_config.headers.user.user_name.trim() && vm.axios_config.headers.user.user_pwd.trim()) {
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
      if (this.isSubmited && !this.isSent) {
        return 'Comprobando'
      } else if (this.isSent) {
        return 'Iniciar Sesión'
      } else {
        return 'Comprobar'
      }
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
        response.data.user_profile.databases.forEach(function (db) {
          vm.databases.push({ text: db.DataBaseAlias, value: db.DataBaseName }) // Colocamos todas las bases de datos de este usuario en el array
        })
        vm.isSent = true // El Servidor ha respondido, termina la espera
        // Si hay bases de datos configuradas para este usuario
        if (response.data.user_profile.databases.length > 0) {
          vm.selected = response.data.user_profile.databases[0].DataBaseName // Seleccionamos la primera base de datos de la lista para que se muestre en el desplegable
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
.btn-primary {
  width: 370px;
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
