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
        <input type="button"
               name="comprobar"
               :value="showCompany ? 'Iniciar Sesión' : 'Comprobar'"
               class="btn btn-primary"
               :disabled="!shouldEnableComprobar"
               @click="logginCheck">
      </div>
    </form>
    <!--
    <pre>{{ $data }}</pre>
    <pre>{{ host }}</pre>
    <pre>{{ showCompany }}</pre> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import appConfig from '../../app.config'
// import axios from 'axios'
export default {
  data () {
    return {
      userName: '',
      pwd: '',
      selected: '',
      databases: []
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
    logginCheck () {
      let vm = this
      this.axios_instance.get(`${appConfig.baseUrlWebApi}/login-check`, {timeout: 10000})
      .then(function (response) {
        response.data.user_profile.databases.forEach(function (db) {
          vm.databases.push({ text: db.DataBaseAlias, value: db.DataBaseName })
        })
        // Si hay bases de datos configuradas para este usuario
        if (response.data.user_profile.databases.length > 0) {
          vm.selected = response.data.user_profile.databases[0].DataBaseName
        }
      }, function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="css" scoped>
img {
  display: block;
  margin: auto;
  width: 350px;
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
</style>
