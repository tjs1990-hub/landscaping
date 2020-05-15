import React from "react"
import { MDBContainer } from "mdbreact"
import classes from "./Header.module.css"
import Img from 'gatsby-image'

const Header = props => {
  return (
    <React.Fragment>
      <MDBContainer fluid={true} className={classes.Con}>
        <MDBContainer fluid={true} className={classes.Overlay}>
          <h1>{props.text}</h1>
        </MDBContainer>

        <Img
          fluid={props.img}
          alt={props.img.alt_text}
          className={classes.Img}
        />
      </MDBContainer>
    </React.Fragment>
  )
}

export default Header
