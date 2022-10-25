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
          SAGAZ es un proyecto que busca desarrollar un prototipo de sistema de
          alerta para reducir el impacto de las inundaciones relacionadas con
          glaciares. Estas inundaciones se conocen como GLOFs, acrónimo adoptado
          del inglés “Glacial Lake Outburst Flood”, que se puede traducir como
          Inundaciones por Vaciamiento de Lagos Glaciares.
        </p>
      </div>
      <div class="scroll-call-to-action" @click="scrollNext">
        <p class="smaller-p">Aprende qué es un GLOF</p>
        <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
      </div>
    </div>

    <div id="about-intro-text" class="about-section" ref="second">
      <p class="about-second-text">
        SAGAZ es un proyecto financiado por FONDEF IDeA I+D concurso 2021
        (código ID21I10094). Es también un proyecto conjunto entre la
        Universidad de Aysén, Universidad de Chile, Universidad de la Frontera,
        el Centro de Investigación de Ecosistemas de la Patagonia (CIEP), la
        Universidad de Calgary (Canadá) y liderado por la Universidad de
        Magallanes. Además cuenta con el apoyo de CONAF Magallanes, la Dirección
        General de Aguas (DGA) región de Aysén, Naviera y Turismo Skorpios y
        Ecoturismo Patagonia Exploradores.
      </p>
      <div class="scroll-call-to-action" @click="scrollNext">
        <p class="smaller-p">Sigue Avanzando</p>
        <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
      </div>
    </div>

    <div
      id="about-diagram1"
      class="about-section about-big-section"
      ref="third"
    >
      <img src="@/assets/dibujo1.png" alt="" class="drawing" />
      <div class="about-subsection about-sub-visible" ref="thirdA">
        <h3>¿Qué son los lagos glaciares y que riesgo representan?</h3>
        <div class="scroll-call-to-action" @click="scrollNext">
          <p class="smaller-p">Sigue Avanzando</p>
          <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
        </div>
      </div>
      <div class="about-subsection" ref="thirdB">
        <p class="supporting-text">
          Un glaciar estable presenta pocos riesgos. Sin embargo
          <b>si el glaciar avanza o retrocede estos riesgos aumentan.</b>
        </p>
        <div class="scroll-call-to-action" @click="scrollNext">
          <p class="smaller-p">Sigue Avanzando</p>
          <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
        </div>
      </div>
    </div>

    <div
      id="about-diagram2"
      class="about-section about-big-section"
      ref="fourth"
    >
      <img src="@/assets/dibujo2.png" alt="" class="drawing" />
      <div class="scroll-call-to-action" @click="scrollNext">
        <p class="smaller-p">Sigue Avanzando</p>
        <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
      </div>
      <div class="about-subsection about-sub-visible" ref="fourthA">
        <p class="supporting-text">
          Al retroceder un glaciar, suelen formarse lagos “periglaciares” en su
          margen y en las quebradas y valles anexos
        </p>
        <div class="scroll-call-to-action" @click="scrollNext">
          <p class="smaller-p">Sigue Avanzando</p>
          <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
        </div>
      </div>
      <div class="about-subsection" ref="fourthB">
        <p class="supporting-text">
          Cuando el nivel del agua es suficientemente alto,
          <b>estos lagos pueden vaciarse abruptamente</b>
          produciendo grandes inundaciones. Estos fenómenos pueden repetirse
          todos los años o incluso varias veces al año.
        </p>
        <img src="@/assets/dibujo2-helper.png" alt="" class="helper-img" />
        <div class="scroll-call-to-action" @click="scrollNext">
          <p class="smaller-p">Sigue Avanzando</p>
          <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
        </div>
      </div>
      <div class="about-subsection" ref="fourthC">
        <p class="supporting-text">
          El retroceso de un glaciar también suele resultar en la formación de
          un lago "proglaciar" en su frente, el cual es represado por una
          acumulación de sedimentos y rocas poco consolidadas que el mismo
          glaciar acumuló durante un periodo de estabilidad en el pasado.
        </p>
        <img src="@/assets/dibujo2-helper2.png" alt="" class="helper-img" />
        <div class="scroll-call-to-action" @click="scrollNext">
          <p class="smaller-p">Sigue Avanzando</p>
          <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
        </div>
      </div>
      <div class="about-subsection" ref="fourthD">
        <p class="supporting-text">
          Cuando un nivel alto del lago se combina con un gatillante como un
          derrumbe o una gran lluvia, esta presa puede ser erosionada de manera
          catastrófica, <b>generando un vaciamiento abrupto</b> y produciendo
          grandes inundaciones.
        </p>
        <img
          src="@/assets/dibujo2-helper2.png"
          alt=""
          class="helper-img no-top"
        />
        <div class="scroll-call-to-action" @click="scrollNext">
          <p class="smaller-p">Sigue Avanzando</p>
          <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
        </div>
      </div>
    </div>

    <div
      id="about-diagram3"
      class="about-section about-big-section"
      ref="fifth"
    >
      <img src="@/assets/dibujo3.png" alt="" class="drawing" />
      <div class="scroll-call-to-action" @click="scrollNext">
        <p class="smaller-p">Sigue Avanzando</p>
        <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
      </div>
      <div class="about-subsection about-sub-visible" ref="fifthA">
        <p class="supporting-text smaller-support">
          Al retroceder, los glaciares también se fragmentan en múltiples
          glaciares menores. Algunos de ellos se transforman en
          <b>glaciares colgantes que pueden liberar avalanchas de hielo</b>, que
          al caer sobre un lago pueden generar inundaciones o gatillar un
          proceso de erosión catastrófica de la morrena frontal. Estas
          avalanchas de hielo también pueden producir destrucción directa sobre
          caminos o puentes.
        </p>
        <img src="@/assets/dibujo3-helper.png" alt="" class="helper-img" />
        <div class="scroll-call-to-action" @click="scrollNext">
          <p class="smaller-p">Sigue Avanzando</p>
          <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
        </div>
      </div>
    </div>

    <div
      id="about-diagram4"
      class="about-section about-big-section"
      ref="sixth"
    >
      <img src="@/assets/dibujo4.png" alt="" class="drawing" />
      <div class="scroll-call-to-action" @click="scrollNext">
        <p class="smaller-p">Sigue Avanzando</p>
        <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
      </div>
      <div class="about-subsection about-sub-visible" ref="sixthA">
        <p class="supporting-text smaller-support">
          El retroceso del glaciar también expone escarpadas laderas montañosas
          que
          <b
            >tras perder el soporte proporcionado por el hielo se vuelven
            inestables</b
          >
          y propensas a derrumbes. Dichos derrumbes también pueden generar
          inundaciones al caer sobre un lago, gatillando el proceso de erosión
          catastrófica de la morrena frontal o producir destrucción directa.
        </p>
        <img src="@/assets/dibujo4-helper.png" alt="" class="helper-img" />
        <div class="scroll-call-to-action" @click="scrollNext">
          <p class="smaller-p">Sigue Avanzando</p>
          <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
        </div>
      </div>
    </div>

    <div
      id="about-diagram5"
      class="about-section about-big-section"
      ref="seventh"
    >
      <img src="@/assets/dibujo5.png" alt="" class="drawing" />
      <div class="scroll-call-to-action" @click="scrollNext">
        <p class="smaller-p">Sigue Avanzando</p>
        <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
      </div>
      <div class="about-subsection about-sub-visible" ref="seventhA">
        <p class="supporting-text">
          Incluso mucho después de la desaparición completa de los glaciares en
          una cuenca, los lagos contenidos por morrenas pueden aún ser
          inestables y presentan un riesgo de derrumbe considerable.
        </p>
        <div class="scroll-call-to-action" @click="scrollNext">
          <p class="smaller-p">Sigue Avanzando</p>
          <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
        </div>
      </div>
    </div>

    <div
      id="about-diagram6"
      class="about-section about-big-section"
      ref="eigth"
    >
      <img src="@/assets/dibujo6.png" alt="" class="drawing" />
      <div class="scroll-call-to-action" @click="scrollNext">
        <p class="smaller-p">Sigue Avanzando</p>
        <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
      </div>
      <div class="about-subsection about-sub-visible" ref="eigthA">
        <p class="supporting-text">
          Las abruptas laderas de un valle glaciar son especialmente
          <b
            >susceptibles a derrumbers incluso décadas después de la
            desaparición de los glaciares y sus lagos asociados.</b
          >
          Por lo tanto, conocer la historia glaciar de una zona es fundamental
          para determinar el riesgo de derrumbes.
        </p>
        <div class="scroll-call-to-action" @click="scrollNext">
          <p class="smaller-p">Sigue Avanzando</p>
          <img src="@/assets/scroll-down.png" class="scroll-down-img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const first = ref(null);
