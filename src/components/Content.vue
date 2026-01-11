<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import {useProfileStore} from '../stores/profile'
import afofmaimagePath from '../assets/images/afofma-plateforme.png'
import cuaImagePath from '../assets/images/cua-plateforme.png'
import lreLaposteImagePath from '../assets/images/lrelaposte.png'
import aquatechImagePath from '../assets/images/aquatech-benin.png'
import aquatechMobileImagePath from '../assets/images/app-aquatech.png'
import jtekImagePath from '../assets/images/jtek-solutions.png'

// État de l'interface
const mobileMenuOpen = ref(false)
const activeSection = ref('home')
const currentTypedText = ref('')

// Récupération des données du profil
const profileStore = useProfileStore()
const profile = profileStore.$state

const isSubmitting = ref(false)
const formSubmitted = ref(false)
const emailStatus = ref('')

// Contrôle de l'affichage du modal
const showMissionModal = ref(false)
// Stocke les missions du projet cliqué
const currentProjectMissions = ref([])

// Visibilité des sections (pour les animations)
const inView = reactive({
  about: false,
  skills: false,
  projects: false
})

// CONFIGURATION EMAILJS - À PERSONNALISER
const emailjsConfig = {
  serviceId: 'service_sd2f4kd',
  templateId: 'template_ko307e1', 
  publicKey: 'LkQzXKV3iz1gJVROW',       
  toEmail: 'avocegregorysag@gmail.com',
  
  // Alternative Formspree (décommentez pour utiliser)
  // formspreeUrl: 'https://formspree.io/f/VOTRE_FORM_ID',
  
  // Configuration pour teste en local
  useTestMode: true // Passez à false en production
}

// Messages à taper
const typingMessages = [
  'J\'aide les entreprises à bâtir des sites modernes et réactifs.',
  'Passionné par les nouvelles technologies.',
  'Spécialisé dans le développement web moderne.',
  'Créateur d\'expériences digitales innovantes.'
]

// Navigation
const navigation = [
  { id: 'home', href: '#home', label: 'Accueil' },
  { id: 'about', href: '#about', label: 'À propos' },
  { id: 'skills', href: '#skills', label: 'Compétences' },
  { id: 'projects', href: '#projects', label: 'Projets' },
  { id: 'contact', href: '#contact', label: 'Contact' }
]

// Fonction pour gérer les erreurs de chargement d'image
const handleImageError = (event, techName) => {
  // Si l'image ne charge pas, utiliser une icône SVG de secours
  const fallbackIcons = {
    'CSS3': `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354H64.001v106.49z"/><path fill="#FFF" d="M64.001 51.429h18.302l1.264-14.163H64.001V24.230h35.749l-.329 3.681-3.398 38.07h-32.022V51.429z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"/><path fill="#FFF" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 24.230v13.066H29.641l-.277-3.108-.63-7.012-.331-3.681h35.646zm-.047 27.199v13.066H48.792l-.277-3.108-.631-7.012-.33-3.681H64.001z"/></svg>`
  }
  
  if (fallbackIcons[techName]) {
    const wrapper = event.target.parentElement
    wrapper.innerHTML = `<div class="skill-icon">${fallbackIcons[techName]}</div>`
  }
}

// Fonction pour obtenir l'URL du logo CDN ou l'icône SVG
const getTechIcon = (techName, hasLogo = false) => {
  const cdnBase = 'https://cdn.simpleicons.org';
  
  // Compétences avec logos CDN (format: https://cdn.simpleicons.org/{icon}/{color})
  const cdnIcons = {
    'HTML5': `${cdnBase}/html5/E34F26`,
    'CSS3': `${cdnBase}/css3/1572B6`,
    'BOOTSTRAP': `${cdnBase}/bootstrap/7952B3`,
    'JavaScript': `${cdnBase}/javascript/F7DF1E`,
    'Vue.js': `${cdnBase}/vuedotjs/4FC08D`,
    'PHP': `${cdnBase}/php/777BB4`,
    'Laravel': `${cdnBase}/laravel/FF2D20`,
    'MySQL': `${cdnBase}/mysql/4479A1`,
    'PostgreSQL': `${cdnBase}/postgresql/4169E1`
  }
  
  // Compétences avec icônes SVG personnalisées
  const svgIcons = {
    'Gestion de projets': `<svg viewBox="0 0 24 24" fill="none"><path d="M9 11L12 14L22 4" stroke="#667eea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#667eea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="8" r="2" fill="#667eea"/></svg>`,
    'Méthodologie Agile SCRUM': `<svg viewBox="0 0 24 24" fill="none"><path d="M3 3V8H8" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 21V16H8" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 3V8H16" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21V16H16" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="#764ba2" stroke-width="2"/><circle cx="12" cy="12" r="1" fill="#764ba2"/></svg>`,
    'Communication': `<svg viewBox="0 0 24 24" fill="none"><path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#667eea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="9" r="1" fill="#667eea"/><circle cx="15" cy="9" r="1" fill="#667eea"/></svg>`
  }
  
  if (hasLogo && cdnIcons[techName]) {
    return cdnIcons[techName]
  }
  
  return svgIcons[techName] || ''
}

