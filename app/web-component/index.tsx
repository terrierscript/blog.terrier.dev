export async function loadWebComponent() {
  if (typeof window !== `undefined`) {
    const { StackbritzIframe } = await import("./Stackblitz")
    const { SampleTimer } = await import("./SampleTimer")

    customElements.define("stackblitz-iframe", StackbritzIframe)
    customElements.define("sample-timer", SampleTimer)
  }
}
