import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"

import { motion } from "framer-motion"

import BackgroundVideo from "./backgroundVideo"
import HeroTitle from "./heroTitle"
import SocialIcons from "./socialIcons"

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${props => props.theme.breakpoints.mobile} {
    align-items: flex-end;
  }
`
const AbsoluteButton = styled(motion.div)`
  position: absolute;
  bottom: 6%;
  right: 6%;
  @media ${props => props.theme.breakpoints.mobile} {
    position: relative;
    text-align: right;
    padding: ${props => props.theme.spacing.medium} 0;
  }
`

const SmallButton = styled(Link)`
  font-weight: black;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  cursor: pointer;
  z-index: 5;
  transition: all 0.2s ease-in-out;
  color: ${props => props.theme.colors.yellow} !important;
`

const AbsoluteContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      gcms {
        hero(where: { id: "ckc7rkqa80h640107gfdn5edn" }, stage: PUBLISHED) {
          header
          heroVideo {
            url
          }
        }
      }
    }
  `)

  const {
    gcms: { hero },
  } = data

  return (
    <HeroContainer>
      <BackgroundVideo source={hero.heroVideo.url} />

      <HeroTitle name="Paolo Tornabene" title={hero.header} />
      <AbsoluteButton
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 2.1, ease: "linear" }}
      >
        <SmallButton to="/#projects">work &darr;</SmallButton>
      </AbsoluteButton>

      <AbsoluteContainer>
        <SocialIcons />
      </AbsoluteContainer>
    </HeroContainer>
  )
}

export default Hero
