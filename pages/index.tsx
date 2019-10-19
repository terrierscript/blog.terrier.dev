import React, { Component } from "react"
import { getBlogList } from "../src/markdown/module"

class Index extends Component {
  static async getInitialProps(ctx) {
    const res = await getBlogList({ page: 1, limit: 10 })
    console.log(res)
    return {}
  }
  render() {
    return <div>hello</div>
  }
}
export default Index
