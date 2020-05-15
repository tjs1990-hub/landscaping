import React from 'react'
import classes from './MainBack.module.css'






const MainBack = (props) => {
    return(
        <React.Fragment>

           <div className={props.active ? classes.Backdrop : classes.BackdropTwo}>
           
           
           
           </div>
        
        </React.Fragment>
    )
}


export default MainBack