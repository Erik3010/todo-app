<template>
  <div class="flex justify-between pb-3 border-b border-gray-300">
    <h1 class="text-2xl font-bold">Todo Lists 📃</h1>
    <BaseDropdown>
      <template #activator="{ openDropdown }">
        <div
          @click="openDropdown"
          class="cursor-pointer rounded-md flex p-1 justify-center items-center border border-gray-300"
        >
          <VerticalDots class="h-6 w-6 text-gray-500 hover:text-gray-800" />
        </div>
      </template>
      <template #dropdown-item>
        <BaseDropdownItem
          @option-click="bulkUpdateDone"
          class="text-green-500 hover:text-green-600 hover:bg-green-50"
        >
          <Check class="w-4 h-4 text-green-600" />
          <span class="ml-2">Mark all as done</span>
        </BaseDropdownItem>
        <BaseDropdownItem
          class="text-red-500 hover:text-red-600 hover:bg-red-50"
          @option-click="bulkDelete"
        >
          <Trash class="w-4 h-4 text-red-600" />
          <span class="ml-2">Delete All</span>
        </BaseDropdownItem>
      </template>
    </BaseDropdown>
  </div>
</template>

<script>
import BaseDropdown from "@/components/molecules/BaseDropdown";
import BaseDropdownItem from "@/components/atoms/BaseDropdownItem";

import VerticalDots from "@/components/icons/VerticalDots";
import Check from "@/components/icons/Check";
import Trash from "@/components/icons/Trash";

import useTodo from "@/store/useTodo";

export default {
  name: "BaseHeader",
  components: {
    VerticalDots,
    BaseDropdown,
    BaseDropdownItem,
    Check,
    Trash,
  },
  setup() {
    const { bulkUpdateDone, bulkDelete } = useTodo();

    return {
      bulkUpdateDone,
      bulkDelete,
    };
  },
};
</script>
