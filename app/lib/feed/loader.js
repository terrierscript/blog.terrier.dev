const parseRss = require("./parseRss")
const parseScrapboxApi = require("./parseScrapboxApi")

const fromFeedItem = require("./fromFeedItem")

const { getUrl } = require("./getUrl")

const { empty, merge, forkJoin } = require("rxjs")
const { map, scan } = require("rxjs/operators")
const rssConfig = require("./rssConfig")

const fromRss = (url, config) => fromFeedItem(parseRss(url), config)
const fromApi = (url, config) => fromFeedItem(parseScrapboxApi(url), config)

const generateMock = () => ({
  title: "Mock",
  link: `mock${Math.random()}`,
  dummy: true,
  date: new Date()
})
exports.generateMock = generateMock

const createRssStreams = (rssConfig, useOrigin) =>
  rssConfig.map(config => {
    switch (config.id) {
      case "scrapbox":
        const url = getUrl(config, "api")
        return fromApi(url, config)
      default: {
        const url = getUrl(config, useOrigin)
        if (url !== null) {
          return fromRss(url, config)
        } else {
          return empty()
        }
      }
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
