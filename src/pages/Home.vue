<template>
  <div>
    <Header />
    <div class="mt-10 divide-y divide-gray-300">
      <List :item="todo" v-for="todo in todos" :key="todo.id" />
    </div>
  </div>
  <Modal />
</template>

<script>
import { reactive } from "vue";

import Header from "@/components/Header";
import List from "@/components/List";

import Modal from "@/components/Modal";

import uuid from "@/utils/uuid";

export default {
  components: {
    Header,
    List,
    Modal,
  },
  setup() {
    const todos = reactive([
      {
        id: uuid(),
        title: "Todo 1",
        done: false,
      },
      {
        id: uuid(),
        title: "Todo 2",
        done: true,
      },
      {
        id: uuid(),
        title: "Todo 3",
        done: false,
      },
      {
        id: uuid(),
        title: "Todo 4",
        done: false,
      },
    ]);

    return { todos };
  },
};
</script>
