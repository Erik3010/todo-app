<template>
  <div class="flex justify-between pb-3 border-b border-gray-300">
    <h1 class="text-2xl font-bold">Todo Lists</h1>
    <div
      class="cursor-pointer rounded-md flex p-1 justify-center items-center border border-gray-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-500 hover:text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
