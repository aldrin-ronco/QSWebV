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
                 v-model:value="userName"
                 placeholder="Nombre de Usuario"
                 class="form-control"
                 v-focus>
        </div>
        <div class="form-group">
          <label for="pwd">Contraseña</label>
          <input type="password"
                 id="pwd"
                 v-model:value="pwd"
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
        <button
               class="btn btn-primary"
               :disabled="!shouldEnableComprobar"
               @click="logginCheck($event)">
               Mensaje Estatico
        </button>
      </div>
    </form>
    <pre>{{ $data }}</pre>
    <pre>{{ host }}</pre>
    <pre>{{ showCompany }}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import appConfig from '../../app.config'
export default {
  data () {
    return {
      userName: '',
      pwd: '',
      selected: '',
      databases: [],
      isSubmited: false,
      isSent: false,
      statusMsg: 'Comprobando'
    }
  },
  computed: {
    ...mapGetters([
      'host',
      'axios_instance'
    ]),
    shouldEnableComprobar () {
      if (this.userName.trim() && this.pwd.trim()) {
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
    }
  },
  methods: {
    logginCheck (evt) {
      evt.preventDefault()
      let vm = this
      console.log(this.statusMsg)
      // vm.isSubmited = true
      vm.axios_instance.get(`${appConfig.baseUrlWebApi}/login-check`, {timeout: 10000})
      .then(function (response) {
        console.log(response)
        response.data.user_profile.databases.forEach(function (db) {
          vm.databases.push({ text: db.DataBaseAlias, value: db.DataBaseName })
        })
        // vm.isSent = true
        // Si hay bases de datos configuradas para este usuario
        if (response.data.user_profile.databases.length > 0) {
          vm.selected = response.data.user_profile.databases[0].DataBaseName
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
