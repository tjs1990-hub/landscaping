import React from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdbreact'
import Img from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import classes from "./index.module.css";

const ServiceAreaParts = ({ data }) => {
    const breakpoints = useBreakpoint();
    return <MDBContainer fluid={true} className={`w-100 h-auto`}>
        {<MDBRow className={`w-100 p-0 m-0 ${!breakpoints.md ? '' : `${classes.scrollingWrapperFlexbox} mx-3`}`}>
            {data.map(el => (
                <MDBCol md='4' key={el.node.id} className={classes.item}>
                    <MDBCard className={classes.Card}>
                        <Img
                            fluid={el.node.acf.featured_img.localFile.childImageSharp.fluid}
                            className={classes.Image}
                            alt={el.node.acf.featured_img.alt_text}
                        />
                        <MDBCardBody className='text-center'>
                            <MDBCardTitle style={{ minHeight: 60 }}>
                                {el.node.name}
                            </MDBCardTitle>
                            <AniLink paintDrip duration={1.2} color='green' direction="up" to={`/service-area/services/${el.node.slug}/`}>
                                <MDBBtn color='dark'>Learn More</MDBBtn>
                            </AniLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            ))}
        </MDBRow>
        }
    </MDBContainer >
}

export default ServiceAreaParts;