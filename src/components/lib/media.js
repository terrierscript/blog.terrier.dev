import { css } from "styled-components"

const sizes = {
  desktop: 992,
  // tablet: 768,
  phone: 376
}

const media = Object.keys(sizes).reduce((acc: any, label: any) => {
  acc[label] = (...args: any[]) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export default {
  desktop: media.desktop,
  phone: media.phone
}
