const { from } = require("rxjs")
const { map } = require("rxjs/operators")

const generateMock = () => ({
  title: "Mock",
  link: `mock${Math.random()}`,
  dummy: true,
  date: new Date()
})

const fromDummy = config => {
  return from(Array(2).fill(null)).pipe(
    map(_ => ({
      ...generateMock(),
      ...config
    }))
  )
}
exports.fromDummy = fromDummy
