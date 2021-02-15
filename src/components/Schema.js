import React from 'react';
import { graphql } from 'gatsby'
import Helmet from 'react-helmet';

export default React.memo(
  ({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    isBlogPost,
    organization,
    title,
    url,
    total,
    rating

  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "TJM Landscapes",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "222 Leeds Old Road ",
          "addressLocality": "Batley",
          "addressRegion": "West Yorkshire",
          "postalCode": "WF17 9AQ"
        },
        "telePhone": "07746273202",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "53.717018",
          "longitude": "-1.634890"
        },
        "url": "https://landscapegardenerswestyorkshire.com/",
        "logo": "https://admin.fencingleeds.co/wp-content/uploads/2020/01/cropped-tmlogo-3.jpg",
        "image": "https://landscapegardenerswestyorkshire.com/static/0e54d0805510ee651e74338ac0b3673b/b17c1/header-img.jpg",

        "priceRange": "£0 - £100,000",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": rating,
          "ratingCount": total
        }
      }
    ];



    const schema = isBlogPost
      ? [
        ...baseSchema,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: author.name,
          },
          publisher: {
            '@type': 'Organization',
            url: organization.url,
            logo: organization.logo,
            name: organization.name,
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': canonicalUrl,
          },
          datePublished,
        },
      ]
      : baseSchema;



    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
    );
  },
);



