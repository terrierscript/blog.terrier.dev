const axios = require("axios")
const { getUrlByMedia } = require("../../../app/lib/feed/loader")
module.exports = (req, res) => {
  const {
    query: { media }
  } = req
  const url = getUrlByMedia(media, true)
  // @ts-ignore
  axios(url).then(({ data, headers }) => {
    const copyHeaders = ["content-type", "etag", "cache-control"]
    // console.log(headers)
    copyHeaders.map(key => {
      res.setHeader(key, headers[key])
    })
    res.send(data)
    res.end()
  })
}
