const { loadFeedForApi } = require("../app/lib/feed/loader2")
module.exports = (req, res) => {
  loadFeedForApi().then(r => {
    // console.log(r)
    const rr = r.filter(rrr => !rrr.dummy)
    res.send(rr)
    res.end()
  })
}
