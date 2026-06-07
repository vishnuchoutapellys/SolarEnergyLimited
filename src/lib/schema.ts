export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SolarEnergySystemBusiness",
  "name": "Rudraa solar power private limited",
  "image": "https://rudrasolarenergy.com/Logo1.png", // Fallback URL
  "@id": "https://rudrasolarenergy.com/#organization",
  "url": "https://rudrasolarenergy.com",
  "telephone": "+919014249898",
  "email": "rudraasolarpowerpvtltd@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "D.No. 4-1-558/9, Korutla",
    "addressLocality": "Korutla",
    "postalCode": "505326",
    "addressRegion": "Telangana",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.8228", // Estimated coordinates for Korutla, Jagityal
    "longitude": "78.7126"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://facebook.com/rudrasolarenergy",
    "https://instagram.com/rudrasolarenergy"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rudraa solar power private limited",
  "url": "https://rudrasolarenergy.com",
  "logo": "https://rudrasolarenergy.com/Logo1.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9014249898",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Telugu"]
  }
};
