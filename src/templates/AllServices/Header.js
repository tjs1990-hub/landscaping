

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import classes from './Header.module.css'
import renderHTML from 'react-render-html'
import Img from 'gatsby-image'
import { MDBContainer } from 'mdbreact'








const Header = props => (
  <StaticQuery
    query={graphql`
    query bigQuery{
      allWordpressWpServices {
        edges {
          node {
            slug
            acf {
              header_text
              header_img {
                alt_text
                localFile {
                  childImageSharp {
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
    `}
    render={data => {
      const image = data.allWordpressWpServices.edges.find(n => {
        return n.node.slug.includes(props.slug);
      });
      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return (
        <React.Fragment>
          <MDBContainer className={classes.Con} fluid={true}>
            <MDBContainer fluid={true} className={classes.Overlay}>
              <h1>{image.node.acf.header_text}</h1>
            </MDBContainer>

            <Img
              fluid={image.node.acf.header_img.localFile.childImageSharp.fluid}
              alt={image.node.acf.header_img.alt_text}
              className={classes.Img}
            />
          </MDBContainer>
        </React.Fragment>
      )
    }}
  />
);

export default Header
