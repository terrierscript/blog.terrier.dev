---
templateKey: blog-post
title: netlifyでDomainを変えるときはEdit domainではなくAdd custom domainから追加する
date: '2018-04-05T12:45:15+09:00'
tags:
  - netlify
---
このサイトのドメインを　blog.terrierscript.com から　snippets.terrierscript.com　変えた。

この際最初「Edit custom domain」から実行したが、そうすると SSL/TLS certificateとして設定している部分がズレてしまう。

ちょっと困ったが、「Remove domain」して「Add custom domain」から再追加したら正しく設定された
