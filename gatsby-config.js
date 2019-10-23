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
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true
            }
          }
        ]
      }
    },
    "gatsby-plugin-twitter",
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
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: [
          "NOW_GITHUB_COMMIT_SHA",
          "COMMIT_REF",
          "NOW_BUILDER",
          "NETLIFY"
        ]
      }
    }
  ]
}
