import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
`

const AboutWrapper = styled.div`
  width: 60%;
  @media ${props => props.theme.breakpoints.tablet} {
    width: 80%;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
  }
`

const AboutText = styled.h1`
  font-family: "Oswald";
  font-size: 3rem;
  line-height: 120%;
  font-weight: normal;
  text-transform: uppercase;
  display: inline;
  text-align: left;
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2rem;
    width: 90%;
  }
`
const LinkText = styled(AboutText)`
  color: ${props => props.theme.colors.yellow};
`
const AboutPageLink = styled(Link)`
  transition: all 0.2s ease-in-out;
  &:hover {
    text-decoration: line-through;
    opacity: 0.7;
  }
`

const Divider = styled.span`
  color: ${props => props.theme.colors.yellow};
`

const ImageContainer = styled.div`
  width: 60%;
  padding-top: 2rem;
  @media ${props => props.theme.breakpoints.tablet} {
    width: 80%;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
  }
`

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      gcms {
        about(where: { id: "ckeid0d9s09md0111xjpqm8ys" }) {
          aboutSectionSummary
          aboutImage {
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
    gcms: { about },
  } = data
  return (
    <Section id="about">
      <AboutWrapper>
        {about.aboutSectionSummary.map(item => (
          <AboutText key={item}>
            {item} <Divider> | </Divider>
          </AboutText>
        ))}
        <AboutPageLink to="/about">
          <LinkText>More about me</LinkText>
        </AboutPageLink>
        <ImageContainer>
          <Img fluid={about.aboutImage.node.childImageSharp.fluid} />
        </ImageContainer>
      </AboutWrapper>
    </Section>
  )
}

export default AboutSection
