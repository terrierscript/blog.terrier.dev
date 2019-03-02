---
templateKey: blog-post
title: Vue.jsのtemplate functionalでcomponentsが認識されないバグがあるのでその対処をする
date: '2018-04-09T16:55:11+09:00'
tags:
  - vue.js
  - javascript
---

Vue.jsには `<template functional>` というReactで言うところのStateless Functional Componentに近いものがある。

が、現状 `components`を認識してくれないバグがある

https://github.com/vuejs/vue/issues/7492

こんなのが駄目なパターン。

```html
<template functional>
  <div>
    <some-children />
  </div>
</template>

<script>
import SomeChildren from "./SomeChildren.vue"
export default {
  components: {
    SomeChildren
  }
}
</script>
```

## 暫定的回避

### その1

とりあえず自分が見つけたやり方。`Vue.component`で登録してしまう
```js
import Vue from "vue"
import SomeChildren from "./SomeChildren"
Vue.component("some-children", SomeChildren);

export default {}

```

### その2
`<component :is>`を使う方法が提案されている

https://github.com/vuejs/vue/issues/7492#issuecomment-369507267

```html
<template functional>
  <div>
    <component :is="props.components.SomeChildren"></component>
  </div>
</template>

<script>
import SomeChildren from "./SomeChildren.vue";
export default {
  props: {
    components: {
      type: Object,
      default() {
        return {
          SomeChildren
        };
      }
    }
  }
};
</script>
```
