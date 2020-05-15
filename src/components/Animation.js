import React from "react"
import { MDBAnimation } from "mdbreact"
import classes from "./Animation.module.css"

const Animation = props => {
  return (
    <MDBAnimation
      type={props.type}
      delay={props.delay}
      reveal={props.reveal}
      duration={props.duration}
      infinite={props.infinite}
      className={classes.Ani}
    >
      {props.children}
    </MDBAnimation>
  )
}

export default Animation
