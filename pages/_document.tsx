
import Document, { Html, Head, Main, NextScript } from "next/document"
import { MetaHeader } from "../app/meta/MetaHeader"

const DocumentInner = () => {
  return (
    <Html>
      <Head>
        <MetaHeader />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    // const sheet = await getSheet(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {/* {sheet} */}
        </>
      )
    }
  }
  render() {
    return <DocumentInner />
  }
}

export default AppDocument
