import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import ThemeContext from "../store/ThemeContext"

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
          clientWebsiteLink
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

  return (
    <ThemeContext.Consumer>
      {theme => (
        <Section>
          <ClientsContainer>
            {clients.map(client => {
              return (
                <a
                  href={client.clientWebsiteLink}
                  key={client.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LogoWrapper>
                    <Img
                      fluid={
                        theme.isDark
                          ? client.logoDarkMode.node.childImageSharp.fluid
                          : client.logoLightMode.node.childImageSharp.fluid
                      }
                    />
                  </LogoWrapper>
                </a>
              )
            })}
          </ClientsContainer>
        </Section>
      )}
    </ThemeContext.Consumer>
  )
}

export default ClientsSection
