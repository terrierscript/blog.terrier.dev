---
templateKey: blog-post
title: bootstrap4でbreakpointを減らす
date: '2018-04-04T18:08:46+09:00'
tags:
  - scss
  - bootstrap4
---
Bootstrap4は標準で4つのbreakpointが存在している (xs, sm, md, lg, xl)
ただこんなに多くbreakpoint管理したくなくて、だいたい２つぐらいで十分だったりする。

[grid-tiers](https://getbootstrap.com/docs/4.0/layout/grid/#grid-tiers) の項目を見るとこの値をカスタマイズする手法が書いてあるんのでこれを利用してbreakpointを統合してしまうと潰すことが出来そう

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 576px,
  lg: 992px,
  xl: 992px
);

$container-max-widths: (
  sm: 540px,
  md: 540px,
  lg: 960px,
  xl: 960px
);

@import "bootstrap";
```
