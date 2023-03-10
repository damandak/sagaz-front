import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: navigator.language.split("-")[0], // set locale based on navigator language
  fallbackLocale: "es", // set the fallback language
  legacy: false, // use the composition API
  messages: {
    es: {
      menu: {
        home: "LAGOS",
        about: "SOBRE SAGAZ",
        team: "EQUIPO",
        contact: "CONTACTO",
      },
      general: {
        moreinfo: "Más Info",
      },
      lake: {
        general: {
          country: "País",
          region: "Región",
          latitude: "Latitud",
          longitude: "Longitud",
          altitude: "Altitud",
          area: "Área",
          volume: "Volumen",
          stationstatus: "Estado estación",
          alertlevel: "Nivel de alerta",
          updated: "Actualizado",
        },
        detail: {
          lastupdate: "Última actualización",
          loading: "Cargando información de la estación...",
          noinfo: "No hay información disponible para esta estación",
        },
        intervals: {
          description: "Cambiar intervalos de tiempo",
          day: "Un Día",
          week: "Una Semana",
          biweek: "Dos Semanas",
          month: "Un Mes",
          year: "Un Año",
          historic: "Histórico",
        },
        graphlabels: {
          day: "Día",
          week: "Semana",
          month: "Mes",
          year: "Año",
          waterlevel: "Nivel de agua",
          watertemperature: "Temperatura del agua",
          airpressure: "Presión atmosférica",
          airtemperature: "Temperatura atmosférica",
          precipitation: "Precipitación",
          meters: "metros - mts",
          celsius: "grados Celsius - °C",
          hectopascal: "hectopascal - hPa",
          milimeters: "milímetros - mm",
        },
      },
      about: {
        keep_going: "Seguir avanzando",
        a_section: {
          content:
            "SAGAZ es un proyecto que busca desarrollar un prototipo de sistema de alerta para reducir el impacto de las inundaciones relacionadas con glaciares. Estas inundaciones se conocen como GLOFs, acrónimo adoptado del inglés “Glacial Lake Outburst Flood”, que se puede traducir como Inundaciones por Vaciamiento de Lagos Glaciares.",
        },
        b_section: {
          content:
            "SAGAZ es un proyecto financiado por FONDEF IDeA I+D concurso 2021 (código ID21I10094). Es también un proyecto conjunto entre la Universidad de Aysén, Universidad de Chile, Universidad de la Frontera, el Centro de Investigación de Ecosistemas de la Patagonia (CIEP), la Universidad de Calgary (Canadá) y liderado por la Universidad de Magallanes. Además cuenta con el apoyo de CONAF Magallanes, la Dirección General de Aguas (DGA) región de Aysén, Naviera y Turismo Skorpios y Ecoturismo Patagonia Exploradores.",
        },
        c_section: {
          content: "¿Qué son los lagos glaciares y que riesgo representan?",
        },
        d_section: {
          content: "Un glaciar estable presenta pocos riesgos. Sin embargo,",
          bold_content:
            "si el glaciar avanza o retrocede, estos riesgos aumentan.",
        },
        e_section: {
          content:
            "Al retroceder un glaciar, suelen formarse lagos “periglaciares” en su margen y en las quebradas y valles anexos.",
        },
        f_section: {
          content: "Cuando el nivel del agua es suficientemente alto,",
          bold_content: "estos lagos pueden vaciarse abruptamente",
          second_content:
            "produciendo grandes inundaciones. Estos fenómenos pueden repetirse todos los años o incluso varias veces al año.",
        },
        g_section: {
          content:
            "El retroceso de un glaciar también suele resultar en la formación de un lago 'proglaciar' en su frente, el cual es represado por una acumulación de sedimentos y rocas poco consolidadas que el mismo glaciar acumuló durante un periodo de estabilidad en el pasado.",
        },
        h_section: {
          content:
            "Cuando un nivel alto del lago se combina con un gatillante como un derrumbe o una gran lluvia, esta presa puede ser erosionada de manera catastrófica,",
          bold_content: "generando un vaciamiento abrupto",
          second_content: "y produciendo grandes inundaciones.",
        },
        i_section: {
          content:
            "Al retroceder, los glaciares también se fragmentan en múltiples glaciares menores. Algunos de ellos se transforman en",
          bold_content:
            "glaciares colgantes que pueden liberar avalanchas de hielo",
          second_content:
            ", que al caer sobre un lago pueden generar inundaciones o gatillar un proceso de erosión catastrófica de la morrena frontal. Estas avalanchas de hielo también pueden producir destrucción directa sobre caminos o puentes.",
        },
        j_section: {
          content:
            "El retroceso del glaciar también expone escarpadas laderas montañosas que",
          bold_content:
            "tras perder el soporte proporcionado por el hielo se vuelven inestables",
          second_content:
            "y propensas a derrumbes. Dichos derrumbes también pueden generar inundaciones al caer sobre un lago, gatillando el proceso de erosión catastrófica de la morrena frontal o producir destrucción directa.",
        },
        k_section: {
          content:
            "Incluso mucho después de la desaparición completa de los glaciares en una cuenca, los lagos contenidos por morrenas pueden aún ser inestables y presentan un riesgo de derrumbe considerable.",
        },
        l_section: {
          content: "Las abruptas laderas de un valle glaciar son especialmente",
          bold_content:
            "susceptibles a derrumbes incluso décadas después de la desaparición de los glaciares y sus lagos asociados.",
          second_content:
            "Por lo tanto, conocer la historia glaciar de una zona es fundamental para determinar el riesgo de derrumbes.",
        },
        m_section: {
          content:
            "En la presente etapa de prototipo, el proyecto SAGAZ instalará una red de 12 estaciones de monitoreo. En conjunto con pronósticos meteorológicos, los datos de estas estaciones alimentarán el modelo glacio-hidrológico predictivo que calcula los niveles de alerta presentados en esta página web.",
        },
        n_section: {
          content:
            "Las estaciones de la red de monitoreo de SAGAZ fueron diseñadas en la Universidad de Magallanes y construidas en Chile. La primera fue instalada en Noviembre 2020 en la Laguna de los Témpanos, en Campo de Hielo Norte junto a una estación DGA, con el propósito de testear y validar la tecnología desarrollada.",
        },
      },
      team: {
        financed: "Financiado por",
        inchargeinstitutions: "Instituciones encargadas",
        associatedinstitutions: "Instituciones asociadas",
        team: "Equipo",
        affiliation: "Afiliación",
        director: "Director",
        alternatedirector: "Director Alterno",
        researcher: "Investigador",
        electronicengineer:
          "Ingeniera, encargada de desarrollos en electrónica",
        developer: "Ingeniero, encargado de desarrollo del sitio web",
        researcher_postdoc: "Investigador / Posdoctorado",
        mountainguide:
          "Guía de montaña, encargada de logística y trabajos en terreno",
        administration: "Encargado de administración",
        mscthesist: "Tesista magíster",
        phdthesist: "Tesista doctorado",
        geologythesist: "Tesista pregrado geología",
        biographies: {
          camilorada:
            "Camilo es Doctor en Geofísica de la University of British Columbia (Canadá), dedicado a la Glaciología desde hace ya más de 12 años, y es además un apasionado montañista. En la glaciología se ha especializado en procesos subglaciares, dinámica glaciar, percepción remota y desarrollo de instrumentos, mientras que en la montaña se ha abocado a la exploración, contando con 26 primeras ascensiones en Patagonia, Antártica y el Yukón. Es profesor del Magister en Ciencias Antárticas mención Glaciología de la Universidad de Magallanes, y se lo puede ver igualmente feliz escalando una montaña, programando algún nuevo algoritmo en el computador, inventado algo entretenido con cables y Arduinos, o simplemente compartiendo un mate o un asado con los amigos.",
          sergiorivera:
            "Andrés es doctor en Geografía de la Universidad de Bristol en Inglaterra. Ha dedicado toda su carrera académica a la glaciología, estudiando el comportamiento reciente de glaciares, sus respuestas a los cambios climáticos y las interacciones glacio-volcánicas. En la actualidad concentra sus estudios en los glaciares de montaña de los Andes de Chile central, los glaciares que producen témpanos en los Campos de Hielo Patagónicos y en lagos subglaciares de Antártica. Es Profesor Titular del Departamento de Geografía de la Universidad de Chile. Ha dirigido numerosas memorias de título y ha sido financiado en forma casi ininterrumpida por ANID y otras fuentes de financiamiento. Tiene una larga lista de publicaciones en las más prestigiosas revistas científica. Te invitamos a su página web http://www.glaciologia.cl",
          alejandrodussaillant:
            "Alejandro es doctor en Ingeniería Civil Industrial Ambiental  Información de la Universidad de Wisconsin-Madison y actualmente es académico de Universidad de Aysén. Tiene más de  20 años de experiencia investigando procesos hidrológicos, vía monitoreo, análisis y modelación, aplicados a ríos, humedales, drenaje urbano y cuencas. Alejandro ha estudiado los ríos de la Patagonia desde 2008, incluyendo efectos hidráulicos y geomorfológicos de crecidas extremas, liderando y colaborado en proyectos internacionales sobre crecidas por vaciamientos de lagos glaciales (Glacial-Lake Outburst Floods, GLOFs) en Patagonia, crecidas por erupciones del volcán Calbuco (lahares), y transferencia tecnológica Inglaterra-Chile sobre sensores de bajo costo para monitoreo de ríos.",
          inigoirarrazaval:
            "Iñigo es doctor en Ciencias de la Tierra Universidad de Lausanne (Suiza). Su trabajo se ha enfocado en comprender las dinámicas asociadas a los glaciares, sus efectos en el paisaje y en la hidrología. Particularmente interesado en temas de hidrología glaciar, formación de lagos proglaciales, geomorfología en zonas pro/para/periglaciar e investigación en vaciamientos de lagunas glaciales (GLOFs). Entre sus herramientas se cuenta el análisis de imágenes satelitales, drones/UAVs, modelos hidrológicos, modelos geoestadísticos, y observaciones/datos de terreno. Actualmente es investigador en el Centro de Investigación en Ecosistemas de la Patagonia (www.ciep.cl), en Coyhaique, donde aprovecha las innumerables oportunidades para hacer actividades al aire libre en familia y con amigos.",
          marcelosomos:
            "Marcelo es doctor en  Recursos Hídricos de la Universidad de Austin Texas. Sus estudiosestán relacionados con el agua en sus diferentes formas y ambientes. Desde 2017 es académico en la Universidad de la Frontera, dictando cursos de pre y posgrado asociados al recurso hídrico. Su investigación se centra en los impactos de los cambios en la cobertura del suelo y el clima, el incremento de eventos extremos como inundaciones y sequías, y la parametrización de modelos para mejorar la predicción y adaptación al cambio global en sistemas montañosos. Marcelo a ayudado a comunidades en áreas remotas de Patagonia, Nepal y Perú a aplicar la ciencia para comprender mejor los problemas que enfrentan debido al cambio climático.",
          sebastianalfaro:
            "Sebastián es un apasionado por la glaciología y el trabajo de campo. Busca desarrollar investigaciones que combinen el análisis de imágenes de satélite, la teledetección y las mediciones de campo. Es técnico en electrónica e Ingeniero Civil de Minas, con especializaciones en Minería, geología, prevención de riesgos y topografía. Durante los últimos 7 años a implementando redes de monitoreo ambiental CEAZA, CIEP, INACH y CIGA. Actualmente forma parte de la unidad de proyectos del instituto antártico chileno. Es oriundo de la cuarta región de Coquimbo, y actualmente cursa su segundo año en el Magister en Ciencias Antárticas de la Universidad de Magallanes y anhela continuar especializándose en las ciencias de la tierra.",
          catalinamedina:
            "Catalina es Ingeniera Civil Electrica de la Universidad de Chile, con Magister en Ingenieria Electrica de la misma universidad. Se ha especializado en instrumentacion astronomica, trabajando actualmente en el nucleo milenio TITANS donde colabora estrechamente con el proyecto ngEHT el cual fue el primer telescopio del mundo en obtener una imagen de un agujero negro. Le apasiona la naturaleza y la ciencia, por lo que ha desarrollado a lo largo de su carrera distintos dispositivos de monitoreo de variables ambientales. Ademas, aprovecha cada momento que puede para practicar el montañismo, teniendo un primer ascenso en los andes centrales.",
          damirmandakovic:
            "Damir es Ingeniero Civil Industrial con mención en Tecnologías de Información de la Universidad Católica de Chile, pero se reconoce más como un montañista aficionado, guitarrista esporádico e hincha de Huachipato. Se ha dedicado al desarrollo y gestión de proyectos de elaboración de modelos de simulación estocásticos y modelos de optimización en diferentes industrias, desde salud a minería. En el último tiempo ha retomado su afición a construir sitios web trabajando como desarrollador independiente. En montaña cuenta con 3 primeras ascensiones en los Andes Centrales y creó el proyecto Andinismo de Escritorio de documentación de actividades de montañismo histórico en los Andes.",
          franciscoaguirre:
            "Francisco es Ingeniero Civil en Geografía y Doctor en Ciencias Antarticas y Subantarticas de la Universidad de Magallanes (Chile), dedicado los ultimos 5 años a la Glaciología y Climatologia, y es además un apasionado por las montañas y la practica de Karate Do. En la glaciología y climatología se ha especializado en procesos y dinámica nival, percepción remota y modelación. Es profesor residente de SFS Chile, Centro de Estudios del Clima en Puerto Natales, con un estrecho contacto con la naturaleza. Se le puede ver con su hija y señora tanto en una montaña como dentro de un kayak en los alrededores de Puerto Natales.",
          nataliamartinez:
            "La montaña es el elemento de Natalia. Guía, instuctora de esquí, escaladora y por sobre todo aventurera. Natalia se ha especializado como guía profesional brindando apoyo técnico, logístico y de seguridad a expediciones científicas en los principales Campos de Hielo de Patagonia y Norteamérica. Ha alcanzado numerosas cumbres en los Andes de Argentina y Chile, Bolivia, Nepal, Canadá y Estados Unidos. Pero su zona favorita y escenario de sus mayores logros es la Patagonia, donde realizó la segunda ascensión del Monte Sarmiento y cuenta con 12 primeras ascenciones, las que incluyen el volcán Reclus, el Volcán Aguilera (2.498 m, el último gran volcán no escalado de los Andes) y los cerros Trono y Alas de Ángel en Cordillera de Sarmiento.",
          gonzalorosenfeld:
            "Gonzalo es Ingeniero Comercial y Master en Planificación Territorial y Gestión Ambiental de la Universidad de Barcelona (España), actualmente docente en la carrera de ingeniería civil industrial de la Universidad de Magallanes. Gonzalo se ha dedicado los últimos 5 años a la gestión de proyectos FONDEF y FONDECYT. Adicionalmente, participa a través de la ONG Wild Aid en la elaboración de planes territoriales de protección de ecosistemas marinos en las áreas silvestres protegidas de Magallanes y Aysén. Participa tambien en las mesas territoriales de SERNATUR, junto a representantes de empresas turísticas de la región de Magallanes y Antártica Chilena. Actualmente se encuentra trabajando como director de carrera del área de administración y negocios de INACAP, Punta Arenas (Chile).",
          galoandrade:
            "Su proyecto de tesis, el cual busca establecer la geometría de morrenas suceptibles de GLOF y generar un algoritmo de detección automática de éstas morrenas en modelos de elevación. Además espera generar un listado de lagos represados por morrenas ordenados según su suceptibilidad de GLOFs.",
          nataliagallo:
            "Natalia está generando series de tiempo de volumen de lagos represados por hielo, en base a imágenes satelitales ópticas y modelos de elevación que generará ella con imágenes Planet. Luego estudiará las dinámicas de cada lago y como se correlacionan con la meteorología. Esto generará datos para la calibración del modelo.",
          pamelamaldonado:
            "Pamela estudiará la historia de los lagos represados por hielo en Campo de Hielo Norte, combinando registros satelitales, vuelos aerofotogramétricos, Radar de apertura sintética y registros hidrológicos (estaciones DGA con medición de caudal o nivel).",
          yerkoortega:
            "Yerko está trabajando en la caracterización de los condicionantes geológicos y glaciológicos de los lagos represados por morrena que son parte de SAGAZ (y algunos más), determinando la probabilidad de derrumbes, avalanchas, caídas de hielo, etc. En base a las pendientes, tipos de roca, parecencia de glaciares colgantes, etc.",
        },
      },
      contact: {
        sendus: "Envíanos un correo a",
      },
    },
    en: {
      menu: {
        home: "LAKES",
        about: "ABOUT SAGAZ",
        team: "TEAM",
        contact: "CONTACT",
      },
      general: {
        moreinfo: "More",
      },
      lake: {
        general: {
          country: "Country",
          region: "Region/State/Province",
          latitude: "Latitude",
          longitude: "Longitude",
          altitude: "Altitude",
          area: "Area",
          volume: "Volume",
          stationstatus: "Station state",
          alertlevel: "Alert level",
          updated: "Updated",
        },
        detail: {
          lastupdate: "Last update",
          loading: "Loading station data...",
          noinfo: "No data available for this station",
        },
        intervals: {
          description: "Change time intervals",
          day: "One Day",
          week: "One Week",
          biweek: "Two Weeks",
          month: "One Month",
          year: "One Year",
          historic: "Historic",
        },
        graphlabels: {
          day: "Day",
          week: "Week",
          month: "Month",
          year: "Year",
          waterlevel: "Water level",
          watertemperature: "Water temperature",
          airpressure: "Atmospheric pressure",
          airtemperature: "Atmospheric temperature",
          precipitation: "Precipitation",
          meters: "meters",
          celsius: "Celsius degrees - °C",
          hectopascal: "hectopascal - hPa",
          milimeters: "millimeters - mm",
        },
      },
      about: {
        keep_going: "More",
        a_section: {
          content:
            "SAGAZ is a project that seeks to develop a prototype alert system to reduce the impact of glacier-related flooding. These floods are known as GLOFs (Glacial Lake Outburst Floods).",
        },
        b_section: {
          content:
            "SAGAZ is a project financed by the FONDEF IDeA I+D 2021 grant (project ID21I10094). It is also a joint project between Universidad de Aysén, Universidad de Chile, Universidad de la Frontera, the Center for Research on Patagonian Ecosystems (CIEP), the University of Calgary (Canada) and led by the Universidad de Magallanes. It has the support of CONAF Magallanes, the Chilean General Directorate of Water (DGA), Naviera y Turismo Skorpios and Ecoturismo Patagonia Exploradores.",
        },
        c_section: {
          content: "What are glacial lakes, and what risk do they pose?",
        },
        d_section: {
          content: "A stable glacier presents few risks. However,",
          bold_content:
            "if the glacier advances or retreats, these risks increase.",
        },
        e_section: {
          content:
            "As a glacier recedes, “periglacial” lakes often form on its margin and in the tributary ravines and valleys.",
        },
        f_section: {
          content: "When the water level is high enough,",
          bold_content: "these lakes can empty abruptly",
          second_content:
            "producing large floods. These phenomena can be repeated every year or even several times a year.",
        },
        g_section: {
          content:
            "The retreat of a glacier also often results in the formation of a 'proglacial' lake on its front, which is dammed by an accumulation of poorly consolidated sediments and rocks that the glacier itself accumulated during a period of stability in the past.",
        },
        h_section: {
          content:
            "When a high lake level is combined with a trigger such as a landslide or heavy rain, this dam can be catastrophically eroded,",
          bold_content: "generating an abrupt lake drainage",
          second_content: "and producing great floods.",
        },
        i_section: {
          content:
            "As glaciers retreat, they break up into multiple smaller glaciers. Some of them become",
          bold_content: "hanging glaciers that can release ice avalanches",
          second_content:
            ", which when falling on a lake can generate floods or trigger a process of catastrophic erosion of the frontal moraine. These ice avalanches can also produce direct destruction on roads or bridges.",
        },
        j_section: {
          content:
            "The retreat of the glacier also exposes steep mountain slopes that",
          bold_content:
            "after losing the support provided by the ice they become unstable",
          second_content:
            "and prone to collapse. Such landslides can also generate flooding by falling on a lake, triggering the process of catastrophic erosion of the frontal moraine or produce direct destruction.",
        },
        k_section: {
          content:
            "Even long after the complete disappearance of glaciers in a basin, lakes contained by moraines may still be unstable and present considerable risk of landslides.",
        },
        l_section: {
          content: "The steep slopes of a glacial valley are especially",
          bold_content:
            "susceptible to landslides even decades after the disappearance of the glaciers and their associated lakes.",
          second_content:
            "Therefore, knowing the glacial history of an area is essential to determine the risk of landslides.",
        },
        m_section: {
          content:
            "In the present prototype stage, the SAGAZ project will install a network of 12 monitoring stations. Live data from these stations and meteorological forecasts will feed to the SAGAZ predictive glacio-hydrological model that calculates the alert levels presented on this web page.",
        },
        n_section: {
          content:
            "The SAGAZ monitoring stations were designed at the Universidad de Magallanes and built in Chile. The first was installed in November 2020 in the Laguna de los Témpanos, in Campo de Hielo Norte next to a DGA station, with the purpose of testing and validating the technology developed.",
        },
      },
      team: {
        financed: "Funded by",
        inchargeinstitutions: "Leading institutions",
        associatedinstitutions: "Associated institutions",
        team: "Team",
        affiliation: "Affiliation",
        director: "Director",
        alternatedirector: "Deputy director",
        researcher: "Researcher",
        electronicengineer: "Engineer, in charge of electronics development",
        developer: "Engineer, website developer",
        researcher_postdoc: "Researcher / Postdoc",
        mountainguide: "Mountain guide, in charge of logistics and field work",
        administration: "Administration manager",
        mscthesist: "Master's student",
        phdthesist: "PhD student",
        geologythesist: "Geology undegrad",
        biographies: {
          camilorada:
            "Camilo is a Doctor in Geophysics from the University of British Columbia (Canada). He has been dedicated to Glaciology for over 12 years and is also a passionate mountaineer. In glaciology, he has specialized in subglacial processes, glacier dynamics, remote sensing and instrument development. In the mountains, he has devoted himself to exploration, with 26 first ascents in Patagonia, Antarctica and the Yukon. He is a professor of the Magister in Antarctic Sciences with a mention in Glaciology at the University of Magallanes, and you can see him equally happy climbing a mountain, programming a new algorithm on the computer, inventing something entertaining with cables and Arduinos, or simply sharing a mate or a barbecue with friends.",
          sergiorivera:
            "Andrés has a Ph.D. in Geography from the University of Bristol in England. He has dedicated his entire academic career to glaciology, studying the recent behavior of glaciers, their responses to climate change, and glacio-volcanic interactions. Currently, he concentrates his studies on the mountain glaciers of the Andes of central Chile, the glaciers that produce icebergs in the Patagonian Ice Fields, and subglacial lakes in Antarctica. He is a Professor at the Department of Geography at the University of Chile. He has directed numerous title memories and has been funded almost continuously by ANID and other funding sources. He has a long list of publications in the most prestigious scientific journals. We invite you to his website http://www.glaciologia.cl",
          alejandrodussaillant:
            "Alejandro has a Ph.D. in Civil Industrial Environmental Engineering Information from the University of Wisconsin-Madison. He is currently an academic at the University of Aysén. He has over 20 years of experience investigating hydrological processes via monitoring, analysis and modelling applied to rivers, wetlands, urban drainage and basins. Alejandro has studied the rivers of Patagonia since 2008, including hydraulic and geomorphological effects of extreme floods, leading and collaborating in international projects on floods due to the drainage of glacial lakes (Glacial-Lake Outburst Floods, GLOFs) in Patagonia, floods due to eruptions of Calbuco volcano (lahars), and England-Chile technology transfer on low-cost sensors for river monitoring.",
          inigoirarrazaval:
            "Iñigo has a Ph.D. in Earth Sciences from the University of Lausanne (Switzerland). His work has focused on understanding the dynamics associated with glaciers and their effects on the landscape and hydrology. He is particularly interested in issues of glacial hydrology, proglacial lake formation, geomorphology in pro/para/periglacial zones and research on glacial lakes floods (GLOFs). His tools include satellite image analysis, drones/UAVs, hydrological models, geostatistical models, and field data. He is currently a researcher at the Patagonia Ecosystem Research Center (www.ciep.cl) in Coyhaique, where he takes advantage of the countless opportunities to do outdoor activities with family and friends.",
          marcelosomos:
            "Marcelo has a Ph.D. in Water Resources from the University of Austin, Texas. His studies are related to water in its different forms and environments. Since 2017 he has been an academic at the Universidad de la Frontera, teaching undergraduate and postgraduate courses associated with water resources. His research focuses on the impacts of changes in land cover and climate, the increase in extreme events such as floods and droughts, and the parameterization of models to improve the prediction and adaptation to global change in mountain systems. Marcelo has helped communities in remote areas of Patagonia, Nepal, and Peru to apply science to understand better the problems they face due to climate change.",
          sebastianalfaro:
            "Sebastian is passionate about glaciology and field work. He seeks to develop research that combines satellite image analysis, remote sensing and field measurements. He is an electronics technician and Civil Mining Engineer, with specializations in mining, geology, risk prevention and topography. For the last 7 years he has been implementing environmental monitoring networks CEAZA, CIEP, INACH and CIGA. He is currently part of the project unit of the Chilean Antarctic Institute. Sebastián is a native of the fourth region of Coquimbo, he is currently in his second year of the Master in Antarctic Sciences at the University of Magallanes and hopes to continue specializing in earth sciences.",
          catalinamedina:
            "Catalina is an Electrical Civil Engineer from the University of Chile, with a Master's in Electrical Engineering from the same university. She has specialized in astronomical instrumentation, currently working at the TITANS millennium nucleus, where she collaborates closely with the ngEHT project, which was the first telescope in the world to image a black hole. She is passionate about nature and science, which is why she has developed different devices for monitoring environmental variables throughout her career. In addition, she takes advantage of every moment she can to practice mountaineering or make a first ascent in the central Andes.",
          damirmandakovic:
            "Damir is an Industrial Civil Engineer with a mention in Information Technology from Universidad Católica de Chile. Still, he is better known as an amateur mountaineer, sporadic guitarist and Huachipato soccer club fan. He has dedicated himself to developing and managing projects making stochastic simulations and optimization models in different industries, from health to mining. Lately, he has resumed his hobby of building websites by working as an independent developer. In the mountains, he has three first ascents in the Central Andes. He has created the 'Andinismo de Escritorio' project to document historical mountaineering activities in the Andes.",
          franciscoaguirre:
            "Francisco is a Civil Engineer in Geography and a Ph.D. in Antarctic and Sub-Antarctic Sciences from the University of Magallanes (Chile), dedicating the last five years to Glaciology and Climatology. He is also passionate about mountains and the practice of Karate Do. In glaciology and climatology, he has specialized in snow dynamics and processes, remote sensing and modeling. He is a resident professor at SFS Chile, Center for Climate Studies in Puerto Natales, with close contact with nature. He can be seen with his daughter and wife on a mountain or in a kayak around Puerto Natales.",
          nataliamartinez:
            "The mountain is Natalia's element. She is a guide, ski instructor, climber and, above all, adventurer. Natalia has specialized as a professional guide providing technical, logistical and security support to scientific expeditions in the icefields of Patagonia and North America. She has reached numerous summits in the Andes of Argentina, Chile, Bolivia, Nepal, Canada, and the United States. But her favorite area and the scene of her greatest achievements is Patagonia, where she made the second ascent of Monte Sarmiento and has 12 first ascents, which include Reclus volcano, Aguilera Volcano (2,498 m, the last large unclimbed volcano in the Andes) and Mounts Trono and Alas de Ángel in the Cordillera de Sarmiento.",
          gonzalorosenfeld:
            "Gonzalo is a Business Engineer and Master in Territorial Planning & Environmental Management from the University of Barcelona (Spain). He is a professor of industrial civil engineering at the University of Magallanes. Gonzalo has spent the last five years managing FONDEF and FONDECYT projects. Additionally, he participates through the NGO Wild Aid in preparing territorial plans to protect marine ecosystems in the protected wild areas of Magallanes and Aysén. He also participates in the territorial tables of SERNATUR, together with representatives of tourist companies from the Magallanes and Antarctica. He is currently working as the career director of the administration and business area of INACAP, Punta Arenas (Chile).",
          galoandrade:
            "His thesis project seeks to establish the geometry of GLOF-susceptible moraines and generate an algorithm for the automatic detection of these moraines in elevation models. He also hopes to create a list of lakes dammed by moraines ordered according to their GLOF susceptibility.",
          nataliagallo:
            "Natalia is generating time series of volume of lakes dammed by ice, based on optical satellite images and elevation models that she will generate with Planet images. She will then study the dynamics of each lake and how they correlate with meteorology. This will generate data for model calibration.",
          pamelamaldonado:
            "Pamela is studying the history of lakes dammed by ice in Campo de Hielo Norte, combining satellite records, aerial photogrammetric flights, Synthetic Aperture Radar, and hydrological records (DGA stations with discharge or level measurement).",
          yerkoortega:
            "Yerko is working on characterizing the geological and glaciological conditions of the lakes dammed by moraines that are part of SAGAZ (and some others), determining the probability of landslides, avalanches, and ice falls based on slopes, rock types, the abundance of hanging glaciers, etc.",
        },
      },
      contact: {
        sendus: "Send us an email at",
      },
    },
  },
});

export default i18n;
