import React from "react"
import Layout from "../components/layout"

export default ({ pageContext }) => (
  <div>
    <Layout>
      <h1>{pageContext.title}</h1>
    </Layout>
  </div>
)
