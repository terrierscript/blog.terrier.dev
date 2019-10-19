import fetch from "isomorphic-unfetch"
import React, { Component } from "react"
import { getPagenateList } from "../src/markdown"
import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

class Index extends Component {
  static async getInitialProps(ctx) {
    console.log("initial", publicRuntimeConfig)
    // console.log("initial", ctx.)
    // @ts-ignore
    // if (process.browser) {
    //   return {}
    // }
    // // const items = getPagenateList(1)
    // // const res = await fetch("/api/ping")
    // console.log(items)
    return {}
  }
  render() {
    return <div>hello</div>
  }
}
export default Index
