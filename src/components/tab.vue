<template lang="html">
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    name: { type: String, required: true },
    title: { type: String, required: true }
  }
}
</script>

<style lang="css">
</style>
