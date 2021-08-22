<template>
  <div
    class="px-4 py-2 flex cursor-pointer font-medium transition-all duration-300"
  >
    <div class="flex justify-between w-full items-center">
      <BaseCheckbox
        :id="item.id"
        :modelValue="item.done"
        @update:modelValue="changeTodoStatus"
      >
        <span :class="['text-sm', { 'line-through': item.done }]">{{
          item.title
        }}</span>
      </BaseCheckbox>
      <div>
        <BaseDropdown>
          <template #activator="{ openDropdown }">
            <div @click="openDropdown">
              <VerticalDots class="h-5 w-5 text-gray-500 hover:text-gray-800" />
            </div>
          </template>
          <template #dropdown-item>
            <BaseDropdownItem @option-click="editTodo(item.id)">
              <Pencil class="w-4 h-4 text-gray-600" />
              <span class="ml-2">Edit</span>
            </BaseDropdownItem>
            <BaseDropdownItem
              @option-click="removeTodo(item.id)"
              class="text-red-600 hover:text-red-700 hover:bg-red-100"
            >
              <Trash class="w-4 h-4 text-red-600" />
              <span class="ml-2">Delete</span>
            </BaseDropdownItem>
          </template>
        </BaseDropdown>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from "@/components/atoms/BaseCheckbox";
import BaseDropdownItem from "@/components/atoms/BaseDropdownItem";
import BaseDropdown from "@/components/molecules/BaseDropdown";

import VerticalDots from "@/components/icons/VerticalDots";
import Trash from "@/components/icons/Trash";
import Pencil from "@/components/icons/Pencil";

import useTodo from "@/store/useTodo";

export default {
  name: "BaseItem",
  components: {
    BaseCheckbox,
    VerticalDots,
    BaseDropdown,
    BaseDropdownItem,
    Pencil,
    Trash,
  },
  props: ["item"],
  setup(props, { emit }) {
    const { removeTodo, updateTodo } = useTodo();

    const changeTodoStatus = (status) => {
      updateTodo(props.item.id, { ...props.item, done: status });
    };

    const editTodo = (id) => {
      emit("edit-todo", id);
    };

    return { editTodo, removeTodo, changeTodoStatus };
  },
};
</script>
