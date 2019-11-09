const rssConfig = require("./rssConfig")
const getUrl = (config, useOrigin) => {
  const { proxy, origin } = config
  if (useOrigin) {
    return origin
  }
  return proxy
}
exports.getUrl = getUrl
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
