<script setup>
import { ref, reactive, onMounted } from 'vue'
import {useProfileStore} from '../stores/profile'
import afofmaimagePath from '../assets/images/afofma-plateforme.png'
import cuaImagePath from '../assets/images/cua-plateforme.png'
import laposteImagePath from '../assets/images/poste-benin.png'
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

// Compétences
const skills = [
  {
    title: 'Compétences techniques',
    items: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'Vue.js', level: 75 },
      { name: 'PHP', level: 70 },
      { name: 'MySQL', level: 75 }
    ]
  },
  {
    title: 'Compétences transversales',
    items: [
      { name: 'Gestion de projets', level: 75 },
      { name: 'Adaptabilité', level: 85 },
      { name: 'Résolution de problèmes', level: 80 },
      { name: 'Communication', level: 85 },
      { name: 'Travail d\'équipe', level: 80 }
    ]
  }
]

// Projets
const projects = [
  {
    id: 'afofma',
    title: 'AFOFMA',
    description: 'Plateforme de gestion des centres professionnels AFOFMA',
    image: afofmaimagePath,
    url: 'https://afofma.jtek-solutions.com/login'
  },
  {
    id: 'cua',
    title: 'Centre Universitaire Apostolique',
    description: 'Plateforme de gestion du Centre Universitaire Apostolique',
    image: cuaImagePath,
    url: 'https://cua.bj/'
  },
  {
    id: 'laposte',
    title: 'La Poste du Bénin',
    description: 'Plateforme de présentation des services de la poste du Bénin',
    image: laposteImagePath,
    url: 'https://laposte.bj/'
  },
  {
    id: 'aquatechplateforme',
    title: 'AQUATECH BENIN',
    description: 'Plateforme de présentation de AQUATECH BENIN et ses services',
    image: aquatechImagePath,
    url: 'https://aquatech-benin.com/'
  },
  {
    id: 'aquatechmobile',
    title: 'Aquatech Mobile',
    description: 'Plateforme de présentation de l\'application mobile Aquatech',
    image: aquatechMobileImagePath,
    url: 'https://app.aquatech-benin.com/'
  },
  {
    id: 'jtek',
    title: 'JTEK SOLUTIONS',
    description: 'Plateforme de présentation de JTEK SOLUTIONS et ses services',
    image: jtekImagePath,
    url: 'https://www.jtek-solutions.com/'
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

// Navigation fluide
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
}

const handleScroll = () => {
  updateActiveSection();
  checkSectionsInView();
}

const updateActiveSection = () => {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const scrollPosition = window.scrollY + 100;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetBottom = offsetTop + element.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        activeSection.value = section;
        break;
      }
    }
  }
}

const checkSectionsInView = () => {
  const sections = ['about', 'skills', 'projects'];
  
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
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

// Hook de montage du composant
onMounted(() => {
  startTypingAnimation();
  setupScrollListener();
  checkSectionsInView();
})
</script>

<template>
  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="info-desc">
      <h1>Je suis <span class="highlight">{{ profile.name }}</span>, {{ profile.title }}.</h1>
      <p class="typing-animation">{{ currentTypedText }}</p>
      <div class="project-link-bloc">
        <a href="#projects" class="project-button" @click="scrollToSection('#projects', 'projects')">
          Voir mes projets
        </a>
      </div>
    </div>
    <div class="hero-image">
      <img :src="profile.heroImage" :alt="profile.name" class="dev-image">
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about section">
    <h1 class="libelle-title">Profil</h1>
    <div class="about-content fade-in" v-if="inView.about">
      <div class="about-text">
        <p v-for="paragraph in profile.about" :key="paragraph">
          <span v-if="paragraph.includes(profile.name)" class="highlight">{{ profile.name }}</span>
          <template v-if="!paragraph.includes(profile.name)">{{ paragraph }}</template>
          <template v-else>{{ paragraph.replace(profile.name, '') }}</template>
        </p>
        <div class="proof-bloc">
          <div class="CV-link" style="margin-top: 2rem;">
            <a :href="profile.cvUrl" target="_blank" class="btn">
              Mon CV
            </a>
          </div>
          <div class="certificat-link" style="margin-top: 2rem;">
            <a :href="profile.certificatUrls" target="_blank" class="btn">
              Mes attestations
            </a>
          </div>
        </div>
      </div>
      <div class="profile-image-bloc">
        <img :src="profile.profileImage" :alt="profile.name" class="profile-pic">
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="skills section">
    <h2 class="libelle-title">Compétences</h2>
    <div class="skill-categories fade-in" v-if="inView.skills">
      <div v-for="category in skills" :key="category.title" class="skill-category">
        <h3>{{ category.title }}</h3>
        <div v-for="skill in category.items" :key="skill.name" class="skill-item">
          <div class="skill-label">
            <span>{{ skill.name }}</span>
            <span>{{ skill.level }}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="projects section">
    <h1 class="libelle-title">Expériences</h1>
    <div class="project-grid fade-in" v-if="inView.projects">
      <article v-for="project in projects" 
               :key="project.id" 
               class="project-card" 
               @click="openProject(project.url)">
        <img :src="project.image" :alt="project.title">
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.url" target="_blank" class="project-button" @click.stop>
            Consulter
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>

</style>