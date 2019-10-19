// import { getBlogList } from "../../src/markdown/module"
import { NextApiRequest, NextApiResponse } from "next"
import { getPagenateList } from "../../src/markdown/files"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const result = getPagenateList(
    Number(req.query.page),
    Number(req.query.limit)
  )
  // getBlogList(req.query).then(result => {
  res.setHeader("Content-Type", "application/json")
  res.statusCode = 200
  res.end(JSON.stringify(result))
  // })
}
