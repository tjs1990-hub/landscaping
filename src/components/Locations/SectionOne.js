import React from "react"
import classes from "./SectionOne.module.css"
import renderHTML from "react-render-html"
import Qualifications from '../../components/qualifications/Qualifications'
import GetQuote from '../../components/HomeComponents/GetQuote'
import Allservices from "../Services/AllServices"

const SectionOne = props => {
  return (
    <React.Fragment>
      <div className={classes.Con}>
        <h2>{props.title}</h2>

        <span className={classes.GM}>{renderHTML(props.content)}</span>

        <div className={classes.TextTop}>{renderHTML(props.textTop)}</div>
      </div>

      <div className={classes.ImgOneCon}>
        <img 
        src={props.imgOne.source_url} 
        alt={props.imgOne.alt_text}
        className={classes.ImageOne}
         />
      </div>



      <div className={classes.TextMiddle}>
      
         {renderHTML(props.textMiddle)}
      </div>

      <div className={classes.ImgOneCon}>
      <img 
      src={props.imgTwo.source_url} 
      alt={props.imgTwo.alt_text}
      className={classes.ImageOne}
       />
    </div>

     <div className={classes.TbWrapper}>
    <div className={classes.TextBottom}>{renderHTML(props.textBottom)}</div>
    </div>

     <Allservices />
    


    <div className={classes.HowMuchCon}>
    <div className={classes.HowMuch}>
    {renderHTML(props.howMuch)}
    
    </div>
    </div>
  <div className={classes.Quote}>
  <GetQuote />
    
  </div>


  <Qualifications />
   

    </React.Fragment>
  )
}

export default SectionOne
