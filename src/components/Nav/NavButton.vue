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
  background-size: 540%;
  background-position: -400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-decoration: none;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 14px;
  pointer-events: auto;

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
  text-shadow: 0 0 2px black;
  border-bottom: solid 2px var(--primary-color-light);
}
</style>
