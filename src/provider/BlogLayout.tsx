// @ts-expect-error ts-migrate(6142) FIXME: Module './TagProvider' was resolved to '/Users/inu... Remove this comment to see the full error message
import { TagProvider } from "./TagProvider"
import React from "react"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../app/layout/Layout' was resolved to '... Remove this comment to see the full error message
import { Layout } from "../../app/layout/Layout"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../app/lib/feed/useExternalFeeds' was r... Remove this comment to see the full error message
import { ExternalFeedProvider } from "../../app/lib/feed/useExternalFeeds"
import {
  GatsbyPageContextProvider,
  usePageContext
// @ts-expect-error ts-migrate(6142) FIXME: Module './GatsbyGlobalContext' was resolved to '/U... Remove this comment to see the full error message
} from "./GatsbyGlobalContext"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../app/layout/ChakraProvider' was resol... Remove this comment to see the full error message
import { Chakra } from "../../app/layout/ChakraProvider"

const FeedProvider = ({
  children
}: any) => {
  const { feeds } = usePageContext()
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ExternalFeedProvider initialFeeds={feeds}>{children}</ExternalFeedProvider>
  )
}

export const BlogLayoutProvider = ({
  children,
  pageContext = {}
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Chakra>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <GatsbyPageContextProvider pageContext={pageContext}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <FeedProvider>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TagProvider>{children}</TagProvider>
        </FeedProvider>
      </GatsbyPageContextProvider>
    </Chakra>
  )
}
