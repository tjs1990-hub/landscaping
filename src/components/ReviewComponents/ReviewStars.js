import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Ratings from 'react-ratings-declarative';
import classes from './ReviewStars.module.css'




const ReviewStars = () => {
    return(
        <StaticQuery query={graphql`

        query {
            googlePlacesPlace {
              rating
        
            }
          }
        `}
           render={props => (
             <div className={classes.Wrapper}>


             <div className={classes.Text}>
             
             <span className={classes.G}>G</span>
             <span className={classes.O}>o</span>
             <span className={classes.O2}>o</span>
             <span className={classes.G2}>g</span>
             <span className={classes.L}>l</span>
             <span className={classes.E}>e</span>

            
             
             </div>
             <h3 className={classes.R}>Ratings</h3>
            <Ratings
            rating={props.googlePlacesPlace.rating}
            widgetRatedColors="orange"
            widgetDimensions='20px'
           
          >
            <Ratings.Widget className={classes.Star}/>
        
            <Ratings.Widget className={classes.Star}/>
            <Ratings.Widget
            className={classes.Star}
            />
            <Ratings.Widget widgetHoverColor="black" className={classes.Star}/>
            <Ratings.Widget className={classes.Star}/>
          </Ratings>
          </div>   
           )}
        />
    )
}




export default ReviewStars