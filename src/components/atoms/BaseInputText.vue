<template>
  <div>
    <label for="title" class="block text-sm font-medium text-gray-700"
      >Title</label
    >
    <input
      type="text"
      name="title"
      id="title"
      class="mt-2 shadow-sm w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none py-2 px-3 focus:ring-blue-600 focus:ring-1"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInputText",
};
</script>
