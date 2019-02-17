---
templateKey: blog-post
title: react-springで拍手ボタンにアニメーションをつけた
date: 2019-02-17T20:45:04.240Z
tags:
  - React Spring
  - Javascript
  - React
---
[拍手ボタン](https://snippet.terrierscript.com/blog/20190216000000-netlify-functions-slack-clap/)をつけたのでアニメーションをつけてみた。


ボタンそのものはPopmotionで行ったが、ちょっとこの動きをさせるのは厳しそうで[react-spring](https://github.com/react-spring/react-spring)を使った
react-springのサンプルコードはrefsを使っていたりchildren as functionがあったりで色々と複雑でちょっと読み取りづらくこれはこれで苦労したのでメモをまとめておく

# 全体の構造

コードだけだと分かりづらい気がするので、全体のざっくり構造を記述する

* ふわっと浮き上がるものをアニメーションとしたい
* `useState`で一つ一つの浮き上がる要素を擬似的に管理する
    * このStateに対応する要素がDOMとなりアニメーションするイメージ
* 上記AnimationのStateは`Context`で受け渡して、イベントする位置とアニメーションする部分は分離しても使えるようにする
* `useTransition`にアニメーションする要素を渡す
* アニメーション終了の`onRest`でアニメーションを管理対象から消す（DOMとしても消える）

# コード

AnimationとContextとラップする部分をこんな感じで書く。

GITHUB-EMBED https://github.com/terrierscript/snippet.terrierscript.com/blob/8ec039bf2a0dda2e81b4dc15e39954de90fadbd8/src/app/article/clap/Animate.tsx#L10-L34 typescript GITHUB-EMBED

そして実際のアニメーション部分はこんな具合にする

GITHUB-EMBED https://github.com/terrierscript/snippet.terrierscript.com/blob/8ec039bf2a0dda2e81b4dc15e39954de90fadbd8/src/app/article/clap/Animate.tsx#L10-L34 typescript GITHUB-EMBED

アニメーションの利用側はこういう具合にする。

GITHUB-EMBED https://github.com/terrierscript/snippet.terrierscript.com/blob/8ec039bf2a0dda2e81b4dc15e39954de90fadbd8/src/app/article/clap/ClapButton.tsx L46-L84 typescript GITHUB-EMBED

Rxでごちゃごちゃしてしまっているが、もしRxがなければこんな事をやっているだけになる

```tsx

    <Animation>
      <Button onClick={onClick}>{children}</Button>
    </Animation>