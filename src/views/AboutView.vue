<template>
  <div class="main-content about-container">
    <div class="background-container"></div>
    <div
      id="about-cover"
      class="about-section about-section-visible"
      ref="first"
    >
      <div class="about-cover-text">
        <img src="@/assets/sagaz_const.png" alt="" id="big-logo" />
        <p>
          {{ $t("about.a_section.content") }}
        </p>
      </div>
    </div>
    <template v-if="scrollerVisibility">
      <ScrollAction
        :text="$t('about.keep_going')"
        :visibility="scrollerVisibility"
      />
    </template>
    <template v-if="upScrollerVisibility">
      <UpscrollAction text="Vuelve atrás" :visibility="upScrollerVisibility" />
    </template>

    <div id="about-intro-text" class="about-section" ref="second">
      <p class="about-second-text">
        {{ $t("about.b_section.content") }}
      </p>
    </div>

    <div
      id="about-diagram1"
      class="about-section about-big-section"
      ref="third"
    >
      <div class="about-subsection about-sub-visible" ref="thirdA">
        <h3>{{ $t("about.c_section.content") }}</h3>
      </div>
    </div>

    <div
      id="about-diagram2"
      class="about-section about-big-section"
      ref="fourth"
    >
      <img src="@/assets/dibujo1-min.png" alt="" class="drawing" />
      <div class="about-subsection" ref="fourthA">
        <p class="supporting-text">
          {{ $t("about.d_section.content") }}
          <b>{{ $t("about.d_section.bold_content") }}</b>
        </p>
      </div>
    </div>

    <div
      id="about-diagram3"
      class="about-section about-big-section"
      ref="fifth"
    >
      <img src="@/assets/dibujo2-min.png" alt="" class="drawing" />
      <div class="about-subsection about-sub-visible" ref="fifthA">
        <p class="supporting-text">
          {{ $t("about.e_section.content") }}
        </p>
      </div>
      <div class="about-subsection" ref="fifthB">
        <p class="supporting-text">
          {{ $t("about.f_section.content") }}
          <b>{{ $t("about.f_section.bold_content") }}</b>
          {{ $t("about.f_section.second_content") }}
        </p>
        <img src="@/assets/dibujo2-helper.png" alt="" class="helper-img" />
      </div>
      <div class="about-subsection" ref="fifthC">
        <p class="supporting-text smaller-support">
          {{ $t("about.g_section.content") }}
        </p>
        <img src="@/assets/dibujo2-helper2.png" alt="" class="helper-img" />
      </div>
      <div class="about-subsection" ref="fifthD">
        <p class="supporting-text">
          {{ $t("about.h_section.content") }}
          <b>{{ $t("about.h_section.bold_content") }}</b>
          {{ $t("about.h_section.second_content") }}
        </p>
        <img
          src="@/assets/dibujo2-helper2.png"
          alt=""
          class="helper-img no-top"
        />
      </div>
    </div>

    <div
      id="about-diagram4"
      class="about-section about-big-section"
      ref="sixth"
    >
      <img src="@/assets/dibujo3-min.png" alt="" class="drawing" />
      <div class="about-subsection about-sub-visible" ref="sixthA">
        <p class="supporting-text smallest-support">
          {{ $t("about.i_section.content") }}
          <b>{{ $t("about.i_section.bold_content") }}</b>
          {{ $t("about.i_section.second_content") }}
        </p>
        <img src="@/assets/dibujo3-helper.png" alt="" class="helper-img" />
      </div>
    </div>

    <div
      id="about-diagram5"
      class="about-section about-big-section"
      ref="seventh"
    >
      <img src="@/assets/dibujo4-min.png" alt="" class="drawing" />
      <div class="about-subsection about-sub-visible" ref="seventhA">
        <p class="supporting-text smallest-support">
          {{ $t("about.j_section.content") }}
          <b>{{ $t("about.j_section.bold_content") }}</b>
          {{ $t("about.j_section.second_content") }}
        </p>
        <img src="@/assets/dibujo4-helper.png" alt="" class="helper-img" />
      </div>
    </div>

    <div
      id="about-diagram6"
      class="about-section about-big-section"
      ref="eighth"
    >
      <img src="@/assets/dibujo5-min.png" alt="" class="drawing" />
      <div class="about-subsection about-sub-visible" ref="eighthA">
        <p class="supporting-text">
          {{ $t("about.k_section.content") }}
        </p>
      </div>
    </div>

    <div
      id="about-diagram7"
      class="about-section about-big-section"
      ref="ninth"
    >
      <img src="@/assets/dibujo6-min.png" alt="" class="drawing" />
      <div class="about-subsection about-sub-visible" ref="ninthA">
        <p class="supporting-text smaller-support">
          {{ $t("about.l_section.content") }}
          <b>{{ $t("about.l_section.bold_content") }}</b>
          {{ $t("about.l_section.second_content") }}
        </p>
      </div>
    </div>

    <div
      id="about-diagram8"
      class="about-section about-big-section"
      ref="tenth"
    >
      <img src="@/assets/cloud_based_servers.png" alt="" class="drawing" />
      <div class="about-subsection about-sub-visible" ref="tenthA">
        <p class="supporting-text smaller-support">
          {{ $t("about.m_section.content") }}
        </p>
      </div>
    </div>

    <div
      id="about-diagram9"
      class="about-section about-big-section"
      ref="eleventh"
    >
      <img src="@/assets/dibujo8-min.png" alt="" class="drawing" />
      <div class="about-subsection about-sub-visible" ref="eleventhA">
        <p class="supporting-text smaller-support">
          {{ $t("about.n_section.content") }}
        </p>
      </div>
    </div>
    <div class="progress-bar"></div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ScrollAction from "@/components/About/ScrollAction";
