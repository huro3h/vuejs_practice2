const IconShareButton = {
  template: `
    <button @click="share"><i class="fas fa-share-square"></i></button>
  `,
  data: function () {
    return {
      _isProcessing: false
    }
  },
  methods: {
    share: function () {
      if (this._isProcessing) {
        return
      }
      if (!window.confirm('share?')) {
        return
      }
      this._isProcessing = true
      
      // APIのモック
      setTimeout(() => {
        console.log('shared!!!');
        this._isProcessing = false
        console.log(this._isProcessing);
        
      }, 1500)
    }
  }
}

const TextShareButton = {
  template: `
    <button @click="share">{{ buttonLabel }}</button>
  `,
  data: function () {
    return {
      buttonLabel: 'share suru-',
      _isProcessing: false
    }
  },
  methods: {
    share: function () {
      if (this._isProcessing) {
        return
      }
      if (!window.confirm('share?')) {
        return
      }
      this._isProcessing = true
  
      // APIのモック
      setTimeout(() => {
        console.log('shared!!!');
        this._isProcessing = false
        console.log(this._isProcessing);
    
      }, 1500)
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
