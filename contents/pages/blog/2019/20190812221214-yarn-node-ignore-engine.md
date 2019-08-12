---
templateKey: blog-post
title: yarnでnodeのバージョンが合わない場合に無理やり回避するオプション
date: '2019-08-12T13:12:14.292Z'
tags:
  - yarn
  - node
---

yarnを使っていると、時折下記のようなエラーに遭遇する。

```
The engine "node" is incompatible with this module. Expected version ">=11.10.0". Got "10.15.3"
```

パッケージのnodeのバージョンが合わないのでダメです🙅‍♀️という話なのだが、そうは言ってもnvmなどを入れたくないし、素振りなのでとりあえず回避したい場合がある。

この場合は、`--ignore-engines`のオプションで回避できる

```
yarn add some-package --ignore-engines
```

しかし毎度つけるのが面倒だったりすることもある。
その場合は[`.yarnrc`](https://yarnpkg.com/lang/ja/docs/yarnrc/)に設定することもできるようだ

参考：https://github.com/yarnpkg/yarn/issues/3282#issuecomment-429775852

```.yarnrc
# .yarnrc
--install.ignore-engines true
```
