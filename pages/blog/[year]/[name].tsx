import { getBlogItem } from "../../../src/markdown/isomophic"
import remark from "remark"
import { renderMarkdown } from "../../../app/page/article/toHtmlAst"
import { BlogPostTemplate } from "../../../app/page/article/Blog"
import { BlogItem } from "../../../src/markdown/api"
import unified from "unified"

// const BlogPostWrap = () => {
//   return <BlogPostTemplate
//         content={content}
//         tags={
//           post.frontmatter.tags // description={post.frontmatter.description}
//         }
//         date={post.frontmatter.date}
//         title={post.frontmatter.title}
//         fileAbsolutePath={post.fileAbsolutePath}
//         description={post.excerpt}
//         // id={post.id}
//       />
// }

const markdownConvert = mdText => {
  unified()
}
type Params = {
  blogPost: BlogItem
}
const Post = params => {
  console.log(params)
  const { blogPost } = params
  const { content, data } = blogPost
  // const ast = remark().parse(content)
  // const cnt = renderMarkdown(content)

  // console.log("p", cnt)
  return (
    <BlogPostTemplate
      // content={cnt}
      title={data.title}
      date={data.date}
      tags={data.tags}
      rawMarkdown={content}
      description={""}
    />
  )
}

Post.getInitialProps = async ({ query }) => {
  const { year, name } = query
  const slug = `${year}/${name}`
  console.log("sll", slug)
  const blogPost = await getBlogItem({ slug })
  console.log(blogPost)
  return {
    slug,
    blogPost
  }
}

export default Post