import UpscrollAction from "@/components/About/UpscrollAction";

const first = ref(null);
const second = ref(null);
const third = ref(null);
const fourth = ref(null);
const fifth = ref(null);
const sixth = ref(null);
const seventh = ref(null);
const eighth = ref(null);
const ninth = ref(null);
const tenth = ref(null);
const eleventh = ref(null);
const twelveth = ref(null);

const thirdA = ref(null);
const fourthA = ref(null);

const fifthA = ref(null);
const fifthB = ref(null);
const fifthC = ref(null);
const fifthD = ref(null);

const sixthA = ref(null);

const seventhA = ref(null);

const eighthA = ref(null);

const ninthA = ref(null);

const tenthA = ref(null);

const eleventhA = ref(null);

onMounted(() => {
  document.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll);
});

let scrollerVisibility = ref(true);
let upScrollerVisibility = ref(false);

const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const sections = [
    { element: first.value, position: 0, sectionSize: 1 },
    { element: second.value, position: 1, sectionSize: 1 },
    { element: third.value, position: 2, sectionSize: 1 },
    { element: fourth.value, position: 3, sectionSize: 1 },
    { element: fifth.value, position: 4, sectionSize: 4 },
    { element: sixth.value, position: 8, sectionSize: 1 },
    { element: seventh.value, position: 9, sectionSize: 1 },
    { element: eighth.value, position: 10, sectionSize: 1 },
    { element: ninth.value, position: 11, sectionSize: 1 },
    { element: tenth.value, position: 12, sectionSize: 1 },
    { element: eleventh.value, position: 13, sectionSize: 1 },
  ];
  const subsections = [
    { element: thirdA.value, position: 2, sectionSize: 1 },
    { element: fourthA.value, position: 3, sectionSize: 1 },
    { element: fifthA.value, position: 4, sectionSize: 1 },
    { element: fifthB.value, position: 5, sectionSize: 1 },
    { element: fifthC.value, position: 6, sectionSize: 1 },
    { element: fifthD.value, position: 7, sectionSize: 1 },
    { element: sixthA.value, position: 8, sectionSize: 1 },
    { element: seventhA.value, position: 9, sectionSize: 1 },
    { element: eighthA.value, position: 10, sectionSize: 1 },
    { element: ninthA.value, position: 11, sectionSize: 1 },
    { element: tenthA.value, position: 12, sectionSize: 1 },
    { element: eleventhA.value, position: 13, sectionSize: 1 },
  ];
  sections.forEach((section) => {
    const sectionStart = windowHeight * 2 * section.position;
    const sectionEnd =
      windowHeight * 2 * (section.position + section.sectionSize);
    if (
      scrollY >= sectionStart - (windowHeight * 2) / 2 &&
      scrollY <= sectionEnd - (windowHeight * 2) / 2
    ) {
      section.element.classList.add("about-section-visible");
    } else {
      section.element.classList.remove("about-section-visible");
    }
  });
  subsections.forEach((subsection) => {
    const sectionStart = windowHeight * 2 * subsection.position;
    const sectionEnd =
      windowHeight * 2 * (subsection.position + subsection.sectionSize);
    if (
      scrollY >= sectionStart - (windowHeight * 2) / 2 &&
      scrollY <= sectionEnd - (windowHeight * 2) / 2
    ) {
      subsection.element.classList.add("about-sub-visible");
    } else {
      subsection.element.classList.remove("about-sub-visible");
    }
  });
  // when last section is visible, add class to last subsection
  if (
    scrollY + windowHeight >=
    windowHeight * 2 * subsections[subsections.length - 1].position
  ) {
    scrollerVisibility.value = false;
  } else if (scrollerVisibility.value === false) {
    scrollerVisibility.value = true;
  }
  // when first section is visible, add class to first subsection
  if (scrollY <= windowHeight * 2 * sections[1].position) {
    upScrollerVisibility.value = false;
  } else if (upScrollerVisibility.value === false) {
    upScrollerVisibility.value = true;
  }
};

