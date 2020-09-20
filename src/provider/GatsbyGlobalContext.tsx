import React, { useContext } from "react"

const GatsbyPageContext = React.createContext({
  previousPagePath: "",
  nextPagePath: "",
  feeds: []
})

export const GatsbyPageContextProvider = ({
  pageContext,
  children
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <GatsbyPageContext.Provider value={pageContext}>
      {children}
    </GatsbyPageContext.Provider>
  )
}

export const usePageContext = () => {
  return useContext(GatsbyPageContext)
}
