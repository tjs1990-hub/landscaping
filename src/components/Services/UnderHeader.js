import React from "react"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import classes from "./UnderHeader.module.css"
import renderHTML from "react-render-html"
import Images from "./Images"

const UnderHeader = props => {
  return (
    <React.Fragment>
      <MDBContainer className={classes.Vid}>
        {renderHTML(props.video)}
      </MDBContainer>

      <MDBContainer className={classes.TextOne}>
        <div className={classes.Border}>
          <h2>{props.title}</h2>

          <span>{renderHTML(props.textOne)}</span>
        </div>
      </MDBContainer>

      <Images
        imgOne={props.imgOne}
        imgTwo={props.imgTwo}
        imgThree={props.imgThree}
      />

      <MDBContainer className={`${classes.TextTwo} green-text`}>
        <div className={classes.BorderTwo}>
          <span className="font-italic">{renderHTML(props.textTwo)}</span>
        </div>
      </MDBContainer>
    </React.Fragment>
  )
}

export default UnderHeader
