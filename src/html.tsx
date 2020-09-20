// @ts-nocheckss
import React from "react"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../app/meta/MetaHeader' was resolved to '/... Remove this comment to see the full error message
import { MetaHeader } from "../app/meta/MetaHeader"
import { logVersion } from "./version"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../app/meta/injection/TwitterTracking' was... Remove this comment to see the full error message
import { TwitterTracking } from "../app/meta/injection/TwitterTracking"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../app/meta/HelmetItem' was resolved to '/... Remove this comment to see the full error message
import { HelmetItem } from "../app/meta/HelmetItem"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../app/meta/injection/GaTracking' was reso... Remove this comment to see the full error message
import { GaTracking } from "../app/meta/injection/GaTracking"
// @ts-expect-error ts-migrate(6142) FIXME: Module '../app/layout/ChakraProvider' was resolved... Remove this comment to see the full error message
import { Chakra } from "../app/layout/ChakraProvider"

logVersion()
export default class HTML extends React.Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <html lang="ja">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <MetaHeader {...this.props} />

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <body>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <HelmetItem />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TwitterTracking />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div
            id="___gatsby"
            // @ts-expect-error ts-migrate(2339) FIXME: Property 'body' does not exist on type 'Readonly<{... Remove this comment to see the full error message
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />

          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'postBodyComponents' does not exist on ty... Remove this comment to see the full error message */}
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
