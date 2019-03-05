const siteUrl = "https://terrier.dev"
module.exports = {
  siteMetadata: {
    title: "terrier.dev",
    siteUrl,
    description: "Author: terrierscript"
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
          "gatsby-remark-component",
          {
            resolve: "gatsby-remark-github",
            options: {
              marker: "GITHUB-EMBED",
              insertEllipsisComments: true,
              ellipsisPhrase: "...",
              useCache: true,
              cacheKey: "gatsby-remark-github-v1",
              token: process.env.GITHUB_TOKEN
            }
          }
          // `gatsby-remark-prismjs`
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    "gatsby-plugin-twitter",
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
    // {
    //   resolve: "gatsby-plugin-typography",
    //   options: {
    //     pathToConfigModule: `app/utils/typography`
    //   }
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl
      }
    }
  ]
}
