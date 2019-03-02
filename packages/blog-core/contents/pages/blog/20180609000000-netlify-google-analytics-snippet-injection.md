---
templateKey: blog-post
title: netlifyにGoogle Analyticsなど入れたいときはSnippet Injectionが使える
date: '2018-06-09T15:02:22+09:00'
tags:
  - netlify
---
netlify（というかSPAのサイト）でGoogle Analyticsのコード埋め込むのはwebpackごにょごにょするとかreact-helmet使うとかなんだか面倒だった。

だが今netlifyであればSnippet Injectionという機能がありこれがゲロ便利だった。

[Injecting JavaScript Snippets](https://www.netlify.com/docs/inject-analytics-snippets/?_ga=2.227878107.718766052.1528521346-306147638.1519308287)

Settings -> Build & Deploy -> Post Processingの項目にある。

挿入箇所はHEADとBODYから選択でき、一度作ると編集は出来ないので追加して削除ということをあるimmutableな感じの作りになっている。
