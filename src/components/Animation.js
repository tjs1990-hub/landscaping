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
      className="mt-5"
    >
      {props.children}
    </MDBAnimation>
  )
}

export default Animation
