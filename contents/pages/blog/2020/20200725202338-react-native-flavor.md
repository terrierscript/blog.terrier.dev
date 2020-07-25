---
templateKey: blog-post
title: react-nativeでflavorっぽいことをする
date: '2020-07-25T11:23:38.586Z'
tags:
  - react
  - react-native
published: false
---

# Flavorっぽいことをする

stagingのときに別bundleIdentifierにしたりアイコンにstaging帯つけたいなーってなったときにやったやつ

### 方針

- app.jsonを書き換えればflaveorっぽいことが出来そう
- やり方として、flavoer部分をオーバーライドするように差分を書いておく
- `deepmerge`してstaging用のapp.jsonを生成する
- ↑このコードをbuild前に発火するように `prebuild`として仕込む

### コード

`app-staging-override.json`

例えばbundlerIdを変更したいならこんなの

```jsx
{
  "expo": {
		"slug":"my-application-staging"
    "ios": {
			"bundleIdentifier": "com.foo.baz.staging"
    }
  }
}
```

`bin/generate-staging-app-json.js`

```jsx
const merge = require("deepmerge")
const baseAppJson = require("../app.json")
const override = require("../app-staging-override.json")
const merged = merge.all([baseAppJson, override])
console.log(JSON.stringify(merged, null, 2))
```

package.jsonはこんな具合

```jsx
"scripts:"{
  "build:ios:production": "expo build:ios --type archive --release-channel=YOUR_PRODUCTION_CHANNEL"
  // ↓stagingのときはprebuildをかける
  "prebuild:ios:staging": "node bin/generate-staging-app-json.js > app.staging.generated.json",
  "build:ios:staging": "expo build:ios --config app.staging.generated.json --type archive --release-channel=YOUR_STAGING_CHANNEL "
}
```

