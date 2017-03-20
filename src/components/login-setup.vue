<template>
  <div>
    <p>Loading ...</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created () {
    this.$store.commit('SET_SERVER_IP', this.$route.query.ip)
    this.$store.commit('SET_SERVER_USER', this.$route.query.user)
    this.$store.commit('SET_SERVER_PWD', this.$route.query.pwd)
    this.$store.commit('SET_SERVER_ID', this.$route.query.id)
    this.$store.commit('SET_COMPANY_LOGO', this.$route.query.logo)
    this.$router.push('/login') // Redirección a ruta de Login
  },
  computed: {
    ...mapGetters([
      'host'
    ])
  }
}
</script>

<style lang="css" scoped>
p {
  text-align: center;
}
</style>
