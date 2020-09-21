import { createContext } from "react"
import React from "react"

// @ts-ignore
export const SiteContext = createContext({
  title: "blog.terrier.dev"
})

export const DefaultLink = props => <a {...props} />

type Tag = {
  fieldValue: string
  totalCount: number
}

const defaultTagContext = {
  tags: [],
  Link: DefaultLink
}
export const TagsContext = createContext<{
  tags: Tag[]
  Link?: any // TODO: react item
}>(defaultTagContext)

export const TagsProvider = ({ children, ...props }) => {
  const value = {
    ...defaultTagContext,
    ...props
  }
  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>
}
