import React from "react"

export default ({ pageContext }) => (
  <div>
    <h1>{pageContext.title}</h1>

    <img
      src={pageContext.featured_media.source_url}
      alt={pageContext.featured_media.alt_text}
    />
  </div>
)
