import React from "react"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import classes from "./Images.module.css"
import Img from 'gatsby-image'

const Images = props => {
  return (
    <React.Fragment>
      <MDBContainer className={classes.imgCon}>
        <MDBRow className={classes.imgRow}>
          <MDBCol sm="4" md="4" className={classes.Col}>
            <Img
              fluid={props.imgOne}
              alt={props.imgOne.alt_text}
              className={`${classes.Images} rounded-lg`}
            />
          </MDBCol>

          <MDBCol md="4" sm="4" className={classes.Col}>
            <Img
              fluid={props.imgTwo}
              alt={props.imgTwo.alt_text}
              className={`${classes.Images} rounded-lg`}
            />
          </MDBCol>

          <MDBCol sm="4" md="4" className={classes.Col}>
            <Img
              fluid={props.imgThree}
              alt={props.imgThree.alt_text}
              className={`${classes.Images} rounded-lg`}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  )
}

export default Images
