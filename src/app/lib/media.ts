import { css } from "styled-components"

const sizes = {
  desktop: 992,
  // tablet: 768,
  phone: 376
}

type Types = keyof typeof sizes

// TODO
const media: any = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => {
    // @ts-ignore
    const cssval = css(...args)
    return css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${cssval};
      }
    `
  }
  return acc
}, {})

export default {
  desktop: media.desktop,
  phone: media.phone
}
