const siteUrl = "https://www.terrier.dev"
module.exports = {
  siteMetadata: {
    title: "terrier.dev",
    url: siteUrl,
    siteUrl,
    description: "Author: terrierscript",
    twitterUsername: "@terrierscript"
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
    // "gatsby-plugin-sharp",
    // "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-twitter",
    "gatsby-plugin-emotion",
    // "gatsby-plugin-styled-components",
    // "gatsby-plugin-react-css-modules",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-feed",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "www.terrier.dev",
        start_url: "/",
        icon: "src/icon/icon.png"
      }
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          "NOW_GITHUB_COMMIT_SHA",
          "COMMIT_REF",
          "NOW_BUILDER",
          "NETLIFY"
        ]
      }
    }
  ]
}
