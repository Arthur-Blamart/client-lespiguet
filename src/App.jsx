import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Tarifs from './pages/Tarifs'
import Reviews from './pages/Reviews'
import Equipements from './pages/Equipements'
import MentionsLegales from './pages/MentionsLegales'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/equipements" element={<Equipements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tarifs" element={<Tarifs />} />
            {/* <Route path="/avis" element={<Reviews />} /> */}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
