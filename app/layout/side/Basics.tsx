import styled from "@emotion/styled"
import { BG_COLOR } from "../global/colors"

export const SideBox = styled.div`
  background: ${BG_COLOR};
  margin-right: 0;
  padding: 1em;
`

export const Li = styled.li`
  margin-bottom: 0;
  line-height: 1em;
`
export const Ul = styled.ul`
  margin-bottom: 0;
`

export const Title = styled.h3`
  margin-bottom: 0.5em;
`

// export const anchorStyle = component => {
//   return styled(component)`
//     color: #333;
//     text-decoration: none;
//     line-height: 1em;
//     font-size: 0.8rem;
//     &:hover {
//       text-decoration: underline;
//     }
//   `
// }
// export const Anchor = anchorStyle("a")
