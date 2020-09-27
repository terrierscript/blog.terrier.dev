const now = require("../../now.json")

const getBlogSlug = (fullSlug) => {
  return fullSlug?.split("/")[3]
}
const mapping = now.routes.filter(x => {
  return x.dest?.startsWith("https://zenn.dev")
}).map(({ src, dest }) => {
  // console.log(src.split("/"))

  return {
    srcSlug: getBlogSlug(src),
    dest: dest,
    destSlug: dest.replace("https://zenn.dev/terrierscript/articles/", "")
  }
}).reduce((acc, obj) => ({ ...acc, [obj.srcSlug]: obj }), {})

export const getRedirect = (fullSlug) => {
  const slug = getBlogSlug(fullSlug)
  // console.log(fullSlug, slug)
  return mapping[slug].dest
}