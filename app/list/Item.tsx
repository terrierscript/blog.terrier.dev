import React, { FC } from "react"
import styled from "@emotion/styled"
// import { BlogArticleCompact } from "../article/Blog"
import { headerFont } from "../utils/typography"
import { Tag } from "../component/Tag"
import { NavLink } from "../component/NavLink"
import { Date } from "../component/Date"
const Title = styled(NavLink)`
  font-weight: bold;
  font-size: 1.2em;
  display: block;
  line-height: 1.5em;
  /* font-family: ${headerFont}; */
`

const Item = styled.div`
  /* padding: 1.2em; */
  /* border-bottom: 1px solid #e3e3e3; */
`

export type PostListItem = {
  id: string
  frontmatter: {
    date?: string
    title?: string
    tags?: string[]
  }
  fields: {
    slug: string
  }
}

export const BlogItem: FC<{ post: PostListItem }> = ({ post }) => {
  return (
    <section>
      <Item>
        <Date>{post.frontmatter.date}</Date>
        <Title to={post.fields.slug}>{post.frontmatter.title}</Title>
        <div>
          {post.frontmatter.tags.map((tag: string) => {
            return <Tag tag={tag} key={tag} />
          })}
        </div>
      </Item>
    </section>
  )
}

const BlogListGrid = styled.div`
  display: grid;
  grid-gap: 2em;
`

export type PostWrap = {
  node: PostListItem
}
export const BlogList: FC<{ posts: PostWrap[] }> = ({ posts }) => {
  return (
    <BlogListGrid>
      {posts.map(({ node: post }) => (
        <BlogItem post={post} key={post.id} />
      ))}
    </BlogListGrid>
  )
}
