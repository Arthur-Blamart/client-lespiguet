import { useState } from 'react'
import { galleryData } from '../data/galleryData'
import './Gallery.css'
import SEO from '../components/SEO'

const Gallery = () => {


  return (
    <>
      <SEO
        title="Tarifs — En cours de construction"
        description="La page des tarifs est actuellement en cours de construction."
      />
      <div className="page-construction" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Page en cours de construction</h1>
      </div>
    </>
  )
}

export default Gallery
