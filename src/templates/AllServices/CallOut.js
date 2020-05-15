import React from "react"
import { MDBContainer } from "mdbreact"
import classes from "./CallOut.module.css"
import renderHTML from "react-render-html"

const CallOut = props => {
  return (
    <React.Fragment>
      <MDBContainer className={classes.Con}>
        <h2>{props.title}</h2>

        <span>{renderHTML(props.text)}</span>
      </MDBContainer>
    </React.Fragment>
  )
}

export default CallOut
