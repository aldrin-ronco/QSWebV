<template>
  <div>
    <p>Loading ...</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created () {
    this.$store.commit('SET_HOST_IP', this.$route.query.ip)
    this.$store.commit('SET_HOST_USER', this.$route.query.user)
    this.$store.commit('SET_HOST_PWD', this.$route.query.pwd)
    this.$router.push('/login')
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
