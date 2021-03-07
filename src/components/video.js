import React from "react"
import styled from "styled-components"

const VideoContainer = styled.video`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Video = ({ videoFile }) => (
  <VideoContainer
    playsinline
    webkit-playsinline
    muted
    loop
    controls
    controlsList="nodownload"
    autobuffer
    preload="auto"
  >
    <source src={videoFile} type="video/quicktime" />
    <source src={videoFile} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2' />
  </VideoContainer>
)

export default Video
