import { merge, from, of } from "rxjs"
import { map, mergeMap, scan, catchError } from "rxjs/operators"
import rssConfig from "./rssConfig"

// TODO: move rss-parser to another lib
// https://github.com/bobby-brennan/rss-parser/issues/53
import Parser from "rss-parser"
const parser = new Parser()
/* global RSSParser */
// if (window) {
//   require("rss-parser/dist/rss-parser.min.js")
// }
// @ts-ignore
// const parser = new RSSParser()

const parseRssItem = item => {
  const { title, link, pubDate } = item
  return {
    title,
    link,
    date: new Date(pubDate)
  }
}

const fromRss = (url, config) =>
  from(parser.parseURL(url)).pipe(
    mergeMap(r => from(r.items)),
    map(parseRssItem),
    map(item => ({ ...item, ...config })),
    catchError(err => {
      return of([])
    })
  )

const mock = {
  title: "Mock",
  link: "mock",
  date: new Date()
}

const getUrl = config => {
  const { dev, production } = config
  return process.env.NODE_ENV === "production" ? production : dev
}

const fromDummy = config => {
  return from(Array(1).fill(mock)).pipe(
    map(item => ({
      ...item,
      ...config
    }))
  )
}

const createRssStream = rssConfig =>
  rssConfig.map(config => {
    const url = getUrl(config)
    if (url !== null) {
      return fromRss(url, config)
    }
    return fromDummy(config)
  })

export default () => {
  return merge(...createRssStream(rssConfig)).pipe(
    map(item => (Array.isArray(item) ? item : [item])),
    scan((acc, v) => {
      const result = [...acc, ...v].sort(
        (a, b) => b.date.getTime() - a.date.getTime()
      )
      // console.log(acc, v, result);
      return result
    })
  )
}
