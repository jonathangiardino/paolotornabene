import React from "react"
import styled from "styled-components"

import { motion } from "framer-motion"

const TextContainer = styled.div`
  z-index: 2;
  padding: ${props => props.theme.spacing.medium};
  @media ${props => props.theme.breakpoints.mobile} {
    margin-top: 2rem;
  }
`
const HeroMessage = styled(motion.h1)`
  font-family: "Oswald";
  line-height: 120%;
  font-weight: normal;
  text-transform: uppercase;
  z-index: 3;
  opacity: 0.6;
  font-size: 2.5rem;
  text-align: right;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 3rem;
    text-align: left;
  }
  @media ${props => props.theme.breakpoints.large} {
    font-size: 4.5rem;
  }
`
const NameContainer = styled.div`
  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Name = styled(motion.h2)`
  font-family: "Oswald";
  font-weight: black;
  line-height: 120%;
  z-index: 3;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: right;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 3rem;
    text-align: left;
  }
  @media ${props => props.theme.breakpoints.large} {
    font-size: 4.5rem;
  }
`

const HeroTitle = ({ name, title }) => {
  return (
    <TextContainer>
      <NameContainer>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.5, ease: "linear" }}
        >
          {name}
        </Name>
      </NameContainer>
      <HeroMessage
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.3, delay: 1.8, ease: "linear" }}
      >
        {title}
      </HeroMessage>
    </TextContainer>
  )
}

export default HeroTitle
