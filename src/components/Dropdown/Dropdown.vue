<template>
  <div class="relative" ref="dropdown">
    <slot name="activator" />
    <div
      v-if="isShowMenu"
      class="mt-1 bg-white shadow-md border border-gray-300 rounded-lg absolute w-32 z-10 py-1"
    >
      <slot name="dropdown-item" />
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from "vue";

export default {
  name: "Dropdown",
  props: ["isShowMenu"],
  setup(_, context) {
    const dropdown = ref(null);

    const outsideClickHandler = (event) => {
      const { target } = event;

      if (!dropdown.value.contains(target)) {
        context.emit("clickOutside");
      }
    };

    onMounted(() => {
      document.addEventListener("click", outsideClickHandler);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", outsideClickHandler);
    });

    return { dropdown };
  },
};
</script>
