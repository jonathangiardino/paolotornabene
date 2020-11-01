import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const LeftPanelContainer = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 50vw;
  background-color: red;
  left: 0;
  z-index: 10;
`

const RightPanelContainer = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 50vw;
  background-color: pink;
  right: 0;
  z-index: 10;
`

const LeftPanel = () => {
  return (
    <LeftPanelContainer
      initial={{ height: 0 }}
      animate={{
        height: [0, window.innerHeight, 0],
        bottom: [null, 0, 0],
        transition={ duration: 2, times: [0, 0.5, 1] }
      }}
      exit={{
        height: [0, window.innerHeight, 0],
        top: [null, 0, 0],
      }}
    ></LeftPanelContainer>
  )
}

const RightPanel = () => {
  return (
    <RightPanelContainer
      initial={{ height: 0 }}
      animate={{
        height: [0, window.innerHeight, 0],
        bottom: [0, 0, window.innerHeight],
        transition={ duration: 2, times: [0, 0.5, 1] }
      }}
      exit={{
        height: [0, window.innerHeight, 0],
        bottom: [null, 0, 0],
      }}
    ></RightPanelContainer>
  )
}

export { LeftPanel, RightPanel }
