<template>
  <div class="min-h-screen bg-gray-100">
    <div
      class="flex flex-col w-full md:w-3/6 m-auto pt-14 px-10 border-gray-300 border-l border-r min-h-screen bg-white shadow-md"
    >
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "@/pages/Home";

export default {
  components: {
    Home,
  },
};
</script>
