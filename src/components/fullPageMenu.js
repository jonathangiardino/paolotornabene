import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Icon } from "@chakra-ui/core"

import { motion } from "framer-motion"

import ThemeContext from "../store/ThemeContext"

import MenuItem from "./menuItem"
import SocialIcons from "./socialIcons"

const MenuWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10;
`

const Close = styled(motion.div)`
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
    top: 1rem;
    left: 1rem;
  }
`

const ItemsContainer = styled(motion.div)`
  margin-top: 3rem;
`

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const FullPageMenu = ({ closeMenu, menuState }) => {
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
    // {
    //   itemName: "Stills",
    //   route: "/stills",
    // },
    {
      itemName: "Hire Me",
      route: "/#contact",
    },
  ]

  return (
    <ThemeContext.Consumer>
      {theme => (
        <MenuWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
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
          <Close
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          >
            <Icon
              name="close"
              size="20px"
              color={theme.isDark ? "#fff" : "#0a0a0f"}
            />
          </Close>
          <ItemsContainer variants={container} initial="hidden" animate="show">
            {items.map(({ itemName, route, i }) => {
              return (
                <motion.div key={i} variants={listItem} onClick={closeMenu}>
                  <MenuItem
                    textColor={theme.isDark ? "#fff" : "#0a0a0f"}
                    itemName={itemName}
                    route={route}
                  />
                </motion.div>
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
