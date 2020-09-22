import React, { useState } from "react"
import styled from "styled-components"
import ThemeContext from "../store/ThemeContext"

import Header from "./header"
import FullPageMenu from "./fullPageMenu"
import Footer from "./footer"

import "./layout.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Body = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  text-decoration: "none";
  margin: "0 auto";
  font-family: "Reem Kufi";
`

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <ThemeContext.Consumer>
      {theme => (
        <>
          <Body
            style={{
              backgroundColor: theme.isDark ? "#0a0a0f" : "#fff",
              color: theme.isDark ? "#fff" : "#0a0a0f",
            }}
          >
            {menuOpen && (
              <FullPageMenu
                closeMenu={() => setMenuOpen(menuOpen => !menuOpen)}
              />
            )}
            <Header openMenu={() => setMenuOpen(menuOpen => !menuOpen)} />

            <main>{children}</main>

            <Footer linkColor={theme.isDark ? "#fff" : "#0a0a0f"} />
          </Body>
        </>
      )}
    </ThemeContext.Consumer>
  )
}

export default Layout
