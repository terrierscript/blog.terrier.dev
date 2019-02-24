---
templateKey: blog-post
title: productionビルドするとstyled-componentsでChromeのdevtoolから値がいじれない話とその解決
date: '2019-02-24T07:57:10.697Z'
tags:
  - styled-components
  - JavaScript
  - devtool
published: true
---

先日発見したのだが、styled-componentsをproductionモードでビルドするとchromeのdevtool上からいじれないらしい。


# 結論（解決法）
devtoolから編集することを求めている場合はdevelopmentモードでビルドするか、`SC_DISABLE_SPEEDY`をつけてビルドしよう。

# 詳細（なぜそうなるのか？）

styled-componentsは下記のような形でビルドモードを切り分けている
https://github.com/styled-components/styled-components/blob/e1f75d04e51cdc5d8fd5e6bef9f40584f964b7c3/packages/styled-components/src/models/StyleTags.js#L400-L404

`makeBrowserTag`と`makeSpeedyTag`を読み解くのはなかなか難しいのだが微妙にCSSのルール挿入の仕方が変わっている。（この詳細まで調べたかったが、残念ながら読み解ききれてない）

そしてchromiumにこれに関連しそうな下記のようなバグが報告されている。
dynamicにinsertされたCSSが編集不可であるというものだ。一方、スレッドの流れを見ていると修正されない可能性もありそうだ。
https://bugs.chromium.org/p/chromium/issues/detail?id=387952

ちなみにこの値は`SC_DISABLE_SPEEDY`という変数をenvなどで与えることで変更することもできるようなので、productionモードは保ちつつこの挙動を変えたいという場合はこの値をビルド時にわたす手もありそうだ（これは未検証）
https://github.com/styled-components/styled-components/blob/c3eedbeb79621acd668e15ed2d63107528ed81c3/packages/styled-components/src/constants.js#L12-L14

当然、パフォーマンスは落ちることが予測されるので、例えばstaging環境用にのみこのビルドをするなどが良いだろう。