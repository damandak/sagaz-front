<template>
  <div class="main-content team-container">
    <div class="institutions-section">
      <div class="institution-wrapper" id="anid">
        <h3>{{ $t("team.financed") }}</h3>
        <img
          src="../assets/financia-anid.png"
          alt=""
          class="mgmt-institution-img"
        />
      </div>
      <div
        v-for="institution in managing_institutions"
        :key="institution.id"
        class="institution-wrapper"
        :class="institution.orientation"
        :id="institution.id_name"
      >
        <h3 v-if="institution.first">{{ $t("team.inchargeinstitutions") }}</h3>
        <img
          v-bind:src="require('../assets/' + institution.image)"
          alt=""
          class="mgmt-institution-img"
        />
      </div>
      <div
        v-for="institution in associated_institutions"
        :key="institution.id"
        class="institution-wrapper inst-wrap-small"
        :id="institution.id_name"
      >
        <h3 v-if="institution.first">
          {{ $t("team.associatedinstitutions") }}
        </h3>
        <img
          v-bind:src="require('../assets/' + institution.image)"
          alt=""
          class="asso-institution-img"
        />
      </div>
    </div>

    <h1 class="team-title">{{ $t("team.team") }}</h1>

    <div class="team-section team-section-normal">
      <div
        v-for="member in first_members"
        :key="member.id"
        class="team-member-wrapper"
      >
        <div class="team-member">
          <img
            v-bind:src="require('../assets/' + member.image)"
            class="team-member-img"
          />
          <div class="team-member-img-cover"></div>
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p>{{ member.position.value }}</p>
          </div>
          <div class="member-detail">
            <p v-if="member.affiliation != ''">
              {{ $t("team.affiliation") }}: {{ member.affiliation }}
            </p>
            <p>{{ member.description.value }}</p>
          </div>
        </div>
        <div class="member-icons">
          <a v-if="member.linkedin" :href="member.linkedin" target="_blank">
            <Icon :icon="linkedinBoxFill" />
          </a>
          <a v-if="member.instagram" :href="member.instagram" target="_blank">
            <Icon :icon="instagramFill" />
          </a>
          <a
            v-if="member.researchgate"
            :href="member.researchgate"
            target="_blank"
          >
            <Icon :icon="researchgateSquare" />
          </a>
          <a v-if="member.github" :href="member.github" target="_blank">
            <Icon :icon="githubSquare" />
          </a>
          <a v-if="member.cv" :href="member.cv" target="_blank">
            <Icon :icon="cvSquare" />
          </a>
          <a v-if="member.external" :href="member.external" target="_blank">
            <Icon :icon="linkExternal" />
          </a>
          <a v-if="member.orcid" :href="member.orcid" target="_blank">
            <Icon :icon="orcidIcon" />
          </a>
          <a v-if="member.twitter" :href="member.twitter" target="_blank">
            <Icon :icon="twitterSquare" />
          </a>
        </div>
      </div>
    </div>

    <div class="team-section team-section-normal">
      <div
        v-for="member in members"
        :key="member.id"
        class="team-member-wrapper"
      >
        <div class="team-member">
          <img
            v-bind:src="require('../assets/' + member.image)"
            class="team-member-img"
          />
          <div class="team-member-img-cover"></div>
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p>{{ member.position.value }}</p>
          </div>
          <div class="member-detail">
            <p v-if="member.affiliation != ''">
              {{ $t("team.affiliation") }}: {{ member.affiliation }}
            </p>
            <p>{{ member.description.value }}</p>
          </div>
        </div>
        <div class="member-icons">
          <a v-if="member.linkedin" :href="member.linkedin" target="_blank">
            <Icon :icon="linkedinBoxFill" />
          </a>
          <a v-if="member.instagram" :href="member.instagram" target="_blank">
            <Icon :icon="instagramFill" />
          </a>
          <a
            v-if="member.researchgate"
            :href="member.researchgate"
            target="_blank"
          >
            <Icon :icon="researchgateSquare" />
          </a>
          <a v-if="member.github" :href="member.github" target="_blank">
            <Icon :icon="githubSquare" />
          </a>
          <a v-if="member.cv" :href="member.cv" target="_blank">
            <Icon :icon="cvSquare" />
          </a>
          <a v-if="member.external" :href="member.external" target="_blank">
            <Icon :icon="linkExternal" />
          </a>
          <a v-if="member.orcid" :href="member.orcid" target="_blank">
            <Icon :icon="orcidIcon" />
          </a>
          <a v-if="member.twitter" :href="member.twitter" target="_blank">
            <Icon :icon="twitterSquare" />
          </a>
        </div>
      </div>
    </div>

    <div class="team-section tesistas">
      <div
        v-for="member in tesistas"
        :key="member.id"
        class="team-member-wrapper"
      >
        <div class="team-member">
          <img
            v-bind:src="require('../assets/' + member.image)"
            class="team-member-img"
          />
          <div class="team-member-img-cover"></div>
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p>{{ member.position.value }}</p>
            <p v-if="member.affiliation != ''">
              {{ member.affiliation }}
            </p>
          </div>
          <div class="member-detail">
            <p>{{ member.description.value }}</p>
          </div>
        </div>
        <div class="member-icons">
          <a v-if="member.linkedin" :href="member.linkedin" target="_blank">
            <Icon :icon="linkedinBoxFill" />
          </a>
          <a v-if="member.instagram" :href="member.instagram" target="_blank">
            <Icon :icon="instagramFill" />
          </a>
          <a
            v-if="member.researchgate"
            :href="member.researchgate"
            target="_blank"
          >
            <Icon :icon="researchgateSquare" />
          </a>
          <a v-if="member.github" :href="member.github" target="_blank">
            <Icon :icon="githubSquare" />
          </a>
          <a v-if="member.cv" :href="member.cv" target="_blank">
            <Icon :icon="cvSquare" />
          </a>
          <a v-if="member.external" :href="member.external" target="_blank">
            <Icon :icon="linkExternal" />
          </a>
          <a v-if="member.orcid" :href="member.orcid" target="_blank">
            <Icon :icon="orcidIcon" />
          </a>
          <a v-if="member.twitter" :href="member.twitter" target="_blank">
            <Icon :icon="twitterSquare" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed, ref, toRef } from "vue";
