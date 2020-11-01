import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { navigate } from "@reach/router"

import Layout from "../components/layout"
import ProjectCard from "../components/projectCard"
import slugify from "slugify"

const FilmsPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
`

const FilmsContainer = styled.div`
  margin: 10rem 0 0 0;
  width: 60%;
  @media ${props => props.theme.breakpoints.tablet} {
    width: 80%;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
  }
`

const Title = styled.h1`
  font-family: "Oswald";
  font-size: 4.5rem;
  line-height: 120%;
  font-weight: normal;
  text-transform: uppercase;
  padding: ${props => props.theme.spacing.small} 0 0;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 3.5rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 3rem;
  }
`

const BackLink = styled.a`
  font-family: "Oswald";
  text-transform: uppercase;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 2rem;
  cursor: pointer;
`

const Films = ({ data }) => {
  const goBack = () => {
    navigate(-1)
  }

  const films = data.gcms.films

  return (
    <Layout>
      <FilmsPageWrapper>
        <FilmsContainer>
          <BackLink onClick={goBack}>&#8592; Back</BackLink>
          <Title>Films</Title>
          {films.map(
            film =>
              film.featured && (
                <ProjectCard
                  key={film.id}
                  title={film.title}
                  imageSrc={film.imageCover.node.childImageSharp.fluid}
                  path={slugify(film.title, { lower: true })}
                  date={film.date}
                />
              )
          )}
        </FilmsContainer>
      </FilmsPageWrapper>
    </Layout>
  )
}
export default Films

export const data = graphql`
  query AllFilms {
    gcms {
      films {
        id
        title
        tags
        date
        featured
        imageCover {
          url
          node {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
