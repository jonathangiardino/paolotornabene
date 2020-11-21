import React from "react"
import styled from "styled-components"

import { motion } from "framer-motion"

const VideoContainer = styled(motion.div)`
  display: none;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  opacity: 0.5;
  @media ${props => props.theme.breakpoints.tablet} {
    display: block;
    width: 25rem;
  }
  @media ${props => props.theme.breakpoints.medium} {
    display: block;
    width: 37.5rem;
  }
  @media ${props => props.theme.breakpoints.xlarge} {
    display: block;
    width: 50rem;
  }
`
const VideoSource = styled.video`
  width: 100%;
`

const BackgroundVideo = ({ source }) => {
  return (
    <VideoContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 0.3, delay: 0.6, ease: "linear" }}
    >
      <VideoSource playsinline webkit-playsinline autoPlay muted loop>
        <source src={source} type="video/mp4" />
        Your browser does not support HTML5 video.
      </VideoSource>
    </VideoContainer>
  )
}

export default BackgroundVideo
