import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SocialIcons from "./socialIcons"

const FooterWrapper = styled.footer`
  width: 100vw;
  padding: ${props => props.theme.spacing.large} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FooterMenu = styled.div`
  padding: ${props => props.theme.spacing.medium} 0;
`

const FooterLink = styled(Link)`
  width: auto;
  padding: 0 ${props => props.theme.spacing.xsmall} 0 0;
  font-family: "Oswald";
  font-size: 1.5rem;
  line-height: 120%;
  font-weight: normal;
  text-transform: uppercase;
  text-align: left;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${props => props.theme.colors.yellow} !important;
    text-decoration: line-through;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    text-align: center;
    display: block;
  }
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
    justify-content: center;
    align-items: center;
  }
`

const FlexiDiv = styled.div`
  text-align: center;
  display: block;
  @media ${props => props.theme.breakpoints.large} {
    display: flex;
    justify-content: space-between;
  }
`

const Divider = styled.div`
  width: 100%;
`
const Small = styled.small`
  text-align: center;
  font-family: "Oswald";
  text-transform: uppercase;
`

const Span = styled.span`
  color: ${props => props.theme.colors.yellow};
  @media ${props => props.theme.breakpoints.mobile} {
    display: none;
  }
`

const Footer = ({ linkColor }) => {
  const links = [
    { linkText: "About", path: "/about" },
    { linkText: "Films", path: "/films" },
    // { linkText: "Stills", path: "/stills" },
    { linkText: "Contact", path: "/#contact" },
  ]

  const data = useStaticQuery(graphql`
    query {
      divider: file(relativePath: { eq: "footerDivider.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <FooterWrapper>
        <FooterContainer>
          <Divider>
            <Img fluid={data.divider.childImageSharp.fluid} />
          </Divider>
          <FlexiDiv>
            <FooterMenu>
              {links.map(link => (
                <FooterLink
                  key={link.linkText}
                  style={{ color: `${linkColor}` }}
                  to={link.path}
                >
                  {link.linkText}
                </FooterLink>
              ))}
            </FooterMenu>
            <SocialIcons />
          </FlexiDiv>
          <Small>
            © {new Date().getFullYear()} Paolo Tornabene <Span>*</Span> Built
            with{" "}
            <a href="http://gatsbyjs.com" target="_blank" rel="noreferrer">
              Gatsby
            </a>{" "}
            by{" "}
            <a
              href="http://jonathangiardino.com"
              target="_blank"
              rel="noreferrer"
            >
              Jonathan Giardino
            </a>
          </Small>
        </FooterContainer>
      </FooterWrapper>
    </div>
  )
}

export default Footer
