const rssConfig = require("./rssConfig")

const getUrl = (config, mode = "proxy") => {
  const { proxy, origin, api } = config
  switch (mode) {
    case "api":
      return api
    case "origin":
      return origin
    case "proxy":
    default:
      return proxy
  }
}

exports.getUrl = getUrl
const getConfigByMedia = media => {
  return rssConfig.find(r => {
    return r.media === media || r.id === media
  })
}
module.exports.getUrlByMedia = (media, mode) => {
  const config = getConfigByMedia(media)
  if (!config) {
    console.warn(`Invalid name: ${media}`)
    return null
  }
  return getUrl(config, mode)
}
