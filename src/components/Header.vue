<template>
  <div class="flex justify-between pb-3 border-b border-gray-300">
    <h1 class="text-2xl font-bold">Todo Lists 📃</h1>
    <div
      class="cursor-pointer rounded-md flex p-1 justify-center items-center border border-gray-300"
    >
      <VerticalDots class="h-6 w-6 text-gray-500 hover:text-gray-800" />
    </div>
  </div>
</template>

<script>
import VerticalDots from "@/components/Icons/VerticalDots";

export default {
  name: "Header",
  components: {
    VerticalDots,
  },
};
</script>
