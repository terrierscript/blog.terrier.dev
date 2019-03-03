---
templateKey: blog-post
title: Gatsbyで同じファイルにStaticQueryを書くとエラーが起きる問題
date: '2019-03-03T12:30:40.084Z'
tags:
  - gatsby
  - javascript
  - graphql
---

Gatsbyの[`<StaticQuery>`や`useStaticQuery](https://www.gatsbyjs.org/docs/static-query/)はクエリを分離出来てGatsbyのGraphQL利用が不透明な部分を解消してくれる良いものだ。

（ホントは全部これで置き換えたいのだが、Staticというだけあって変数を受け取ることが出来ないらしい。。。悲しい・・・）

このBlogでも[useTagQuery](https://github.com/terrierscript/terrier.dev/blob/1f6bd77a994a87ea9b9d759cd3a3e82dc83c18a3/src/hooks/useTagQuery.ts#L3-L28)という形で使ってみた。

しかしここで落とし穴がある。
同一ファイルに複数のQueryを書くと下記のようなエラーが出るのだ

```
Multiple "root" queries found in file: "A" and "B". Only the first ("A") will be registered.
```

これは下記のIssueなどでバグとして報告されている。しばらくは1ファイル1`graphql`で我慢するしかなさそうだ
https://github.com/gatsbyjs/gatsby/issues/9580