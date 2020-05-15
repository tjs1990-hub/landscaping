import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import {VortexReverse} from 'react-burgers'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact"
import classes from "./MainMenu.module.css"
import TopMenu from "./TopMenu"
import MainSide from "./MainSide"
import MainBack from "./MainBack"

class MainMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    
    }
  }

  toggleCollapse = () => {
    this.setState({ active: !this.state.active }, () => {
      this.state.active ? document.body.classList.add(classes.BodyClass) : document.body.classList.remove(classes.BodyClass)
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {

            allWordpressWpLogo{
              edges{
                node{
                  url{
                    source_url
                  }
                }
              }
            }

            allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Main" } }) {
              edges {
                node {
                  id
                  items {
                    title
                    object_slug
                    wordpress_children {
                      title
                      object_slug
                    }
                  }
                }
              }
            }
          }
        `}
        render={props => (
          <React.Fragment>
          <MainSide
          toggleCollapse={this.toggleCollapse}
          logo={props.allWordpressWpLogo.edges[0].node.url.source_url}
          
          active={this.state.active} 
          />
          <MainBack 
          active={this.state.active}
          
          />
            <TopMenu 
           logo={props.allWordpressWpLogo.edges[0].node.url.source_url}
           active={this.state.active}
           toggleCollapse={this.toggleCollapse}
            />
               

            
          </React.Fragment>
        )}
      />
    )
  }
}

export default MainMenu
