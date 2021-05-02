import React from "react"
import styled from "styled-components"

const VideoContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Video = ({ vimeoId, title }) => {
  return (
    <VideoContainer>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          title={title}
        ></iframe>
      </div>
    </VideoContainer>
  )
}

export default Video
