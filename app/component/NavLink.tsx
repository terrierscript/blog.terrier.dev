// see: https://github.com/gatsbyjs/gatsby/issues/10668
// import { Link } from "gatsby"
import { default as GatsbyLink } from "gatsby-link"
import { Link } from "@chakra-ui/core"
import React from "react"

export const NavLink = props => <Link as={GatsbyLink} {...props} />
