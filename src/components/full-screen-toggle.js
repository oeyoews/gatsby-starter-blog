// import * as React from "react"

import { useState, useEffect } from "react"

function FullScreenToggle() {
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    const toggleFullScreen = () => {
      if (!isFullScreen) {
        document.documentElement.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
      setIsFullScreen(!isFullScreen)
    }

    const handleKeyDown = event => {
      if (event.key === "f") {
        toggleFullScreen()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isFullScreen])

  return null
}

export default FullScreenToggle
