---
templateKey: blog-post
title: TypeScriptで無理矢理babelを通してoptional chainingを使わせる
date: 2018-12-24T00:00:00.000Z
tags:
  - Babel
  - TypeScript
  - JavaScript
---

とりあえずやれたのでメモ。実用的かどうかは別問題・・・

# babelrc
まずはbabelrcの設定

```.babelrc
{
  "presets": ["@babel/preset-typescript"],
  "plugins": [
    "@babel/plugin-syntax-optional-chaining",
    ["@babel/plugin-proposal-optional-chaining", { "loose": false }]
  ]
}
```

# tsconfig
次にtsconfig.jsonを設定

```json
{
  "compilerOptions": {
    "allowJs": false,
    "strict": false,
  },
}
```

allowJsをtrueに指定する。excludeでこの機能を利用するファイルだけ無効にしたかったのだが、allowJSの方が優先されてコケてしまうようなので全体をdisableにするしかなさげ。
strictもfalseにした（おそらくnoImplicitAnyあたりだけoffにすればいいとは思う）

ちなみにtscを走らせずにbabelを通すだけならallowJSでも可能。

# コードを書く

optional-chain.js
```js

export const getFooBaz = (obj) => {
  return obj?.foo?.baz
}
```

利用側がこんな感じ

```ts
import { getFooBaz } from "./optional-chain.js"

console.log("valid",getFooBaz({foo: {baz: "this is foo baz"}}))
console.log("invalud", getFooBaz({foo: {bazz: "this is foo baz"}}))
console.log("empty", getFooBaz({}))

/** 出力結果
valid this is foo baz
invalud undefined
empty undefined
*/
```


# 残った課題

* VSCode上だとoptional chainingの構文が相変わらずエラーになる。`@ts-nocheck`や`@ts-ignore`を仕掛けてもうまくいかない模様。ここは未検証。
* そもそもこれできたけど使い勝手的にどうかというと非常に微妙なところ。TSのコードと切り離して管理しないといけないのとかはそこそこ面倒でもある。
	* ほぼオールTSなプロジェクトでallowJSが不要な場合であればそこそこ役立つかもしれない
  * reselectとかoptional chainingが相性が良くてtsとも切り離せる部分なら良いかも（とはいえ型定義ファイルを別途用意するのも面倒だよなーという気持ちも無くはない）