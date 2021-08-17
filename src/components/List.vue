<template>
  <div class="rounded-md px-4 py-2 flex cursor-pointer font-medium">
    <div class="flex justify-between w-full items-center">
      <Checkbox :id="item.id">{{ item.title }}</Checkbox>
      <div>
        <VerticalDots class="h-5 w-5 text-gray-500 hover:text-gray-800" />
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox";
import VerticalDots from "@/components/Icons/VerticalDots";

export default {
  name: "List",
  components: {
    Checkbox,
    VerticalDots,
  },
  props: ["item"],
};
</script>

<style></style>
