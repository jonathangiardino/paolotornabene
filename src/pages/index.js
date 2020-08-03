import React, { useContext } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Context from "../store/context"

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
const Hero = styled.h1`
  font-family: ${props => props.theme.fonts.oswald};
  font-size: 4rem;
  line-height: 120%;
  font-weight: normal;
  text-transform: uppercase;
  z-index: 3;
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
  font-size: 4rem;
  line-height: 120%;
  z-index: 3;
  text-transform: uppercase;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 4rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 3rem;
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

const VideoContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  opacity: 0.3;
  @media ${props => props.theme.breakpoints.mobile} {
    top:0;
  }
`
const VideoSource = styled.video`
  width: 40%;
  @media ${props => props.theme.breakpoints.tablet} {
    width: 60%;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  z-index: 1;
`

const IndexPage = ({ data }) => {
  const { state } = useContext(Context)
  const hero = data.gcms.hero
  return (
    <Layout>
      <SEO title="Home" />
      <HeroContainer>
        <VideoContainer>
          <VideoSource autoPlay muted loop>
            <source src={hero.heroVideo.url} type="video/mp4" />
            Your browser does not support HTML5 video.
          </VideoSource>
        </VideoContainer>
        <TextContainer>
          <NameContainer>
            <Name>Paolo Tornabene</Name>
            <Line />
          </NameContainer>
          <Hero>{hero.header}</Hero>
        </TextContainer>
        <ProjectsButton style={{color: state.isDark ? "#fff" : "#010022"}}>projects &#8594;</ProjectsButton>
      </HeroContainer>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    gcms {
      hero(stage: PUBLISHED, where: { id: "ckc7rkqa80h640107gfdn5edn" }) {
        header
        heroVideo {
          url
        }
      }
    }
  }
`
export default IndexPage
