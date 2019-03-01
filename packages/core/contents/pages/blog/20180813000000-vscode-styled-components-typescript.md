---
templateKey: blog-post
title: VSCode + styled-components + typescriptでうまく補完が効かないと思ったら
date: 2018-08-13T02:17:16.477Z
tags:
  - VSCode
  - TypeScript
  - styled-components
---
なんだか上記の組み合わせで補完がうまくいってないと思ったら、どうやらworkspaceのtypescriptを利用する場合、下記を入れる必要があるっぽい

https://github.com/Microsoft/typescript-styled-plugin

（ということが[Usage](https://github.com/styled-components/vscode-styled-components#usage)をよく読んだら書いてた）

これ自体はVSCodeのプラグインと言うよりtypescriptのプラグインにあたるらしい

ということでnpmでインストール

```
npm install --save-dev typescript-styled-plugin typescript
```

そしてtsconfig.jsonに下記を追記する

```ts
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "typescript-styled-plugin"
      }
    ]
  }
}
```
