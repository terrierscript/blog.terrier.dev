---
templateKey: blog-post
title: 'gatsbyでwindowを使うとError: ReferenceError: window is not defined出るのを何とかする'
date: '2018-04-05T14:18:53+09:00'
tags:
  - gatsby
  - javascript
---

gatsbyでreact-gaのようなwindowを利用するようなものを扱おうとすると、Webpackが下記のように怒ってくる

```
WebpackError: window is not defined
```

gatsbyはwebpackまわりが隠蔽されているので困っていたが、下記で解決策を見つけた

https://github.com/gatsbyjs/gatsby/issues/309#issuecomment-302043875

```js
if (typeof window !== "undefined") {
  ReactGA.initialize("UA-XXXXXX", { debug: true });
  // @ts-ignore
  ReactGA.pageview(window.location.pathname + window.location.search);
}
```
ということでこんな感じになる
