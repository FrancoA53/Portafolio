<<<<<<< HEAD
// ===== State =====
let currentLanguage = "es";
let currentTheme = "light";
let currentFilter = "Todos";
let vantaEffect = null;

// ===== Data (EDITÁ A GUSTO) =====
const skills = [
  {
    name: "Crestron",
    icon: "./Assets/Imagenes/crestron.png",
    description: {
      es: "Programación e integración de control AV: salas, automatización, señales, endpoints y operación para el usuario.",
      en: "AV control programming and integration: rooms, automation, signal flow, endpoints, and user operation.",
    },
  },
  {
    name: "Biamp",
    icon: "./Assets/Imagenes/biamp.png",
    description: {
      es: "Diseño y configuración de DSP: ruteo, matrices, AEC, presets, niveles y puesta a punto en sala.",
      en: "DSP design and configuration: routing, matrices, AEC, presets, levels, and room tuning.",
    },
  },
  {
    name: "Shure",
    icon: "./Assets/Imagenes/shure.png",
    description: {
      es: "Sistemas de microfonía y audio en red: configuración, ganancia, RF/coord., monitoreo y troubleshooting.",
      en: "Microphone systems and audio networking: setup, gain staging, RF/coord., monitoring and troubleshooting.",
    },
  },
  {
    name: "Smaart",
    icon: "./Assets/Imagenes/smaart.png",
    description: {
      es: "Medición y ajuste de sistemas: RTA, IR/transfer, alineación, EQ, verificación y documentación.",
      en: "System measurement and tuning: RTA, IR/transfer, alignment, EQ, verification and documentation.",
    },
  },
  {
    name: "EASE",
    icon: "./Assets/Imagenes/EASE.png",
    description: {
      es: "Simulación acústica y cobertura: modelado, predicción, evaluación y soporte al diseño de sistema.",
      en: "Acoustic and coverage simulation: modeling, prediction, evaluation and system design support.",
    },
  },
  {
    name: "Pro Tools",
    icon: "./Assets/Imagenes/protools.png",
    description: {
      es: "Edición y producción de audio: limpieza, mezcla, entregables y flujos de trabajo profesionales.",
      en: "Audio editing and production: cleanup, mixing, deliverables and professional workflows.",
    },
  },
  {
    name: "Audacity",
    icon: "./Assets/Imagenes/audacity.png",
    description: {
      es: "Edición rápida de audio y utilidades: cortes, normalización, conversión y análisis básico.",
      en: "Quick audio editing and utilities: trimming, normalization, conversion and basic analysis.",
    },
  },
  {
    name: "Python",
    icon: "./Assets/Imagenes/python.png",
    description: {
      es: "Automatización y herramientas: scripts para validación, parsing, reportes, integraciones y tests.",
      en: "Automation and tooling: scripts for validation, parsing, reporting, integrations and testing.",
    },
  },
  {
    name: "MATLAB",
    icon: "./Assets/Imagenes/matlab.png",
    description: {
      es: "Análisis y procesamiento de señales: prototipado DSP, análisis de mediciones y modelado.",
      en: "Signal analysis and processing: DSP prototyping, measurement analysis and modeling.",
    },
  },
  {
    name: "Arduino",
    icon: "./Assets/Imagenes/arduino.png",
    description: {
      es: "Prototipado e interfaces: sensores, GPIO, automatizaciones pequeñas y pruebas de concepto.",
      en: "Prototyping and interfaces: sensors, GPIO, small automations and proof-of-concepts.",
    },
  },
  {
    name: "AutoCAD",
    icon: "./Assets/Imagenes/autocad.png",
    description: {
      es: "Planos y documentación técnica: layouts, simbología, instalaciones y coordinación con obra.",
      en: "Technical drawings and documentation: layouts, symbols, installations and construction coordination.",
    },
  },
  {
    name: "Revit",
    icon: "./Assets/Imagenes/revit.png",
    description: {
      es: "Coordinación BIM: modelado y coordinación de canalizaciones, racks y dispositivos AV.",
      en: "BIM coordination: modeling and coordination of pathways, racks and AV devices.",
    },
  },
  {
    name: "SketchUp",
    icon: "./Assets/Imagenes/sketchup.png",
    description: {
      es: "Modelado 3D para coordinación y visualización de salas, racks y distribución de equipos.",
      en: "3D modeling for coordination and visualization of rooms, racks and equipment layout.",
    },
  },
  {
    name: "Altium",
    icon: "./Assets/Imagenes/altium.png",
    description: {
      es: "Diseño de PCBs y documentación electrónica: esquemáticos, layout y BOM.",
      en: "PCB design and electronics documentation: schematics, layout and BOM.",
    },
  },
  {
    name: "Multisim",
    icon: "./Assets/Imagenes/multisim.png",
    description: {
      es: "Simulación de circuitos: validación de esquemas, pruebas y análisis para prototipos.",
      en: "Circuit simulation: schematic validation, testing and analysis for prototypes.",
    },
  },
  {
    name: "COMSOL",
    icon: "./Assets/Imagenes/comsol.png",
    description: {
      es: "Simulación/multifísica: análisis de fenómenos y modelado para validación o investigación.",
      en: "Multiphysics simulation: phenomenon analysis and modeling for validation or research.",
    },
  },
  {
    name: "LaTeX",
    icon: "./Assets/Imagenes/latex.png",
    description: {
      es: "Documentación profesional: informes técnicos, memorias, anexos y entregables.",
      en: "Professional documentation: technical reports, appendices and deliverables.",
    },
  },
  {
    name: "Office",
    icon: "./Assets/Imagenes/office.png",
    description: {
      es: "Gestión y documentación: planillas, presentaciones, reportes y coordinación.",
      en: "Project documentation: spreadsheets, presentations, reports and coordination.",
    },
  },
];



