import React from "react"
import { usePageContext } from "../../src/provider/GatsbyGlobalContext"
import { BlogList } from "../list/Item"
import styled from "@emotion/styled"
import { headerFont } from "../utils/typography"
import { Layout } from "../layout/Layout"
import { NavLink } from "../component/NavLink"

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

export const Index = ({ posts }) => {
  const pageContext = usePageContext()
  return (
    <Layout>
      <BlogList posts={posts} />
      <Paginate {...pageContext} />
    </Layout>
  )
}
