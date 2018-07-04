---
templateKey: blog-post
title: parcelでnew Workerするときは拡張子まで書く
date: '2018-07-02T22:28:30+09:00'
tags:
  - javascript
  - parcel
---
parcelはWebWorkerやservice workerが動くが、下記のようにしてしまうとうまくいかない


```js
new Worker("./worker")
```

これだと半端に解釈だけされて読み込みが失敗する
なのでこうする

```js
new Worker("./worker.js")
```
