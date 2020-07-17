import React, { useContext } from "react"
import VideoBg from "reactjs-videobg"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Context from "../store/context"

const HeroContainer = styled.div`
  position: relative;
`
const TextContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 20%;
  left: 0;
`
const Hero = styled.h1`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, #f3c623 30%);
  display: inline;
  font-size: 5rem;
  text-transform: uppercase;
  line-height: 120%;
  font-weight: black;
  font-family: ${props => props.theme.fonts.oswald};
  z-index: 3;
`

const Name = styled.h2`
  font-size: 5rem;
  text-transform: uppercase;
  line-height: 120%;
  font-weight: black;
  font-family: ${props => props.theme.fonts.oswald};
  color: ${props => props.theme.colors.yellow};
  z-index: 3;
`

const VideoContainer = styled.div`
  width: 100%;
  margin-top: -1%;
  z-index: -1;
  opacity: 0.5;
`
const VideoSource = styled.video`
  width: 100%;
  height: 100%;
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
        <TextContainer>
          <Name>Paolo Tornabene</Name>
          <Hero>{hero.header}</Hero>
        </TextContainer>
        <Mask style={{ backgroundColor: state.isDark ? "#010022" : "#fff" }} />
        <VideoContainer>
          <VideoSource autoPlay muted loop>
            <source src={hero.heroVideo.url} type="video/mp4" />
            Your browser does not support HTML5 video.
          </VideoSource>
        </VideoContainer>
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
