// global mixin
Vue.mixin({
  data: function () {
    return {
      loggedInUser: null
    }
  },
  created: function () {
    const auth = this.$options.auth
    this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
    if (auth && !this.loggedInUser) {
      console.log('must login..');
    }
  }
})

const LoginRequiredPage = {
  auth: true,
  template: `
    <div>
      <p v-if="!loggedInUser">
        ログインが必要です
      </p>
      <p v-else>
        {{ loggedInUser.name }}さんでログイン中...
      </p>
    </div>
  `
}

new Vue({
  el: '#app',
  components: {
    LoginRequiredPage
  }
})
