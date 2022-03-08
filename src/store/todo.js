export const todoModule = {
  state: () => ({
    todos: []
  }),
  /**
   * Mutations have to be synchronous. If you
   * want to perform asynchronous operations,
   * use actions instead.
   * 
   * See: https://vuex.vuejs.org/guide/actions.html
   * 
   * To scale the app use modules.
   * 
   * See: https://vuex.vuejs.org/guide/modules.html
   */
  mutations: {
    addTodo(state, task) {
      if (task === null) return false;
      state.todos = [
        ...state.todos,
        { id: Date.now(), name: task, completed: false }
      ];
    },
    markTodo(state, task) {
      state.todos.find(t => {
        if (t.id === task.id) t.completed = !t.completed;
      });
    },
    removeTodo(state, task) {
      state.todos = state.todos.filter(t => t.id !== task.id);
    }
  }
}