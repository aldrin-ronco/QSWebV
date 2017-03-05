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
                 class="form-control">
        </div>
        <div class="form-group">
          <label for="pwd">Contraseña</label>
          <input type="password"
                 id="pwd"
                 v-model:value="pwd"
                 placeholder="Contraseña"
                 class="form-control">
        </div>
        <input type="button" name="comprobar" value="Comprobar" class="btn btn-primary" :disabled="!shouldEnableComprobar">
      </div>
    </form>
    <pre>{{ $data | JSON }}</pre>
    <pre>{{ host | JSON }}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      userName: '',
      pwd: ''
    }
  },
  computed: {
    ...mapGetters([
      'host'
    ]),
    shouldEnableComprobar () {
      if (this.userName.trim() && this.pwd.trim()) {
        return true
      } else {
        return false
      }
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
