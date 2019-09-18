const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { paginate } = require("gatsby-awesome-pagination")
const { loadFeedForSSR } = require("./app/lib/feed/loader")

const getTemplate = name => {
  return path.resolve(`src/templates/${String(name)}.js`)
}

const normalizedTagGroup = tags => {
  let obj = {}
  tags.map(tag => {
    const lower = tag.toLowerCase()
    const current = obj[lower]
    obj[lower] = current ? [...current, tag] : [tag]
    return obj
  })
  return Object.entries(obj).map(([lower, values]) => {
    return {
      lower,
      tags: _.uniq(values)
    }
  })
}
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const limit = process.env.NODE_ENV === "production" ? 10000 : 100
  const ql = `
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: ${limit}
        filter: {
          frontmatter: {
            published: { ne: false }
          }
        }
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
  const result = await graphql(ql)
  // console.log(result)
  const feeds = await loadFeedForSSR()
  const globals = {
    feeds
  }

  const buildPages = posts => {
    console.log(posts)
    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: getTemplate(edge.node.frontmatter.templateKey),
        // additional data can be passed via context
        context: {
          id,
          ...globals
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
    const tagGroups = normalizedTagGroup(tags)

    // Make tag pages
    tagGroups.forEach(({ lower, tags }) => {
      const tagPath = `/tags/${lower}/`

      createPage({
        path: tagPath,
        component: getTemplate("tags"),
        context: {
          tags,
          lower,
          ...globals
        }
      })
    })
  }

  const buildPaginate = posts => {
    paginate({
      createPage,
      items: posts,
      itemsPerPage: 10,
      pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
      component: getTemplate("index"),
      context: {
        ...globals
      }
    })
  }

  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()))
    // @ts-ignore
    return Promise.reject(result.errors)
  }

  const posts = result.data.allMarkdownRemark.edges
  buildPages(posts)
  buildTagPages(posts)
  buildPaginate(posts)
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
