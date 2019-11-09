const { from, of } = require("rxjs")
const { map, mergeMap, catchError } = require("rxjs/operators")
const { fromDummy } = require("./fromDummy")

module.exports = (items, config) =>
  from(items).pipe(
    // @ts-ignore
    mergeMap(r => from(r)),
    // map(parseRssItem),
    map(item => ({ ...item, ...config })),
    catchError(err => {
      if (process.env.NODE_ENV === "development") {
        return fromDummy(config)
      }
      return of([])
    })
  )
