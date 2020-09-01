import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import ProjectCard from "./projectCard"

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 6rem 0;
`

const ProjectsGallery = () => {
  const data = useStaticQuery(graphql`
    query Films {
      gcms {
        films(orderBy: createdAt_DESC, last: 5) {
          id
          slug
          title
          tags
          date
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
      {films.map(film => {
        return (
          <ProjectCard
            title={film.title}
            imageSrc={film.imageCover.node.childImageSharp.fluid}
            path={film.slug}
            date={film.date}
          />
        )
      })}
    </Section>
  )
}

export default ProjectsGallery
