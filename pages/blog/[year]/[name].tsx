import { getBlogItem } from "../../../src/markdown/isomophic"

const Post = params => {
  console.log(params)
  return <div>aa</div>
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
