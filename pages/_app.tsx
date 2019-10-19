import React from "react"
import App from "next/app"
import { MainLayout } from "../src/provider/MainLayout"
import { Layout } from "../app/layout/Layout"

class MaimApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    )
  }
}

export default MaimApp
