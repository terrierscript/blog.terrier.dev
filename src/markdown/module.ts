// import fetch from "isomorphic-unfetch"
import { getPagenateList } from "./files"
import qs from "querystring"
const isClient = () => {
  return typeof fetch === "function"
}
export const isomophic = async (apiName, exec) => {
  if (isClient()) {
    return await fetch(apiName)
  } else {
    return exec()
    // return async (req, res) => {
    //   const result = await exec(req, res)
    //   res.setHeader("Content-Type", "application/json")
    //   res.statusCode = 200
    //   res.end(JSON.stringify(result))
    // }
  }
}

export const getBlogList = params => {
  return isomophic(`./api/blogs?${qs.stringify(params)}`, () => {
    return getPagenateList(params.page, params.limit)
  })
}
