import React from "react"

export default ({ pageContext }) => {
  return (
    <React.Fragment>
      <h1>{pageContext.title}</h1>
    </React.Fragment>
  )
}
