import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact"
import classes from "./TopMenu.module.css"
import Contact from "../components/Contact/Contact"
import Img from 'gatsby-image'
import { VortexReverse } from 'react-burgers'

const TopMenu = (props) => {

  return (
    <React.Fragment>
      <MDBContainer fluid={true} className={`${classes.Con} text-white elegant-color-dark border-bottom border-success`}>
        <MDBRow className={`${classes.Row} align-items-center justify-content-between`}>
          <Link to="/">
            <img
              src={props.logo}
              alt="site logo"
              className={props.active ? classes.Logo2 : classes.Logo}
            />
          </Link>
          <VortexReverse
            width='20'
            active={props.active}
            onClick={props.toggleCollapse}
            color={props.active ? 'green' : 'rgb(244, 244, 244)'}
            className={props.active ? classes.ButOne : classes.MainBut}
          />
          {/* <MDBCol md="4" className={classes.ColThree}>
          </MDBCol> */}
        </MDBRow>
        <Contact />
      </MDBContainer>
    </React.Fragment>
  )
}

export default TopMenu
