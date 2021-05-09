import React, { useRef, useEffect } from "react"
import styled from "styled-components"

import { motion } from "framer-motion"

const VideoContainer = styled(motion.div)`
  display: none;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  z-index: 1;
  opacity: 0.5;
  @media ${props => props.theme.breakpoints.tablet} {
    display: block;
    width: 25rem;
    top: unset;
  }
  @media ${props => props.theme.breakpoints.medium} {
    display: block;
    width: 50rem;
  }
`
const VideoSource = styled.video`
  width: 100%;
  pointer-events: none;
  &::-webkit-media-controls-panel {
    display: none !important;
    -webkit-appearance: none;
  }

  /* Old shadow dom for play button */

  &::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }

  /* New shadow dom for play button */

  /* This one works! */

  &::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
  }
`

const BackgroundVideo = ({ source }) => {
  const videoRef = useRef()

  useEffect(() => {
    videoRef.current.play()
  }, [])

  return (
    <VideoContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
    >
      <VideoSource
        ref={videoRef}
        playsinline
        webkit-playsinline
        autoPlay
        muted
        loop
        controls="false"
      >
        <source src={source} type="video/mp4" />
        Your browser does not support HTML5 video.
      </VideoSource>
    </VideoContainer>
  )
}

export default BackgroundVideo
