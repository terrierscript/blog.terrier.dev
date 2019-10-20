import Link from "next/link"

import React, { FC } from "react"
import styled from "styled-components"
// import { BlogArticleCompact } from "../article/Blog"
import { headerFont } from "../utils/typography"
import { Tag } from "../component/Tag"

const Title = styled.div`
  font-weight: bold;
  font-family: ${headerFont};
`

const Item = styled.div`
  /* padding: 1.2em; */
  /* border-bottom: 1px solid #e3e3e3; */
`

export type PostListItem = {
  id: string
  frontmatter: {
    date: string
    title: string
    tags: string[]
  }
  fields: {
    slug: string
  }
}

export const BlogItem: FC<{ post: PostListItem }> = ({ post }) => {
  return (
    <section>
      <Item>
        <small>{post.frontmatter.date}</small>
        <Title>
          <Link href={post.fields.slug}>{post.frontmatter.title}</Link>
          <div>
            {post.frontmatter.tags.map((tag: string) => {
              return <Tag tag={tag} key={tag} />
            })}
          </div>
        </Title>
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
