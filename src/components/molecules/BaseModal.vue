<template>
  <slot name="activator" />
  <teleport to="#modal">
    <transition name="modal-overlay-animation">
      <div
        v-show="modelValue"
        @click.self="closeModal"
        class="fixed overflow-y-auto inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
      >
        <transition name="modal-animation">
          <div
            v-show="modelValue"
            class="bg-white sm:rounded-md sm:h-auto h-full w-full mx-auto shadow-xl border border-gray-300 p-6 text-black sm:max-w-xl"
          >
            <div class="modal-header">
              <slot name="header" />
            </div>
            <div class="border-t border-gray-300 my-5 py-4">
              <slot name="content" />
            </div>
            <div class="sm:flex sm:justify-end">
              <slot name="footer" />
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: "BaseList",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(_, { emit }) {
    const closeModal = () => emit("update:modelValue", false);

    return { closeModal };
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0, 1);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  transform: scale(0.8);
}
</style>
