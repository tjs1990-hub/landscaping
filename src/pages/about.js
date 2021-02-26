import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/About/Header"
import Content from "../components/About/Content"
import classes from "./About.module.css"
import AllServices from "../components/Services/AllServices"
import GetQuote from "../components/HomeComponents/GetQuote"
import Qualifications from "../components/qualifications/Qualifications"
import SEO from "../components/seo"
import og from '../images/og.jpg'

export default ({ data }) => {

  return (
    <React.Fragment>
      <SEO
        title={data.wordpressPage.yoast_meta.yoast_wpseo_title}
        description={data.wordpressPage.yoast_meta.yoast_wpseo_metadesc}
        image={`https://landscapegardenerswestyorkshire.com` + og}
        rating={data.googlePlacesPlace.rating}
        total={data.googlePlacesPlace.user_ratings_total}
      />
      <Layout>
        <div className={classes.Wrapper}>
          <Header
            img={data.wordpressPage.acf.header_img.localFile.childImageSharp.fluid}
            text={data.wordpressPage.acf.header_text}
          />

          <Content content={data.wordpressPage.acf.content} />
          <div className={classes.Background}>
            <GetQuote />
          </div>
          <AllServices />

          <Qualifications />
        </div>
      </Layout>
    </React.Fragment>
  )
}




export const pageQuery = graphql`
  query {
    googlePlacesPlace{
      rating
      user_ratings_total
     
    }
    wordpressPage(slug: { eq: "about" }) {
      yoast_meta {
        yoast_wpseo_title
        yoast_wpseo_metadesc
      }
      acf {
        header_img {
          alt_text
          localFile{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        header_text
        content
      }
    }
  }
`
