import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import slugify from "slugify"

import ProjectCard from "./projectCard"

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 1rem;
  @media ${props => props.theme.breakpoints.medium} {
    padding: 0 4rem;
  }
`
const FilmsContainer = styled.div`
  margin: 10rem 0 0 0;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const ProjectsGallery = () => {
  const data = useStaticQuery(graphql`
    query Films {
      gcms {
        films {
          id
          title
          tags
          featured
          imageCover {
            url
            node {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const {
    gcms: { films },
  } = data

  return (
    <Section id="projects">
      <FilmsContainer>
        {films.map(
          film =>
            film.featured && (
              <ProjectCard
                key={film.id}
                title={film.title}
                imageSrc={film.imageCover.node.childImageSharp.fluid}
                path={slugify(film.title, { lower: true })}
              />
            )
        )}
      </FilmsContainer>
    </Section>
  )
}

export default ProjectsGallery
