import React from "react"
import { Link } from "gatsby"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import classes from "./Footer.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { MDBIcon } from 'mdbreact'
const Footer = () => {

  return (
    <MDBFooter className={`${classes.Footer} border-top border-success elegant-color-dark`}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" className={classes.Col}>

            <img
              src='https://admin.fencingleeds.co/wp-content/uploads/2020/04/cropped-Asset-2@2x.png'
              className={`${classes.FooterLogo} mb-4`}
            />
            <p>9 Copley Hill<br /> Batley<br />WF170DT
            </p>

          </MDBCol>
          <MDBCol md="6" className={classes.Col}>
            <h5 className="title mb-4 font-weight-bold">Menu</h5>
            <ul className={classes.U}>
              <li className="list-unstyled">
                <AniLink fade duration={1.2} to="/services/turfing-grass">Turfing</AniLink>
              </li>
              <li className="list-unstyled">
                <AniLink fade duration={1.2} to="/services/fencing-services">Fencing</AniLink>
              </li>
              <li className="list-unstyled">
                <AniLink fade duration={1.2} to="/services/paving-patios">Patios</AniLink>
              </li>

              <li className="list-unstyled">
                <AniLink fade duration={1.2} to='/reviews'>Reviews</AniLink>
              </li>
              <li className="list-unstyled">
                <a href="https://landscapegardenerswestyorkshire.com/sitemap.xml">Sitemap</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="text-center py-3">
        <MDBContainer fluid className={classes.Copy}>
          &copy; {new Date().getFullYear()} <a> Zaya Enterprises Limited 13124098 - Trading As TJM Landcapes </a>
          <p>
            Site by <a href="https://www.instagram.com/tjs.io/">Tjs.io</a>
          </p>

        </MDBContainer>
      </div>

      <div className={classes.Social}>
        <a target='_blank' href='https://www.facebook.com/tjmlandscapeswestyorkshire'><MDBIcon fab icon="facebook-square" size='2x' className={classes.IconOne} /></a>
        <a target='_blank' href='https://www.instagram.com/tm_landscapeswy/'> <MDBIcon fab icon="instagram" size='2x' className={classes.IconTwo} /></a>
      </div>
    </MDBFooter>
  )
}





export default Footer