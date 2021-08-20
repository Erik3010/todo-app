<template>
  <slot name="activator" :open-modal="openModal" />
  <teleport to="#modal">
    <transition name="modal-overlay-animation">
      <div
        v-show="isOpenModal"
        class="fixed overflow-y-auto inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
      >
        <transition name="modal-animation">
          <div
            v-show="isOpenModal"
            class="bg-white sm:rounded-md w-full mx-auto shadow-xl border border-gray-300 p-6 text-black sm:w-full sm:max-w-xl"
          >
            <div class="modal-header">
              <h3 class="text-xl leading-6 font-medium text-gray-900">
                Add Todo
              </h3>
              <p class="text-sm text-gray-500 mt-1">Create your Todo List</p>
            </div>
            <div class="border-t border-gray-300 my-5 py-4">
              <form action="">
                <BaseInputText
                  id="title"
                  label="Title"
                  placeholder="Add title here..."
                />
                <BaseTextarea
                  id="description"
                  label="Description"
                  placeholder="Add description here..."
                  class="mt-5"
                />
              </form>
            </div>
            <slot name="footer" :close-modal="closeModal" />
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { ref } from "vue";

import BaseInputText from "@/components/atoms/BaseInputText";
import BaseTextarea from "@/components/atoms/BaseTextarea";

export default {
  name: "BaseList",
  components: {
    BaseInputText,
    BaseTextarea,
  },
  setup() {
    const isOpenModal = ref(false);

    const openModal = () => (isOpenModal.value = true);
    const closeModal = () => (isOpenModal.value = false);

    return { isOpenModal, openModal, closeModal };
  },
};
</script>

<style scoped>
.modal-overlay-animation-enter-active,
.modal-overlay-animation-leave-active {
  transition: opacity 0.2s;
}

.modal-overlay-animation-enter-from,
.modal-overlay-animation-leave-to {
  opacity: 0;
}

.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: all 0.3s;
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  transform: scale(0.8);
}
</style>
