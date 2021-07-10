<template>
  <p :class="$style.message">hello!</p>
</template>

<script>
export default {
  name: "index",
  created () {
    console.log('css modules: $style', this.$style);
  }
}
</script>

<style module>
.message { color: aqua; }
</style>
