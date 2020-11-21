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
`
const FilmsContainer = styled.div`
  margin: 10rem 0 0 0;
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${props => props.theme.breakpoints.tablet} {
    width: 80%;
  }
  @media ${props => props.theme.breakpoints.large} {
    width: 60%;
  }
`

const ProjectsGallery = () => {
  const data = useStaticQuery(graphql`
    query Films {
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
                date={film.date}
              />
            )
        )}
      </FilmsContainer>
    </Section>
  )
}

export default ProjectsGallery
