import React, { Component } from "react"
import { getBlogList } from "../src/markdown/isomophic"
import { Index } from "../app/page/Index"
import { PostWrap } from "../app/list/Item"

class IndexPage extends Component<{ items: PostWrap[] }> {
  static async getInitialProps(ctx) {
    const res = await getBlogList({ page: 1, limit: 10 })
    // console.log("xx", res)
    return { items: res }
  }
  render() {
    // return <div>aa</div>
    return <Index posts={this.props.items}></Index>
  }
}
export default IndexPage
