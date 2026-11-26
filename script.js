/* =========================================
   NAVEGACIÓN ENTRE DIAPOSITIVAS
========================================= */

const slides = document.querySelectorAll(".slide");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const slideNumber = document.getElementById("slideNumber");
const progressBar = document.getElementById("progressBar");

let currentSlide = 0;

function showSlide(index) {

  if (index < 0 || index >= slides.length) return;

  slides[currentSlide].classList.remove("active");

  currentSlide = index;

  slides[currentSlide].classList.add("active");

  const total = slides.length;

  slideNumber.textContent =
    `${String(currentSlide + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  progressBar.style.width =
    `${((currentSlide + 1) / total) * 100}%`;

  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === total - 1;

}

prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});


/* =========================================
   INFORMACIÓN DE LOS DEPARTAMENTOS
========================================= */

const regionData = {

  choco: {

    title: "Chocó",

    subtitle: "Servicios públicos y desigualdad territorial",

    description:

      "El Chocó permite observar cómo las desigualdades territoriales se expresan en el acceso a servicios públicos, infraestructura, oportunidades y condiciones de vida. Estas dinámicas deben analizarse en relación con procesos históricos, institucionales y económicos, y no como características naturales de sus habitantes.",

    stats: [

      {

        label: "01 / SERVICIOS",

        title: "Agua y saneamiento",

        description:

          "Explora las diferencias en acceso a acueducto, alcantarillado y saneamiento entre zonas urbanas y rurales."

      },

      {

        label: "02 / BIENESTAR",

        title: "Condiciones de vida",

        description:

          "Las condiciones de vivienda, acceso a servicios y oportunidades permiten observar las desigualdades estructurales."

      },

      {

        label: "03 / SALUD",

        title: "Acceso institucional",

        description:

          "La disponibilidad de infraestructura y servicios de salud está relacionada con las condiciones de acceso y distribución territorial."

      },

      {

        label: "04 / CONECTIVIDAD",

        title: "Infraestructura",

        description:

          "La conectividad, el transporte y las redes de servicios condicionan las oportunidades y las relaciones territoriales."

      }

    ],

    analysis:

      "Las desigualdades territoriales no se explican por la geografía o por las comunidades en sí mismas. Es necesario analizar las decisiones de inversión, las estructuras institucionales, las dinámicas históricas y la distribución de recursos y oportunidades.",

    source:

      "FUENTES: DANE — Encuesta de Calidad de Vida, población NARP (2024); artículo académico, DOI: 10.18046/retf.i16.4102."

  },


  valle: {

    title: "Valle del Cauca",

    subtitle: "Puerto, economía y contrastes territoriales",

    description:

      "Buenaventura permite explorar las tensiones entre la importancia económica y portuaria del territorio, las condiciones de vida de sus habitantes y las disputas por los modelos de desarrollo. El análisis debe considerar las dinámicas urbanas, rurales y comunitarias del distrito.",

    stats: [

      {

        label: "01 / ECONOMÍA",

        title: "Actividad portuaria",

        description:

          "El movimiento de mercancías y las dinámicas comerciales permiten discutir cómo se relaciona la actividad económica con el bienestar territorial."

      },

      {

        label: "02 / SERVICIOS",

        title: "Acceso y distribución",

        description:

          "Las diferencias en acceso a servicios e infraestructura permiten observar contrastes en las condiciones de vida."

      },

      {

        label: "03 / TERRITORIO",

        title: "Transformaciones",

        description:

          "Los proyectos económicos, las transformaciones urbanas y las disputas por el espacio pueden afectar las formas de habitar el territorio."

      },

      {

        label: "04 / COMUNIDAD",

        title: "Derechos colectivos",

        description:

          "Las comunidades construyen procesos organizativos y reivindican derechos, autonomía y participación en las decisiones territoriales."

      }

    ],

    analysis:

      "Buenaventura invita a cuestionar la idea de que el crecimiento económico o la infraestructura necesariamente se traducen en bienestar distribuido de manera equitativa. Es importante examinar quiénes se benefician, qué impactos se producen y qué voces participan en las decisiones.",

    source:

      "FUENTES: DANE — Encuesta de Calidad de Vida, población NARP (2024); artículo académico, DOI: 10.18046/retf.i16.4102."

  },


  cauca: {

    title: "Cauca",

    subtitle: "Derechos colectivos y disputas territoriales",

    description:

      "El litoral caucano permite examinar la relación entre desigualdad, territorialidad, conflicto y procesos de organización comunitaria. Estas dinámicas se relacionan con las formas de ocupación, los derechos colectivos, las actividades económicas y las transformaciones territoriales.",

    stats: [

      {

        label: "01 / DERECHOS",

        title: "Territorialidad",

        description:

          "Los derechos colectivos y las formas de organización territorial son fundamentales para comprender las relaciones entre comunidad y territorio."

      },

      {

        label: "02 / CONFLICTO",

        title: "Afectaciones",

        description:

          "Las dinámicas del conflicto armado y otras formas de violencia pueden transformar las condiciones de vida y los procesos comunitarios."

      },

      {

        label: "03 / ECONOMÍA",

        title: "Medios de sustento",

        description:

          "Las actividades productivas locales y las economías comunitarias permiten comprender las relaciones entre recursos, trabajo y territorio."

      },

      {

        label: "04 / ORGANIZACIÓN",

        title: "Autonomía",

        description:

          "Los procesos organizativos reivindican participación, reconocimiento, autonomía y defensa de los territorios."

      }

    ],

    analysis:

      "Comprender las desigualdades en el litoral caucano requiere reconocer las relaciones entre historia, derechos territoriales, conflicto, decisiones políticas y las capacidades de organización de las comunidades.",

    source:

      "FUENTES: DANE — Encuesta de Calidad de Vida, población NARP (2024); artículo académico, DOI: 10.18046/retf.i16.4102."

  },


  narino: {

    title: "Nariño",

    subtitle: "Condiciones de vida y desigualdades rurales",

    description:

      "El litoral nariñense permite analizar las diferencias territoriales en acceso a servicios, conectividad, vivienda, alimentación y oportunidades. Las dinámicas rurales, urbanas, económicas y comunitarias deben abordarse reconociendo la diversidad del departamento.",

    stats: [

      {

        label: "01 / ALIMENTACIÓN",

        title: "Seguridad alimentaria",

        description:

          "Las condiciones de acceso a los alimentos permiten explorar las desigualdades económicas, territoriales y sociales."

      },

      {

        label: "02 / VIVIENDA",

        title: "Condiciones habitacionales",

        description:

          "El acceso a vivienda adecuada y servicios básicos permite observar diferencias entre territorios."

      },

      {

        label: "03 / CONECTIVIDAD",

        title: "Acceso a internet",

        description:

          "La conectividad digital está relacionada con las posibilidades de comunicación, formación, acceso a información y servicios."

      },

      {

        label: "04 / EDUCACIÓN",

        title: "Oportunidades",

        description:

          "El acceso a la educación y las oportunidades de formación permiten analizar las desigualdades entre contextos."

      }

    ],

    analysis:

      "Las desigualdades del litoral nariñense deben comprenderse a partir de las condiciones materiales, las relaciones históricas y las dinámicas institucionales y económicas, sin reducir la región a sus carencias.",

    source:

      "FUENTES: DANE — Encuesta de Calidad de Vida, población NARP (2024); artículo académico, DOI: 10.18046/retf.i16.4102."

  }

};


/* =========================================
   VENTANA EMERGENTE
========================================= */

const regionModal = document.getElementById("regionModal");

const modalBackdrop = document.getElementById("modalBackdrop");

const closeRegionModalBtn =
  document.getElementById("closeRegionModal");

const modalRegionTitle =
  document.getElementById("modalRegionTitle");

const modalRegionSubtitle =
  document.getElementById("modalRegionSubtitle");

const modalRegionDescription =
  document.getElementById("modalRegionDescription");

const modalRegionStats =
  document.getElementById("modalRegionStats");

const modalRegionAnalysis =
  document.getElementById("modalRegionAnalysis");

const modalRegionSource =
  document.getElementById("modalRegionSource");

let lastMapTrigger = null;


function openRegionModal(regionKey, triggerElement) {

  const region = regionData[regionKey];

  if (!region) return;

  lastMapTrigger = triggerElement;

  modalRegionTitle.textContent = region.title;

  modalRegionSubtitle.textContent = region.subtitle;

  modalRegionDescription.textContent =
    region.description;

  modalRegionAnalysis.textContent =
    region.analysis;

  modalRegionSource.textContent =
    region.source;


  /* GENERAR TARJETAS */

  modalRegionStats.innerHTML = "";

  region.stats.forEach(stat => {

    const card = document.createElement("div");

    card.className = "region-stat-card";

    card.innerHTML = `

      <span>${stat.label}</span>

      <h3>${stat.title}</h3>

      <p>${stat.description}</p>

    `;

    modalRegionStats.appendChild(card);

  });


  /* MOSTRAR VENTANA */

  regionModal.classList.add("open");

  regionModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  closeRegionModalBtn.focus();

}


function closeRegionModal() {

  regionModal.classList.remove("open");

  regionModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";


  /* DEVOLVER FOCO AL MAPA */

  if (lastMapTrigger) {

    lastMapTrigger.focus();

  }

}


/* =========================================
   EVENTOS DEL MAPA
========================================= */

const mapAreas = document.querySelectorAll(".map-area");

mapAreas.forEach(area => {

  area.addEventListener("click", () => {

    const region = area.dataset.region;

    openRegionModal(region, area);

  });


  /* TECLADO */

  area.addEventListener("keydown", event => {

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {

      event.preventDefault();

      openRegionModal(area.dataset.region, area);

    }

  });

});


/* =========================================
   CERRAR VENTANA
========================================= */

closeRegionModalBtn.addEventListener("click", closeRegionModal);

modalBackdrop.addEventListener("click", closeRegionModal);


/* =========================================
   TECLADO GLOBAL
========================================= */

document.addEventListener("keydown", event => {

  const activeElement = document.activeElement;

  const isInput =

    activeElement &&

    ["INPUT", "TEXTAREA", "SELECT"].includes(
      activeElement.tagName
    );


  /* CERRAR VENTANA CON ESCAPE */

  if (

    event.key === "Escape" &&

    regionModal.classList.contains("open")

  ) {

    closeRegionModal();

    return;

  }


  /* NAVEGACIÓN ENTRE DIAPOSITIVAS */

  if (isInput) return;

  if (regionModal.classList.contains("open")) return;


  if (event.key === "ArrowRight") {

    showSlide(currentSlide + 1);

  }

  if (event.key === "ArrowLeft") {

    showSlide(currentSlide - 1);

  }

});


/* =========================================
   INICIALIZACIÓN
========================================= */


showSlide(0);

