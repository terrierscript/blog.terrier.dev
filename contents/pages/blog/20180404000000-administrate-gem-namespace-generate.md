---
templateKey: blog-post
title: administrate gemでnamespace付きでgenerateする
date: '2018-04-04T10:23:12+09:00'
tags:
  - ruby
  - administrate
  - rails
---
administrateで複数のパスを利用したい場合、namspaceによって切り分けたい。

ドキュメントに明記されてないが、こんな感じで引数オプションが存在している

```sh
$ rails generate administrate:install --namespace manager
$ rails generate administrate:dashboard --namespace manager
```

[administrate/pull/956](https://github.com/thoughtbot/administrate/pull/956)
