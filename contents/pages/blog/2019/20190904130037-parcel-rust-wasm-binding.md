---
templateKey: blog-post
title: "parcel + rustでwasm_bindingを使うとき （TypeError: WebAssembly.instantiate(): Imports argument must be present and must be an objectの解決"
date: '2019-09-04T04:00:37.432Z'
tags:
  - parcel
  - rust
  - wasm
published: false
---

parcel + rustで基礎的な部分は[公式ドキュメント](https://parceljs.org/rust.html)でも十分だったがwasm-bindgenなどを噛ませようとすると色々と工夫が必要だった。

参考
* https://github.com/rustwasm/wasm-bindgen/issues/182
* https://github.com/rustwasm/rust-parcel-template

おそらくpacel2になったら解決する可能性などはある

# 手順

## 準備

### cargo install wasm-pack
ひとまずrust-parcel-templateに習いやっておく

```
cargo install wasm-pack
```

### cargoの作成

```
cargo new wasm
```

今回は`wasm`という名前で作成

Cargo.tomlにwasm-bindgen追加

```Cargo.toml
[dependencies]
wasm-bindgen = "^0.2.50"

```

### src/lib.rs

こんな感じで作成。

```rs
extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn main() -> String {
    return "Hello, world!!".to_string();
}
```

JSの呼び出し側はこんな具合

```js
const start = async () => {
  const { main } = await import("../wasm/src/lib.rs")
  
  console.log(main())
  // console.log(add(1, 2))
}
```


で、このあたりで下記のようなエラーにぶつかる

```
Uncaught (in promise) TypeError: WebAssembly.instantiate(): Imports argument must be present and must be an object 
```

## 解決策
### parcel-plugin-wasm.rsのインストール


```
npm install parcel-plugin-wasm.rs
```

そしてこれは深く読んでないが、呼び出し元を`Cargo.toml`にする必要があった。

```js
const start = async () => {
  const { main } = await import("../wasm/Cargo.toml")
  // もと -> const { main } = await import("../wasm/src/lib.rs")
  
  console.log(main())
  // console.log(add(1, 2))
}
```

## 参考2
* 手元では下記のようなdiffになった
  * https://github.com/terrierscript/example-grid-radius/commit/b6093e4e9a0d77fe8ff24d4bb8257074ee67b967