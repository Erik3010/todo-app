import { ref } from "vue";

export default function useDropdown() {
  const showMenu = ref(false);

  const toggleDropdown = () => (showMenu.value = !showMenu.value);
  const closeDropdown = () => (showMenu.value = false);

  return {
    showMenu,
    toggleDropdown,
    closeDropdown,
  };
}
