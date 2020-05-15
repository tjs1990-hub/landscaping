import React from "react"
import { MDBContainer } from "mdbreact"
import classes from "./Type.module.css"
import renderHTML from "react-render-html"

const Type = props => {
  return (
    <React.Fragment>
      <MDBContainer className={classes.Con}>
        {renderHTML(props.type)}
      </MDBContainer>
    </React.Fragment>
  )
}

export default Type
