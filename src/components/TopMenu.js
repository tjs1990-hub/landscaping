import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact"
import classes from "./TopMenu.module.css"
import Contact from "../components/Contact/Contact"
import Img from 'gatsby-image'
import {VortexReverse} from 'react-burgers'

const TopMenu = ( props) => {

  return (
    <React.Fragment>
    <MDBContainer fluid={true} className={classes.Con}>
      <MDBRow className={classes.Row}>
        <MDBCol md="4" className={classes.Col}>
          <Link to="/">
         

            <img
            src={props.logo}
            alt="site logo"
            className={props.active ? classes.Logo2 : classes.Logo}
          />

         
        
          </Link>
        </MDBCol>
        <MDBCol  md="4" className={classes.ColTwo}>
          <Contact />
        </MDBCol>
        <MDBCol md="4" className={classes.ColThree}>
        <VortexReverse 
        width='40'
      active={props.active}
      onClick={props.toggleCollapse}
      color=  {props.active ? 'green' : 'rgb(244, 244, 244)'}
      className={props.active ? classes.ButOne : classes.MainBut}
      
      />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </React.Fragment>
  )
}

export default TopMenu