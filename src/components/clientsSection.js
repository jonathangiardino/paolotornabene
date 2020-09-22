import React, { useContext } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Context from "../store/context"

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`

const ClientsContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const LogoWrapper = styled.div`
  width: 11rem;
  margin: 3rem 2rem;
`

const ClientsSection = () => {
  const data = useStaticQuery(graphql`
    query Clients {
      gcms {
        clients {
          id
          clientName
          logoDarkMode {
            url
            node {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          logoLightMode {
            url
            node {
              childImageSharp {
                fluid(maxWidth: 1000) {
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
    gcms: { clients },
  } = data

  const { state } = useContext(Context)

  return (
    <Section>
      <ClientsContainer>
        {clients.map(client => {
          return (
            <LogoWrapper>
              <Img
                fluid={
                  state.isDark
                    ? client.logoDarkMode.node.childImageSharp.fluid
                    : client.logoLightMode.node.childImageSharp.fluid
                }
              />
            </LogoWrapper>
          )
        })}
      </ClientsContainer>
    </Section>
  )
}

export default ClientsSection