// Fonction pour obtenir l'icône d'une compétence transversale
const getSoftSkillIcon = (skillName) => {
  const icons = {
    'Adaptabilité': `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17L12 22L22 17" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12L12 17L22 12" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="7" r="1.5" fill="#764ba2"/><circle cx="12" cy="12" r="1.5" fill="#764ba2"/><circle cx="12" cy="17" r="1.5" fill="#764ba2"/></svg>`,
    'Leadership entrepreneurial': `<svg viewBox="0 0 24 24" fill="none"><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="#764ba2" stroke-width="2"/><path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="2" fill="#764ba2"/><circle cx="18" cy="7" r="1.5" fill="#764ba2"/></svg>`,
    'Résolution de problèmes': `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#764ba2" stroke-width="2"/><path d="M12 16V12" stroke="#764ba2" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="8" r="1.5" fill="#764ba2"/><path d="M8 12L16 12" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 2"/></svg>`,
    'Travail d\'équipe': `<svg viewBox="0 0 24 24" fill="none"><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="#764ba2" stroke-width="2"/><path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#764ba2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="2" fill="#764ba2"/><circle cx="18" cy="7" r="2" fill="#764ba2"/><path d="M7 11L11 11M13 11L17 11" stroke="#764ba2" stroke-width="2" stroke-linecap="round"/></svg>`
  }
  return icons[skillName] || ''
}

// Compétences
const skills = [
  {
    title: 'Compétences techniques',
    withLogos: [
      { name: 'HTML5', icon: 'HTML5', hasLogo: true },
      { name: 'CSS3', icon: 'CSS3', hasLogo: true },
      { name: 'Bootstrap', icon: 'BOOTSTRAP', hasLogo: true },
      { name: 'JavaScript', icon: 'JavaScript', hasLogo: true },
      { name: 'Vue.js', icon: 'Vue.js', hasLogo: true },
      { name: 'PHP', icon: 'PHP', hasLogo: true },
      { name: 'Laravel', icon: 'Laravel', hasLogo: true },
      { name: 'MySQL', icon: 'MySQL', hasLogo: true },
      { name: 'PostgreSQL', icon: 'PostgreSQL', hasLogo: true }
    ],
    withoutLogos: [
      { name: 'Gestion de projets', icon: 'Gestion de projets', hasLogo: false },
      { name: 'Méthodologie Agile SCRUM', icon: 'Méthodologie Agile SCRUM', hasLogo: false },
      { name: 'Communication', icon: 'Communication', hasLogo: false }
    ]
  },
  {
    title: 'Soft Skills',
    withLogos: [],
    withoutLogos: [
      { name: 'Adaptabilité', icon: 'Adaptabilité', hasLogo: false },
      { name: 'Leadership entrepreneurial', icon: 'Leadership entrepreneurial', hasLogo: false },
      { name: 'Résolution de problèmes', icon: 'Résolution de problèmes', hasLogo: false },
      { name: 'Travail d\'équipe', icon: 'Travail d\'équipe', hasLogo: false }
    ]
  }
]

