import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Icon } from "@chakra-ui/core"

import ThemeContext from "../store/ThemeContext"

// Style
const Nav = styled.div`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.medium};
  z-index: 5;
  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props => props.theme.spacing.small};
  }
`

const Menu = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const Logo = styled.div`
  width: 3rem;
  @media ${props => props.theme.breakpoints.mobile} {
    width: 2rem;
  }
`

const MenuButton = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  padding: ${props => props.theme.spacing.small};
  cursor: pointer;
  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props => props.theme.spacing.xsmall};
  }
`
const MenuLine = styled.div`
  width: 1.5rem;
  height: 0.16rem;
  margin: 0.3rem;
  &.longer {
    width: 2rem;
  }
`

const Header = ({ openMenu }) => {
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
    <ThemeContext.Consumer>
      {theme => (
        <Nav>
          <Logo>
            <Img
              fixed={
                theme.isDark
                  ? logo.logoLight.childImageSharp.fixed
                  : logo.logoDark.childImageSharp.fixed
              }
            />
          </Logo>

          <Menu>
            <Icon
              onClick={theme.toggleDark}
              name={theme.isDark ? "sun" : "moon"}
              color={theme.isDark ? "#fff" : "#0a0a0f"}
              size="28px"
            ></Icon>
            <MenuButton onClick={openMenu}>
              <MenuLine
                style={{ backgroundColor: theme.isDark ? "#fff" : "#0a0a0f" }}
              />
              <MenuLine
                className="longer"
                style={{ backgroundColor: theme.isDark ? "#fff" : "#0a0a0f" }}
              />
            </MenuButton>
          </Menu>
        </Nav>
      )}
    </ThemeContext.Consumer>
  )
}

export default Header
