---
templateKey: blog-post
title: netlify devでparcelがランダムポートにならないように騙す
date: '2019-05-19T09:02:34.941Z'
tags:
  - netlify
  - parcel
published: true
---

netlify devは、ローカル環境でproxyやfunctionをローカルに立ててくれる便利なシロモノだ。

https://www.netlify.com/products/dev/

これの中身がどうなっているかというと、こちらのASCIIの図がわかりやすいだろう

https://github.com/netlify/netlify-dev-plugin/blob/master/README.md#what-is-netlify-dev

デフォルトでは、自前のプロダクトが5555である場合、それをnetlify devがproxyして、8888で通せるようになっている。

そして、それぞれプロダクトのポートは [detectors](https://github.com/netlify/netlify-dev-plugin/tree/master/src/detectors)という部分で内部で自動決定されている。

ここにヒットしなかった場合、ポートが8888ではなく起動のたびにランダムになってしまい大変面倒くさい。

# parcelでの問題

現状、parcelは上記detectorが無い。
更にparcelの場合、`parcel serve エントリポイントのファイル` という指定をするため、上記detecotorsで決定しきれない（と今の所思ってPRを断念した）

かといってこのままランダムポートも耐えられないので、一旦下記のように乗り切った
試してないがwebpackもdetectorが無いので、同様の解法が使えるかも知れない

## 解法: next.jsプロジェクトということにして騙す

仕組み上、netlify-devはdetectorを見ているだけなので、邪道だが他のプロダクトだと思わせて騙してしまえばとりあえずワークアラウンドになる。
別にnextでなくても良いのだが、一番シンプルそうなnextを選んだ

まず`package.json`に[nextが含まれている事](https://github.com/netlify/netlify-dev-plugin/blob/master/src/detectors/next.js#L9-L11)があるのでこれを入れる

```
$ npm i next
```

次に`package.json`。こちらはdevとしてparcelの起動を設定しておく。portはnextにあわせて3000に割り振る

```json
{
  "scripts": {
    "dev": "parcel serve --port 3000 src/index.html",
    "start": "dotenv netlify dev"
  }
}
```

これであとは下記で parcel -> (3000) -> netlify-dev -> (8888) とつなげてくれる。

ポート固定出来ないの？という話は[issue#173](https://github.com/netlify/netlify-dev-plugin/issues/173)では上がっているので、そのうちなんとかなるかもしれない
