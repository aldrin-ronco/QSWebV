<template lang="html">
  <tabs>
    <tab name='tab1' title='Titulo 1'>
      <h1>Contenido tab 1</h1>
    </tab>
    <tab name='tab2' title='Titulo 2'>
      <h1>Contenido tab 2</h1>
    </tab>
    <tab name='tab3' title='Titulo 3'>
      <h1>Contenido tab 3</h1>
    </tab>
  </tabs>
</template>

<script>
import tab from './tab'
import tabs from './tabs'
export default {
  components: {tabs, tab}
}
</script>

<style lang="css" scoped>
.tabs {
  margin-top: .5em;
  margin-left: -.2em;
}
</style>
