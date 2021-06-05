Vue.directive('fallback-image', {
  bind: function (el, binding) {
    console.log('bind', binding)
    el.addEventListener('error', function() {
      el.src = 'https://dummyimage.com/200x200/000/fff'
    })
  },
  update: function(el, binding) {
    console.log('update', binding)
  }
})

const vm = new Vue({
  el: '#app',
  data: function () {
    return {
      altText: 'logo'
    }
  }
})
