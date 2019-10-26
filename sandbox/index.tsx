import "./polyfill"
import React from "react"
import { render } from "react-dom"
import { LayoutInner } from "../app/layout/Layout"
import { BlogItem } from "../app/list/Item"
import { HeaderBar } from "../app/layout/HeaderBar"
import { TagsContext, DefaultLink } from "../app/context/SiteContext"
import { BlogArticle } from "../app/page/article/Blog"
import { SandboxApp } from "./SandboxApp"

render(<SandboxApp />, document.querySelector("#root"))