import SectionTitle from "@/components/MainContainer/SectionTitle.vue";
import { Icon } from "@iconify/vue";
import linkedinBoxFill from "@iconify-icons/akar-icons/linkedin-box-fill";
import instagramFill from "@iconify-icons/akar-icons/instagram-fill";
import cvSquare from "@iconify-icons/academicons/cv-square";
import researchgateSquare from "@iconify-icons/academicons/researchgate-square";
import linkExternal from "@iconify-icons/charm/link-external";
import githubSquare from "@iconify-icons/fa/github-square";
import orcidIcon from "@iconify-icons/academicons/orcid";
import twitterSquare from "@iconify-icons/fa/twitter-square";

import i18n from "@/i18n";

var intro_text = false;

var managing_institutions = [
  {
    name: "Universidad de Magallanes",
    shortname: "UMAG",
    image: "encargada-1-logo-umag-min.png",
    link: "https://www.umag.cl/",
    first: "yes",
    orientation: "vertical",
    id_name: "UMAG",
  },
  {
    name: "Universidad de Chile",
    shortname: "uChile",
    image: "encargada-2-logo-uChile-min.png",
    link: "https://www.uchile.cl/",
    orientation: "horizontal",
    id_name: "uChile",
  },
  {
    name: "Universidad de Aysén",
    shortname: "UAysen",
    image: "encargada-3-logo-uAysen-min.png",
    link: "https://www.uaysen.cl/",
    orientation: "vertical",
    id_name: "UAysen",
  },
  {
    name: "Centro de Investigación de Ecosistemas de la Patagonia",
    shortname: "CIEP",
    image: "encargada-4-logo-ciep-min.png",
    link: "https://www.ciep.cl/",
    orientation: "horizontal",
    id_name: "CIEP",
  },
];
var associated_institutions = [
  {
    name: "Universidad de la Frontera",
    shortname: "UFRO",
    image: "asociada-1-logo-ufro-min.png",
    link: "https://www.ufro.cl/",
    first: "yes",
    id_name: "UFRO",
  },
  {
    name: "University of Calgary",
    shortname: "UCalgary",
    image: "asociada-2-logo-uCalgary-min.png",
    link: "https://www.ucalgary.ca/",
    id_name: "UCalgary",
  },
  {
    name: "Corporación Nacional Forestal",
    shortname: "CONAF",
    image: "asociada-3-logo-CONAF-min.png",
    link: "https://www.conaf.cl/",
    id_name: "CONAF",
  },
  {
    name: "Dirección General de Aguas",
    shortname: "DGA",
    image: "asociada-4-logo-DGA-min.png",
    link: "https://www.dga.cl/",
    id_name: "DGA",
  },
  {
    name: "Skorpios",
    shortname: "Skorpios",
    image: "asociada-5-logo-skorpios-min.png",
    link: "https://www.skorpios.cl/",
    id_name: "Skorpios",
  },
  {
    name: "Exploradores",
    shortname: "Exploradores",
    image: "asociada-6-logo-exploradores-min.png",
    link: "https://www.exploradores.cl/",
    id_name: "Exploradores",
  },
];

