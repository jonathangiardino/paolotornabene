import React from "react"

const Embed = ({ videoId }) => {
  return (
    <div style={{ width: "50%" }}>
      <div>
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?color=ffffff&title=0&byline=0&portrait=0`}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  )
}

export default Embed
