import { Helmet } from 'react-helmet';

export default function SEO({
  title = "BK Salmon | Software Developer",
  description = "Barry Keith Salmon is a UK-based software developer and retired Air Force Major with 16+ years of experience in aviation, training, and tech leadership. He specializes in Python, React, full-stack development, and system security.",
  keywords = "Barry Keith Salmon, software developer, Python developer, React developer, full-stack web developer, JavaScript developer, cyber security",
  image = "https://bksalmon.com/og-image.jpg",
  url = "https://bksalmon.com"
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Barry Keith Salmon",
          "jobTitle": "Software Developer",
          "url": url,
          "image": image,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dartford",
            "addressCountry": "United Kingdom"
          },
          "sameAs": [
            "https://github.com/bksalmon",
            "https://linkedin.com/in/bksalmon"
          ],
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "University of Stellenbosch"
          },
          "description": description
        })}
      </script>
    </Helmet>
  );
}
