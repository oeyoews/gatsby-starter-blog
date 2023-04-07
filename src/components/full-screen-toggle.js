import { useState, useEffect } from "react"

function FullScreenToggle() {
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    const toggleFullScreen = () => {
      if (
        !isFullScreen &&
        typeof document !== "undefined" &&
        !document.fullscreenElement
      ) {
        document.documentElement.requestFullscreen().then(() => {
          setIsFullScreen(true)
        })
      } else if (
        typeof document !== "undefined" &&
        document.fullscreenElement
      ) {
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
