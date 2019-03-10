---
templateKey: blog-post
title: React HooksのuseStateでMap/Setを使うときはobjectで囲まないと更新されない
date: '2019-03-10T05:45:35.540Z'
tags:
  - javascript
  - react
  - hooks
---

`useState`でMapを扱おうとした時に詰まったのでメモ

主にこの辺を見た
https://stackoverflow.com/questions/49532382/correct-modification-of-es6-map-through-setstate

Mapをそのままstateに突っ込むとmutableになってしまうので`{map: MapObject}`のような形で突っ込むようにすると良さそう。

結果としてはこんなコードになる

```js

export const useMapItem = someArray => {
  const [state, setMap] = useState(() => {

    // [key, value]のtupleでMapを初期化出来るのも地味に初めて知った。へー
    const seed = someArray.map(item => [item.someKey, item])
    return {
      map: new Map(seed)
    }
  })

  useEffect(() => {
    someAsyncFunction().then(newArray => {
      setMap(({ map: prevMap }) => {
        // 更新処理
        newArray.map(item => {
          if (prevMap.has(item.someKey)) {
            return
          }
          prevMap.set(item.someKey, item)
        })
        // 新しいmapで返す
        return {
          map: prevMap
        }
      })
    })
  }, [])
  
  // Array.fromでArrayに変換して返せる。へー。
  return Array.from(state.map.values())
}

```