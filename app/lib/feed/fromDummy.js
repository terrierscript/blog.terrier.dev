const { from } = require("rxjs")
const { map } = require("rxjs/operators")
const { generateMock } = require("./loader")
const fromDummy = config => {
  return from(Array(2).fill(null)).pipe(
    map(_ => ({
      ...generateMock(),
      ...config
    }))
  )
}
exports.fromDummy = fromDummy
