<script setup>
    import { ref, reactive, onMounted } from 'vue'
    import emailjs from '@emailjs/browser'

    // Configuration EmailJS manquante
    const emailjsConfig = {
        serviceId: 'service_sd2f4kd',
        templateId: 'template_ko307e1', 
        publicKey: 'LkQzXKV3iz1gJVROW',       
        toEmail: 'avocegregorysag@gmail.com',
        useTestMode: true // Passez à false en production
    }

    // États du formulaire
    const isSubmitting = ref(false)
    const formSubmitted = ref(false)
    const emailStatus = ref('')

    // Données du formulaire
    const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
    })

    // Gestion des erreurs
    const errors = reactive({})

    // Initialisation d'EmailJS
    onMounted(() => {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init(emailjsConfig.publicKey)
    console.log('EmailJS initialisé')
    })

    // Validation email
    const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
    }

    // Validation du formulaire
    const validateForm = () => {
    // Vider les erreurs précédentes
    Object.keys(errors).forEach(key => delete errors[key])

    if (!form.name.trim()) {
        errors.name = 'Le nom est requis'
    }

    if (!form.email.trim()) {
        errors.email = 'L\'email est requis'
    } else if (!isValidEmail(form.email)) {
        errors.email = 'Format d\'email invalide'
    }

    if (!form.subject.trim()) {
        errors.subject = 'Le sujet est requis'
    }

    if (!form.message.trim()) {
        errors.message = 'Le message est requis'
    }

    return Object.keys(errors).length === 0
    }

    // Envoi du formulaire
    const sendEmail = async () => {
    if (!validateForm()) {
        return
    }

    isSubmitting.value = true
    emailStatus.value = 'Envoi en cours...'

    try {
        // Paramètres du template EmailJS
        const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_name: 'Votre Nom', // Destinataire
        reply_to: form.email
    }

    console.log('Envoi email avec EmailJS...', templateParams)

    // Envoi via EmailJS
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams
    )

    console.log('Email envoyé avec succès:', response)
    
    // Succès
    formSubmitted.value = true
    emailStatus.value = 'Message envoyé avec succès!'
    
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      resetForm()
    }, 3000)

  } catch (error) {
    console.error('Erreur EmailJS:', error)
    emailStatus.value = 'Erreur lors de l\'envoi: ' + error.text
    
    // Message d'erreur utilisateur
    let userMessage = 'Erreur lors de l\'envoi.'
    
    if (error.status === 400) {
      userMessage = 'Données invalides. Vérifiez vos informations.'
    } else if (error.status === 402) {
      userMessage = 'Quota EmailJS dépassé.'
    } else if (error.status === 422) {
      userMessage = 'Template EmailJS non trouvé.'
    }
    
    alert(userMessage)
    
  } finally {
    isSubmitting.value = false
  }
}

// Réinitialiser le formulaire
const resetForm = () => {
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  
  Object.keys(errors).forEach(key => delete errors[key])
  formSubmitted.value = false
  emailStatus.value = ''
}
</script>

<template>
  <section id="contact" class="contact section">
      <div class="contact-container">
        <h2>Avez-vous un projet <span>en tête</span> ?<br>N'hésitez pas à me <span>contacter</span>.</h2>

        <form class="contact-form" @submit.prevent="sendEmail" v-if="!formSubmitted">
          <div class="form-group">
            <input type="text" 
                   id="name"
                   v-model="form.name" 
                   placeholder="Votre nom"
                   :class="{ error: errors.name }">
            <span class="validate-message" v-if="errors.name">{{ errors.name }}</span>
          </div>
          
          <div class="form-group">
            <input type="email" 
                   id="email"
                   v-model="form.email" 
                   placeholder="Votre email"
                   :class="{ error: errors.email }">
            <span class="validate-message" v-if="errors.email">{{ errors.email }}</span>
          </div>
          
          <div class="form-group">
            <input type="text" 
                   id="subject"
                   v-model="form.subject" 
                   placeholder="Objet du message"
                   :class="{ error: errors.subject }">
            <span class="validate-message" v-if="errors.subject">{{ errors.subject }}</span>
          </div>
          
          <div class="form-group">
            <textarea 
                id="message"
                v-model="form.message" 
                rows="5" 
                placeholder="Votre message"
                :class="{ error: errors.message }">
            </textarea>
            <span class="validate-message" v-if="errors.message">{{ errors.message }}</span>
          </div>
          
          <button type="submit" class="btn" :disabled="isSubmitting">
            <span v-if="isSubmitting" class="loader"></span>
            <span v-else>Envoyer le message</span>
          </button>
        </form>

        <!-- Message de succès -->
        <div v-if="formSubmitted" class="success-message">
          <h3>Message envoyé avec succès !</h3>
          <p>Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
          <button @click="resetForm" class="btn" style="margin-top: 1rem;">
            Envoyer un autre message
          </button>
        </div>

      <!-- Status des services email -->
        <div v-if="emailStatus" class="status-message" style="margin-top: 2rem; text-align: left;">
          <strong>Status Email :</strong> {{ emailStatus }}
        </div>
      </div>
    </section>
</template>

<style scoped>
.loader {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.contact-form {
  animation: fadeInUp 0.6s ease;
}

.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
}

.form-group .validate-message {
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

.success-message {
  animation: scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.status-message {
  animation: fadeIn 0.4s ease;
}
</style>