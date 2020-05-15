import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import classes from './testCom.module.css'
import renderHTML from 'react-render-html'
import Img from 'gatsby-image'








const TestCom = () => {
  return (
    <StaticQuery
      query={graphql`

      {
        allWordpressWpLocation {
          edges {
            node {
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
              }
            }
          }
        }
      }
       
      `}
      render={data => (
     
    
      <div className={classes.Con}>
      
      <Img 
      fluid={data.allWordpressWpLocation.acf.header_img.localFile.childImageSharp.fluid}
      alt={data.allWordpressWpLocation.acf.header_img.alt_text}
       className={classes.HeaderImg}
      />
      <div className={classes.Overlay}>
      
      <h1>{data.allWordpressWpLocation.acf.img_title}</h1>
      
      </div>
      
      </div>
      

    
        
      )}
    />
  )
}




export default TestCom
