<template>
  <div class="water-level-graph">
    <h1>Nivel de agua</h1>
    <h5>metros</h5>
    <p v-for="element in water_level" :key="element.id">
      {{ element.date }}: {{ element.water_level }}
    </p>
  </div>
</template>
<script setup>
const props = defineProps({
  water_level: {
    type: Array,
    required: true,
  },
});
</script>
