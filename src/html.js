// @ts-nocheckss
import React from "react"
import { MetaHeaderGatsby } from "../app/meta/MetaHeader"
import { logVersion } from "./version"

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="ja">
        <MetaHeaderGatsby {...this.props} />
        <body>
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
