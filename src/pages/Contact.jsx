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
                <p>christelle.blamart@orange.fr</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>Téléphone</h3>
                <p>07 67 61 16 18</p>
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
              </div>
            </div>

            <div className="pricing-info">
              <h3>Tarifs indicatifs</h3>
              <div className="pricing-grid">
                <div className="price-item">
                  <span className="season">Basse saison</span>
                  <span className="price">600€/semaine</span>
                </div>
                <div className="price-item">
                  <span className="season">Haute saison</span>
                  <span className="price">1000€/semaine</span>
                </div>
              </div>
              <p className="pricing-note">
                * Tarifs dégressifs pour moins de 6 personnes
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
                      <option value="7">7 personnes</option>
                      <option value="8">8 personnes</option>
                      <option value="9">9 personnes</option>
                      <option value="10">10 personnes</option>
                      <option value="11">11 personnes</option>
                      <option value="12">12 personnes</option>
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
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.1234567890!2d-4.3333333!3d48.2333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816b9f5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sLespiguet%2C%2029560%20Telgruc-sur-Mer!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du gîte Ar Ty Nevez à Lespiguet"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
