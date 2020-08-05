import React, { useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Line from "./heroTitle.js"

import Context from "../store/context"

const ProjectCard = styled.div`
  width: 70%;
  margin: 3rem;
  position: relative;

  @media ${props => props.theme.breakpoints.tablet} {
    width: 100%;
    &:nth-child(even) {
      padding-top: 0;
    }
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    margin: 0.5rem 3rem;
    &:nth-child(even) {
      padding-top: 0;
    }
  }
`

const BoxImage = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.9);
  &:hover .img-project {
    transform: scale(1);
  }
`

const ProjectTitle = styled.h1`
  font-size: 5rem;
  font-family: ${props => props.theme.fonts.oswald};
  position: absolute;
  top: 10%;
  left: -2rem;
  z-index: 2;
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
  const { state } = useContext(Context)

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
          <ProjectCard>
            <Line />
            <Link
              to="/"
              style={{
                width: " 100% ",
              }}
            >
              <ProjectTitle className="project-title">
                {film.title}
              </ProjectTitle>
              <BoxImage>
                <Img
                  className="img-project"
                  fluid={film.imageCover.node.childImageSharp.fluid}
                />
              </BoxImage>
            </Link>
          </ProjectCard>
        )
      })}
    </div>
  )
}

export default ProjectsGallery
