import React, { useContext } from "react"
import styled from "styled-components"

import Context from "../store/context"

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
const IconLink = styled.a`
  cursor: pointer;
  font-size: 28px;
`

const SocialIcons = () => {
  const { state } = useContext(Context)
  return (
    <IconsWrapper>
      <IconLink>
        <FaInstagram
          className="social-icon"
          color={state.isDark ? "#fff" : "#0a0a0f"}
        />
      </IconLink>
      <IconLink>
        <FaVimeoV
          className="social-icon"
          color={state.isDark ? "#fff" : "#0a0a0f"}
        />
      </IconLink>
      <IconLink>
        <FaYoutube
          className="social-icon"
          color={state.isDark ? "#fff" : "#0a0a0f"}
        />
      </IconLink>
      <IconLink>
        {" "}
        <FaLinkedinIn
          className="social-icon"
          color={state.isDark ? "#fff" : "#0a0a0f"}
        />
      </IconLink>
    </IconsWrapper>
  )
}

export default SocialIcons
