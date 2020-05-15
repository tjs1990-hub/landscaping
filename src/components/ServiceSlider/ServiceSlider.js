import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import classes from "./ServiceSlider.module.css"
import renderHTML from "react-render-html"
import Img from 'gatsby-image'

class ServiceSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <StaticQuery
        query={graphql`

        {
          allWordpressWpLocation{
            edges{
              node{
                wordpress_id
                slug
                
                acf{
                  header_img{
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
          
          `} render={props => (
          <React.Fragment>
            <div className={classes.Wrapper}>
              <div className={classes.Slider}>
                {props.allWordpressWpLocation.edges.map(edge => (
                  <div className={classes.Card}>
                    <div className={classes.CardHeader}>
                    <Img 
                    fluid={edge.node.acf.header_img.localFile.childImageSharp.fluid}
                   alt={edge.node.acf.header_img.alt_text}
                    className={classes.Img}
                     />

                    
                    </div>

                    <div className={classes.CardBody}>

                    <h3></h3>

                    <button className={classes.myButton}></button>
                    
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        )}
      />
    )
  }
}

export default ServiceSlider