const second = ref(null);
const third = ref(null);
const fourth = ref(null);
const fifth = ref(null);
const sixth = ref(null);
const seventh = ref(null);
const eigth = ref(null);

const thirdA = ref(null);
const thirdB = ref(null);

const fourthA = ref(null);
const fourthB = ref(null);
const fourthC = ref(null);
const fourthD = ref(null);

const fifthA = ref(null);

const sixthA = ref(null);

const seventhA = ref(null);

const eigthA = ref(null);

const scrollNext = () => {
  console.log("wenazaas");
  const currentPos = window.scrollY;
  const windowHeight = window.innerHeight;
  const section = Math.floor(currentPos / (windowHeight * 2));
  console.log(windowHeight * 2 * (section + 1));
  window.scrollTo({
    top: windowHeight * 2 * (section + 1),
    behavior: "smooth",
  });
};

onMounted(() => {
  document.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const sections = [
    { element: first.value, position: 0, sectionSize: 1 },
    { element: second.value, position: 1, sectionSize: 1 },
    { element: third.value, position: 2, sectionSize: 2 },
    { element: fourth.value, position: 4, sectionSize: 4 },
    { element: fifth.value, position: 8, sectionSize: 1 },
    { element: sixth.value, position: 9, sectionSize: 1 },
    { element: seventh.value, position: 10, sectionSize: 1 },
    { element: eigth.value, position: 11, sectionSize: 1 },
  ];
  const subsections = [
    { element: thirdA.value, position: 2, sectionSize: 1 },
    { element: thirdB.value, position: 3, sectionSize: 1 },
    { element: fourthA.value, position: 4, sectionSize: 1 },
    { element: fourthB.value, position: 5, sectionSize: 1 },
    { element: fourthC.value, position: 6, sectionSize: 1 },
    { element: fourthD.value, position: 7, sectionSize: 1 },
    { element: fifthA.value, position: 8, sectionSize: 1 },
    { element: sixthA.value, position: 9, sectionSize: 1 },
    { element: seventhA.value, position: 10, sectionSize: 1 },
    { element: eigthA.value, position: 11, sectionSize: 1 },
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
};
</script>
<style lang="scss" scoped>
.about-container {
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  height: 5000vh;
  overflow: hidden;
  .background-container {
    //position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 200vh;
    background-image: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.92) 20%,
      rgba(0, 180, 215, 0.92) 80%,
      rgba(7, 7, 7, 0.9450980392) 99%
    );
    z-index: -1;
  }
  #about-cover {
    gap: 0px;
    .about-cover-text {
      width: 80%;
      max-width: 800px;
      text-align: center;
      font-size: 18px;
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
      max-width: 800px;
      text-align: center;
      font-size: 18px;
    }
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
  }
  .no-top {
    top: 60% !important;
  }
  .about-section-visible {
    opacity: 1;
    left: 0;
  }
  .about-big-section {
    .drawing {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-height: 45vh;
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
        margin: 100px auto auto auto;
        font-size: 2em;
        width: 600px;
        max-width: 80%;
      }
      .supporting-text {
        margin: 160px auto auto auto;
        font-size: 1.25em;
        width: 700px;
        max-width: 80%;
      }
      .smaller-support {
        font-size: 1em !important;
      }
      .helper-img {
        position: absolute;
        top: -10%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-height: 45vh;
        transition: opacity 1s ease-in-out;
      }
    }
    .about-sub-visible {
      opacity: 1;
      .helper-img {
        top: 60%;
        transition: all 1s ease-in-out;
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .about-container {
    .about-section {
      width: 100%;
      p {
        width: 100%;
        font-size: 15px;
      }
    }
    .about-section-visible {
      .drawing {
        height: 300px !important;
      }
    }
    #about-diagram1 {
      h3 {
        font-size: 1.2em;
      }
    }
  }
  .about-container {
    .about-big-section {
      .about-subsection {
        .supporting-text {
          margin: 90px auto auto auto;
          font-size: 1em;
        }
      }
    }
  }
}
</style>
