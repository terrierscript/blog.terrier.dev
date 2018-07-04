---
templateKey: blog-post
title: netlify-lambdaでローカルでnetlifyのlambdaが試せる
date: '2018-06-22T09:08:10+09:00'
tags:
  - netlify
  - javascript
---
netlifyのfunctionを試したい場合の話。

https://www.netlify.com/docs/functions/?_ga=2.153975802.315628698.1529625716-1793405938.1529625716#tools-for-building-javascript-functions

```
$ touch netlify.toml
```

で、functionsを設定

```netlify.toml
[build]
  functions = "functions"
```

```
$ npx netlify-lambda serve functions
```

あとはポートが開く
