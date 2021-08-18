<template>
  <div class="px-4 py-2 flex cursor-pointer font-medium text-sm">
    <div class="flex justify-between w-full items-center">
      <Checkbox :id="item.id" :checked="item.done">
        <span>{{ item.title }}</span>
      </Checkbox>
      <div>
        <Dropdown :isShowMenu="isShowMenu" @clickOutside="isShowMenu = false">
          <template #activator>
            <div @click="isShowMenu = true">
              <VerticalDots class="h-5 w-5 text-gray-500 hover:text-gray-800" />
            </div>
          </template>
          <template #dropdown-item>
            <DropdownList>
              <Pencil class="w-4 h-4 text-gray-600" />
              <span class="ml-2">Edit</span>
            </DropdownList>
            <DropdownList
              class="text-red-600 hover:text-red-700 hover:bg-red-100"
            >
              <Trash class="w-4 h-4 text-red-600" />
              <span class="ml-2">Delete</span>
            </DropdownList>
          </template>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox";
import Dropdown from "@/components/Dropdown/Dropdown";
import DropdownList from "@/components/Dropdown/DropdownList";

import VerticalDots from "@/components/Icons/VerticalDots";
import Trash from "@/components/Icons/Trash";
import Pencil from "@/components/Icons/Pencil";

import { ref } from "vue";

export default {
  name: "List",
  components: {
    Checkbox,
    VerticalDots,
    Dropdown,
    DropdownList,
    Pencil,
    Trash,
  },
  props: ["item"],
  setup() {
    const isShowMenu = ref(false);

    return { isShowMenu };
  },
};
</script>
