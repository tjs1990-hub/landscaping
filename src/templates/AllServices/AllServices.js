import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Header from "./Header"
import UnderHeader from "./UnderHeader"
import classes from "./AllServices.module.css"
import Images from "./Images"
import Type from "./Types"
import CallOut from "./CallOut"
import GetQuote from "../../components/HomeComponents/GetQuote"
import Qualifications from "../../components/qualifications/Qualifications"
import SEO from "../../components/seo"

export default ({ pageContext }) => (
  <React.Fragment>

    <SEO
      title={pageContext.wp.yoast_meta.yoast_wpseo_title}
      description={pageContext.wp.yoast_meta.yoast_wpseo_metadesc}
      image={pageContext.wp.acf.header_img.source_url}
      rating={pageContext.google.rating}
      total={pageContext.google.user_ratings_total}
    />
    <Layout>
      <div className={`${classes.Wrapper} elegant-color-dark`}>
        <Header
          slug={pageContext.wp.slug}
        />

        <UnderHeader
          title={pageContext.wp.acf.title}
          intro={pageContext.wp.acf.introduction_text}
        />

        <Images
          imgOne={pageContext.wp.acf.image_one}
          imgTwo={pageContext.wp.acf.image_two}
        />

        <Type type={pageContext.wp.acf.all_types} />

        <CallOut
          title={pageContext.wp.acf.call_out_title}
          text={pageContext.wp.acf.call_out}
        />
        <div className={`${classes.GetQuote} green`}>
          <GetQuote />
        </div>

        <Qualifications />
      </div>
    </Layout>
  </React.Fragment>
)




