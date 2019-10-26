import React from "react"
import { TagsProvider } from "../app/context/SiteContext"
import { Fonts } from "../app/meta/Fonts"
import { Tag } from "../app/component/Tag"
// import { Layout, LayoutInner } from "../app/layout/Layout"
import { BlogItem } from "../app/list/Item"
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
export const SandboxApp = () => {
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

        <BlogItem post={mockPost} />
        <div>
          <Tag tag="React" />
          <Tag tag="React Hooks" />
        </div>
        {/* <LayoutInner> */}
        {/* 
        <BlogArticle
          date="2019/10/10 10:10:10"
          title={"Blogのタイトル"}
          markdown={testMarkdown}
          tags={["javascript", "netlify", "parcel", "react"]}
        /> */}
        {/* </LayoutInner> */}
      </TagsProvider>
    </div>
  )
}
