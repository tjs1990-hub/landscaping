import React from "react"
import MainMenu from "./MainMenu"
import Footer from './footer'
import classes from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="elegant-color">
        <MainMenu />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )

}

export default Layout
