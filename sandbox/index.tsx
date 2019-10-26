import "./gatsby-polyfill"
import React from "react"
import { render } from "react-dom"
import { LayoutInner } from "../app/layout/Layout"
import { BlogItem } from "../app/list/Item"
import { HeaderBar } from "../app/layout/HeaderBar"
import {
  TagsContext,
  DefaultLink,
  TagsProvider
} from "../app/context/SiteContext"
import { Fonts } from "../app/meta/Fonts"
import { BlogArticle } from "../app/page/article/Blog"

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

const testMarkdown = `
# foo
## baz
### bar

Loreim ipsum
foobaz bar

zoo

- a
- b
- c

`

export const App = () => {
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
      <div>a</div>
      <TagsProvider tags={tagsValue}>
        <Fonts />
        {/* <LayoutInner> */}
        <BlogItem post={mockPost} />
        {/* <BlogArticle
          title={"Blogのタイトル"}
          date={"2019-10-10 10:10:10"}
          markdown={testMarkdown}
          tags={["javascript", "netlify", "parcel", "react"]}
        /> */}
        {/* </LayoutInner> */}
      </TagsProvider>
    </div>
  )
}

render(<App />, document.querySelector("#root"))
