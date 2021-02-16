import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact"
import { useMediaQuery } from 'react-responsive'
import Flickity from 'react-flickity-component'

import './flickity.css'
import classes from "./AllServices.module.css"
import renderHTML from "react-render-html"
import Img from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Allservices = () => {
  const MAX_LENGTH = 83
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  console.log(isTabletOrMobileDevice)
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpServices {
            edges {
              node {
                title
                slug
                excerpt
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
                }
              }
            }
          }
        }
      `}
      render={props => (
        <React.Fragment>
          <MDBContainer className={classes.Con}>
            {!isTabletOrMobileDevice || true ? (<MDBRow className={classes.Row}>
              {props.allWordpressWpServices.edges.map(edge => {
                return (
                  (<MDBCol md="4" key={edge.node.slug}>
                    <MDBCard className={classes.Card}>
                      <Img
                        // check edge has property
                        fluid={edge.node ? edge.node.acf.header_img.localFile.childImageSharp.fluid : ''}
                        waves
                        className={classes.CardImg}
                      />
                      <MDBCardBody>
                        <MDBCardTitle className={classes.CTitle}>{renderHTML(edge.node.title)}</MDBCardTitle>

                        <span className="card-text">
                          {renderHTML(edge.node.excerpt)}
                        </span>

                        <AniLink paintDrip duration={1.2} color='green' direction="up" to={`/services/${edge.node.slug}`}>
                          <MDBBtn color="black">Read More</MDBBtn>
                        </AniLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>)
                )
              })}
            </MDBRow>) : (
                <Flickity
                  className={'carousel'}
                  elementType={'div'} // default 'div'
                >
                  {props.allWordpressWpServices.edges.map(edge =>
                    <MDBCard className={classes.Card} key={edge.node.slug}>
                      <Img
                        // check edge has property
                        fluid={edge.node ? edge.node.acf.header_img.localFile.childImageSharp.fluid : ''}
                        waves
                        className={classes.CardImg}
                      />
                      <MDBCardBody>
                        <MDBCardTitle className={classes.CTitle}>{renderHTML(edge.node.title)}</MDBCardTitle>

                        <span className="card-text">
                          {renderHTML(edge.node.excerpt)}
                        </span>

                        <AniLink paintDrip duration={1.2} color='green' direction="up" to={`/services/${edge.node.slug}`}>
                          <MDBBtn color="black">Read More</MDBBtn>
                        </AniLink>
                      </MDBCardBody>
                    </MDBCard>
                  )}
                </Flickity>
              )}
          </MDBContainer>
        </React.Fragment>
      )}
    ></StaticQuery>
  )
}

export default Allservices
