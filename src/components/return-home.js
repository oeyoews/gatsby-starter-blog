import { useEffect } from "react"
import { navigate } from "gatsby"

const HomeShortcut = () => {
  useEffect(() => {
    const handleKeyPress = e => {
      // remove that?
      if (e.key === "h" && typeof document !== "undefined") {
        navigate("/")
      }
    }
    if (typeof document !== "undefined") {
      document.addEventListener("keydown", handleKeyPress)
    }
    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("keydown", handleKeyPress)
      }
    }
  }, [])

  return null
}

export default HomeShortcut
