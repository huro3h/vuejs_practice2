// mixin
const Sharable = {
  data: function () {
    return {
      _isProcessing: false
    }
  },
  created: function () {
    console.log('Sharable created');
  },
  methods: {
    share: function () {
      if (this._isProcessing) {
        return
      }
      if (!window.confirm('share???')) {
        return
      }
      this._isProcessing = true
      
      // API's mock..
      setTimeout(() => {
        console.log('shared...');
      }, 200)
    }
  }
}

const IconShareButton = {
  mixins: [Sharable],
  created: function () {
    console.log('IconShareButtons created');
  },
  template: `
    <button @click="share"><i class="fas fa-share-square"></i></button>
  `
}

const TextShareButton = {
  mixins: [Sharable],
  created: function () {
    console.log('TextShareButton created');
  },
  template: `
    <button @click="share">{{ buttonLabel }}</button>
  `,
  data: function () {
    return {
      buttonLabel: 'share suru-',
      _isProcessing: false
    }
  }
}

new Vue({
  el: '#app',
  components: {
    IconShareButton,
    TextShareButton
  }
})
