const now = require("../../now.json")

const mapping = now.routes.filter(x => {
  return x.dest?.startsWith("https://zenn.dev")
}).map(({ src, dest }) => {
  // console.log(src.split("/"))

  return {
    srcSlug: src?.split("/")[3],
    dest: dest,
    destSlug: dest.replace("https://zenn.dev/terrierscript/articles/", "")
  }
}).reduce((acc, obj) => ({ ...acc, [obj.srcSlug]: obj }), {})

export const getRedirect = (slug) => {
  return mapping[slug]
}