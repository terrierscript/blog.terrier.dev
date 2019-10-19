const fs = require("fs")
const path = require("path")

const klawSync = require("klaw-sync")

const getMarkdowns = () => {
  const pagesPath = path.resolve("contents/pages")
  const markdowns = klawSync(pagesPath)
    .filter(p => {
      const ext = path.extname(p.path)
      return [".md"].includes(ext)
    })
    .map(item => {
      const name = item.path.replace(pagesPath, "")
      return {
        ...item,
        name
      }
    })
}
// const SUMMARY_JSON = require("./content/summary.json")

module.exports = {
  exportPathMap: function() {
    const posts = {}
    const paths = {}
    // markdowns.forEach(file => {
    //   const fileObj = SUMMARY_JSON.fileMap[file]
    //   const obj = {}
    //   if (fileObj.paths) {
    //     // Handle custom paths / aliases.
    //     obj.page = "/post"
    //     obj.query = {
    //       fullUrl: file.match(/^content(.+)\.json$/)[1]
    //     }
    //     fileObj.paths.forEach(path => {
    //       paths[path] = obj
    //     })
    //   } else if (file.indexOf("content/posts") === 0) {
    //     // Handle posts.
    //     const page = file
    //       .split("content")
    //       .join("")
    //       .split(".json")
    //       .join("")
    //     posts[page] = {
    //       page: "/post",
    //       query: {
    //         fullUrl: page
    //       }
    //     }
    //   }
    // })

    return Object.assign(
      {},
      {
        "/": { page: "/" }
      },
      posts,
      paths
    ) // aliases
  }
}
