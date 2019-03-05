import "./gatsby-polyfill"
import React from "react"
import { render } from "react-dom"
import { Layout } from "../app/layout/Layout"
import { BlogItem } from "../app/list/Item"
import { BlogArticle } from "../app/article/Blog"
import { HeaderBar } from "../app/layout/HeaderBar"
import {
  TagsContext,
  DefaultLink,
  TagsProvider
} from "../app/context/SiteContext"

const mockPost = {
  fields: {
    slug: "foo-baz"
  },
  frontmatter: {
    title:
      "Type 'Element' is not assignable to type 'StatelessComponent<Props>'. が出た時のメモ",
    tags: ["JavaScript", "React"],
    date: "2019-02-24T07:57:10.697Z"
  }
}

const App = () => {
  const tagsValue = [
    {
      fieldValue: "JavaScript",
      totalCount: 10
    },
    {
      fieldValue: "React",
      totalCount: 10
    },
    {
      fieldValue: "JavaScript",
      totalCount: 10
    }
  ]
  return (
    <div>
      <TagsProvider tags={tagsValue}>
        <Fonts />
        <Layout>
          <BlogItem post={mockPost} />
          <BlogArticle
            title={"Blogのタイトル"}
            content={"aaaaaaaaaaaaaa"}
            tags={["javascript", "netlify", "parcel", "react"]}
          />
        </Layout>
      </TagsProvider>
    </div>
  )
}

render(<App />, document.querySelector("#root"))
