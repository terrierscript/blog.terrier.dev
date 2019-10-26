import "./polyfill"
import React from "react"
import { render } from "react-dom"
import { SandboxApp } from "./SandboxApp"

render(<SandboxApp />, document.querySelector("#root"))
