import React from "react"
import styled from "styled-components"

const TextContainer = styled.div`
  z-index: 2;
  padding: ${props => props.theme.spacing.medium};
  @media ${props => props.theme.breakpoints.mobile} {
    margin-top: 2rem;
  }
`
const HeroMessage = styled.h1`
  font-family: ${props => props.theme.fonts.oswald};
  font-size: 4rem;
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

const Name = styled.h2`
  font-family: ${props => props.theme.fonts.oswald};
  font-weight: black;
  font-size: 4rem;
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

const Line = styled.div`
  width: 15rem;
  height: 0.3rem;
  background-color: ${props => props.theme.colors.yellow};
  @media ${props => props.theme.breakpoints.tablet} {
    width: 5rem;
    height: 0.2rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 6rem;
    height: 0.2rem;
    margin-bottom: 1rem;
  }
`

const HeroTitle = ({ name, title }) => {
  return (
    <TextContainer>
      <NameContainer>
        <Name>{name}</Name>
        <Line />
      </NameContainer>
      <HeroMessage>{title}</HeroMessage>
    </TextContainer>
  )
}

export default HeroTitle
