<script setup>
    import Header from './components/Header.vue'
    import PortfolioContent from './components/Content.vue'
    import FormContact from './components/FormContact.vue'
    import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <!-- Header en haut de page -->
    <Header />
    
    <!-- Contenu principal du portfolio -->
    <PortfolioContent />
    
    <!--Formulaire de contact-->
    <FormContact />

     <!-- Footer en bas de page -->
    <Footer />
  </div>
</template>

<style>
/* Hero Section - Design Moderne */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 2rem 4rem;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: backgroundMove 20s ease-in-out infinite;
}

.hero-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: 
    radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(2px 2px at 60% 70%, rgba(255, 255, 255, 0.2), transparent),
    radial-gradient(1px 1px at 50% 50%, rgba(255, 255, 255, 0.4), transparent);
  background-size: 200% 200%;
  animation: particlesMove 15s ease-in-out infinite;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.info-desc {
  flex: 1;
  max-width: 700px;
  animation: slideInLeft 1s ease-out;
}

.greeting {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
  font-weight: 400;
  letter-spacing: 1px;
}

.info-desc h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 1rem;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -1px;
}

.subtitle {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
}

.highlight {
  color: #FFD700;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.typing-animation {
  font-size: clamp(1rem, 2vw, 1.3rem);
  margin-bottom: 2.5rem;
  min-height: 2rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.8;
}

.typing-text {
  display: inline-block;
}

.cursor {
  display: inline-block;
  width: 3px;
  height: 1.3em;
  background: #FFD700;
  margin-left: 4px;
  animation: blink 1s infinite;
  vertical-align: baseline;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes backgroundMove {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-5%, -5%) scale(1.1); }
}

@keyframes particlesMove {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
}

.project-link-bloc {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.project-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 50px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.project-button.primary-btn {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #1a1a1a;
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
}

.project-button.primary-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.project-button.primary-btn:hover::before {
  width: 300px;
  height: 300px;
}

.project-button.secondary-btn {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.project-button.secondary-btn:hover {
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);
}

.project-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 30px rgba(255, 215, 0, 0.5);
}

.project-button svg {
  transition: transform 0.3s ease;
}

.project-button:hover svg {
  transform: translateX(5px);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: slideInRight 1s ease-out;
}

.image-wrapper {
  position: relative;
  animation: float 6s ease-in-out infinite;
}

.dev-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
  transition: all 0.5s ease;
  z-index: 2;
  position: relative;
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
  z-index: 1;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 3;
  animation: bounce 2s infinite;
}

.mouse {
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 1.5s infinite;
}

.arrow {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.arrow span {
  width: 8px;
  height: 8px;
  border-right: 2px solid rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  transform: rotate(45deg);
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-15px) rotate(2deg); }
  66% { transform: translateY(-5px) rotate(-1deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

@keyframes scrollWheel {
  0% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(12px); }
}

@keyframes slideInLeft {
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Sections communes */
.section {
  padding: 6rem 2rem;
  position: relative;
}

.section-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.libelle-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--primary);
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 4rem;
  position: relative;
  padding-bottom: 1.5rem;
}

.title-number {
  color: var(--accent);
  font-family: 'Courier New', monospace;
  font-weight: 600;
  font-size: 0.8em;
}

.title-text {
  position: relative;
}

.libelle-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  border-radius: 2px;
}

.proof-bloc {
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 50px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), #c0392b);
  color: white;
  box-shadow: 0 4px 20px rgba(231, 76, 60, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(231, 76, 60, 0.5);
}

.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-3px);
}

.btn svg {
  transition: transform 0.3s ease;
}

.btn:hover svg {
  transform: scale(1.1);
}

/* About Section */
.about {
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
}

.about-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-content.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-intro {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-paragraph {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  text-align: justify;
  animation: fadeInUp 0.8s ease backwards;
}

.about-paragraph:nth-child(1) { animation-delay: 0.1s; }
.about-paragraph:nth-child(2) { animation-delay: 0.2s; }
.about-paragraph:nth-child(3) { animation-delay: 0.3s; }
.about-paragraph:nth-child(4) { animation-delay: 0.4s; }

.profile-image-bloc {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.profile-frame {
  position: relative;
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1;
  animation: fadeInScale 1s ease backwards;
  animation-delay: 0.5s;
}

.profile-pic {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
}

.profile-border {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #764ba2);
  z-index: 1;
  animation: rotateBorder 8s linear infinite;
  opacity: 0.8;
}

.profile-pic:hover {
  transform: scale(1.05);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes rotateBorder {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Skills Section */
.skills {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
  position: relative;
}

.skill-categories {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-categories.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.skill-category {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(102, 126, 234, 0.1);
  position: relative;
  overflow: hidden;
  width: 100%;
}

.skill-category.technical-skills {
  margin-bottom: 0;
  border-bottom: none;
  padding-bottom: 3rem;
}

.skill-category.technical-skills::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3), transparent);
  border-radius: 2px;
}

.skill-category.soft-skills {
  margin-top: 0;
  padding-top: 4rem;
  position: relative;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), white 20%);
}

