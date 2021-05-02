import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { navigate } from "@reach/router"

import { motion } from "framer-motion"

import Layout from "../components/layout"
import Video from "../components/video"

const FilmPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
`
const ProjectWrapper = styled.div`
  padding: 10rem 0 0 0;
  width: 90%;
  @media ${props => props.theme.breakpoints.tablet} {
    width: 80%;
  }
  @media ${props => props.theme.breakpoints.large} {
    width: 60%;
  }
`

const Title = styled(motion.h1)`
  font-family: "Oswald";
  font-size: 4.5rem;
  line-height: 120%;
  font-weight: normal;
  text-transform: uppercase;
  padding: ${props => props.theme.spacing.small} 0 0;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 3.5rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 3rem;
  }
`

const BackLink = styled(motion.a)`
  font-family: "Oswald";
  text-transform: uppercase;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 2rem;
  cursor: pointer;
  position: relative;
  z-index: 6;
`
const TagWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`
const Tag = styled.h3`
  font-family: "Oswald";
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
  const goBack = () => {
    navigate(-1)
  }

  const { film } = data.gcms
  return (
    <Layout>
      <FilmPageWrapper>
        <ProjectWrapper>
          <BackLink
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
            onClick={goBack}
          >
            &#8592; Back
          </BackLink>

          <Title
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "linear", delay: 0.3 }}
          >
            {film.title}
          </Title>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "linear", delay: 0.4 }}
          >
            {film.vimeoId && (
              <Video title={film.title} vimeoId={film.vimeoId} />
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "linear", delay: 0.5 }}
          >
            <TagWrapper>
              {film.tags.map(tag => (
                <Tag>#{tag} </Tag>
              ))}
            </TagWrapper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "linear", delay: 0.6 }}
          >
            {film.description && (
              <Description
                dangerouslySetInnerHTML={{ __html: film.description.html }}
              ></Description>
            )}
          </motion.div>
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
        vimeoId
        id
        title
        tags
        description {
          html
        }
      }
    }
  }
`
