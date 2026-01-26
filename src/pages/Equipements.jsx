import { Link } from 'react-router-dom'
import './Equipements.css'
import SEO from '../components/SEO'

const Equipements = () => {
  const equipmentCategories = [
    {
      id: 'logement',
      title: 'Logement',
      icon: '🏠',
      items: [
        { name: 'Maison non mitoyenne', description: '• Adaptée pour 6 personnes avec 3 chambres, 1 salle de bains \n • Adaptée pour 10 personnes avec 5 chambres, 2 salles de bains en incluant l\'extension', icon: '🏠' },
        { name: '5 chambres', description: '• Maison principale en rez- de-chaussée incluant 3 chambres (2 chambres avec lits doubles et 1 chambre avec 2 lits simples)\n• Extension comportant 2 chambres (1 chambre à l\'étage avec un lit double et 1 chambre avec 2 lits simples)', icon: '🛏️' },
        { name: '2 salles d\'eau', description: '• Première salle de bains moderne avec douche accessible \n • Deuxième salle de bains, dans l\'extension, à l\'étage', icon: '🛁' },
        { name: 'Salon / Salle à manger', description: 'Salon ouvert favorisant la convivialité, avec TV \n • Grande table pour 10 personnes', icon: '🛋️' },
        { name: 'Cuisine', description: 'Cuisine moderne, fonctionnelle et ouverte sur la salle à manger équipée : \n • Frigo\n • Lave-vaisselle\n • Micro-ondes \n • Four et plaques \n • Grille-pain \n • Cafetières (à dosettes et à filtres) \n • Machine à raclette et à fondue', icon: '🍳' },
        { name: 'Buanderie', description: 'Buanderie équipée : \n • Lave linge \n • Sèche linge \n • Étendoir \n • Table et fer à repasser \n • Aspirateur', icon: '👕' }
      ]
    },
    {
      id: 'exterieur',
      title: 'Espaces Extérieurs',
      icon: '🌳',
      items: [
        { name: 'Jardin privatif', description: 'Spacieux, ombragé, calme, fleuri avec quelques arbres fruitiers et plantes aromatiques', icon: '🌳' },
        { name: 'Terrasse', description: 'Ensoleillée, sans vis-à-vis avec mobilier de jardin', icon: '🪑' },
        { name: 'Barbecue', description: 'Pour vos grillades', icon: '🔥' },
        { name: 'Parking', description: 'Stationnement sur la propriété', icon: '🚗' },
        { name: 'Aire de jeu pour enfants', description: 'Toboggan et balançoire', icon: '🛝' }
      ]
    },
    {
      id: 'confort',
      title: 'Confort & Services',
      icon: '⭐',
      items: [
        { name: 'Salle de Loisir', description: 'Salle de loisir sur site à partager avec le second gîte avec tables de ping pong, jeux de société', icon: '🎉' },
        { name: 'Linge de lit', description: 'Location possible : 15€/lits simples & 20€/lits doubles', icon: '🛏️' },
        { name: 'Kit d\'entretien', description: 'Quelques pastilles lave-vaisselle, produit vaisselle, sacs poubelles, éponges et produit multi-usage', icon: '🧽' },
        { name: 'Ménage', description: 'Le ménage de fin de séjour peut être inclus sur demande moyennant un supplément de 100€', icon: '🧹' }
      ]
    },
    {
      id: 'pratique',
      title: 'Informations Pratiques',
      icon: '💡',
      items: [
        { name: 'Animaux bienvenus', description: 'Gratuitement, arbres à chat, plaid et gamelle à la demande', icon: '🐕' },
        { name: 'Non-fumeur', description: 'Maison entièrement non-fumeur', icon: '🚭' },
        { name: 'Arrivée flexible', description: 'À partir de 16h', icon: '🕐' },
        { name: 'Départ', description: 'Avant 11h', icon: '🕐' },
        { name: 'Commerce', description: 'à 10km', icon: '🛒' },
      ]
    }
  ]

  // Render description: if it contains newlines or bullet characters, render as a list
  const renderDescription = (desc) => {
    if (!desc) return null
    // Split on newline characters or the bullet character •
    const parts = desc.split(/\n|•/).map(s => s.trim()).filter(Boolean)
    if (parts.length > 1) {
      return (
        <ul className="equipment-bullet-list">
          {parts.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )
    }
    return <p>{desc}</p>
  }

  return (
    <>
      <SEO
        title="Équipements & Services - Ar Ty Nevez"
        description="Liste complète des équipements et services disponibles au gîte Ar Ty Nevez à Lespiguet — confort, cuisine équipée, espaces extérieurs et services pour la famille."
        keywords={["équipements", "services", "gîte", "Ar Ty Nevez", "Lespiguet"]}
      />
      <div className="equipements-page">
      <div className="container">
        <header className="equipements-header">
          <h1>Équipements & Services</h1>
          <p>Découvrez tout ce qui vous attend pour un séjour confortable</p>
        </header>

        <div className="equipment-grid">
          {equipmentCategories.map(category => (
            <div key={category.id} className="equipment-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h2>{category.title}</h2>
              </div>
              
              <div className="equipment-list">
                {category.items.map((item, index) => (
                  <div key={index} className="equipment-item">
                    <span className="item-icon">{item.icon}</span>
                    <div className="item-content">
                      <h3>{item.name}</h3>
                      {renderDescription(item.description)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Equipements
