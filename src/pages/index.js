import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.gcms.hero.header}</h1>

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
