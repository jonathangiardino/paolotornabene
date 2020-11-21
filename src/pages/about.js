import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { navigate } from "@reach/router"
import { motion } from "framer-motion"

import Layout from "../components/layout"

const AboutPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
`
const AboutContainer = styled.div`
  padding: 10rem 0 0 0;
  width: 90%;
  @media ${props => props.theme.breakpoints.tablet} {
    width: 80%;
  }
  @media ${props => props.theme.breakpoints.large} {
    width: 60%;
  }
`

const Title = styled(motion.h1)`
  font-family: "Oswald";
  font-size: 3rem;
  line-height: 120%;
  font-weight: normal;
  text-transform: uppercase;
  padding: ${props => props.theme.spacing.small} 0 0;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 3.5rem;
  }
  @media ${props => props.theme.breakpoints.xlarge} {
    font-size: 4.5rem;
  }
`

const BackLink = styled(motion.a)`
  font-family: "Oswald";
  text-transform: uppercase;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 2rem;
  cursor: pointer;
  position: relative;
  z-index: 10;
`
const Description = styled.p`
  width: 100%;
  padding-bottom: 2rem;
  margin: 2rem auto;
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

const About = () => {
  const goBack = () => {
    navigate(-1)
  }

  const data = useStaticQuery(graphql`
    query {
      gcms {
        about(where: { id: "ckeid0d9s09md0111xjpqm8ys" }) {
          aboutText
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
    <Layout>
      <AboutPageWrapper>
        <AboutContainer>
          <BackLink
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
            onClick={goBack}
          >
            &#8592; Back
          </BackLink>
          <Title
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "linear", delay: 0.3 }}
            onClick={goBack}
          >
            About me
          </Title>
          <ImageContainer>
            <Img fluid={about.aboutImage.node.childImageSharp.fluid} />
          </ImageContainer>
          <Description
            dangerouslySetInnerHTML={{ __html: about.aboutText }}
          ></Description>
        </AboutContainer>
      </AboutPageWrapper>
    </Layout>
  )
}

export default About
