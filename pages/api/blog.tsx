import { response } from "../../src/markdown/isomophic"
import { getItem } from "../../src/markdown/api"

export default (req, res) => {
  response(req, res, getItem)
}
