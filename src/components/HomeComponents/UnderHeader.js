import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact"
import classes from "./UnderHeader.module.css"

const UnderHeader = props => {
  return (
    <React.Fragment>
    <MDBContainer className={classes.CovidSection}>

       <h3>Covid-19 Latest</h3>

       
    
    
    </MDBContainer>
      <MDBContainer className={classes.Con}>
        <MDBRow className={classes.TopRow}>
          <div
            className={classes.Welcome}
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </MDBRow>
      </MDBContainer>

      <MDBContainer style={{ marginTop: "100px" }}>
        <MDBRow className={classes.Row}>
          <MDBCol md="6" className={classes.Col}>
            <ul className={classes.List}>
              <li>
                <MDBIcon className={classes.Icon} icon="check-square" list />{" "}
              </li>
              <li dangerouslySetInnerHTML={{ __html: props.callOutOne }} />
              <li>
                <MDBIcon className={classes.Icon} icon="check-square" list />{" "}
              </li>

              <li dangerouslySetInnerHTML={{ __html: props.callOutTwo }} />
              <li>
                <MDBIcon className={classes.Icon} icon="check-square" list />{" "}
              </li>
              <li dangerouslySetInnerHTML={{ __html: props.callOutThree }} />
            </ul>
          </MDBCol>
          <MDBCol md="6" className={classes.VidCol}>
            <div
              dangerouslySetInnerHTML={{ __html: props.videoOne }}
              className={classes.Vid}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  )
}

export default UnderHeader
