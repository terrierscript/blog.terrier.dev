---
templateKey: blog-post
title: next.jsとTypeScriptでpathsを指定しても解決されないときの対処
date: '2018-07-25T22:20:18+09:00'
tags:
  - typescript
  - next.js
  - webpack
---
https://github.com/zeit/next-plugins/issues/207

にissueがあった。

awesome-typescript-pluginのやつはうまく行かなかったので、下記記事を参考にwebpack設定追加した


https://qiita.com/nju33/items/cf924f7b6bb513bef8a2


tsconfig.json

```json
    "baseUrl": ".",
    "paths": {
      "~/*": ["packages/*"]
    },
```

next.config.js

```js
const path = require("path")
const withTypescript = require("@zeit/next-typescript")

module.exports = withTypescript({
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve("packages")
    }
    return config
  }
})

```
