import { ref } from "vue";

const mapMode = ref(1);

export function useMode() {
  function toggleMapMode() {
    mapMode.value = mapMode.value === 1 ? 0 : 1;
  }
  return {
    mapMode,
    toggleMapMode,
  };
}
