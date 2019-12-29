---
templateKey: blog-post
title: react-three-fiberを使ってJSXを3Dプリントする
date: '2019-12-29T14:03:47.201Z'
tags:
  - react
  - react-three-fiber
  - three.js
  - stl
  - 3d-print
published: false
---

[react-three-fiber](https://github.com/react-spring/react-three-fiber)と[three.jsのExporter](https://github.com/mrdoob/three.js/blob/dev/examples/jsm/exporters/)を使ってJSXを3Dプリントする事に成功したのでそのPoCについて記述する

# どういう事か？

react-three-fiberはThree.jsをReact上で取り扱うためのライブラリになる。

このライブラリは特性上、`mesh`や`geometry`といったポリゴンを構成する部分をJSXとして記載できる。

```jsx
function Thing() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}
```

そして、3Dプリンタにかけるにはthree.jsのデータをSTLやOBJ,glTFあたりに変換する必要がある。
これらもthree.jsにSTLExporterやGLTFExporterなど各種フォーマットが取り揃えられている（一部Exporterはundocumentedなので不安定な可能性はある）

これらを組み合わせることで「JSXを3D印刷する」ということが叶いそうだ。

## Demo

