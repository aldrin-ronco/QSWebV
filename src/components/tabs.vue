<template lang="html">
  <div>
    <div class="tabs-detail">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
      tabsound: []
    }
  },
  created () {
    console.log('before', this.$children)
    this.tabsound = this.$children
    console.log('after', this.tabsound)
  }
}
</script>

<style lang="css" scoped>

</style>