// Projets
const projects = [
  {
    id: 'laposte',
    title: 'La Poste du Bénin',
    description: 'Plateforme de présentation des services de la poste du Bénin',
    technologie : 'Laravel + Vue.js',
    image: lreLaposteImagePath,
    url: 'https://lre.laposte.bj/',
    missions: [
      'Analyse et Conception',
      'Développement de l\'API',
      'Intégration de l\'API',
      'Déploiement'
    ]
  },
  {
    id: 'cua',
    title: 'Centre Universitaire Apostolique',
    description: 'Plateforme de gestion du Centre Universitaire Apostolique',
    technologie : 'Laravel + Vue.js',
    image: cuaImagePath,
    url: 'https://cua.bj/',
    missions: [
      'Analyse et Conception',
      'Développement de l\'API',
      'Intégration de l\'API',
    ]
  },
  {
    id: 'aquatechplateforme',
    title: 'AQUATECH BENIN',
    description: 'Plateforme de présentation de AQUATECH BENIN et ses services',
    technologie : 'Laravel + Blade',
    image: aquatechImagePath,
    url: 'https://aquatech-benin.com/',
    missions: [
      'Analyse et Conception de l’interface',
      'Développement frontend et backend',
      'Intégration responsive',
      'Optimisation SEO'
    ]
  },
  {
    id: 'aquatechmobile',
    title: 'Aquatech Mobile',
    description: 'Plateforme de présentation de l\'application mobile Aquatech',
    technologie : 'Laravel + Blade',
    image: aquatechMobileImagePath,
    url: 'https://app.aquatech-benin.com/',
    missions: [
      'Analyse et Conception de l’interface',
      'Développement frontend et backend',
      'Intégration responsive',
    ]
  },
  {
    id: 'jtek',
    title: 'JTEK SOLUTIONS',
    description: 'Plateforme de présentation de JTEK SOLUTIONS et ses services',
    technologie : 'Laravel + Angular',
    image: jtekImagePath,
    url: 'https://www.jtek-solutions.com/',
    missions: [
      'Refonte de l’interface',
      'Intégration responsive',
      'Réalisation de la vidéo de présentation avec canva'
    ]
  },
  {
    id: 'afofma',
    title: 'AFOFMA',
    description: 'Plateforme de gestion des centres professionnels AFOFMA',
    technologie : 'Laravel + Angular',
    image: afofmaimagePath,
    url: 'https://afofma.jtek-solutions.com/login',
    missions: [
      'Analyse et Conception',
      'Modélisation UML',
      'Implémentation des fonctionnalités gestion des notes et évaluations (API)',
    ]
  }
]

// Animation de frappe
const startTypingAnimation = () => {
  let messageIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {
    const currentMessage = typingMessages[messageIndex];
    
    if (isDeleting) {
      currentTypedText.value = currentMessage.substring(0, charIndex - 1);
      charIndex--;
    } else {
      currentTypedText.value = currentMessage.substring(0, charIndex + 1);
      charIndex++;
    }

    let timeout = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentMessage.length) {
      timeout = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      messageIndex = (messageIndex + 1) % typingMessages.length;
    }

    setTimeout(typeEffect, timeout);
  };

  typeEffect();
}

// Menu mobile
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

const scrollToSection = (href, sectionId) => {
  mobileMenuOpen.value = false;
  activeSection.value = sectionId;
  
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Détection du scroll
const setupScrollListener = () => {
  window.addEventListener('scroll', handleScroll);
  // Appeler handleScroll au chargement pour définir la section active initiale
  handleScroll();
}

const handleScroll = () => {
  updateActiveSection();
  checkSectionsInView();
}

const updateActiveSection = () => {
  // Utilisez les mêmes IDs que dans votre navigation
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const scrollPosition = window.scrollY + 100; // Offset pour l'activation
  let currentSection = sections[0]; // Section par défaut

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      
      // Si on a dépassé le début de cette section
      if (scrollPosition >= offsetTop) {
        currentSection = section;
      }
    }
  }
  
  // Mettre à jour seulement si la section a changé
  if (activeSection.value !== currentSection) {
    activeSection.value = currentSection;
  }
}

const checkSectionsInView = () => {
  const sections = ['about', 'skills', 'projects'];
  
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
      
      if (isVisible && !inView[section]) {
        inView[section] = true;
      }
    }
  });
}

// Ouverture de projet
const openProject = (url) => {
  window.open(url, '_blank');
}

const openMissionModal = (missions) => {
  currentProjectMissions.value = missions;
  showMissionModal.value = true;
}

const closeMissionModal = () => {
  showMissionModal.value = false;
  currentProjectMissions.value = [];
}

