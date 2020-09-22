import React from "react"
import styled from "styled-components"

import ThemeContext from "../store/ThemeContext"

import { FaInstagram } from "react-icons/fa"
import { FaVimeoV } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

const IconsWrapper = styled.div`
  padding: ${props => props.theme.spacing.medium} 0;
  width: 260px;
  display: flex;
  justify-content: space-between;
  @media ${props => props.theme.breakpoints.tablet} {
    margin: 0 auto;
  }
`
const IconLink = styled.a`
  cursor: pointer;
  font-size: 28px;
`

const SocialIcons = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <IconsWrapper>
          <IconLink>
            <FaInstagram
              className="social-icon"
              color={theme.isDark ? "#fff" : "#0a0a0f"}
            />
          </IconLink>
          <IconLink>
            <FaVimeoV
              className="social-icon"
              color={theme.isDark ? "#fff" : "#0a0a0f"}
            />
          </IconLink>
          <IconLink>
            <FaYoutube
              className="social-icon"
              color={theme.isDark ? "#fff" : "#0a0a0f"}
            />
          </IconLink>
          <IconLink>
            {" "}
            <FaLinkedinIn
              className="social-icon"
              color={theme.isDark ? "#fff" : "#0a0a0f"}
            />
          </IconLink>
        </IconsWrapper>
      )}
    </ThemeContext.Consumer>
  )
}

export default SocialIcons
