// see: https://github.com/gatsbyjs/gatsby/issues/10668
// import { Link } from "gatsby"
// import { default as GatsbyLink } from "gatsby-link"
import Link from "next/link"

export const NavLink = ({ to, children , ...props }) => (
  <Link href={to} >
    <a {...props}>
      {children }
    </a>
  </Link>
)
