import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Hero = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  line-height: 120%;
  font-weight: black;
  font-family: ${props => props.theme.fonts.oswald};
`

const Name = styled.h2`
  font-size: 5rem;
  text-transform: uppercase;
  line-height: 120%;
  font-weight: black;
  font-family: ${props => props.theme.fonts.oswald};
  color: ${props => props.theme.colors.yellow};
`

const IndexPage = ({ data }) => {
  const hero = data.gcms.hero
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ height: "85vh" }}>
        <Name>Paolo Tornabene</Name>
        <Hero>{hero.header}</Hero>
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    gcms {
      hero(stage: PUBLISHED, where: { id: "ckc7rkqa80h640107gfdn5edn" }) {
        header
      }
    }
  }
`
export default IndexPage
