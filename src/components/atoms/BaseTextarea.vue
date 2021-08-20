<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <textarea
      type="text"
      :name="id"
      :id="id"
      :placeholder="placeholder"
      class="mt-2 shadow-sm w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none py-2 px-3 focus:ring-blue-600 focus:ring-1"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "BaseTextarea",
  props: ["id", "label", "placeholder"],
};
</script>
