import { StackbritzIframe } from "./Stackblitz"

export const defineComponents = () => {
  customElements.define("stackblitz-iframe", StackbritzIframe)
  console.log("x", StackbritzIframe)
}
