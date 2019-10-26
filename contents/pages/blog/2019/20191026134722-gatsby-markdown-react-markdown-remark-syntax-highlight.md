---
templateKey: blog-post
title: gatsbyでmarkdownをコンバートしているところをreact-markdown + remark-syntax-highlightに置き換える
date: '2019-10-26T04:47:22.306Z'
tags:
  - gatsby
  - react-markdown
  - react-sytnax-highlight
  - remark
  - markdown
published: false
---

Gatsbyでmarkdownを利用するなら`gatsby-transformer-remark`を利用するのが一般的だが、ちょっと下記のような問題が出てきた

* 200程度を越えたところからローカルでのビルドが遅くなってきた
  * 基本的にはgatsby-nodeのlimit調整をすれば良い。ただページネーションいじりたいときとか困りがち。
* rehypeで独自拡張してた部分の問題
  * rehype-reactバージョンアップで死んだケースがあった
  * この部分がテスト出来てなくてごちゃつきがち

そこで今回は`react-markdown`と`react-sytnax-highlight`を使って置き換えてみることにした。

## 基礎部分

### Component作成

下記ブログをほとんど参考にしている。
https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada
