import { Link } from 'react-router-dom'
import './Equipements.css'

const Equipements = () => {
  const equipmentCategories = [
    {
      id: 'logement',
      title: 'Logement',
      icon: '🏠',
      items: [
        { name: 'Maison entière', description: '6 à 10 personnes', icon: '🏠' },
        { name: '5 chambres', description: 'Confortables et spacieuses', icon: '🛏️' },
        { name: '2 salles d\'eau', description: 'Modernes et fonctionnelles', icon: '🛁' },
        { name: 'Salon spacieux', description: 'Avec cheminée et TV', icon: '🛋️' },
        { name: 'Salle à manger', description: 'Grande table pour 10 personnes', icon: '🍽️' }
      ]
    },
    {
      id: 'cuisine',
      title: 'Cuisine & Électroménager',
      icon: '🍳',
      items: [
        { name: 'Cuisine équipée', description: 'Moderne et fonctionnelle', icon: '🍳' },
        { name: 'Réfrigérateur', description: 'Grande capacité', icon: '❄️' },
        { name: 'Four et plaque', description: 'Électriques', icon: '🔥' },
        { name: 'Micro-ondes', description: 'Pour réchauffer rapidement', icon: '📱' },
        { name: 'Lave-vaisselle', description: 'Pour votre confort', icon: '🍽️' },
        { name: 'Lave-linge', description: 'Dans buanderie séparée', icon: '👕' },
        { name: 'Cafetière', description: 'Et bouilloire électrique', icon: '☕' }
      ]
    },
    {
      id: 'exterieur',
      title: 'Espaces Extérieurs',
      icon: '🌳',
      items: [
        { name: 'Jardin privatif', description: 'Clôturé et sécurisé', icon: '🌳' },
        { name: 'Terrasse', description: 'Avec mobilier de jardin', icon: '🪑' },
        { name: 'Barbecue', description: 'Pour vos grillades', icon: '🔥' },
        { name: 'Parking privé', description: '2 places de stationnement', icon: '🚗' },
        { name: 'Abri de jardin', description: 'Pour ranger vélos/matériel', icon: '🏠' }
      ]
    },
    {
      id: 'confort',
      title: 'Confort & Services',
      icon: '⭐',
      items: [
        { name: 'WiFi gratuit', description: 'Haut débit dans toute la maison', icon: '📶' },
        { name: 'Chauffage', description: 'Électrique dans toutes les pièces', icon: '🌡️' },
        { name: 'Linge de lit', description: 'Fourni et changé', icon: '🛏️' },
        { name: 'Serviettes', description: 'De bain fournies', icon: '🏊' },
        { name: 'Fer à repasser', description: 'Et planche disponibles', icon: '👔' },
        { name: 'Aspirateur', description: 'Pour l\'entretien', icon: '🧹' }
      ]
    },
    {
      id: 'loisirs',
      title: 'Loisirs & Détente',
      icon: '🎯',
      items: [
        { name: 'Télévision', description: 'Écran plat avec TNT', icon: '📺' },
        { name: 'Jeux de société', description: 'Pour toute la famille', icon: '🎲' },
        { name: 'Livres & guides', description: 'Sur la région', icon: '📚' },
        { name: 'Cheminée', description: 'Pour les soirées cocooning', icon: '🔥' }
      ]
    },
    {
      id: 'pratique',
      title: 'Informations Pratiques',
      icon: '💡',
      items: [
        { name: 'Animaux acceptés', description: 'Avec supplément', icon: '🐕' },
        { name: 'Non-fumeur', description: 'Maison entièrement non-fumeur', icon: '🚭' },
        { name: 'Arrivée flexible', description: 'À partir de 16h', icon: '🕐' },
        { name: 'Départ', description: 'Avant 11h', icon: '🕐' },
        { name: 'Commerce', description: '5 min en voiture', icon: '🛒' }
      ]
    }
  ]

  return (
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
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section informations importantes */}
        <div className="important-info">
          <h2>Informations importantes</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">📋</div>
              <h3>Inventaire</h3>
              <p>Un inventaire détaillé est réalisé à l'arrivée et au départ. Nous vous demandons de prendre soin du matériel mis à disposition.</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🧹</div>
              <h3>Ménage</h3>
              <p>Le ménage de fin de séjour peut être inclus sur demande moyennant un supplément de 80€.</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🔑</div>
              <h3>Remise des clés</h3>
              <p>Les clés vous seront remises en main propre lors de votre arrivée. Un contact sur place est disponible en cas de besoin.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Prêt pour votre séjour ?</h2>
          <p>Tous ces équipements vous attendent pour des vacances réussies</p>
          <div className="cta-buttons">
            <Link to="/galerie" className="btn-secondary">Voir les photos</Link>
            <Link to="/contact" className="btn-primary">Réserver maintenant</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Equipements
