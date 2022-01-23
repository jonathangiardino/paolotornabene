import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const Section = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`

const MissionText = styled.h1`
  width: 80%;
  font-family: "Oswald";
  text-transform: uppercase;
  padding: 2rem 0 0;
  font-size: 4rem;
  font-weight: bold;
  line-height: 120%;
  text-align: center;
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
                fluid(maxWidth: 400) {
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
      {/* <ImageContainer>
        <Img fluid={mission.missionImage.node.childImageSharp.fluid} />
      </ImageContainer> */}

      <MissionText>{mission.missionText}</MissionText>
    </Section>
  )
}

export default MissionSection
