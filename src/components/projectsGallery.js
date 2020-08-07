import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectCard from "./projectCard"

const ProjectsGallery = () => {
  const data = useStaticQuery(graphql`
    query Films {
      gcms {
        films {
          id
          title
          vimeoId
          tags
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
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {films.map(film => {
        return (
          <ProjectCard
            title={film.title}
            imageSrc={film.imageCover.node.childImageSharp.fluid}
          />
        )
      })}
    </div>
  )
}

export default ProjectsGallery
