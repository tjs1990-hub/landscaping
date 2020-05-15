import React from "react"
import { graphql } from "gatsby"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Layout from "../components/layout"
import classes from "./Gallery.module.css"
import GetQuote from "../components/HomeComponents/GetQuote"
import Qualifications from "../components/qualifications/Qualifications"
import SEO from "../components/seo"
import Img from 'gatsby-image'

export default ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <div className={classes.Wrapper}>
          <MDBContainer className={classes.Con}>
            <h1>Gallery</h1>
            <MDBRow>
              {data.allWordpressWpGallery.edges.map(({ node }) => (
                <React.Fragment key={node.id}>
                  <SEO
                    title={node.yoast_meta.yoast_wpseo_title}
                    description={node.yoast_meta.yoast_wpseo_metadesc}
                    image={node.acf.image.source_url}
                    total={data.googlePlacesPlace.user_ratings_total}
                    rating={data.googlePlacesPlace.rating}
                  />
                  <MDBCol md="4" className={classes.Col} key={node.id}>
                    <Img
                      fluid={node.acf.image.localFile.childImageSharp.fluid}
                      alt={node.acf.image.alt_text}
                      className={classes.Img}
                    />
                  </MDBCol>
                  <MDBCol md="4" className={classes.Col}>
                    <Img
                      fluid={node.acf.img_two.localFile.childImageSharp.fluid}
                      alt={node.acf.img_two.alt_text}
                      className={classes.Img}
                    />
                  </MDBCol>
                  <MDBCol md="4" className={classes.Col}>
                    <Img
                      fluid={node.acf.image_three.localFile.childImageSharp.fluid}
                      alt={node.acf.image_three.alt_text}
                      className={classes.Img}
                    />
                  </MDBCol>
                </React.Fragment>
              ))}
            </MDBRow>
          </MDBContainer>
          <div className={classes.Background}>
            <GetQuote />
          </div>

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
    allWordpressWpGallery {
      edges {
        node {
          id
          yoast_meta {
            yoast_wpseo_title
            yoast_wpseo_metadesc
          }
          acf {
            image {
              alt_text
              localFile{
                childImageSharp{
                  fluid{
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            img_two {
              alt_text
              localFile{
                childImageSharp{
                  fluid{
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }

            image_three {
              alt_text
              localFile{
                childImageSharp{
                  fluid{
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
