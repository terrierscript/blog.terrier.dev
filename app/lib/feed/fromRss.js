const { fromDummy } = require("./fromDummy")
const { from, of } = require("rxjs")
const { map, mergeMap, catchError } = require("rxjs/operators")
const Parser = require("rss-parser")
const parser = new Parser()

const parseRssItem = item => {
  const { title, link, pubDate } = item
  return {
    title,
    link,
    date: new Date(pubDate)
  }
}
const parseRss = url => {
  return parser
    .parseURL(url)
    .then(({ items }) => items.map(item => parseRssItem(item)))
}

const fromRss = (url, config) =>
  from(parseRss(url)).pipe(
    mergeMap(r => from(r)),
    // map(parseRssItem),
    map(item => ({ ...item, ...config })),
    catchError(err => {
      if (process.env.NODE_ENV === "development") {
        return fromDummy(config)
      }
      return of([])
    })
  )
exports.fromRss = fromRss
