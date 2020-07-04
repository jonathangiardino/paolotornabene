import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const hero = data.gcms.hero
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{hero.header}</h1>

      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    gcms {
      hero(stage: PUBLISHED, where: {id: "ckc7rkqa80h640107gfdn5edn"}) {
        header
      }
    }
  }
`
export default IndexPage
