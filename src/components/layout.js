import React, { useContext, useState } from "react"
import styled from "styled-components"
import Context from "../store/context"

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
  const { state } = useContext(Context)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Body
        style={{
          backgroundColor: state.isDark ? "#0a0a0f" : "#fff",
          color: state.isDark ? "#fff" : "#0a0a0f",
        }}
      >
        {menuOpen && <FullPageMenu closeMenu={() => setMenuOpen(false)} />}
        <Header openMenu={() => setMenuOpen(true)} />

        <main>{children}</main>

        <Footer linkColor={state.isDark ? "#fff" : "#0a0a0f"} />
      </Body>
    </>
  )
}

export default Layout
