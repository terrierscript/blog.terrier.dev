// see: https://github.com/gatsbyjs/gatsby/issues/10668
// import { Link } from "gatsby"
import { default as GatsbyLink } from "gatsby-link"
import { Link as NextLink } from "next"

export const NavLink = ({ to, ...props }) => (
  <NextLink href={to} {...props}></NextLink>
)
