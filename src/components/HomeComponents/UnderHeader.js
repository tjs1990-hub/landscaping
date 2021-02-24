import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact"
import classes from "./UnderHeader.module.css"

const UnderHeader = props => {
  return (
    <React.Fragment>
      <h1 className="text-center red-text font-weight-bold">Covid-19 Latest</h1>
      <MDBContainer className="white-text">
        <MDBRow>
          <div
            className={classes.Welcome}
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </MDBRow>
      </MDBContainer>

      <MDBContainer style={{ marginTop: "100px" }}>
        <MDBRow className={classes.Row}>
          <MDBCol md="6" className={classes.Col}>
            <ul className={`${classes.List} p-0`}>
              <div className="d-flex">
                <MDBIcon className={`${classes.Icon} green-text mr-2 fa-3x`} icon="check" />
                <li dangerouslySetInnerHTML={{ __html: props.callOutOne }} />
              </div>
              <div className="d-flex" style={{ display: 'flex' }}>
                <MDBIcon className={`${classes.Icon} green-text mr-2 fa-3x`} icon="check" />
                <li dangerouslySetInnerHTML={{ __html: props.callOutTwo }} />
              </div>
              <div className="d-flex">
                <MDBIcon className={`${classes.Icon} green-text mr-2 fa-3x`} icon="check" />
                <li dangerouslySetInnerHTML={{ __html: props.callOutThree }} />
              </div>
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
