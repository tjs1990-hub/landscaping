import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Allservices from "../components/Services/AllServices"
import Layout from "../components/layout"
import Header from "../components/Services/Header"
import classes from "./Services.module.css"
import UnderHeader from "../components/Services/UnderHeader"
import Qualifications from "../components/qualifications/Qualifications"
import GetQuote from "../components/HomeComponents/GetQuote"
import SEO from "../components/seo"


export default () => (
  <StaticQuery
    query={graphql`
      {

        googlePlacesPlace {
    
          rating
          user_ratings_total
        }
        wordpressPage(template: { eq: "services_template.php" }) {
          slug
          title
          yoast_meta {
            yoast_wpseo_title
            yoast_wpseo_metadesc
          }

        

          acf {
            header_img {
              alt_text
              localFile{
                childImageSharp{
                  fluid{
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }

            header_text
            video
            title
            text_one

            image_one {
              alt_text
              localFile{
                childImageSharp{
                  fluid{
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }

            image_two {
              alt_text
              localFile{
                childImageSharp{
                  fluid{
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }

            image_three {
              alt_text
              localFile{
                childImageSharp{
                  fluid{
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }

            text_two
          }
        }
      }
    `}
    render={props => (
      <React.Fragment>
        <SEO
          title={props.wordpressPage.yoast_meta.yoast_wpseo_title}
          description={props.wordpressPage.yoast_meta.yoast_wpseo_metadesc}
          rating={props.googlePlacesPlace.rating}
          total={props.googlePlacesPlace.user_ratings_total}
          image={props.wordpressPage.acf.header_img.localFile.childImageSharp.fluid}
        />
        <Layout>
          <div className={classes.Wrapper}>
            <Header
              img={props.wordpressPage.acf.header_img.localFile.childImageSharp.fluid}
              alt={props.wordpressPage.acf.header_img.alt_text}
              text={props.wordpressPage.acf.header_text}
            />

            <UnderHeader
              video={props.wordpressPage.acf.video}
              title={props.wordpressPage.acf.title}
              textOne={props.wordpressPage.acf.text_one}
              imgOne={props.wordpressPage.acf.image_one.localFile.childImageSharp.fluid}
              imgTwo={props.wordpressPage.acf.image_two.localFile.childImageSharp.fluid}
              imgThree={props.wordpressPage.acf.image_three.localFile.childImageSharp.fluid}
              textTwo={props.wordpressPage.acf.text_two}
            />
            <div className={classes.Background}>
              <GetQuote />
            </div>

            <Allservices />

            <Qualifications />
          </div>

      
        </Layout>
      </React.Fragment>
    )}
  />
)
