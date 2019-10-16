---
templateKey: blog-post
title: parcel2が来る前に不要なmainフィールドはpackage.jsonから消しておいた方が良さそう
date: '2019-10-16T08:48:43.501Z'
tags:
  - parcel
  - javascript
published: true
---

もうすぐ出そうなparcelの2系をちょっと先行で試してみたところ、下記のようなエラーが出た

```
$ yarn parcel build src/index.html
Destination name index.js extension does not match bundle type "html"`
```

下記のissueを見ると、どうも`main`フィールドを見ているからということがわかった

https://github.com/parcel-bundler/parcel/issues/3500

が、しかし、`yarn init -y`などでファイル生成をすると下記のように`main`フィールドには`index.js`が入ることが多い

```js
{
  "name": "some-package",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

おそらく気にせず上記のようになっていることは多いはずで、気をつける必要がありそうだ。