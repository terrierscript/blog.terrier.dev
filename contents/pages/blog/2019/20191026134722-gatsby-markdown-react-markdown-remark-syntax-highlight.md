---
templateKey: blog-post
title: gatsbyでmarkdownをコンバートしているところをreact-markdown + remark-syntax-highlightに置き換える
date: '2019-10-26T04:47:22.306Z'
tags:
  - gatsby
  - react-markdown
  - react-sytnax-highlight
  - remark
  - markdown
published: true
---

Gatsbyでmarkdownを利用するなら`gatsby-transformer-remark`を利用するのが一般的だが、ちょっと下記のような問題が出てきた

* 200程度を越えたところからローカルでのビルドが遅くなってきた
  * 基本的にはgatsby-nodeのlimit調整をすれば良い。ただページネーションいじりたいときとか困りがち。
* rehypeで独自拡張してた部分の問題
  * rehype-reactバージョンアップで死んだケースがあった
  * この部分がテスト出来てなくてごちゃつきがち
* Markdown内部のマークアップ
  * 例えば[inlineCodeのマークアップがCSS魔術になってしまう](https://github.com/terrierscript/blog.terrier.dev/blob/783252ca1c92fc73bd96a1bc03c8abb271cfcfa4/app/meta/Meta.tsx#L21-L28)など

今回は[`react-markdown`](https://github.com/rexxars/react-markdown#parsing-html)と[`react-sytnax-highlight`](https://github.com/conorhastings/react-syntax-highlighter)を使って置き換えた。


#### どうなったか

効果だけ先に書いておくと下記のような形になった

* devのビルドは100ページのlimitの場合20s -> 4s程度に縮んだ。うれしい
* snapshotによるテストが可能になった。うれしい
* Markdown中のコンポーネントを差し替えたり装飾するのにCSS in JSが使えるようになった。うれしい
* 全体のビルドは10秒程度伸びた。かなしい
* gatsby-transformer-remarkはfrontmatterのために残す必要があるが、それ以外のremark関連プラグインは捨てた
  * gatsby-transformer-frontmatterみたいなのがほしい
* このブログは画像を別なところとかに置いているので問題ないが、よく考えたら普通に`gatsby-remark-image`とか使えなくなって詰みそう
* どっかバグってる可能性ありそう

## 基礎部分

### GraphQLのクエリ変更
`rawMarkdownBody`を追加して、これを引き継いでいく

```graphql
fragment Post on MarkdownRemark {
  excerpt(pruneLength: 400)
  id
  rawMarkdownBody # 追加
  # html	# 削除
  # htmlAst # 削除　
  fields {
    slug
  }
  fileAbsolutePath
  frontmatter {
    title
    templateKey
    date(formatString: "YYYY/MM/DD")
    tags
  }
}

```

```tsx
<BlogPostTemplate
    tags={
      post.frontmatter.tags // description={post.frontmatter.description}
    }
    markdown={post.rawMarkdownBody}
  // ...
```
### Component作成

https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada
上記ブログをほとんど参考にしているが、コンポーネントについてはこれだけで済む

```tsx
import React, { FC } from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow"

export const CodeBlock = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language} style={style}>
      {value}
    </SyntaxHighlighter>
  )
}

export const RawMarkdown: FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <ReactMarkdown
      source={markdown}
      renderers={{ code: CodeBlock }}
    />
  )
}
```

### web-componentsのための拡張

Web Componentに対応するために、下記のように書き換えた
[with-html](https://github.com/rexxars/react-markdown#parsing-html) を使っている

```tsx
// import ReactMarkdown from "react-markdown"
import ReactMarkdown from "react-markdown/with-html" 

export const RawMarkdown: FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <ReactMarkdown
      source={markdown}
      escapeHtml={false} // 追加
      renderers={{ code: CodeBlock }}
    />
```

with-htmlでなくても動きはするが、`dangerouseHtml`を利用される形になる。

### nl2br

[以前作ったnl2br](https://blog.terrier.dev/blog/2019/20190305210537-rehype-ast-nl2br/)の機能は残したかったので、復元した。

以前はrehypeプラグインとして行っていたのだが、これをremarkプラグインに対応する必要があった。

特に面白みがある部分では無いので、コードのリンクのみ配置しておく

* https://github.com/terrierscript/blog.terrier.dev/blob/c01c5da4f12255efe8e4aaf5831abb2103e62666/app/page/article/unified/nl2br.ts

あとはこれをpluginsに入れる

```tsx
import { nl2brRemark } from "./unified/nl2br"

export const RawMarkdown: FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <ReactMarkdown
      source={markdown}
      escapeHtml={false} // 追加
      renderers={{ code: CodeBlock }}
      plugins={[nl2brRemark]}
    />
```

### jestでsnapshot

特に他と変わらないが、Reactのコンポーネントになったので、snapshotテストが簡易に出来る

```tsx
test("Sample block", () => {
  const sampleMarkdown = removeIndent(`
    # Foo
    ## Baz
    ### bar
    foo baz bar
    - a
    - b
    - c
  `)
  const tree = renderer
    .create(<RawMarkdown markdown={sampleMarkdown} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
```

上記のnl2brやweb-componentもテストしてsnapshotを見れるので嬉しい

### Styleの調整

こんなふうにRenderとして割り当てることで細々調整可能。


```tsx
const List = styled.ul`
  margin-bottom: 0.25em;
`
const ListItem = styled.li`
  margin-top: 0.25em;
`
const Paragraph = styled.p`
  margin-bottom: 0.8em;
  line-height: 1.7em;
`

const InlineCode = styled.span`
  border: 1px solid #ccc;
  background: #eee;
  border-radius: 4px;
  padding: 0.1em 0.4em;
  margin: 0.1em;
`
<ReactMarkdown
  source={markdown}
  escapeHtml={false} 
  renderers={{
    paragraph: Paragraph,
    code: CodeBlock,
    list: List,
    listItem: ListItem,
    inlineCode: InlineCode
  }}
  plugins={[nl2brRemark]}
/>
```