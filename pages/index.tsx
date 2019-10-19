import React, { Component } from "react"
import { getPagenateList } from "../src/markdown"

class Index extends Component {
  static getInitialProps() {
    const items = getPagenateList(1)
    console.log(items)
  }
  render() {
    return <div>hello</div>
  }
}
export default () => Index
