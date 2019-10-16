import { html } from "lit-html"

const Iframe = ({ src, height }) => html`
  <iframe src=${src} width="100%" height="${height}" frameborder="no"
    >Loading
    <a href=${src}>${src}</a>
  </iframe>
`

export class StackbritzIframe extends HTMLElement {
  constructor() {
    super()
  }
  getHeight() {
    return this.getAttribute("height") || "300px"
  }
  getSrc() {
    if (this.getAttribute("src")) {
      return this.getAttribute("src")
    }
    return this.children[0]
  }
  loadingTemplate() {
    return `<div heigth=${this.getHeight()}>Loading...</div>`
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" })
    shadowRoot.innerHTML = this.template()
  }
  template() {
    const src = this.getSrc()
    const height = this.getHeight()
    const tmpl = Iframe({ src, height }).getHTML()
    console.log(tmpl.toString())
    return tmpl
  }
}
