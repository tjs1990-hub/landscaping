import React from "react"
import classes from "./Content.module.css"
import { MDBContainer } from "mdbreact"
import renderHTML from "react-render-html"

const Content = props => {
  return (
    <React.Fragment>
      <MDBContainer className={classes.Con}>
        {renderHTML(props.content)}
      </MDBContainer>
    </React.Fragment>
  )
}

export default Content
