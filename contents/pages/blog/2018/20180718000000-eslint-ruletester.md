---
templateKey: blog-post
title: ESLintのRuleTester使うときのボイラープレート
date: '2018-07-18T09:20:17+09:00'
tags:
  - ESLint 
  - javascript
---
ESLintのRuleTester使うときのボイラープレートはまったのでメモ

```js
// ルール呼び出し
const rule = require("../../../lib/rules/some-rule")
const RuleTester = require("eslint").RuleTester

// 特殊なルールなら設定する
const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
  }
})

tester.run("some-test-name"", rule, {
  valid: [
    {
      code: `const some = "valid-code"`
    }
  ],
  invalid: [
    {
      code: `const some = "invalid-code"`
      errors: [ // errorsは必須
        {
          message: "error-message"
        }
      ]
    }
  ]
})
```

invalidにerrorsが無いとそもそもコードまでたどり着いてくれずめっちゃハマった
