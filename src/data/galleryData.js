// Import des images
import facadeImage from '../assets/photos/Facade.jpg'
import chambreAdulte1 from '../assets/photos/Chambre_adulte_1.jpg'
import chambreAdulte2 from '../assets/photos/Chambre_adulte_2.jpg'
import chambreAdulte3 from '../assets/photos/Chambre_adulte_3.jpg'
import chambreEnfant1 from '../assets/photos/Chambre_enfant_1.jpg'
import chambreEnfant2 from '../assets/photos/Chambre_enfant_2.jpg'
import cuisineImage from '../assets/photos/cuisine_ouverte.jpg'
import plageImage from '../assets/photos/plage.jpg'
import sentierImage from '../assets/photos/sentier.jpg'

export const galleryData = [
  {
    id: 1,
    title: "Façade principale du gîte",
    description: "Vue d'ensemble de notre maison en pierre bretonne traditionnelle",
    category: "exterior",
    icon: "🏠",
    image: facadeImage
  },
  {
    id: 2,
    title: "Chambre parentale 1",
    description: "Chambre spacieuse avec lit double et décoration soignée",
    category: "rooms",
    icon: "�️",
    image: chambreAdulte1
  },
  {
    id: 3,
    title: "Chambre parentale 2",
    description: "Autre vue de la chambre parentale avec ses poutres apparentes",
    category: "rooms",
    icon: "🛏️",
    image: chambreAdulte2
  },
  {
    id: 4,
    title: "Chambre parentale 3",
    description: "Détail de l'aménagement de la chambre principale",
    category: "rooms",
    icon: "🛏️",
    image: chambreAdulte3
  },
  {
    id: 5,
    title: "Chambre enfants 1",
    description: "Chambre avec lits superposés et espace de jeu",
    category: "rooms",
    icon: "🧸",
    image: chambreEnfant1
  },
  {
    id: 6,
    title: "Chambre enfants 2",
    description: "Autre vue de la chambre enfants avec sa décoration colorée",
    category: "rooms",
    icon: "🧸",
    image: chambreEnfant2
  },
  {
    id: 7,
    title: "Cuisine ouverte",
    description: "Cuisine moderne tout équipée avec vue sur le jardin",
    category: "interior",
    icon: "🍳",
    image: cuisineImage
  },
  {
    id: 8,
    title: "Sentier côtier",
    description: "Le fameux GR34 à quelques pas du gîte",
    category: "landscape",
    icon: "🥾",
    image: sentierImage
  },
  {
    id: 9,
    title: "Plage de sable fin",
    description: "Accès direct aux plus belles plages de la région",
    category: "landscape",
    icon: "🏖️",
    image: plageImage
  }
]
