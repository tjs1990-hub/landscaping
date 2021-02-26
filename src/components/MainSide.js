import React from 'react'
import classes from './MainSlide.module.css'
import { Link } from 'gatsby'
import { VortexReverse } from 'react-burgers'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const MainSide = (props) => {
  return (
    <React.Fragment>
      <div className={props.active ? classes.Wrapper : classes.WrapperTwo}>
        <div className={classes.Toggle}>
          <VortexReverse
            width='20'
            active={props.active}
            onClick={props.toggleCollapse}
            color={props.active ? 'rgb(244, 244, 244)' : 'rgb(135, 135, 135)'}
            className={props.active ? classes.But : classes.ButTwo}

          />
        </div>

        <div className={classes.LogoTop}>
          <img
            src={props.logo}
            alt='tjm landscapes'
            className={props.active ? classes.Logo : classes.Logo2}

          />
        </div>
        <div className={classes.SideDrawer}>
          <ul>
            <AniLink onClick={props.toggleCollapse} fade duration={1} color='green' direction="down" to='/'>Home</AniLink>
            <AniLink onClick={props.toggleCollapse} fade duration={1} hex='#0088bf' to='/services'>Services</AniLink>
            <AniLink onClick={props.toggleCollapse} fade color='green' duration={1} to='/about'>About</AniLink>
            <AniLink onClick={props.toggleCollapse} fade hex='#0088bf' duration={1} to='/gallery'>Gallery</AniLink>
            <AniLink onClick={props.toggleCollapse} fade hex='#0088bf' duration={1} to='/service-area'>Service Area</AniLink>
          </ul>
        </div>
        <div className={classes.CopyRight}>
          <span className={classes.Copy}>&copy; {new Date().getFullYear()} <a> TJM Landcapes </a></span>
          <a href='tel:07746273202'>07746273202</a>
        </div>
      </div>
    </React.Fragment>
  )
}


export default MainSide