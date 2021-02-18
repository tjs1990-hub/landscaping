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
// import Flickity from 'react-flickity-component'
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './flickity.css'
import classes from "./AllServices.module.css"
import renderHTML from "react-render-html"
import Img from 'gatsby-image'
// import AniLink from "gatsby-plugin-transition-link/AniLink"

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
      render={props => {
        // console.log(props);
        return (
          <React.Fragment>
            <h1 className="text-white">{isTabletOrMobileDevice}</h1>
            <MDBContainer className={classes.Con}>
              {!isTabletOrMobileDevice ? (<MDBRow className={classes.Row}>
                {props.allWordpressWpServices.edges.map(edge => (
                  (<MDBCol md="4" key={edge.node.slug}>
                    <MDBCard className={classes.Card}>
                      <Img
                        // check edge has property
                        fluid={edge.node.acf.header_img.localFile.childImageSharp.fluid}
                        waves
                        className={classes.CardImg}
                      />
                      <MDBCardBody>
                        <MDBCardTitle className={classes.CTitle}>{renderHTML(edge.node.title)}</MDBCardTitle>

                        <span className="card-text">
                          {renderHTML(edge.node.excerpt)}
                        </span>

                        <Link to={`/services/${edge.node.slug}`}>
                          <MDBBtn color="black">Read More</MDBBtn>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>)
                ))}
              </MDBRow>) : (
                  <div
                    className={classes.scrollingWrapperFlexbox}
                  >
                    {props.allWordpressWpServices.edges.map(edge => (<MDBCard className={classes.Card} key={edge.node.slug}>
                      <Img
                        // check edge has property
                        fluid={edge.node.acf.header_img.localFile.childImageSharp.fluid}
                        waves
                        className={classes.CardImg}
                      />
                      <MDBCardBody>
                        <MDBCardTitle className={classes.CTitle}>{renderHTML(edge.node.title)}</MDBCardTitle>

                        <span className="card-text">
                          {renderHTML(edge.node.excerpt)}
                        </span>

                        <Link to={`/services/${edge.node.slug}`}>
                          <MDBBtn color="black">Read More</MDBBtn>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>)
                    )}
                  </div>
                )}
            </MDBContainer>
          </React.Fragment>
        )
      }}
    ></StaticQuery>
  )
}

export default Allservices
