import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TextContainer = styled.div`
  /* padding: ${props => props.theme.spacing.xsmall}; */
  width: 300px;
`

const ItemName = styled.h2`
  font-family: ${props => props.theme.fonts.oswald};
  font-weight: black;
  font-size: 4rem;
  line-height: 120%;
  text-transform: uppercase;
  transition: all 0.6 ease-in-out;
  &:hover {
    color: ${props => props.theme.colors.yellow} !important;
    text-decoration: line-through;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 4rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 3rem;
  }
`

const MenuItem = ({ itemName, route, textColor }) => {
  return (
    <TextContainer>
      <Link to={`${route}`}>
        <ItemName style={{ color: `${textColor}` }}>{itemName}</ItemName>
      </Link>
    </TextContainer>
  )
}

export default MenuItem