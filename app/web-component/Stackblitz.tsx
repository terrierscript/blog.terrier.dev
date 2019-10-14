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
    return `
       <iframe src=${src} width="100%" height="${this.getHeight()}" frameborder="no">Loading
       <a href=${src}>${src}</a>
       </iframe>
     `
  }
}