const projects = [
  {
    id: 1,
    title: { es: "Sala AV - Automatización", en: "AV Room - Automation" },
    description: {
      es: "Programación e integración de control para una sala AV: automatización, escenas, operación simple y validación en puesta en marcha.",
      en: "Control programming and integration for an AV room: automation, scenes, user-friendly operation and commissioning validation.",
    },
    branch: { es: "Control", en: "Control" },
    technologies: ["Crestron", "Biamp", "Shure", "Smaart", "Audacity"],
    image: "./Assets/Imagenes/sala-av.jpeg",
    link: "./Assets/PDF/sala-av.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  
  {
    id: 2,
    title: { es: "Práctica profesional supervisada", en: "Supervised Professional Practice" },
    description: {
      es: "Desarrollo e integración de soluciones orientadas a DSP/control, con enfoque en pruebas, documentación y puesta en marcha.",
      en: "DSP/control-oriented development and integration, focused on testing, documentation and commissioning.",
    },
    branch: { es: "DSP", en: "DSP" },
    technologies: ["Crestron", "Multisim", "Altium", "Shure"],
    image: "./Assets/Imagenes/pps.jpeg",
    link: "./Assets/PDF/PPS.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 3,
    title: { es: "Compresor VCA", en: "VCA Compressor" },
    description: {
      es: "Diseño y documentación de un compresor VCA: simulación, desarrollo electrónico y planos para implementación.",
      en: "VCA compressor design and documentation: simulation, electronics development and implementation drawings.",
    },
    branch: { es: "DSP", en: "DSP" },
    technologies: ["Multisim", "Altium", "AutoCAD"],
    image: "./Assets/Imagenes/vca.jpeg",
    link: "./Assets/PDF/VCA.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 4,
    title: { es: "Auditorio Niccolò Paganini", en: "Niccolò Paganini Auditorium" },
    description: {
      es: "Modelado y diseño acústico del auditorio: documentación, simulación, verificación y criterios de acondicionamiento.",
      en: "Auditorium acoustic modeling and design: documentation, simulation, verification and treatment criteria.",
    },
    branch: { es: "Acústica", en: "Acoustics" },
    technologies: ["AutoCAD", "Revit", "SketchUp", "Smaart", "EASE", "Audacity"],
    image: "./Assets/Imagenes/niccolo.jpeg",
    link: "./Assets/PDF/niccolo.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 5,
    title: { es: "Soka Gakkai", en: "Soka Gakkai" },
    description: {
      es: "Relevamiento y análisis acústico: mediciones, simulación y documentación técnica del espacio.",
      en: "Acoustic survey and analysis: measurements, simulation and technical documentation of the venue.",
    },
    branch: { es: "Acústica", en: "Acoustics" },
    technologies: ["Audacity", "Smaart", "EASE", "SketchUp", "AutoCAD", "Revit"],
    image: "./Assets/Imagenes/soka.jpg",
    link: "./Assets/PDF/Sokka.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 6,
    title: { es: "Medición de sistema electroacústico", en: "Electroacoustic System Measurement" },
    description: {
      es: "Medición y verificación de sistema electroacústico: criterios, ajuste y documentación de resultados.",
      en: "Electroacoustic system measurement and verification: criteria, tuning and results documentation.",
    },
    branch: { es: "Electroacústica", en: "Electroacoustics" },
    technologies: ["Smaart", "EASE", "Audacity", "SketchUp"],
    image: "./Assets/Imagenes/electroacustico.jpeg",
    link: "./Assets/PDF/medicion de sistema electroacustico.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 7,
    title: { es: "Procesador de RIR", en: "RIR Processor" },
    description: {
      es: "Herramienta en Python para análisis/procesamiento de respuestas al impulso y cálculo de métricas acústicas.",
      en: "Python tool for impulse-response processing/analysis and acoustic metrics calculation.",
    },
    branch: { es: "DSP", en: "DSP" },
    technologies: ["Python", "LaTeX"],
    image: "./Assets/Imagenes/rir.jpg",
    link: "./Assets/PDF/RIR.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 8,
    title: { es: "Medición de directividad", en: "Directivity Measurement" },
    description: {
      es: "Medición y análisis de directividad: planificación, toma de datos, procesamiento y documentación.",
      en: "Directivity measurement and analysis: planning, data capture, processing and documentation.",
    },
    branch: { es: "Electroacústica", en: "Electroacoustics" },
    technologies: ["Smaart", "Audacity", "SketchUp", "AutoCAD"],
    image: "./Assets/Imagenes/directividad.jpeg",
    link: "./Assets/PDF/medicion de directividad.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 9,
    title: { es: "Diseño acústico de sala de conciertos", en: "Acoustic Design of a Concert Hall" },
    description: {
      es: "Diseño acústico de sala de conciertos: modelado geométrico, simulación y evaluación de desempeño.",
      en: "Concert hall acoustic design: geometric modeling, simulation and performance evaluation.",
    },
    branch: { es: "Acústica", en: "Acoustics" },
    technologies: ["AutoCAD", "SketchUp", "EASE"],
    image: "./Assets/Imagenes/concert-hall.jpg",
    link: "./Assets/PDF/diseño de sala de concierto.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 10,
    title: { es: "Diseño de Control Room", en: "Control Room Design" },
    description: {
      es: "Diseño acústico y geométrico de una control room: simulación, layout y documentación para implementación.",
      en: "Control room acoustic and geometric design: simulation, layout and implementation documentation.",
    },
    branch: { es: "Acústica", en: "Acoustics" },
    technologies: ["COMSOL", "AutoCAD", "SketchUp", "EASE"],
    image: "./Assets/Imagenes/control-room.png",
    link: "./Assets/PDF/Control room.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 11,
    title: { es: "Medición del coeficiente de absorción", en: "Absorption Coefficient Measurement" },
    description: {
      es: "Medición y análisis del coeficiente de absorción de una muestra: procedimiento, medición, análisis y reporte.",
      en: "Sample absorption coefficient measurement and analysis: procedure, measurement, analysis and reporting.",
    },
    branch: { es: "Acústica", en: "Acoustics" },
    technologies: ["Smaart", "Audacity", "AutoCAD", "SketchUp"],
    image: "./Assets/Imagenes/absorcion.jpg",
    link: "./Assets/PDF/MEDICION DEL COEFICIENTE DE ABSORCION.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
];


const education = [
  {
    id: 3,
    degree: { es: "Ingeniería de Sonido (Tesista)", en: "Sound Engineering (Thesis Student)" },
    institution: { es: "Universidad Nacional de Tres de Febrero (UNTREF)", en: "Universidad Nacional de Tres de Febrero (UNTREF)" },
    years: "Presente",
    description: {
      es: "La Ingeniería de Sonido aborda el estudio del fenómeno sonoro y las ondas mecánicas, cubriendo desde su producción hasta su recepción. La formación incluye investigación y emprendedorismo, con enfoque en tres áreas: Ciencias de la Grabación, Electrónica de Audio, y Acústica y Electroacústica, abarcando técnicas de registro, diseño de equipamiento y tratamiento acústico.",
      en: "Sound Engineering studies sound phenomena and mechanical waves, from their production to their reception. The training includes research and entrepreneurship, with focus on Recording Sciences, Audio Electronics, and Acoustics & Electroacoustics, covering recording techniques, equipment design, and acoustic treatment.",
    },
  },
  {
    id: 2,
    degree: { es: "Técnico en Grabación y Sonido", en: "Recording and Sound Technician" },
    institution: { es: "Universidad Nacional de Tres de Febrero (UNTREF)", en: "Universidad Nacional de Tres de Febrero (UNTREF)" },
    years: "2017 - 2023",
    description: {
      es: "Técnico especializado en grabación y sonido, con capacidad para operar equipamiento en vivo, en estudios de grabación y masterización, y en emisoras de radio y TV. Habilidad en la calibración de sistemas de reamplificación y en el diseño, instalación y mantenimiento de sistemas electroacústicos para sonorización en diversos entornos.",
      en: "Specialized technician in recording and sound, capable of operating equipment for live events, recording/mastering studios, and radio/TV stations. Skilled in sound reinforcement system calibration and in the design, installation, and maintenance of electroacoustic sound systems across diverse environments.",
    },
  },
  {
    id: 1,
    degree: { es: "Técnico Mecánico - Eléctrico", en: "Mechanical - Electrical Technician" },
    institution: { es: "Instituto Técnico Nuestra Señora de Fátima", en: "Instituto Técnico Nuestra Señora de Fátima" },
    years: "2010 - 2016",
    description: {
      es: "Formación técnica con base en electricidad y mecánica: electricidad domiciliaria y básica, armado y verificación de circuitos, mediciones con instrumentos, interpretación de planos y mecanizado/trabajo de materiales. Enfoque práctico orientado a instalación, mantenimiento y resolución de fallas.",
      en: "Technical training with a strong electrical/mechanical foundation: residential/basic electrical work, circuit assembly and verification, measurements with instruments, reading technical drawings, and materials machining/work. Practical approach aimed at installation, maintenance, and troubleshooting.",
    },
  },
];


const experience = [
  {
    id: 4,
    position: { es: "Programador AV | Integrador de sistema", en: "AV Programmer | Systems Integrator" },
    company: { es: "Proyecciones Digitales", en: "Proyecciones Digitales" },
    location: { es: "Argentina", en: "Argentina" },
    period: { es: "Nov 2025 - Actualidad", en: "Nov 2025 - Present" },
    description: {
      es: "Actualmente participo en la integración y puesta en marcha de sistemas audiovisuales, asegurando una operación estable y confiable. Trabajo en la configuración de equipos, validación de flujos de señal (audio/video/control) y pruebas funcionales en sitio. También realizo resolución de incidencias, soporte durante la implementación y documentación técnica para la entrega al usuario final.",
      en: "I currently take part in AV systems integration and commissioning, ensuring a stable and reliable operation. I work on equipment configuration, validation of signal flows (audio/video/control), and on-site functional testing. I also handle troubleshooting, deployment support, and technical documentation for client handover.",
    },
  },
  {
    id: 3,
    position: { es: "Gerencia de Ingeniería", en: "Engineering Management" },
    company: { es: "Soundtec S.R.L", en: "Soundtec S.R.L" },
    location: { es: "CABA, Buenos Aires, Argentina", en: "Buenos Aires (CABA), Argentina" },
    period: { es: "2023 - 2025", en: "2023 - 2025" },
    description: {
      es: "Participé en la instalación y configuración de equipos audiovisuales y sistemas CCTV, integrando audio Dante en redes. Realicé configuración y optimización de red para integrar dispositivos AV, documentación de trabajos en obra, elaboración de planos técnicos de tableros y racks en AutoCAD, diseño de diagramas de flujo e implementación/instalación de sistemas Crestron y cableado de red (CAT 5/6/6A).",
      en: "I work on the installation and configuration of audiovisual equipment and CCTV systems, integrating Dante audio over networks. I handle network configuration/optimization for AV integration, on-site documentation, technical drawings for panels and racks in AutoCAD, flow diagrams, and the implementation/installation of Crestron systems and network cabling (CAT 5/6/6A).",
    },
  },
  {
    id: 2,
    position: { es: "Maestro de enseñanzas prácticas", en: "Practical Instructor" },
    company: { es: "Instituto Técnico Nuestra Señora de Fátima", en: "Instituto Técnico Nuestra Señora de Fátima" },
    location: { es: "Argentina", en: "Argentina" },
    period: { es: "2023", en: "2023" },
    description: {
      es: "Me desempeñé enseñando electricidad básica y domiciliaria, acompañando prácticas de taller, promoviendo normas de seguridad y buenas prácticas. También coordiné grupos de trabajo y guié la resolución de problemas durante las prácticas.",
      en: "I taught basic and residential electricity, supporting workshop practice sessions while reinforcing safety and best practices. I also coordinated groups and guided troubleshooting during hands-on activities.",
    },
  },
  {
    id: 1,
    position: { es: "Documentalista de Proyectos", en: "Project Documentalist" },
    company: { es: "Multiradio S.A", en: "Multiradio S.A" },
    location: { es: "CABA, Buenos Aires, Argentina", en: "Buenos Aires (CABA), Argentina" },
    period: { es: "2016", en: "2016" },
    description: {
      es: "Realicé diseño de informes de instalación de antenas de telecomunicación y diseño de estructuras en AutoCAD. Además, evalué trabajos realizados conforme a obra, aportando soporte documental y técnico a proyectos de campo.",
      en: "I designed telecom antenna installation reports and structural drawings in AutoCAD. I also evaluated as-built work, providing technical and documentation support for field projects.",
    },
  },
];


const contactInfo = [
  {
    icon: "linkedin",
    title: { es: "LinkedIn", en: "LinkedIn" },
    value: "Franco Areco",
    link: "https://www.linkedin.com/in/francoareco/",
  },
  {
    icon: "mail",
    title: { es: "Correo", en: "Email" },
    value: "francoareco53@gmail.com",
    link: "mailto:francoareco53@gmail.com",
  },
  {
    icon: "github",
    title: { es: "GitHub", en: "GitHub" },
    value: "@FrancoA53",
    link: "https://github.com/FrancoA53",
  },
   {
    icon: "location",
    title: { es: "Ubicación", en: "Location" },
    value: "Flores, Buenos Aires, Argentina",
    link: "https://maps.app.goo.gl/w8upmVxA5dohJTbU7",
  },
];

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTheme();
  initLanguage();

  initSkills();
  initProjects();
  initEducation();
  initExperience();
  initContact();
});

