import { useState, useEffect } from "react"

function FullScreenToggle() {
  const [isFullScreen, setIsFullScreen] = useState(!!document.fullscreenElement)

  useEffect(() => {
    const toggleFullScreen = () => {
      if (!isFullScreen) {
        document.documentElement.requestFullscreen().then(() => {
          setIsFullScreen(true)
        })
      } else {
        document.exitFullscreen().then(() => {
          setIsFullScreen(false)
        })
      }
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
