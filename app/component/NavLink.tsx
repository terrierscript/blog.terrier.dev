// see: https://github.com/gatsbyjs/gatsby/issues/10668
// import { Link } from "gatsby"
// import { default as GatsbyLink } from "gatsby-link"
import { default as NextLink } from "next/link"
import { Link } from "@chakra-ui/core"

export const NavLink = ({ to, children, ...props }) => (
  <Link href={to} as={NextLink}>
    <a {...props}>{children}</a>
  </Link>
)
// =======
// import { default as GatsbyLink } from "gatsby-link"
// import React from "react"

// export const NavLink = props => <Link as={GatsbyLink} {...props} />
// >>>>>>> origin/master
