<template v-if="visibility">
  <div class="scroll-call-to-action" @click="scrollNext">
    <p class="smaller-p">{{ text }}</p>
    <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
  </div>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  visibility: {
    type: Boolean,
    default: true,
  },
});

const scrollNext = () => {
  const currentPos = window.scrollY;
  const windowHeight = window.innerHeight;
  const section = Math.floor(currentPos / (windowHeight * 2));
  window.scrollTo({
    top: windowHeight * 2 * (section + 1),
    behavior: "smooth",
  });
};
</script>
<style lang="scss" scoped>
.scroll-call-to-action {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  z-index: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  .smaller-p {
    font-size: 14px;
    margin: auto auto 10px;
  }
  img {
    width: 30px;
    height: 30px;
    margin: auto;
  }
  @keyframes jump {
    0% {
      transform: translate3d(0, 0, 0);
    }
    40% {
      transform: translate3d(0, 30%, 0);
    }
    100% {
      transform: translate3d(0, 100%, 0);
    }
  }
  .scroll-down-img {
    transform-origin: 50% 50%;
    animation: jump 1s linear alternate infinite;
  }
}
</style>
