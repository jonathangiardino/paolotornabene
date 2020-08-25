import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Header from "../components/header"
import FullPageMenu from "../components/fullPageMenu"

const FilmPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Film = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Layout>
      {menuOpen && <FullPageMenu closeMenu={() => setMenuOpen(false)} />}
      <Header openMenu={() => setMenuOpen(true)} />
      <FilmPageWrapper>Hello Film!</FilmPageWrapper>
    </Layout>
  )
}

export default Film
