import React, {useContext} from "react"
import { useStaticQuery, graphql } from "gatsby"
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

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Body style={{
        backgroundColor: state.isDark ? "#1F2833" : "#fff",
        color: state.isDark ? "#fff" : "#1F2833",
        textDecoration: "none"
      }}>
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
            padding: `0 1.0875rem 1.45rem`,
            fontFamily: "Poppins",
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> by <a href="https://www.jonathangiardino.com">Jonathan Giardino</a>
          </footer>
        </div>
      </Body>
    </>
  )
}

export default Layout
