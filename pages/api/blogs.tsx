import { getBlogList } from "../../src/markdown/module"
import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  getBlogList(req.query).then(result => {
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200
    res.end(JSON.stringify(result))
  })
}
