<template>
  <teleport to="#modal">
    <div
      class="fixed overflow-y-auto inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
    >
      <div
        class="bg-white rounded-md w-full mx-auto shadow-xl border border-gray-300 p-6 text-black sm:w-full sm:max-w-lg"
      >
        <div class="modal-header">
          <h3 class="text-xl leading-6 font-medium text-gray-900">Add Todo</h3>
          <p class="text-sm text-gray-500 mt-1">Create your Todo List</p>
        </div>
        <div class="border-t border-gray-300 my-5 py-4">
          <form action="">
            <BaseInputText />
          </form>
        </div>
        <div class="sm:flex sm:justify-end">
          <BaseButton type="primary">
            Add Todo
          </BaseButton>
          <BaseButton class="sm:ml-3" type="secondary">
            Cancel
          </BaseButton>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import BaseInputText from "@/components/atoms/BaseInputText";
import BaseButton from "@/components/atoms/BaseButton";

export default {
  name: "BaseList",
  components: {
    BaseInputText,
    BaseButton,
  },
};
</script>
