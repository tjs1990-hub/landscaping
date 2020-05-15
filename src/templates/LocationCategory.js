import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import {MDBContainer, MDBCol, MDBRow,MDBCard, MDBCardBody, MDBCardTitle, MDBBtn} from 'mdbreact'
import classes from './LocationCategory.module.css'
import Layout from '../components/layout'
import renderHTML from 'react-render-html'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from '../components/seo'
import GetQuote from '../components/HomeComponents/GetQuote'




const LacationCategory = ({pageContext, data}) => {

    return(
        <React.Fragment>
        
        <Layout>

       
      {data.allWordpressCategory.edges.map(el => (
          <React.Fragment key={el.node.id}>
         
          <div key={el.node.id} className={classes.Header}>
          <SEO 
          title={el.node.yoast_meta.yoast_wpseo_title}
          description={el.node.yoast_meta.yoast_wpseo_metadesc}
          rating={data.googlePlacesPlace.rating}
          total={data.googlePlacesPlace.user_ratings_total}
       
         />

          <div className={classes.Overlay}>
          
          <h1>{el.node.name}</h1>
          
          </div>

          <Img 
          fluid={el.node.acf.featured_img.localFile.childImageSharp.fluid}
          className={classes.Featured}
          
          />
          
         
          </div>
      
          <div className={classes.ContentBox}>
             <div className={classes.ContentBoxTwo}>
            <span>{renderHTML(el.node.description)}</span>
            </div>
          
          </div>


          </React.Fragment>

         
      ))}
        <MDBContainer fluid={true} className={classes.Con}>

        <MDBRow>
     {data.allWordpressWpLocation.edges.map(el => (
         <MDBCol md='4' className={classes.Col} key={el.node.id}>
       <MDBCard className={classes.Card}>

       <Img 
       fluid={el.node.acf.header_img.localFile.childImageSharp.fluid}
       className={classes.CardImg}
       
       />
       
       <MDBCardBody className={classes.CardBody}>
       
       <MDBCardTitle>{el.node.acf.img_title}</MDBCardTitle>

       <AniLink paintDrip duration={1.2} color='green' direction="up" to={`/locations/${el.node.slug}/`}><MDBBtn color="dark">Learn More</MDBBtn></AniLink>
       
       
       </MDBCardBody>
       
       </MDBCard>
         </MDBCol>
     ))}

     </MDBRow>
     </MDBContainer>
     <div className={classes.GetQuote}>
     <GetQuote />
     </div>
     </Layout>
        </React.Fragment>
    )

}


export default LacationCategory

export const pageQuery = graphql`


  

query MyQuery($slug: String!, $name: String!){
  
    googlePlacesPlace {

      rating
      user_ratings_total
    }
    allWordpressWpLocation(filter: {categories: {elemMatch: {name: {eq: $name}}}}) {
        edges {
          node {
            id
              slug
            acf {
              header_img {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              img_title
            }
          }
        }
      }
    allWordpressCategory(filter: {slug: {eq: $slug}}) {
        edges {
          node {
            id
            yoast_meta {
              yoast_wpseo_title
              yoast_wpseo_metadesc
            }
            description
            id
            name
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



