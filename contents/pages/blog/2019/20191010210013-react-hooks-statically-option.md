---
templateKey: blog-post
title: react hooksで初回に設定されたら変えさせないテクニック
date: '2019-10-10T12:00:13.127Z'
tags:
  - react
  - react-hooks
published: true
---

[react-use-websocket](https://github.com/robtaussig/react-use-websocket)の中身を読んでいたら、下記のような面白い使い方を見つけた

https://github.com/robtaussig/react-use-websocket/blob/ffe13ffb7a0fc36a8607d259a6b58270ec19f7e5/src/lib/use-websocket.ts#L71-L75

```js
  export const useWebSocket = (
    url: string,
    options: Options = DEFAULT_OPTIONS,
  ) => {
  // ...
  // ...
  useEffect(() => {
    if (staticOptionsCheck.current) throw new Error('The options object you pass must be static');

    staticOptionsCheck.current = true;
  }, [options]);
  // ...
  // ...

```

これは何をしているかというと、初回で設定された`option`をあとから変更させたくない場合に使えるものなので覚えておきたいテクニックだ。

例えばhooksの内部で何かclassや常に変化してしまうなobjectを抱えたい場合（まさにwebsocketのclientなどは良い例）などに使える。

## 簡単な解説

ここから若干上記のコードは複雑なのでちょっと簡単にして何が起きるかを説明してみる

例えばこんなふうにcounterを考える

```js
export const useCounterWithStaticSetting = (value) => {
  const [count, setCount] = useState(0)
  const increment = () => setCount((count) => count + value)

  return [count, increment]
}

```

この場合だとCounterは値を受けて変更したり出来る。

```jsx
const Counter = ({ value }) => {
  const [count, increment] = useCounterWithStaticSetting(value)
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => increment()}>increment</button>
      </div>
    </div>
  )
}

const App = () => {
  const [val, setVal] = useState(10)
  return (
    <div>
      <Counter value={val} />
      <input value={val} onChange={(e) => setVal(e.target.value)} />
    </div>
  )
}

```

ただ例えばここから、「Counterの値は初期化のときだけ変更可能にしたいがその後は変更させたくない」ということを考える。
valueを受けてその値でincrementするようなcounterだ。

「例えばこのstaticな値は一度だけ設定させたい」というときに、今回のテクニックが使える。

こんなふうになる。

処理上、解説が逆向きになってるのはご了承いただきたい

```js

export const useCounterWithStaticSetting = (staticValue) => {
  const staticCheck = useRef(false) // 1. チェック用のrefをbooleanで生成
  const [count, setCount] = useState(0)
  const increment = () => setCount((count) => count + staticValue)

  useEffect(() => {
    // 4. current=trueのとき＝二回目にeffectが呼ばれたとき　にはerrorを発火する
    if (staticCheck.current)
      throw new Error("The staticValue you pass must be static")

    // 3. staticValueが初回に変化すると、refsがtrueに変更される
    staticCheck.current = true
  // 2. staticValueが変化したときだけ発火する
  }, [staticValue])
  return [count, increment]
}
```

これで例えば先程の`<App>`から値を変えるとエラーになるようになる。


```js

const InvalidApp = () => {
  const [val, setVal] = useState(10)
  return (
    <div>
      <Counter value={val} />
      {/* ↓input valueが変化するとエラーが出る */}
      <input value={val} onChange={(e) => setVal(e.target.value)} />
    </div>
  )
}

// 複数回呼び出されること自体はOK
const ValidApp = () => {
  return (
    <div>
      <Counter value={3} />
      <Counter value={10} />
    </div>
  )
}

```

## 別解

途中で思いついたが、仮に「一度だけ設定したい」であれば下記のようなHigher order hooksな方向性もありそうだ（ただし未検証）

```js
export const generateStaticCounter = (staticValue) => {
  return function useCounter() {
    const [count, setCount] = useState(0)
    const increment = () => setCount((count) => count + staticValue)

    return [count, increment]
  }
}
```
