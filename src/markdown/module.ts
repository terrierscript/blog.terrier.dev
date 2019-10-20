// import fetch from "isomorphic-unfetch"
import { getPagenateList } from "./files"
import qs from "querystring"
import { PostWrap } from "../../app/list/Item"
const isClient = () => {
  return typeof fetch === "function"
}
export const isomophic = <T>(apiName, exec: (params) => Promise<T>) => {
  return async params => {
    if (isClient()) {
      return await fetch(`${apiName}?${qs.stringify(params)}`)
    } else {
      return await exec(params)
    }
  }
}

export const getBlogList = async params => {
  return isomophic<PostWrap[]>("./api/blogs", getPagenateList)(params)
}
