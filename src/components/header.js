import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Context from "../store/context"
import { Icon } from "@chakra-ui/core"

// Style
const Nav = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.semiSmall};
`
const Menu = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  width: 3rem;
`



const Header = () => {
  const { state, dispatch } = useContext(Context)

  const logo = useStaticQuery(graphql`
  query {
    logoDark: file(relativePath: { eq: "paolotornabenelogo-dark.png" }) {
      childImageSharp {
        fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
      }
    }
    logoLight: file(relativePath: { eq: "paolotornabenelogo-light.png" }) {
      childImageSharp {
        fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
      }
    }
  }
`)

  return (
    <Nav>
      <Logo>
        <Img
          fixed={state.isDark ? logo.logoLight.childImageSharp.fixed : logo.logoDark.childImageSharp.fixed}
        />
      </Logo>
      <Menu>
        <Icon
          onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
          name={state.isDark ? "sun" : "moon"}
          color={state.isDark ? "#fff" : "#1F2833"}
          size="28px"
          style={{ marginBottom: '1rem'}}
        ></Icon>
      </Menu>
    </Nav>
  )
}

export default Header
