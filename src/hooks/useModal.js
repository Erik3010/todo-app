import { ref } from "vue";

export default function useModal() {
  const isOpenModal = ref(false);

  const openModal = () => (isOpenModal.value = true);
  const closeModal = () => (isOpenModal.value = false);

  return {
    isOpenModal,
    openModal,
    closeModal,
  };
}
