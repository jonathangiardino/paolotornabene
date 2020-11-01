import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProjectCardContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  position: relative;
  @media ${props => props.theme.breakpoints.tablet} {
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    margin: 1rem 0;
  }
`

const BoxImage = styled.div`
  height: 300px;
  position: relative;
  overflow: hidden;
  &:hover .img-project {
    transform: scale(1);
  }
  &:hover .project-title {
    opacity: 1;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    height: 160px;
  }
`

const ProjectTitle = styled.h1`
  opacity: 0;
  line-height: 1.2;
  font-size: 2rem;
  font-family: "Oswald";
  text-align: center;
  text-transform: uppercase;
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

const ProjectCard = ({ title, imageSrc, path, date }) => {
  return (
    <ProjectCardContainer>
      <Link
        to={`/films/${path}`}
        style={{
          width: " 100% ",
        }}
      >
        <BoxImage>
          <ProjectTitle className="project-title">
            {title} | {date}
          </ProjectTitle>

          <Img className="img-project" fluid={imageSrc} />
        </BoxImage>
      </Link>
    </ProjectCardContainer>
  )
}

export default ProjectCard
