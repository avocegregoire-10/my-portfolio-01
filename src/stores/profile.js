import { defineStore } from 'pinia'
import heroImagePath from '../assets/images/Segla-G-1-removebg-preview.png'
import profileImagePath from '../assets/images/Segla-2-removebg-preview.png'

export const useProfileStore = defineStore('profile', {
  state: () => ({
      name: 'S. Grégoire AVOCE',
      title: 'Développeur Full Stack',
      heroImage: heroImagePath,
      profileImage: profileImagePath,
      about: [
        'S. Grégoire AVOCE, créateur de sites web modernes et interactifs, j\'adore transformer des idées en réalité digitale.',
        'Déterminé, ambitieux, curieux et persévérant, je suis un jeune passionné par l\'informatique, le développement des solutions numériques aux problèmes spécifiques de la société.',
        'Je suis Développeur Logiciel et Chargé de Projets Informatiques. Mon ambition est de contribuer à la promotion de l\'inclusion numérique des jeunes.',
        'Je m\'épanouis dans la transformation des idées en projets concrets avec les nouvelles technologies.'
      ],
      cvUrl: 'images/Gregoire_AVOCE_CV.pdf',
      certificatUrls: 'images/certificats_attestations.pdf'
  }),
  actions: {
    updateProfile(newProfile) {
      this.name = newProfile.name
      this.title = newProfile.title
      this.heroImage = newProfile.heroImage
      this.profileImage = newProfile.profileImage
      this.about = newProfile.about
      this.cvUrl = newProfile.cvUrl
      this.certificatUrls = newProfile.certificatUrls
    }
  }
})
