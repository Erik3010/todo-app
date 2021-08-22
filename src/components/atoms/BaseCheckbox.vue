<template>
  <div class="flex items-center w-full">
    <input
      type="checkbox"
      :id="id"
      class="opacity-0 absolute cursor-pointer"
      :checked="modelValue"
      @change="updateValue"
    />
    <div
      class="transition flex items-center justify-center mr-2 bg-white border-2 border-gray-300 w-4 h-4 rounded-sm cursor-pointer"
    >
      <Check class="hidden w-2 h-2 select-none text-blue-500" />
    </div>
    <label class="cursor-pointer select-none w-full" :for="id">
      <slot />
    </label>
  </div>
</template>

<script>
import Check from "@/components/icons/Check";

export default {
  name: "BaseCheckbox",
  components: {
    Check,
  },
  props: ["id", "modelValue"],
  setup(_, { emit }) {
    const updateValue = (event) =>
      emit("update:modelValue", event.target.checked);

    return { updateValue };
  },
};
</script>

<style scoped>
input[type="checkbox"]:checked + div {
  @apply border-blue-500;
}

input[type="checkbox"]:checked + div > svg {
  @apply block;
}
</style>
