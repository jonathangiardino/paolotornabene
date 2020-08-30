import React from "react"
import styled from "styled-components"

const VideoContainer = styled.video`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const Video = ({ videoFile }) => (
  <VideoContainer autoPlay muted loop controls controlsList="nodownload">
    <source src={videoFile} type="video/mp4" />
  </VideoContainer>
)

export default Video
