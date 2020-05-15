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
    
    {
      resolve: `gatsby-source-google-places`,
      options: {
        placeIds: [process.env.PLACE_ID, ],
        apiKey: process.env.GOOGLE_PLACES
      }
    },
    {
      resolve: "gatsby-plugin-guess-js",
      options: {
        // Find the view id in the GA admin in a section labeled "views"
        GAViewID: `209586482`,
        // Add a JWT to get data from GA
        jwt: {
          client_email: `guess-js-ga@guess-js-analaytics-api.iam.gserviceaccount.com`,
          private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCstfo3Q2zhCbTa\ngCctbEw9FWni+WBuKW/b2bsSQzhn1O6zV5fp6jB8CfB+LHYk1pmeWfpgDKxQULl0\nFQel+DcurfKQTDxFtgHOl1vx/aQBoBiIAl8InHVJwnpU9PRegKtdGiGRoA3BckLn\nOVVkv0dVetytbv0GUf2cxGk1ySbpTWZMITHLkl4xkidrtFiJUqDs4Sflivp/2hDy\nPGb9uQ+rwvF4kploWsoByucxmPXrjDzN3cSr/ki7uTeP/c9wbYTTrvHjrhp2Y1QM\neLxLzK/sWduD8oPjUaL4TLg1WFl1cspr5P1+OhSQDwHO4fieDjDSu9lMEVfAN6Qb\nva/rm0ZPAgMBAAECggEAGEPC4TPEXsOF2LLrjiqqdWSGSWC+5wtET2+CJFk0WgYk\n+SZjzfXclPiyhI+Lk7Zgw8ohbpApP2lv/Lqdpfg/DHxc2WAUkbi1/Ufvn4qCmcXb\n3HP01RliMxgzJq95i7NpH/31XGfPtu9uLd00vaBQDdbinS08OECZsIY5v9hAcsN1\nVV2Ooh7Y9Un0g+ZF3zT2OY58F8SXUBJlRLksNLBJeuNY3dX7mYXSS4yr01khHTTI\njCVv7T7+IfpSrGOatlK4E568Za4Wth9WmppaG/AvB/qiCmyTZOtR2gmQkyC0ZFQa\nqgAO5mhSEYwlb6YZWkdntsKcXJ5V65ALykuQFbLBrQKBgQDg8ZqCDswtprHV5QRp\njltaNEApmSlw35xg9dsKiXwmHXg24SQZH9MDpM9P+h5mFIE7DNpoMQnQdeA7IA1Y\nKHI2VWLeS7ktY/v6h3mxf0S4BbldJmHPP/QkdKwCN0PI2DJky+Yj5yrR9jnNSP1f\nh1WFcTaC4iV6iVjw8NVlIVcScwKBgQDEjkHmnc08UD3B3rDim75rj2sbLdkFQ2K5\n3d4hh0+wWG12UK0WoVKiOOw0eOpVKlvaJmKENM8lp+I5/PbmTWCgBHfBVuk5TZFo\n87l/+3gUXffy38eC3sLiv93ADU8QEHD0ss/vONsBGYcpUu2l4biLZwRTh5wjAPXE\nU6S7sUoZtQKBgQDGKHApJGn/yToeKEqzxkF5fFANlSxpj8MNs2eLp8PjO9C736fS\nLjPQoO40ES2YVXXmlBMO+CwiJMUssLaws6ixbpTTKTfu4YaHk7LDh079IaXChl5h\nmYA0YUdqCE9BbhsuqmSJukoBfnw6+JKkBe9zx2Dy+c90W+wrDK2gEjfHOwKBgQDB\n89Ipm5syocde77zBz4cmIf5BcotMu0LHP5x6n0fOLmPNNSynQQcGVn8WBB7PbR33\n9JqP9IBXmwMLz4demAn5vI7jNDytM9KBqsZn+J90EYmimpkHlYLfNw68/SUAKAke\nHPg8CXFp82PBLjic0FBHFp9ZQV6b182sLhFGuFnzZQKBgQCXJiDCgBuTAI/pIzHw\njR08ET5zLVbdLOxhjhIKF9QKLP+etItjEkcF3ei9N2UGJeEKHq5iDYIp5TviNdtW\nMQX7SGgbg6KlAxR536m2b9m3XRkH3sQnzV1S3+zkrpV1XUygmzNY6j5BEg0U+X6q\n4l+EZbM7qkEI+IUivnPCq0UVUA==\n-----END PRIVATE KEY-----\n`,
        },
        minimumThreshold: 0.03,
        // The "period" for fetching analytic data.
        period: {
          startDate: new Date("2020-3-1"),
          endDate: new Date(),
        },
      },
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
      resolve: `gatsby-source-instagram`,
      options: {
        username: `tm_landscapeswy`,
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
