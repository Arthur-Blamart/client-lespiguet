import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({
  title,
  description,
  keywords = [],
  url,
  image,
  structuredData = {}
}) => {
  const siteName = 'Ar Ty Nevez'
  const metaKeywords = keywords.join(', ')
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "description": description,
    "url": url || window.location.href,
    "telephone": "07 67 61 16 18",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lespiguet",
      "addressLocality": "Telgruc-sur-Mer",
      "postalCode": "29160",
      "addressCountry": "FR"
    },
    ...structuredData
  }

  return (
    <Helmet>
      <title>{title} | {siteName}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph */}
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

export default SEO
