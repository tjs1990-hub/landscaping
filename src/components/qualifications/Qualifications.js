import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import classes from "./Quals.module.css"

const Qualifications = () => {
  const breakpoints = useBreakpoint();
  return (
    <StaticQuery
      query={graphql`
        {
          wordpressWpQualifications(slug: { eq: "all-qualifications" }) {
            slug
            acf {
              one {
                alt_text
                source_url
              }

              two {
                alt_text
                source_url
              }

              three {
                alt_text
                source_url
              }
            }
          }
        }
      `}
      render={props => (
        <React.Fragment>
          <MDBContainer className={classes.Con}>
            {!breakpoints.sm ? <MDBRow>
              <MDBCol md="4" className={classes.Col}>
                <img
                  src={props.wordpressWpQualifications.acf.one.source_url}
                  alt={props.wordpressWpQualifications.acf.one.alt_text}
                  className={classes.Img}
                />
              </MDBCol>
              <MDBCol md="4" className={classes.Col}>
                <img
                  src={props.wordpressWpQualifications.acf.two.source_url}
                  alt={props.wordpressWpQualifications.acf.two.alt_text}
                  className={classes.Img}
                />
              </MDBCol>
              <MDBCol md="4" className={classes.Col}>
                <img
                  src={props.wordpressWpQualifications.acf.three.source_url}
                  alt={props.wordpressWpQualifications.acf.three.alt_text}
                  className={classes.Img}
                />
              </MDBCol>
            </MDBRow> : <div className={classes.scrollingWrapperFlexbox}>
                <img
                  src={props.wordpressWpQualifications.acf.one.source_url}
                  alt={props.wordpressWpQualifications.acf.one.alt_text}
                  className={`${classes.Img} mx-5`}
                />
                <img
                  src={props.wordpressWpQualifications.acf.two.source_url}
                  alt={props.wordpressWpQualifications.acf.two.alt_text}
                  className={`${classes.Img} mx-5`}
                />
                <img
                  src={props.wordpressWpQualifications.acf.three.source_url}
                  alt={props.wordpressWpQualifications.acf.three.alt_text}
                  className={`${classes.Img} mx-5`}
                />
              </div>}
          </MDBContainer>
        </React.Fragment>
      )}
    />
  )
}

export default Qualifications
