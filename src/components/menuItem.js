import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TextContainer = styled.div`
  /* padding: ${props => props.theme.spacing.xsmall}; */
  width: 300px;
`

const ItemName = styled.h2`
  font-family: "Oswald";
  font-weight: black;
  font-size: 4rem;
  line-height: 120%;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  text-align: center;
  &:hover {
    color: ${props => props.theme.colors.yellow} !important;
    text-decoration: line-through;
    transform: translateX(0.2rem);
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
