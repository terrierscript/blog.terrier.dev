const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const getTemplate = name => {
  return path.resolve(`src/templates/${String(name)}.js`)
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const limit = process.env.NODE_ENV === "production" ? 10000 : 100
  const ql = `
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: ${limit}
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              tags
              templateKey
              published
            }
          }
        }
      }
    }
  `

  const buildPages = posts => {
    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: getTemplate(edge.node.frontmatter.templateKey),
        // additional data can be passed via context
        context: {
          id
        }
      })
    })
  }
  const buildTagPages = posts => {
    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: getTemplate("tags"),
        context: {
          tag
        }
      })
    })
  }
  // execute
  graphql(ql).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      // @ts-ignore
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    buildPages(posts)
    buildTagPages(posts)
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}