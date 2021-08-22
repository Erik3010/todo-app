<template>
  <BaseHeader />
  <BaseModal v-model="isOpenModal">
    <template #activator>
      <div
        @click="isOpenModal = true"
        class="mt-10 ml-2 rounded-md flex items-center cursor-pointer space-x-2 hover:bg-gray-100 p-3"
      >
        <Plus class="h-5 w-5 text-blue-500" />
        <span class="text-gray-500 text-sm">Add Todo</span>
      </div>
    </template>
    <template #header>
      <h3 class="text-xl leading-6 font-medium text-gray-900">
        {{ todoId ? "Edit" : "Add" }} Todo
      </h3>
      <p class="text-sm text-gray-500 mt-1">
        {{ todoId ? "Update" : "Create" }} your Todo List
      </p>
    </template>
    <template #content>
      <form @submit.prevent="submitTodo">
        <BaseInputText
          ref="title"
          id="title"
          label="Title"
          placeholder="Add title here..."
          v-model="todo.title"
        />
        <BaseTextarea
          id="description"
          label="Description"
          placeholder="Add description here..."
          class="mt-5"
          v-model="todo.description"
        />
      </form>
    </template>
    <template #footer>
      <BaseButton variant="primary" @click="submitTodo">
        {{ todoId ? "Edit" : "Add" }} Todo
      </BaseButton>
      <BaseButton
        class="sm:ml-3 mt-3 sm:mt-0"
        variant="secondary"
        @click="closeModal"
      >
        Cancel
      </BaseButton>
    </template>
  </BaseModal>
  <div class="mt-2 flex-1 flex flex-col">
    <transition name="todos-fade">
      <div class="divide-y divide-gray-300" v-if="todos.length > 0">
        <transition-group name="todo-item">
          <BaseItem
            :item="todo"
            v-for="todo in todos"
            :key="todo.id"
            @edit-todo="editTodo"
          />
        </transition-group>
      </div>
      <div
        v-else
        class="flex flex-col justify-center items-center text-center flex-1"
      >
        <h3 class="font-bold text-xl text-gray-900 mb-1">
          You've nothing to do now 😓
        </h3>
        <p class="text-sm text-gray-500">
          Create some todo using
          <span class="text-blue-600 font-medium underline">Add Todo</span>
          button at the top
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import { reactive, ref, watch, nextTick } from "vue";

import Plus from "@/components/icons/Plus";

import BaseInputText from "@/components/atoms/BaseInputText";
import BaseTextarea from "@/components/atoms/BaseTextarea";
import BaseButton from "@/components/atoms/BaseButton";
import BaseModal from "@/components/molecules/BaseModal";
import BaseItem from "@/components/molecules/BaseItem";
import BaseHeader from "@/components/organisms/BaseHeader";

import useTodo from "@/store/useTodo";

export default {
  components: {
    BaseButton,
    BaseHeader,
    BaseItem,
    BaseModal,
    BaseInputText,
    BaseTextarea,
    Plus,
  },
  setup() {
    const { getTodos, createTodo, getTodo, updateTodo } = useTodo();

    const isOpenModal = ref(false);

    const title = ref(null);

    const todoId = ref(null);

    const todo = reactive({
      title: null,
      description: null,
      done: false,
    });

    watch(isOpenModal, async (value) => {
      if (value) {
        await nextTick();
        title.value.$el.querySelector("input#title").focus();
      }
    });

    const submitTodo = () => {
      if (!todo.title || todo.title === "") return;

      if (todoId.value) {
        updateTodo(todoId.value, todo);
      } else {
        createTodo(todo);
      }
      closeModal();
    };

    const editTodo = (id) => {
      todoId.value = id;

      isOpenModal.value = true;

      const { title, description, done } = getTodo(id).value;

      todo.title = title;
      todo.description = description;
      todo.done = done;
    };

    const closeModal = () => {
      isOpenModal.value = false;
      todoId.value = null;
      clearInput();
    };

    const clearInput = () => {
      todo.title = null;
      todo.description = null;
      todo.done = false;
    };
    return {
      todos: getTodos(),
      todo,
      submitTodo,
      isOpenModal,
      closeModal,
      editTodo,
      todoId,
      title,
    };
  },
};
</script>

<style scoped>
.todo-item-enter-from,
.todo-item-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.todo-item-leave-active {
  position: absolute;
}

.todos-fade-enter-active,
.todos-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0, 1);
}

.todos-fade-enter-from,
.todos-fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>
