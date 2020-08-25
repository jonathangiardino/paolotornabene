import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProjectCardContainer = styled.div`
  width: 30%;
  margin: 1rem;
  position: relative;

  @media ${props => props.theme.breakpoints.tablet} {
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    margin: 2rem 3rem;
  }
`

const BoxImage = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  &:hover .img-project {
    transform: scale(1);
  }
  &:hover .project-title {
    opacity: 1;
  }
`

const ProjectTitle = styled.h1`
  opacity: 0;
  line-height: 1.2;
  font-size: 2rem;
  font-family: ${props => props.theme.fonts.oswald};
  text-align: center;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 0;
  transition: all 0.2s ease-in-out;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: ${props => props.theme.fontSize.title};
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: ${props => props.theme.fontSize.smallTitle};
  }
`

const ProjectCard = ({ title, imageSrc, path }) => {
  return (
    <ProjectCardContainer>
      <Link
        to="/"
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
