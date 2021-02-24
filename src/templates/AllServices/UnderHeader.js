import React from "react"
import { MDBContainer } from "mdbreact"
import classes from "./UnderHeader.module.css"
import renderHTML from "react-render-html"

const UnderHeader = props => {
  return (
    <React.Fragment>
      <MDBContainer className={classes.Con}>
        <span className={`${classes.Background} p-5 green darken-4 border border-success`}>
          <h2>{props.title}</h2>

          <span>{renderHTML(props.intro)}</span>
        </span>
      </MDBContainer>
    </React.Fragment>
  )
}

export default UnderHeader
