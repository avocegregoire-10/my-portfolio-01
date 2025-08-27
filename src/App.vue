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

/* Hero Section */
.hero { 
  background: var(--gradient);
  color: white; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem; 
  min-height: 50vh;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.05)" points="0,1000 1000,800 1000,1000"/></svg>');
  background-size: cover;
}

.info-desc {
  margin-left: 19rem;
  flex: 1;
  z-index: 2;
  animation: slideInLeft 1s ease-out;
}

.info-desc h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.highlight { 
  color: #FFD700;
}

.info-desc p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.typing-animation {
  border-right: 2px solid #FFD700;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: #FFD700; }
}

.project-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.project-button, .btn, .mission-btn {
  background: var(--accent); 
  color: white; 
  padding: 1rem 2rem; 
  font-weight: bold; 
  border-radius: 50px; 
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.mission-btn{
  font-size: 15px;
}

.project-button:hover, .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
}

.hero-image{
  flex: 1;
  display: flex;
  justify-content: center;
  
}

.dev-image {
  width: 400px; 
  height: 100%;
  object-fit: cover;
  box-shadow: 0 10px 30px var(--shadow);
  transition: all 0.3s ease;
  border-radius: 20px;
  animation: float 3s ease-in-out infinite;
  z-index: 2;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes slideInLeft {
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Sections communes */
.section {
  padding: 4rem 2rem;
}

.libelle-title {
  text-align: center; 
  color: var(--primary); 
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
}

.libelle-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: var(--accent);
  border-radius: 2px;
}

.proof-bloc{
  display: flex;
}

.certificat-link{
  margin-left: 25px;
}

/* About Section */
.about {
  background: white;
}

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-text {
  flex: 2;
}

.about-text p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.profile-image-bloc {
  flex: 1;
  display: flex;
  justify-content: center;
}

.profile-pic {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 5px solid var(--accent);
  object-fit: cover;
  box-shadow: 0 10px 30px var(--shadow);
  transition: all 0.3s ease;
}

.profile-pic:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px var(--shadow);
}

/* Skills Section */
.skills {
  background: var(--bg);
}

.skill-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.skill-category {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px var(--shadow);
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px var(--shadow);
}

.skill-category h3 {
  margin-bottom: 1.5rem;
  color: var(--primary);
  font-size: 1.3rem;
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skill-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.skill-bar {
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: var(--gradient);
  border-radius: 5px;
  transition: width 2s ease-in-out;
  animation: progressAnimation 2s ease-in-out;
}

@keyframes progressAnimation {
  from { width: 0%; }
}

/* Projects Section */
.projects {
  background: white;
}

.project-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem; 
  max-width: 1400px;
  margin: 0 auto;
}

.project-card { 
  background: white; 
  border-radius: 15px; 
  box-shadow: 0 5px 20px var(--shadow); 
  transition: all 0.3s ease; 
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

.project-card:hover { 
  transform: translateY(-10px) scale(1.02); 
  box-shadow: 0 15px 40px var(--shadow);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.3s ease;
}

.project-card:hover img {
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.project-content p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

/* Contact Section */
.contact { 
  background: var(--primary);
  color: white;
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.contact h2 span {
  color: #FFD700;
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
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
  }

  .info-desc {
    margin-left: 0;
  }

  .info-desc h1 {
    font-size: 2rem;
  }

  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .skill-categories {
    grid-template-columns: 1fr;
  }

  .project-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .dev-image {
    width: 300px;
  }

  .contact h2 {
    font-size: 1.8rem;
  }

  .proof-bloc {
    flex-direction: column;
    align-items: center;
  }

  .certificat-link {
    margin-left: 0;
    margin-top: 1rem;
  }
}

@media (max-width: 480px) {
  .info-desc h1 {
    font-size: 1.5rem;
  }

  .dev-image {
    width: 250px;
  }

  .skill-categories {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact h2 {
    font-size: 1.5rem;
  }
}

/* Animations d\'apparition */
.fade-in {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>