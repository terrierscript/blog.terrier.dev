// const fromFeedItem = require("./fromFeedItem")

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
module.exports = parseRss

// module.exports = (url, config) => fromFeedItem(parseRss(url), config)
