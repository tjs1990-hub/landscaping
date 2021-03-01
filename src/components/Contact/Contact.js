import React, { Component } from "react"
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact"
import { Link } from "gatsby"
import axios from "axios"
import classes from "./Contact.module.css"

export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      contactNumber: "",
      postcode: '',
      message: "",
      isOpen: false,
      messageSent: "",
      errorMessage: "",
    }
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
      this.state.isOpen ? document.body.classList.add(classes.BodyClass) : document.body.classList.remove(classes.BodyClass)
    })
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    let formData = new FormData()

    formData.set("your-name", this.state.name)
    formData.set("your-email", this.state.email)
    formData.set("your-number", this.state.contactNumber)
    formData.set("your-message", this.state.message)
    formData.set("your-postcode", this.state.postcode)

    axios
      .post(
        `https://admin.fencingleeds.co/wp-json/contact-form-7/v1/contact-forms/127/feedback`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then(res => {
        res.data.status === "mail_sent"
          ? this.setState({
            messageSent: res.data.message,
            name: "",
            email: "",
            contactNumber: "",
            postcode: '',
            message: "",

          })
          : this.setState({ errorMessage: res.data.message }, () => {
            setTimeout(() => {
              this.setState({ errorMessage: "" })
            }, 2000)
          })
      })
  }

  render() {
    return (
      <div className="position-fixed" style={{ bottom: 0, right: 10, zIndex: 5 }}>
        <span className={classes.BtnCon}>
          <span onClick={this.toggleModal} className={`${classes.Link} my-3 bg-success p-3 rounded-pill`}>
            Contact Us
          </span>
        </span>
        <MDBModal
          isOpen={this.state.isOpen}
          toggle={this.toggleModal}
          className={`${classes.Modal} mx-5`}
          centered
        >
          <MDBModalHeader
            className={classes.ModalHead}
            toggle={this.toggleModal}
          >
            Get In Touch
          </MDBModalHeader>
          <MDBModalBody>
            <form onSubmit={this.onSubmit} className={classes.Form}>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  name="name"
                  value={this.state.name}
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.onChangeHandler}
                  className={classes.Input}
                />
                <MDBInput
                  label="Your email"
                  name="email"
                  value={this.state.email}
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.onChangeHandler}
                  className={classes.Input}
                />
                <MDBInput
                  label="Contact Number"
                  name="contactNumber"
                  value={this.state.contactNumber}
                  icon="phone"
                  group
                  type="tel"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.onChangeHandler}
                  className={classes.Input}
                />
                <MDBInput
                  label="Postcode"
                  name="postcode"
                  value={this.state.postcode}
                  icon="home"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.onChangeHandler}
                  className={classes.Input}
                />

                <MDBInput
                  type="textarea"
                  name="message"
                  value={this.state.message}
                  rows="2"
                  label="Your message"
                  icon="pencil-alt"
                  onChange={this.onChangeHandler}
                  className={classes.InputMessage}
                />
              </div>
              {this.state.messageSent && (
                <p className="success-color text-white text-center">
                  {this.state.messageSent}
                </p>
              )}
              {this.state.errorMessage && (
                <p className="danger-color-dark text-white text-center">
                  {this.state.errorMessage}
                </p>
              )}
              <div className="text-center">
                <MDBBtn className={classes.FormBtn} type="submit">
                  Send <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBModalBody>
          {/* <MDBModalFooter>
            <MDBBtn color="black" onClick={this.toggleModal}>
              Close
            </MDBBtn>
          </MDBModalFooter> */}
        </MDBModal>
      </div>
    )
  }
}
