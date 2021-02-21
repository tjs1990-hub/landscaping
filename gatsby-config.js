require("dotenv").config({
    path: `.env`,
})



module.exports = {
    siteMetadata: {
        title: `TM Landscapes`,
        description: `TM Landscapes | Landscaping Professionals`,
        author: `Tom South`,
        siteUrl: "https://landscapegardenerswestyorkshire.com",
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-favicon`,
        'gatsby-plugin-breakpoints',
        `gatsby-plugin-smoothscroll`,


        {
            resolve: `gatsby-source-google-places`,
            options: {
                placeIds: [process.env.PLACE_ID, ],
                apiKey: process.env.GOOGLE_PLACES
            }
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-WJD9SMV",

                // Include GTM in development.
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                // Defaults to null
                defaultDataLayer: null,

                gtmAuth: process.env.GOOGLE_TAG_MANAGER_AUTH,
                gtmPreview: "env-4",
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-156233740-1",
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `roboto`,
                    `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
                ],
                display: "swap",
            },
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                baseUrl: process.env.API_URL,

                protocol: process.env.API_PROTOCOL,

                hostingWPCOM: false,

                useACF: true,

                includedRoutes: [
                    "**/categories",
                    "**/posts",
                    "**/pages",
                    "**/media",
                    "**/tags",
                    "**/taxonomies",
                    "**/users",
                    "**/menus",
                    "**/portfolio",
                    "**/services",
                    "**/qualifications",
                    "**/gallery",
                    "**/logo",
                    "**/location",

                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `TJM Landscapes`,
                short_name: `TJM Landscapes`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}