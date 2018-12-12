const req = require('require-yml')
const config = req('./config.yml')

console.log(config.siteMetadata.title)
module.exports = {
  siteMetadata: {
    title: config.siteMetadata.title,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifest.name,
        short_name: config.manifest.short_name,
        start_url: config.manifest.start_url,
        background_color: config.manifest.background_color,
        theme_color: config.manifest.theme_color,
        display: config.manifest.display,
        icon: config.manifest.icon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.analytics.googleTrackingId,
      },
    },
  ],
}
