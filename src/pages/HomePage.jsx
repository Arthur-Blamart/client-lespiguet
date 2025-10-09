import { Link } from 'react-router-dom'
import './HomePage.css'
import facadeImage from '../assets/photos/Facade.jpg'

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Bienvenue à Ar Ty Nevez</h1>
            <p>Votre gîte de charme au calme sur la magnifique presqu'île de Crozon</p>
            <p>Découvrez un havre de paix au cœur du Finistère, entre mer et nature sauvage</p>
            <Link to="/contact" className="cta-button">Réserver maintenant</Link>
          </div>
          <div className="hero-image">
            <img
              src={facadeImage}
              alt="Façade du gîte Ar Ty Nevez"
              className="main-facade-image"
            />
          </div>
        </div>
      </section>
      <section className="description">
        <div className="container">
          <h2>Un cadre exceptionnel</h2>
          <div className="description-grid">
            <div className="description-text">
              <p>
                Le gîte Ar Ty Nevez vous accueille dans un cadre spacieux, chaleureux et familial. Cette maison familiale
                offre tout le confort moderne tout en conservant son charme d'antan.
              </p>
              <p>
                Que vous soyez amateurs de randonnées, de sports nautiques ou 
                simplement en quête de tranquillité, notre gîte est le point de départ idéal pour 
                découvrir les merveilles de la Bretagne.
              </p>
            </div>
            <div className="features">
              <h3>Équipements</h3>
              <ul>
                <li>🏠 Maison entière (6-10 personnes)</li>
                <li>🛏️ 5 chambres</li>
                <li>😴 Location de draps :
                  <ul>
                    <li>15€/lit (1 personne)</li>
                    <li>20€/lit (2 personnes)</li>
                  </ul>
                </li>
                <li>🛁 2 salles d'eau</li>
                <li>🍳 Cuisine équipée</li>
                <li>🌳 Jardin privatif</li>
                <li>🚗 Parking privé</li>
                <li>🐕 Animaux acceptés (sans supplément)</li>
              </ul>
              <Link to="/equipements" className="equipment-link">
                Voir tous les équipements →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="location">
        <div className="container">
          <h2>Situation géographique</h2>
          <div className="location-grid">
            <div className="location-text">
              <h3>Au cœur de Lespiguet</h3>
              <p>
                Située dans le Parc Naturel Régional d'Armorique, Telgruc sur la presqu'île de Crozon, 
                offre des paysages à couper le souffle. Notre gîte se trouve à :
              </p>
              <ul>
                <li>🏖️ 10 min des plages</li>
                <li>🥾 près le GR34 (sentier des douaniers)</li>
                <li>🏛️ 15 min du centre de Crozon</li>
                <li>🚗 50 min de Brest</li>
                <li>🛣️ 50 min de Quimper</li>
                <li>⛵ 25 min du port de Camaret-sur-Mer</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.1234567890!2d-4.3333333!3d48.2333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816b9f5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sLespiguet%2C%2029560%20Telgruc-sur-Mer!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du gîte Ar Ty Nevez à Lespiguet"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