.skill-category.soft-skills::before {
  content: '';
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(118, 75, 162, 0.5), rgba(102, 126, 234, 0.5), transparent);
  border-radius: 2px;
}

.skill-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), #764ba2);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.skill-category:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.skill-category:hover::before {
  transform: scaleX(1);
}

.category-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(102, 126, 234, 0.1);
}

.category-header h3 {
  color: var(--primary);
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
}

.technical-skills .category-header h3 {
  color: #667eea;
}

.soft-skills .category-header h3 {
  color: #764ba2;
}

.skills-block {
  margin-bottom: 3rem;
}

.skills-block:last-child {
  margin-bottom: 0;
}

.block-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: 25px;
  display: block;
  width: 100%;
  position: relative;
  box-sizing: border-box;
}

.technical-skills .with-logos .block-label {
  color: #667eea;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(102, 126, 234, 0.05));
}

.technical-skills .without-logos .block-label {
  color: #764ba2;
  background: linear-gradient(135deg, rgba(118, 75, 162, 0.15), rgba(118, 75, 162, 0.05));
}

.soft-skills .block-label {
  color: #764ba2;
  background: linear-gradient(135deg, rgba(118, 75, 162, 0.15), rgba(118, 75, 162, 0.05));
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1.5rem;
  justify-items: center;
  width: 100%;
}

.skills-block.with-logos {
  padding-bottom: 2rem;
  margin-bottom: 2.5rem;
  border-bottom: 2px solid rgba(102, 126, 234, 0.15);
}

.skills-block.without-logos {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.soft-skills .skills-block.without-logos {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.soft-skills .skills-block.without-logos .skills-grid {
  width: 100%;
}

.technical-skills .skills-block.without-logos {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.technical-skills .skills-block.without-logos .skills-grid {
  width: 100%;
}

.technical-skills .skills-block.with-logos .skills-grid {
  width: 100%;
}

.skill-card {
  width: 100%;
  max-width: 160px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid rgba(102, 126, 234, 0.1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8) translateY(20px);
  animation: skillCardAppear 0.6s ease forwards;
}

.logo-card {
  border-color: rgba(102, 126, 234, 0.2);
  background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.02) 100%);
}

.logo-card:hover {
  border-color: rgba(102, 126, 234, 0.4);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.25);
}

.icon-card {
  border-color: rgba(118, 75, 162, 0.15);
  background: linear-gradient(135deg, #ffffff 0%, rgba(118, 75, 162, 0.02) 100%);
}

.icon-card:hover {
  border-color: rgba(118, 75, 162, 0.35);
  box-shadow: 0 12px 30px rgba(118, 75, 162, 0.2);
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.skill-card:hover::before {
  opacity: 1;
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.2);
  border-color: rgba(102, 126, 234, 0.3);
}

.skill-icon-wrapper {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;
  padding: 0.5rem;
}

.logo-wrapper {
  background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.05) 100%);
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.icon-wrapper {
  background: linear-gradient(135deg, #ffffff 0%, rgba(118, 75, 162, 0.05) 100%);
  border: 1px solid rgba(118, 75, 162, 0.1);
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 60px;
  max-height: 60px;
  transition: transform 0.4s ease;
}

.logo-card:hover .logo-image {
  transform: scale(1.15);
}

.skill-card:hover .skill-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.skill-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon svg {
  width: 100%;
  height: 100%;
  max-width: 60px;
  max-height: 60px;
  transition: transform 0.4s ease;
}

.skill-card:hover .skill-icon svg {
  transform: scale(1.15);
}

.skill-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  position: relative;
  z-index: 1;
}

.skill-name {
  font-weight: 600;
  color: var(--primary);
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.skill-card:hover .skill-name {
  color: var(--accent);
}

.skill-level-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, var(--accent), #764ba2);
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(231, 76, 60, 0.2);
}

.skill-level {
  font-weight: 700;
  color: white;
  font-size: 0.75rem;
}

