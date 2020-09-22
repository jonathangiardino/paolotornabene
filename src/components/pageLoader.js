import React from "react"
import styled from "styled-components"

const FullPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.colors.yellow};
  position: fixed;
  z-index: 10;
  overflow: hidden;
  animation: slideUp 1.3s ease-in-out;
  animation-iteration-count: 1;

  @keyframes slideUp {
    0% {
      width: 100vw;
      transform: X(0);
    }
    25% {
      width: 100vw;
      transform: X(0);
    }
    50% {
      width: 100vw;
      transform: X(0);
    }
    100% {
      width: 0;
      transform: X(-100%);
    }
  }
`

const PageLoader = () => {
  return <FullPageWrapper></FullPageWrapper>
}

export default PageLoader
