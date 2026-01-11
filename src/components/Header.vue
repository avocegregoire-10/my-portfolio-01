<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const activeSection = ref('home')

// Données de navigation
const navigation = [
  { id: 'home', href: '#home', label: 'Accueil' },
  { id: 'about', href: '#about', label: 'À propos' },
  { id: 'skills', href: '#skills', label: 'Compétences' },
  { id: 'projects', href: '#projects', label: 'Projets' },
  { id: 'contact', href: '#contact', label: 'Contact' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollToSection = (href, sectionId) => {
  mobileMenuOpen.value = false
  activeSection.value = sectionId

  const element = document.querySelector(href)
  if (element) {
    const offset = 80 // Hauteur du header
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Détection de la section active au scroll
const updateActiveSection = () => {
  const sections = ['home', 'about', 'skills', 'projects', 'contact']
  const scrollPosition = window.scrollY + 150 // Offset pour l'activation
  let currentSection = sections[0]

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      if (scrollPosition >= offsetTop) {
        currentSection = section
      }
    }
  }

  if (activeSection.value !== currentSection) {
    activeSection.value = currentSection
  }
}

const handleScroll = () => {
  updateActiveSection()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  updateActiveSection() // Définir la section active au chargement
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Header avec largeur complète -->
  <header class="site-header">
    <div class="header-container">
      <div class="logo">
        <span>Sègla Grégoire AVOCE</span>
      </div>
      <nav class="nav" :class="{ open: mobileMenuOpen }" id="nav">
        <a v-for="item in navigation" 
           :key="item.id" 
           :href="item.href" 
           :class="{ active: activeSection === item.id }"
           @click.prevent="scrollToSection(item.href, item.id)">
          {{ item.label }}
        </a>
      </nav>
      <button class="nav-toggle" @click="toggleMobileMenu">☰</button>
    </div>
  </header>
</template>

<style scoped>
/* Header avec largeur complète */
.site-header {
  background: rgba(44, 62, 80, 0.95);
  backdrop-filter: blur(20px);
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.site-header:hover {
  background: rgba(44, 62, 80, 0.98);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
}

/* Container interne pour organiser le contenu */
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

.logo {
  font-size: 1.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #FFFFFF, rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.nav {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.nav a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 500;
  font-size: 0.95rem;
}

.nav a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #FFD700, #FFA500);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav a:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateY(-2px);
}

.nav a:hover::before {
  width: 70%;
}

.nav a.active {
  background: linear-gradient(135deg, var(--accent), #c0392b);
  color: white;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.nav a.active::before {
  display: none;
}

.nav-toggle {
  display: none;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
}

.nav-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

/* Menu mobile avec largeur complète */
@media (max-width: 768px) {
  .header-container {
    padding: 1rem 1.5rem;
  }
  
  .nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(44, 62, 80, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 1.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    width: 100%;
    margin: 0;
    gap: 0.5rem;
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .nav.open { 
    display: flex; 
  }
  
  .nav-toggle { 
    display: flex !important; 
  }

  .nav a {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    text-align: center;
    border-radius: 12px;
  }

  .nav a::before {
    display: none;
  }

  .nav a:last-child {
    border-bottom: none;
  }
  
  .logo {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0.5rem 1rem;
  }
  
  .logo {
    font-size: 1rem;
  }
  
  .logo span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }
}
</style>