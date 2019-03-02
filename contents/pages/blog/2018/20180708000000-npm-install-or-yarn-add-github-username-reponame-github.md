---
templateKey: blog-post
title: 'npm install ( or yarn add ) github:username/reponame でgithubからイントールできる'
date: '2018-07-08T17:15:59+09:00'
tags:
  - npm
  - yarn
  - javascript
---

githubからmaster持ってきたかったり、ちょろっとしたの使いたかったした場合

```
npm install github:username/repo
```
でインストールできる


ハッシュとか指定したいなら

```
npm instal github:username/repo#hash
```
でOK。

なんとなく罪悪感も感じるが`github:`を省略してもgithubということになるらしい

```
npm install githubname/repo
```


* [install | npm Documentation](https://docs.npmjs.com/cli/install)

yarnでもできる

```
yarn add github:username/repo#hash
```

自前のパッケージの場合、ちゃんとpackage.jsonのバージョンを上げないと最新が反映されないこととかあるので注意
