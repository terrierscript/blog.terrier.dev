---
templateKey: blog-post
title: JavaScriptのn進数変換について調べて見つけた10..toSting(3)という記法について
date: '2019-05-06T03:26:20.576Z'
tags:
  - javascript
---

JavaScriptの`Number.prototype.toString`は引数にradixを持っており、n進数変換がサクッとできる

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

```js
let num = 10
num.toString(4)
// => "22"
```

で、これについて探っていた所、[こんなやり方](http://nanto.asablo.jp/blog/2007/08/17/1731754)があることに気付いた

```js
10..toString(4)
// => "22"
```

はて。`10..`とは珍妙な。これはなにかと調べる。

# ASTにかけてみる

AST Explorerで見てみる。

https://astexplorer.net/#/gist/2c4b10278940ebe6717e57845083e5b4/5b00a08e79475b0c67d7bd7c8293efff97f3b70a

するとこの部分に注目することができそうだ。

```js
"callee": {
  "type": "MemberExpression",
  "object": {
    "type": "Literal",
    "value": 10, // 10の値
    "raw": "10."　// 10. となっている
  },
  "property": {
    "type": "Identifier",
    "name": "toString" // これがtoStringになっている
  },
}
```

確かにJavaScriptは`10.0`を`10.`と省略することができる。ちなみに、この逆で`0.1`で`.1`と省略する事もできる
MDNだと[浮動小数点数リテラル](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Grammar_and_types#Floating-point_literals)を見るとうっすら書いてある（が、ちゃんとこれについて書いてるのは見つけられなかった）

つまりこれは

```js
10.0.toString(4)
```

の省略記法ということだ。すっきりした。

逆に`.`を一つにしてしまうと、小数点として扱われてしまうらしく

```js
10.toString(4)
```

という記法は出来ない。

`()`をつければ正常に構文として扱えるので、下記が書き方一番無難であろう

```js
(10).toString(4)
```