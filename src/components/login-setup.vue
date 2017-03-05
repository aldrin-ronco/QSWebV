<template>
  <div>
    <p>Login Steup</p>
    <p>IP : <small>{{ host.ip }}</small></p>
    <p>User : <small>{{ host.user }}</small> </p>
    <p>Pwd : <small>{{ host.pwd }}</small></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created () {
    this.$store.commit('SET_HOST_IP', this.$route.query.ip)
    this.$store.commit('SET_HOST_USER', this.$route.query.user)
    this.$store.commit('SET_HOST_PWD', this.$route.query.pwd)
  },
  computed: {
    ...mapGetters([
      'host'
    ])
  },
  watch: {
    '$route' () {
      this.$store.commit('SET_HOST_IP', this.$route.query.ip)
      this.$store.commit('SET_HOST_USER', this.$route.query.user)
      this.$store.commit('SET_HOST_PWD', this.$route.query.pwd)
    }
  }
}
</script>

<style lang="css" scoped>
p {
  text-align: center;
}
</style>
