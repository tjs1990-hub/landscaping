import React from 'react'
import { graphql } from 'gatsby'
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdbreact'
import classes from './serviceArea.module.css'
import Img from 'gatsby-image'
import GetQuote from '../components/HomeComponents/GetQuote'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from '../components/layout'
import SEO from '../components/seo'
import renderHTML from 'react-render-html'
import ServiceAreaParts from '../components/Services/ServiceAreaParts'

const serviceArea = ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <SEO
          title={data.wordpressPage.yoast_meta.yoast_wpseo_title}
          description={data.wordpressPage.yoast_meta.yoast_wpseo_metadesc}
          rating={data.googlePlacesPlace.rating}
          total={data.googlePlacesPlace.user_ratings_total}
        />

        <div className={classes.Header}>
          <Img
            fluid={data.wordpressPage.featured_media.localFile.childImageSharp.fluid}
            alt={data.wordpressPage.featured_media.alt_text}
            className={classes.headerImg}
          />

          <div className={classes.Overlay}>
            <h1>{data.wordpressPage.title}</h1>
          </div>
        </div>

        <div className={classes.GM}>
          {renderHTML(data.wordpressPage.content)}
        </div>
        <div className={classes.Content}>
          <span className={classes.Inner}> {renderHTML(data.wordpressPage.acf.text)} </span>
        </div>
        <ServiceAreaParts data={data.allWordpressCategory.edges} />

        <div className={classes.FAQ}>
          <div className={classes.InnerFAQ}>
            {renderHTML(data.wordpressPage.acf.faq)}
          </div>
        </div>
        <div className={`green`}>
          <GetQuote />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
query{
    googlePlacesPlace {

        rating
        user_ratings_total
      }
    wordpressPage(slug: {eq: "service-areas"}) {
        title
        content
        featured_media {
          alt_text
          localFile {
            childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
        acf {
          text
          faq
        }
        yoast_meta {
          yoast_wpseo_title
          yoast_wpseo_metadesc
        }
      }
    allWordpressCategory {
      edges {
        node {
            id
          name
          slug
          acf {
            featured_img {
                alt_text
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default serviceArea