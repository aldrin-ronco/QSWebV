<template>
  <div>
    <img src="static/img/logo.png" alt="">
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
        <div class="form-group">
          <select v-model="selected">
            <option v-for="db in databases" v-bind:value="db.value">
                {{ bd }}
            </option>
          </select>
        </div>
        <input type="button" name="comprobar" value="Comprobar" class="btn btn-primary" :disabled="!shouldEnableComprobar" @click="logginCheck">
      </div>
    </form>
    <pre>{{ $data }}</pre>
    <pre>{{ host }}</pre>
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
    }
  },
  methods: {
    logginCheck () {
      let vm = this
      console.log('vm', vm)
      this.axios_instance.get(`${appConfig.baseUrlWebApi}/login-check`)
      .then(function (response) {
        console.log('response', response)
        response.user_profile.databases.forEach(function (db) {
          vm.databases.push({ text: db.DataBaseName, value: db.DataBaseName })
        })
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
  width: 400px;
  margin-top: 0px;
}
h2 {
  margin-top: 10px;
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