// ✅ Inicializar Vanta cuando termine de cargar TODO (incluye scripts)
window.addEventListener("load", () => {
  initVanta();
});

// ===== Navigation =====
function initNavigation() {
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navigation");
    if (!nav) return;
    if (window.scrollY > 50) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  });

  const languageToggle = document.getElementById("language-toggle");
  const languageMenu = document.getElementById("language-menu");

  if (languageToggle && languageMenu) {
    languageToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      languageMenu.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      languageMenu.classList.remove("show");
    });
  }
}

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== Theme =====
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  const moonIcon = themeToggle.querySelector(".moon-icon");
  const sunIcon = themeToggle.querySelector(".sun-icon");

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    moonIcon?.classList.toggle("hidden", theme === "dark");
    sunIcon?.classList.toggle("hidden", theme === "light");

    // Actualiza Vanta si ya está creado
    refreshVantaTheme();
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  themeToggle.addEventListener("click", () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// ===== Language =====
function initLanguage() {
  const savedLang = localStorage.getItem("language");
  if (savedLang) currentLanguage = savedLang;
  else {
    const browserLang = navigator.language || (navigator.languages && navigator.languages[0]) || "en";
    currentLanguage = browserLang.startsWith("es") ? "es" : "en";
  }
  updateLanguage();
}

function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  updateLanguage();
  document.getElementById("language-menu")?.classList.remove("show");
  localStorage.setItem("language", lang);
}

function updateLanguage() {
  document.querySelectorAll("[data-es][data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${currentLanguage}`);
  });

  // reset filtro (primer botón)
  document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
  const first = document.querySelector(".filter-btn");
  if (first) {
    first.classList.add("active");
    currentFilter = first.getAttribute(`data-${currentLanguage}`);
  }

  renderProjects();
  renderEducation();
  renderExperience();
  renderContact();
}

// ===== VANTA.NET (Garantizado) =====
function initVanta() {
  const el = document.getElementById("vanta-bg");
  if (!el) {
    console.error("No existe #vanta-bg en el HTML.");
    return;
  }

  const okThree = !!window.THREE;
  const okVanta = !!window.VANTA;
  const okNet = !!(window.VANTA && window.VANTA.NET);

  // Si esto falla, es ruta/orden/nombre del archivo (pero tu test ya anduvo)
  if (!okThree || !okVanta || !okNet) {
    console.error("VANTA.NET no está cargado. Revisá rutas/orden de scripts en index.html.");
    console.log("THREE:", okThree, "VANTA:", okVanta, "NET:", okNet);
    return;
  }

  // Destruir si ya existe
  if (vantaEffect && typeof vantaEffect.destroy === "function") {
    vantaEffect.destroy();
    vantaEffect = null;
  }

  const isDark = document.documentElement.classList.contains("dark");

  // Light: fondo claro + líneas oscuras suaves
  const bg = isDark ? 0x070a12 : 0xf6f7fb;
  const color = isDark ? 0x00d1ff : 0x1f2937; // dark cyan vs graphite
  const color2 = isDark ? 0xa78bfa : 0x7c3aed; // violet
  
  vantaEffect = window.VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
  
    backgroundColor: bg,
    color: color,
    // algunos builds soportan color2:
    color2: color2,
  
    points: 10.0,
    maxDistance: 20.0,
    spacing: 16.0,
    showDots: true,
  });  
}

function refreshVantaTheme() {
  // Re-init solo si Vanta ya está cargado y el div existe
  if (!document.getElementById("vanta-bg")) return;
  if (!(window.VANTA && window.VANTA.NET)) return;
  initVanta();
}

// ===== Skills carousel + tooltip =====
let autoScrollRAF = null;
let isPaused = false;
let currentTranslate = 0;
let isDragging = false;
let startX = 0;
let isTooltipOpen = false;
let hasDragged = false;
let currentTooltip = null;

