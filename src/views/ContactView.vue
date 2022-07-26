<template>
  <div class="main-content">
    <SectionTitle content="Contacto"></SectionTitle>
  </div>
</template>
<script>
import SectionTitle from "@/components/MainContainer/SectionTitle.vue";

export default {
  name: "ContactView",
  components: {
    SectionTitle,
  },
};
</script>

<style>
.main-content {
  position: absolute;
  width: 100%;
  padding-top: 60px;
  overflow-y: visible;
  overflow-x: hidden;
  height: calc(100vh - 60px);
  background-size: cover;
  background-position: center;
  margin: 0;
  text-align: center;
}
</style>
