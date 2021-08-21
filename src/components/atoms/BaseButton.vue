<template>
  <button :class="variant">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["variant"],
};
</script>

<style scoped>
button {
  @apply w-full sm:w-auto rounded-md border shadow-sm px-4 py-2 text-base font-medium  sm:text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600;
}
.primary {
  @apply bg-blue-600 text-white border-transparent hover:bg-blue-700;
}
.secondary {
  @apply bg-white text-gray-700 border-gray-300 hover:bg-gray-50;
}
</style>
