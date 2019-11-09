import { loadFeedForSSR } from "../loader"
import parseScrapboxApi from "../parseScrapboxApi"
it("loadFeed", done => {
  loadFeedForSSR().then(r => {
    expect(r).toMatchSnapshot()
    done()
  })
})

it("parseScrapboxApi", done => {
  parseScrapboxApi("https://scrapbox.io/api/pages/terrierscript?limit=5").then(
    r => {
      expect(r).toMatchSnapshot()
      done()
    }
  )
})
