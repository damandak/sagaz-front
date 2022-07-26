<template>
  <router-link :to="to" class="navbutton" :class="{ active: isActive }">{{
    content
  }}</router-link>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "NavButton",
  props: {
    content: { type: String, required: true },
    to: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return {
      isActive,
    };
  },
};
</script>

<style>
.navbutton {
  font-weight: bold;
  background-image: linear-gradient(
    to right,
    var(--primary-color-light) 20%,
    #ffffff 50%
  );
  background-size: 500%;
  background-position: -400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-decoration: none;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 14px;

  &.router-link-exact-active {
    color: var(--primary-color-light);
  }
}
.navbutton:hover {
  color: var(--primary-color-light);
  transition: 0.6s ease-out;
  background-position: -355%;
}
.navbutton.active {
  color: var(--primary-color-light);
  transition: 0.6s ease-out;
  background-position: -355%;
}
</style>
