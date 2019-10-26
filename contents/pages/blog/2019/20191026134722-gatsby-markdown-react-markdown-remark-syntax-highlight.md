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
  * gatsby-nodeのlimit調整をすれば良いが、それはそれで困るケースがたまにアリ