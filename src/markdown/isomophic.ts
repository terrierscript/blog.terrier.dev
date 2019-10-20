// import fetch from "isomorphic-unfetch"
import { getPagenateList, getItem } from "./api"
import qs from "querystring"
import { PostWrap } from "../../app/list/Item"
import { NextApiRequest, NextApiResponse } from "next"
const isClient = () => {
  return typeof fetch === "function"
}

export const response = async (
  req: NextApiRequest,
  res: NextApiResponse,
  fn
) => {
  const result = await fn(req.query)
  res.setHeader("Content-Type", "application/json")
  res.statusCode = 200
  res.end(JSON.stringify(result))
  return res
}

type IsomophicParam<T, U extends {} = {}> = {
  apiPath: string
  exec: (params: U) => Promise<T>
}

export const isomophic = <T, U>(isom: IsomophicParam<T, U>) => {
  return async params => {
    if (isClient()) {
      return await fetch(`${isom.apiPath}?${qs.stringify(params)}`)
    } else {
      console.log(params)
      return await isom.exec(params)
    }
  }
}

export const getBlogList = isomophic<PostWrap[], unknown>({
  apiPath: "/api/blogs",
  exec: ({ page, limit }) => getPagenateList({ page, limit })
})

export const getBlogItem = isomophic<{ content: string }, unknown>({
  apiPath: "/api/blog",
  exec: ({ slug }) => getItem({ slug })
})
