---
templateKey: blog-post
title: React + Reduxのサンプルとして見るnetlify-cms
date: '2018-04-11T21:47:46+09:00'
tags:
  - javascript
  - redux
  - react
  - netlifycms
---
netlify-cmsはnetlifyが提供しているHeadless CMSのOSSだ。現在このブログでも利用している。

https://github.com/netlify/netlify-cms

仕組みとしてはGit・Githubをバックエンドのストレージとして読み書きが出来るAdmin画面だ。

先日pull reqを一つ出してみたのだが、その際このnetlify-cmsがReact + Reduxを利用したOSSとして見てもなかなか知見がありそうと思ったのでざざっと読んでみた

## コードリーディング

* testは jest + enzyme 
* pacakge.jsonのscriptはstylelintとか色々。
* パッケージ関連
    * react-router
        * react-router-reduxも使っている
    * rehypeとかremark・unifiedkはマークダウンのパースするやつら
    * テキストエディタはslate
        * IMEが微妙にバグあってちょいつら
    * reactは16系
        * Updateのログ見ると特に他でいじったのは無いっぽい
        * https://github.com/netlify/netlify-cms/commit/45ebc44c3b621d874e998ecb644687ae9b06414d
    * moment・immutableあり
    * reduxはthunkだけ
    * semaphore
        * セマフォ。久々聞いたワード
        * githubへのアクセスを制御するために使ってるっぽい
* ビルドはwebpack
    * webpack.base.js作っていて、あ、やっぱそれやりますよね、という感じ
    * momentのlocaleをIgnoreするのもそれやりますよねその２
    * モジュール解決に[babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)を使っている
        * [.babelrc](https://github.com/netlify/netlify-cms/blob/6b77aee21418a1c70a2307996e5cdf9fe88e3efd/.babelrc#L17-L32)に定義してる。
        * なるほどと思いつつ個人的にはやらないだろうなと思う手法（VSCodeでコードジャンプ出来ないし）
    * CSSはstyle-loader + css-loader系。
        * ネーミングルールで衝突を避けている感じ
* ディレクトリ構成
    * action / componentと分かれるいわゆるRails-style
    * 名前はだいたい見たらわかる感じ担っている
    * libは結構色々突っ込まれている印象
* reducer
    * 内部はがっつりImmutable利用
* action
    * thunkなのでfunction返すfunctionマシマシ
* middleware
    * thunkのみ
    * APIやlibなど別なところで非同期処理を任せている感じだった
* Components
    * Editor周りはまあなかなか分厚い
    * 型はPropTypesで守ってる感じ
    * refsもちょこちょこ使ってる
    * ContainerとPresentationを明確にわけてる感じはなさそう
* register
    * 外部からPreview画面やwidgetを登録できる`getPreviewTemplate`とかがあったがどうしてるんだろう？と思ったが`register`というファイルからやってるっぽい。

### 感想
* 比較的素直な構成だった。
* 結構生々しいコード
* 時間的余裕があるならリファクタされるべき所も結構あるコードとして読むのが妥当。完全に真似するべき所ばかりって感じではなさそう。
* このプロダクトが16から17系に上がる時にどう変えていくかとかはかなり今後参考になりそう。
* 「この挙動どうやってるんだろう？」と思った時に見るとよさそう
