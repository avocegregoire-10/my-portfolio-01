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

</style>