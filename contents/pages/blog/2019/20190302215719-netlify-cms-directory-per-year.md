---
templateKey: blog-post
title: NetlifyCMSのディレクトリを無理やり年別に分ける
date: '2019-03-02T12:57:19.629Z'
tags:
  - Netlify
  - NetlifyCMS
  - yaml
published: false
---

NetlifyCMSのディレクトリがどうにも太るので困ったなーと思っていたが、考えてみればNetlifyCMSのcollectionでゴリッと年別に分ければいいのでは？と思って実行した。

https://github.com/terrierscript/snippet.terrierscript.com/pull/59

肝になるのは`config.yml`と`netlify.toml`だ。

https://github.com/terrierscript/snippet.terrierscript.com/pull/59/files#diff-e36160419abb71f07eb8f74e9d3cc8bc

https://github.com/terrierscript/snippet.terrierscript.com/pull/59/files#diff-5db06fd2327543bbb72119cd1e5761cf

config.ymlの方は