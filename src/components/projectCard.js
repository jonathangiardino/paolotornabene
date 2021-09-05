import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProjectCardContainer = styled.div`
  width: 48%;
  position: relative;
  @media ${props => props.theme.breakpoints.medium} {
    margin: unset;
  }
`

const BoxImage = styled.div`
  position: relative;
  &:hover .img-project {
    transform: scale(1);
  }
  &:hover .project-title {
    opacity: 1;
  }

  img {
    object-fit: cover;
    object-position: center center;
  }
`

const ProjectTitle = styled.h1`
  width: 100%;
  opacity: 0;
  line-height: 1.2;
  padding: 1rem;
  font-size: ${props => props.theme.fontSize.xsmall};
  font-family: "Oswald";
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 0;
  transition: all 0.2s ease-in-out;
  color: white;
  mix-blend-mode: difference;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: ${props => props.theme.fontSize.small};
  }
`

const ProjectCard = ({ title, imageSrc, path }) => {
  return (
    <ProjectCardContainer>
      <Link
        to={`/films/${path}`}
        style={{
          width: " 100% ",
        }}
      >
        <BoxImage>
          <ProjectTitle className="project-title">{title}</ProjectTitle>
          <Img className="img-project" fluid={imageSrc} />
        </BoxImage>
      </Link>
    </ProjectCardContainer>
  )
}

export default ProjectCard
