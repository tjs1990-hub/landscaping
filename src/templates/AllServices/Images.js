import React from "react"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import classes from "./Images.module.css"

const Images = props => {
  return (
    <React.Fragment>
      <MDBContainer className={classes.Con}>
        <MDBRow className={classes.Row}>
          <MDBCol md="6" className={classes.Col}>
            <img
              src={props.imgOne.source_url}
              alt={props.imgOne.alt_text}
              className={classes.Img}
            />
          </MDBCol>

          <MDBCol md="6" className={classes.Col}>
            <img
              src={props.imgTwo.source_url}
              alt={props.imgTwo.alt_text}
              className={classes.Img}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  )
}

export default Images
