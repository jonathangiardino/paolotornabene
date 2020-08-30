import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Video from "../components/video"

const FilmPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20%;
`
const ProjectWrapper = styled.div`
  padding: 10rem 0 0 0;
  width: 60%;
`

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.oswald};
  font-size: 4.5rem;
  line-height: 120%;
  font-weight: normal;
  text-transform: uppercase;
  padding: ${props => props.theme.spacing.small} 0 0;
`

const BackLink = styled(Link)`
  font-family: ${props => props.theme.fonts.oswald};
  text-transform: uppercase;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 2rem;
`
const TagWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`
const Tag = styled.h3`
  font-family: ${props => props.theme.fonts.oswald};
  color: ${props => props.theme.colors.yellow};
  text-transform: uppercase;
  display: inline;
`
const Description = styled.p`
  width: 100%;
  padding-bottom: 2rem;
  margin: 0 auto;
`

const Film = ({ data }) => {
  const { film } = data.gcms
  return (
    <Layout>
      <FilmPageWrapper>
        <ProjectWrapper>
          <BackLink to="/">&#8592; Back</BackLink>

          <Title>
            {film.title} | {film.date}
          </Title>

          {film.videoFile.url && <Video videoFile={film.videoFile.url} />}

          <TagWrapper>
            {film.tags.map(tag => (
              <Tag>#{tag} </Tag>
            ))}
          </TagWrapper>

          {film.description && (
            <Description
              dangerouslySetInnerHTML={{ __html: film.description.html }}
            ></Description>
          )}

          <Img fluid={data.rectangle.childImageSharp.fluid} />
        </ProjectWrapper>
      </FilmPageWrapper>
    </Layout>
  )
}

export default Film

export const query = graphql`
  query FilmAndImage($id: ID!) {
    gcms {
      film(where: { id: $id }) {
        videoFile {
          url
        }
        id
        title
        tags
        date
        description {
          html
        }
      }
    }
    rectangle: file(relativePath: { eq: "rectangle.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
