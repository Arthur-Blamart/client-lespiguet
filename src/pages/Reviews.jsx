import { useState } from 'react'
import { reviewsData } from '../data/reviewsData'
import './Reviews.css'

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    title: '',
    comment: ''
  })
  const [showForm, setShowForm] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici vous pourriez sauvegarder l'avis
    console.log('Nouvel avis:', newReview)
    setIsSubmitted(true)
    setShowForm(false)
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false)
      setNewReview({
        name: '',
        location: '',
        rating: 5,
        title: '',
        comment: ''
      })
    }, 3000)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>
        ⭐
      </span>
    ))
  }

  const averageRating = reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length
  const totalReviews = reviewsData.length

  return (
    <div className="reviews-page">
      <div className="container">
        <header className="reviews-header">
          <h1>Avis de nos Clients</h1>
          <div className="rating-summary">
            <div className="average-rating">
              <span className="rating-number">{averageRating.toFixed(1)}</span>
              <div className="stars-display">
                {renderStars(Math.round(averageRating))}
              </div>
              <span className="total-reviews">({totalReviews} avis)</span>
            </div>
          </div>
        </header>

        {/* Success Message */}
        {isSubmitted && (
          <div className="success-banner">
            <span className="success-icon">✅</span>
            <span>Merci pour votre avis ! Il sera publié après modération.</span>
          </div>
        )}

        {/* Add Review Button */}
        <div className="add-review-section">
          <button 
            className="add-review-btn"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Annuler' : 'Laisser un avis'}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="review-form-container">
            <h2>Partagez votre expérience</h2>
            <form className="review-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Votre nom *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newReview.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Votre ville</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={newReview.location}
                    onChange={handleInputChange}
                    placeholder="Ex: Paris, France"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Note générale *</label>
                <div className="rating-input">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      className={star <= newReview.rating ? 'star-btn active' : 'star-btn'}
                      onClick={() => setNewReview({...newReview, rating: star})}
                    >
                      ⭐
                    </button>
                  ))}
                  <span className="rating-text">
                    {newReview.rating === 5 ? 'Excellent' :
                     newReview.rating === 4 ? 'Très bien' :
                     newReview.rating === 3 ? 'Bien' :
                     newReview.rating === 2 ? 'Moyen' : 'Décevant'}
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="title">Titre de votre avis</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newReview.title}
                  onChange={handleInputChange}
                  placeholder="Résumez votre séjour en quelques mots"
                />
              </div>

              <div className="form-group">
                <label htmlFor="comment">Votre commentaire *</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={newReview.comment}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Partagez votre expérience aux futurs visiteurs..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-review-btn">
                Publier mon avis
              </button>
            </form>
          </div>
        )}

        {/* Reviews List */}
        <div className="reviews-list">
          {reviewsData.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="reviewer-name">{review.name}</h3>
                    <p className="reviewer-location">{review.location}</p>
                    <p className="review-date">{review.date}</p>
                  </div>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              {review.title && (
                <h4 className="review-title">{review.title}</h4>
              )}
              
              <p className="review-comment">{review.comment}</p>
              
              {review.photos && review.photos.length > 0 && (
                <div className="review-photos">
                  {review.photos.map((photo, index) => (
                    <div key={index} className="photo-placeholder">
                      {/* photo placeholder - image preview available */}
                    </div>
                  ))}
                </div>
              )}
              
              <div className="review-footer">
                <span className="review-helpful">Utile ({review.helpful || 0})</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Stats */}
        <div className="reviews-stats">
          <h2>Détail des notes</h2>
          <div className="stats-grid">
            {[5, 4, 3, 2, 1].map(rating => {
              const count = reviewsData.filter(review => review.rating === rating).length
              const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0
              
              return (
                <div key={rating} className="stat-row">
                  <span className="stat-label">{rating} étoiles</span>
                  <div className="stat-bar">
                    <div 
                      className="stat-fill" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="stat-count">({count})</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
