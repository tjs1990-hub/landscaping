import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Ratings from "react-ratings-declarative"
import classes from "./reviews.module.css"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact"



const Reviews = ({ data }) => {
  const [more, showMore] = useState(false)
  const [user, setUser] = useState([])

  const place = data.googlePlacesPlace
  const gpr = data.allGooglePlacesReview.edges

  const rating = place.rating
  const total = place.user_ratings_total

  let people = []
  const m = () => {
    for (let key in gpr) {
     

      people.push({
        id: key,
        authorName: gpr[key].node.author_name,
        profilePic: gpr[key].node.profile_photo_url,
        rating: gpr[key].node.rating,
        text: gpr[key].node.text,
      })

      setUser(people)
    }
  }

  useEffect(() => {
    m()
  }, [])

  const Bottom = user.map(el => {
    return (
      <MDBCard className={classes.Card} key={el.id}>
        <img height="50" width="50" src={el.profilePic} />

        <MDBCardBody>
          <MDBCardTitle>{el.authorName} </MDBCardTitle>
          <MDBCardText>
            {`${el.text.substring(0, 578)}`}
          </MDBCardText>

          <Ratings
            rating={el.rating < 2 ? 5 : el.rating}
            widgetRatedColors="green"
          >
            <Ratings.Widget />

            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget widgetHoverColor="black" />
            <Ratings.Widget />
          </Ratings>
        </MDBCardBody>
      </MDBCard>
    )
  })

  return (
    <Layout>
    <SEO 
    title='TJM Landscapes - Customer Reviews - Google Verified'
          description='Check out out reviews for a honest opinion on our work these reviews are google verified'
          rating={rating}
          total={total}
         
    
    />
      <div className={classes.Content}>
        <h1>TJM Landscapes Google Reviews</h1>

        <Ratings rating={rating} widgetRatedColors="green">
          <Ratings.Widget />

          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget widgetHoverColor="black" />
          <Ratings.Widget />
        </Ratings>

        <h3>{`Total Ratings - ${total}`}</h3>
      </div>

      {Bottom}
    </Layout>
  )
}

export const query = graphql`
  query {
    googlePlacesPlace {
      name
      rating
      childrenGooglePlacesReview {
        author_name
        text
        rating
        profile_photo_url
      }
      user_ratings_total
    }

    allGooglePlacesReview(filter: {rating: {gt: 1}}) {
      edges {
        node {
          author_name
          profile_photo_url
          rating
          text
        }
      }
    }
  }
`

export default Reviews
