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
              token: process.env.GITHUB_EMBED_TOKEN
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true
            }
          }
        ]
      }
    },
    "gatsby-plugin-twitter",
    "gatsby-plugin-feed",
    "gatsby-plugin-styled-components",
    // "gatsby-plugin-react-css-modules",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "terrier.dev",
        start_url: "/",
        icon: "src/icon/icon.png"
      }
    }
  ]
}
