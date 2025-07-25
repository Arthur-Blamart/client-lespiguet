import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ar Ty Nevez</h3>
            <p>Gîte de charme à Lespiguet</p>
            <p>Pointe de Crozon, Finistère, Bretagne</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📧 contact@artynevez.fr</p>
            <p>📞 02 98 XX XX XX</p>
            <p>📍 Lespiguet, Pointe de Crozon, 29160</p>
          </div>
          
          <div className="footer-section">
            <h4>Liens utiles</h4>
            <p>🌊 Office de Tourisme Crozon</p>
            <p>🥾 Sentiers de randonnée</p>
            <p>🏖️ Plages de la région</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Ar Ty Nevez - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
