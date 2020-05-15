import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import classes from './Header.module.css'
import renderHTML from 'react-render-html'
import Img from 'gatsby-image'








const Header = props => (
  <StaticQuery
    query={graphql`
    query {
      allWordpressWpLocation{
        edges{
          node{
            slug
            acf{
              img_title
              header_img{
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
    `}
    render={data => {
      const image = data.allWordpressWpLocation.edges.find(n => {
        return n.node.slug.includes(props.slug);
      });
      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return (
       

        <React.Fragment>

        <div className={classes.Con}>
      
        <Img 
        fluid={image.node.acf.header_img.localFile.childImageSharp.fluid}
         alt={image.node.acf.header_img.alt_text}
         className={classes.HeaderImg}
        />
        <div className={classes.Overlay}>
        
        <h1>{image.node.acf.img_title}</h1>
        
        </div>
        
        </div>
        
        
        </React.Fragment>
        
        )
    }}
  />
);



export default Header



