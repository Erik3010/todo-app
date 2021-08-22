<template>
  <span
    @click="clickHandler"
    class="cursor-pointer text-gray-600 flex items-center w-full text-left text-xs font-medium px-4 py-2 hover:text-gray-900 hover:bg-gray-100 tracking-tight"
  >
    <slot />
  </span>
</template>

<script>
import { inject } from "vue";

export default {
  name: "BaseDropdownItem",
  setup(_, { emit }) {
    const closeDrodown = inject("closeDropdown");

    const clickHandler = () => {
      closeDrodown();
      emit("option-click");
    };

    return { clickHandler };
  },
};
</script>
