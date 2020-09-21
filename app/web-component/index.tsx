if (typeof window !== `undefined`) {
  const { SampleTimer } = require("./SampleTimer")

  //　for:　https://blog.terrier.dev/blog/2019/20191014184131-web-components-gatsby-mdx/
  customElements.define("sample-timer", SampleTimer)
}
