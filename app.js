const TodoList = {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <template v-for="todo in todos">
        <slot :todo="todo">
          <li :key="todo.id">
            {{ todo.text }}
          </li>
        </slot>
      </template>
    </ul>
  `
}

new Vue({
  el: '#app',
  data: function() {
    return {
      todos: [
        { id: 1, text: 'hoge', isCompleted: true },
        { id: 2, text: 'h', isCompleted: false },
        { id: 3, text: 'ho', isCompleted: true },
        { id: 4, text: 'hog', isCompleted: false }
      ]
    }
  },
  components: {
    TodoList: TodoList
  }
})
