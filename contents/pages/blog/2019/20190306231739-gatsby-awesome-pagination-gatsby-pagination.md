---
templateKey: blog-post
title: gatsby-awesome-paginationでGatsbyにpaginationをつけた
date: '2019-03-06T14:17:39.913Z'
tags:
  - gatsby
  - javascript
---

なんだかんだでこのblogの記事も増えてきたのでページネーションをつけた。

https://github.com/terrierscript/blog.terrier.dev/pull/62/files

[Gatsby公式](https://www.gatsbyjs.org/docs/adding-pagination/#adding-pagination)の方法は自前でページネーションするという感じで気乗りしないタイプの面倒くささがあったので、pluginに頼った。

検索すると下記３つのpluginが出てくる

* [gatsby-plugin-paginate](https://www.gatsbyjs.org/packages/gatsby-plugin-paginate/)
* [gatsby-paginate](https://www.gatsbyjs.org/packages/gatsby-paginate/)
* [gatsby-awesome-pagination](https://www.gatsbyjs.org/packages/gatsby-awesome-pagination/)

gatsby-plugin-paginateはpluginとしてpaginationの情報を記述する事になるものだ。すべてpluginに寄せたいという志向があればこれを選ぶのが良さそうだが、個人的にはplugin部分はなるべく薄くしたいのとconfigにGraphQL乗るのがいまいち好きになれなそうだったのでやめた。
gatsby-paginateとgatsby-awesome-paginationは機能的にはさほど変わらないので悩んだが、gatsby-paginateの方がメンテナを移譲してる状態だったのとgatsby-awesome-paginationの方がドキュメントがスッと頭に入ってきたのと中を見ると変なことはしてなさそうだったのでそちらを利用することにした。

## やったこと

導入の手順は下記の様な感じで進めた

1. `yarn add gatsby-awesome-pagination`
2. 元々固定ページの`page/index.js`だったのを`templates/index.js`とテンプレート扱いに変更
3. `gatsby-node.js`にページのビルド部分を追加
4. `template/index.js`のGraphQLクエリを修正
5. ページネーションのコンポーネント作成

3のところが馴染み深くないところだが、ドキュメントに習ってこんな感じで関数を作った

```js
const buildPaginate = posts => {
  paginate({
    createPage,
    items: posts,
    itemsPerPage: 10,
    // ↓ 0ページ目を`/`にするような作りにした
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
    component: getTemplate("index")
  })
}

graphql(ql).then(result => {
  // ...
  const posts = result.data.allMarkdownRemark.edges
  buildPages(posts)
  buildTagPages(posts)
  buildPaginate(posts) // <- 今回追加
})
```

5のページネーションのコンポーネントもソースを見ると`<PaginationLinks>`というのがあるっぽかったがundocumentedだったのと「まあこのくらいは作るか」という気持ちになったので自作した。

```js
// Prev/Nextに一旦留めた。先頭ページ / 最終ページはそれぞれ片方のpathが空文字になっているのでそれを利用して判定した。
// もうちょっとマジメに作るなら numberOfPages, pageNumberを使うのが良さそう
const Paginate = ({ previousPagePath, nextPagePath, numberOfPages, pageNumber }) => {
  return (
    <PaginateContainer>
      {previousPagePath && <Link to={previousPagePath}>≪Prev</Link>}
      {nextPagePath && <Link to={nextPagePath}>Next≫</Link>}
    </PaginateContainer>
  )
}
```

入れてみた感想としてはいい感じに隠蔽してて良いのではと思った。ただやっぱり公式がそもそも何やってるかを理解した上でないと引っかかりが多いかもしれない。あくまで車輪を再発明を避けるぐらいな目的で。