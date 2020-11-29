import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  h1 {
    color: ${props => props.theme.colors.yellow};
    font-size: 3rem;
  }
  p {
    padding: 0 16px;
  }
  @media ${props => props.theme.breakpoints.medium} {
    flex-direction: row;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageContainer>
      <h1>404 |</h1>
      <p> This page does not exist</p>
      <Link to="/">Back Home</Link>
    </PageContainer>
  </Layout>
)

export default NotFoundPage
