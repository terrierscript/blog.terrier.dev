---
templateKey: blog-post
title: ReactでRender Propsを使って、ボタンが押されたときだけ値を子に流すやつ
date: '2018-07-05T08:00:15+09:00'
tags:
  - React
  - TypeScript
  - JavaScript
---
重い処理を扱うときの話。
Formなどで入力したのをリアルタイムに流さず、ユーザーがボタンを押したタイミングで子に値を流したい場合などでFunction as Childrenを使う

```ts
import * as React from "react"
import { Component, ReactNode } from "react"

type Props<T> = { item: T; children: (item: T) => ReactNode }
type State<T> = { item: T }
export class Submitter<T> extends Component<Props<T>, State<T>> {
  constructor(props) {
    super(props)
    this.state = { item: this.props.item }
  }
  handleClick = () => {
    this.setState({ item: this.props.item })
  }
  // update only state update
  shouldComponentUpdate(_, nextState) {
    const stateUpdated = this.state !== nextState
    return stateUpdated
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Update</button>
        {this.props.children(this.state.item)}
      </div>
    )
  }
}
```

```tsx
<Submitter item={props.variables}>{(item) => {
  ...
}<Submitter>
```
