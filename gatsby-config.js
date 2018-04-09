module.exports = {
  siteMetadata: {
    title: "Snippet",
    siteUrl: `https://snippet.terrierscript.com`,
    description: "短めの記事"
  },
  plugins: [
    // "gatsby-plugin-debug-build",
    "gatsby-plugin-no-sourcemaps",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/contents/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/contents/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            // resolve: `gatsby-remark-highlights`
            resolve: `gatsby-remark-prismjs`
            // inlineCodeMarker: null
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    "gatsby-plugin-feed",
    "gatsby-plugin-styled-components",
    // "gatsby-plugin-react-css-modules",
    {
      resolve: `gatsby-plugin-sitemap`,
      query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: `src/app/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-5982830-12",
        // Puts tracking script in the head instead of the body
        head: true
      }
    }
  ]
}