function initSkills() {
  const track = document.getElementById("skills-track");
  const carousel = document.getElementById("skills-carousel");
  if (!track || !carousel) return;

  track.innerHTML = "";
  const doubled = [...skills, ...skills];
  doubled.forEach((s) => track.appendChild(createSkillCard(s)));

  startAutoScroll();

  if (window.innerWidth >= 768) {
    carousel.addEventListener("mouseenter", () => { isPaused = true; carousel.style.cursor = "grab"; });
    carousel.addEventListener("mouseleave", () => { isPaused = false; });
  }

  carousel.addEventListener("mousedown", (e) => {
    if (window.innerWidth < 768) return;
    isDragging = true;
    isPaused = true;
    startX = e.clientX;
    hasDragged = false;
    carousel.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging || window.innerWidth < 768) return;
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 3) hasDragged = true;

    currentTranslate += deltaX;
    startX = e.clientX;

    const half = track.scrollWidth / 2;
    if (currentTranslate > 0) currentTranslate = -half;
    else if (Math.abs(currentTranslate) >= half) currentTranslate = 0;

    track.style.transform = `translateX(${currentTranslate}px)`;
  });

  document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    isPaused = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("touchstart", (e) => {
    isDragging = true;
    isPaused = true;
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    currentTranslate += deltaX;
    startX = e.touches[0].clientX;

    const half = track.scrollWidth / 2;
    if (currentTranslate > 0) currentTranslate = -half;
    else if (Math.abs(currentTranslate) >= half) currentTranslate = 0;

    track.style.transform = `translateX(${currentTranslate}px)`;
  });

  carousel.addEventListener("touchend", () => {
    isDragging = false;
    isPaused = false;
  });
}

function createSkillCard(skill) {
  const card = document.createElement("div");
  card.className = "skill-card";
  card.innerHTML = `
    <div class="skill-icon"><img src="${skill.icon}" alt="${skill.name} icon" /></div>
    <div class="skill-name">${skill.name}</div>
  `;
  card.addEventListener("click", () => {
    if (!hasDragged) showSkillTooltip(skill, card);
  });
  return card;
}

function closeCurrentTooltip() {
  if (!currentTooltip) return;
  currentTooltip.style.display = "none";
  document.querySelector(".skill-card-active")?.classList.remove("skill-card-active");
  isTooltipOpen = false;
  document.removeEventListener("click", currentTooltip.handleOutsideClick);
  document.removeEventListener("keydown", currentTooltip.handleEscape);
  currentTooltip = null;
}

function showSkillTooltip(skill, card) {
  closeCurrentTooltip();

  const tooltip = document.getElementById("skill-tooltip");
  const title = document.getElementById("skill-tooltip-title");
  const desc = document.getElementById("skill-tooltip-description");
  const closeBtn = document.getElementById("skill-tooltip-close");
  if (!tooltip || !title || !desc || !closeBtn) return;

  title.textContent = skill.name;
  desc.textContent = skill.description[currentLanguage];

  isTooltipOpen = true;
  card.classList.add("skill-card-active");

  tooltip.style.display = "block";
  tooltip.style.visibility = "hidden";
  const th = tooltip.offsetHeight;
  tooltip.style.display = "none";
  tooltip.style.visibility = "visible";

  const rect = card.getBoundingClientRect();
  const offset = 18;

  let top;
  if (rect.top > th + offset) {
    top = rect.top - th - offset;
    tooltip.classList.remove("top");
  } else {
    top = rect.bottom + offset;
    tooltip.classList.add("top");
  }

  top = Math.max(0, Math.min(top, window.innerHeight - th));
  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${rect.left + rect.width / 2 - 125}px`;
  tooltip.style.display = "block";

  currentTooltip = tooltip;
  currentTooltip.handleOutsideClick = (e) => {
    if (!tooltip.contains(e.target) && !card.contains(e.target)) closeCurrentTooltip();
  };
  currentTooltip.handleEscape = (e) => {
    if (e.key === "Escape") closeCurrentTooltip();
  };

  closeBtn.onclick = closeCurrentTooltip;
  document.addEventListener("click", currentTooltip.handleOutsideClick);
  document.addEventListener("keydown", currentTooltip.handleEscape);
}

function startAutoScroll() {
  const track = document.getElementById("skills-track");
  if (!track) return;

  if (autoScrollRAF) cancelAnimationFrame(autoScrollRAF);

  function animate() {
    if (!isPaused && !isDragging && !isTooltipOpen) {
      currentTranslate -= 0.4;
      const half = track.scrollWidth / 2;
      if (Math.abs(currentTranslate) >= half) currentTranslate = 0;
      track.style.transform = `translateX(${currentTranslate}px)`;
    }
    autoScrollRAF = requestAnimationFrame(animate);
  }
  animate();
}

// ===== Projects =====
function initProjects() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute(`data-${currentLanguage}`);
      renderProjects();
    });
  });

  const active = document.querySelector(".filter-btn.active");
  if (active) currentFilter = active.getAttribute(`data-${currentLanguage}`);
  renderProjects();
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtered = projects.filter((p) => {
    if (currentFilter === "Todos" || currentFilter === "All") return true;
    return p.branch[currentLanguage] === currentFilter;
  });

  filtered.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title[currentLanguage]}" class="project-image">
      <div class="project-header">
        <div class="project-title-row">
          <h3 class="project-title">${project.title[currentLanguage]}</h3>
          <span class="badge">${project.branch[currentLanguage]}</span>
        </div>
        <p class="project-description">${project.description[currentLanguage]}</p>
      </div>
      <div class="project-content">
        <div class="project-tags">
          ${project.technologies.map((t) => `<span class="badge badge-outline">${t}</span>`).join("")}
        </div>
      </div>
      <div class="project-footer">
        <a href="${project.link}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
          ${project.buttonText[currentLanguage]}
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== Education =====
function initEducation() { renderEducation(); }
function renderEducation() {
  const timeline = document.getElementById("education-timeline");
  if (!timeline) return;
  timeline.innerHTML = "";

  education.forEach((item) => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <div class="timeline-icon">
        <svg class="icon" style="width: 2rem; height: 2rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      </div>
      <div class="timeline-content">
        <div class="timeline-year">${item.years}</div>
        <h3 class="timeline-degree">${item.degree[currentLanguage]}</h3>
        <p class="timeline-institution">${item.institution[currentLanguage]}</p>
        <p class="timeline-description">${item.description[currentLanguage]}</p>
      </div>
    `;
    timeline.appendChild(el);
  });
}

// ===== Experience =====
function initExperience() { renderExperience(); }
function renderExperience() {
  const list = document.getElementById("experience-list");
  if (!list) return;
  list.innerHTML = "";

  experience.forEach((item) => {
    const el = document.createElement("div");
    el.className = "experience-item";
    el.innerHTML = `
      <div class="experience-icon">
        <svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      </div>

      <div class="experience-content">
        <div class="experience-header">
          <div>
            <h3 class="experience-position">${item.position[currentLanguage]}</h3>
            <p class="experience-company">${item.company[currentLanguage]}</p>
          </div>
          <div class="experience-meta">
            <p>${item.period[currentLanguage]}</p>
            <p>${item.location[currentLanguage]}</p>
          </div>
        </div>
        <p class="experience-description">${item.description[currentLanguage]}</p>
      </div>
    `;
    list.appendChild(el);
  });
}

// ===== Contact =====
function initContact() { renderContact(); }
function renderContact() {
  const grid = document.getElementById("contact-grid");
  if (!grid) return;
  grid.innerHTML = "";

const icons = {
    mail: `<svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
             <polyline points="22,6 12,13 2,6"></polyline>
           </svg>`,
    linkedin: `<svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                 <rect x="2" y="9" width="4" height="12"></rect>
                 <circle cx="4" cy="4" r="2"></circle>
               </svg>`,
    github: `<svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
             </svg>`,
    location: `<svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                 <circle cx="12" cy="10" r="3"></circle>
               </svg>`,
  }

  contactInfo.forEach((item) => {
    const card = document.createElement(item.link ? "a" : "div");
    card.className = "contact-card";
    if (item.link) {
      card.href = item.link;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }
    card.innerHTML = `
      <div class="contact-header">
        <div class="contact-icon">${icons[item.icon] || ""}</div>
        <h3 class="contact-title">${item.title[currentLanguage]}</h3>
      </div>
      <p class="contact-value">${item.value}</p>
    `;
    grid.appendChild(card);
  });
}
=======
// ===== State =====
let currentLanguage = "es";
let currentTheme = "light";
let currentFilter = "Todos";
let vantaEffect = null;

