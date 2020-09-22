import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import { DarkModeProvider } from "./src/store/ThemeContext"

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
a {
  text-decoration: none;
  color: ${props => props.theme.colors.yellow}
}
p {
  padding: 0.75rem 0;
  font-size: ${props => props.theme.fontSize.small}
}
h3 {
  margin-top: 2rem;
  font-size: ${props => props.theme.fontSize.smallTitle}
}
`

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  </DarkModeProvider>
)
