const { merge, from, of, forkJoin } = require("rxjs")
const { map, mergeMap, scan, catchError } = require("rxjs/operators")
const rssConfig = require("./rssConfig")
const Parser = require("rss-parser")
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

const getUrl = (config, useOrigin) => {
  const { dev, production, origin } = config
  if (useOrigin) {
    return origin
  }
  // if (process.env.)
  return process.env.NODE_ENV === "production" ? production : dev
}

const fromDummy = config => {
  return from(Array(10).fill(mock)).pipe(
    map(item => ({
      ...item,
      ...config
    }))
  )
}

const createRssStream = (rssConfig, useOrigin) =>
  rssConfig.map(config => {
    const url = getUrl(config, useOrigin)
    if (url !== null) {
      return fromRss(url, config)
    }
    return fromDummy(config)
  })

const load = ({ useOrigin }) => {
  return merge(...createRssStream(rssConfig, useOrigin)).pipe(
    map(item => (Array.isArray(item) ? item : [item])),
    scan((acc, v) => {
      const result = [...acc, ...v].sort(
        (a, b) => b.date.getTime() - a.date.getTime()
      )
      return result
    })
  )
}
module.exports.loadFeed = () => load({ useOrigin: false })

module.exports.loadFeedForSSR = () => {
  return new Promise((resolve, reject) => {
    forkJoin(load({ useOrigin: true })).subscribe(
      result => {
        resolve(result[0])
      },
      err => reject(err)
    )
  })
}
