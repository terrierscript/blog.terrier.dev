---
templateKey: blog-post
title: Type 'Element' is not assignable to type 'StatelessComponent<Props>'. が出た時のメモ
date: '2018-04-09T18:21:55+09:00'
tags:
  - TypeScript
  - React
---
TypeScriptで久々にSFCをいじくってたらハマったのでメモ

```
Type 'Element' is not assignable to type 'StatelessComponent<Props>'.
```

下記のように返り値にSFCを指定していたためエラーになっていた

```ts
const Foo = (props: Props) : SFC<Props> => { 
```

正しくはこう

```ts
const Foo: SFC<Props> = (props: Props) => {
```
