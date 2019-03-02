import "./gatsby-polyfill"
import React from "react"
import { render } from "react-dom"
import { Layout } from "../src/app/layout/Layout"
import { BlogItem } from "../src/app/list/Item"
import Navbar from "../src/app/layout/Navbar"
import { Fonts } from "./fonts"

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
  return (
    <div>
      <Fonts />
      <Layout>
        <BlogItem post={mockPost} />
      </Layout>
    </div>
  )
}

render(<App />, document.querySelector("#root"))
