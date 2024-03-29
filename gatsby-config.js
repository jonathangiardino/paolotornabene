require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Paolo Tornabene`,
    description: `Filmmaker based in London, UK`,
    author: `@jonathangiardino`,
    image: `https://paolotornabene.com/images/logo-rounded.png`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `local-storage-fallback`,
    `dotenv`,
    `slugify`,
    `smooth-scroll`,
    `gatsby-plugin-react-helmet`,
    `framer-motion`,
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isResettingCSS: false,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `graphcms-image`,
    `pattern.css`,
    `shorthandcss`,
    `@reach/router`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `gcms`,
        url: process.env.GATSBY_GRAPHCMS_API_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paolo Tornabene`,
        short_name: `Paolo Tornabene`,
        start_url: `/`,
        background_color: `#F3C623`,
        theme_color: `#1F2833`,
        display: `minimal-ui`,
        icon: `src/images/logo-rounded.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
