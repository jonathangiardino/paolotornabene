import React from "react"
import styled from "styled-components"

const VideoContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  opacity: 0.5;
  @media ${props => props.theme.breakpoints.mobile} {
    top: 0;
  }
`
const VideoSource = styled.video`
  width: 55%;
  @media ${props => props.theme.breakpoints.large} {
    width: 40%;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    width: 60%;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`

const BackgroundVideo = ({ source }) => {
  return (
    <VideoContainer>
      <VideoSource autoPlay muted loop>
        <source src={source} type="video/mp4" />
        Your browser does not support HTML5 video.
      </VideoSource>
    </VideoContainer>
  )
}

export default BackgroundVideo
