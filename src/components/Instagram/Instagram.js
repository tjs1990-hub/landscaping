import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact"
import classes from "./Instagram.module.css"
import Img from 'gatsby-image'

const Instagram = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allInstaNode {
            edges {
              node {
                id
                username
                caption

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

          instaNode {
            username
          }
        }
      `}
      render={props => (
        <React.Fragment>
          <div>
            <MDBContainer className="text-center" className={classes.Con} fluid>
              <MDBIcon
                fab
                icon="instagram"
                size="4x"
                className={classes.Icon}
              />
              <a href="https://www.instagram.com/tm_landscapeswy/"><h3 className="text-white">@{props.instaNode.username}</h3></a>

              <MDBRow className={classes.Row} >
                {props.allInstaNode.edges.map(edge => (
                  <React.Fragment key={edge.node.id}>
                 
                    <MDBCol md="4" className={classes.Col}>
                      
                      <div className={classes.Overlay}>
                      <h3>{edge.node.caption}</h3>
                    </div>
                    <Img
                      fluid={edge.node.localFile.childImageSharp.fluid}
                      alt="some alt text"
                      className={classes.Img}
                    />
                     
                    </MDBCol>
                  </React.Fragment>
                ))}
              </MDBRow>
            </MDBContainer>
          </div>
        </React.Fragment>
      )}
    />
  )
}

export default Instagram
