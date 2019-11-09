import { loadFeedForSSR } from "../loader"
import parseScrapboxApi from "../parseScrapboxApi"
xit("loadFeed", done => {
  loadFeedForSSR().then(r => {
    expect(r).toMatchSnapshot()
    done()
  })
})

xit("parseScrapboxApi", done => {
  parseScrapboxApi("https://scrapbox.io/api/pages/terrierscript?limit=5").then(
    r => {
      expect(r).toMatchSnapshot()
      done()
    }
  )
})
