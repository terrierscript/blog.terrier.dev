const { loadFeedForSSR } = require("../app/lib/feed/loader")
module.exports = (req: any, res: any) => {
  console.log("xx")
  // loadFeedForSSR().then(r => {
  //   console.log(r)
  //   const rr = r.filter(rrr => !rrr.dummy)
  //   res.send(rr)
  //   res.end()
  // })
}
