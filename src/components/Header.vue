<script setup>
import { ref } from 'vue'

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
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
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
  background: var(--primary); 
  color: white; 
  position: sticky; 
  top: 0; 
  z-index: 1000;
  box-shadow: 0 2px 10px var(--shadow);
  transition: all 0.3s ease;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Container interne pour organiser le contenu */
.header-container {
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  padding: 1rem 2rem;
  max-width: 100%;
  width: 100%;
  margin: 0;
}

.logo { 
  font-size: 1.5rem; 
  font-weight: bold;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0; /* Empêche le logo de rétrécir */
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav a { 
  color: white; 
  text-decoration: none; 
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  white-space: nowrap; /* Empêche le texte de se couper */
}

.nav a:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-2px);
}

.nav a.active {
  background: var(--accent);
}

.nav-toggle { 
  display: none; 
  background: none; 
  border: none; 
  color: white; 
  font-size: 1.5rem; 
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
  transition: background 0.3s ease;
  flex-shrink: 0;
}

.nav-toggle:hover {
  background: rgba(255,255,255,0.1);
}

/* Menu mobile avec largeur complète */
@media (max-width: 768px) {
  .header-container {
    padding: 1rem;
  }
  
  .nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--primary);
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 2px 10px var(--shadow);
    width: 100%;
    margin: 0;
  }
  
  .nav.open { 
    display: flex; 
  }
  
  .nav-toggle { 
    display: block; 
  }

  .nav a {
    padding: 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    width: 100%;
    text-align: center;
  }

  .nav a:last-child {
    border-bottom: none;
  }
  
  .logo {
    font-size: 1.2rem;
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