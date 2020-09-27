---
templateKey: blog-post
title: NetlifyCMSのディレクトリを無理やり年別に分ける
date: '2019-03-02T12:57:19.629Z'
tags:
  - Netlify
  - NetlifyCMS
  - yaml
---

NetlifyCMSのディレクトリがどうにも太るので困ったなーと思っていたが、考えてみればNetlifyCMSのcollectionでゴリッと年別に分ければいいのでは？と思って実行した。

https://github.com/terrierscript/snippet.terrierscript.com/pull/59

肝になるのは`config.yml`と`netlify.toml`だ。

## config.ymlの修正
https://github.com/terrierscript/snippet.terrierscript.com/pull/59/files#diff-e36160419abb71f07eb8f74e9d3cc8bc

config.ymlの方は`blog: &blog`という感じでブログコレクションの情報を共通化して使えるようにした。あとは年単位で利用するところで`<<: *blog`という具合で使う。
この記法はymlのパーサによっては使えない場合もあるのでいけるかな？と心配だったが大丈夫だった。

## netlify.tomlの修正

https://github.com/terrierscript/snippet.terrierscript.com/pull/59/files#diff-5db06fd2327543bbb72119cd1e5761cf

そのままだとリンクが切れるのでリダイレクトをする必要がある。そこで`netlify.toml`だ。

https://www.netlify.com/docs/redirects/

下記のような感じで愚直にリダイレクト処理を書いた。

```toml
[[redirects]]
  from = "/blog/20180*"
  to = "/blog/2018/20180:splat"
  status = 301
  force = true
```

`*`で書いた部分が`:splat`として取れるので非常に便利。

Gatsbyでリダイレクトする方法もあったが、netlifyの方が圧倒的に便利だと感じる（片一方netlify依存度が上がる・・）