// Any time you have an array and you think each item needs a computed, you should look at making a component. That is how data and computeds get attached to each other.

// In a lot of cases, you can make a computed based on the array, and it's fine, but you should be aware that any change to the array causes a recompute of the entire computed array. With a component, only the affected rows are recomputed. A simple example is embedded here.

// If you need your computed to be writable, you won't be able to edit individual items, so you're really forced to make a component. It is pretty straightforward: just move the HTML into the template of the component, move the computed into the component (adjusting it to work on the prop value), and then – because it is operating on a prop – change the set function to use $emit rather than changing its value directly.

const first_members = computed(() => [
  {
    name: "Camilo Rada Giacaman",
    position: ref(i18n.global.t("team.director")),
    image: "rada.jpg",
    affiliation: "Universidad de Magallanes",
    description: ref(i18n.global.t("team.biographies.camilorada")),
    linkedin: "https://www.linkedin.com/in/camilo-rada-giacaman-0b1b3b1b9/",
    researchgate: "https://www.researchgate.net/profile/Camilo-Rada",
    external: "https://unchart.org/",
    orcid: "https://orcid.org/0000-0001-9865-2530",
  },
  {
    name: "Sergio Andrés Rivera",
    position: ref(i18n.global.t("team.alternatedirector")),
    image: "sergio.jpg",
    affiliation: "Universidad de Chile",
    description: ref(i18n.global.t("team.biographies.sergiorivera")),
    instagram: "https://www.instagram.com/glaciologia/",
    external: "http://www.glaciologia.cl",
  },
]);
const members = computed(() => [
  {
    name: "Alejandro Dussaillant",
    position: ref(i18n.global.t("team.researcher")),
    image: "alejandro.jpg",
    affiliation: "Universidad de Aysén",
    description: ref(i18n.global.t("team.biographies.alejandrodussaillant")),
    linkedin: "https://www.linkedin.com/in/riversandgreenfrastructure/",
    twitter: "https://twitter.com/rios_lab",
  },
  {
    name: "Íñigo Irarrázaval Bustos",
    position: ref(i18n.global.t("team.researcher")),
    image: "inigo.jpg",
    affiliation:
      "Centro de Investigación de Ecosistemas de la Patagonia (CIEP)",
    description: ref(i18n.global.t("team.biographies.inigoirarrazaval")),
    external: "https://patagoniaglacial.wordpress.com",
  },
  {
    name: "Marcelo Somos-Valenzuela",
    position: ref(i18n.global.t("team.researcher")),
    image: "marcelo.jpg",
    affiliation: "Universidad de la Frontera",
    description: ref(i18n.global.t("team.biographies.marcelosomos")),
    linkedin: "https://www.linkedin.com/in/marcelo-somos-valenzuela-487a5021",
    orcid: "https://orcid.org/0000-0001-7863-4407",
    external: "https://marcelo-somos.com/",
  },
  {
    name: "Sebastián Enrique Alfaro Gómez",
    position: ref(i18n.global.t("team.researcher")),
    image: "sebastian.jpg",
    affiliation: "Universidad de Magallanes / INACH",
    description: ref(i18n.global.t("team.biographies.sebastianalfaro")),
    linkedin: "https://www.linkedin.com/in/sebastianenriquealfarogomez/",
    researchgate: "https://www.researchgate.net/profile/Sebastian-Alfaro-4",
  },
  {
    name: "Catalina Medina Porcile",
    position: ref(i18n.global.t("team.electronicengineer")),
    image: "cata.jpg",
    affiliation: "",
    description: ref(i18n.global.t("team.biographies.catalinamedina")),
    linkedin: "https://www.linkedin.com/in/catalina-medina-porcile-9896661b7/",
  },
  {
    name: "Damir Mandakovic Pizarro",
    position: ref(i18n.global.t("team.developer")),
    image: "damir.jpg",
    affiliation: "",
    description: ref(i18n.global.t("team.biographies.damirmandakovic")),
    linkedin: "https://www.linkedin.com/in/damirmandakovic/",
    github: "https://github.com/damandak",
    external: "https://www.andinismodeescritorio.cl",
  },
  {
    name: "Francisco Javier Aguirre González",
    position: ref(i18n.global.t("team.researcher_postdoc")),
    image: "francisco.jpg",
    affiliation: "Universidad de Magallanes / The School for Field Studies",
    description: ref(i18n.global.t("team.biographies.franciscoaguirre")),
  },
  {
    name: "Natalia Martínez",
    position: ref(i18n.global.t("team.mountainguide")),
    image: "natalia.jpg",
    affiliation: "",
    description: ref(i18n.global.t("team.biographies.nataliamartinez")),
  },
  {
    name: "Gonzalo Rosenfeld",
    position: ref(i18n.global.t("team.administration")),
    image: "gonzalo.jpg",
    affiliation: "Universidad de Magallanes",
    description: ref(i18n.global.t("team.biographies.gonzalorosenfeld")),
  },
]);
const tesistas = computed(() => [
  {
    name: "Galo Andrade",
    position: ref(i18n.global.t("team.mscthesist")),
    image: "galo.jpg",
    affiliation: "Universidad de Magallanes",
    description: ref(i18n.global.t("team.biographies.galoandrade")),
  },
  {
    name: "Natalia Gallo",
    position: ref(i18n.global.t("team.phdthesist")),
    image: "nataliagallo.jpg",
    affiliation: "Universidad de Magallanes",
    description: ref(i18n.global.t("team.biographies.nataliagallo")),
  },
  {
    name: "Pamela Maldonado",
    position: ref(i18n.global.t("team.mscthesist")),
    image: "pamela.jpg",
    affiliation: "Universidad de Magallanes",
    description: ref(i18n.global.t("team.biographies.pamelamaldonado")),
  },
  {
    name: "Yerko Ortega",
    position: ref(i18n.global.t("team.geologythesist")),
    image: "yerko.jpg",
    affiliation: "Universidad Andrés Bello",
    description: ref(i18n.global.t("team.biographies.yerkoortega")),
  },
]);
</script>
<style lang="scss" scoped>
.team-container {
  background-image: linear-gradient(-45deg, #0a5867eb, #070707f1 95%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  .row {
    margin: 0 auto;
    width: 100%;
    height: auto;
    flex: 0 0 auto;
    text-align: center;
  }
  .team-title {
    margin: 0px !important;
  }
  .institutions-section {
    width: 84%;
    max-width: 1100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    padding: 100px 0 0px 0;
    flex-wrap: wrap;
    gap: 20px;
    .institution-wrapper {
      position: relative;
      width: 200px;
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      h3 {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 60px;
        margin: 0px;
        width: 250px;
        font-size: 1.1em;
      }
      .mgmt-institution-img {
        max-width: 100px;
        max-height: 100px;
        object-fit: cover;
        // -webkit-filter: drop-shadow(1px 1px 0.1px rgba(255, 255, 255, 0.2));
        // filter: drop-shadow(3px 20px 20px rgba(255, 255, 255, 0.5));
      }
      .asso-institution-img {
        max-width: 150px;
        max-height: 80px;
        object-fit: cover;
        // -webkit-filter: drop-shadow(1px 1px 30px #ffffff50);
        // filter: drop-shadow(1px 1px 30px #ffffff50);
      }
    }
    .horizontal {
      .mgmt-institution-img {
        max-width: 140px;
      }
    }
    .vertical {
      .mgmt-institution-img {
        max-height: 100px;
        max-width: 90px;
      }
    }
    .inst-wrap-small {
      width: 100px;
      height: 150px;
      h3 {
        left: 100%;
        width: 300px;
        top: 20px;
        font-size: 1.1em;
      }
    }
    #uChile {
      img {
        margin-bottom: 15px;
      }
    }
  }
  .team-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    .team-member-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 10px;
      border-radius: 20px;
      background-color: white;
      border: 5px white solid;
      .team-member {
        position: relative;
        transition: all 1s ease-in-out;
        border-radius: 25px;
        overflow: hidden;
        .team-member-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.2) brightness(0.9) contrast(1.2);
        }
        .team-member-img-cover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            30deg,
            rgb(2, 116, 139, 0.52),
            #07070700 95%
          );
        }
        .member-detail {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 4px;
          position: absolute;
          opacity: 0;
          top: 0;
          left: 17px;
          width: 90%;
          height: 100%;
          text-align: left;
          p {
            font-size: 0.75rem;
            font-weight: 400;
            margin: 0;
          }
        }
        .member-info {
          position: absolute;
          opacity: 1;
          top: 0;
          left: 17px;
          width: 90%;
          height: 94%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          flex-wrap: wrap;
          text-align: left;
          h3 {
            font-size: 1.4rem;
            font-weight: 600;
            color: #fff;
            margin: 0;
            padding-left: 20;
          }
          p {
            margin: 0;
          }
        }
        &:hover {
          background-color: rgba(0, 0, 0);
          .member-detail {
            opacity: 1;
            transition: all 1s ease-in-out;
          }
          .member-info {
            opacity: 0;
            transition: all 1s ease-in-out;
          }
          .team-member-img {
            filter: saturate(0) brightness(0.5) contrast(1.2);
            opacity: 0.3;
            transition: all 1s ease-in-out;
          }
        }
      }
      .member-icons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100%;
        gap: 8px;
        a {
          text-decoration: none;
          color: var(--primary-color-light);
          font-size: 25px;
          transition: all 0.5s ease-in-out;
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
}
.team-section-normal {
  gap: 40px 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto 20px auto;
  .team-member-wrapper {
    width: 300px;
    height: 450px;
    .team-member {
      width: 300px;
      height: 420px;
    }
  }
}
.tesistas {
  gap: 10px 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto 20px auto;
  .team-member-wrapper {
    width: 280px;
    height: 280px;
    .team-member {
      width: 280px;
      height: 310px;
      .team-member-img {
        object-position: top;
      }
    }
  }
}
@media only screen and (max-width: 1000px) {
  .team-container {
    gap: 0px;
  }
}
@media only screen and (max-width: 800px) {
  .team-container {
    .institutions-section {
      flex-direction: column;
      height: auto;
      padding-top: 60px;
      gap: 0px;
      .institution-wrapper {
        margin: 0px 0 0 0;
        justify-content: center;
        height: 120px;
      }
      .inst-wrap-small h3 {
        left: 50% !important;
        top: 0px !important;
        width: 300px !important;
      }
      #anid,
      #UMAG,
      #UFRO {
        margin: 20px 0 0 0;
        justify-content: flex-end;
      }
    }
  }
}
</style>
