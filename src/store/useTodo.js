import { reactive, readonly } from "vue";

const state = reactive({
  todos: [],
});

const getters = {
  getTodos() {
    return state.todos;
  },
  getTodo(id) {
    return computed(() => state.todos.find((todo) => todo.id === id));
  },
};

const actions = {
  createTodo(todo) {
    state.todos.push(todo);
  },
  updateTodo(id, newTodo) {
    const index = state.todos.findIndex((todo) => todo.id === id);
    state.todos.splice(index, 1, newTodo);
  },
  removeTodo(id) {
    const index = state.todos.findIndex((todo) => todo.id === id);
    state.todos.splice(index, 1);
  },
};

export default () => ({
  state: readonly(state),
  ...getters,
  ...actions,
});
