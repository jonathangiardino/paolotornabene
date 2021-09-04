import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import ThemeContext from "../store/ThemeContext"

import { FaInstagram } from "react-icons/fa"
import { FaVimeoV } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import theDotsBlack from "../images/theDotsBlack.svg"
import theDotsWhite from "../images/theDotsWhite.svg"
import theDotsHover from "../images/theDotsHover.svg"

import { motion } from "framer-motion"

const IconsWrapper = styled(motion.div)`
  padding: ${props => props.theme.spacing.medium} 0;
  width: 260px;
  display: flex;
  justify-content: space-between;
  @media ${props => props.theme.breakpoints.tablet} {
    margin: 0 auto;
  }
  @media ${props => props.theme.breakpoints.large} {
    margin: 0;
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

  const SocialComponent = (social, theme) => {
    if (social.link.includes("instagram")) {
      return (
        <IconLink href={social.link} target="_blank">
          <FaInstagram
            className="social-icon"
            color={theme.isDark ? "#fff" : "#0a0a0f"}
          />
        </IconLink>
      )
    } else if (social.link.includes("vimeo")) {
      return (
        <IconLink href={social.link} target="_blank">
          <FaVimeoV
            className="social-icon"
            color={theme.isDark ? "#fff" : "#0a0a0f"}
          />
        </IconLink>
      )
    } else if (social.link.includes("youtube")) {
      return (
        <IconLink href={social.link} target="_blank">
          <FaYoutube
            className="social-icon"
            color={theme.isDark ? "#fff" : "#0a0a0f"}
          />
        </IconLink>
      )
    } else if (social.link.includes("dots")) {
      return (
        <IconLink href={social.link} target="_blank">
          {theme.isDark ? <TheDotsLogo isDark /> : <TheDotsLogo />}
        </IconLink>
      )
    }
  }

  const {
    gcms: { socialLinks },
  } = data

  return (
    <ThemeContext.Consumer>
      {theme => (
        <IconsWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
        >
          {socialLinks.map(social => SocialComponent(social, theme))}
        </IconsWrapper>
      )}
    </ThemeContext.Consumer>
  )
}

export default SocialIcons
