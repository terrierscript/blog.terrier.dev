import React from "react"
import App from "next/app"
import { MainLayout } from "../src/provider/MainLayout"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }
}

export default MyApp
