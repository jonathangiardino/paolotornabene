import React, { useContext } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Context from "../store/context"

import BackgroundVideo from "./backgroundVideo"

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
const TextContainer = styled.div`
  z-index: 2;
  padding: ${props => props.theme.spacing.medium};
  @media ${props => props.theme.breakpoints.mobile} {
    margin-top: 2rem;
  }
`
const HeroMessage = styled.h1`
  font-family: ${props => props.theme.fonts.oswald};
  font-size: 4rem;
  line-height: 120%;
  font-weight: normal;
  text-transform: uppercase;
  z-index: 3;
  opacity: 0.6;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 4rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2.5rem;
    text-align: right;
  }
`
const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`

const Name = styled.h2`
  font-family: ${props => props.theme.fonts.oswald};
  font-weight: black;
  font-size: 4rem;
  line-height: 120%;
  z-index: 3;
  text-transform: uppercase;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 4rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2rem;
    text-align: right;
  }
`

const Line = styled.div`
  width: 15rem;
  height: 0.3rem;
  background-color: ${props => props.theme.colors.yellow};
  @media ${props => props.theme.breakpoints.tablet} {
    width: 5rem;
    height: 0.2rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 6rem;
    height: 0.2rem;
  }
`

const ProjectsButton = styled.a`
  font-weight: black;
  position: absolute;
  right: 3%;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  writing-mode: vertical-rl;
  padding: ${props => props.theme.spacing.xsmall};
  @media ${props => props.theme.breakpoints.tablet} {
    position: relative;
    writing-mode: horizontal-tb;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    position: relative;
    writing-mode: horizontal-tb;
    text-align: right;
  }
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
  const { state } = useContext(Context)

  const {
    gcms: { hero },
  } = data

  return (
    <HeroContainer>
      <BackgroundVideo source={hero.heroVideo.url} />
      <TextContainer>
        <NameContainer>
          <Name>Paolo Tornabene</Name>
          <Line />
        </NameContainer>
        <HeroMessage>{hero.header}</HeroMessage>
      </TextContainer>
      <ProjectsButton style={{ color: state.isDark ? "#fff" : "#010022" }}>
        projects &#8594;
      </ProjectsButton>
    </HeroContainer>
  )
}

export default Hero
