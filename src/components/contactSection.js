import React, { useContext } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import { BsChatSquareQuote } from "react-icons/bs"

import Context from "../store/context"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
`

const ContactWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.breakpoints.tablet} {
    width: 80%;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
  }
`

const ContactText = styled.h1`
  font-family: ${props => props.theme.fonts.oswald};
  font-size: 3rem;
  line-height: 120%;
  font-weight: normal;
  text-transform: uppercase;
  display: block;
  text-align: left;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 2.5rem;
    width: 90%;
    text-align: center;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1.5rem;
    text-align: center;
  }
`

const Label = styled.span`
  font-weight: bold;
  @media ${props => props.theme.breakpoints.tablet} {
    display: block;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    display: block;
  }
`

const ContactSection = () => {
  const data = useStaticQuery(graphql`
    query {
      gcms {
        contacts {
          email
          instagramHandle
          facebookMessenger
          phoneNumber
        }
      }
    }
  `)

  const {
    gcms: {
      contacts: [{ email, instagramHandle, facebookMessenger, phoneNumber }],
    },
  } = data

  const { state } = useContext(Context)

  return (
    <Section id="contact">
      <ContactWrapper>
        <BsChatSquareQuote
          color={state.isDark ? "#fffff" : "#0a0a0f"}
          size="7rem"
          style={{ margin: "3.5rem" }}
        />
        <ContactText>
          <Label>EMAIL </Label>
          <a
            href={`mailto:${email}?subject=Hey%20Paolo%2C%20Let's%20have%20a%20chat!&body=Hi%20Paolo%2C%0D%0A%0D%0AMy%20name%20is%20%5BYour%20name%20here%5D%2C%0D%0A%0D%0AI%20am%20reaching%20out%20because%20%5BBody%20of%20your%20message%5D...`}
            target="_blank"
            rel="noreferrer"
          >
            {email}
          </a>
        </ContactText>
        <ContactText>
          <Label> INSTAGRAM </Label>
          <a
            href={`https://www.instagram.com/${instagramHandle}`}
            target="_blank"
            rel="noreferrer"
          >
            @{instagramHandle}
          </a>
        </ContactText>
        <ContactText>
          <Label>MESSENGER </Label>
          <a
            href={`https://www.${facebookMessenger}`}
            target="_blank"
            rel="noreferrer"
          >
            {facebookMessenger}
          </a>
        </ContactText>
        <ContactText>
          <Label> PHONE </Label>
          <a href={`tel:${phoneNumber}`} rel="noreferrer">
            {phoneNumber}{" "}
          </a>
        </ContactText>
      </ContactWrapper>
    </Section>
  )
}

export default ContactSection
