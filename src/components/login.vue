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
        <input type="button" name="comprobar" value="Comprobar" class="btn btn-primary" :disabled="!shouldEnableComprobar" @click="sendHeaders">
      </div>
    </form>
    <pre>{{ $data }}</pre>
    <pre>{{ host }}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import axios from 'axios'
export default {
  data () {
    return {
      userName: '',
      pwd: ''
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
    sendHeaders () {
      // let instance = axios.create({
      //   baseUrl: 'http://localhost:3000/',
      //   timeout: 2000,
      //   headers: {
      //     'user': 'sa',
      //     'pwd': 'Qu4l1ty',
      //     'database': 'BD_SEGURIDAD',
      //     'server_ip': '190.1.149.122',
      //     'port': 1433,
      //     'models': 'config',
      //     'host_id': 45
      //   }
      // })
      console.log(this.axios_instance)
      this.axios_instance.get('https://qsweb-api.herokuapp.com/cost_centers')
      .then(function (response) {
        console.log(response)
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
