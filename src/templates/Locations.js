import React from 'react'
import Header from '../components/Locations/Header'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SectionOne from '../components/Locations/SectionOne'
import Qualifications from "../components/qualifications/Qualifications"
import classes from './Locations.module.css'
import SEO from '../components/seo'




const Locations = ({pageContext}) => {
    return(
        <React.Fragment>
        <div className={classes.Wrapper}>

        <Layout>
        
       
        <SEO 
        title={pageContext.wp.yoast_meta.yoast_wpseo_title}
            description={pageContext.wp.yoast_meta.yoast_wpseo_metadesc}
            image={pageContext.wp.acf.header_img.source_url}
            rating={pageContext.google.rating}
            total={pageContext.google.user_ratings_total}
        
        />
        
      <Header 
      slug={pageContext.wp.slug}
      
      
      />

        <SectionOne 
       title={pageContext.wp.acf.title}
       textTop={pageContext.wp.acf.text_top}
          content={pageContext.wp.content}
          imgOne={pageContext.wp.acf.img_one}
          textMiddle={pageContext.wp.acf.text_middle}
          imgTwo={pageContext.wp.acf.img_two}
          textBottom={pageContext.wp.acf.text_bottom}
          howMuch={pageContext.wp.acf.how_much}
        
        />

      

      
      
        </Layout>
        </div>
    


       

        
        </React.Fragment>
    )
}



export default Locations