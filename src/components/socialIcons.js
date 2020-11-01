import React from "react"
import styled from "styled-components"

import ThemeContext from "../store/ThemeContext"

import { FaInstagram } from "react-icons/fa"
import { FaVimeoV } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import theDotsBlack from "../images/theDotsBlack.svg"
import theDotsWhite from "../images/theDotsWhite.svg"
import theDotsHover from "../images/theDotsHover.svg"
import { graphql, useStaticQuery } from "gatsby"

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

const TheDotsLogo = styled.div`
  height: 34px;
  min-width: 100px;
  background: url(${props => (props.isDark ? theDotsWhite : theDotsBlack)});
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    height: 34px;
    min-width: 100px;
    background: url(${theDotsHover});
    background-repeat: no-repeat;
    background-position: center;
  }
`

const SocialIcons = () => {
  const data = useStaticQuery(graphql`
    query {
      gcms {
        socialLinks {
          link
        }
      }
    }
  `)

  const {
    gcms: { socialLinks },
  } = data

  return (
    <ThemeContext.Consumer>
      {theme => (
        <IconsWrapper>
          <IconLink href={socialLinks[0].link} target="_blank">
            <FaInstagram
              className="social-icon"
              color={theme.isDark ? "#fff" : "#0a0a0f"}
            />
          </IconLink>
          <IconLink href={socialLinks[1].link} target="_blank">
            <FaVimeoV
              className="social-icon"
              color={theme.isDark ? "#fff" : "#0a0a0f"}
            />
          </IconLink>
          <IconLink href={socialLinks[2].link} target="_blank">
            <FaYoutube
              className="social-icon"
              color={theme.isDark ? "#fff" : "#0a0a0f"}
            />
          </IconLink>
          <IconLink href={socialLinks[3].link} target="_blank">
            {theme.isDark ? <TheDotsLogo isDark /> : <TheDotsLogo />}
          </IconLink>
        </IconsWrapper>
      )}
    </ThemeContext.Consumer>
  )
}

export default SocialIcons
