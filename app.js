// const MyButton = {
//   template: `
//     <button>
//       <slot>OKです</slot>
//     </button>
//   `
// }
//
// new Vue({
//   el: app,
//   components: {
//     MyButton: MyButton
//   }
// })

// named slot
const MyPage = {
  template: `
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div> 
  `
} 

new Vue({
  el: app,
  components: {
    MyPage: MyPage
  }
})