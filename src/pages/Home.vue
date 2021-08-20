<template>
  <div>
    <BaseHeader />
    <BaseModal>
      <template #activator="{ openModal }">
        <div
          @click="openModal"
          class="mt-10 ml-2 rounded-md flex items-center cursor-pointer space-x-2 hover:bg-gray-100 p-3"
        >
          <Plus class="h-5 w-5 text-blue-500" />
          <span class="text-gray-500 text-sm">Add Todo</span>
        </div>
      </template>
      <template #footer="{ closeModal }">
        <div class="sm:flex sm:justify-end">
          <BaseButton type="primary">
            Add Todo
          </BaseButton>
          <BaseButton
            class="sm:ml-3 mt-3 sm:mt-0"
            type="secondary"
            @click="closeModal"
          >
            Cancel
          </BaseButton>
        </div>
      </template>
    </BaseModal>
    <div class="mt-2 divide-y divide-gray-300">
      <BaseItem :item="todo" v-for="todo in todos" :key="todo.id" />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import Plus from "@/components/icons/Plus";

import BaseButton from "@/components/atoms/BaseButton";
import BaseModal from "@/components/molecules/BaseModal";
import BaseItem from "@/components/molecules/BaseItem";
import BaseHeader from "@/components/organisms/BaseHeader";

import uuid from "@/utils/uuid";

export default {
  components: {
    BaseButton,
    BaseHeader,
    BaseItem,
    BaseModal,
    Plus,
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
