<template>
  <div>
    <p>Loading ...</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created () {
    this.$store.commit('SET_HOST_IP', process.env.NODE_ENV === 'development' ? '190.248.137.122' : this.$route.query.ip)
    this.$store.commit('SET_HOST_USER', process.env.NODE_ENV === 'development' ? 'sa' : this.$route.query.user)
    this.$store.commit('SET_HOST_PWD', process.env.NODE_ENV === 'development' ? 'Qu4l1ty' : this.$route.query.pwd)
    this.$store.commit('SET_HOST_ID', process.env.NODE_ENV === 'development' ? 61 : this.$route.query.id)
    this.$store.commit('SET_COMPANY_LOGO', process.env.NODE_ENV === 'development' ? 'https://s3-us-west-2.amazonaws.com/qs.company.logos/logos/logo_61.png' : this.$route.query.logo)
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
