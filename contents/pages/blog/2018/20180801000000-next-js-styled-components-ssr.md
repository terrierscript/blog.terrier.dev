---
templateKey: blog-post
title: next.jsでstyled-componentsをSSRする
date: '2018-08-01T00:02:02+09:00'
tags:
  - next.js
  - styled-components
  - javascript
---
ここに答えがあった

https://github.com/zeit/next.js/blob/canary/examples/with-styled-components/pages/_document.js

```js
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
```
getInitialPropsでstyleを作成しそれをheadタグ内のstyleTagに埋め込むとのこと
