---
templateKey: blog-post
title: Netlify FunctionsだけでSlackに通知するClapボタンをつけた
date: 2019-02-16T12:53:04.240Z
tags:
  - Netlify
  - Javascript
  - React
---
Gatsbyでこのブログを作ってみたがあまりにも書く気にならないのでちょっとでもモチベーションをあげるためにclapボタンをつけた。

多分左下に出ている（何らかの負荷があったら消すかも）

めちゃくちゃ雑な感じで、netlify functionsが押されたらslackに通知されるそれだけみたいな状態

https://github.com/terrierscript/snippet.terrierscript.com/blob/master/functions/clap.js

ボタンのアニメーションはpopmotionを使った。すごく楽。本当はreact-springとかいい感じにしたかったけど諦めた

https://github.com/terrierscript/snippet.terrierscript.com/blob/e1b9167bfaaeb0f90c09189867a0198fa680583b/src/app/article/ClapButton.tsx#L45-L57

あと当然通信まわりはHooks。あんまりhooksの旨味は無いけど。

https://github.com/terrierscript/snippet.terrierscript.com/blob/956f40987bd65e7716f15372195128a6db7ca950/src/app/article/ClapButton.tsx#L30-L42

モバイル対応とか面倒なものは気にしないことにした

### Q. netlify上限行くのでは？
上限はあるが、とはいえ12万リクエストで100時間制限なんてまず行かないと見込んでるので心配してない

### Q. Slackのエンドポイントはどうしてる？
なんとnetlifyにはEnvironmentを設定できる。良い。
ローカル開発時は下記みたいな感じでやっている。`dotenv-cli`を使うと良い

```
yarn dotenv netlify-lambda serve functions
```

### Q. カウント取れなくない？
数など重要ではない。一つ一つの拍手に感謝を感じるべきであろう。

（真面目に話すと単純にカウント数をFirebaseあたりにぶっこむのは考えつつそこまでやるもんでもないなーという感じがあった。Google Analyticsにイベント飛ばすとかはアリかも？）
