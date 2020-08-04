import React, { useContext } from "react"
import styled from "styled-components"
import Context from "../store/context"

import Header from "./header"

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
`

const Layout = ({ children }) => {
  const { state } = useContext(Context)

  return (
    <>
      <Body
        style={{
          backgroundColor: state.isDark ? "#010022" : "#fff",
          color: state.isDark ? "#fff" : "#010022",
          textDecoration: "none",
          margin: "0 auto",
          fontFamily: "Reem Kufi",
        }}
      >
        <Header />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by{" "}
          <a href="https://www.jonathangiardino.com">Jonathan Giardino</a>
        </footer>
      </Body>
    </>
  )
}

export default Layout
