import { css } from "@emotion/core"

const container = css`
  border: dotted 3px #ccc;
  padding: 1em;
`
export class SampleTimer extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" })
    window.setInterval(() => {
      shadowRoot.innerHTML = this.template()
    }, 500)
  }
  template() {
    return `
      <div style="${container}">現在時刻: ${new Date()}</div>
     `
  }
}
