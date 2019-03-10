---
templateKey: blog-post
title: React HooksのuseStateでMap/Setを使うとき
date: '2019-03-10T05:45:35.540Z'
tags:
  - javascript
  - react
  - hooks
published: false
---
（あとでちゃんと検証する）
`useState`でMapを扱おうとした時に詰まったのでメモ

結果としてはこんなコード

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
