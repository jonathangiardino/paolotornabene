import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"

import { Icon } from "@chakra-ui/core"

import ThemeContext from "../store/ThemeContext"

// Style
const Nav = styled.div`
  position: fixed;
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
    left: 1rem;
  }
`

const MenuButton = styled(motion.div)`
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
            <Link to="/">
              <Img
                fixed={
                  theme.isDark
                    ? logo.logoLight.childImageSharp.fixed
                    : logo.logoDark.childImageSharp.fixed
                }
              />
            </Link>
          </Logo>

          <Menu>
            <Icon
              onClick={theme.toggleDark}
              name={theme.isDark ? "sun" : "moon"}
              color={theme.isDark ? "#fff" : "#0a0a0f"}
              size="28px"
            ></Icon>
            <MenuButton
              onClick={openMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, type: "Inertia" }}
              exit={{ opacity: 0 }}
            >
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
