import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <h1>Ar Ty Nevez</h1>
          <p>Gîte - Lespiguet, Pointe de Crozon</p>
        </Link>

        {/* Hamburger Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu de navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            onClick={closeMenu}
          >
            Accueil
          </Link>
          <Link 
            to="/galerie" 
            className={location.pathname === '/galerie' ? 'nav-link active' : 'nav-link'}
            onClick={closeMenu}
          >
            Galerie
          </Link>
          <Link 
            to="/equipements" 
            className={location.pathname === '/equipements' ? 'nav-link active' : 'nav-link'}
            onClick={closeMenu}
          >
            Équipements
          </Link>
          <Link 
            to="/avis" 
            className={location.pathname === '/avis' ? 'nav-link active' : 'nav-link'}
            onClick={closeMenu}
          >
            Avis clients
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>

        {/* Overlay pour fermer le menu */}
        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  )
}

export default Header
