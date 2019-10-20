import { response } from "../../src/markdown/isomophic"
import { getPagenateList } from "../../src/markdown/api"

export default (req, res) => {
  response(req, res, getPagenateList)
}