window.onscroll = function () {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
};
</script>
<style lang="scss" scoped>
.about-container {
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  height: 2700vh;
  overflow: hidden;
  .background-container {
    //position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 2700vh;
    // background: linear-gradient(
    //   -0deg,
    //   rgba(0, 0, 0, 0.92) 10%,
    //   rgba(255, 255, 255, 1) 11%,
    //   rgba(0, 0, 0, 0.92) 12%,
    //   rgba(0, 180, 215, 0.9) 20%,
    //   rgba(7, 7, 7, 0.9450980392) 100%
    // );
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.92) 14.24%,
      rgba(255, 255, 255, 1) 14.29%,
      rgba(0, 0, 0, 0.92) 14.34%,
      rgba(0, 180, 215, 0.9) 21.38%,
      rgba(255, 255, 255, 1) 21.43%,
      rgba(0, 180, 215, 0.9) 21.48%,
      rgba(0, 180, 215, 1) 28.52%,
      rgba(255, 255, 255, 1) 28.57%,
      rgba(0, 180, 215, 1) 28.62%,
      rgba(0, 180, 215, 0.7) 35.66%,
      rgba(255, 255, 255, 1) 35.71%,
      rgba(0, 180, 215, 0.7) 35.76%,
      rgba(0, 180, 215, 1) 42.81%,
      rgba(255, 255, 255, 1) 42.86%,
      rgba(0, 180, 215, 1) 42.91%,
      rgba(0, 180, 215, 0.7) 49.95%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 180, 215, 0.7) 50.05%,
      rgba(0, 180, 215, 1) 57.09%,
      rgba(255, 255, 255, 1) 57.14%,
      rgba(0, 180, 215, 1) 57.19%,
      rgba(0, 180, 215, 0.7) 64.24%,
      rgba(255, 255, 255, 1) 64.29%,
      rgba(0, 180, 215, 0.7) 64.34%,
      rgba(0, 180, 215, 1) 71.38%,
      rgba(255, 255, 255, 1) 71.43%,
      rgba(0, 180, 215, 1) 71.48%,
      rgba(0, 180, 215, 0.7) 78.52%,
      rgba(255, 255, 255, 1) 78.57%,
      rgba(0, 180, 215, 0.7) 78.62%,
      rgba(0, 180, 215, 0.7) 85.66%,
      rgba(255, 255, 255, 1) 85.71%,
      rgba(0, 180, 215, 0.7) 85.76%,
      rgba(0, 180, 215, 0.7) 92.81%,
      rgba(255, 255, 255, 1) 92.86%,
      rgba(0, 180, 215, 0.7) 92.91%,
      rgba(0, 180, 215, 0.7) 99.95%
    );
    z-index: -1;
  }
  #about-cover {
    gap: 0px;
    .about-cover-text {
      width: 80%;
      max-width: 1300px;
      text-align: center;
      font-size: 1.13em;
      margin-bottom: 100px;
      p {
        margin: 30px auto auto auto;
      }
    }
    #big-logo {
      height: 20vh;
      filter: hue-rotate(180deg);
    }
  }
  .about-section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    margin: auto;
    //max-width: 1300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.8s ease-in-out;
    .about-second-text {
      width: 80%;
      max-width: 1300px;
      text-align: center;
      font-size: 1.7em;
    }
    p {
      font-size: 1.7rem;
      width: 80%;
      max-width: 1300px;
    }
  }
  .no-top {
    top: 50% !important;
  }
  .about-section-visible {
    opacity: 1;
    left: 0;
  }
  .about-big-section {
    .drawing {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translate(0%, -50%);
      max-width: 40vw;
    }
    .about-subsection {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      opacity: 0;
      transition: all 1s ease-in-out;
      h3 {
        font-size: 3em;
        width: 600px;
        max-width: 80%;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .supporting-text {
        font-size: 1.7em;
        width: 700px;
        max-width: 40vw;
        position: absolute;
        top: 40%;
        left: 5%;
        text-align: left;
        transform: translate(0%, -50%);
      }
      .helper-img {
        position: absolute;
        top: -10%;
        right: 5%;
        transform: translate(0%, -50%);
        max-width: 40vw;
        transition: opacity 1s ease-in-out;
      }
    }
    .about-sub-visible {
      opacity: 1;
      .helper-img {
        top: 50%;
        transition: all 1s ease-in-out;
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .about-container {
    .no-top {
      top: 60% !important;
    }
    .about-section {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        width: 100%;
        font-size: 15px;
      }
      .about-second-text {
        font-size: 1em;
      }
    }
    .about-section-visible {
      .drawing {
        height: 300px !important;
      }
    }
    #about-diagram1 {
      h3 {
        font-size: 2em;
        top: 45%;
      }
    }
  }
  .about-container {
    .about-big-section {
      .drawing {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-height: 45vh;
        max-width: none;
      }
      .about-subsection {
        .helper-img {
          top: -10%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-height: 45vh;
          max-width: none;
        }
        .supporting-text {
          font-size: 1em;
          max-width: 80%;
          position: absolute;
          top: 50px;
          left: 50%;
          text-align: center;
          transform: translateX(-50%);
        }
        .smaller-support {
          font-size: 0.885em !important;
        }
        .smallest-support {
          font-size: 0.8em !important;
        }
      }
      .about-sub-visible {
        .helper-img {
          top: 60%;
          transition: all 1s ease-in-out;
        }
      }
    }
  }
}

.progress-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 0;
  height: 10px;
  background-color: #4caf50;
  z-index: 9999;
  transition: width 0.2s ease-in-out;
}
</style>
