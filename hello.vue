<template>
  <p class="message">message: {{msg}}</p>
</template>

<script>
  export default {
    data () {
      return { msg: 'konnnitiwa.' }
    }
  }
</script>

<style scoped>
  .message { color: blue; }
</style>
