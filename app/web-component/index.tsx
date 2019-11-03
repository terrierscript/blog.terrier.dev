if (typeof window !== `undefined`) {
  const { SampleTimer } = require("./SampleTimer")

  customElements.define("sample-timer", SampleTimer)
}
