---
templateKey: blog-post
title: netlifyでyarnやnodeのバージョンを指定したりフラグを渡したりする
date: '2019-05-19T13:05:14.717Z'
tags:
  - netlify
  - yarn
published: true
---

Netlifyでは基本的にyarnやnodeのバージョンが固定されてるが、ビルドによってはコケたりオプションを渡したかったりする

そんな時は`netlify.toml`に下記など追加すると良い

```toml
[build.environment]
  YARN_VERSION = "1.10.1"
  YARN_FLAGS = "--no-ignore-optional"
  NODE_VERSION = "10.11.0"
```

ドキュメントにはこの辺に書いてある

* https://www.netlify.com/docs/build-settings/
* https://www.netlify.com/docs/build-gotchas/