@keyframes skillCardAppear {
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Projects Section */
.projects {
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
  position: relative;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-grid.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.project-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(102, 126, 234, 0.1);
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.project-card:hover::before {
  opacity: 1;
}

.project-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.project-image-wrapper {
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  background: #f0f0f0;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

.project-card:hover .project-image {
  transform: scale(1.15) rotate(2deg);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 3;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-tech {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.project-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
}

.project-title {
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.project-card:hover .project-title {
  color: var(--accent);
}

.project-description {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.7;
  flex: 1;
  font-size: 0.95rem;
}

.project-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--accent), #c0392b);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.project-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
}

.project-link svg {
  transition: transform 0.3s ease;
}

.project-link:hover svg {
  transform: translateX(3px);
}

.mission-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mission-btn:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(44, 62, 80, 0.3);
}

.mission-btn svg {
  transition: transform 0.3s ease;
}

.mission-btn:hover svg {
  transform: rotate(360deg);
}

/* Contact Section */
.contact {
  background: linear-gradient(135deg, var(--primary) 0%, #1a252f 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

.contact h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.2;
}

.contact h2 span {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-form {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
}

.form-group {
  position: relative;
}

.contact input, .contact textarea { 
  width: 100%;
  padding: 1rem; 
  border: 2px solid transparent; 
  border-radius: 10px;
  background: rgba(255,255,255,0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.contact input::placeholder, .contact textarea::placeholder {
  color: rgba(255,255,255,0.7);
}

.contact input:focus, .contact textarea:focus {
  outline: none;
  border-color: #FFD700;
  background: rgba(255,255,255,0.15);
}

.contact input.error, .contact textarea.error {
  border-color: #ff6b6b;
}

.validate-message {
  color: #ff6b6b;
  font-size: 0.9rem;
  display: block;
  text-align: left;
  margin-top: 0.5rem;
}

.success-message {
  background: var(--success);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  animation: slideInDown 0.5s ease;
}

.success-message h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.success-message p {
  margin-bottom: 1rem;
}

@keyframes slideInDown {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.status-message {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
}

/* Footer */
.site-footer { 
  text-align: center; 
  padding: 2rem; 
  background: #1a1a1a; 
  color: white; 
}

/* Loading Animation */
.loading {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Disabled button */
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }

  .info-desc {
    max-width: 100%;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .skill-categories {
    gap: 3rem;
  }

  .project-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--primary);
    padding: 1rem;
  }
  
  .nav.open { 
    display: flex; 
  }
  
  .nav-toggle { 
    display: block; 
  }

  .hero {
    padding: 6rem 1.5rem 3rem;
    min-height: auto;
  }

  .hero-content {
    flex-direction: column;
    gap: 2rem;
  }

  .info-desc {
    text-align: center;
  }

  .project-link-bloc {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about-paragraph {
    text-align: left;
  }

  .profile-frame {
    max-width: 280px;
  }

  .skill-categories {
    gap: 3rem;
  }

  .skill-category {
    padding: 2rem;
  }

  .skill-category.technical-skills {
    padding-bottom: 2rem;
  }

  .skill-category.technical-skills::after {
    left: 5%;
    right: 5%;
  }

  .skill-category.soft-skills {
    padding-top: 3rem;
    margin-top: 0;
  }

  .skill-category.soft-skills::before {
    top: 1.5rem;
    width: 120px;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1.25rem;
  }

  .skills-block {
    margin-bottom: 2rem;
  }

  .skills-block.with-logos {
    padding-bottom: 1.5rem;
    margin-bottom: 2rem;
  }

  .skills-block.without-logos {
    align-items: center;
  }

  .block-label {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    width: 100%;
  }

  .skills-grid {
    width: 100%;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-image-wrapper {
    height: 220px;
  }

  .proof-bloc {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .libelle-title {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .section {
    padding: 4rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 5rem 1rem 2rem;
  }

  .greeting {
    font-size: 1rem;
  }

  .project-link-bloc {
    flex-direction: column;
  }

  .project-button {
    width: 100%;
    justify-content: center;
  }

  .social-links {
    gap: 0.75rem;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }

  .profile-frame {
    max-width: 250px;
  }

  .skill-category {
    padding: 1.5rem;
  }

  .skill-category.technical-skills {
    padding-bottom: 1.5rem;
  }

  .skill-category.technical-skills::after {
    left: 2%;
    right: 2%;
  }

  .skill-category.soft-skills {
    padding-top: 2.5rem;
    margin-top: 0;
  }

  .skill-category.soft-skills::before {
    top: 1rem;
    width: 100px;
    height: 2px;
  }

  .category-header h3 {
    font-size: 1.3rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
  }

  .skills-block {
    margin-bottom: 1.5rem;
  }

  .skills-block.with-logos {
    padding-bottom: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .skills-block.without-logos {
    align-items: center;
  }

  .block-label {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  .skills-grid {
    width: 100%;
  }

  .skill-card {
    max-width: 120px;
    padding: 1.25rem 0.75rem;
  }

  .skill-icon-wrapper {
    width: 60px;
    height: 60px;
  }

  .skill-icon svg {
    max-width: 45px;
    max-height: 45px;
  }

  .skill-name {
    font-size: 0.8rem;
  }

  .project-actions {
    flex-direction: column;
  }

  .project-link,
  .mission-btn {
    width: 100%;
    justify-content: center;
  }

  .section {
    padding: 3rem 1rem;
  }

  .libelle-title {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }

  .scroll-indicator {
    display: none;
  }
}

/* Animations d'apparition globales */
.fade-in {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, var(--accent), #764ba2);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #c0392b, var(--accent));
}
</style>