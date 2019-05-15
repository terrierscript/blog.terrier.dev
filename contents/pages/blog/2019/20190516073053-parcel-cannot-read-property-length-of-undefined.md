---
templateKey: blog-post
title: parcelでCannot read property 'length' of undefinedが出たら`.cache`ディレクトリを消す
date: '2019-05-15T22:30:53.403Z'
tags:
  - parcel
published: true
---

parcelをいじくっていた所、下記のようなエラーが出た

```
$ parcel src/index.html
Cannot read property 'length' of undefined
at lineCounter (~/app/node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/utils/lineCounter.js:3:30)
at JSPackager.writeModule (~/app/node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/packagers/JSPackager.js:127:60)
...
```

issueをあたってみるとほぼ同じissueを見つけた

https://github.com/parcel-bundler/parcel/issues/2957

深追いはしてないが、[`.cache`ディレクトリを消すと良い](https://github.com/parcel-bundler/parcel/issues/2957#issuecomment-486915492) というコメントがあった。

```
$ rm .cache
```

自分の手元でもこれで治った。深追いしてないがcacheが悪さするパターンもあるらしい