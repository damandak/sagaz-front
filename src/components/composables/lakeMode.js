import { ref } from "vue";

const mapMode = ref(0);

export function useMode() {
  function setFalse() {
    mapMode.value = 0;
  }
  function setTrue() {
    mapMode.value = 1;
  }
  return {
    mapMode,
    setFalse,
    setTrue,
  };
}
