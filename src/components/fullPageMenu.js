import React, { useContext } from "react"
import styled from "styled-components"
import { Icon } from "@chakra-ui/core"

import Context from "../store/context"

import MenuItem from "./menuItem"
import SocialIcons from "./SocialIcons"

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
  right: 3.6rem;
  cursor: pointer;
  @media ${props => props.theme.breakpoints.mobile} {
    top: 2rem;
    right: 2rem;
  }
`

const FullPageMenu = ({ closeMenu }) => {
  const { state } = useContext(Context)

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
      itemName: "Stills",
      route: "/stills",
    },
    {
      itemName: "Clients",
      route: "/clients",
    },
    {
      itemName: "Contact",
      route: "/contact",
    },
  ]

  return (
    <MenuWrapper
      style={{
        backgroundColor: state.isDark ? "#0a0a0f" : "#fff",
        color: state.isDark ? "#fff" : "#0a0a0f",
      }}
    >
      <Close onClick={closeMenu}>
        <Icon
          name="close"
          size="20px"
          color={state.isDark ? "#fff" : "#0a0a0f"}
        />
      </Close>
      {items.map(({ itemName, route }) => {
        return (
          <MenuItem
            textColor={state.isDark ? "#fff" : "#0a0a0f"}
            itemName={itemName}
            route={route}
          />
        )
      })}
      <SocialIcons />
    </MenuWrapper>
  )
}

export default FullPageMenu