// Hook de montage du composant
onMounted(() => {
  startTypingAnimation();
  setupScrollListener();
  checkSectionsInView();
})
// Hook de nettoyage du composant dans onUnmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="hero-background"></div>
    <div class="hero-particles"></div>
    <div class="hero-content">
      <div class="info-desc">
        <div class="greeting">Bonjour, je suis</div>
        <h1>
          <span class="highlight">{{ profile.name }}</span>
        </h1>
        <h2 class="subtitle">{{ profile.title }}</h2>
        <p class="typing-animation">
          <span class="typing-text">{{ currentTypedText }}</span>
          <span class="cursor">|</span>
        </p>
        <div class="project-link-bloc">
          <a href="#projects" class="project-button primary-btn" @click="scrollToSection('#projects', 'projects')">
            <span>Voir mes projets</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#contact" class="project-button secondary-btn" @click="scrollToSection('#contact', 'contact')">
            Me contacter
          </a>
        </div>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/s%C3%A8gla-gr%C3%A9goire-avoce/" target="_blank" class="social-icon" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://github.com/avocegregoire-10" target="_blank" class="social-icon" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-wrapper">
          <img :src="profile.heroImage" :alt="profile.name" class="dev-image">
          <div class="image-glow"></div>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about section">
    <div class="section-container">
      <h1 class="libelle-title">
        <span class="title-number">01.</span>
        <span class="title-text">Profil</span>
      </h1>
      <div class="about-content" :class="{ 'fade-in': inView.about }">
        <div class="about-text">
          <div class="about-intro">
            <p v-for="(paragraph, index) in profile.about" :key="index" class="about-paragraph">
              <span v-if="paragraph.includes(profile.name)" class="highlight">{{ profile.name }}</span>
              <template v-if="!paragraph.includes(profile.name)">{{ paragraph }}</template>
              <template v-else>{{ paragraph.replace(profile.name, '') }}</template>
            </p>
          </div>
          <div class="proof-bloc">
            <a :href="profile.cvUrl" target="_blank" class="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L2 7L10 12L18 7L10 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L10 12L18 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L10 7L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Mon CV</span>
            </a>
            <a :href="profile.certificatUrls" target="_blank" class="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17 2H3C2.44772 2 2 2.44772 2 3V17C2 17.5523 2.44772 18 3 18H17C17.5523 18 18 17.5523 18 17V3C18 2.44772 17.5523 2 17 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 8L10 11L13 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Mes attestations</span>
            </a>
          </div>
        </div>
        <div class="profile-image-bloc">
          <div class="profile-frame">
            <img :src="profile.profileImage" :alt="profile.name" class="profile-pic">
            <div class="profile-border"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="skills section">
    <div class="section-container">
      <h2 class="libelle-title">
        <span class="title-number">02.</span>
        <span class="title-text">Compétences</span>
      </h2>
      <div class="skill-categories" :class="{ 'fade-in': inView.skills }">
        <!-- Compétences Techniques -->
        <div v-for="(category, catIndex) in skills" :key="category.title" 
             class="skill-category" 
             :class="{ 'technical-skills': category.title === 'Compétences techniques', 'soft-skills': category.title === 'Soft Skills' }"
             :style="{ animationDelay: `${catIndex * 0.2}s` }">
          <div class="category-header">
            <h3>{{ category.title }}</h3>
          </div>
          
          <!-- Bloc avec logos CDN -->
          <div v-if="category.withLogos && category.withLogos.length > 0" class="skills-block with-logos">
            <div class="block-label">Technologies & Frameworks</div>
            <div class="skills-grid">
              <div 
                v-for="(skill, skillIndex) in category.withLogos" 
                :key="skill.name" 
                class="skill-card logo-card" 
                :style="{ animationDelay: `${(catIndex * 0.2) + (skillIndex * 0.1)}s` }"
              >
                <div class="skill-icon-wrapper logo-wrapper">
                  <img 
                    :src="getTechIcon(skill.icon, true)" 
                    :alt="skill.name"
                    class="logo-image"
                    @error="handleImageError($event, skill.icon)"
                  />
                </div>
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bloc avec icônes SVG -->
          <div v-if="category.withoutLogos && category.withoutLogos.length > 0" class="skills-block without-logos">
            <div v-if="category.title === 'Compétences techniques'" class="block-label">Méthodes & Outils</div>
            <div class="skills-grid">
              <div 
                v-for="(skill, skillIndex) in category.withoutLogos" 
                :key="skill.name" 
                class="skill-card icon-card" 
                :style="{ animationDelay: `${(catIndex * 0.2) + (category.withLogos?.length || 0) * 0.1 + (skillIndex * 0.1)}s` }"
              >
                <div class="skill-icon-wrapper icon-wrapper">
                  <div 
                    class="skill-icon" 
                    v-html="category.title === 'Compétences techniques' ? getTechIcon(skill.icon, false) : getSoftSkillIcon(skill.icon)"
                  ></div>
                </div>
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="projects section">
    <div class="section-container">
      <h1 class="libelle-title">
        <span class="title-number">03.</span>
        <span class="title-text">Mes Projets</span>
      </h1>
      <div class="project-grid" :class="{ 'fade-in': inView.projects }">
        <article v-for="(project, index) in projects" 
                 :key="project.id" 
                 class="project-card" 
                 :style="{ animationDelay: `${index * 0.1}s` }"
                 @click="openProject(project.url)">
          <div class="project-image-wrapper">
            <img :src="project.image" :alt="project.title" class="project-image">
            <div class="project-overlay">
              <div class="project-tech">{{ project.technologie }}</div>
            </div>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-actions">
              <a :href="project.url" target="_blank" class="project-link" @click.stop>
                <span>Consulter</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <button class="mission-btn" @click.stop="openMissionModal(project.missions)">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L1 4.5L8 8L15 4.5L8 1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 12.5L8 16L15 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 8.5L8 12L15 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Missions</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Modal Missions -->
  <Transition name="modal">
    <div v-if="showMissionModal" class="modal-overlay" @click="closeMissionModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeMissionModal" aria-label="Fermer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="modal-header">
          <h2>Missions accomplies</h2>
        </div>
        <div class="modal-body">
          <ul class="missions-list">
            <li v-for="(mission, index) in currentProjectMissions" :key="index" class="mission-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ mission }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    position: relative;
    margin: 2rem;
  }

  .close-btn {
    background: rgba(231, 76, 60, 0.1);
    color: #E74C3C;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;
    padding: 0;
  }

  .close-btn:hover {
    background: #E74C3C;
    color: white;
    transform: rotate(90deg);
  }

  .close-btn svg {
    width: 20px;
    height: 20px;
  }

  .modal-header {
    margin-bottom: 1.5rem;
    padding-right: 3rem;
  }

  .modal-header h2 {
    color: var(--primary);
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
  }

  .modal-body {
    margin-top: 1rem;
  }

  .missions-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mission-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 0.75rem;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
    border-radius: 12px;
    border-left: 3px solid var(--accent);
    transition: all 0.3s ease;
  }

  .mission-item:hover {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    transform: translateX(5px);
  }

  .mission-item svg {
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 2px;
  }

  .mission-item span {
    color: var(--primary);
    line-height: 1.6;
    flex: 1;
  }

  @media (max-width: 768px) {
    .modal-content {
      max-width: 95%;
      padding: 1.5rem;
      margin: 1rem;
      max-height: 85vh;
    }

    .close-btn {
      right: 0.75rem;
      top: 0.75rem;
      width: 32px;
      height: 32px;
    }

    .close-btn svg {
      width: 18px;
      height: 18px;
    }

    .modal-header {
      padding-right: 2.5rem;
    }

    .modal-header h2 {
      font-size: 1.5rem;
    }

    .mission-item {
      padding: 0.875rem;
      gap: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .modal-content {
      padding: 1.25rem;
      margin: 0.5rem;
    }

    .close-btn {
      right: 0.5rem;
      top: 0.5rem;
      width: 28px;
      height: 28px;
    }

    .close-btn svg {
      width: 16px;
      height: 16px;
    }

    .modal-header h2 {
      font-size: 1.25rem;
    }

    .mission-item {
      padding: 0.75rem;
      font-size: 0.9rem;
    }
  }

  /* Animations de transition pour le modal */
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }

  .modal-enter-active .modal-content,
  .modal-leave-active .modal-content {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-from .modal-content,
  .modal-leave-to .modal-content {
    transform: scale(0.9) translateY(-20px);
    opacity: 0;
  }

  .modal-enter-to .modal-content,
  .modal-leave-from .modal-content {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
</style>