// ===== Data (EDITÁ A GUSTO) =====
const skills = [
  {
    name: "Crestron",
    icon: "./Assets/Imagenes/crestron.png",
    description: {
      es: "Programación e integración de control AV: salas, automatización, señales, endpoints y operación para el usuario.",
      en: "AV control programming and integration: rooms, automation, signal flow, endpoints, and user operation.",
    },
  },
  {
    name: "Biamp",
    icon: "./Assets/Imagenes/biamp.png",
    description: {
      es: "Diseño y configuración de DSP: ruteo, matrices, AEC, presets, niveles y puesta a punto en sala.",
      en: "DSP design and configuration: routing, matrices, AEC, presets, levels, and room tuning.",
    },
  },
  {
    name: "Shure",
    icon: "./Assets/Imagenes/shure.png",
    description: {
      es: "Sistemas de microfonía y audio en red: configuración, ganancia, RF/coord., monitoreo y troubleshooting.",
      en: "Microphone systems and audio networking: setup, gain staging, RF/coord., monitoring and troubleshooting.",
    },
  },
  {
    name: "Smaart",
    icon: "./Assets/Imagenes/smaart.png",
    description: {
      es: "Medición y ajuste de sistemas: RTA, IR/transfer, alineación, EQ, verificación y documentación.",
      en: "System measurement and tuning: RTA, IR/transfer, alignment, EQ, verification and documentation.",
    },
  },
  {
    name: "EASE",
    icon: "./Assets/Imagenes/EASE.png",
    description: {
      es: "Simulación acústica y cobertura: modelado, predicción, evaluación y soporte al diseño de sistema.",
      en: "Acoustic and coverage simulation: modeling, prediction, evaluation and system design support.",
    },
  },
  {
    name: "Pro Tools",
    icon: "./Assets/Imagenes/protools.png",
    description: {
      es: "Edición y producción de audio: limpieza, mezcla, entregables y flujos de trabajo profesionales.",
      en: "Audio editing and production: cleanup, mixing, deliverables and professional workflows.",
    },
  },
  {
    name: "Audacity",
    icon: "./Assets/Imagenes/audacity.png",
    description: {
      es: "Edición rápida de audio y utilidades: cortes, normalización, conversión y análisis básico.",
      en: "Quick audio editing and utilities: trimming, normalization, conversion and basic analysis.",
    },
  },
  {
    name: "Python",
    icon: "./Assets/Imagenes/python.png",
    description: {
      es: "Automatización y herramientas: scripts para validación, parsing, reportes, integraciones y tests.",
      en: "Automation and tooling: scripts for validation, parsing, reporting, integrations and testing.",
    },
  },
  {
    name: "MATLAB",
    icon: "./Assets/Imagenes/matlab.png",
    description: {
      es: "Análisis y procesamiento de señales: prototipado DSP, análisis de mediciones y modelado.",
      en: "Signal analysis and processing: DSP prototyping, measurement analysis and modeling.",
    },
  },
  {
    name: "Arduino",
    icon: "./Assets/Imagenes/arduino.png",
    description: {
      es: "Prototipado e interfaces: sensores, GPIO, automatizaciones pequeñas y pruebas de concepto.",
      en: "Prototyping and interfaces: sensors, GPIO, small automations and proof-of-concepts.",
    },
  },
  {
    name: "AutoCAD",
    icon: "./Assets/Imagenes/autocad.png",
    description: {
      es: "Planos y documentación técnica: layouts, simbología, instalaciones y coordinación con obra.",
      en: "Technical drawings and documentation: layouts, symbols, installations and construction coordination.",
    },
  },
  {
    name: "Revit",
    icon: "./Assets/Imagenes/revit.png",
    description: {
      es: "Coordinación BIM: modelado y coordinación de canalizaciones, racks y dispositivos AV.",
      en: "BIM coordination: modeling and coordination of pathways, racks and AV devices.",
    },
  },
  {
    name: "SketchUp",
    icon: "./Assets/Imagenes/sketchup.png",
    description: {
      es: "Modelado 3D para coordinación y visualización de salas, racks y distribución de equipos.",
      en: "3D modeling for coordination and visualization of rooms, racks and equipment layout.",
    },
  },
  {
    name: "Altium",
    icon: "./Assets/Imagenes/altium.png",
    description: {
      es: "Diseño de PCBs y documentación electrónica: esquemáticos, layout y BOM.",
      en: "PCB design and electronics documentation: schematics, layout and BOM.",
    },
  },
  {
    name: "Multisim",
    icon: "./Assets/Imagenes/multisim.png",
    description: {
      es: "Simulación de circuitos: validación de esquemas, pruebas y análisis para prototipos.",
      en: "Circuit simulation: schematic validation, testing and analysis for prototypes.",
    },
  },
  {
    name: "COMSOL",
    icon: "./Assets/Imagenes/comsol.png",
    description: {
      es: "Simulación/multifísica: análisis de fenómenos y modelado para validación o investigación.",
      en: "Multiphysics simulation: phenomenon analysis and modeling for validation or research.",
    },
  },
  {
    name: "LaTeX",
    icon: "./Assets/Imagenes/latex.png",
    description: {
      es: "Documentación profesional: informes técnicos, memorias, anexos y entregables.",
      en: "Professional documentation: technical reports, appendices and deliverables.",
    },
  },
  {
    name: "Office",
    icon: "./Assets/Imagenes/office.png",
    description: {
      es: "Gestión y documentación: planillas, presentaciones, reportes y coordinación.",
      en: "Project documentation: spreadsheets, presentations, reports and coordination.",
    },
  },
];



