<template>
  <div class="main-content team-container">
    <SectionTitle content="Equipo" />
    <div class="team-section">
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
          <a v-if="member.instagram" :href="member.instagram">
            <Icon :icon="instagramFill" />
          </a>
          <a v-if="member.researchgate" :href="member.researchgate">
            <Icon :icon="researchgateSquare" />
          </a>
          <a v-if="member.github" :href="member.github">
            <Icon :icon="githubSquare" />
          </a>
          <a v-if="member.cv" :href="member.cv">
            <Icon :icon="cvSquare" />
          </a>
          <a v-if="member.external" :href="member.external">
            <Icon :icon="linkExternal" />
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

var intro_text = false;

var members = [
  {
    name: "Camilo Rada Giacaman",
    position: "Director",
    image: "rada.png",
    affiliation: "Universidad de Magallanes",
    description:
      "Camilo es Doctor en Geofísica de la University of British Columbia (Canadá), dedicado a la Glaciología desde hace ya más de 12 años, y es además un apasionado montañista. En la glaciología se ha especializado en procesos subglaciares, dinámica glaciar, percepción remota y desarrollo de instrumentos, mientras que en la montaña se ha abocado a la exploración, contando con 26 primeras ascensiones en Patagonia, Antártica y el Yukón. Es profesor del Magister en Ciencias Antárticas mención Glaciología de la Universidad de Magallanes, y se lo puede ver igualmente feliz escalando una montaña, programando algún nuevo algoritmo en el computador, inventado algo entretenido con cables y Arduinos, o simplemente compartiendo un mate o un asado con los amigos.",
    linkedin: "https://www.linkedin.com/in/camilo-rada-giacaman-0b1b3b1b9/",
  },
  {
    name: "Sergio Andrés Rivera",
    position: "Director Alterno",
    image: "sergio.png",
    affiliation: "Universidad de Chile",
    description:
      "Andrés se graduó de Geógrafo en 1989 y de Magister en Geografía en 1997 en la Universidad de Chile. En el año 2004 obtuvo el grado de PhD en la Universidad de Bristol en Inglaterra. Ha dedicado toda su carrera académica a la glaciología, estudiando el comportamiento reciente de glaciares, sus respuestas a los cambios climáticos y las interacciones glacio-volcánicas. En la actualidad concentra sus estudios en los glaciares de montaña de los Andes de Chile central, en los glaciares que producen témpanos en los Campos de Hielo Patagónicos y en el estudio de lagos subglaciares en Antártica Occidental. Desde el año 1994 es académico de la Universidad de Chile donde actualmente es Profesor Titular del Departamento de Geografía. También ha trabajado como consultor privado y fue investigador senior del Centro de Estudios Científicos desde el año 2004 al 2019. Ha dirigido numerosas memorias de título y ha sido financiado en forma casi ininterrumpida por ANID entre otras fuentes de financiamiento. Tiene una larga lista de publicaciones en las más prestigiosas revistas científicas internacionales y ha colaborado en numerosos proyectos de extensión, entre los que destaca su página web http://www.glaciologia.cl",
    external: "http://www.glaciologia.cl",
    instagram: "https://www.instagram.com/glaciologia/",
  },
  {
    name: "Alejandro Dussaillant",
    position: "Investigador",
    image: "unknown2.png",
    affiliation: "Universidad de Aysén",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, quod, quia, voluptates quae voluptatibus quidem necessitatibus voluptatum quibusdam quos natus. Quisquam, quae voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.",
  },
  {
    name: "Íñigo Irarrázaval Bustos",
    position: "Investigador",
    image: "inigo.png",
    affiliation:
      "Centro de Investigación de Ecosistemas de la Patagonia (CIEP)",
    description:
      "Iñigo se ha enfocado en comprender las dinámicas asociadas a los glaciares, sus efectos en el paisaje y en la hidrología de la cuenca. Particularmente interesado en temas de hidrología glaciar, formación de lagos proglaciales, geomorfología en zonas pro/para/periglaciar e investigación en vaciamientos de lagunas glaciales (GLOFs). Entre sus herramientas se cuenta el análisis de imágenes satelitales, drones/UAVs, modelos hidrológicos, modelos geoestadísticos, y observaciones/datos de terreno. Estudié un Doctorado en Ciencias de la Tierra Universidad de Lausanne (Suiza), Magister en Hidrogeología University of New South Wales (Australia) y Geología en la Universidad de Chile (Chile). Actualmente me desempeño como investigador en el Centro de Investigación en Ecosistemas de la Patagonia (www.ciep.cl). Vivo en Coyhaique, donde aprovecho las innumerables oportunidad que nos presenta el territorio para hacer actividades al aire libre en familia y con amigos.",
    external: "https://patagoniaglacial.wordpress.com",
  },
  {
    name: "Marcelo Somos-Valenzuela",
    position: "Investigador",
    image: "unknown2.png",
    affiliation: "Universidad de la Frontera",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, quod, quia, voluptates quae voluptatibus quidem necessitatibus voluptatum quibusdam quos natus. Quisquam, quae voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.",
  },
  {
    name: "Sebastián Enrique Alfaro Gómez",
    position: "Investigador",
    image: "sebastian.png",
    affiliation: "Universidad de Magallanes / INACH",
    description:
      "Se define como un apasionado por la glaciología y el trabajo de campo para el estudio de la dinámica antártica y subantártica. Sebastián se ha especializado en la vigilancia del medio ambiente mediante sistemas de estaciones automáticas. Se le ve muy interesado en desarrollar investigaciones que combinen el análisis de imágenes de satélite, la teledetección y las mediciones de campo. Durante su pregrado estudió en detalle el área ingeniería, disfrutando bastante la administración, Ciencias básicas y presumiendo de un par de especializaciones técnicas (Minería, geología, prevención de riesgos, topografía). A su haber cuenta con una vasta experiencia como técnico en electrónica, implementando redes de monitoreo ambiental durante los últimos 7 años en centros de investigación científica nacionales (CEAZA, CIEP, INACH, CIGA). Sin duda se le puede considerar una persona inquieta y versátil, el busca concretar las ideas y tiene habilidad llevando a cabo proyectos desde la parte técnica (diseño e implementación) hasta lo administrativo (gestión y formulación de nuevas iniciativas). Actualmente forma parte de la unidad de proyectos del instituto antártico chileno y es uno de los investigadores jóvenes asociados al centro GAIA Antártica. Oriundo de la cuarta región de Coquimbo en su afán de perfeccionamiento y espíritu aventurero hace 5 años se trasladó a Patagonia, primero a Coyhaique y luego a Punta Arenas. Hoy por hoy, cursa su 2do año en el Magister en Ciencias Antárticas de la Universidad de Magallanes y anhela continuar especializándose en las ciencias de la tierra.",
    linkedin: "https://www.linkedin.com/in/sebastianenriquealfarogomez/",
    researchgate: "https://www.researchgate.net/profile/Sebastian-Alfaro-4",
  },
  {
    name: "Catalina Medina Porcile",
    position: "Ingeniera, encargada de desarrollos en electrónica",
    image: "cata.png",
    affiliation: "",
    description:
      "Catalina es Ingeniera Civil Electrica de la Universidad de Chile, con Magister en Ingenieria Electrica de la misma universidad. Se ha especializado en instrumentacion astronomica, trabajando actualmente en el nucleo milenio TITANS donde colabora estrechamente con el proyecto ngEHT el cual fue el primer telescopio del mundo en obtener una imagen de un agujero negro. Le apasiona la naturaleza y la ciencia, por lo que ha desarrollado a lo largo de su carrera distintos dispositivos de monitoreo de variables ambientales. Ademas, aprovecha cada momento que puede para practicar el montañismo, teniendo un primer ascenso en los andes centrales.",
    linkedin: "https://www.linkedin.com/in/catalina-medina-porcile-9896661b7/",
  },
  {
    name: "Damir Antonio Mandakovic Pizarro",
    position: "Ingeniero, encargado de desarrollo del sitio web",
    image: "damir.png",
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
    image: "unknown2.png",
    affiliation: "Universidad de Magallanes / The School for Field Studies",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas, quod, quia, voluptates quae voluptatibus quidem necessitatibus voluptatum quibusdam quos natus. Quisquam, quae voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.",
  },
  {
    name: "Galo Andrade",
    position: "Tesista Magister",
    image: "unknown2.png",
    affiliation: "Universidad de Magallanes",
    description:
      "Su proyecto de tesis, el cual busca establecer la geometría de morrenas suceptibles de GLOF y generar un algoritmo de detección automática de éstas morrenas en modelos de elevación. Además espera generar un listado de lagos represados por morrenas ordenados según su suceptibilidad de GLOFs.",
  },
  {
    name: "Natalia Gallo",
    position: "Tesista Doctorado",
    image: "unknown2.png",
    affiliation: "Universidad de Magallanes",
    description:
      "Natalia está generando series de tiempo de volumen de lagos represados por hielo, en base a imágenes satelitales ópticas y modelos de elevación que generará ella con imágenes Planet. Luego estudiará las dinámicas de cada lago y como se correlacionan con la meteorología. Esto generará datos para la calibración del modelo.",
  },
  {
    name: "Pamela Maldonado",
    position: "Tesista Magister",
    image: "unknown2.png",
    affiliation: "Universidad de Magallanes",
    description:
      "Pamela estudiará la historia de los lagos represados por hielo en Campo de Hielo Norte, combinando registros satelitales, vuelos aerofotogramétricos, Radar de apertura sintética y registros hidrológicos (estaciones DGA con medición de caudal o nivel).",
  },
  {
    name: "Yerko Ortega",
    position: "Tesista Pregrado Geología",
    image: "unknown2.png",
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
    rgb(0 180 215 / 92%),
    #070707f1 95%
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
  .team-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 20px 30px;
    width: 100%;
    max-width: 1400px;
    height: 80%;
    margin: 0 auto;
    .team-member-wrapper {
      width: 340px;
      height: 510px;
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
        width: 340px;
        height: 480px;
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
          position: absolute;
          opacity: 0;
          top: 0;
          left: 17px;
          width: 90%;
          height: 100%;
          text-align: left;
          p {
            font-size: 0.82rem;
            font-weight: 400;
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
@media only screen and (max-width: 1000px) {
  .team-container {
    gap: 0px;
  }
}
</style>
