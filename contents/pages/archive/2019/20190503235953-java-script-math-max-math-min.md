---
templateKey: blog-post
title: JavaScriptのMath.max/Math.minが可愛い挙動をしてくるので気をつける
date: '2019-05-03T14:59:53.103Z'
tags:
  - javascript
published: true
---

Math.min / Math.maxを使っていたら思ったよりハマりそうな挙動があったのでまとめておきたい。
今回書いてる事はMDNにも記載されている。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max

# Math.min / Math.maxは数値に変換出来ないものが一つでもあるとNaNを返す

まず、これらの関数は受け取る引数の中にNaNが混じっている場合NaNを返す。

```js
Math.min(1, 2, 3, NaN)
// => NaN
```

そして、受け取る引数はすべてNumberにキャストされる。

```js
Math.min(10, undefined)
// => NaN
Math.min(10, "foo")
// => NaN
```

Numberでキャストされて数値になるようなものはそれによって扱われる

```js
Math.min(10, null)
// => 0 ( NUmber(null)が0として評価される)
Math.min(10, true)
// => 1 ( Number(true)が1として評価される)
```

数値に変換された時にどうなるかは結構覚えゲーな所があるので、そもそもこのような値が入らないようにするのが望ましいだろう。

# Math.min / Math.maxは空の引数の場合Infinityを返す

ざっくり書くとこんな感じだ


```js
Math.min()
// => Infinity
Math.max()
// => -Infinity
```

minやmaxのような関数に何も入れなかった場合の挙動は各言語で変わるだろうが、JavaScriptはこうなるらしい。

なぜこうなるかは下記に有益な記事があったのでそちらに任せたい。

* https://qiita.com/KtheS/items/9811b88d6e7edbf32f36
* https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min

（reduce関数の初期値としてそれぞれ利用されていると捉えると個人的には腑に落ちた）

# どういう時に気をつけるのか？

「いやいや、普通そんな書き方しないでしょう」というのもあると思うので、そもそも自分がこの挙動を知るに至った経緯を書いてみる。

確かに普通に起きないが、例えばこんな具合にfilterと組み合わせて書きたい場合、ちょっと気をつけたほうが良い

```js
const items = [item1, item2]
  .map(Number) // ここでNaNが混じりうる

Math.min(...items)
// => NaNになりうる
```

```js
const items = [item1, item2]
  .filter(item => item > 0) // ここでitemsが空配列になりうる

Math.min(...items)
// => Infinityになりうる
```

ちなみに、上記コードで`Math.min(...items)`のように配列をspreadして渡しているがこれは普通に便利。
昔は`Math.min.apply(null, items)`のような形で利用していたものを非常に簡素に書けている。
