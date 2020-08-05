import React, { useContext } from "react"
import styled from "styled-components"

import Context from "../store/context"

import { Box } from "@chakra-ui/core"
import { FaInstagram } from "react-icons/fa"
import { FaVimeoV } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

const IconsWrapper = styled.div`
  padding: ${props => props.theme.spacing.medium} 0;
  width: 300px;
  display: flex;
  justify-content: space-between;
`

const SocialIcons = () => {
  const { state } = useContext(Context)
  return (
    <IconsWrapper>
      <Box
        as={FaInstagram}
        size="32px"
        color={state.isDark ? "#fff" : "#0a0a0f"}
      />
      <Box
        as={FaVimeoV}
        size="32px"
        color={state.isDark ? "#fff" : "#0a0a0f"}
      />
      <Box
        as={FaYoutube}
        size="32px"
        color={state.isDark ? "#fff" : "#0a0a0f"}
      />
      <Box
        as={FaLinkedinIn}
        size="32px"
        color={state.isDark ? "#fff" : "#0a0a0f"}
      />
    </IconsWrapper>
  )
}

export default SocialIcons
