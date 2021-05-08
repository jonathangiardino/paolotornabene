import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProjectCardContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  position: relative;
  @media ${props => props.theme.breakpoints.medium} {
    width: 100%;
    margin: 2rem 0;
  }
  @media ${props => props.theme.breakpoints.large} {
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.xlarge} {
    margin: 2rem auto;
  }
`

const BoxImage = styled.div`
  @media ${props => props.theme.breakpoints.mobile} {
    height: 200px;
  }

  position: relative;
  overflow: hidden;
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
  width: 85%;
  opacity: 0;
  line-height: 1.2;
  font-size: ${props => props.theme.fontSize.small};
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
    font-size: ${props => props.theme.fontSize.bigTitle};
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
