import { createContext } from "react"
import React from "react"

// @ts-ignore
export const SiteContext = createContext({
  title: "terrier.dev"
})

const DefaultLink = props => <a {...props} />

type Tag = {
  fieldValue: string
  totalCount: number
}
export const TagsContext = createContext<{
  tags: Tag[]
  Link: React.ReactNode
}>({
  tags: [],
  Link: DefaultLink
})
