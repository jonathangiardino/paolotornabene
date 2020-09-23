import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MissionText = styled.h1`
  font-family: "Oswald";
  text-transform: uppercase;
  padding: 2rem 0 0;
  font-size: 3rem;
  font-weight: normal;
  text-align: center;
`

const ImageContainer = styled.div`
  width: 30%;
  padding: 1rem;
  @media ${props => props.theme.breakpoints.large} {
    width: 25%;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    width: 60%;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 80%;
  }
`

const MissionSection = () => {
  const data = useStaticQuery(graphql`
    query {
      gcms {
        mission(where: { id: "cke9y0tz4009s01604i4e1a7s" }) {
          missionText
          missionImage {
            url
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const {
    gcms: { mission },
  } = data
  return (
    <Section>
      <ImageContainer>
        <Img
          style={{ padding: "1rem" }}
          fluid={mission.missionImage.node.childImageSharp.fluid}
        />
      </ImageContainer>

      <MissionText>{mission.missionText}</MissionText>
    </Section>
  )
}

export default MissionSection
