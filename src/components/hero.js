import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"

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

  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: flex-end;
  }
`

const ProjectsButton = styled(Link)`
  font-weight: black;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  writing-mode: vertical-rl;
  padding: ${props => props.theme.spacing.xsmall};
  cursor: pointer;
  z-index: 5;
  transition: all 0.2s ease-in-out;
  color: ${props => props.theme.colors.yellow} !important;
  &:hover {
    transform: translateY(0.5rem);
  }
  @media ${props => props.theme.breakpoints.mobile} {
    position: relative;
    writing-mode: horizontal-tb;
    text-align: right;
  }
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
      <ProjectsButton to="/#projects">work &#8594;</ProjectsButton>

      <AbsoluteContainer>
        <SocialIcons />
      </AbsoluteContainer>
    </HeroContainer>
  )
}

export default Hero
