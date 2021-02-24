import React from "react"
import { MDBContainer } from "mdbreact"
import classes from "./Header.module.css"
import QuickQuote from "./QuickQuote"
import Img from 'gatsby-image'

const Header = (props) => {

  return (
    <React.Fragment>
      <div className={`${classes.Con} mx-0`} id='funk'>
        <Img
          fluid={props.imgUrl}
          alt={props.alt}
          className={classes.FeaturedImg}
        />
        <div className={classes.Overlay}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
        <div className={classes.Featured}>
          <Img fluid={props.featuredNew} className={classes.Feat} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
