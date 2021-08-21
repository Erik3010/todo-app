<template>
  <div>
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
          Add Todo
        </h3>
        <p class="text-sm text-gray-500 mt-1">Create your Todo List</p>
      </template>
      <template #content>
        <form @submit.prevent="submitTodo">
          <BaseInputText
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
          Add Todo
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
    <div class="mt-2 divide-y divide-gray-300">
      <BaseItem :item="todo" v-for="todo in todos" :key="todo.id" />
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

import Plus from "@/components/icons/Plus";

import BaseInputText from "@/components/atoms/BaseInputText";
import BaseTextarea from "@/components/atoms/BaseTextarea";
import BaseButton from "@/components/atoms/BaseButton";
import BaseModal from "@/components/molecules/BaseModal";
import BaseItem from "@/components/molecules/BaseItem";
import BaseHeader from "@/components/organisms/BaseHeader";

import useTodo from "@/store/useTodo";

import uuid from "@/utils/uuid";

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
    const { getTodos, createTodo } = useTodo();

    const isOpenModal = ref(false);

    const todo = reactive({
      title: null,
      description: null,
      done: false,
    });

    const submitTodo = () => {
      createTodo({
        id: uuid(),
        ...todo,
      });
      closeModal();
    };

    const closeModal = () => {
      isOpenModal.value = false;
      clearInput();
    };

    const clearInput = () => {
      todo.title = null;
      todo.description = null;
    };

    return {
      todos: getTodos(),
      todo,
      submitTodo,
      isOpenModal,
      closeModal,
    };
  },
};
</script>
