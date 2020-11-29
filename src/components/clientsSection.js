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
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media ${props => props.theme.breakpoints.medium} {
    width: 70%;
  }
`

const LogoWrapper = styled.div`
  width: 5rem;
  margin: 3rem 2rem;
  @media ${props => props.theme.breakpoints.medium} {
    width: 11rem;
  }
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
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          logoLightMode {
            url
            node {
              childImageSharp {
                fluid(maxWidth: 200) {
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
