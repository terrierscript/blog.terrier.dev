import React from "react"
import Helmet from "react-helmet"

import Navbar from "../components/Navbar"

export default ({ children }) => (
  <div>
    <Helmet title="Today 🐶 Learned" />
    <Navbar />
    <div>{children()}</div>
  </div>
)
