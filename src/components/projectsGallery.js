import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const ProjectCard = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
`

const BoxImage = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  &:hover .img-project {
    transform: scale(1);
  }
`

const ProjectTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.bigTitle};
  font-family: ${props => props.theme.fonts.oswald};
  position: absolute;
  top: -2rem;
  right: -2rem;
  z-index: 2;
  color: ${props => props.theme.colors.yellow};
  transition: all 0.2s ease-in-out;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: ${props => props.theme.fontSize.title};
    right: -1rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: ${props => props.theme.fontSize.smallTitle};
  }
`

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
          <Link to="/" style={{ width: " 35% ", margin: "3rem" }}>
            <ProjectCard>
              <ProjectTitle className="project-title">
                {film.title}
              </ProjectTitle>
              <BoxImage>
                <Img
                  className="img-project"
                  fluid={film.imageCover.node.childImageSharp.fluid}
                />
              </BoxImage>
            </ProjectCard>
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectsGallery
