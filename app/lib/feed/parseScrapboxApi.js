const axios = require("axios")

module.exports = url => {
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
