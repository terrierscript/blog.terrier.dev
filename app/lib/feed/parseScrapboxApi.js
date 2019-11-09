// const fromFeedItem = require("./fromFeedItem")

const axios = require("axios")

const parseFromScrapbox = url => {
  // @ts-ignore
  return axios.get(url).then(({ data }) => {
    return data.pages.map(({ title, created, ...p }) => {
      return {
        title: title,
        date: new Date(created * 1000),
        link: `https://scrapbox.io/terrierscript/${encodeURIComponent(title)}`
      }
    })
  })
}
module.exports = parseFromScrapbox
// exports.default = (url, config) => fromFeedItem(parseFromScrapbox(url), config)
