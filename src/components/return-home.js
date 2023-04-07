import { useEffect } from "react"
import { navigate } from "gatsby"

const HomeShortcut = () => {
  useEffect(() => {
    const handleKeyPress = e => {
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
