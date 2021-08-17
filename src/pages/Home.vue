<template>
  <div>
    <Header />
    <div class="mt-10 divide-y divide-gray-300">
      <List :item="todo" v-for="todo in todos" :key="todo.id" />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import Header from "@/components/Header";
import List from "@/components/List";

import uuid from "@/utils/uuid";

export default {
  components: {
    Header,
    List,
  },
  setup() {
    const todos = reactive([
      {
        id: uuid(),
        title: "Todo 1",
      },
      {
        id: uuid(),
        title: "Todo 2",
      },
      {
        id: uuid(),
        title: "Todo 3",
      },
      {
        id: uuid(),
        title: "Todo 4",
      },
    ]);

    return { todos };
  },
};
</script>
