import React from "react"
import { usePageContext } from "../../src/provider/GatsbyGlobalContext"
import { BlogList } from "../list/Item"
import styled from "styled-components"
import { headerFont } from "../utils/typography"
import { Link } from "gatsby"
import { Layout } from "../layout/Layout"

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
      {previousPagePath && <Link to={previousPagePath}>≪Prev</Link>}
      {nextPagePath && <Link to={nextPagePath}>Next≫</Link>}
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
