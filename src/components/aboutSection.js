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
  width: 90%;
  @media ${props => props.theme.breakpoints.tablet} {
    width: 80%;
  }
  @media ${props => props.theme.breakpoints.large} {
    width: 60%;
  }
`

const AboutText = styled.h1`
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2rem;
    width: 90%;
  }
  font-family: "Oswald";
  font-size: 3rem;
  line-height: 120%;
  font-weight: normal;
  text-transform: uppercase;
  display: inline;
  text-align: left;
`
const LinkText = styled(AboutText)`
  color: ${props => props.theme.colors.yellow};
`
const AboutPageLink = styled(Link)`
  display: block;
  width: fit-content;
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
  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    width: 100%;
  }
  width: 100%;
  padding-top: 2rem;
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
                fluid(maxWidth: 800) {
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
        {about.aboutSectionSummary.map((item, index) => (
          <AboutText key={item}>
            {item}{" "}
            {index < about.aboutSectionSummary.length - 1 && (
              <Divider> | </Divider>
            )}
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
