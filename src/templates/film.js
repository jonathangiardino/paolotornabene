import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"

const FilmPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Film = () => {
  return (
    <Layout>
      <FilmPageWrapper>Hello Film!</FilmPageWrapper>
    </Layout>
  )
}

export default Film
