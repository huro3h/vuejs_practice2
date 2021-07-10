<template>
  <div id="root">
    <h2 class="header">Root Component</h2>
    <p>root..</p>
    <foo/>
    <bar/>
  </div>
</template>

<script>
import Foo from './foo'
import Bar from './bar'

export default {
  components: {
    Foo,
    Bar
  }
}
</script>

<style>
#root {
  border: solid 10px orangered;
  margin: 10px;
  padding: 8px;
}
.header { font-size: 200%; }
</style>
