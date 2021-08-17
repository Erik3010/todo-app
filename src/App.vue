<template>
  <div class="min-h-screen bg-gray-50">
    <div class="w-3/6 m-auto pt-14">
      <Header />
      <div class="mt-12">
        <List />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import List from "@/components/List";

export default {
  components: {
    Header,
    List,
  },
};
</script>
