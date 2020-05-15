const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Monochromatic visions`,
    author: 'Monochromatic visions',
    description: 'Monochromatic visions official page'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Monochromatic Visions`,
        short_name: `MV`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'wwootHIPmKOgA8RmuQRd0gtt',
        homeSlug: 'home',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: ['./src/styles/resources.scss'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          // '@modules': path.resolve(__dirname, 'src/modules'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@src': path.resolve(__dirname, 'src'),
        },
        extensions: ['js', 'svg'],
      },
    },
  ],
}
