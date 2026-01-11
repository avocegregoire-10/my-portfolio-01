<script setup>
    import {useProfileStore} from '../stores/profile'
    const profileStore = useProfileStore()
</script>

<template>
     <footer class="site-footer">
      <p>&copy; 2025 {{ profileStore.name}}. Tous droits réservés.</p>
    </footer>
</template>

<style scoped>
.site-footer {
  text-align: center;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent);
}

.site-footer p {
  margin: 0;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .site-footer {
    padding: 2rem 1rem;
  }
  
  .site-footer p {
    font-size: 0.85rem;
  }
}
</style>