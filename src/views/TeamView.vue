<template>
  <div class="main-content team-container">
    <div class="institutions-section">
      <div class="institution-wrapper" id="anid">
        <h3>Financiado por</h3>
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
        <h3 v-if="institution.first">Instituciones Encargadas</h3>
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
        <h3 v-if="institution.first">Instituciones Asociadas</h3>
        <img
          v-bind:src="require('../assets/' + institution.image)"
          alt=""
          class="asso-institution-img"
        />
      </div>
    </div>

    <h1 class="team-title">Equipo</h1>

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
            <p>{{ member.position }}</p>
          </div>
          <div class="member-detail">
            <p v-if="member.affiliation != ''">
              Afiliación: {{ member.affiliation }}
            </p>
            <p>{{ member.description }}</p>
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
            <p>{{ member.position }}</p>
          </div>
          <div class="member-detail">
            <p v-if="member.affiliation != ''">
              Afiliación: {{ member.affiliation }}
            </p>
            <p>{{ member.description }}</p>
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
            <p>{{ member.position }}</p>
            <p v-if="member.affiliation != ''">
              {{ member.affiliation }}
            </p>
          </div>
          <div class="member-detail">
            <p>{{ member.description }}</p>
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
var first_members = [
  {
    name: "Camilo Rada Giacaman",
    position: "Director",
    image: "rada.jpg",
    affiliation: "Universidad de Magallanes",
    description:
      "Camilo es Doctor en Geofísica de la University of British Columbia (Canadá), dedicado a la Glaciología desde hace ya más de 12 años, y es además un apasionado montañista. En la glaciología se ha especializado en procesos subglaciares, dinámica glaciar, percepción remota y desarrollo de instrumentos, mientras que en la montaña se ha abocado a la exploración, contando con 26 primeras ascensiones en Patagonia, Antártica y el Yukón. Es profesor del Magister en Ciencias Antárticas mención Glaciología de la Universidad de Magallanes, y se lo puede ver igualmente feliz escalando una montaña, programando algún nuevo algoritmo en el computador, inventado algo entretenido con cables y Arduinos, o simplemente compartiendo un mate o un asado con los amigos.",
    linkedin: "https://www.linkedin.com/in/camilo-rada-giacaman-0b1b3b1b9/",
    researchgate: "https://www.researchgate.net/profile/Camilo-Rada",
    external: "https://unchart.org/",
    orcid: "https://orcid.org/0000-0001-9865-2530",
  },
  {
    name: "Sergio Andrés Rivera",
    position: "Director Alterno",
    image: "sergio.jpg",
    affiliation: "Universidad de Chile",
    description:
      "Andrés es doctor en Geografía de la Universidad de Bristol en Inglaterra. Ha dedicado toda su carrera académica a la glaciología, estudiando el comportamiento reciente de glaciares, sus respuestas a los cambios climáticos y las interacciones glacio-volcánicas. En la actualidad concentra sus estudios en los glaciares de montaña de los Andes de Chile central, los glaciares que producen témpanos en los Campos de Hielo Patagónicos y en lagos subglaciares de Antártica. Es Profesor Titular del Departamento de Geografía de la Universidad de Chile. Ha dirigido numerosas memorias de título y ha sido financiado en forma casi ininterrumpida por ANID y otras fuentes de financiamiento. Tiene una larga lista de publicaciones en las más prestigiosas revistas científica. Te invitamos a su página web http://www.glaciologia.cl",
    instagram: "https://www.instagram.com/glaciologia/",
    external: "http://www.glaciologia.cl",
  },
];
var members = [
  {
    name: "Alejandro Dussaillant",
    position: "Investigador",
    image: "alejandro.jpg",
    affiliation: "Universidad de Aysén",
    description:
      "Alejandro es doctor en Ingeniería Civil Industrial Ambiental  Información de la Universidad de Wisconsin-Madison y actualmente es académico de Universidad de Aysén. Tiene más de  20 años de experiencia investigando procesos hidrológicos, vía monitoreo, análisis y modelación, aplicados a ríos, humedales, drenaje urbano y cuencas. Alejandro ha estudiado los ríos de la Patagonia desde 2008, incluyendo efectos hidráulicos y geomorfológicos de crecidas extremas, liderando y colaborado en proyectos internacionales sobre crecidas por vaciamientos de lagos glaciales (Glacial-Lake Outburst Floods, GLOFs) en Patagonia, crecidas por erupciones del volcán Calbuco (lahares), y transferencia tecnológica Inglaterra-Chile sobre sensores de bajo costo para monitoreo de ríos.",
    linkedin: "https://www.linkedin.com/in/riversandgreenfrastructure/",
    twitter: "https://twitter.com/rios_lab",
  },
  {
    name: "Íñigo Irarrázaval Bustos",
    position: "Investigador",
    image: "inigo.jpg",
    affiliation:
      "Centro de Investigación de Ecosistemas de la Patagonia (CIEP)",
    description:
      "Iñigo es doctor en Ciencias de la Tierra Universidad de Lausanne (Suiza). Su trabajo se ha enfocado en comprender las dinámicas asociadas a los glaciares, sus efectos en el paisaje y en la hidrología. Particularmente interesado en temas de hidrología glaciar, formación de lagos proglaciales, geomorfología en zonas pro/para/periglaciar e investigación en vaciamientos de lagunas glaciales (GLOFs). Entre sus herramientas se cuenta el análisis de imágenes satelitales, drones/UAVs, modelos hidrológicos, modelos geoestadísticos, y observaciones/datos de terreno. Actualmente es investigador en el Centro de Investigación en Ecosistemas de la Patagonia (www.ciep.cl), en Coyhaique, donde aprovecha las innumerables oportunidades para hacer actividades al aire libre en familia y con amigos.",
    external: "https://patagoniaglacial.wordpress.com",
  },
  {
    name: "Marcelo Somos-Valenzuela",
    position: "Investigador",
    image: "marcelo.jpg",
    affiliation: "Universidad de la Frontera",
    description:
      "Marcelo es doctor en  Recursos Hídricos de la Universidad de Austin Texas. Sus estudiosestán relacionados con el agua en sus diferentes formas y ambientes. Desde 2017 es académico en la Universidad de la Frontera, dictando cursos de pre y posgrado asociados al recurso hídrico. Su investigación se centra en los impactos de los cambios en la cobertura del suelo y el clima, el incremento de eventos extremos como inundaciones y sequías, y la parametrización de modelos para mejorar la predicción y adaptación al cambio global en sistemas montañosos. Marcelo a ayudado a comunidades en áreas remotas de Patagonia, Nepal y Perú a aplicar la ciencia para comprender mejor los problemas que enfrentan debido al cambio climático.",
    linkedin: "https://www.linkedin.com/in/marcelo-somos-valenzuela-487a5021",
    orcid: "https://orcid.org/0000-0001-7863-4407",
    external: "https://marcelo-somos.com/",
  },
  {
    name: "Sebastián Enrique Alfaro Gómez",
    position: "Investigador",
    image: "sebastian.jpg",
    affiliation: "Universidad de Magallanes / INACH",
    description:
      "Sebastián es un apasionado por la glaciología y el trabajo de campo. Busca desarrollar investigaciones que combinen el análisis de imágenes de satélite, la teledetección y las mediciones de campo. Es técnico en electrónica e Ingeniero Civil de Minas, con especializaciones en Minería, geología, prevención de riesgos y topografía. Durante los últimos 7 años a implementando redes de monitoreo ambiental CEAZA, CIEP, INACH y CIGA. Actualmente forma parte de la unidad de proyectos del instituto antártico chileno. Es oriundo de la cuarta región de Coquimbo, y actualmente cursa su segundo año en el Magister en Ciencias Antárticas de la Universidad de Magallanes y anhela continuar especializándose en las ciencias de la tierra.",
    linkedin: "https://www.linkedin.com/in/sebastianenriquealfarogomez/",
    researchgate: "https://www.researchgate.net/profile/Sebastian-Alfaro-4",
  },
  {
    name: "Catalina Medina Porcile",
    position: "Ingeniera, encargada de desarrollos en electrónica",
    image: "cata.jpg",
    affiliation: "",
    description:
      "Catalina es Ingeniera Civil Electrica de la Universidad de Chile, con Magister en Ingenieria Electrica de la misma universidad. Se ha especializado en instrumentacion astronomica, trabajando actualmente en el nucleo milenio TITANS donde colabora estrechamente con el proyecto ngEHT el cual fue el primer telescopio del mundo en obtener una imagen de un agujero negro. Le apasiona la naturaleza y la ciencia, por lo que ha desarrollado a lo largo de su carrera distintos dispositivos de monitoreo de variables ambientales. Ademas, aprovecha cada momento que puede para practicar el montañismo, teniendo un primer ascenso en los andes centrales.",
    linkedin: "https://www.linkedin.com/in/catalina-medina-porcile-9896661b7/",
  },
  {
    name: "Damir Mandakovic Pizarro",
    position: "Ingeniero, encargado de desarrollo del sitio web",
    image: "damir.jpg",
    affiliation: "",
    description:
      "Damir es Ingeniero Civil Industrial con mención en Tecnologías de Información de la Universidad Católica de Chile, pero se reconoce más como un montañista aficionado, guitarrista esporádico e hincha de Huachipato. Se ha dedicado al desarrollo y gestión de proyectos de elaboración de modelos de simulación estocásticos y modelos de optimización en diferentes industrias, desde salud a minería. En el último tiempo ha retomado su afición a construir sitios web trabajando como desarrollador independiente. En montaña cuenta con 3 primeras ascensiones en los Andes Centrales y creó el proyecto Andinismo de Escritorio de documentación de actividades de montañismo histórico en los Andes.",
    linkedin: "https://www.linkedin.com/in/damirmandakovic/",
    github: "https://github.com/damandak",
    external: "https://www.andinismodeescritorio.cl",
  },
  {
    name: "Francisco Javier Aguirre González",
    position: "Investigador / Posdoctorado",
    image: "francisco.jpg",
    affiliation: "Universidad de Magallanes / The School for Field Studies",
    description:
      "Francisco es Ingeniero Civil en Geografía y candidato a Doctor en Ciencias Antarticas y Subantarticas de la Universidad de Magallanes (Chile), dedicado los ultimos 5 años a la Glaciología y Climatologia, y es además un apasionado por las montañas y la practica de Karate Do. En la glaciología y climatología se ha especializado en procesos y dinámica nival, percepción remota y modelación. Es profesor residente de SFS Chile, Centro de Estudios del Clima en Puerto Natales, con un estrecho contacto con la naturaleza. Se le puede ver con su hija y señora tanto en una montaña como dentro de un kayak en los alrededores de Puerto Natales.",
  },
  {
    name: "Natalia Martínez",
    position: "Guía de montaña, encargada de logística y trabajos en terreno",
    image: "natalia.jpg",
    affiliation: "",
    description:
      "La montaña es el elemento de Natalia. Guía, instuctora de esquí, escaladora y por sobre todo aventurera. Natalia se ha especializado como guía profesional brindando apoyo técnico, logístico y de seguridad a expediciones científicas en los principales Campos de Hielo de Patagonia y Norteamérica. Ha alcanzado numerosas cumbres en los Andes de Argentina y Chile, Bolivia, Nepal, Canadá y Estados Unidos. Pero su zona favorita y escenario de sus mayores logros es la Patagonia, donde realizó la segunda ascensión del Monte Sarmiento y cuenta con 12 primeras ascenciones, las que incluyen el volcán Reclus, el Volcán Aguilera (2.498 m, el último gran volcán no escalado de los Andes) y los cerros Trono y Alas de Ángel en Cordillera de Sarmiento.",
  },
  {
    name: "Gonzalo Rosenfeld",
    position: "Encargado de administación",
    image: "gonzalo.jpg",
    affiliation: "Universidad de Magallanes",
    description:
      "Gonzalo es Ingeniero Comercial y Master en Planificación Territorial y Gestión Ambiental de la Universidad de Barcelona (España), actualmente docente en la carrera de ingeniería civil industrial de la Universidad de Magallanes. Gonzalo se ha dedicado los últimos 5 años a la gestión de proyectos FONDEF y FONDECYT. Adicionalmente, participa a través de la ONG Wild Aid en la elaboración de planes territoriales de protección de ecosistemas marinos en las áreas silvestres protegidas de Magallanes y Aysén. Participa tambien en las mesas territoriales de SERNATUR, junto a representantes de empresas turísticas de la región de Magallanes y Antártica Chilena. Actualmente se encuentra trabajando como director de carrera del área de administración y negocios de INACAP, Punta Arenas (Chile).",
  },
];
var tesistas = [
  {
    name: "Galo Andrade",
    position: "Tesista Magister",
    image: "galo.jpg",
    affiliation: "Universidad de Magallanes",
    description:
      "Su proyecto de tesis, el cual busca establecer la geometría de morrenas suceptibles de GLOF y generar un algoritmo de detección automática de éstas morrenas en modelos de elevación. Además espera generar un listado de lagos represados por morrenas ordenados según su suceptibilidad de GLOFs.",
  },
  {
    name: "Natalia Gallo",
    position: "Tesista Doctorado",
    image: "nataliagallo.jpg",
    affiliation: "Universidad de Magallanes",
    description:
      "Natalia está generando series de tiempo de volumen de lagos represados por hielo, en base a imágenes satelitales ópticas y modelos de elevación que generará ella con imágenes Planet. Luego estudiará las dinámicas de cada lago y como se correlacionan con la meteorología. Esto generará datos para la calibración del modelo.",
  },
  {
    name: "Pamela Maldonado",
    position: "Tesista Magister",
    image: "pamela.jpg",
    affiliation: "Universidad de Magallanes",
    description:
      "Pamela estudiará la historia de los lagos represados por hielo en Campo de Hielo Norte, combinando registros satelitales, vuelos aerofotogramétricos, Radar de apertura sintética y registros hidrológicos (estaciones DGA con medición de caudal o nivel).",
  },
  {
    name: "Yerko Ortega",
    position: "Tesista Pregrado Geología",
    image: "yerko.jpg",
    affiliation: "Universidad Andrés Bello",
    description:
      "Yerko está trabajando en la caracterización de los condicionantes geológicos y glaciológicos de los lagos represados por morrena que son parte de SAGAZ (y algunos más), determinando la probabilidad de derrumbes, avalanchas, caídas de hielo, etc. En base a las pendientes, tipos de roca, parecencia de glaciares colgantes, etc.",
  },
];
</script>
<style lang="scss" scoped>
.team-container {
  background-image: linear-gradient(
    -45deg,
    rgba(0, 180, 215, 0.6925) 45%,
    rgba(7, 7, 7, 0.9) 100%
  );
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
        -webkit-filter: drop-shadow(1px 1px 0.1px rgba(255, 255, 255, 0.2));
        filter: drop-shadow(1px 1px 0.1px rgba(255, 255, 255, 0.2));
      }
      .asso-institution-img {
        max-width: 100px;
        max-height: 100px;
        object-fit: cover;
        -webkit-filter: drop-shadow(1px 1px 0.1px rgba(255, 255, 255, 0.2));
        filter: drop-shadow(1px 1px 0.1px rgba(255, 255, 255, 0.2));
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
        max-width: 80px;
      }
    }
    .inst-wrap-small {
      width: 100px;
      height: 150px;
      h3 {
        width: 180px;
        font-size: 1em;
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
