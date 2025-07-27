import { useState } from 'react'
import { galleryData } from '../data/galleryData'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Toutes les photos' },
    { id: 'exterior', name: 'Extérieur' },
    { id: 'interior', name: 'Intérieur' },
    { id: 'rooms', name: 'Chambres' },
    { id: 'landscape', name: 'Paysages' }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div className="gallery-page">
      <div className="container">
        <header className="gallery-header">
          <h1>Galerie Photo</h1>
          <p>Découvrez notre gîte et son environnement exceptionnel</p>
        </header>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={selectedCategory === category.id ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              {image.image ? (
                <div className="image-container">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="gallery-image"
                  />
                  <div className="image-overlay">
                    <span className="view-icon">👁️</span>
                  </div>
                </div>
              ) : (
                <div className="image-placeholder">
                  <span className="placeholder-icon">{image.icon}</span>
                  <div className="image-overlay">
                    <span className="view-icon">👁️</span>
                  </div>
                </div>
              )}
              <div className="image-info">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <button className="modal-nav prev" onClick={prevImage}>‹</button>
              <button className="modal-nav next" onClick={nextImage}>›</button>
              
              <div className="modal-image">
                {selectedImage.image ? (
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    className="modal-img"
                  />
                ) : (
                  <div className="large-placeholder">
                    <span className="large-icon">{selectedImage.icon}</span>
                  </div>
                )}
              </div>
              
              <div className="modal-info">
                <h2>{selectedImage.title}</h2>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery
