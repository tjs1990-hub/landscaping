import React from "react"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import classes from "./ReviewSections.module.css"
import Img from 'gatsby-image'
import ReviewStars from "../ReviewComponents/ReviewStars"

const ReviewSection = props => {
  return (
    <React.Fragment>
      <MDBContainer fluid={true} className={classes.Con}>
        <Img
          fluid={props.reviewBackground}
          alt={props.reviewBackground.alt_text}
          className={classes.reviewBackground}
        />

        <MDBContainer className={classes.Overlay} fluid={true}>
          <MDBRow className={classes.Row}>
            <MDBCol md="6" className="w-100 h-100 p-4">
              <Img
                fluid={props.reviewImg}
                alt={props.reviewImg.alt_text}
                className="white rounded-lg"
              />

            </MDBCol>
            <MDBCol md="6" className="w-100 h-100 p-4">

              <ReviewStars />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    </React.Fragment>
  )
}

export default ReviewSection