const projects = [
  {
    id: 1,
    title: { es: "Sala AV - Automatización", en: "AV Room - Automation" },
    description: {
      es: "Programación e integración de control para una sala AV: automatización, escenas, operación simple y validación en puesta en marcha.",
      en: "Control programming and integration for an AV room: automation, scenes, user-friendly operation and commissioning validation.",
    },
    branch: { es: "Control", en: "Control" },
    technologies: ["Crestron", "Biamp", "Shure", "Smaart", "Audacity"],
    image: "./Assets/Imagenes/sala-av.jpeg",
    link: "./Assets/PDF/sala-av.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  
  {
    id: 2,
    title: { es: "Práctica profesional supervisada", en: "Supervised Professional Practice" },
    description: {
      es: "Desarrollo e integración de soluciones orientadas a DSP/control, con enfoque en pruebas, documentación y puesta en marcha.",
      en: "DSP/control-oriented development and integration, focused on testing, documentation and commissioning.",
    },
    branch: { es: "DSP", en: "DSP" },
    technologies: ["Crestron", "Multisim", "Altium", "Shure"],
    image: "./Assets/Imagenes/pps.jpeg",
    link: "./Assets/PDF/PPS.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 3,
    title: { es: "Compresor VCA", en: "VCA Compressor" },
    description: {
      es: "Diseño y documentación de un compresor VCA: simulación, desarrollo electrónico y planos para implementación.",
      en: "VCA compressor design and documentation: simulation, electronics development and implementation drawings.",
    },
    branch: { es: "DSP", en: "DSP" },
    technologies: ["Multisim", "Altium", "AutoCAD"],
    image: "./Assets/Imagenes/vca.jpeg",
    link: "./Assets/PDF/VCA.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 4,
    title: { es: "Auditorio Niccolò Paganini", en: "Niccolò Paganini Auditorium" },
    description: {
      es: "Modelado y diseño acústico del auditorio: documentación, simulación, verificación y criterios de acondicionamiento.",
      en: "Auditorium acoustic modeling and design: documentation, simulation, verification and treatment criteria.",
    },
    branch: { es: "Acústica", en: "Acoustics" },
    technologies: ["AutoCAD", "Revit", "SketchUp", "Smaart", "EASE", "Audacity"],
    image: "./Assets/Imagenes/niccolo.jpeg",
    link: "./Assets/PDF/niccolo.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 5,
    title: { es: "Soka Gakkai", en: "Soka Gakkai" },
    description: {
      es: "Relevamiento y análisis acústico: mediciones, simulación y documentación técnica del espacio.",
      en: "Acoustic survey and analysis: measurements, simulation and technical documentation of the venue.",
    },
    branch: { es: "Acústica", en: "Acoustics" },
    technologies: ["Audacity", "Smaart", "EASE", "SketchUp", "AutoCAD", "Revit"],
    image: "./Assets/Imagenes/soka.jpg",
    link: "./Assets/PDF/Sokka.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 6,
    title: { es: "Medición de sistema electroacústico", en: "Electroacoustic System Measurement" },
    description: {
      es: "Medición y verificación de sistema electroacústico: criterios, ajuste y documentación de resultados.",
      en: "Electroacoustic system measurement and verification: criteria, tuning and results documentation.",
    },
    branch: { es: "Electroacústica", en: "Electroacoustics" },
    technologies: ["Smaart", "EASE", "Audacity", "SketchUp"],
    image: "./Assets/Imagenes/electroacustico.jpeg",
    link: "./Assets/PDF/medicion de sistema electroacustico.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 7,
    title: { es: "Procesador de RIR", en: "RIR Processor" },
    description: {
      es: "Herramienta en Python para análisis/procesamiento de respuestas al impulso y cálculo de métricas acústicas.",
      en: "Python tool for impulse-response processing/analysis and acoustic metrics calculation.",
    },
    branch: { es: "DSP", en: "DSP" },
    technologies: ["Python", "LaTeX"],
    image: "./Assets/Imagenes/rir.jpg",
    link: "./Assets/PDF/RIR.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 8,
    title: { es: "Medición de directividad", en: "Directivity Measurement" },
    description: {
      es: "Medición y análisis de directividad: planificación, toma de datos, procesamiento y documentación.",
      en: "Directivity measurement and analysis: planning, data capture, processing and documentation.",
    },
    branch: { es: "Electroacústica", en: "Electroacoustics" },
    technologies: ["Smaart", "Audacity", "SketchUp", "AutoCAD"],
    image: "./Assets/Imagenes/directividad.jpeg",
    link: "./Assets/PDF/medicion de directividad.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 9,
    title: { es: "Diseño acústico de sala de conciertos", en: "Acoustic Design of a Concert Hall" },
    description: {
      es: "Diseño acústico de sala de conciertos: modelado geométrico, simulación y evaluación de desempeño.",
      en: "Concert hall acoustic design: geometric modeling, simulation and performance evaluation.",
    },
    branch: { es: "Acústica", en: "Acoustics" },
    technologies: ["AutoCAD", "SketchUp", "EASE"],
    image: "./Assets/Imagenes/concert-hall.jpg",
    link: "./Assets/PDF/diseño de sala de concierto.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 10,
    title: { es: "Diseño de Control Room", en: "Control Room Design" },
    description: {
      es: "Diseño acústico y geométrico de una control room: simulación, layout y documentación para implementación.",
      en: "Control room acoustic and geometric design: simulation, layout and implementation documentation.",
    },
    branch: { es: "Acústica", en: "Acoustics" },
    technologies: ["COMSOL", "AutoCAD", "SketchUp", "EASE"],
    image: "./Assets/Imagenes/control-room.png",
    link: "./Assets/PDF/Control room.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
  {
    id: 11,
    title: { es: "Medición del coeficiente de absorción", en: "Absorption Coefficient Measurement" },
    description: {
      es: "Medición y análisis del coeficiente de absorción de una muestra: procedimiento, medición, análisis y reporte.",
      en: "Sample absorption coefficient measurement and analysis: procedure, measurement, analysis and reporting.",
    },
    branch: { es: "Acústica", en: "Acoustics" },
    technologies: ["Smaart", "Audacity", "AutoCAD", "SketchUp"],
    image: "./Assets/Imagenes/absorcion.jpg",
    link: "./Assets/PDF/MEDICION DEL COEFICIENTE DE ABSORCION.pdf",
    type: "external",
    buttonText: { es: "Ver", en: "View" },
  },
];


const education = [
  {
    id: 3,
    degree: { es: "Ingeniería de Sonido (Tesista)", en: "Sound Engineering (Thesis Student)" },
    institution: { es: "Universidad Nacional de Tres de Febrero (UNTREF)", en: "Universidad Nacional de Tres de Febrero (UNTREF)" },
    years: "Presente",
    description: {
      es: "La Ingeniería de Sonido aborda el estudio del fenómeno sonoro y las ondas mecánicas, cubriendo desde su producción hasta su recepción. La formación incluye investigación y emprendedorismo, con enfoque en tres áreas: Ciencias de la Grabación, Electrónica de Audio, y Acústica y Electroacústica, abarcando técnicas de registro, diseño de equipamiento y tratamiento acústico.",
      en: "Sound Engineering studies sound phenomena and mechanical waves, from their production to their reception. The training includes research and entrepreneurship, with focus on Recording Sciences, Audio Electronics, and Acoustics & Electroacoustics, covering recording techniques, equipment design, and acoustic treatment.",
    },
  },
  {
    id: 2,
    degree: { es: "Técnico en Grabación y Sonido", en: "Recording and Sound Technician" },
    institution: { es: "Universidad Nacional de Tres de Febrero (UNTREF)", en: "Universidad Nacional de Tres de Febrero (UNTREF)" },
    years: "2017 - 2023",
    description: {
      es: "Técnico especializado en grabación y sonido, con capacidad para operar equipamiento en vivo, en estudios de grabación y masterización, y en emisoras de radio y TV. Habilidad en la calibración de sistemas de reamplificación y en el diseño, instalación y mantenimiento de sistemas electroacústicos para sonorización en diversos entornos.",
      en: "Specialized technician in recording and sound, capable of operating equipment for live events, recording/mastering studios, and radio/TV stations. Skilled in sound reinforcement system calibration and in the design, installation, and maintenance of electroacoustic sound systems across diverse environments.",
    },
  },
  {
    id: 1,
    degree: { es: "Técnico Mecánico - Eléctrico", en: "Mechanical - Electrical Technician" },
    institution: { es: "Instituto Técnico Nuestra Señora de Fátima", en: "Instituto Técnico Nuestra Señora de Fátima" },
    years: "2010 - 2016",
    description: {
      es: "Formación técnica con base en electricidad y mecánica: electricidad domiciliaria y básica, armado y verificación de circuitos, mediciones con instrumentos, interpretación de planos y mecanizado/trabajo de materiales. Enfoque práctico orientado a instalación, mantenimiento y resolución de fallas.",
      en: "Technical training with a strong electrical/mechanical foundation: residential/basic electrical work, circuit assembly and verification, measurements with instruments, reading technical drawings, and materials machining/work. Practical approach aimed at installation, maintenance, and troubleshooting.",
    },
  },
];


const experience = [
  {
    id: 4,
    position: { es: "Programador AV | Integrador de sistema", en: "AV Programmer | Systems Integrator" },
    company: { es: "Proyecciones Digitales", en: "Proyecciones Digitales" },
    location: { es: "Argentina", en: "Argentina" },
    period: { es: "Nov 2025 - Actualidad", en: "Nov 2025 - Present" },
    description: {
      es: "Actualmente participo en la integración y puesta en marcha de sistemas audiovisuales, asegurando una operación estable y confiable. Trabajo en la configuración de equipos, validación de flujos de señal (audio/video/control) y pruebas funcionales en sitio. También realizo resolución de incidencias, soporte durante la implementación y documentación técnica para la entrega al usuario final.",
      en: "I currently take part in AV systems integration and commissioning, ensuring a stable and reliable operation. I work on equipment configuration, validation of signal flows (audio/video/control), and on-site functional testing. I also handle troubleshooting, deployment support, and technical documentation for client handover.",
    },
  },
  {
    id: 3,
    position: { es: "Gerencia de Ingeniería", en: "Engineering Management" },
    company: { es: "Soundtec S.R.L", en: "Soundtec S.R.L" },
    location: { es: "CABA, Buenos Aires, Argentina", en: "Buenos Aires (CABA), Argentina" },
    period: { es: "2023 - 2025", en: "2023 - 2025" },
    description: {
      es: "Participé en la instalación y configuración de equipos audiovisuales y sistemas CCTV, integrando audio Dante en redes. Realicé configuración y optimización de red para integrar dispositivos AV, documentación de trabajos en obra, elaboración de planos técnicos de tableros y racks en AutoCAD, diseño de diagramas de flujo e implementación/instalación de sistemas Crestron y cableado de red (CAT 5/6/6A).",
      en: "I work on the installation and configuration of audiovisual equipment and CCTV systems, integrating Dante audio over networks. I handle network configuration/optimization for AV integration, on-site documentation, technical drawings for panels and racks in AutoCAD, flow diagrams, and the implementation/installation of Crestron systems and network cabling (CAT 5/6/6A).",
    },
  },
  {
    id: 2,
    position: { es: "Maestro de enseñanzas prácticas", en: "Practical Instructor" },
    company: { es: "Instituto Técnico Nuestra Señora de Fátima", en: "Instituto Técnico Nuestra Señora de Fátima" },
    location: { es: "Argentina", en: "Argentina" },
    period: { es: "2023", en: "2023" },
    description: {
      es: "Me desempeñé enseñando electricidad básica y domiciliaria, acompañando prácticas de taller, promoviendo normas de seguridad y buenas prácticas. También coordiné grupos de trabajo y guié la resolución de problemas durante las prácticas.",
      en: "I taught basic and residential electricity, supporting workshop practice sessions while reinforcing safety and best practices. I also coordinated groups and guided troubleshooting during hands-on activities.",
    },
  },
  {
    id: 1,
    position: { es: "Documentalista de Proyectos", en: "Project Documentalist" },
    company: { es: "Multiradio S.A", en: "Multiradio S.A" },
    location: { es: "CABA, Buenos Aires, Argentina", en: "Buenos Aires (CABA), Argentina" },
    period: { es: "2016", en: "2016" },
    description: {
      es: "Realicé diseño de informes de instalación de antenas de telecomunicación y diseño de estructuras en AutoCAD. Además, evalué trabajos realizados conforme a obra, aportando soporte documental y técnico a proyectos de campo.",
      en: "I designed telecom antenna installation reports and structural drawings in AutoCAD. I also evaluated as-built work, providing technical and documentation support for field projects.",
    },
  },
];


const contactInfo = [
  {
    icon: "linkedin",
    title: { es: "LinkedIn", en: "LinkedIn" },
    value: "Franco Areco",
    link: "https://www.linkedin.com/in/francoareco/",
  },
  {
    icon: "mail",
    title: { es: "Correo", en: "Email" },
    value: "francoareco53@gmail.com",
    link: "mailto:francoareco53@gmail.com",
  },
  {
    icon: "github",
    title: { es: "GitHub", en: "GitHub" },
    value: "@FrancoA53",
    link: "https://github.com/FrancoA53",
  },
   {
    icon: "location",
    title: { es: "Ubicación", en: "Location" },
    value: "Flores, Buenos Aires, Argentina",
    link: "https://maps.app.goo.gl/w8upmVxA5dohJTbU7",
  },
];

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTheme();
  initLanguage();

  initSkills();
  initProjects();
  initEducation();
  initExperience();
  initContact();
});

