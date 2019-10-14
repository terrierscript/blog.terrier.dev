if (typeof window !== `undefined`) {
  async function load() {
    const { StackbritzIframe } = await import("./Stackblitz")
    const { SampleTimer } = await import("./SampleTimer")

    customElements.define("stackblitz-iframe", StackbritzIframe)
    customElements.define("sample-timer", SampleTimer)
  }
  load()
}
