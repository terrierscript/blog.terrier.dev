import React, { FC } from "react"
import { usePageContext } from "../../../src/provider/GatsbyGlobalContext"
import styled from "@emotion/styled"
import { NavLink } from "../../component/NavLink"
import { headerFont } from "../../utils/typography"
import { PostWrap, BlogList } from "../../list/Item"

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
      {previousPagePath && <NavLink to={previousPagePath}>≪Prev</NavLink>}
      {nextPagePath && <NavLink to={nextPagePath}>Next≫</NavLink>}
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
