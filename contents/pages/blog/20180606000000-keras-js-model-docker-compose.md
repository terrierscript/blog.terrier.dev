---
templateKey: blog-post
title: Keras.js用のmodel変換をdocker-composeで怠ける
date: '2018-06-06T11:53:49+09:00'
tags:
  - python
  - docker
  - keras
---

model.binとしてmodelは保存してる前提で。

```yml
version: '3'
services:
  python:
    image: python:3
    volumes:
      - ./:/tmp/volume/
    command: > 
      sh -c
      "pip3 install protobuf numpy h5py &&
      cd /tmp/volume &&
      python3 ./node_modules/keras-js/python/encoder.py model.bin"
```

Dockerfile作るのすら面倒あのでcommandで全部処理

```
$ docker-compose up
```
