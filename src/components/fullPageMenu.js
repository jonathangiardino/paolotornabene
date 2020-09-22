import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Icon } from "@chakra-ui/core"

import ThemeContext from "../store/ThemeContext"

import MenuItem from "./menuItem"
import SocialIcons from "./socialIcons"

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
`

const Close = styled.div`
  position: absolute;
  top: 3.3rem;
  right: 3.5rem;
  cursor: pointer;
  @media ${props => props.theme.breakpoints.mobile} {
    top: 2rem;
    right: 2rem;
  }
`

const Logo = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 3rem;
  @media ${props => props.theme.breakpoints.mobile} {
    width: 2rem;
    top: 1rem;
    left: 2rem;
  }
`

const ItemsContainer = styled.div`
  margin-top: 3rem;
`

const FullPageMenu = ({ closeMenu }) => {
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

  const items = [
    {
      itemName: "About",
      route: "/about",
    },
    {
      itemName: "Films",
      route: "/films",
    },
    {
      itemName: "Clients",
      route: "/clients",
    },
    {
      itemName: "Contact",
      route: "/contact",
    },
    {
      itemName: "Hire Me",
      route: "/contact",
    },
  ]

  return (
    <ThemeContext.Consumer>
      {theme => (
        <MenuWrapper
          style={{
            backgroundColor: theme.isDark ? "#0a0a0f" : "#fff",
            color: theme.isDark ? "#fff" : "#0a0a0f",
          }}
        >
          <Logo>
            <Img
              fixed={
                theme.isDark
                  ? logo.logoLight.childImageSharp.fixed
                  : logo.logoDark.childImageSharp.fixed
              }
            />
          </Logo>
          <Close onClick={closeMenu}>
            <Icon
              name="close"
              size="20px"
              color={theme.isDark ? "#fff" : "#0a0a0f"}
            />
          </Close>
          <ItemsContainer>
            {items.map(({ itemName, route }) => {
              return (
                <MenuItem
                  textColor={theme.isDark ? "#fff" : "#0a0a0f"}
                  itemName={itemName}
                  route={route}
                />
              )
            })}
          </ItemsContainer>

          <SocialIcons />
        </MenuWrapper>
      )}
    </ThemeContext.Consumer>
  )
}

export default FullPageMenu
