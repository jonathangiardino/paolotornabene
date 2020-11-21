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
  font-size: 4.5rem;
  line-height: 120%;
  font-weight: normal;
  text-transform: uppercase;
  z-index: 3;
  opacity: 0.6;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 3rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2.5rem;
    text-align: right;
  }
`
const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`

const Name = styled(motion.h2)`
  font-family: "Oswald";
  font-weight: black;
  font-size: 4.5rem;
  line-height: 120%;
  z-index: 3;
  text-transform: uppercase;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 3rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2rem;
    text-align: right;
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