// ✅ Inicializar Vanta cuando termine de cargar TODO (incluye scripts)
window.addEventListener("load", () => {
  initVanta();
});

// ===== Navigation =====
function initNavigation() {
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navigation");
    if (!nav) return;
    if (window.scrollY > 50) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  });

  const languageToggle = document.getElementById("language-toggle");
  const languageMenu = document.getElementById("language-menu");

  if (languageToggle && languageMenu) {
    languageToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      languageMenu.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      languageMenu.classList.remove("show");
    });
  }
}

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== Theme =====
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  const moonIcon = themeToggle.querySelector(".moon-icon");
  const sunIcon = themeToggle.querySelector(".sun-icon");

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    moonIcon?.classList.toggle("hidden", theme === "dark");
    sunIcon?.classList.toggle("hidden", theme === "light");

    // Actualiza Vanta si ya está creado
    refreshVantaTheme();
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  themeToggle.addEventListener("click", () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// ===== Language =====
function initLanguage() {
  const savedLang = localStorage.getItem("language");
  if (savedLang) currentLanguage = savedLang;
  else {
    const browserLang = navigator.language || (navigator.languages && navigator.languages[0]) || "en";
    currentLanguage = browserLang.startsWith("es") ? "es" : "en";
  }
  updateLanguage();
}

function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  updateLanguage();
  document.getElementById("language-menu")?.classList.remove("show");
  localStorage.setItem("language", lang);
}

function updateLanguage() {
  document.querySelectorAll("[data-es][data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${currentLanguage}`);
  });

  // reset filtro (primer botón)
  document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
  const first = document.querySelector(".filter-btn");
  if (first) {
    first.classList.add("active");
    currentFilter = first.getAttribute(`data-${currentLanguage}`);
  }

  renderProjects();
  renderEducation();
  renderExperience();
  renderContact();
}

// ===== VANTA.NET (Garantizado) =====
function initVanta() {
  const el = document.getElementById("vanta-bg");
  if (!el) {
    console.error("No existe #vanta-bg en el HTML.");
    return;
  }

  const okThree = !!window.THREE;
  const okVanta = !!window.VANTA;
  const okNet = !!(window.VANTA && window.VANTA.NET);

  // Si esto falla, es ruta/orden/nombre del archivo (pero tu test ya anduvo)
  if (!okThree || !okVanta || !okNet) {
    console.error("VANTA.NET no está cargado. Revisá rutas/orden de scripts en index.html.");
    console.log("THREE:", okThree, "VANTA:", okVanta, "NET:", okNet);
    return;
  }

  // Destruir si ya existe
  if (vantaEffect && typeof vantaEffect.destroy === "function") {
    vantaEffect.destroy();
    vantaEffect = null;
  }

  const isDark = document.documentElement.classList.contains("dark");

  // Light: fondo claro + líneas oscuras suaves
  const bg = isDark ? 0x070a12 : 0xf6f7fb;
  const color = isDark ? 0x00d1ff : 0x1f2937; // dark cyan vs graphite
  const color2 = isDark ? 0xa78bfa : 0x7c3aed; // violet
  
  vantaEffect = window.VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
  
    backgroundColor: bg,
    color: color,
    // algunos builds soportan color2:
    color2: color2,
  
    points: 10.0,
    maxDistance: 20.0,
    spacing: 16.0,
    showDots: true,
  });  
}

function refreshVantaTheme() {
  // Re-init solo si Vanta ya está cargado y el div existe
  if (!document.getElementById("vanta-bg")) return;
  if (!(window.VANTA && window.VANTA.NET)) return;
  initVanta();
}

// ===== Skills carousel + tooltip =====
let autoScrollRAF = null;
let isPaused = false;
let currentTranslate = 0;
let isDragging = false;
let startX = 0;
let isTooltipOpen = false;
let hasDragged = false;
let currentTooltip = null;

