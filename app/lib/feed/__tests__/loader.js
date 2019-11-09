import { loadFeedForSSR } from "../loader"

it("loadFeed", done => {
  loadFeedForSSR().then(r => {
    expect(r).toMatchSnapshot()
    done()
  })
})
