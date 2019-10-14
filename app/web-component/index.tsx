import { StackbritzIframe } from "./Stackblitz"
import { SampleTimer } from "./SampleTimer"

export const defineComponents = () => {
  customElements.define("stackblitz-iframe", StackbritzIframe)
  customElements.define("sample-timer", SampleTimer)
}
