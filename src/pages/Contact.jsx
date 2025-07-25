import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '2',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici vous pourriez intégrer avec un service d'email
    console.log('Données du formulaire:', formData)
    setIsSubmitted(true)
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkin: '',
        checkout: '',
        guests: '2',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="contact-page">
      <div className="container">
        <header className="contact-header">
          <h1>Nous Contacter</h1>
          <p>Réservez votre séjour ou posez-nous vos questions</p>
        </header>

        <div className="contact-content">
          {/* Informations de contact */}
          <div className="contact-info">
            <h2>Nos Coordonnées</h2>
            
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>contact@artynevez.fr</p>
                <p>reservation@artynevez.fr</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>Téléphone</h3>
                <p>02 98 XX XX XX</p>
                <p>06 XX XX XX XX (mobile)</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Adresse</h3>
                <p>Ar Ty Nevez</p>
                <p>Lespiguet</p>
                <p>29160 Crozon, Finistère</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div>
                <h3>Horaires de réponse</h3>
                <p>Lundi - Dimanche</p>
                <p>9h00 - 19h00</p>
                <p>Réponse sous 24h</p>
              </div>
            </div>

            <div className="pricing-info">
              <h3>Tarifs indicatifs</h3>
              <div className="pricing-grid">
                <div className="price-item">
                  <span className="season">Basse saison</span>
                  <span className="price">80€/nuit</span>
                </div>
                <div className="price-item">
                  <span className="season">Haute saison</span>
                  <span className="price">120€/nuit</span>
                </div>
              </div>
              <p className="pricing-note">
                * Tarifs pour 4 personnes, séjour minimum 2 nuits
              </p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="contact-form-section">
            <h2>Demande de Réservation</h2>
            
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Merci pour votre demande !</h3>
                <p>Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="guests">Nombre de personnes</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                    >
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5">5 personnes</option>
                      <option value="6">6 personnes</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="checkin">Date d'arrivée</label>
                    <input
                      type="date"
                      id="checkin"
                      name="checkin"
                      value={formData.checkin}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="checkout">Date de départ</label>
                    <input
                      type="date"
                      id="checkout"
                      name="checkout"
                      value={formData.checkout}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre séjour idéal, vos besoins spécifiques, ou posez-nous vos questions..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Envoyer la demande
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Section carte */}
        <div className="map-section">
          <h2>Localisation</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <h3>Lespiguet, Pointe de Crozon, Finistère</h3>
              <p>Gîte Ar Ty Nevez - Au cœur du Parc Naturel Régional d'Armorique</p>
              <div className="map-features">
                <span>🏖️ 5 min des plages</span>
                <span>🥾 Sur le GR34</span>
                <span>🏛️ 15 min de Crozon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
