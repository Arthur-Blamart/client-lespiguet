import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Bienvenue à Ar Ty Nevez</h1>
            <p>Votre gîte de charme à Lespiguet sur la magnifique Pointe de Crozon</p>
            <p>Découvrez un havre de paix au cœur du Finistère, entre mer et nature sauvage</p>
            <Link to="/contact" className="cta-button">Réserver maintenant</Link>
          </div>
          <div className="hero-image">
            <div className="placeholder-image">
              📸 Photo principale du gîte
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="description">
        <div className="container">
          <h2>Un cadre exceptionnel</h2>
          <div className="description-grid">
            <div className="description-text">
              <p>
                Le gîte Ar Ty Nevez vous accueille dans un cadre authentique et chaleureux, 
                idéalement situé à Lespiguet sur la prestigieuse Pointe de Crozon. Cette maison de caractère 
                en pierre bretonne offre tout le confort moderne tout en conservant son charme d'antan.
              </p>
              <p>
                Profitez d'une vue imprenable sur la mer et d'un accès privilégié aux plus belles 
                plages du Finistère. Que vous soyez amateurs de randonnées, de sports nautiques ou 
                simplement en quête de tranquillité, notre gîte est le point de départ idéal pour 
                découvrir les merveilles de la Bretagne.
              </p>
            </div>
            <div className="features">
              <h3>Équipements</h3>
              <ul>
                <li>🏠 Maison entière (4-6 personnes)</li>
                <li>🛏️ 3 chambres confortables</li>
                <li>🛁 2 salles de bain</li>
                <li>🍳 Cuisine équipée</li>
                <li>🌳 Jardin privatif</li>
                <li>🚗 Parking privé</li>
                <li>📶 WiFi gratuit</li>
                <li>🐕 Animaux acceptés</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location">
        <div className="container">
          <h2>Situation géographique</h2>
          <div className="location-grid">
            <div className="location-text">
              <h3>Au cœur de Lespiguet</h3>
              <p>
                Située dans le Parc Naturel Régional d'Armorique, Lespiguet sur la Pointe de Crozon 
                offre des paysages à couper le souffle. Notre gîte se trouve à :
              </p>
              <ul>
                <li>🏖️ 5 min des plages de sable fin</li>
                <li>🥾 Sur le GR34 (sentier des douaniers)</li>
                <li>🏛️ 15 min du centre de Crozon</li>
                <li>🚗 45 min de Brest</li>
                <li>⛵ 20 min du port de Camaret-sur-Mer</li>
              </ul>
            </div>
            <div className="location-map">
              <div className="placeholder-map">
                🗺️ Carte de localisation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Réservez votre séjour</h2>
          <p>Découvrez la beauté sauvage de la Bretagne depuis notre gîte de charme</p>
          <div className="cta-buttons">
            <Link to="/galerie" className="btn-secondary">Voir la galerie</Link>
            <Link to="/contact" className="btn-primary">Nous contacter</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
