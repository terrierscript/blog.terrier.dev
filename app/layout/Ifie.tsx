import React from "react"
import styled from "@emotion/styled"

const WarningContainer = styled.div`
  background: red;
  color: white;
  height: 5em;
  text-align: center;
  font-size: 2em;
  line-height: 5em;
  a: {
    color: white;
  }
`

export const IfieContainer = () => {
  return (
    <WarningContainer>
      お使いのブラウザは危険にさらされています
      <a href="https://techcommunity.microsoft.com/t5/Windows-IT-Pro-Blog/The-perils-of-using-Internet-Explorer-as-your-default-browser/ba-p/331732">
        こちらをクリック
      </a>
    </WarningContainer>
  )
}
