<template>
  <div class="relative" ref="dropdown">
    <slot name="activator" :open-dropdown="toggleDropdown" />
    <transition name="dropdown-animation">
      <div
        v-if="showMenu"
        class="mt-1 bg-white shadow-md border border-gray-300 rounded-lg absolute w-32 z-10 py-1"
      >
        <slot name="dropdown-item" />
      </div>
    </transition>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, ref, provide } from "vue";
import useDropdown from "@/hooks/useDropdown";

export default {
  name: "Dropdown",
  setup() {
    const { showMenu, toggleDropdown, closeDropdown } = useDropdown();

    const dropdown = ref(null);

    provide("closeDropdown", closeDropdown);

    const clickAwayHandler = (event) => {
      const { target } = event;

      if (!dropdown.value.contains(target)) {
        closeDropdown();
      }
    };

    onMounted(() => {
      document.addEventListener("click", clickAwayHandler);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", clickAwayHandler);
    });

    return {
      dropdown,
      toggleDropdown,
      showMenu,
    };
  },
};
</script>

<style>
.dropdown-animation-enter-active,
.dropdown-animation-leave-active {
  transform-origin: top left;
}

.dropdown-animation-enter-active {
  transition: all 0.1s;
  @apply ease-in;
}

.dropdown-animation-leave-active {
  transition: all 0.2s;
  @apply ease-out;
}

.dropdown-animation-enter-from,
.dropdown-animation-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
