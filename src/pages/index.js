import React from "react"
import Layout from "../components/layout"
import Header from "../components/HomeComponents/Header"
import { graphql, StaticQuery } from "gatsby"
import UnderHeader from "../components/HomeComponents/UnderHeader"
import ReviewSection from "../components/HomeComponents/ReviewSection"
import Allservices from "../components/Services/AllServices"
import classes from "./Index.module.css"
import GetQuote from "../components/HomeComponents/GetQuote"
import Animation from "../components/Animation"
import Qualifications from "../components/qualifications/Qualifications"
import SEO from "../components/seo"
import og from '../images/og.jpg'





const Index = props => {
  return (
    <StaticQuery
      query={graphql`
     
        {
          googlePlacesPlace {
    
            rating
            user_ratings_total
          }

          wordpressPage(title: { eq: "Home" }) {
            title
            content
            yoast_meta {
              yoast_wpseo_title
              yoast_wpseo_metadesc
            }

            acf {
              header_img {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }

              featured_on{
                alt_text
                localFile{
                  childImageSharp{
                    fluid{
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }



              header_title
              header_text
              featured_on {
                alt_text
                source_url
              }
              callout_one
              callout_two
              callout_three
              project_video_one

              review_img {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }

              review_background {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }

              google_img {
                alt_text
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={props => {
        return (
          <React.Fragment>

            <SEO
              title={props.wordpressPage.yoast_meta.yoast_wpseo_title}
              description={props.wordpressPage.yoast_meta.yoast_wpseo_metadesc}
              image={`https://landscapegardenerswestyorkshire.com` + og}
              rating={props.googlePlacesPlace.rating}
              total={props.googlePlacesPlace.user_ratings_total}
            />
            <Layout>

              <div className="elegant-color-dark overflow-hidden">


                <Header
                  title={props.wordpressPage.acf.header_title}
                  text={props.wordpressPage.acf.header_text}
                  imgUrl={
                    props.wordpressPage.acf.header_img.localFile.childImageSharp.fluid
                  }
                  alt={props.wordpressPage.acf.header_img.alt_text}
                  featuredNew={props.wordpressPage.acf.featured_on.localFile.childImageSharp.fluid}
                />



                <Animation type="fadeInLeft" reveal={true}>
                  <UnderHeader
                    content={props.wordpressPage.content}
                    callOutOne={props.wordpressPage.acf.callout_one}
                    callOutTwo={props.wordpressPage.acf.callout_two}
                    callOutThree={props.wordpressPage.acf.callout_three}
                    videoOne={props.wordpressPage.acf.project_video_one}
                  />
                </Animation>

                <Animation type="fadeInUp" reveal={true}>
                  <ReviewSection
                    reviewImg={
                      props.wordpressPage.acf.review_img.localFile.childImageSharp
                        .fluid
                    }
                    reviewBackground={
                      props.wordpressPage.acf.review_background.localFile
                        .childImageSharp.fluid
                    }
                    googleImg={
                      props.wordpressPage.acf.google_img.localFile.childImageSharp
                        .fluid
                    }
                  />
                </Animation>

                <Animation type="fadeInRight" reveal={true}>
                  <Allservices />
                </Animation>

                <Animation type="fadeInUp" reveal={true} delay="0">
                  <div className={`${classes.GetQuote} green`}>
                    <GetQuote />
                  </div>
                </Animation>


                <Qualifications />



              </div>
            </Layout>
          </React.Fragment>
        )
      }}
    />
  )
}

export default Index
