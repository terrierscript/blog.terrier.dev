const { empty, merge, from, of, forkJoin } = require("rxjs")
const { map, mergeMap, scan, catchError } = require("rxjs/operators")
const rssConfig = require("./rssConfig")
const Parser = require("rss-parser")
const parser = new Parser()
const axios = require("axios")

const parseRssItem = item => {
  const { title, link, pubDate } = item
  return {
    title,
    link,
    date: new Date(pubDate)
  }
}

module.exports.parseScrapboxApi = url => {
  return axios(url).then(items => {})
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

const generateMock = () => ({
  title: "Mock",
  link: `mock${Math.random()}`,
  dummy: true,
  date: new Date()
})

const getUrl = (config, useOrigin) => {
  const { proxy, origin } = config
  if (useOrigin) {
    return origin
  }
  return proxy
}

const getConfigByMedia = media => {
  return rssConfig.find(r => {
    return r.media === media || r.id === media
  })
}

module.exports.getUrlByMedia = (media, useOrigin) => {
  const config = getConfigByMedia(media)
  if (!config) {
    console.warn(`Invalid name: ${media}`)
    return null
  }
  return getUrl(config, useOrigin)
}

const fromDummy = config => {
  return from(Array(2).fill(null)).pipe(
    map(_ => ({
      ...generateMock(),
      ...config
    }))
  )
}

const createRssStreams = (rssConfig, useOrigin) =>
  rssConfig.map(config => {
    const url = getUrl(config, useOrigin)
    if (url !== null) {
      return fromRss(url, config)
    } else {
      return empty()
    }
  })

const load = ({ useOrigin }) => {
  return merge(...createRssStreams(rssConfig, useOrigin)).pipe(
    map(item => (Array.isArray(item) ? item : [item])),
    scan((acc, v) => {
      const result = [...acc, ...v].sort(
        (a, b) => b.date.getTime() - a.date.getTime()
      )
      return result
    })
  )
}

module.exports.loadFeedStream = () => load({ useOrigin: false })

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
