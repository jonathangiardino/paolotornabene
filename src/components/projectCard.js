import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Link from "Gatsby"

const ProjectCardContainer = styled.div`
  width: 80%;
  margin: 3rem;
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
    right: -0.5rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: ${props => props.theme.fontSize.smallTitle};
  }
`

const ProjectButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -2rem;
  right: -1rem;
  z-index: 3;
  width: 16rem;
  height: 5rem;
  font-size: 2rem;
  font-family: ${props => props.theme.fonts.oswald};
  background-color: ${props => props.theme.colors.yellow};
  color: #0a0a0f;
  border: none;
  cursor: pointer;
  @media ${props => props.theme.breakpoints.tablet} {
    width: 12rem;
    height: 4rem;
    font-size: 1.5rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 12rem;
    height: 4rem;
    font-size: 1.5rem;
  }
`

const HoveringArrow = styled.span`
  position: absolute;
  opacity: 0;
  transition: 0.2s all ease-out;
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
        <ProjectTitle className="project-title">{title}</ProjectTitle>
        <BoxImage>
          <Img className="img-project" fluid={imageSrc} />
        </BoxImage>
      </Link>
      <Link to="/">
        {" "}
        <ProjectButton className="projectButton">
          SEE MORE{" "}
          <HoveringArrow className="hoveringArrow">&#8594;</HoveringArrow>
        </ProjectButton>
      </Link>
    </ProjectCardContainer>
  )
}

export default ProjectCard
