import React, { FC } from "react"
import { usePageContext } from "../../src/provider/GatsbyGlobalContext"
import { BlogList, PostListItem, PostWrap } from "../list/Item"
import styled from "styled-components"
import { headerFont } from "../utils/typography"
import { Layout } from "../layout/Layout"
import Link from "next/link"

const PaginateContainer = styled.div`
  padding: 1em;
  justify-content: space-evenly;
  width: 100%;
  display: flex;
  font-weight: bold;
  font-size: 1.2em;
  font-family: ${headerFont};
`

const Paginate = ({ previousPagePath, nextPagePath }) => {
  return (
    <PaginateContainer>
      {previousPagePath && <Link href={previousPagePath}>≪Prev</Link>}
      {nextPagePath && <Link href={nextPagePath}>Next≫</Link>}
    </PaginateContainer>
  )
}

export type PagenatePath = {
  next: string
  prev: string
}
export const Index: FC<{ posts: PostWrap[]; pagePaths?: PagenatePath }> = ({
  posts
}) => {
  const pageContext = usePageContext() // TODO
  return (
    <>
      <BlogList posts={posts} />
      <Paginate {...pageContext} />
    </>
  )
}
