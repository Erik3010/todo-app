import { reactive, computed, readonly, watch } from "vue";
import uuid from "@/utils/uuid";

const LOCAL_STORAGE_KEY = "todo_list";

const getDefaultState = () => {
  if (localStorage.getItem(LOCAL_STORAGE_KEY))
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  return { todos: [] };
};

const state = reactive(getDefaultState());

const getters = {
  getTodos() {
    return state.todos;
  },
  getTodo(id) {
    return computed(() => state.todos.find((todo) => todo.id === id));
  },
  getTodoLength() {
    return computed(() => state.todos.length);
  },
};

const actions = {
  createTodo(todo) {
    state.todos.push({ id: uuid(), ...todo });
  },
  updateTodo(id, newTodo) {
    const index = state.todos.findIndex((todo) => todo.id === id);
    state.todos.splice(index, 1, { ...newTodo, id });
  },
  removeTodo(id) {
    const index = state.todos.findIndex((todo) => todo.id === id);
    state.todos.splice(index, 1);
  },
};

watch(
  () => state,
  () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  },
  { deep: true, immediate: true }
);

export default () => ({
  state: readonly(state),
  ...getters,
  ...actions,
});
