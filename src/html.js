// @ts-nocheckss
import React from "react"
import { MetaHeaderGatsby } from "../app/meta/MetaHeader"
import { logVersion } from "./version"
import { TwitterTracking } from "../app/meta/TwitterTracking"
import { HelmetItem } from "../app/meta/HelmetItem"

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="ja">
        <MetaHeaderGatsby {...this.props} />

        <body>
          <HelmetItem />
          <TwitterTracking />
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