function initSkills() {
  const track = document.getElementById("skills-track");
  const carousel = document.getElementById("skills-carousel");
  if (!track || !carousel) return;

  track.innerHTML = "";
  const doubled = [...skills, ...skills];
  doubled.forEach((s) => track.appendChild(createSkillCard(s)));

  startAutoScroll();

  if (window.innerWidth >= 768) {
    carousel.addEventListener("mouseenter", () => { isPaused = true; carousel.style.cursor = "grab"; });
    carousel.addEventListener("mouseleave", () => { isPaused = false; });
  }

  carousel.addEventListener("mousedown", (e) => {
    if (window.innerWidth < 768) return;
    isDragging = true;
    isPaused = true;
    startX = e.clientX;
    hasDragged = false;
    carousel.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging || window.innerWidth < 768) return;
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 3) hasDragged = true;

    currentTranslate += deltaX;
    startX = e.clientX;

    const half = track.scrollWidth / 2;
    if (currentTranslate > 0) currentTranslate = -half;
    else if (Math.abs(currentTranslate) >= half) currentTranslate = 0;

    track.style.transform = `translateX(${currentTranslate}px)`;
  });

  document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    isPaused = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("touchstart", (e) => {
    isDragging = true;
    isPaused = true;
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    currentTranslate += deltaX;
    startX = e.touches[0].clientX;

    const half = track.scrollWidth / 2;
    if (currentTranslate > 0) currentTranslate = -half;
    else if (Math.abs(currentTranslate) >= half) currentTranslate = 0;

    track.style.transform = `translateX(${currentTranslate}px)`;
  });

  carousel.addEventListener("touchend", () => {
    isDragging = false;
    isPaused = false;
  });
}

function createSkillCard(skill) {
  const card = document.createElement("div");
  card.className = "skill-card";
  card.innerHTML = `
    <div class="skill-icon"><img src="${skill.icon}" alt="${skill.name} icon" /></div>
    <div class="skill-name">${skill.name}</div>
  `;
  card.addEventListener("click", () => {
    if (!hasDragged) showSkillTooltip(skill, card);
  });
  return card;
}

function closeCurrentTooltip() {
  if (!currentTooltip) return;
  currentTooltip.style.display = "none";
  document.querySelector(".skill-card-active")?.classList.remove("skill-card-active");
  isTooltipOpen = false;
  document.removeEventListener("click", currentTooltip.handleOutsideClick);
  document.removeEventListener("keydown", currentTooltip.handleEscape);
  currentTooltip = null;
}

function showSkillTooltip(skill, card) {
  closeCurrentTooltip();

  const tooltip = document.getElementById("skill-tooltip");
  const title = document.getElementById("skill-tooltip-title");
  const desc = document.getElementById("skill-tooltip-description");
  const closeBtn = document.getElementById("skill-tooltip-close");
  if (!tooltip || !title || !desc || !closeBtn) return;

  title.textContent = skill.name;
  desc.textContent = skill.description[currentLanguage];

  isTooltipOpen = true;
  card.classList.add("skill-card-active");

  tooltip.style.display = "block";
  tooltip.style.visibility = "hidden";
  const th = tooltip.offsetHeight;
  tooltip.style.display = "none";
  tooltip.style.visibility = "visible";

  const rect = card.getBoundingClientRect();
  const offset = 18;

  let top;
  if (rect.top > th + offset) {
    top = rect.top - th - offset;
    tooltip.classList.remove("top");
  } else {
    top = rect.bottom + offset;
    tooltip.classList.add("top");
  }

  top = Math.max(0, Math.min(top, window.innerHeight - th));
  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${rect.left + rect.width / 2 - 125}px`;
  tooltip.style.display = "block";

  currentTooltip = tooltip;
  currentTooltip.handleOutsideClick = (e) => {
    if (!tooltip.contains(e.target) && !card.contains(e.target)) closeCurrentTooltip();
  };
  currentTooltip.handleEscape = (e) => {
    if (e.key === "Escape") closeCurrentTooltip();
  };

  closeBtn.onclick = closeCurrentTooltip;
  document.addEventListener("click", currentTooltip.handleOutsideClick);
  document.addEventListener("keydown", currentTooltip.handleEscape);
}

function startAutoScroll() {
  const track = document.getElementById("skills-track");
  if (!track) return;

  if (autoScrollRAF) cancelAnimationFrame(autoScrollRAF);

  function animate() {
    if (!isPaused && !isDragging && !isTooltipOpen) {
      currentTranslate -= 0.4;
      const half = track.scrollWidth / 2;
      if (Math.abs(currentTranslate) >= half) currentTranslate = 0;
      track.style.transform = `translateX(${currentTranslate}px)`;
    }
    autoScrollRAF = requestAnimationFrame(animate);
  }
  animate();
}

// ===== Projects =====
function initProjects() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute(`data-${currentLanguage}`);
      renderProjects();
    });
  });

  const active = document.querySelector(".filter-btn.active");
  if (active) currentFilter = active.getAttribute(`data-${currentLanguage}`);
  renderProjects();
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtered = projects.filter((p) => {
    if (currentFilter === "Todos" || currentFilter === "All") return true;
    return p.branch[currentLanguage] === currentFilter;
  });

  filtered.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title[currentLanguage]}" class="project-image">
      <div class="project-header">
        <div class="project-title-row">
          <h3 class="project-title">${project.title[currentLanguage]}</h3>
          <span class="badge">${project.branch[currentLanguage]}</span>
        </div>
        <p class="project-description">${project.description[currentLanguage]}</p>
      </div>
      <div class="project-content">
        <div class="project-tags">
          ${project.technologies.map((t) => `<span class="badge badge-outline">${t}</span>`).join("")}
        </div>
      </div>
      <div class="project-footer">
        <a href="${project.link}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
          ${project.buttonText[currentLanguage]}
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== Education =====
function initEducation() { renderEducation(); }
function renderEducation() {
  const timeline = document.getElementById("education-timeline");
  if (!timeline) return;
  timeline.innerHTML = "";

  education.forEach((item) => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <div class="timeline-icon">
        <svg class="icon" style="width: 2rem; height: 2rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      </div>
      <div class="timeline-content">
        <div class="timeline-year">${item.years}</div>
        <h3 class="timeline-degree">${item.degree[currentLanguage]}</h3>
        <p class="timeline-institution">${item.institution[currentLanguage]}</p>
        <p class="timeline-description">${item.description[currentLanguage]}</p>
      </div>
    `;
    timeline.appendChild(el);
  });
}

// ===== Experience =====
function initExperience() { renderExperience(); }
function renderExperience() {
  const list = document.getElementById("experience-list");
  if (!list) return;
  list.innerHTML = "";

  experience.forEach((item) => {
    const el = document.createElement("div");
    el.className = "experience-item";
    el.innerHTML = `
      <div class="experience-icon">
        <svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      </div>

      <div class="experience-content">
        <div class="experience-header">
          <div>
            <h3 class="experience-position">${item.position[currentLanguage]}</h3>
            <p class="experience-company">${item.company[currentLanguage]}</p>
          </div>
          <div class="experience-meta">
            <p>${item.period[currentLanguage]}</p>
            <p>${item.location[currentLanguage]}</p>
          </div>
        </div>
        <p class="experience-description">${item.description[currentLanguage]}</p>
      </div>
    `;
    list.appendChild(el);
  });
}

// ===== Contact =====
function initContact() { renderContact(); }
function renderContact() {
  const grid = document.getElementById("contact-grid");
  if (!grid) return;
  grid.innerHTML = "";

const icons = {
    mail: `<svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
             <polyline points="22,6 12,13 2,6"></polyline>
           </svg>`,
    linkedin: `<svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                 <rect x="2" y="9" width="4" height="12"></rect>
                 <circle cx="4" cy="4" r="2"></circle>
               </svg>`,
    github: `<svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
             </svg>`,
    location: `<svg class="icon" style="width: 1.5rem; height: 1.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                 <circle cx="12" cy="10" r="3"></circle>
               </svg>`,
  }

  contactInfo.forEach((item) => {
    const card = document.createElement(item.link ? "a" : "div");
    card.className = "contact-card";
    if (item.link) {
      card.href = item.link;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }
    card.innerHTML = `
      <div class="contact-header">
        <div class="contact-icon">${icons[item.icon] || ""}</div>
        <h3 class="contact-title">${item.title[currentLanguage]}</h3>
      </div>
      <p class="contact-value">${item.value}</p>
    `;
    grid.appendChild(card);
  });
}
>>>>>>> 468276e (Update JS)
