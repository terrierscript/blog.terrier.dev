import React, { useContext } from "react"

const GatsbyPageContext = React.createContext({
  previousPagePath: "",
  nextPagePath: "",
  feeds: []
})

export const GatsbyPageContextProvider = ({ pageContext, children }) => {
  return (
    <GatsbyPageContext.Provider value={pageContext}>
      {children}
    </GatsbyPageContext.Provider>
  )
}

export const usePageContext = () => {
  return useContext(GatsbyPageContext)
}
