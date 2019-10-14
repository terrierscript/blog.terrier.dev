if (typeof window !== `undefined`) {
  const { StackbritzIframe } = require("./Stackblitz")
  const { SampleTimer } = require("./SampleTimer")

  // customElements.define("stackblitz-iframe", StackbritzIframe)
  customElements.define("sb-iframe", StackbritzIframe)
  customElements.define("sample-timer", SampleTimer)
}
