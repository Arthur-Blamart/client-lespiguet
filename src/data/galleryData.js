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
import salonImage from '../assets/photos/Salon.jpg'
import salleBains1 from '../assets/photos/Salle_bains_1.jpg'
import salleBains2 from '../assets/photos/Salle_bains_2.JPG'
import jardinImage from '../assets/photos/Jardin.jpg'

export const galleryData = [
  {
    id: 1,
    title: "Façade principale du gîte",
    description: "Vue d'ensemble de notre maison spacieuse bretonne",
    category: "exterior",
    icon: "🏠",
    image: facadeImage
  },
  {
    id: 2,
    title: "Chambre parentale 1",
    description: "Chambre spacieuse avec lit double, lit 140cm",
    category: "rooms",
    icon: "🛏️",
    image: chambreAdulte1
  },
  {
    id: 3,
    title: "Chambre parentale 2",
    description: "Chambre spacieuse avec lit double, lit 160cm",
    category: "rooms",
    icon: "🛏️",
    image: chambreAdulte2
  },
  {
    id: 4,
    title: "Chambre parentale 3",
    description: "Chambre spacieuse isolée avec lit double 140cm",
    category: "rooms",
    icon: "🛏️",
    image: chambreAdulte3
  },
  {
    id: 5,
    title: "Chambre enfants 1",
    description: "Chambre avec 2 lits ",
    category: "rooms",
    icon: "🧸",
    image: chambreEnfant1
  },
  {
    id: 6,
    title: "Chambre enfants 2",
    description: "Chambre enfants avec deux lits 90cm accessible de plain-pied",
    category: "rooms",
    icon: "🧸",
    image: chambreEnfant2
  },
  {
    id: 7,
    title: "Cuisine ouverte",
    description: "Cuisine moderne équipée avec Frigo, Lave-vaisselle et micro-ondes",
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
    title: "Plages sauvages",
    description: "Accès rapide aux plus belles plages de la région",
    category: "landscape",
    icon: "🏖️",
    image: plageImage
  },
  {
    id: 10,
    title: "Salon lumineux",
    description: "Salon spacieux et confortable pour se détendre en famille",
    category: "interior",
    icon: "🛋️",
    image: salonImage
  },
  {
    id: 11,
    title: "Salle de bains 1",
    description: "Salle de bains moderne avec douche à l'italienne",
    category: "interior",
    icon: "🚿",
    image: salleBains1
  },
  {
    id: 12,
    title: "Salle de bains 2",
    description: "Deuxième salle de bains avec baignoire",
    category: "interior",
    icon: "🛁",
    image: salleBains2
  },
  {
    id: 13,
    title: "Jardin clos",
    description: "Grand jardin sécurisé, idéal pour les enfants et les repas en plein air",
    category: "exterior",
    icon: "🌳",
    image: jardinImage
  }
]
