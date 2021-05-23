const MyButton = {
  template: `
    <button>
      <slot>OKです</slot>
    </button>
  `
}

new Vue({
  el: app,
  components: {
    MyButton: MyButton
  }
})
