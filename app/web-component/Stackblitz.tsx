export class StackbritzIframe extends HTMLElement {
  constructor() {
    super()
  }
  getHeight() {
    return this.getAttribute("height") || "300px"
  }
  loadingTemplate() {
    return `<div heigth=${this.getHeight()}>Loading...</div>`
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" })
    shadowRoot.innerHTML = this.template()
  }
  template() {
    const src = this.getAttribute("src")
    // const height = this.getAttribute("height") || "300px"
    return `
       <iframe src=${src} width="100%" height="${this.getHeight()}" frameborder="no">Loading
       <a href=${src}>${src}</a>
       </iframe>
     `
  }
}
