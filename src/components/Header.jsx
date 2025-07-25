import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Ar Ty Nevez</h1>
          <p>Gîte - Lespiguet, Pointe de Crozon</p>
        </Link>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Accueil
          </Link>
          <Link 
            to="/galerie" 
            className={location.pathname === '/galerie' ? 'nav-link active' : 'nav-link'}
          >
            Galerie
          </Link>
          <Link 
            to="/avis" 
            className={location.pathname === '/avis' ? 'nav-link active' : 'nav-link'}
          >
            Avis clients
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
