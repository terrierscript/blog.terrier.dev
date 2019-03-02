---
templateKey: blog-post
title: >-
  keras.jsでError: [Model] Model configuration does not contain any
  layers.というエラーが出たら
date: '2018-06-06T10:58:37+09:00'
tags:
  - python
  - keras.js
  - javascript
---
おもむろにkeras.jsにpythonで`model.save`したデータをぶっこんでもこんなエラーが出る

```
Error: [Model] Model configuration does not contain any layers.
```

ということでドキュメントを読み直すとこんなものが

https://transcranial.github.io/keras-js-docs/conversion/

つまり内部に入ってる `encoder.py` を使ってコンバートしないといけない

```
$ python3 ./node_modules/keras-js/python/encoder.py model.bin"
```
