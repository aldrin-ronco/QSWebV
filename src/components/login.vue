<template>
  <div>
    <p>Login</p>
    <p>IP : {{ host.ip }} </p>
    <p>User : {{ host.user }}</p>
    <p>Pwd : {{ host.pwd }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'host'
    ])
  }
}
</script>

<style lang="css" scoped>
</style>
