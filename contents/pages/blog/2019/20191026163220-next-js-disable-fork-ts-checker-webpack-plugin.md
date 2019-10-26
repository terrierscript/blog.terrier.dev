---
templateKey: blog-post
title: next.jsでForkTsCheckerWebpackPluginを実行させない方法
date: '2019-10-26T07:32:20.365Z'
tags:
  - next.js
  - webpack
  - typescript
published: true
---


nextが`fork-ts-checker-webpack-plugin`を内包しているが、遅いし不要にコケるしであんまり好きになれなかったので外したかった。

デフォルトでは存在しなかったが、下記でワークアラウンドな方法を見つけたのを真似た。
https://github.com/zeit/next.js/issues/7687#issuecomment-506440999

```js
module.exports = {
  webpack: config => {
    config.plugins = config.plugins.filter(plugin => 
      (plugin.constructor.name !== "ForkTsCheckerWebpackPlugin")
    )
    return config
  }
}
```

