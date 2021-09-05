import React, { useState } from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { navigate } from "@reach/router"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
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
  color: ${props => props.theme.colors.yellow};
  text-transform: lowercase;
  display: inline;
`
const Description = styled.p`
  width: 100%;
  padding-bottom: 2rem;
  margin: 0 auto;
`

const StillsContainer = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: row;
  }
`

const Still = styled(motion.div)`
  width: 100vw;
  max-width: 100%;
  height: auto;
  cursor: pointer;
  transition: border 0.5s ease-in-out;
  margin-bottom: 2rem;
  pointer-events: none;
  border: 4px solid ${props => props.theme.background.dark};
  @media ${props => props.theme.breakpoints.tablet} {
    pointer-events: all;
    flex: 1;
    height: auto;
    margin-bottom: 0;
    &:hover {
      border: 4px solid ${props => props.theme.colors.yellow};
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const StillZoomedContainer = styled(motion.div)`
  position: fixed;
  z-index: 10;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.background.dark};
`

const StillZoomed = styled(motion.div)`
  width: 100vw;
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;
  border: 4px solid ${props => props.theme.colors.yellow};

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Close = styled.div`
  margin-left: 2rem;
  font-size: 1rem;
`

const Film = ({ data }) => {
  const [zoomedIn, setZoomedIn] = useState(false)
  const [selected, setSelected] = useState(0)

  const { film } = data.gcms
  const { stills } = film

  console.log(data.gcms)

  const goBack = () => {
    navigate(-1)
  }

  const handleZoomIn = index => {
    setSelected(index)
    setZoomedIn(true)
  }

  const handleZoomOut = e => {
    setZoomedIn(false)
  }

  return (
    <Layout>
      <AnimateSharedLayout type="switch">
        <FilmPageWrapper>
          <ProjectWrapper>
            <BackLink
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={goBack}
            >
              &#8592; Back
            </BackLink>

            <Title
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            >
              {film.title}
            </Title>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
            >
              {film.vimeoId && (
                <Video title={film.title} vimeoId={film.vimeoId} />
              )}
            </motion.div>
            {stills.length > 0 ? (
              <StillsContainer>
                {stills.map((s, i) => {
                  return (
                    <Still
                      onClick={() => handleZoomIn(i)}
                      key={i}
                      layout
                      layoutId={s.title.split(" ").join("-")}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                    >
                      <Img
                        fluid={s.imageAsset.node.childImageSharp.fluid}
                        alt={s.title}
                      />
                    </Still>
                  )
                })}
                <AnimatePresence>
                  {zoomedIn && (
                    <StillZoomedContainer
                      initial={{ backgroundColor: "transparent" }}
                      animate={{
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      exit={{ backgroundColor: "transparent" }}
                    >
                      <Close onClick={handleZoomOut}>
                        <BackLink
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          exit={{ opacity: 0, y: 30 }}
                        >
                          Close
                        </BackLink>
                      </Close>

                      <StillZoomed
                        key={selected}
                        layout
                        layoutId={stills[selected].title.split(" ").join("-")}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                      >
                        <Img
                          fluid={
                            stills[selected].imageAsset.node.childImageSharp
                              .fluid
                          }
                          alt={stills[selected].title}
                        />
                      </StillZoomed>
                    </StillZoomedContainer>
                  )}
                </AnimatePresence>
              </StillsContainer>
            ) : null}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
            >
              <TagWrapper>
                {film.tags.map(tag => (
                  <Tag id={tag}>#{tag} </Tag>
                ))}
              </TagWrapper>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
            >
              {film.description && (
                <Description
                  dangerouslySetInnerHTML={{ __html: film.description.html }}
                ></Description>
              )}
            </motion.div>
          </ProjectWrapper>
        </FilmPageWrapper>
      </AnimateSharedLayout>
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
        stills {
          title
          imageAsset {
            url
            node {
              childImageSharp {
                fluid(maxWidth: 1280) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
