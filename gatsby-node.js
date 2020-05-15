const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressWpServices {
        edges {
          node {
            slug
            yoast_meta {
              yoast_wpseo_title
              yoast_wpseo_metadesc
            }

            acf {
              header_img {
                alt_text
                source_url
              }

              header_text
              title
              introduction_text
              image_one {
                alt_text
                source_url
              }

              image_two {
                alt_text
                source_url
              }

              all_types
              call_out_title
              call_out
            }
          }
        }
      }


      allWordpressCategory {
        edges {
          node {
            slug
            name
          
          }
        }
      }
    

    
      allWordpressWpLocation {
        edges {
          node {
            content
            slug
            wordpress_id

            yoast_meta {
              yoast_wpseo_title
              yoast_wpseo_metadesc
            }



            acf {
              header_img {
                source_url
               alt_text
              }
              img_title
              video_embed
              title
              text_top
              img_one {
               source_url
               alt_text
              }

              text_middle

              img_two {
                source_url
                alt_text
              }

              text_bottom

              img_three {
                 source_url
                 alt_text
              }

              how_much
            }
          }
        }
      }
    

    
      allWordpressWpPortfolio {
        edges {
          node {
            wordpress_id
            slug
            title
            content
            featured_media {
              alt_text
              source_url
            }
          }
        }
      }
    

    
      allWordpressPost {
        edges {
          node {
            id
            title
            slug
            excerpt
            content
          }
        }
      }

      

      
      googlePlacesPlace{
        rating
        user_ratings_total
       
      }
    

    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const {  allWordpressWpServices,  allWordpressWpLocation, allWordpressWpPortfolio, allWordpressPost, googlePlacesPlace, allWordpressCategory  } = result.data

  // Create Page pages.


  const locationCategoryTemplate = path.resolve("./src/templates/LocationCategory.js")

  allWordpressCategory.edges.forEach(edge => {
    createPage({
      path: `/service-area/services/${edge.node.slug}/`,
      component: slash(locationCategoryTemplate),
      context: {
         slug: edge.node.slug,
         name: edge.node.name,
       
      },
    })
  })

  const serviceTemplate = path.resolve("./src/templates/AllServices/AllServices.js")

  allWordpressWpServices.edges.forEach(edge => {
    createPage({
      path: `/services/${edge.node.slug}/`,
      component: slash(serviceTemplate),
      context: {
         wp: edge.node,
        google: googlePlacesPlace,
      },
    })
  })

  const locationTemplate = path.resolve(`./src/templates/Locations.js`)

  allWordpressWpLocation.edges.forEach(edge => {
    createPage({
        path: `/locations/${edge.node.slug}/`,
        component: slash(locationTemplate),
        context: {
          wp: edge.node,
          google: googlePlacesPlace
        },
    })
  })

  const portfolioTemplate = path.resolve(`./src/templates/Portfolio.js`)

  allWordpressWpPortfolio.edges.forEach(edge => {
    createPage({
        path: `/portfolio/${edge.node.slug}/`,
        component: slash(portfolioTemplate),
        context: edge.node,
    })
  })
  const postTemplate = path.resolve(`./src/templates/Post.js`)

  allWordpressWpPortfolio.edges.forEach(edge => {
    createPage({
        path: `/blog/${edge.node.slug}/`,
        component: slash(postTemplate),
        context: edge.node,
    })
  })

 


}